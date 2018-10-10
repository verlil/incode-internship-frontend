import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import * as notificationActions from '../actions/notification.actions';

@Injectable()
export class NotificationsEffects {
  constructor(private actions: Actions, private snackbar: MatSnackBar) {
  }
  @Effect({dispatch: false})
  showMessageEffect: Observable<any> = this.actions.pipe(
      ofType(notificationActions.SHOW_MESSAGE),
      tap((action: notificationActions.ShowMessage) => {
        this.snackbar.open(action.payload, '', {panelClass: ['message-snackbar'], duration: 4000});
      })
    );
  @Effect({dispatch: false})
  showErrorEffect: Observable<any> = this.actions.pipe(
    ofType(notificationActions.SHOW_ERROR),
    tap((action: notificationActions.ShowError) => {
      this.snackbar.open(action.payload, '', {panelClass: ['error-snackbar'], duration: 4000});
    })
  );
}
