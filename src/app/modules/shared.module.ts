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

import { DisplayGridMovieComponent } from '../components/movies-gallery/grid-movie/display-grid-movie/display-grid-movie.component';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ShortNumberPipe } from '../pipes/short-number.pipe';
import { GridMovieComponent } from '../components/movies-gallery/grid-movie/grid-movie.component';
import { ListMovieComponent } from '../components/movies-gallery/list-movie/list-movie.component';
import { DisplayListMovieComponent } from '../components/movies-gallery/list-movie/display-list-movie/display-list-movie.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalMovieComponent } from '../components/modal-movie/modal-movie.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { VimeoUrlPipe } from '../pipes/vimeo-url.pipe';





@NgModule({
  declarations:
    [
      GridComponent,
      HeaderComponent,
      FooterComponent,
      MoviesGalleryComponent,
      AddMovieComponent,
      DisplayGridMovieComponent,
      ShortNumberPipe,
      GridMovieComponent,
      ListMovieComponent,
      DisplayListMovieComponent,
      ModalMovieComponent,
      VimeoUrlPipe
    ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatDialogModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    YouTubePlayerModule


  ],
  exports: [
    GridComponent,
    HeaderComponent,
    FooterComponent,
    MoviesGalleryComponent,
    AddMovieComponent,
    MatInputModule,
    FormsModule,
    DisplayGridMovieComponent,
    MatButtonModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    ShortNumberPipe,
    GridMovieComponent,
    ListMovieComponent,
    DisplayListMovieComponent,
    MatDialogModule,
    ModalMovieComponent,
    YouTubePlayerModule,
    VimeoUrlPipe

  ],
  providers: [MovieApiService, SubjectMessangerService],
})
export class SharedModule { }
