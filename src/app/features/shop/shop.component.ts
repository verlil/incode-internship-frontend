import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from './@store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products$: Observable<object>;
  productsLoaded$: Observable<{}>;

  constructor(private store: Store<fromStore.ShopState>) {
  }

  ngOnInit(): void {

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
  }
}
