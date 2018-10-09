import { ActionReducerMap } from '@ngrx/store';

import * as fromProducts from '../reducers/products.reducer';
import * as fromCategories from '../reducers/categories.reducer';

export interface ShopState {
  products: fromProducts.ProductState;
  categories: fromCategories.CategoriesState;
}

export const reducers: ActionReducerMap<ShopState> = {
  products: fromProducts.reducer,
  categories: fromCategories.reducer
};
