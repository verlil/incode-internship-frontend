import {UserModel} from '../../../shared/models/UserModel';

export interface LoginState {
  user: UserModel;
  loading: boolean;
  loaded: boolean;
  hasToken: boolean;
}
