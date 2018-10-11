import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

import { ShopState } from '../reducers';
import * as fromProducts from '../reducers/products.reducer';
import * as fromRoot from '../../../../@store';
import { Product } from '../../../../shared/models/product';
import { Filter } from '../../models/filter';

const getShopState: MemoizedSelector<object, ShopState> = createFeatureSelector<ShopState>('shop');
export const getProductsState: MemoizedSelector<object, fromProducts.ProductState> = createSelector(
  getShopState,
  (state: ShopState) => {

    return state.products;
  }
);

export const getAllProducts: MemoizedSelector<object, Product[]> = createSelector(getProductsState, fromProducts.getProducts);
export const getFilters: MemoizedSelector<object, Filter> = createSelector(getProductsState, fromProducts.getFilters);
export const getProductsEntities: MemoizedSelector<object, {}> = createSelector(getProductsState, fromProducts.getProductsEntities);
export const getProductsLoaded: MemoizedSelector<object, {}> = createSelector(getProductsState, fromProducts.getProductsLoaded);
export const getProductsLoading: MemoizedSelector<object, {}> = createSelector(getProductsState, fromProducts.getProductsLoading);
export const getViewMode: MemoizedSelector<object, string> = createSelector(getProductsState, fromProducts.getViewMode);

export const getSelectedProduct: MemoizedSelector<object, Product> = createSelector(
  getProductsEntities,
  fromRoot.getRouterState,
  (entities: {[id: string]: Product}, router: any): Product => {
    return entities[router.state.params.id];
  }
);
