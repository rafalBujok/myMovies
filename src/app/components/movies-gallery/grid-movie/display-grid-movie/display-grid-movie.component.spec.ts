import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayGridMovieComponent } from './display-grid-movie.component';

describe('DisplayMovieComponent', () => {
  let component: DisplayGridMovieComponent;
  let fixture: ComponentFixture<DisplayGridMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayGridMovieComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayGridMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
