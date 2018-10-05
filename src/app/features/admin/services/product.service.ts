import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from '../../../shared/models/product.model';
import { environment } from '../../../../environments/environment';
@Injectable()
export class ProductService {

  private productUrl: string = `${environment.baseUrl}/products`;

  constructor(private http: HttpClient) {}

  addProduct(product: Product): any {

    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYjYyNzMwMDEzMjU3NTQ2NzJlZ'
      + 'TAzYyIsImxvZ2luIjoiQW50b244IiwicGFzc3dvcmQiOiIkMmIkMTIkYnJyWnNjWVBRZzZ6aEhibGtmSXVNZURCeXMzQUV'
      + '5M1pYV0ZvWExMNUpUSnpnYzJrbzFNdm0iLCJpYXQiOjE1Mzg3NDg2NTEsImV4cCI6MTUzODc1MTM1MX0.eMNOGvfGPvV5O'
      + 'Sl1aw6bcYwkiv8-DwWxiGKLwDyR4IU'
    });

    return this.http.post<Product>(this.productUrl, product, { headers });
  }

}
