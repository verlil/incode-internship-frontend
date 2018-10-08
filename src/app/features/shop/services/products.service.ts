import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Product } from '../../../shared/models/product';
import { environment } from '../../../../environments/environment';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<{ success: boolean, products: Product[] }> {
    return this.http.get<{ success: boolean, products: Product[] }>(`${environment.baseUrl}/products`);
  }

}
