import {Injectable} from '@angular/core';

import {Category} from '../../../shared/models/category.model';

import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class CategoryService {

  public httpOptions: any = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  private categoryUrl: string = 'http://localhost:8000/categories';

  constructor(private http: HttpClient) {}

  addCategory(category: Category): any {

    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYjYyNzMwMDE'
      + 'zMjU3NTQ2NzJlZTAzYyIsImxvZ2luIjoiQW50b244IiwicGFzc3dvcmQiOiIkMmIkMTIkYnJyWnNjWVBRZz'
      + 'Z6aEhibGtmSXVNZURCeXMzQUV5M1pYV0ZvWExMNUpUSnpnYzJrbzFNdm0iLCJpYXQiOjE1Mzg3MzIwNjUsI'
      + 'mV4cCI6MTUzODczNDc2NX0.7GqxmikyqCs9_mK4VdYATrRzc7oKuSbLAZYhc0j6N3g'
    });

    return this.http.post<Category>(this.categoryUrl, category, { headers });
  }

}
