import { Component } from '@angular/core';
import { take } from 'rxjs/operators';
import { Video } from 'src/app/models/video';
import { MovieApiService } from 'src/app/services/movie-api.service';
import { SubjectMessangerService } from 'src/app/services/subject-messanger.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent {
  video: Video = {
    id: '', title: '', viewCount: '', likeCount: '', publishedAt: '', thumbnail: ''
  }
  id: string = ''
  constructor(private api: MovieApiService, private subjectMessage: SubjectMessangerService) { }
  getMovie(id: string) {
    this.api.getVideoFromYoutube(id).pipe(take(1)).subscribe((val: any) => {
      this.video.id = id;
      this.video.title = val.items[0].snippet.title;
      this.video.viewCount = val.items[0].statistics.viewCount;
      this.video.likeCount = val.items[0].statistics.likeCount;
      this.video.publishedAt = val.items[0].snippet.publishedAt;
      this.video.thumbnail = val.items[0].snippet.thumbnails.medium.url;
      this.subjectMessage.sendMessage(this.video)
    }
    )
  }
}
