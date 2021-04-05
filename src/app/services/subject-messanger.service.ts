import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Video } from '../models/video';

@Injectable({
  providedIn: 'root'
})
export class SubjectMessangerService {

  videoSubject = new Subject();
  removeSubject = new Subject();
  favoriteSubject = new Subject();
  sendMessage(video: Video): void {
    this.videoSubject.next(video);
  }
  getMessage(): Observable<unknown> {
    return this.videoSubject.asObservable();
  }
  removeVideo(id: string): void {
    this.removeSubject.next(id);
  }
  favoriteVideo(id: string): void {
    this.favoriteSubject.next(id);
  }


}
