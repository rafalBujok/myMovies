import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Video } from '../models/video';

@Injectable({
  providedIn: 'root'
})
export class SubjectMessangerService {

  videoSubject = new Subject()

  sendMessage(video: Video) {
    this.videoSubject.next(video);
  }
  getMessage() {
    return this.videoSubject.asObservable();
  }
}
