import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';

import { LoginService } from '../../services/login.service';
import { UserResponseModel } from '../../../shared/models/UserResponseModel';
import { LoginResponseModel } from '../../../shared/models/LoginResponseModel';

import * as loginActions from '../actions/login.actions';
import * as notificationActions from '../actions/notification.actions';

@Injectable()
export class LoginEffects {
  constructor(
    private actions: Actions,
    private service: LoginService,
  ) {}
  @Effect()
  logInEffect: Observable<any> = this.actions.pipe(
    ofType(loginActions.LOGIN),
    switchMap((action: loginActions.LogInAction) => this.service.logIn(action.payload).pipe(
      map((data: LoginResponseModel) => {
        localStorage.setItem('token', data.token);
        return new loginActions.LogInSuccess(data.token);
      }),
      catchError((error: any) => [
        new loginActions.LogInfailed(error),
        new notificationActions.ShowError(error)
      ])
    ))
  );
  @Effect()
  loginSuccessEffect: Observable<any> = this.actions.pipe(
    ofType(loginActions.LOGIN_SUCCESS),
    switchMap((action: loginActions.LogInSuccess) => {
      return this.service.getUserByToken().pipe(
        mergeMap((user: UserResponseModel) => {
          return [
            new loginActions.GetUserSuccess(user),
            new notificationActions.ShowMessage('Successfully logged in')
          ];
        }),
        catchError((error: any) => {
          return [
            new loginActions.GetUserFailed(error),
            new notificationActions.ShowError(error)
          ];
        }));
    })
  );
}
