import { Component } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { State } from './@store';
import { Observable } from 'rxjs';

import * as coreStore from './core/@store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'incode-internship-frontend';
  token: string = localStorage.getItem('token');
  isLoaded$: Observable<boolean>;

  constructor (private store: Store<State>) {
    this.store.dispatch(new coreStore.LogInSuccess(this.token));
    this.isLoaded$ = this.store.pipe(select(coreStore.selectLoaded));
  }
}
