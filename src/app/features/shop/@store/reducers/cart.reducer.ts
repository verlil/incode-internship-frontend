import * as fromCart from '../actions/cart.actions';
import { CartItem } from '../../../../shared/models/cart-item';
import { Product } from '../../../../shared/models/product';

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
      const cartItem: CartItem = new CartItem(<Product>action['payload']);
      let price: number = 0;

      // checking for not null price
      if (action['payload']['price']) {
        price = action['payload']['price'];
      }

      // checking if product is unique in cart
      if (state['entities'].hasOwnProperty(action['payload']['id'])) {
        const stock: number = action['payload']['stock'];
        const quantity: number = state['entities'][action['payload']['id']]['quantity'];

        if (quantity < stock) {
          cartItem.sum = price + state['entities'][action['payload']['id']]['product']['price'];
          cartItem.quantity = quantity + 1;

          // product not unique in cart
          return {
            ...state,
            entities: {...state.entities, [action['payload']['id']]: cartItem},
            total_quantity: state.total_quantity + 1,
            total_sum: state.total_sum + price
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
          total_sum: state.total_sum + price
        };
      }
    }

    case fromCart.UPDATE_CART_ITEM: {
      let total_sum: number = 0;
      let total_quantity: number = 0;
      const entities: {[id: string]: CartItem} = {...state.entities, [action['payload']['product']['id']]: action['payload']};

      // recalculating of total sum and quantity
      Object.keys(entities).map((key: string) => {
        total_sum += entities[key]['sum'];
        total_quantity += entities[key]['quantity'];
      });

      return {
        ...state,
        entities: entities,
        total_sum: total_sum,
        total_quantity: total_quantity
      };
    }

    default: {
      return state;
    }
  }

}

export const getCartEntities: any = (state: CartState): object => state.entities;
export const getCartTotalQuantity: any = (state: CartState): number => state.total_quantity;
export const getCartTotalSum: any = (state: CartState): number => state.total_sum;
