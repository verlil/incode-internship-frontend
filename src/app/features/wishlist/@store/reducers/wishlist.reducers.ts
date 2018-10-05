import * as fromWishlist from '../actions/wishlist.action';
import { WishList } from '../../models/wishlist';

export interface WishlistState {
  wishlist: WishList;
  loaded: boolean;
  loading: boolean;
}

export const initialState: WishlistState = {

  wishlist: {
    id: '',
      client: {
        id: '',
        login: '',
        password: '',
        iat: 0,
        exp: 0
      },
      items: []
    },
  loaded: false,
  loading: false,
};

export function reducer(
  state: WishlistState = initialState,
  action: fromWishlist.WishlistAction
): WishlistState {
  switch (action.type) {
    case fromWishlist.LOAD_WISHLIST: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromWishlist.LOAD_WISHLIST_SUCCESS: {
      return {
        ...state,
        wishlist: action['payload'],
        loading: false,
        loaded: true
      };
    }
    case fromWishlist.LOAD_WISHLIST_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
    default: {return state; }
    }
}

export const getWishlistLoading: any = (state: WishlistState): boolean => {
  return state.loading;
};

export const getWishlistLoaded: any = (state: WishlistState): boolean => {
  return state.loaded;
};
export const getWishlist: any = (state: WishlistState): WishList => {
  return state.wishlist;
};
