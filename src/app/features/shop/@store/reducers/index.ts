import { ActionReducerMap } from '@ngrx/store';

import * as fromProducts from '../reducers/products.reducer';

export interface ShopState {
  products: fromProducts.ProductState;
}

export const reducers: ActionReducerMap<ShopState> = {
  products: fromProducts.reducer
};
