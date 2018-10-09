import * as fromCategories from '../actions/categories.actions';
import { Category } from '../../../../shared/models/category';

export interface CategoriesState {
  categories: Category[];
  entities: {[id: string]: Category};
  loaded: boolean;
  loading: boolean;
}

export const initialState: CategoriesState = {
  categories: [],
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state: CategoriesState = initialState,
  action: fromCategories.CategoriesAction
): CategoriesState {

  switch (action.type) {

    case fromCategories.LOAD_CATEGORIES: {
      return {
        ...state,
        loading: true
      };
    }
    case fromCategories.LOAD_CATEGORIES_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    case fromCategories.LOAD_CATEGORIES_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        categories: action['payload']['categories'],
        entities: action['payload']['entities']
      };
    }

    default: {
      return state;
    }
  }

}

export const getCategories: any = (state: CategoriesState): object => state.categories;
export const getCategoriesEntities: any = (state: CategoriesState): object => state.entities;
export const getCategoriesLoading: any = (state: CategoriesState): boolean => state.loading;
export const getCategoriesLoaded: any = (state: CategoriesState): boolean => state.loaded;
