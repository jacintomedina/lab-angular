import { inject, Service } from '@angular/core';
import { UserModel } from '../model/index.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Service()
export class Users {
  private http = inject(HttpClient);

  search(term: string): Observable<UserModel[]> {
    return this.http.get<UserModel[]>('https://jsonplaceholder.typicode.com/users', {
      params: { name_like: term },
    });
  }
}
