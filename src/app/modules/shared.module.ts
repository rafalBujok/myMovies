import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { GridComponent } from '../components/grid/grid.component';



@NgModule({
  declarations: [GridComponent],
  imports: [
    CommonModule,
    MatGridListModule
  ],
  exports: [
    GridComponent
  ]
})
export class SharedModule { }
