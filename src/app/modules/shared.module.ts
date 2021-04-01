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
import { DisplayMoviesComponent } from '../components/movies-gallery/display-movies/display-movies.component';
import { DisplayMovieComponent } from '../components/movies-gallery/display-movies/display-movie/display-movie.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations:
    [
      GridComponent,
      HeaderComponent,
      FooterComponent,
      MoviesGalleryComponent,
      AddMovieComponent,
      DisplayMoviesComponent,
      DisplayMovieComponent,
    ],
  imports: [
    CommonModule,
    MatGridListModule,

    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatButtonModule

  ],
  exports: [
    GridComponent,
    HeaderComponent,
    FooterComponent,
    MoviesGalleryComponent,
    AddMovieComponent,
    MatInputModule,
    FormsModule,
    DisplayMoviesComponent,
    DisplayMovieComponent,
    MatButtonModule
  ],
  providers: [MovieApiService, SubjectMessangerService],
})
export class SharedModule { }
