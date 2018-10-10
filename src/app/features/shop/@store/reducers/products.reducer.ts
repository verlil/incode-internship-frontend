import * as fromProducts from '../actions/products.actions';
import { Product } from '../../../../shared/models/product';
import { Filter } from '../../models/filter';

export interface ProductState {
  products: Product[];
  entities: {[id: string]: Product};
  view_mode: string;
  filters: Filter;
  loaded: boolean;
  loading: boolean;
}

export const initialState: ProductState = {
  products: [],
  entities: {},
  view_mode: 'list',
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
        loading: true,
        filters: action['payload']
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
    case fromProducts.CHANGE_VIEW_MODE: {
      return {
        ...state,
        view_mode: action['payload']
      };
    }

    default: {
      return state;
    }
  }

}

export const getProducts: any = (state: ProductState): object => state.products;
export const getProductsEntities: any = (state: ProductState): object => state.entities;
export const getViewMode: any = (state: ProductState): string => state.view_mode;
export const getFilters: any = (state: ProductState): object => state.filters;
export const getProductsLoading: any = (state: ProductState): boolean => state.loading;
export const getProductsLoaded: any = (state: ProductState): boolean => state.loaded;
