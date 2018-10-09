import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Category } from '../../../shared/models/category.model';

import { environment } from '../../../../environments/environment';

@Injectable()
export class CategoryService {

  private categoryUrl: string = `${environment.baseUrl}/categories`;

  constructor(private http: HttpClient) {}

  addCategory(category: Category): any {
    return this.http.post<Category>(this.categoryUrl, category);
  }
}
