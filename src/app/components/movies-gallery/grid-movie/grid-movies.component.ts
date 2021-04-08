import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Video } from 'src/app/models/video';

@Component({
  selector: 'app-grid-movie',
  templateUrl: './grid-movies.component.html',
  styleUrls: ['./grid-movies.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class GridMoviesComponent {

  @Input() videoList: Video[] = [];
  @Input() displayMode = 'tile';
  displayVideo: Video[] = [];
  pageIndex = 0;
  pageSize = 10;
  pageEvent(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatorDisplay();
  }
  sizeEvent(event: number): void {
    this.pageSize = event;
    this.updatePaginatorDisplay();
  }
  indexEvent(event: number): void {
    this.pageIndex = event;
    this.updatePaginatorDisplay();
  }
  updatePaginatorDisplay(): void {
    this.displayVideo = this.videoList.slice(this.pageIndex * this.pageSize, (this.pageIndex * this.pageSize) + this.pageSize);
  }


}
