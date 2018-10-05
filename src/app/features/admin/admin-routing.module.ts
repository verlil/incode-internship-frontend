import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { AddProductComponent } from './containers/add-product/add-product.component';
import { AddCategoryComponent } from './containers/add-category/add-category.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'addproduct', component: AddProductComponent, },
      { path: 'addcategory', component: AddCategoryComponent },
    ]
  },
  { path: '**', redirectTo: 'admin', pathMatch: 'full' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
