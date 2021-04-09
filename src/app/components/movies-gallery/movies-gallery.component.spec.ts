import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MoviesGalleryComponent } from './movies-gallery.component';

describe('MoviesGalleryComponent', () => {
  let component: MoviesGalleryComponent;
  let fixture: ComponentFixture<MoviesGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesGalleryComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should toggle list button and untoggle tiles button, when pressing list', () => {
    const toggleListButton = fixture.debugElement.query(By.css('.toggleListButton'));
    toggleListButton.triggerEventHandler('click', 'showList')
    expect(component.listToggle).toBeTruthy();
    expect(component.tileToggle).toBeFalsy();
  });
  it('should toggle tiles button and untoggle list button, when pressing tiles', () => {
    const toggleTileButton = fixture.debugElement.query(By.css('.toggleTileButton'));
    toggleTileButton.triggerEventHandler('click', 'showTile')
    expect(component.listToggle).toBeFalsy();
    expect(component.tileToggle).toBeTruthy();
  });
});
