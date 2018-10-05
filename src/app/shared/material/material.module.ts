import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatSidenavModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatSidenavModule
  ]
})
export class MaterialModule { }
