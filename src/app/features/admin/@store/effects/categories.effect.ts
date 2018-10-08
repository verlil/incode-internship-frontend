import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as categoryActions from '../actions/categories.action';
import * as fromServices from '../../services';
import { Category } from '../../../../shared/models/category.model';

@Injectable()

export class CategoriesEffect {
  constructor(
    private actions$: Actions,
    private categoryService: fromServices.CategoryService) {
  }

  @Effect()
  addCategory$: Observable<categoryActions.CategoriesAction> = this.actions$.pipe(
    ofType(categoryActions.ADD_CATEGORY),
    switchMap((action: categoryActions.AddCategory) => {

      return this.categoryService.addCategory(action.payload).pipe(
        map((category: Category) => {

          return new categoryActions.AddCategorySuccess(category);
        }),
        catchError((error: Error) => of (new categoryActions.AddCategoryFail(error)))
      );
    })
  );
}
