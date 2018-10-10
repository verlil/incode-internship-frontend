import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ShopComponent } from './shop.component';
import { ProductPageComponent } from './containers/product-page/product-page.component';

const routes: Routes = [
  { path: '', component: ShopComponent},
  { path: 'product/:id', component: ProductPageComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule {
}
