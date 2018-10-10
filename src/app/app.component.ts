import { Component } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { State } from './@store';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import * as coreStore from './core/@store';
import * as rootStore from './@store';
import { UserAuthModel } from './shared/models/UserAuthModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  token: string = localStorage.getItem('token');
  isLoaded$: Observable<boolean>;
  userLogin$: Observable<string>;
  isAuthenticated$: Observable<boolean>;

  constructor (private store: Store<State>) {
    this.store.dispatch(new coreStore.LogInSuccess(this.token));
    this.isLoaded$ = this.store.pipe(select(coreStore.selectLoaded));
    this.userLogin$ = this.store.pipe(select(coreStore.selectUser)).pipe(
      map((user: UserAuthModel) => user.login)
    );
    this.authenticatedCheck();
  }

  onLogout(): void {
    this.store.dispatch(new coreStore.LogOutAction());
    this.authenticatedCheck();
    this.store.dispatch(new rootStore.Go({path: ['login']}));
  }

  authenticatedCheck (): void {
    this.isAuthenticated$ = this.store.pipe(select(coreStore.selectLoginState)).pipe(
      filter((state: coreStore.LoginState) => state.loaded),
      map((state: coreStore.LoginState) => state.isAuthenticated)
    );
  }

}
