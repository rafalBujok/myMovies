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

  ngOnInit() {
    this.msgSub = this.subjectMessage.getMessage().subscribe((video: Video | any) => {
      this.pushVideoToList(video);
    })
  }
  pushVideoToList(video: Video): void {
    this.videoList.push(video)
    this.pushVideoToLocalStorage();
  }
  pushVideoToLocalStorage() {
    localStorage.setItem('videoList', JSON.stringify(this.videoList))
  }
  ngOnDestroy(): void {
    if (this.msgSub) {
      this.msgSub.unsubscribe()
    }
  }

}
