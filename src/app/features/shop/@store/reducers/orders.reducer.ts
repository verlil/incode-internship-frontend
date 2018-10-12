import * as fromOrders from '../actions/orders.actions';
import { Order } from '../../../../shared/models/order';

export interface OrdersState {
  orders: Order[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: OrdersState = {
  orders: [],
  loaded: false,
  loading: false,
};

export function reducer(
  state: OrdersState = initialState,
  action: fromOrders.OrdersActions
): OrdersState {

  switch (action.type) {

    case fromOrders.CREATE_ORDER: {
      return {
        ...state,
        loading: true
      };
    }
    case fromOrders.CREATE_ORDER_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    case fromOrders.CREATE_ORDER_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        orders: [...state.orders, action['payload']]
      };
    }

    default: {
      return state;
    }
  }

}

export const getOrders: any = (state: OrdersState): object => state.orders;
export const getOrdersLoading: any = (state: OrdersState): boolean => state.loading;
export const getOrdersLoaded: any = (state: OrdersState): boolean => state.loaded;
