import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';

import * as fromWishlist from './wishlist.reducers';

export interface WhishListFeatureState {
  wishlist: fromWishlist.WishlistState;
}

export const reducers: ActionReducerMap<WhishListFeatureState> = {
    wishlist: fromWishlist.reducer
};

export const getWhishListFeatureState: any = createFeatureSelector<WhishListFeatureState>('wishlist');
