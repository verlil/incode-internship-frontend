import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: 'example', component: AdminComponent },
  { path: '**', redirectTo: 'example', pathMatch: 'full' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
