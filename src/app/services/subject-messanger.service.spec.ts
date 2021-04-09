import { inject, TestBed } from '@angular/core/testing';
import { Video } from '../models/video';

import { SubjectMessangerService } from './subject-messanger.service';

describe('SubjectMessangerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SubjectMessangerService
      ]
    });
  });

  it('shall call subjects with correct value',
    inject([SubjectMessangerService], (SubjectMessangerService: any) => {
      SubjectMessangerService.favoriteSubject.subscribe((message: string) => {
        expect(message).toBe('fav')
      });
      SubjectMessangerService.removeSubject.subscribe((message: string) => {
        expect(message).toBe('rem')
      });
      SubjectMessangerService.videoSubject.subscribe((vid: Video) => {
        expect(vid).toEqual({ id: '1234', title: '1234', viewCount: '1234', likeCount: '1234', publishedAt: '1234', thumbnail: 'http' })
      });
      SubjectMessangerService.favoriteVideo('fav');
      SubjectMessangerService.removeVideo('rem');
      SubjectMessangerService.sendVideo({ id: '1234', title: '1234', viewCount: '1234', likeCount: '1234', publishedAt: '1234', thumbnail: 'http' });
    }));


});
