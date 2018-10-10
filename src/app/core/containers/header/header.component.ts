import { Component } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { State } from '../../../@store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import * as coreStore from '../../@store';
import * as rootStore from '../../../@store';
import { UserAuthModel } from '../../../shared/models/UserAuthModel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  isAuthenticated$: Observable<boolean>;
  userLogin$: Observable<string>;
  constructor (private store: Store<State>) {
    this.authenticatedCheck();
    this.userLogin$ = this.store.pipe(select(coreStore.selectUser)).pipe(
      map((user: UserAuthModel) => user.login)
    );
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
