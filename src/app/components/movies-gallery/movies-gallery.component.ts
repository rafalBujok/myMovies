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

  listToggle = false;
  gridToggle = true;
  displayMode = 'grid';
  favoriteToggle = false;
  videoList: Video[] = [];
  videoSub: Subscription | undefined;
  removeSub: Subscription | undefined;
  favoriteSub: Subscription | undefined;

  constructor(private subjectMessage: SubjectMessangerService) { }

  ngOnInit(): void {
    this.fetchVideoFromRepository();
    this.videoSub = this.subjectMessage.getMessage().subscribe((video: Video | any) => {
      this.pushVideoToList(video);
    });
    this.removeSub = this.subjectMessage.removeSubject.subscribe((id: string | any) => {
      this.removeVideo(id);
    });
    this.favoriteSub = this.subjectMessage.favoriteSubject.subscribe((id: string | any) => {
      this.favoriteVideo(id);
    });
  }
  pushVideoToList(video: Video): void {
    this.videoList.push(video);
    this.pushVideoToRepository();
  }
  pushVideoToRepository(): void {
    localStorage.setItem('videoList', JSON.stringify(this.videoList));
  }
  fetchVideoFromRepository(): void {
    if (localStorage.getItem('videoList')) {
      this.videoList = JSON.parse(localStorage.getItem('videoList') || '{}');
    }
  }
  removeVideo(videoId: string): void {

    for (const i in this.videoList) {
      if (this.videoList[i].id === videoId) {
        this.videoList.splice(Number(i), 1);
        this.pushVideoToRepository();
        break;
      }
    }

  }
  favoriteVideo(videoId: string): void {

    for (const i in this.videoList) {
      if (this.videoList[i].id === videoId) {
        this.videoList[i].favorite = true;
        this.pushVideoToRepository();
        break;
      }
    }
  }
  clearList(): void {
    this.videoList = [];
    localStorage.clear();
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
  sortByOldest(): void {
    const sortFunction = (a: any, b: any) => {
      return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
    };
    this.videoList.sort(sortFunction);
  }
  sortByLatest(): void {
    const sortFunction = (a: any, b: any) => {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    };
    this.videoList.sort(sortFunction);
  }
  favoriteFilter(): void {
    this.favoriteToggle = !this.favoriteToggle;
  }
  countFavorites(videoList: Video[]): number {
    let counter = 0;
    videoList.forEach(video => {
      if (video.favorite) {
        counter++;
      }
    });
    return counter;
  }
  ngOnDestroy(): void {
    if (this.videoSub) {
      this.videoSub.unsubscribe();
    }
    if (this.removeSub) {
      this.removeSub.unsubscribe();
    }
    if (this.favoriteSub) {
      this.favoriteSub.unsubscribe();
    }
  }
}
