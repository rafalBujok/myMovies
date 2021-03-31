import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  private _youtubeKey: string = environment.youtubeKey;
  constructor(private http: HttpClient) { }

  getVideoFromYoutube(id: string): Observable<Object> {
    let url: string = 'https://www.googleapis.com/youtube/v3/videos?id=' + id + '&key=' + this._youtubeKey + '&part=snippet,statistics'
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))

  }
}
