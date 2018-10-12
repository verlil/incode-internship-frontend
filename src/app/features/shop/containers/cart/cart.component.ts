import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import * as fromStore from '../../@store';
import { CartItem } from '../../../../shared/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems$: Observable<CartItem[]>;
  totalQuantity$: Observable<number>;
  totalSum$: Observable<number>;

  constructor(private store: Store<fromStore.ShopState>) {
  }

  ngOnInit(): void {
    this.cartItems$ = this.store.pipe(select(fromStore.getCartItems));
    this.totalQuantity$ = this.store.pipe(select(fromStore.getCartTotalQuantity));
    this.totalSum$ = this.store.pipe(select(fromStore.getCartTotalSum));
  }

  onItemQuantityChanged(cartItem: CartItem): void {
    this.store.dispatch(new fromStore.UpdateCartItem(cartItem));
  }
}
