import { ActionReducerMap, createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

import * as fromProducts from '../reducers/products.reducer';
import {ProductState} from '../reducers/products.reducer';

export interface ShopState {
  products: fromProducts.ProductState;
}

export const reducers: ActionReducerMap<ShopState> = {
  products: fromProducts.reducer
};

export const getShopState: MemoizedSelector<object, ShopState> = createFeatureSelector<ShopState>('shop');

export const getProductsState: MemoizedSelector<object, ProductState> = createSelector(
  getShopState,
  (state: ShopState) => {

      return state.products;
    }
);
