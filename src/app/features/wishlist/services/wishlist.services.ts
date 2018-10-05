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

    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYjcyNzA5Y2YzNDA4MTViNWJ' +
      'jYmMzNiIsImxvZ2luIjoiYSIsInBhc3N3b3JkIjoiJDJiJDEyJC5WQUxvRjBFS1pBUmY0S0' +
      'VPdWdBUHU5YVNtNzkvRHQyUm5YZjFseGhxYnBHQkFoM2tOd051IiwiaWF0' +
      'IjoxNTM4NzUyMTYzLCJleHAiOjE1Mzg3NTQ4NjN9.OqDz7udKMrDj0rYYiyrNObBSNXhw4lY1Vc7hdVvLjqA'
    });
    const id: string = '5bb72709cf340815b5bcbc36';

    return this.http.get<{success: boolean; wishlist: WishList}>
    (`${environment.baseUrl}/wishlists/${id}`, {headers});
  }
}
