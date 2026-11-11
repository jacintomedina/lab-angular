import { Component, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Users } from '../../services/users';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  EMPTY,
  filter,
  map,
  startWith,
  Subscription,
  switchMap,
  tap,
} from 'rxjs';
import { UserModel } from '../../model/index.model';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-user-list',
  styleUrl: './user-list.css',
  templateUrl: './user-list.html',
})
export class UserList implements OnInit, OnDestroy {
  users = signal<UserModel[]>([]);
  errorMessage = signal<string>('');

  filterControl = new FormControl('', { nonNullable: true });

  sub!: Subscription;

  private usersService = inject(Users);

  ngOnInit(): void {
    this.sub = this.filterControl.valueChanges
      .pipe(
        startWith(''),
        debounceTime(300),
        map((term) => term.trim()),
        filter((term) => term.length >= 3 || term === ''),
        distinctUntilChanged(),
        tap((term) => console.log('Debounced: ', term)),
        switchMap((term) =>
          this.usersService.search(term).pipe(
            catchError((err) => {
              this.errorMessage.set(err);
              return EMPTY;
            }),
          ),
        ),
      )
      .subscribe((users) => this.users.set(users));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
