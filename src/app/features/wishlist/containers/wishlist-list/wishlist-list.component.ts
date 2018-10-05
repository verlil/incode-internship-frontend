import { Component, OnInit } from '@angular/core';
import { WishList } from '../../models/wishlist';

import { Observable } from 'rxjs';
import * as fromStore from '../../@store';
import { Store, select } from '@ngrx/store';
import { filter } from 'rxjs/operators';

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
