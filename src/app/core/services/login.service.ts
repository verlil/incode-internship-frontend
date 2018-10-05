import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { UserAuthModel } from '../../shared/models/UserAuthModel';
import { Observable } from 'rxjs';
import { LoginResponseModel } from '../../shared/models/LoginResponseModel';
import { UserResponseModel } from '../../shared/models/UserResponseModel';
import { BASE_URL } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  logIn(user: UserAuthModel): Observable<LoginResponseModel> {
    return this.http.post<LoginResponseModel>(`${BASE_URL}/login`, user);
  }

  getUserByToken(token: string): Observable<UserResponseModel> {
    return this.http.get<UserResponseModel>(`${BASE_URL}/user`, {headers: new HttpHeaders({'Authorization': `Bearer ${token}`})});
  }
}
