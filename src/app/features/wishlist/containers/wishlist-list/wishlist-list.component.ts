import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import * as fromStore from '../../@store';
import { WishList } from '../../models/wishlist';

@Component({
  selector: 'app-wishlist-list',
  templateUrl: './wishlist-list.component.html',
  styleUrls: ['./wishlist-list.component.css']
})
export class WishlistListComponent implements OnInit {

  wishlist$: Observable<WishList>;
  wishlistLoaded$: Observable<boolean>;

  constructor(private store: Store<fromStore.WhishListGeneralState>) {}

  ngOnInit(): void {
      this.wishlist$ = this.store.pipe(select(fromStore.getWishlist));
      this.wishlistLoaded$ = this.store.pipe(select(fromStore.getWishlistLoaded));
      this.wishlistLoaded$.pipe(
        filter((loaded: boolean) => {
          if (!loaded) {
            return !loaded;
          }
        })
      ).subscribe((loaded: boolean) => {
        this.store.dispatch(new fromStore.LoadWishlist());
      });
  }
}
