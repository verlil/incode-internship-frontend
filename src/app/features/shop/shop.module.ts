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
import { CartComponent } from './containers/cart/cart.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ShopRoutingModule,
    StoreModule.forFeature('shop', reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [...fromServices.services],
  declarations: [...fromContainers.containers, ...fromComponents.components, CartComponent],
  exports: [...fromContainers.containers, ...fromComponents.components],
})
export class ShopModule {
}
