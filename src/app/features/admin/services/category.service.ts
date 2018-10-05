import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Category } from '../../../shared/models/category.model';

import { environment } from '../../../../environments/environment';

@Injectable()
export class CategoryService {

  private categoryUrl: string = `${environment.baseUrl}categories`;

  constructor(private http: HttpClient) {}

  addCategory(category: Category): any {

    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYjYyNzMwMDEzMjU3NTQ2N'
      + 'zJlZTAzYyIsImxvZ2luIjoiQW50b244IiwicGFzc3dvcmQiOiIkMmIkMTIkYnJyWnNjWVBRZzZ6aEhibGtmSXVNZURCeX'
      + 'MzQUV5M1pYV0ZvWExMNUpUSnpnYzJrbzFNdm0iLCJpYXQiOjE1Mzg3NDM5NDYsImV4cCI6MTUzODc0NjY0Nn0.y3zw'
      + 'WHb-aFUf9NaDxmchWUOvMSjhVQQFIADyM4016yk'
    });

    return this.http.post<Category>(this.categoryUrl, category, { headers });
  }

}
