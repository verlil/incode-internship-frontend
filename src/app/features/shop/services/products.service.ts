import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Product } from '../../../shared/models/product';
import { Filter } from '../models/filter';

@Injectable()
export class ProductsService {
  private productUrl: string = `${environment.baseUrl}/products`;

  constructor(private http: HttpClient) {
  }

  getProducts(filters?: Filter): Observable<{ success: boolean, products: Product[]}> {
    const query: string = this.generateQueryString(filters);

    return this.http.get<{ success: boolean, products: Product[]}>(`${this.productUrl}${query}`);
  }

  private generateQueryString(filter: Filter): string {
    let query: string = '';
    let and: string = '';

    if (filter) {
      query += '?';
      if (filter.category_id) {
        query += `${and}category=${filter.category_id}`;
        and = '&';
      }

      if (filter.stock) {
        query += `${and}stock=${filter.stock}`;
        and = '&';
      }

      if (filter.price_from || filter.price_to) {
        const price_from: any = filter.price_from == null ? '' : filter.price_from;
        const price_to: any = filter.price_to == null ? '' : filter.price_to;
        query += `${and}price=${price_from}to${price_to}`;
      }
    }

    return query;
  }

}
