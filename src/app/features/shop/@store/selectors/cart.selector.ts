import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

import { ShopState } from '../reducers';
import * as fromCart from '../reducers/cart.reducer';
import { CartItem } from '../../../../shared/models/cart-item';

const getShopState: MemoizedSelector<object, ShopState> = createFeatureSelector<ShopState>('shop');
export const getCartState: MemoizedSelector<object, fromCart.CartState> = createSelector(
  getShopState,
  (state: ShopState) => {

    return state.cart;
  }
);

export const getCartEntities: MemoizedSelector<object, {[id: string]: CartItem}> = createSelector(getCartState, fromCart.getCartEntities);
export const getCartTotalQuantity: MemoizedSelector<object, number> = createSelector(getCartState, fromCart.getCartTotalQuantity);
export const getCartTotalSum: MemoizedSelector<object, number> = createSelector(getCartState, fromCart.getCartTotalSum);

export const getCartItems: MemoizedSelector<object, CartItem[]> = createSelector(getCartEntities,
(entities: {[id: string]: CartItem}) => {

  return Object.values(entities);
});
