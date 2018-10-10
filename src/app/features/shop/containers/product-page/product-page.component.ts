import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Product } from '../../../../shared/models/product';
import * as fromStore from '../../@store';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent  implements OnInit  {
  product$: Observable<Product>;

  constructor(private store: Store<fromStore.ShopState>) {

  }

  ngOnInit(): void {
    this.product$ = this.store.pipe(select(fromStore.getSelectedProduct));

  }

  onAddToCart(product: Product): void {
    this.store.dispatch(new fromStore.AddToCart(product));
  }

}
