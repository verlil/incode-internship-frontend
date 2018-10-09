import { SHOW_MESSAGE, SHOW_ERROR, NotificationActions } from '../actions';

export class NotificationsState {
  lastMessage: string;
  lastError: string;
}

export const initialNotificationsState: NotificationsState = {
  lastMessage: '',
  lastError: ''
};

export function notificationReducer(
  state: NotificationsState = initialNotificationsState,
  action: NotificationActions
): NotificationsState {
  switch (action.type) {
    case SHOW_MESSAGE:
      return {
        ...state,
        lastMessage: action.payload
      };
    case SHOW_ERROR:
      return {
        ...state,
        lastError: action.payload.message
      };
    default:
      return state;
  }
}
