import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Category } from '../../../shared/models/category';

@Injectable()
export class CategoriesService {
  private categoriesUrl: string = `${environment.baseUrl}/categories`;

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<{ success: boolean, categories: Category[] }> {
    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYjVjYzA1'
      + 'YmRlM2RmMWE5N2MxYzE2NSIsImxvZ2luIjoidXNlciIsInBhc3N3b3JkIjoiJDJiJDEyJGZnSzFDYmNr'
      + 'ajVwNWVWLjdZSG5qZXU5QjFadi56Q29NZThDeTc5cmpGS3RHTE40a01kd3ZDIiwiaWF0IjoxNTM5MDAx'
      + 'NzE4LCJleHAiOjE1MzkwMDQ0MTh9.gLwiL_TF_b_T0GEbJJGkPfWU59cMvMg56ru-zLbFckM'
    });

    return this.http.get<{ success: boolean, categories: Category[] }>(this.categoriesUrl, {headers});
  }

}
