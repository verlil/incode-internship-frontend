import * as fromProducts from '../actions/products.action';
import { Product } from '../../../../shared/models/product.model';

export interface ProductState {
  entities: { [id: number]: Product };
  loaded: boolean;
  loading: boolean;
}

export const initialState: ProductState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state: ProductState = initialState,
  action: fromProducts.ProductsAction
): ProductState {
  switch (action.type) {

    case fromProducts.ADD_PRODUCT: {

      return {
        ...state,
        loading: true
      };
    }
    case fromProducts.ADD_PRODUCT_SUCCESS: {
      const product: Product = action['payload'];
      const entities: {[id: number]: Product} = {
        ...state.entities,
        [product.id]: product,
      };

      return {
        ...state,
        entities,
      };
    }
    case fromProducts.ADD_PRODUCT_FAIL: {

      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    default: return state;
  }
}

export const getProductsEntities: any = (state: ProductState): { [id: number]: Product } => state.entities;
export const getProductsLoading: any = (state: ProductState): boolean => state.loading;
export const getProductsLoaded: any = (state: ProductState): boolean => state.loaded;
