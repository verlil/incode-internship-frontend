import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';
import { LoginEffects } from './@store/effects/login.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CoreComponent } from '../core/core.component';
import { LoginComponent } from './components/login/login.component';
import { LoginContainerComponent } from './containers/login-container/login-container.component';
import { loginReducer } from './@store/reducers/login.reducer';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forRoot([LoginEffects])
  ],
  declarations: [CoreComponent, LoginComponent, LoginContainerComponent]
})
export class CoreModule { }
