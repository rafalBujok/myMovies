import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared.module';
import { MoviesGalleryComponent } from './components/movies-gallery/movies-gallery.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';





@NgModule({
  declarations: [
    AppComponent,
    MoviesGalleryComponent,
    AddMovieComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
