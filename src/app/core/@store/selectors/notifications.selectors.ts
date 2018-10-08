import { createSelector } from '@ngrx/store';

import { getCoreStore } from './login.selectors';
import * as fromNotification from '../reducers/notifications.reducer';
import { CoreState } from '../reducers';

export const getNotificationsState: any = (state: CoreState): fromNotification.NotificationsState => state.notifications;
export const getLastMessage: any = (state: fromNotification.NotificationsState): string => state.lastMessage;
export const getLastError: any = (state: fromNotification.NotificationsState): string => state.lastError;

export const selectNotificationsState: any = createSelector(getCoreStore, getNotificationsState);
export const selectLastMessage: any = createSelector(selectNotificationsState, getLastMessage);
export const selectLastError: any = createSelector(selectNotificationsState, getLastError);
