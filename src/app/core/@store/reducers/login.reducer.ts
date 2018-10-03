import { UserModel } from '../../../shared/models/UserModel';
import {LoginActions, LOGIN, LOGIN_SUCCESS, LOGIN_FAILED} from '../actions/login.actions';

export interface LoginState {
  isAuthenticated: boolean;
  user: UserModel;
  loginErrorMessage: string | null;
  logginIn: boolean;
}

export const initialState: LoginState = {
  isAuthenticated: false,
  user: null,
  loginErrorMessage: null,
  logginIn: false,
};

export function loginReducer(state: LoginState = initialState, action: LoginActions): LoginState {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        logginIn: true
      };
    }
    case LOGIN_SUCCESS: {
      return {
        isAuthenticated: true,
        user: action.payload,
        loginErrorMessage: null,
        logginIn: false,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        logginIn: false
      };
    }
    default: {
      return state;
    }
  }
}
