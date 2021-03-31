import { TestBed } from '@angular/core/testing';

import { SubjectMessangerService } from './subject-messanger.service';

describe('SubjectMessangerService', () => {
  let service: SubjectMessangerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectMessangerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
