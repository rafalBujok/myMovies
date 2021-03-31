import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { GridComponent } from '../components/grid/grid.component';
import { FooterComponent } from '../components/grid/footer/footer.component';
import { HeaderComponent } from '../components/grid/header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { NavComponent } from '../components/grid/nav/nav.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { AddMovieComponent } from '../components/add-movie/add-movie.component';
import { MoviesGalleryComponent } from '../components/movies-gallery/movies-gallery.component';
import { FavoritesComponent } from '../components/favorites/favorites.component';
import { MovieApiService } from '../../app/services/movie-api.service';
import { HttpClientModule } from '@angular/common/http';
import { SubjectMessangerService } from '../services/subject-messanger.service';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations:
    [
      GridComponent,
      HeaderComponent,
      FooterComponent,
      NavComponent,
      PageNotFoundComponent,
      MoviesGalleryComponent,
      AddMovieComponent,
      FavoritesComponent,
    ],
  imports: [
    CommonModule,
    MatGridListModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    FormsModule

  ],
  exports: [
    GridComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    AppRoutingModule,
    PageNotFoundComponent,
    MoviesGalleryComponent,
    AddMovieComponent,
    FavoritesComponent,
    MatInputModule,
    FormsModule
  ],
  providers: [MovieApiService, SubjectMessangerService],
})
export class SharedModule { }
