import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CoreComponent } from '../core/core.component';
import { reducers, effects } from './@store';

import * as fromContainers from './containers';
import * as fromComponents from './components';
// import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature('core', reducers),
    EffectsModule.forFeature(effects),

  ],
  declarations: [CoreComponent, ...fromContainers.containers, fromComponents.components],
  exports: [...fromContainers.containers, fromComponents.components]
})
export class CoreModule { }
