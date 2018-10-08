import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Category } from '../../../shared/models/category';

@Injectable()
export class CategoriesService {
  private categoriesUrl: string = `${environment.baseUrl}/categories`;

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<{ success: boolean, categories: Category[] }> {

    return this.http.get<{ success: boolean, categories: Category[] }>(this.categoriesUrl);
  }

}
