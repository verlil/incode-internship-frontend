import { createSelector } from '@ngrx/store';
import * as fromWishlist from '../reducers/wishlist.reducers';
import { getWishlistState } from '../reducers';

export const getWishlist: any = createSelector(getWishlistState, fromWishlist.getWishlist);
export const getWishlistLoaded: any = createSelector(getWishlistState, fromWishlist.getWishlistLoaded);
export const getWishlistLoading: any = createSelector(getWishlistState, fromWishlist.getWishlistLoading);
