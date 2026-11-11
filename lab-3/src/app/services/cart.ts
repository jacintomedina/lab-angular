import { Service } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../model/cart-item.model.ts/cart-item.model.ts';

@Service()
export class Cart {
    private _items$ = new BehaviorSubject<CartItem[]>([])
}
