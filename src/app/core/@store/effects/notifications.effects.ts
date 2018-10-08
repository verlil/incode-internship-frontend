import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, tap, delay } from 'rxjs/operators';

import { SHOW_MESSAGE, SHOW_ERROR, ShowMessage, ShowError } from '../actions';

@Injectable()
export class NotificationsEffects {
  constructor(private actions: Actions, private snackbar: MatSnackBar) {
  }
  @Effect()
  showMessageEffect: Observable<any> = this.actions
    .ofType(SHOW_MESSAGE)
    .pipe(
      map((action: ShowMessage) => action.payload),
      tap((message: string) => this.snackbar.open(message, '', {panelClass: ['message-snackbar']})),
      delay(2000),
      map(() => this.snackbar.dismiss())
    );

  showErrorEffect: Observable<any> = this.actions
    .ofType(SHOW_ERROR)
    .pipe(
      map((action: ShowError) => action.payload),
      tap((error: string) => this.snackbar.open(error, '', {panelClass: ['error-snackbar']})),
      delay(2000),
      map(() => this.snackbar.dismiss())
    );
}
