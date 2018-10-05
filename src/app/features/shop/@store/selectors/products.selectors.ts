import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

import { ShopState } from '../reducers';
import * as fromProducts from '../reducers/products.reducer';

export const getShopState: MemoizedSelector<object, ShopState> = createFeatureSelector<ShopState>('shop');
export const getProductsState: MemoizedSelector<object, fromProducts.ProductState> = createSelector(
  getShopState,
  (state: ShopState) => {

    return state.products;
  }
);

export const getAllProducts: MemoizedSelector<object, {}> = createSelector(getProductsState, fromProducts.getProducts);
export const getProductsEntities: MemoizedSelector<object, {}> = createSelector(getProductsState, fromProducts.getProductsEntities);
export const getProductsLoaded: MemoizedSelector<object, {}> = createSelector(getProductsState, fromProducts.getProductsLoaded);
export const getProductsLoading: MemoizedSelector<object, {}> = createSelector(getProductsState, fromProducts.getProductsLoading);
