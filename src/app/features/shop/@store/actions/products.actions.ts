import { Action } from '@ngrx/store';
import { Product } from '../../../../shared/models/product';
import { Filter } from '../../models/filter';

// load products
export const LOAD_PRODUCTS: string = '[Shop] Load Products';
export const LOAD_PRODUCTS_FAIL: string = '[Shop] Load Products Fail';
export const LOAD_PRODUCTS_SUCCESS: string = '[Shop] Load Products Success';

export class LoadProducts implements Action {
  readonly type: string = LOAD_PRODUCTS;

  constructor(public payload?: Filter) {
  }
}

export class LoadProductsFail implements Action {
  readonly type: string = LOAD_PRODUCTS_FAIL;

  constructor(public payload: any) {
  }
}

export class LoadProductsSuccess implements Action {
  readonly type: string = LOAD_PRODUCTS_SUCCESS;

  constructor(public payload: {products: Product[], entities: {[key: string]: Product}, filters: Filter}) {
  }
}

// action types
export type ProductsAction = LoadProducts | LoadProductsFail | LoadProductsSuccess ;
