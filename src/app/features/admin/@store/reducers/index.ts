import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromProducts from './products.reducer';
import * as fromCategories from './categories.reducer';

export interface AdminState {
  products: fromProducts.ProductState;
  categories: fromCategories.CategoryState;
}

export const reducers: ActionReducerMap<AdminState> = {
  products: fromProducts.reducer,
  categories: fromCategories.reducer,
};

export const getProductsState: any = createFeatureSelector<AdminState>(
  'AdminReducer'
);
