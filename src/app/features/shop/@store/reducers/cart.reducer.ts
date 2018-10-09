import * as fromCart from '../actions/cart.actions';
import { CartItem } from '../../../../shared/models/cart-item';

export interface CartState {
  entities: {[id: string]: CartItem};
  total_quantity: number;
  total_sum: number;
}

export const initialState: CartState = {
  entities: {},
  total_quantity: 0,
  total_sum: 0,
};

export function reducer(
  state: CartState = initialState,
  action: fromCart.CartAction
): CartState {

  switch (action.type) {

    case fromCart.ADD_PRODUCT_TO_CART: {
      const cartItem: CartItem = new CartItem(action['payload']);

      // checking if product is unique in cart
      if (state['entities'].hasOwnProperty(action['payload']['id'])) {
        const stock: number = action['payload']['stock'];
        const quantity: number = state['entities'][action['payload']['id']]['quantity'];

        if ( quantity < stock) {
          cartItem.sum = action['payload']['price'] + state['entities'][action['payload']['id']]['product']['price'];
          cartItem.quantity = quantity + 1;

          // product not unique in cart
          return {
            ...state,
            entities: {...state.entities, [action['payload']['id']]: cartItem},
            total_quantity: state.total_quantity + 1,
            total_sum: state.total_sum + action['payload']['price']
          };
        }

        // product not unique in cart and user has already added all quantity to cart
        return {
          ...state
        };

      } else {

        // product is unique in cart
        return {
          ...state,
          entities: {...state.entities, [action['payload']['id']]: cartItem},
          total_quantity: state.total_quantity + 1,
          total_sum: state.total_sum + action['payload']['price']
        };
      }

    }

    default: {
      return state;
    }
  }

}

export const getCartEntities: any = (state: CartState): object => state.entities;
export const getCartTotalQuantity: any = (state: CartState): number => state.total_quantity;
export const getCartTotalSum: any = (state: CartState): number => state.total_sum;
