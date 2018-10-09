import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { ShopState } from '../reducers';

export * from './products.selectors';
export * from './categories.selector';
export * from './cart.selector';

export const getShopState: MemoizedSelector<object, ShopState> = createFeatureSelector<ShopState>('shop');
