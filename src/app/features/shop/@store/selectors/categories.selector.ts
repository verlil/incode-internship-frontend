import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

import { ShopState } from '../reducers';
import * as fromCategories from '../reducers/categories.reducer';
import { Category } from '../../../../shared/models/category';

const getShopState: MemoizedSelector<object, ShopState> = createFeatureSelector<ShopState>('shop');
export const getCategoriesState: MemoizedSelector<object, fromCategories.CategoriesState> = createSelector(
  getShopState,
  (state: ShopState) => {

    return state.categories;
  }
);

export const getAllCategories: MemoizedSelector<object, Category[]> = createSelector(getCategoriesState, fromCategories.getCategories);
export const getCategoriesEntities: MemoizedSelector<object, {}> = createSelector(getCategoriesState, fromCategories.getCategoriesEntities);
export const getCategoriesLoaded: MemoizedSelector<object, {}> = createSelector(getCategoriesState, fromCategories.getCategoriesLoaded);
export const getCategoriesLoading: MemoizedSelector<object, {}> = createSelector(getCategoriesState, fromCategories.getCategoriesLoading);
