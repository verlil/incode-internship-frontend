import {Injectable} from '@angular/core';

import { Observable, of } from 'rxjs';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as productActions from '../actions/products.action';
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
        map((product: Product) => {

          return new productActions.AddProductSuccess(product);
        }),
        catchError((error: Error) => of (new productActions.AddProductFail(error)))
      );
    })
  );
}
