import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AdminRoutingModule } from './admin-routing.module';
import { AddProductComponent } from './containers/add-product/add-product.component';
import { AddCategoryComponent } from './containers/add-category/add-category.component';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../../shared/shared.module';

import { reducers, effects } from './@store';

import * as fromServices from './services';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forFeature('AdminReducer', reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [
    AdminComponent,
    AddProductComponent,
    AddCategoryComponent],
  providers:  [...fromServices.services, HttpClientModule]
})
export class AdminModule { }
