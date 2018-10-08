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
      'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYjcyNzA5Y2YzNDA4MTViNW' +
      'JjYmMzNiIsImxvZ2luIjoiYSIsInBhc3N3b3JkIjoiJDJiJDEyJC5WQUxvRjBFS1pBUmY0S0VPdWdBUHU5YVNtNzkvRHQy' +
      'Um5YZjFseGhxYnBHQkFoM2tOd051IiwiaWF0IjoxNTM4OTk4' +
      'NzIwLCJleHAiOjE1MzkwMDE0MjB9.qqiMGblO_aaOk0oGwrh2UzzBOiYQnepn54qHrZjMZCM'
    });
    const id: string = '5bb72709cf340815b5bcbc36';

    return this.http.get<{success: boolean; wishlist: WishList}>
    (`${environment.baseUrl}/wishlists/${id}`, {headers});
  }
}
