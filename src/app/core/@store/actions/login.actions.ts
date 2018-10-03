import { Action } from '@ngrx/store';

export const LOGIN: string = 'LOGIN';
export const LOGIN_SUCCESS: string = 'LOGIN_SUCCESS';
export const LOGIN_FAILED: string = 'LOGIN_FAILED';

export class LogInAction implements Action {
  readonly type: string = LOGIN;
  constructor(public payload: any) {}
}

export class LogInSuccess implements Action {
  readonly type: string = LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class LogInfailed implements Action {
  readonly type: string = LOGIN_FAILED;
  constructor(public payload: any) {}
}

export type LoginActions =
  | LogInAction
  | LogInSuccess;
