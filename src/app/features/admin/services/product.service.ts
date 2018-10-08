import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../../shared/models/product.model';
import { environment } from '../../../../environments/environment';
@Injectable()
export class ProductService {

  private productUrl: string = `${environment.baseUrl}/products`;

  constructor(private http: HttpClient) {}

  addProduct(product: Product): any {
    return this.http.post<Product>(this.productUrl, product);
  }

}
