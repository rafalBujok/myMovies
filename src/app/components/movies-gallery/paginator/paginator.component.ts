import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnChanges {

  @Input() length = 0;
  pageIndex = 0;
  pageSize = 10;
  @Output() page = new EventEmitter<PageEvent>();
  @Output() size = new EventEmitter<number>();
  @Output() index = new EventEmitter<number>();
  pageSizeOptions: number[] = [5, 10, 25, 100];
  handlePageEvent(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.page.emit(event);
  }
  ngOnChanges(): void {
    console.log(this.length);
    this.size.emit(this.pageSize);
    this.index.emit(this.pageIndex);
  }
}
