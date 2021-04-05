import { Component, Input, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss']
})
export class ListMovieComponent implements OnInit {

  @Input() videoList: Video[] = [];
  @Input() favoriteToggle: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
