import { createSelector } from '@ngrx/store';
import * as fromWishlistReducers from '../reducers/wishlist.reducers';
import * as fromWishlistReducersIndex from '../reducers';

export const getWishlistState: any = createSelector(
  fromWishlistReducersIndex.getWhishListFeatureState,
  (state: fromWishlistReducersIndex.WhishListFeatureState) => {
    return state.wishlist;
    }
);

export const getWishlist: any = createSelector(getWishlistState, fromWishlistReducers.getWishlist);
export const getWishlistLoaded: any = createSelector(getWishlistState, fromWishlistReducers.getWishlistLoaded);
export const getWishlistLoading: any = createSelector(getWishlistState, fromWishlistReducers.getWishlistLoading);
