import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesGalleryComponent } from './movies-gallery.component';

describe('MoviesGalleryComponent', () => {
  let component: MoviesGalleryComponent;
  let fixture: ComponentFixture<MoviesGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
