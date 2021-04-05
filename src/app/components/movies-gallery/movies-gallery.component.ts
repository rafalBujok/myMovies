import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

import { Video } from 'src/app/models/video';
import { SubjectMessangerService } from 'src/app/services/subject-messanger.service';

@Component({
  selector: 'app-movies-gallery',
  templateUrl: './movies-gallery.component.html',
  styleUrls: ['./movies-gallery.component.scss']
})
export class MoviesGalleryComponent implements OnInit, OnDestroy {

  listToggle = false;
  gridToggle = true;
  displayMode = 'grid';
  favoriteToggle: boolean = false;
  videoList: Video[] = [];
  paginatorList: Video[] = [];
  videoSub: Subscription | undefined;
  removeSub: Subscription | undefined;
  favoriteSub: Subscription | undefined;

  paginatorLength: number = 0;
  pageIndex: number = 0;
  pageSize: number = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent | undefined;

  constructor(private subjectMessage: SubjectMessangerService) { }

  ngOnInit(): void {
    this.getVideoFromLocalStorage()
    this.videoSub = this.subjectMessage.getMessage().subscribe((video: Video | any) => {
      this.pushVideoToList(video);
    })
    this.removeSub = this.subjectMessage.removeSubject.subscribe((id: string | any) => {
      this.removeVideo(id)
    })
    this.favoriteSub = this.subjectMessage.favoriteSubject.subscribe((id: string | any) => {
      this.favoriteVideo(id);
    })
    this.updateDisplay()
  }
  getPaginatorLength(): void {
    this.paginatorLength = this.videoList.length;
  }
  handlePageEvent(event: PageEvent): any {
    this.pageSize = event.pageSize;
    this.paginatorLength = event.length;
    this.pageIndex = event.pageIndex;
    this.getPaginatorList();
  }
  getPaginatorList(): void {
    this.paginatorList = this.videoList.slice(this.pageIndex * this.pageSize, (this.pageIndex * this.pageSize) + this.pageSize)
  }
  pushVideoToList(video: Video): void {
    this.videoList.push(video)
    this.pushVideoToLocalStorage();
    this.updateDisplay();
  }
  updateDisplay(): void {
    this.getPaginatorList()
    this.getPaginatorLength()
  }
  pushVideoToLocalStorage(): void {
    localStorage.setItem('videoList', JSON.stringify(this.videoList))
  }
  getVideoFromLocalStorage(): void {
    if (localStorage.getItem('videoList')) {
      this.videoList = JSON.parse(localStorage.getItem('videoList')!)
    }
  }
  removeVideo(videoId: string): void {

    for (let i in this.videoList) {
      if (this.videoList[i].id === videoId) {
        this.videoList.splice(Number(i), 1);
        this.pushVideoToLocalStorage();
        break;
      }
    }
    if (this.favoriteToggle) {
      this.paginatorLength = this.countFavorites(this.videoList)
      this.paginatorList = this.videoList.slice(this.pageIndex * this.pageSize, (this.pageIndex * this.pageSize) + this.pageSize)
    }
    if (!this.favoriteToggle) {
      this.updateDisplay();
    }

  }
  favoriteVideo(videoId: string): void {

    for (let i in this.videoList) {
      if (this.videoList[i].id === videoId) {
        this.videoList[i].favorite = true;
        this.pushVideoToLocalStorage();
        break;
      }
    }
  }
  clearList(): void {
    this.videoList = [];
    localStorage.clear();
    this.updateDisplay()
  }
  showGrid(): void {
    this.gridToggle = true;
    this.listToggle = false;
    this.displayMode = 'grid';
  }
  showList(): void {
    this.gridToggle = false;
    this.listToggle = true;
    this.displayMode = 'list';
  }
  sortByOldest() {
    this.videoList.sort(function (a: any, b: any) {
      return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
    })
    this.updateDisplay();
  }
  sortByLatest() {
    this.videoList.sort(function (a, b) {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    })
    this.updateDisplay();
  }
  favoriteFilter() {
    this.favoriteToggle = !this.favoriteToggle;
    // fix paginator for favorites only
    if (this.favoriteToggle) {
      this.paginatorLength = this.countFavorites(this.videoList)
    }
    if (!this.favoriteToggle) {
      this.updateDisplay()
    }
  }
  countFavorites(videoList: Video[]): number {
    let counter = 0;
    videoList.forEach(video => {
      if (video.favorite) {
        counter++;
      }
    })
    return counter
  }
  ngOnDestroy(): void {
    if (this.videoSub) {
      this.videoSub.unsubscribe()
    }
    if (this.removeSub) {
      this.removeSub.unsubscribe()
    }
    if (this.favoriteSub) {
      this.favoriteSub.unsubscribe()
    }
  }

}
