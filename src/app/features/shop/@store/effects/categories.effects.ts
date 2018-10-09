import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as categoriesActions from '../actions/categories.actions';
import * as fromServices from '../../services';
import { Category } from '../../../../shared/models/category';

@Injectable()

export class CategoriesEffect {
  constructor(
    private  actions$: Actions,
    private categoriesService: fromServices.CategoriesService) {
  }

  @Effect()
  loadCategories$: Observable<categoriesActions.CategoriesAction> = this.actions$.pipe(
    ofType(categoriesActions.LOAD_CATEGORIES),
    switchMap(() => {

      return this.categoriesService.getCategories().pipe(
        map ((response: { success: boolean, categories: Category[] }) => {
          const categories: Category[] = response['categories'];
          const entities: { [key: string]: Category }  = {};

          categories.forEach((category: Category) => {
            entities[category.id] = category;
          });

          return new categoriesActions.LoadCategoriesSuccess({categories, entities});
        }),
        catchError((error: Error) => of(new categoriesActions.LoadCategoriesFail(error)))
      );
    })
  );
}
