import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { GridMoviesComponent } from './grid-movies.component';

describe('GridMoviesComponent', () => {
  let component: GridMoviesComponent;
  let fixture: ComponentFixture<GridMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridMoviesComponent]

    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should have [ngClass] resolve to "tile-display"', async () => {
    component.displayMode = 'tile';
    component.displayVideo = [{ id: '1234', title: '1234', viewCount: '1234', likeCount: '1234', publishedAt: '1234', thumbnail: 'http' }];
    fixture.detectChanges();
    const videoList = fixture.debugElement.query(By.css('div'));
    expect(videoList.classes['tile-display']).toBeTruthy();
  });
  it('should have [ngClass] resolve to "list-display"', async () => {
    component.displayMode = 'list';
    component.displayVideo = [{ id: '1234', title: '1234', viewCount: '1234', likeCount: '1234', publishedAt: '1234', thumbnail: 'http' }];
    fixture.detectChanges();
    const videoList = fixture.debugElement.query(By.css('div'));
    expect(videoList.classes['list-display']).toBeTruthy();
  });







});
