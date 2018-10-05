import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material/material.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class SharedModule { }
