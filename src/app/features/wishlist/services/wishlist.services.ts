import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

import { WishList } from '../models/wishlist';

@Injectable()
export class WishlistService {
  constructor(private http: HttpClient) {}

  getWishList(): Observable<WishList> {

    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbi' +
      'I6ImEiLCJwYXNzd29yZCI6IiQyYiQxMiQuVkFMb0YwRUtaQVJmNEtFT3VnQVB1OWFTbTc5L0R0Ml' +
      'JuWGYxbHhocWJwR0JBaDNrTndOdSIsIl9pZCI6IjViYjcyNzA5Y2YzNDA4MTViNWJjYmMzNiIsImlkIjoi' +
      'NWJiNzI3MDljZjM0MDgxNWI1YmNiYzM2IiwiaWF0IjoxNTM4NzI5Nz' +
      'M3LCJleHAiOjE1Mzg3MzI0Mzd9.JFC63ZQEANYM5pd6MKnIhk5SaNh1UYBzpMSJppFEPEU'
    });

    const id: string = '5bb72709cf340815b5bcbc36';

    return this.http.get<WishList>(`http://localhost:8000/wishlists/${id}`, {headers}); // { headers: headers }
  }
}
