import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { GridComponent } from '../components/grid/grid.component';
import { FooterComponent } from '../components/grid/footer/footer.component';
import { HeaderComponent } from '../components/grid/header/header.component';
import { AddMovieComponent } from '../components/add-movie/add-movie.component';
import { MoviesGalleryComponent } from '../components/movies-gallery/movies-gallery.component';
import { MovieApiService } from '../../app/services/movie-api.service';
import { HttpClientModule } from '@angular/common/http';
import { SubjectMessangerService } from '../services/subject-messanger.service';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { DisplayMovieComponent } from '../components/movies-gallery/display-movie/display-movie.component';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ShortNumberPipe } from '../pipes/short-number.pipe';




@NgModule({
  declarations:
    [
      GridComponent,
      HeaderComponent,
      FooterComponent,
      MoviesGalleryComponent,
      AddMovieComponent,
      DisplayMovieComponent,
      ShortNumberPipe
    ],
  imports: [
    CommonModule,
    MatGridListModule,

    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule

  ],
  exports: [
    GridComponent,
    HeaderComponent,
    FooterComponent,
    MoviesGalleryComponent,
    AddMovieComponent,
    MatInputModule,
    FormsModule,
    DisplayMovieComponent,
    MatButtonModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    ShortNumberPipe
  ],
  providers: [MovieApiService, SubjectMessangerService],
})
export class SharedModule { }
