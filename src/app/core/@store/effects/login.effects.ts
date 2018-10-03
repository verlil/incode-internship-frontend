import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import { of } from 'rxjs';

import { LoginService } from '../../services/login.service';
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from '../actions/login.actions';
import { LogInAction } from '../actions/login.actions';

@Injectable()
export class LoginEffects {
  constructor(
    private actions: Actions,
    private router: Router,
    private service: LoginService
  ) {}
  @Effect()
  logInEffect: Observable<any> = this.actions.pipe(
    ofType(LOGIN),
    mergeMap((action: LogInAction) => this.service.logIn(action.payload).pipe(
      map((data: any) => ({ type: LOGIN_SUCCESS, payload: data })),
      catchError((error: any) => of({ type: LOGIN_FAILED, payload: error } ))
    ))
  );
  @Effect({ dispatch: false })
  loginSuccessEffect: Observable<any> = this.actions.pipe(
    ofType(LOGIN_SUCCESS),
    tap((data: any) => {
      localStorage.setItem('token', data.payload.token);
    })
  );
}
