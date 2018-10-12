import { Action } from '@ngrx/store';
import { Order } from '../../../../shared/models/order';

// create order
export const CREATE_ORDER: string = '[Shop] Create Orders';
export const CREATE_ORDER_FAIL: string = '[Shop] Create Orders Fail';
export const CREATE_ORDER_SUCCESS: string = '[Shop] Create Orders Success';

// create order
export class CreateOrder implements Action {
  readonly type: string = CREATE_ORDER;

  constructor(public payload: Order) {
  }
}

export class CreateOrderFail implements Action {
  readonly type: string = CREATE_ORDER_FAIL;

  constructor(public payload: any) {
  }
}

export class CreateOrderSuccess implements Action {
  readonly type: string = CREATE_ORDER_SUCCESS;

  constructor(public payload: Order) {
  }
}

// action types
export type OrdersActions = CreateOrder | CreateOrderFail | CreateOrderSuccess ;
