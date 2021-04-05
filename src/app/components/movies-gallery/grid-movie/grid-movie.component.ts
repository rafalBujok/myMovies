import { Component, Input } from '@angular/core';
import { Video } from 'src/app/models/video';

@Component({
  selector: 'app-grid-movie',
  templateUrl: './grid-movie.component.html',
  styleUrls: ['./grid-movie.component.scss']
})
export class GridMovieComponent {

  @Input() videoList: Video[] = [];
  @Input() favoriteToggle = false;
  @Input() displayMode = 'grid';


}
