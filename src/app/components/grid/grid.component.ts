import { Component } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {

  tiles: Tile[] = [
    { text: 'Header', cols: 6, rows: 2, color: 'lightblue' },
    { text: 'AsideLeft', cols: 1, rows: 7, color: 'lightgreen' },
    { text: 'Content', cols: 4, rows: 7, color: 'lightpink' },
    { text: 'AsideRight', cols: 1, rows: 7, color: '#DDBDF1' },
    { text: 'Footer', cols: 6, rows: 1, color: 'lightpink' },
  ];

}
