import { UserModel } from '../../../shared/models/UserModel';
import { createSelector } from '@ngrx/store';
import { State } from '../../../@store/reducers';

export interface LoginState {
  user: UserModel;
  loading: boolean;
  loaded: boolean;
  hasToken: boolean;
}

export const selectLoginState: any = (state: State): LoginState => state.login;

export const getHasToken: any = (state: LoginState): boolean => {
  return state.hasToken;
};
export const getLoaded: any = (state: LoginState): boolean => {
  return state.loaded;
};

export const selectHasToken: any = createSelector(selectLoginState, getHasToken);
export const selectLoaded: any = createSelector(selectLoginState, getLoaded);
