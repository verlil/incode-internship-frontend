import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { selectIsAuthenticated } from '../@store/selectors/login.selectors';
import { Store, select } from '@ngrx/store';
import { State } from '../../@store';
import { Go } from '../../@store/actions';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

    isAuthenticated: boolean = false;
    constructor(private store: Store<State>) {
        this.store.pipe(select(selectIsAuthenticated)).subscribe(
        (isLoaded: boolean) => {
          if (isLoaded) {
            this.isAuthenticated = true;
          }
        }
      );
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        const url: string = state.url;

        return this.checkLogin(url);
      }

      checkLogin(url: string): boolean {

        if (this.isAuthenticated) { return true; }

        this.store.dispatch(new Go({path: ['login']}));

        return false;
      }
}
