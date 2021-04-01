import { Component, Input } from '@angular/core';
import { Video } from 'src/app/models/video';
import { SubjectMessangerService } from 'src/app/services/subject-messanger.service';


@Component({
  selector: 'app-display-list-movie',
  templateUrl: './display-list-movie.component.html',
  styleUrls: ['./display-list-movie.component.scss']
})
export class DisplayListMovieComponent {


  @Input() video: Video = { id: '', title: '', viewCount: '', likeCount: '', publishedAt: '', thumbnail: '' };

  constructor(private messanger: SubjectMessangerService) { }



  removeVideo(id: string): void {
    this.messanger.removeVideo(id)
  }
  favoriteVideo(id: string): void {
    this.messanger.favoriteVideo(id)
  }

}
