import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromWishlist from './wishlist.reducers';

export interface WhishListGeneralState {
  wishlist: fromWishlist.WishlistState;
}

export const reducers: ActionReducerMap<WhishListGeneralState> = {
    wishlist: fromWishlist.reducer
};

export const getWhishListGeneralState: any = createFeatureSelector<WhishListGeneralState>('wishlist');

export const getWishlistState: any = createSelector(
  getWhishListGeneralState,
  (state: WhishListGeneralState) => {
    return state.wishlist;
    }
);
