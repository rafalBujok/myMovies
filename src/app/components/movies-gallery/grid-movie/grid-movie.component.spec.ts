import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoritePipe } from 'src/app/pipes/favorite.pipe';

import { GridMovieComponent } from './grid-movie.component';

describe('GridMovieComponent', () => {
  let component: GridMovieComponent;
  let fixture: ComponentFixture<GridMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridMovieComponent],
      imports: [FavoritePipe]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create grid movie component', () => {
    expect(component).toBeTruthy();
  });
});
