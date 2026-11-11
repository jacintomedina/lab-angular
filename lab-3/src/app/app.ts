import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cart } from './services/cart';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('lab-3');
}
