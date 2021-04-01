import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayListMivieComponent } from './display-list-movie.component';

describe('DisplayListMivieComponent', () => {
  let component: DisplayListMovieComponent;
  let fixture: ComponentFixture<DisplayListMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayListMovieComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayListMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
