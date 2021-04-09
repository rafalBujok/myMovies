import { Component } from '@angular/core';
import { take } from 'rxjs/operators';
import { Video } from '@models/video';
import { MovieApiService } from '@services/movie-api.service';
import { SubjectMessangerService } from '@services/subject-messanger.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent {
  video: Video = {
    id: '', title: '', viewCount: '', likeCount: '', publishedAt: '', thumbnail: '', youtubeVideo: false, vimeoVideo: false
  };
  id = '';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private api: MovieApiService, private subjectMessage: SubjectMessangerService, private snackBar: MatSnackBar) { }
  getYoutubeMovie(id: string): void {
    this.api.getVideoFromYoutube(id).pipe(take(1)).subscribe((val: any) => {
      if (val.items.length > 0) {
        this.video.id = id;
        this.video.title = val.items[0].snippet.title;
        this.video.viewCount = val.items[0].statistics.viewCount;
        this.video.likeCount = val.items[0].statistics.likeCount;
        this.video.publishedAt = val.items[0].snippet.publishedAt;
        this.video.thumbnail = val.items[0].snippet.thumbnails.medium.url;
        this.video.youtubeVideo = true;
        this.subjectMessage.sendVideo(this.video);
      }
      if (val.items.length === 0) {
        this.openSnackBar('wrong link/id');
      }
    }
    );
    this.resetInput();
  }
  getVimeoMovie(id: string): void {
    this.api.getMovieFromVimeo(id).pipe(take(1)).subscribe((val: any) => {
      if (val) {
        this.video.id = id;
        this.video.title = val.name;
        this.video.likeCount = val.metadata.connections.likes.total.toString();
        this.video.publishedAt = val.created_time;
        this.video.thumbnail = val.pictures.sizes[2].link;
        this.video.vimeoVideo = true;
        this.subjectMessage.sendVideo(this.video);
      }
      if (!val) {
        this.openSnackBar('wrong link/id');
      }

    }, (error) => {
      this.openSnackBar('wrong link/id');
    }
    );
    this.resetInput();
  }
  checkInput(id: string): void {
    // https://www.youtube.com/watch?v=4JOAqRS_lms => 4JOAqRS_lms
    if (id.length === 43) {
      id = id.slice(32, 43);
      this.video.youtubeVideo = true;
      return this.getYoutubeMovie(id);
    }
    // https://youtu.be/vJ3a_AuEW18 => vJ3a_AuEW18
    if (id.length === 28) {
      id = id.slice(17, 28);
      this.video.youtubeVideo = true;
      return this.getYoutubeMovie(id);
    }
    // vJ3a_AuEW18 => vJ3a_AuEW18
    if (id.length === 11) {
      this.video.youtubeVideo = true;
      return this.getYoutubeMovie(id);
    }
    // https://vimeo.com/138882294 => 138882294
    if (id.length === 27) {
      id = id.slice(18, 27);
      this.video.vimeoVideo = true;
      return this.getVimeoMovie(id);
    }
    // 138882294 => 138882294
    if (id.length === 9) {
      this.video.vimeoVideo = true;
      return this.getVimeoMovie(id);
    }
    this.openSnackBar('wrong format');
  }
  openSnackBar(text: string): void {
    this.snackBar.open(text, 'Ok', {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
  resetInput(): void {
    this.video = {
      id: '', title: '', viewCount: '', likeCount: '', publishedAt: '', thumbnail: '', youtubeVideo: false, vimeoVideo: false
    };
    this.id = '';
  }
  getHardcodeMovies(): void {
    this.subjectMessage.sendVideo({
      id: 'eEO6v-YiS00',
      title: `Status Quo - Rockin' All Over The World(Live Aid 1985)`,
      viewCount: '3054361',
      likeCount: '10642',
      publishedAt: '2018-09-21T09:30:00Z',
      thumbnail: 'https://i.ytimg.com/vi/eEO6v-YiS00/mqdefault.jpg',
      youtubeVideo: true,
      vimeoVideo: false
    });
    this.subjectMessage.sendVideo({
      id: '8Pa9x9fZBtY',
      title: 'Dire Straits - Sultans Of Swing (Alchemy Live)',
      viewCount: '173375976',
      likeCount: '781286',
      publishedAt: '2010-04-20T12:00:41Z',
      thumbnail: 'https://i.ytimg.com/vi/8Pa9x9fZBtY/mqdefault.jpg',
      youtubeVideo: true,
      vimeoVideo: false
    });
    this.subjectMessage.sendVideo({
      id: 'CqnU_sJ8V-E',
      title: 'Free Bird',
      viewCount: '30750980',
      likeCount: '295352',
      publishedAt: '2018-07-31T12:06:53Z',
      thumbnail: 'https://i.ytimg.com/vi/CqnU_sJ8V-E/mqdefault.jpg',
      youtubeVideo: true,
      vimeoVideo: false
    });
    this.subjectMessage.sendVideo({

      id: 'WaEKXGlfYj8',
      title: 'David Gilmour - Wish You Were Here (Live At Pompeii)',
      viewCount: '3032063',
      likeCount: '24013',
      publishedAt: '2019-05-10T16:00:09Z',
      thumbnail: 'https://i.ytimg.com/vi/WaEKXGlfYj8/mqdefault.jpg',
      youtubeVideo: true,
      vimeoVideo: false

    });
    this.subjectMessage.sendVideo({
      id: 'Kman7MzhC0g',
      title: 'Sting - Roxanne (Live Aid 1985)',
      viewCount: '1121763',
      likeCount: '10043',
      publishedAt: '2018-09-21T09:30:00Z',
      thumbnail: 'https://i.ytimg.com/vi/Kman7MzhC0g/mqdefault.jpg',
      youtubeVideo: true,
      vimeoVideo: false
    });
    this.subjectMessage.sendVideo({
      id: '527079690',
      title: 'SEAWOLF',
      viewCount: '',
      likeCount: '394',
      publishedAt: '2021-03-22T01:50:51+00:00',
      thumbnail: 'https://i.vimeocdn.com/video/1091141651_295x166.jpg?r=pad',
      youtubeVideo: false,
      vimeoVideo: true
    });
    this.subjectMessage.sendVideo({
      id: '485625376',
      title: `Hou'ley`,
      viewCount: '',
      likeCount: '26',
      publishedAt: '2020-11-30T19:00:55+00:00',
      thumbnail: 'https://i.vimeocdn.com/video/1098676830_295x166.jpg?r=pad',
      youtubeVideo: false,
      vimeoVideo: true
    });
    this.subjectMessage.sendVideo({
      id: '529254176',
      title: 'Lil Nas X - MONTERO (Call Me By Your Name)',
      viewCount: '',
      likeCount: '225',
      publishedAt: '2021-03-26T09:07:03+00:00',
      thumbnail: 'https://i.vimeocdn.com/video/1095287599_295x166.jpg?r=pad',
      youtubeVideo: false,
      vimeoVideo: true
    });
    this.subjectMessage.sendVideo({
      id: '475800442',
      title: 'MONATIK & LIDA LEE & NINO - РИТМОLOVE',
      viewCount: '',
      likeCount: '39',
      publishedAt: '2007-06-15T00:50:36Z',
      thumbnail: 'https://i.vimeocdn.com/video/988849133_295x166.jpg?r=pad',
      youtubeVideo: false,
      vimeoVideo: true
    });
    this.subjectMessage.sendVideo({
      id: '5vUDmFjWgVo',
      title: 'Dire Straits - Brothers in Arms Mandela Live 1988',
      viewCount: '7693687',
      likeCount: '22641',
      publishedAt: '2007-06-15T00:50:36Z',
      thumbnail: 'https://i.ytimg.com/vi/5vUDmFjWgVo/mqdefault.jpg',
      youtubeVideo: true,
      vimeoVideo: false
    });
    this.subjectMessage.sendVideo({
      id: 'jhdFe3evXpk',
      title: 'Dire Straits - Brothers In Arms',
      viewCount: '126283447',
      likeCount: '495822',
      publishedAt: '2010-02-23T17:30:38Z',
      thumbnail: 'https://i.ytimg.com/vi/jhdFe3evXpk/mqdefault.jpg',
      youtubeVideo: true,
      vimeoVideo: false
    });
  }
}
