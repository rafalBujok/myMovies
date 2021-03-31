import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { GridComponent } from '../components/grid/grid.component';
import { FooterComponent } from '../components/grid/footer/footer.component';
import { HeaderComponent } from '../components/grid/header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { NavComponent } from '../components/grid/nav/nav.component';



@NgModule({
  declarations: [GridComponent, HeaderComponent,
    FooterComponent, NavComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    AppRoutingModule,

  ],
  exports: [
    GridComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    AppRoutingModule
  ]
})
export class SharedModule { }
