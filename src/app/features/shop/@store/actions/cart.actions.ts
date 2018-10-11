import { Action } from '@ngrx/store';
import { Product } from '../../../../shared/models/product';

export const ADD_PRODUCT_TO_CART: string = '[Shop] Add Product To Cart';

export class AddToCart implements Action {
  readonly type: string = ADD_PRODUCT_TO_CART;

  constructor(public payload: {product: Product, quantity: number}) {
  }
}

// action types
export type CartAction = AddToCart ;
