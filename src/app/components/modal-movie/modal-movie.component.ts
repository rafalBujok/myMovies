import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Video } from 'src/app/models/video';



@Component({
  selector: 'app-modal-movie',
  templateUrl: './modal-movie.component.html',
  styleUrls: ['./modal-movie.component.scss']
})
export class ModalMovieComponent {


  constructor(@Inject(MAT_DIALOG_DATA) public data: Video) { }

}
