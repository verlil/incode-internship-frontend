
import { Action } from '@ngrx/store';
import { WishList } from '../../models/wishlist';

// load wishlist
export const LOAD_WISHLIST: string = '[Whislist] load Wishlist';
export const LOAD_WISHLIST_FAIL: string = '[Whislist] load Wishlist Fail';
export const LOAD_WISHLIST_SUCCESS: string = '[Whislist] load Wishlist Success';

export class LoadWishlist implements Action {
  readonly type: string = LOAD_WISHLIST;
}

export class LoadWishlistFail implements Action {
  readonly type: string = LOAD_WISHLIST_FAIL;
  constructor(public payload: any) {}
}

export class LoadPWishlistSuccess implements Action {
  readonly type: string = LOAD_WISHLIST_SUCCESS;
  constructor(public payload: WishList) {}
}

// action types
export type WishlistAction =
  | LoadWishlist
  | LoadWishlistFail
  | LoadPWishlistSuccess;
