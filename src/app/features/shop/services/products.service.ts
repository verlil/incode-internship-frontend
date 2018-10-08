import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYjVjYzA1YmRlM2RmMWE5'
        + 'N2MxYzE2NSIsImxvZ2luIjoidXNlciIsInBhc3N3b3JkIjoiJDJiJDEyJGZnSzFDYmNrajVwNWVWLjdZSG5qZXU5Qj'
        + 'Fadi56Q29NZThDeTc5cmpGS3RHTE40a01kd3ZDIiwiaWF0IjoxNTM5MDAxNzE4LCJleHAiOjE1MzkwMDQ0MTh9.gLwiL'
        + '_TF_b_T0GEbJJGkPfWU59cMvMg56ru-zLbFckM'
    });
    let query: string = '';

    const filtersCopy: Filter = { ...filters };

    // fixing 'null' fields
    for (const key in filters) {
      if (filters.hasOwnProperty(key)) {
        if (!filters[key]) {
          filtersCopy[key] = '';
        }
      }
    }

    // checking for 'undefined' filters
    if (filters) {
      query = '?price=' + filtersCopy.price_from + 'to' + filtersCopy.price_to
        + '&stock=' + filtersCopy.stock
        + '&category=' + filtersCopy.category_id;
    }

    return this.http.get<{ success: boolean, products: Product[]}>(this.productUrl + query, {headers});
  }

}
