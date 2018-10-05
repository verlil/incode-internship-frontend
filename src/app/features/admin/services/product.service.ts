import {Injectable} from '@angular/core';

import {Product} from '../../../shared/models/product.model';

import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ProductService {

  public httpOptions: any = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  private productUrl: string = 'http://localhost:8000/products';

  constructor(private http: HttpClient) {}

  addProduct(product: Product): any {

    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYjYyNzMwMDEzMjU3NTQ'
      + '2NzJlZTAzYyIsImxvZ2luIjoiQW50b244IiwicGFzc3dvcmQiOiIkMmIkMTIkYnJyWnNjWVBRZzZ6aEhibGtmSXVNZUR'
      + 'CeXMzQUV5M1pYV0ZvWExMNUpUSnpnYzJrbzFNdm0iLCJpYXQiOjE1Mzg3MzIwNjUsImV4cCI6MTUzODczNDc2NX0.7Gqx'
      + 'mikyqCs9_mK4VdYATrRzc7oKuSbLAZYhc0j6N3g'
    });

    return this.http.post<Product>(this.productUrl, product, { headers });
  }

}
