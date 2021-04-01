import { Component, Input, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video';

@Component({
  selector: 'app-display-movies',
  templateUrl: './display-movies.component.html',
  styleUrls: ['./display-movies.component.scss']
})
export class DisplayMoviesComponent implements OnInit {

  @Input() videoList: Video[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
