import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { State } from '../../@store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import * as coreStore from '../@store';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

    isAuthenticated$: Observable<boolean>;
    constructor(private store: Store<State>) {
      this.isAuthenticated$ = this.store.pipe(select(coreStore.selectLoginState)).pipe(
        filter((state: coreStore.LoginState) => state.loaded),
        map((state: coreStore.LoginState) => state.isAuthenticated)
      );
    }

    canActivate(): Observable<boolean> {
      return this.isAuthenticated$;
    }

}
