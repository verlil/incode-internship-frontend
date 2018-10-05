import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

import { WishList } from '../models/wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  constructor(private http: HttpClient) {}

  getWishList(): Observable<{success: boolean; wishlist: WishList}> {

    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYjcyNzA5Y2' +
      'YzNDA4MTViNWJjYmMzNiIsImxvZ2luIjoiYSIsInBhc3N3b3JkIjoiJDJiJDEyJC5WQUxvRjBFS1pBUmY0S0' +
      'VPdWdBUHU5YVNtNzkvRHQyUm5YZjFseGhxYnBHQkFoM2tOd051IiwiaWF0IjoxNTM4NzM5Nz' +
      'Y5LCJleHAiOjE1Mzg3NDI0Njl9.FEqdqr40NQluG7lw17VtOdi9dXBKmX1DCfoDTSPhaLY'
    });

    const id: string = '5bb72709cf340815b5bcbc36';

    return this.http.get<{success: boolean; wishlist: WishList}>
    (`http://localhost:8000/wishlists/${id}`, {headers});
  }
}
