import { Action } from '@ngrx/store';

export const SHOW_MESSAGE: string = '[Notification] Show Message';
export const SHOW_ERROR: string = '[Notification] Show Error';

export class ShowMessage implements Action {
  readonly type: string = SHOW_MESSAGE;
  constructor(public payload: string) {}
}

export class ShowError implements Action {
  readonly type: string = SHOW_ERROR;
  constructor(public payload: string) {}
}

export type NotificationActions = | ShowMessage | ShowError;
