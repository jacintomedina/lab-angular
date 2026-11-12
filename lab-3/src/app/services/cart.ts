import { Service } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { CartItem } from '../model/cart-item.model.js';

@Service()
export class Cart {
  private _items$ = new BehaviorSubject<CartItem[]>([]);

  readonly items$: Observable<CartItem[]> = this._items$.asObservable();

  readonly totalCount$: Observable<number> = this.items$.pipe(
    map((items) => items.reduce((total, item) => total + item.quantity, 0)),
  );

  readonly totalPrice$: Observable<number> = this.items$.pipe(
    map((items) => items.reduce((total, item) => total + item.quantity * item.price, 0)),
  );

  addItem(item: CartItem) {
    const items = this._items$.value;
    const existing = items.find((i) => i.id === item.id);

    if (existing) {
      this._items$.next(
        items.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i)),
      );
    } else {
      this._items$.next([...items, item]);
    }
  }

  removeItem(id: string) {
    this._items$.next(this._items$.value.filter((item) => item.id !== id));
  }

  clear(): void {
    this._items$.next([]);
  }
}
