import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-modal-movie',
  templateUrl: './modal-movie.component.html',
  styleUrls: ['./modal-movie.component.scss']
})
export class ModalMovieComponent {


  constructor(@Inject(MAT_DIALOG_DATA) public data: string) { }

}
