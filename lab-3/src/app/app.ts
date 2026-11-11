import { Component, inject, signal } from '@angular/core';
import { Cart } from './services/cart';
import { AsyncPipe } from '@angular/common';

@Component({
  imports: [AsyncPipe],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('lab-3');

  cart = inject(Cart);
  items$ = this.cart.items$;
  totalCount$ = this.cart.totalCount$;
  totalPrice$ = this.cart.totalPrice$;

  constructor() {

    this.cart.addItem({ id: 'a', name: 'Camiseta', price: 10, quantity: 2 });
    this.cart.addItem({ id: 'b', name: 'Gorra', price: 5, quantity: 1 });
    this.cart.addItem({ id: 'a', name: 'Camiseta', price: 10, quantity: 1 });
    // this.cart.removeItem('b');
    // this.cart.clear();
  }
}
