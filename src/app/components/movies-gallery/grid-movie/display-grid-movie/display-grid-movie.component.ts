import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Video } from 'src/app/models/video';
import { SubjectMessangerService } from 'src/app/services/subject-messanger.service';

@Component({
  selector: 'app-display-grid-movie',
  templateUrl: './display-grid-movie.component.html',
  styleUrls: ['./display-grid-movie.component.scss']
})
export class DisplayGridMovieComponent implements OnInit {
  @Input() video: Video = { id: '', title: '', viewCount: '', likeCount: '', publishedAt: '', thumbnail: '' };

  constructor(private messanger: SubjectMessangerService) { }

  ngOnInit(): void {
  }

  removeVideo(id: string): void {
    this.messanger.removeVideo(id)
  }
  favoriteVideo(id: string): void {
    this.messanger.favoriteVideo(id)
  }

}
