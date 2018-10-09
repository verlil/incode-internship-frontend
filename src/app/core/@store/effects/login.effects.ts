import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';

import { LoginService } from '../../services/login.service';
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED, GET_USER_SUCCESS, GET_USER_FAILED, LOGOUT } from '../actions/login.actions';
import { LogInAction, LogInSuccess, LogOutAction } from '../actions/login.actions';
import { UserResponseModel } from '../../../shared/models/UserResponseModel';
import { LoginResponseModel } from '../../../shared/models/LoginResponseModel';
import { State } from '../../../@store/reducers/';
import { Go } from '../../../@store/actions/router.action';

@Injectable()
export class LoginEffects {
  constructor(
    private actions: Actions,
    private service: LoginService,
    private store: Store <State>
  ) {}
  @Effect()
  logInEffect: Observable<any> = this.actions.pipe(
    ofType(LOGIN),
    switchMap((action: LogInAction) => this.service.logIn(action.payload).pipe(
      map((data: LoginResponseModel) => {
        localStorage.setItem('token', data.token);

        return { type: LOGIN_SUCCESS, payload: data.token };
      }),
      catchError((error: any) => of({ type: LOGIN_FAILED, payload: error } ))
    ))
  );
  @Effect()
  loginSuccessEffect: Observable<any> = this.actions.pipe(
    ofType(LOGIN_SUCCESS),
    switchMap((action: LogInSuccess) => {
      return this.service.getUserByToken().pipe(
        map((user: UserResponseModel) => ({ type: GET_USER_SUCCESS, payload: user })),
        catchError((error: any) => of({type: GET_USER_FAILED, payload: error}))
      );
    })
  );
  @Effect()
  logOutEffect: Observable<any> = this.actions.pipe(
    ofType(LOGOUT),
    map((action: LogOutAction) => {
      return new Go({path: ['login']});
    })
  );
  }
