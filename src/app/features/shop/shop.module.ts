import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from './@store';

import { SharedModule } from '../../shared/shared.module';
import { ShopRoutingModule } from './shop-routing.module';

// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';

// services
import * as fromServices from './services';
import { ProductPageComponent } from './components/product-page/product-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ShopRoutingModule,
    StoreModule.forFeature('shop', reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [...fromServices.services],
  declarations: [...fromContainers.containers, ...fromComponents.components, ProductPageComponent],
  exports: [...fromContainers.containers, ...fromComponents.components],
})
export class ShopModule {
}
