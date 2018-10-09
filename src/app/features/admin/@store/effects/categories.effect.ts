import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';

import * as categoryActions from '../actions/categories.action';
import * as fromServices from '../../services';
import { Category } from '../../../../shared/models/category.model';
import * as notificationActions from '../../../../core/@store/actions';

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
        mergeMap((category: Category) => {

          return [
            new categoryActions.AddCategorySuccess(category),
            new notificationActions.ShowMessage('Category added')
          ];
        }),
        catchError((error: Error) => {
          return [
            new categoryActions.AddCategoryFail(error),
            new notificationActions.ShowError(error.message)
          ];
        })
      );
    })
  );
}
