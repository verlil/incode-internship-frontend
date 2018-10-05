import { UserAuthModel } from '../../../shared/models/UserAuthModel';
import { createSelector } from '@ngrx/store';
import { State } from '../../../@store/reducers';

export interface LoginState {
  user: UserAuthModel;
  loading: boolean;
  loaded: boolean;
  isAuthenticated: boolean;
  hasToken: boolean;
}

export const selectLoginState: any = (state: State): LoginState => state.login;

export const getUser: any = (state: LoginState): UserAuthModel => {
  return state.user;
};
export const getLoading: any = (state: LoginState): boolean => {
  return state.loading;
};
export const getLoaded: any = (state: LoginState): boolean => {
  return state.loaded;
};
export const getIsAuthenticated: any = (state: LoginState): boolean => {
  return state.isAuthenticated;
};
export const getHasToken: any = (state: LoginState): boolean => {
  return state.hasToken;
};

export const selectUser: any = createSelector(selectLoginState, getUser);
export const selectLoading: any = createSelector(selectLoginState, getLoading);
export const selectHasToken: any = createSelector(selectLoginState, getHasToken);
export const selectIsAuthenticated: any = createSelector(selectLoginState, getIsAuthenticated);
