import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Filter } from '../models/filter';

@Injectable()
export class FiltersService {

  constructor(private http: HttpClient) {
  }

  getFilters(): Observable<{ success: boolean, filters: Filter }> {
    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6I'
        + 'jViYjVjYzA1YmRlM2RmMWE5N2MxYzE2NSIsImxvZ2luIjoidXNlciIsInBhc3N3b3JkI'
        + 'joiJDJiJDEyJGZnSzFDYmNrajVwNWVWLjdZSG5qZXU5QjFadi56Q29NZThDeTc5cmpGS3'
        + 'RHTE40a01kd3ZDIiwiaWF0IjoxNTM4NzMzMDgzLCJleHAiOjE1Mzg3MzU3ODN9.7BEbV-'
        + 'Ei6PGTYNiXfzN-kFw3kwDFSn2de_fmju5xLrg'
    });

    return this.http.get<{ success: boolean, filters: Filter }>(`http://localhost:8000/filters`, {headers});
  }

}
