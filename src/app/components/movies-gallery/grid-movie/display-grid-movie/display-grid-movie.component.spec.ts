import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { ShortNumberPipe } from 'src/app/pipes/short-number.pipe';

import { DisplayGridMovieComponent } from './display-grid-movie.component';

describe('DisplayMovieComponent', () => {
  let component: DisplayGridMovieComponent;
  let fixture: ComponentFixture<DisplayGridMovieComponent>;
  let spy: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayGridMovieComponent, ShortNumberPipe],
      imports: [MatCardModule, MatDialogModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayGridMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display tiles if display mode is set to tiles', async () => {
    component.displayMode = "tile";
    fixture.detectChanges();
    const tileElement = fixture.debugElement.query(By.css('.tile-display'))
    expect(tileElement).toBeTruthy();
  });
  it('should display list if display mode is set to list', async () => {
    component.displayMode = "list";
    fixture.detectChanges();
    const listElement = fixture.debugElement.query(By.css('.list-display'))
    expect(listElement).toBeTruthy();
  });
  it('should pass value to method after clicking favorite button', async () => {
    spy = spyOn(component, 'favoriteVideo').and.callThrough;
    component.displayMode = "tile";
    component.video.id = "1234";
    fixture.detectChanges();
    const favoriteButton = fixture.debugElement.query(By.css('.favoriteButton'))
    favoriteButton.triggerEventHandler('click', 'favoriteVideo')
    expect(component.favoriteVideo).toHaveBeenCalledOnceWith('1234')
  });
  it('should pass value to method after clicking delete button', async () => {
    spy = spyOn(component, 'removeVideo').and.callThrough;
    component.displayMode = "tile";
    component.video.id = "1234";
    fixture.detectChanges();
    const deleteButton = fixture.debugElement.query(By.css('.removeButton'))
    deleteButton.triggerEventHandler('click', 'removeVideo')
    expect(component.removeVideo).toHaveBeenCalledOnceWith('1234')
  });
  it('should pass value to method after clicking play button', async () => {
    spy = spyOn(component, 'openDialog').and.callThrough;
    component.displayMode = "tile";
    component.video = { id: '1234', title: '1234', viewCount: '1234', likeCount: '1234', publishedAt: '1234', thumbnail: 'http' }
    fixture.detectChanges();
    const playButton = fixture.debugElement.query(By.css('.playButton'))
    playButton.triggerEventHandler('click', 'openDialog')
    expect(component.openDialog).toHaveBeenCalledOnceWith({ id: '1234', title: '1234', viewCount: '1234', likeCount: '1234', publishedAt: '1234', thumbnail: 'http' })
  });
});
