import { ActionReducerMap } from '@ngrx/store';
import * as fromLogin from './login.reducer';
import * as fromNotifications from './notifications.reducer';

export class CoreState {
  login: fromLogin.LoginState;
  notifications: fromNotifications.NotificationsState;
}

export const reducers: ActionReducerMap<CoreState> = {
  login: fromLogin.loginReducer,
  notifications: fromNotifications.notificationReducer
};

export * from './login.reducer';
