import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import { AuthService } from '../../services/auth.service';
import * as fromActions from '../actions/auth.actions';
import { UserResponseModel } from '../../../shared/models/UserResponseModel';
import { LoginResponseModel } from '../../../shared/models/LoginResponseModel';
import * as notificationActions from '../actions/notification.actions';
import * as fromRouterActions from '../../../@store/actions';

@Injectable()
export class LoginEffects {
  constructor(
    private actions: Actions,
    private service: AuthService,
  ) {}
  @Effect()
  register$: Observable<any> = this.actions.pipe(
      ofType(fromActions.REGISTER),
      switchMap((action: fromActions.RegistrAction) => {
          return this.service.addUser(action['payload']).pipe(
              map((res: LoginResponseModel) => {
                  localStorage.setItem('token', res.token);

                  return new fromActions.RegistrSuccess(res.token);
              }),
              catchError((error: any) => [
                  new fromActions.RegistrFailed(error),
                  new notificationActions.ShowError(error.message)
              ]
            )
          );
      })
  );
  @Effect()
  logInEffect: Observable<any> = this.actions.pipe(
    ofType(fromActions.LOGIN),
    switchMap((action: fromActions.LogInAction) => this.service.logIn(action.payload).pipe(
      map((data: LoginResponseModel) => {
        localStorage.setItem('token', data.token);

        return new fromActions.LogInSuccess(data.token);
      }),
      catchError((error: any) => [
        new fromActions.LogInfailed(error),
        new notificationActions.ShowError(error.message)
      ])
    ))
  );
  @Effect()
  loginSuccessEffect: Observable<any> = this.actions.pipe(
    ofType(fromActions.LOGIN_SUCCESS),
    switchMap((action: fromActions.LogInSuccess) => {
      return this.service.getUserByToken().pipe(
        mergeMap((user: UserResponseModel) => {
          return [
            new fromActions.GetUserSuccess(user),
            new notificationActions.ShowMessage('Successfully logged in'),
            new fromRouterActions.Go({ path: ['shop']})
          ];
        }),
        catchError((error: any) => {
          return [
            new fromActions.GetUserFailed(error),
            new notificationActions.ShowError(error.message)
          ];
        }));
    })
  );
}
