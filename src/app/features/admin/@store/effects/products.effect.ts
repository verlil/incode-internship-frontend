import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';

import * as productActions from '../actions/products.action';
import * as notificationActions from '../../../../core/@store/actions';
import * as fromServices from '../../services';
import { Product } from '../../../../shared/models/product.model';

@Injectable()

export class ProductsEffect {
  constructor(
    private actions$: Actions,
    private productService: fromServices.ProductService) {
  }

  @Effect()
  addProduct$: Observable<productActions.ProductsAction> = this.actions$.pipe(
    ofType(productActions.ADD_PRODUCT),
    switchMap((action: productActions.AddProduct) => {

      return this.productService.addProduct(action.payload).pipe(
        mergeMap((product: Product) => {

          return [
            new productActions.AddProductSuccess(product),
            new notificationActions.ShowMessage('Product added')
          ];
        }),
        catchError((error: Error) => {
          return [
            new productActions.AddProductFail(error),
            new notificationActions.ShowError(error)
          ];
        })
      );
    })
  );

}
