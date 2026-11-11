import { Component, OnInit, signal } from '@angular/core';
import { concatMap, delay, map, of, range } from 'rxjs';
import { OperatorsComponent } from './components/operators.component/operators.component';

@Component({
  imports: [OperatorsComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

}
