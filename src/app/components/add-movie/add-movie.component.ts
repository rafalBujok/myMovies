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
      //this.video.publishedAt = val.items[0].snippet.publishedAt;
      this.video.publishedAt = new Date().toString();
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
      this.video.likeCount = val.metadata.connections.likes.total.toString();
      //this.video.publishedAt = val.created_time;
      this.video.publishedAt = new Date().toString();
      this.video.thumbnail = val.pictures.sizes[2].link
      this.video.vimeoVideo = true;
      console.log(this.video)
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
  getHardcodeMovies() {
    this.subjectMessage.sendMessage({
      "id": "eEO6v-YiS00",
      "title": "Status Quo - Rockin' All Over The World (Live Aid 1985)",
      "viewCount": "3054361",
      "likeCount": "10642",
      "publishedAt": "Sun Apr 04 2021 14:57:25 GMT+0200 (czas środkowoeuropejski letni)",
      "thumbnail": "https://i.ytimg.com/vi/eEO6v-YiS00/mqdefault.jpg",
      "youtubeVideo": true,
      "vimeoVideo": false
    })
    this.subjectMessage.sendMessage({
      "id": "8Pa9x9fZBtY",
      "title": "Dire Straits - Sultans Of Swing (Alchemy Live)",
      "viewCount": "173375976",
      "likeCount": "781286",
      "publishedAt": "Sun Apr 04 2021 15:02:16 GMT+0200 (czas środkowoeuropejski letni)",
      "thumbnail": "https://i.ytimg.com/vi/8Pa9x9fZBtY/mqdefault.jpg",
      "youtubeVideo": true,
      "vimeoVideo": false
    })
    this.subjectMessage.sendMessage({
      "id": "CqnU_sJ8V-E",
      "title": "Free Bird",
      "viewCount": "30750980",
      "likeCount": "295352",
      "publishedAt": "Sun Apr 04 2021 15:03:20 GMT+0200 (czas środkowoeuropejski letni)",
      "thumbnail": "https://i.ytimg.com/vi/CqnU_sJ8V-E/mqdefault.jpg",
      "youtubeVideo": true,
      "vimeoVideo": false
    })
    this.subjectMessage.sendMessage({
      "id": "109988488",
      "title": "Jimi Hendrix ~ Are You Experienced",
      "viewCount": "",
      "likeCount": "198",
      "publishedAt": "Sun Apr 04 2021 15:05:33 GMT+0200 (czas środkowoeuropejski letni)",
      "thumbnail": "https://i.vimeocdn.com/video/494090497_295x166.jpg?r=pad",
      "youtubeVideo": false,
      "vimeoVideo": true
    })
    this.subjectMessage.sendMessage({
      "id": "530298833",
      "title": "The Revolt",
      "viewCount": "",
      "likeCount": "310",
      "publishedAt": "Sun Apr 04 2021 15:07:00 GMT+0200 (czas środkowoeuropejski letni)",
      "thumbnail": "https://i.vimeocdn.com/video/1097668351_295x166.jpg?r=pad",
      "youtubeVideo": false,
      "vimeoVideo": true
    })
  }
}
