import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule
  ]
})
export class MaterialModule { }
