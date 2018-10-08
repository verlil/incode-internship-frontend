import { Action } from '@ngrx/store';

import { Category } from '../../../../shared/models/category.model';

// add category
export const ADD_CATEGORY: string = '[Categories] Create Category';
export const ADD_CATEGORY_FAIL: string = '[Categories] Create Category Fail';
export const ADD_CATEGORY_SUCCESS: string = '[Categories] Create Category Success';

export class AddCategory implements Action {
  readonly type: string = ADD_CATEGORY;
  constructor(public payload: Category) {}
}

export class AddCategoryFail implements Action {
  readonly type: string = ADD_CATEGORY_FAIL;
  constructor(public payload: any) {}
}

export class AddCategorySuccess implements Action {
  readonly type: string = ADD_CATEGORY_SUCCESS;
  constructor(public payload: Category) {}
}

export type CategoriesAction = | AddCategory | AddCategoryFail | AddCategorySuccess;
