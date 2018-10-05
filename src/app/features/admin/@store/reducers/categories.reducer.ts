import * as fromCategories from '../actions/categories.action';
import { Category } from '../../../../shared/models/category.model';

export interface CategoryState {
  entities: { [id: number]: Category };
  loaded: boolean;
  loading: boolean;
}

export const initialState: CategoryState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state: CategoryState = initialState,
  action: fromCategories.CategoriesAction
): CategoryState {
  switch (action.type) {
    case fromCategories.ADD_CATEGORY: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromCategories.ADD_CATEGORY_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }

    case fromCategories.ADD_CATEGORY_SUCCESS: {
      const category: Category = action['payload'];
      const entities: {[id: number]: Category} = {
        ...state.entities,
        [category.id]: category,
      };

      return {
        ...state,
        entities,
      };
    }

    default: state = initialState;
  }

  return state;
}

export const getCategoriesEntities: any = (state: CategoryState): { [id: number]: Category } => state.entities;
export const getCategoriesLoading: any = (state: CategoryState): boolean => state.loading;
export const getCategoriesLoaded: any = (state: CategoryState): boolean => state.loaded;
