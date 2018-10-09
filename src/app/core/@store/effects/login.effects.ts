import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { LoginService } from '../../services/login.service';
import * as fromActions from '../actions/login.actions';
import { UserResponseModel } from '../../../shared/models/UserResponseModel';
import { LoginResponseModel } from '../../../shared/models/LoginResponseModel';
import { Go } from '../../../@store/actions/router.action';

@Injectable()
export class LoginEffects {
  constructor(
    private actions$: Actions,
    private service: LoginService,
  ) {}
  @Effect()
  logInEffect: Observable<any> = this.actions$.pipe(
    ofType(fromActions.LOGIN),
    switchMap((action: fromActions.LogInAction) => this.service.logIn(action.payload).pipe(
      map((data: LoginResponseModel) => {
        localStorage.setItem('token', data.token);

        return { type: fromActions.LOGIN_SUCCESS, payload: data.token };
      }),
      catchError((error: any) => of({ type: fromActions.LOGIN_FAILED, payload: error } ))
    ))
  );
  @Effect()
  loginSuccessEffect: Observable<any> = this.actions$.pipe(
    ofType(fromActions.LOGIN_SUCCESS),
    switchMap((action: fromActions.LogInSuccess) => {
      return this.service.getUserByToken().pipe(
        map((user: UserResponseModel) => ({ type: fromActions.GET_USER_SUCCESS, payload: user })),
        catchError((error: any) => of({type: fromActions.GET_USER_FAILED, payload: error}))
      );
    })
  );
  @Effect()
  logOutEffect: Observable<any> = this.actions$.pipe(
    ofType(fromActions.LOGOUT),
    map((action: fromActions.LogOutAction) => {
      return new Go({path: ['login']});
    })
  );
  }
