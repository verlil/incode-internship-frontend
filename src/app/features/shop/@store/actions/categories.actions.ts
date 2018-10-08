import { Action } from '@ngrx/store';
import { Category } from '../../../../shared/models/category';

// load products
export const LOAD_CATEGORIES: string = '[Shop] Load Categories';
export const LOAD_CATEGORIES_FAIL: string = '[Shop] Load Categories Fail';
export const LOAD_CATEGORIES_SUCCESS: string = '[Shop] Load Categories Success';

export class LoadCategories implements Action {
  readonly type: string = LOAD_CATEGORIES;
}

export class LoadCategoriesFail implements Action {
  readonly type: string = LOAD_CATEGORIES_FAIL;

  constructor(public payload: any) {
  }
}

export class LoadCategoriesSuccess implements Action {
  readonly type: string = LOAD_CATEGORIES_SUCCESS;

  constructor(public payload: {categories: Category[], entities: {[key: string]: Category}}) {
  }
}

// action types
export type CategoriesAction = LoadCategories | LoadCategoriesFail | LoadCategoriesSuccess ;
