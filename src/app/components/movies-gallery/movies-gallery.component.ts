import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Video } from 'src/app/models/video';
import { SubjectMessangerService } from 'src/app/services/subject-messanger.service';

@Component({
  selector: 'app-movies-gallery',
  templateUrl: './movies-gallery.component.html',
  styleUrls: ['./movies-gallery.component.scss']
})
export class MoviesGalleryComponent implements OnInit, OnDestroy {

  videoList: Video[] = [];
  msgSub: Subscription | undefined;
  constructor(private subjectMessage: SubjectMessangerService) { }

  ngOnInit(): void {
    this.getVideoFromLocalStorage()
    this.msgSub = this.subjectMessage.getMessage().subscribe((video: Video | any) => {
      this.pushVideoToList(video);
    })
  }
  pushVideoToList(video: Video): void {
    this.videoList.push(video)
    this.pushVideoToLocalStorage();
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

  clearList() {
    this.videoList = [];
    localStorage.clear();
  }
  ngOnDestroy(): void {
    if (this.msgSub) {
      this.msgSub.unsubscribe()
    }
  }

}
