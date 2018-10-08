import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { WishList } from '../models/wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  constructor(private http: HttpClient) {}

  getWishList(): Observable<{success: boolean; wishlist: WishList}> {
    const id: string = '5bb72709cf340815b5bcbc36';

    return this.http.get<{success: boolean; wishlist: WishList}>
    (`${environment.baseUrl}/wishlists/${id}`);
  }
}
