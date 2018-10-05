import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from '../../../shared/models/product.model';
import { environment } from '../../../../environments/environment';
@Injectable()
export class ProductService {

  private productUrl: string = `${environment.baseUrl}products`;

  constructor(private http: HttpClient) {}

  addProduct(product: Product): any {

    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYjYyNzMwMDEzMjU3NTQ2'
      + 'NzJlZTAzYyIsImxvZ2luIjoiQW50b244IiwicGFzc3dvcmQiOiIkMmIkMTIkYnJyWnNjWVBRZzZ6aEhibGtmSXVNZ'
      + 'URCeXMzQUV5M1pYV0ZvWExMNUpUSnpnYzJrbzFNdm0iLCJpYXQiOjE1Mzg3NDM5NDYsImV4cCI6MTUzODc0Nj'
      + 'Y0Nn0.y3zwWHb-aFUf9NaDxmchWUOvMSjhVQQFIADyM4016yk'
    });

    return this.http.post<Product>(this.productUrl, product, { headers });
  }

}
