import { Action } from '@ngrx/store';

import { Product } from '../../../../shared/models/product.model';

// add product
export const ADD_PRODUCT: string = '[Products] Create Product';
export const ADD_PRODUCT_FAIL: string = '[Products] Create Product Fail';
export const ADD_PRODUCT_SUCCESS: string = '[Products] Create Product Success';

export class AddProduct implements Action {
  readonly type: string = ADD_PRODUCT;
  constructor(public payload: Product) {}
}

export class AddProductFail implements Action {
  readonly type: string = ADD_PRODUCT_FAIL;
  constructor(public payload: any) {}
}

export class AddProductSuccess implements Action {
  readonly type: string = ADD_PRODUCT_SUCCESS;
  constructor(public payload: Product) {}
}

export type ProductsAction =  | AddProduct | AddProductFail | AddProductSuccess;
