import { UserAuthModel } from '../../../shared/models/UserAuthModel';
import { createSelector } from '@ngrx/store';
import { createFeatureSelector } from '@ngrx/store';
import * as fromLogin from '../reducers/login.reducer';
import { CoreState } from '../reducers';

export const getCoreStore: any = createFeatureSelector<CoreState>('core');

export const getLoginState: any = (state: CoreState): fromLogin.LoginState => state.login;

export const getUser: any = (state: fromLogin.LoginState): UserAuthModel => {
  return state.user;
};
export const getLoading: any = (state: fromLogin.LoginState): boolean => {
  return state.loading;
};
export const getLoaded: any = (state: fromLogin.LoginState): boolean => {
  return state.loaded;
};
export const getIsAuthenticated: any = (state: fromLogin.LoginState): boolean => {
  return state.isAuthenticated;
};
export const getHasToken: any = (state: fromLogin.LoginState): boolean => {
  return state.hasToken;
};

export const selectLoginState: any = createSelector(getCoreStore, getLoginState);
export const selectUser: any = createSelector(selectLoginState, getUser);
export const selectLoading: any = createSelector(selectLoginState, getLoading);
export const selectHasToken: any = createSelector(selectLoginState, getHasToken);
export const selectIsAuthenticated: any = createSelector(selectLoginState, getIsAuthenticated);
export const selectLoaded: any = createSelector(selectLoginState, getLoaded);
