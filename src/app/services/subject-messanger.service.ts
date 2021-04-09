import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Video } from '@models/video';

@Injectable({
  providedIn: 'root'
})
export class SubjectMessangerService {

  videoSubject = new Subject();
  removeSubject = new Subject();
  favoriteSubject = new Subject();
  sendVideo(video: Video): void {
    this.videoSubject.next(video);
  }
  removeVideo(id: string): void {
    this.removeSubject.next(id);
  }
  favoriteVideo(id: string): void {
    this.favoriteSubject.next(id);
  }
  getVideo(): Observable<unknown> {
    return this.videoSubject.asObservable();
  }
}
