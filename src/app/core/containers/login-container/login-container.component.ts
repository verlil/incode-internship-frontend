import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { LogInAction } from '../../@store/actions/login.actions';
import { LoginState } from '../../@store/reducers/login.reducer';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.css']
})
export class LoginContainerComponent {
  isUserAuthenticated: boolean;
  constructor(private store: Store<LoginState>) {
    this.store.select('loginReducer')
      .subscribe((state: any) => {
        this.isUserAuthenticated = state.isAuthenticated;
      });
  }

  onLogin(event: any): void {
    this.store.dispatch(new LogInAction(event));
  }
}
