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
  entities$: Observable<{}>;
  totalQuantity$: Observable<number>;
  totalSum$: Observable<number>;

  cartItems: CartItem[] = [];

  constructor(private store: Store<fromStore.ShopState>) {
  }

  ngOnInit(): void {
    this.entities$ = this.store.pipe(select(fromStore.getCartEntities));
    this.totalQuantity$ = this.store.pipe(select(fromStore.getCartTotalQuantity));
    this.totalSum$ = this.store.pipe(select(fromStore.getCartTotalSum));

    this.entities$.subscribe(
      (entities: object) => {
        this.cartItems = [];
        Object.keys(entities).map((key: string) => {
          this.cartItems.push(entities[key]);
        });
      }
    );

  }

  onItemQuantityChanged(cartItem: CartItem): void {
    this.store.dispatch(new fromStore.UpdateCartItem(cartItem));
  }
}
