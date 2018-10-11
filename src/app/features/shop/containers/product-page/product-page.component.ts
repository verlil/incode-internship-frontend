import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

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

  quantity: any = new FormControl(1, Validators.min(1));

  constructor(private store: Store<fromStore.ShopState>) {

  }

  ngOnInit(): void {
    this.store.dispatch(new fromStore.LoadProducts());
    this.product$ = this.store.pipe(select(fromStore.getSelectedProduct));
  }

  onAddToCart(product$: Observable<Product>): void {
    const quantity: number = this.quantity.value;
    this.product$.subscribe((product: Product) => {
      this.store.dispatch(new fromStore.AddToCart({product, quantity}));
    });
  }

}
