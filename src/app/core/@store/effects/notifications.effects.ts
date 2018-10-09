import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, tap, delay } from 'rxjs/operators';

import * as notificationActions from '../actions/notification.actions';

@Injectable()
export class NotificationsEffects {
  constructor(private actions: Actions, private snackbar: MatSnackBar) {
  }
  @Effect({dispatch: false})
  showMessageEffect: Observable<any> = this.actions
    .ofType(notificationActions.SHOW_MESSAGE)
    .pipe(
      map((action: notificationActions.ShowMessage) => action.payload),
      tap((message: string) => this.snackbar.open(message, '', {panelClass: ['message-snackbar']})),
      delay(4000),
      map(() => this.snackbar.dismiss())
    );
  @Effect({dispatch: false})
  showErrorEffect: Observable<any> = this.actions
    .ofType(notificationActions.SHOW_ERROR)
    .pipe(
      map((action: notificationActions.ShowError) => action.payload),
      tap((errorObj: any) => this.snackbar.open(errorObj.message, '', {panelClass: ['error-snackbar']})),
      delay(4000),
      map(() => this.snackbar.dismiss())
    );
}
