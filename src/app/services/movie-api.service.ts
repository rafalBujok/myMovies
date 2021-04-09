import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  private youtubeKey: string = environment.youtubeKey;
  readonly youtubeUrl = 'https://www.googleapis.com/youtube/v3/videos'
  private vimeoToken: string = environment.vimeoAccessToken;
  readonly vimeoUrl = 'https://api.vimeo.com/videos/'

  constructor(private http: HttpClient) { }

  getVideoFromYoutube(id: string): Observable<object> {
    const url: string = `${this.youtubeUrl}?id=${id}&key=${this.youtubeKey}&part=snippet,statistics`;
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }));
  }
  getMovieFromVimeo(id: string): Observable<object> {
    const headers = { Authorization: 'Bearer ' + this.vimeoToken };
    const url: string = `${this.vimeoUrl}${id}`;
    return this.http.get(url, { headers }).pipe(map((res) => {
      return res;
    }));

  }
}
