import {LoginActions, LOGIN, LOGIN_SUCCESS, LOGIN_FAILED, GET_USER_SUCCESS, GET_USER_FAILED} from '../actions/login.actions';
import {UserAuthModel} from '../../../shared/models/UserAuthModel';

export class LoginState {
  user: UserAuthModel;
  loading: boolean;
  loaded: boolean;
  isAuthenticated: boolean;
  hasToken: boolean;
  token: string;
}

export const initialState: LoginState = {
  user: null,
  loading: false,
  loaded: false,
  isAuthenticated: false,
  hasToken: false,
  token: ''
};

export function loginReducer(state: LoginState = initialState, action: LoginActions): LoginState {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        loading: true,
        token: localStorage.getItem('token')
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        hasToken: true,
        token: localStorage.getItem('token')
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        loading: false,
        token: localStorage.getItem('token')
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        isAuthenticated: true,
        user: action.payload,
        token: localStorage.getItem('token')
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
        token: localStorage.getItem('token')
      };
    }
    default: {
      return state;
    }
  }
}
