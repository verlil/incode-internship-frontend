import {LoginActions, LOGIN, LOGIN_SUCCESS, LOGIN_FAILED, GET_USER_SUCCESS, GET_USER_FAILED, LOGOUT} from '../actions/login.actions';
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
  hasToken: false
};

export function loginReducer(state: LoginState = initialState, action: LoginActions): LoginState {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        hasToken: true,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        loading: false,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        isAuthenticated: true,
        user: action.payload,
      };
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        loading: false,
        loaded: true,
        hasToken: false,
        isAuthenticated: false,
        user: null,
      };
    }
    case LOGOUT: {
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
