import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Video } from '@models/video';
import { SubjectMessangerService } from '@services/subject-messanger.service';

@Component({
  selector: 'app-movies-gallery',
  templateUrl: './movies-gallery.component.html',
  styleUrls: ['./movies-gallery.component.scss']
})
export class MoviesGalleryComponent implements OnInit, OnDestroy {

  listToggle = false;
  tileToggle = true;
  displayMode = 'tile';
  toggleFavoriteFilter = false;
  videoList: Video[] = [];
  videoSub: Subscription | undefined;
  removeSub: Subscription | undefined;
  favoriteSub: Subscription | undefined;

  constructor(private subjectMessage: SubjectMessangerService) { }

  ngOnInit(): void {
    this.fetchVideosFromRepository();
    this.videoSub = this.subjectMessage.getVideo().subscribe((video: Video | any) => {
      this.pushVideosToList(video);
    });
    this.removeSub = this.subjectMessage.removeSubject.subscribe((id: string | any) => {
      this.removeVideo(id);
    });
    this.favoriteSub = this.subjectMessage.favoriteSubject.subscribe((id: string | any) => {
      this.favoriteVideo(id);
    });
  }
  pushVideosToList(video: Video): void {
    this.videoList.push(video);
    this.pushToRepository('videoList', this.videoList);
  }
  pushToRepository(location: string, value: Video[]): void {
    localStorage.setItem(location, JSON.stringify(value));
  }
  fetchVideosFromRepository(): void {
    if (localStorage.getItem('videoList')) {
      this.videoList = JSON.parse(localStorage.getItem('videoList') || '{}');
    }
  }
  removeVideo(videoId: string): void {
    const videoList = JSON.parse(localStorage.getItem('videoList') || '{}');
    for (const i in videoList) {
      if (videoList[i].id === videoId) {
        videoList.splice(Number(i), 1);
        this.pushToRepository('videoList', videoList);
        break;
      }
    }
    if (this.toggleFavoriteFilter) {
      this.favoriteFilter(false);
    }
    if (!this.toggleFavoriteFilter) {
      this.fetchVideosFromRepository();
    }
  }
  favoriteVideo(videoId: string): void {

    for (const i in this.videoList) {
      if (this.videoList[i].id === videoId) {
        this.videoList[i].favorite = true;
        this.pushToRepository('videoList', this.videoList);
        break;
      }
    }
  }
  clearList(): void {
    this.videoList = [];
    localStorage.clear();
  }
  showTile(): void {
    this.tileToggle = true;
    this.listToggle = false;
    this.displayMode = 'tile';
  }
  showList(): void {
    this.tileToggle = false;
    this.listToggle = true;
    this.displayMode = 'list';
  }
  sort(dir: string): void {
    if (dir === 'asc') {
      const sortFunction = (a: any, b: any) => {
        return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
      };
      this.videoList = this.videoList.sort(sortFunction);
    }
    if (dir === 'desc') {

      const sortFunction = (a: any, b: any) => {
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      };
      this.videoList = this.videoList.sort(sortFunction);
    }

    this.updateDisplay();
  }
  updateDisplay(): void {
    const newList: Video[] = this.videoList;
    this.videoList = [];
    setTimeout(() => { this.videoList = newList; }, 1);
  }
  favoriteFilter(toggle: boolean): void {
    if (toggle) {
      this.toggleFavoriteFilter = !this.toggleFavoriteFilter;
    }
    if (this.toggleFavoriteFilter) {
      const favoriteList: Video[] = [];
      const fullList: Video[] = JSON.parse(localStorage.getItem('videoList') || '{}');

      fullList.filter(video => {
        if (video.favorite) {
          favoriteList.push(video);
        }
        this.videoList = favoriteList;
      });
    }
    if (!this.toggleFavoriteFilter) {
      this.videoList = JSON.parse(localStorage.getItem('videoList') || '{}');
    }

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
