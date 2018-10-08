import * as fromProducts from '../actions/products.actions';
import { Product } from '../../../../shared/models/product';
import { Filter } from '../../models/filter';

export interface ProductState {
  products: Product[];
  entities: {[id: string]: Product};
  filters: Filter;
  loaded: boolean;
  loading: boolean;
}

export const initialState: ProductState = {
  products: [],
  entities: {},
  filters: new Filter(),
  loaded: false,
  loading: false,
};

export function reducer(
  state: ProductState = initialState,
  action: fromProducts.ProductsAction
): ProductState {

  switch (action.type) {

    case fromProducts.LOAD_PRODUCTS: {
      return {
        ...state,
        loading: true
      };
    }
    case fromProducts.LOAD_PRODUCTS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    case fromProducts.LOAD_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        products: action['payload']['products'],
        entities: action['payload']['entities']
      };
    }

    default: {
      return state;
    }
  }

}

export const getProducts: any = (state: ProductState): object => state.products;
export const getProductsEntities: any = (state: ProductState): object => state.entities;
export const getFilters: any = (state: ProductState): object => state.products;
export const getProductsLoading: any = (state: ProductState): boolean => state.loading;
export const getProductsLoaded: any = (state: ProductState): boolean => state.loaded;
