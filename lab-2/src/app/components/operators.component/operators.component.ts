import { Component } from '@angular/core';
import { concatMap, delay, exhaustMap, mergeMap, of, range, Subscription, switchMap } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-operators',
  styleUrl: './operators.component.css',
  templateUrl: './operators.component.html',
})
export class OperatorsComponent {

  private randomDelay() {
    return Math.floor(Math.random() * 1000) + 500;
  }

  onConcatMap(): void {
    range(1,5).pipe(
      concatMap(i => of(i).pipe(
        delay(this.randomDelay())
      ))
    ).subscribe((i) => console.log("concatMap: ", i))
  }


  onMergeMap():void {
    range(1,5).pipe(
      mergeMap(i => of(i).pipe(
        delay(this.randomDelay())
      ))
    ).subscribe((i) => console.log("mergeMap: ", i))
  }

  onSwitchMap():void {
    range(1,5).pipe(
      switchMap(i => of(i).pipe(
        delay(this.randomDelay())
      ))
    ).subscribe((i) => console.log("switchMap: ", i))
  }

  onExhaustMap():void {
    range(1,5).pipe(
      exhaustMap(i => of(i).pipe(
        delay(this.randomDelay())
      ))
    ).subscribe((i) => console.log("exhaustMap: ", i))
  }

  reset(): void {
    return console.clear()
  }
}
