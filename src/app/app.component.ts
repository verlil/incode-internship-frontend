import { Component } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { State } from './@store';
import { Observable } from 'rxjs';

import * as coreStore from './core/@store';
import * as rootStore from './@store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  token: string = localStorage.getItem('token');
  isLoading$: Observable<boolean>;
  user$: Observable<string>;
  isAuthenticated$: Observable<boolean>;

  constructor (private store: Store<State>) {
    this.store.dispatch(new coreStore.LogInSuccess(this.token));
    this.isLoading$ = this.store.pipe(select(coreStore.selectLoading));
    this.user$ = this.store.pipe(select(coreStore.selectUser));
    this.isAuthenticated$ = this.store.pipe(select(coreStore.selectIsAuthenticated));
  }

  onLogout(): void {
    this.store.dispatch(new coreStore.LogOutAction());
    this.store.dispatch(new rootStore.Go({path: ['login']}));
  }

}
