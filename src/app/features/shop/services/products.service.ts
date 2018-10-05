import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Product } from '../../../shared/models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<{ success: boolean, products: Product[] }> {
    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYjVjYzA1'
        + 'YmRlM2RmMWE5N2MxYzE2NSIsImxvZ2luIjoidXNlciIsInBhc3N3b3JkIjoiJDJiJDEyJGZnSzFDYmN'
        + 'rajVwNWVWLjdZSG5qZXU5QjFadi56Q29NZThDeTc5cmpGS3RHTE40a01kd3ZDIiwiaWF0IjoxNTM4Nz'
        + 'E5NDY3LCJleHAiOjE1Mzg3MjIxNjd9.WbSSa4yHa8rdjWaDmMGJfC25_maSl9g20qDgmo9lEbU'
    });

    return this.http.get<{ success: boolean, products: Product[] }>(`http://localhost:8000/products`, {headers});
  }

}
