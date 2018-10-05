import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Category } from '../../../shared/models/category.model';

import { environment } from '../../../../environments/environment';

@Injectable()
export class CategoryService {

  private categoryUrl: string = `${environment.baseUrl}/categories`;

  constructor(private http: HttpClient) {}

  addCategory(category: Category): any {

    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYjYyNzMwMDEzMjU3NTQ2NzJl'
      + 'ZTAzYyIsImxvZ2luIjoiQW50b244IiwicGFzc3dvcmQiOiIkMmIkMTIkYnJyWnNjWVBRZzZ6aEhibGtmSXVNZURCeXMzQU'
      + 'V5M1pYV0ZvWExMNUpUSnpnYzJrbzFNdm0iLCJpYXQiOjE1Mzg3NDg2NTEsImV4cCI6MTUzODc1MTM1MX0.eMNOGvfGPvV5O'
      + 'Sl1aw6bcYwkiv8-DwWxiGKLwDyR4IU'
    });

    return this.http.post<Category>(this.categoryUrl, category, { headers });
  }

}
