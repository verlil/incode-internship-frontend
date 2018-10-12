import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Effect, Actions, ofType } from '@ngrx/effects';
import {catchError, mergeMap, switchMap} from 'rxjs/operators';

import * as ordersActions from '../actions/orders.actions';
import * as notificationsActions from '../../../../core/@store/actions';
import * as fromServices from '../../services';
import * as notificationActions from '../../../../core/@store/actions';
import { Order } from '../../../../shared/models/order';

@Injectable()

export class OrdersEffect {
  constructor(
    private  actions$: Actions,
    private orderService: fromServices.OrdersService) {
  }

  @Effect()
  createOrder$: Observable<ordersActions.OrdersActions> = this.actions$.pipe(
    ofType(ordersActions.CREATE_ORDER),
    switchMap((action: ordersActions.CreateOrder) => {

      return this.orderService.createOrder(action.payload).pipe(
        mergeMap ((response: { success: boolean, order: Order }) => {

          return [
            new ordersActions.CreateOrderSuccess(response['order']),
            new notificationActions.ShowMessage('Order created')
          ];
        }),
        catchError((error: Error) => {
          return [
            new ordersActions.CreateOrderFail(error),
            new notificationsActions.ShowError(error.message)
          ];
        })
      );
    })
  );
}
