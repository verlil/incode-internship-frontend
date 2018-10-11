import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import * as fromStore from './@store';
import { Category } from '../../shared/models/category';
import { Product } from '../../shared/models/product';
import { Filter } from './models/filter';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products$: Observable<Product[]>;
  productsLoaded$: Observable<{}>;

  viewMode$: Observable<string>;

  categories$: Observable<Category[]>;
  categoriesLoaded$: Observable<{}>;

  constructor(private store: Store<fromStore.ShopState>) {
  }

  ngOnInit(): void {

    // loading products
    this.products$ = this.store.pipe(select(fromStore.getAllProducts));
    this.productsLoaded$ = this.store.pipe(select(fromStore.getProductsLoaded));
    this.productsLoaded$.pipe(
      filter((loaded: boolean) => {
        if (!loaded) {
          return !loaded;
        }
      })
    ).subscribe((loaded: boolean) => {
      this.store.dispatch(new fromStore.LoadProducts());
    });

    // loading categories
    this.categories$ = this.store.pipe(select(fromStore.getAllCategories));
    this.categoriesLoaded$ = this.store.pipe(select(fromStore.getCategoriesLoaded));
    this.categoriesLoaded$.pipe(
      filter((loaded: boolean) => {
        if (!loaded) {
          return !loaded;
        }
      })
    ).subscribe((loaded: boolean) => {
      this.store.dispatch(new fromStore.LoadCategories());
    });

    // loading view mode
    this.viewMode$ = this.store.pipe(select(fromStore.getViewMode));

  }

  onFiltersChanged(filters: Filter): void {
    this.store.dispatch(new fromStore.LoadProducts(filters));
  }

  onAddToCart(product: Product): void {
    const quantity: number = 1;
    this.store.dispatch(new fromStore.AddToCart({product, quantity}));
  }

  onViewChanged(view: string): void {
    this.store.dispatch(new fromStore.ChangeViewMode(view));
  }
}
