import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { UserAuthModel } from '../../shared/models/UserAuthModel';
import { UserModel } from '../../shared/models/UserModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginURL: string = 'http://localhost:8000/login';
  private getUserURL: string = 'http://localhost:8000/user';

  constructor(private http: HttpClient) {
  }

  logIn(user: UserAuthModel): Observable<any> {
    return this.http.post<UserAuthModel>(this.loginURL, user);
  }

  getUserByToken(token: string): Observable<any> {
    return this.http.get<UserModel>(this.getUserURL, {headers: new HttpHeaders({'Authorization': `Bearer ${token}`})});
  }
}
