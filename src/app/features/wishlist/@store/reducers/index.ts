import {ActionReducerMap} from '@ngrx/store';

import * as fromWishlist from './wishlist.reducers';

export interface WhishListGeneralState {
  wishlist: fromWishlist.WishlistState;
}

export const reducers: ActionReducerMap<WhishListGeneralState> = {
    wishlist: fromWishlist.reducer
};
