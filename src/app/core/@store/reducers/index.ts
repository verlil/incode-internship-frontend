import { ActionReducerMap } from '@ngrx/store';
import * as fromLogin from './login.reducer';

export class CoreState {
  login: fromLogin.LoginState;
}

export const reducers: ActionReducerMap<CoreState> = {
  login: fromLogin.loginReducer
};

export * from './login.reducer';