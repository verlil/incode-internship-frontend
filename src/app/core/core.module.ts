import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CoreComponent } from '../core/core.component';
import { reducers, effects } from './@store';

import * as fromContainers from './containers';
import * as fromComponents from './components';
import { HeaderComponent } from './containers/header/header.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature('core', reducers),
    EffectsModule.forFeature(effects),

  ],
  declarations: [CoreComponent, ...fromContainers.containers, fromComponents.components, HeaderComponent],
  exports: [...fromContainers.containers, fromComponents.components]
})
export class CoreModule { }
