import {LoginActions, LOGIN, LOGIN_SUCCESS, LOGIN_FAILED, GET_USER_SUCCESS, GET_USER_FAILED} from '../actions/login.actions';
import { LoginState } from '../selectors/login.selectors';

export const initialState: LoginState = {
  user: null,
  loading: false,
  loaded: false,
  hasToken: false,
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
        hasToken: true
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        loading: false
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        user: action.payload
      };
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        loading: false
      };
    }
    default: {
      return state;
    }
  }
}
