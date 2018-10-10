import * as fromActions from '../actions/login.actions';
import {UserAuthModel} from '../../../shared/models/UserAuthModel';

export class LoginState {
  user: UserAuthModel;
  loading: boolean;
  loaded: boolean;
  isAuthenticated: boolean;
  hasToken: boolean;
}

export const initialState: LoginState = {
  user: null,
  loading: false,
  loaded: false,
  isAuthenticated: false,
  hasToken: false,
};

export function loginReducer(state: LoginState = initialState, action: fromActions.LoginActions): LoginState {
  switch (action.type) {
    case fromActions.LOGIN: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromActions.LOGIN_SUCCESS: {
      return {
        ...state,
        hasToken: true
      };
    }
    case fromActions.LOGIN_FAILED: {
      return {
        ...state,
        loading: false,
        hasToken: false
      };
    }
    case fromActions.GET_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        isAuthenticated: true,
        user: action['payload']
      };
    }
    case fromActions.GET_USER_FAILED: {
      return {
        ...state,
        loading: false,
        loaded: true,
        hasToken: false,
        isAuthenticated: false,
        user: null
      };
    }
    case fromActions.LOGOUT: {
      localStorage.clear();

      return {
        ...state,
        loading: false,
        loaded: false,
        hasToken: false,
        isAuthenticated: false,
        user: null,
      };
    }
    default: {
      return state;
    }
  }
}
