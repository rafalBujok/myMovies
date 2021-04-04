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
    id: '', title: '', viewCount: '', likeCount: '', publishedAt: '', thumbnail: '', youtubeVideo: false, vimeoVideo: false
  }
  id: string = ''
  constructor(private api: MovieApiService, private subjectMessage: SubjectMessangerService) { }
  getYoutubeMovie(id: string): void {
    this.api.getVideoFromYoutube(id).pipe(take(1)).subscribe((val: any) => {
      this.video.id = id;
      this.video.title = val.items[0].snippet.title;
      this.video.viewCount = val.items[0].statistics.viewCount;
      this.video.likeCount = val.items[0].statistics.likeCount;
      this.video.publishedAt = val.items[0].snippet.publishedAt;
      this.video.thumbnail = val.items[0].snippet.thumbnails.medium.url;
      this.video.youtubeVideo = true;
      this.subjectMessage.sendMessage(this.video)
    }
    )
    this.resetInput();
  }
  getVimeoMovie(id: string): void {
    this.api.getMovieFromVimeo(id).pipe(take(1)).subscribe((val: any) => {
      this.video.id = id;
      this.video.title = val.name;
      this.video.likeCount = val.metadata.connections.likes.total;
      this.video.publishedAt = val.created_time;
      this.video.thumbnail = val.pictures.sizes[2].link
      this.video.vimeoVideo = true;
      this.subjectMessage.sendMessage(this.video)
    }
    )
    this.resetInput();
  }

  checkInput(id: string): void {
    // https://www.youtube.com/watch?v=4JOAqRS_lms => 4JOAqRS_lms
    if (id.length === 43) {
      id = id.slice(32, 43)
      this.video.youtubeVideo = true;
      return this.getYoutubeMovie(id)
    }
    // https://youtu.be/vJ3a_AuEW18 => vJ3a_AuEW18
    if (id.length === 28) {
      id = id.slice(17, 28)
      this.video.youtubeVideo = true;
      return this.getYoutubeMovie(id)
    }
    // vJ3a_AuEW18 => vJ3a_AuEW18
    if (id.length === 11) {
      this.video.youtubeVideo = true;
      return this.getYoutubeMovie(id)
    }
    // https://vimeo.com/138882294 => 138882294
    if (id.length === 27) {
      id = id.slice(18, 27)
      this.video.vimeoVideo = true;
      return this.getVimeoMovie(id)
    }
    // 138882294 => 138882294
    if (id.length === 9) {
      this.video.vimeoVideo = true;
      return this.getVimeoMovie(id)
    }
  }
  resetInput(): void {
    this.video = {
      id: '', title: '', viewCount: '', likeCount: '', publishedAt: '', thumbnail: '', youtubeVideo: false, vimeoVideo: false
    }
    this.id = ''
  }
}
