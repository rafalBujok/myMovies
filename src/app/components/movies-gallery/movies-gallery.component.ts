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

  listTrigger = false;
  gridTrigger = true;
  isFavoriteFilterOn: boolean = false;
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
    this.updateDisplay();
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
    this.gridTrigger = true;
    this.listTrigger = false;
  }
  showList(): void {
    this.gridTrigger = false;
    this.listTrigger = true;
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
  filterFavorites(): void {
    if (this.isFavoriteFilterOn) {
      this.isFavoriteFilterOn = false;
      this.getVideoFromLocalStorage();
      this.updateDisplay();
      return;
    }
    if (!this.isFavoriteFilterOn) {
      let favoriteList: Video[] = [];
      this.isFavoriteFilterOn = true;
      this.videoList.filter(video => {
        if (video.favorite) {
          favoriteList.push(video);
        }

      })
      return;
    }
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
