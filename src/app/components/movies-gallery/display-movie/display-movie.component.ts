import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Video } from 'src/app/models/video';

@Component({
  selector: 'app-display-movie',
  templateUrl: './display-movie.component.html',
  styleUrls: ['./display-movie.component.scss']
})
export class DisplayMovieComponent implements OnInit {
  @Input() video: Video = { id: '', title: '', viewCount: '', likeCount: '', publishedAt: '', thumbnail: '' };
  @Output() deleteVideoEvent = new EventEmitter<string>();
  @Output() favoriteVideoEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  removeVideo(id: string): void {
    this.deleteVideoEvent.emit(id);
  }
  favoriteVideo(id: string): void {
    this.favoriteVideoEvent.emit(id);
  }

}
