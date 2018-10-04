import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Store, select } from '@ngrx/store';

import { LogInAction } from '../../@store/actions/login.actions';
import {LoginState, selectLoaded} from '../../@store/selectors/login.selectors';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.css']
})
export class LoginContainerComponent {
  token: boolean;
  isUserAuthenticated: boolean;
  constructor(
    private store: Store<LoginState>,
    private router: Router
  ) {
    this.store.pipe(select(selectLoaded)).subscribe(
      (isLoaded: boolean) => {
        if (isLoaded === true) {
          this.router.navigate(['/admin']);
        }
      }
    );
  }

  onLogin(event: any): void {
    this.store.dispatch(new LogInAction(event));
  }
}
