import { Action } from '@ngrx/store';
import { Product } from '../../../../shared/models/product';
import { CartItem } from '../../../../shared/models/cart-item';

export const ADD_PRODUCT_TO_CART: string = '[Shop] Add Product To Cart';
export const UPDATE_CART_ITEM: string = '[Shop] Update Item In Cart';

export class AddToCart implements Action {
  readonly type: string = ADD_PRODUCT_TO_CART;

  constructor(public payload: {product: Product, quantity: number}) {
  }
}

export class UpdateCartItem implements Action {
  readonly type: string = UPDATE_CART_ITEM;

  constructor(public payload: CartItem) {
  }
}

// action types
export type CartAction = AddToCart | UpdateCartItem;
