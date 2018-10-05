import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../../shared/shared.module';

import { reducers, effects } from './@store';

import * as fromServices from './services';
import * as fromContainers from './containers';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forFeature('admin', reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [
    AdminComponent,
    ...fromContainers.components],
  providers:  [...fromServices.services, HttpClientModule]
})
export class AdminModule { }
