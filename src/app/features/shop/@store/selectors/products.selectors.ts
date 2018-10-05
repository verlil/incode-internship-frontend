import {createSelector, MemoizedSelector} from '@ngrx/store';
import * as fromProducts from '../reducers/products.reducer';
import { getProductsState } from '../reducers';

export const getAllProducts: MemoizedSelector<object, {}> = createSelector(getProductsState, fromProducts.getProducts);
export const getProductsEntities: MemoizedSelector<object, {}> = createSelector(getProductsState, fromProducts.getProductsEntities);
export const getProductsLoaded: MemoizedSelector<object, {}> = createSelector(getProductsState, fromProducts.getProductsLoaded);
export const getProductsLoading: MemoizedSelector<object, {}> = createSelector(getProductsState, fromProducts.getProductsLoading);
