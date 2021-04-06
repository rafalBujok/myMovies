import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

import { MovieApiService } from 'src/app/services/movie-api.service';

import { AddMovieComponent } from './add-movie.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';


describe('AddMovieComponent', () => {
  let component: AddMovieComponent;
  let fixture: ComponentFixture<AddMovieComponent>;
  let spy: any;
  let element: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddMovieComponent],
      imports: [HttpClientTestingModule, MatSnackBarModule, NoopAnimationsModule, FormsModule],
      providers: [MovieApiService]
    })
      .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AddMovieComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
    fixture.detectChanges();

  });

  it('should create add movie component', () => {
    expect(component).toBeTruthy();
  });

  describe('input element', () => {
    let idInput: HTMLInputElement;
    let addButton: HTMLButtonElement;
    beforeEach(() => {
      idInput = element.query(By.css('.idInput')).nativeElement;
      addButton = element.query(By.css('.addButton')).nativeElement;
    });
    it('has input element', () => {
      expect(idInput).toBeTruthy();
      expect(addButton).toBeTruthy();
    });
    it('should bind input text value to Component property', () => {
      fixture.detectChanges();
      idInput.value = 'test';
      idInput.dispatchEvent(new Event('input'));
      expect(component.id).toBe('test');
    });
    it('should send value to checkInput method', () => {
      fixture.detectChanges();
      spy = spyOn(component, 'checkInput').and.callThrough
      idInput.value = 'vJ3a_AuEW18';
      idInput.dispatchEvent(new Event('input'));
      addButton.click();

      expect(component.checkInput).toHaveBeenCalledWith('vJ3a_AuEW18');
    })
    it('should send value to getYoutubeMovie method while passing id like `vJ3a_AuEW18`', () => {
      fixture.detectChanges();
      spy = spyOn(component, 'getYoutubeMovie').and.callThrough
      idInput.value = 'vJ3a_AuEW18';
      idInput.dispatchEvent(new Event('input'));
      addButton.click();
      expect(component.getYoutubeMovie).toHaveBeenCalledWith('vJ3a_AuEW18');
    })
    it('should send value to getYoutubeMovie method while passing id like `https://www.youtube.com/watch?v=4JOAqRS_lms`', () => {
      fixture.detectChanges();
      spy = spyOn(component, 'getYoutubeMovie').and.callThrough
      idInput.value = 'https://www.youtube.com/watch?v=4JOAqRS_lms';
      idInput.dispatchEvent(new Event('input'));
      addButton.click();
      expect(component.getYoutubeMovie).toHaveBeenCalledWith('4JOAqRS_lms');
    })
    it('should send value to getYoutubeMovie method while passing id like `https://youtu.be/vJ3a_AuEW18`', () => {
      fixture.detectChanges();
      spy = spyOn(component, 'getYoutubeMovie').and.callThrough
      idInput.value = 'https://youtu.be/vJ3a_AuEW18';
      idInput.dispatchEvent(new Event('input'));
      addButton.click();
      expect(component.getYoutubeMovie).toHaveBeenCalledWith('vJ3a_AuEW18');
    })
    it('should send value to getVimeoMovie method while passing id like `https://vimeo.com/138882294`', () => {
      fixture.detectChanges();
      spy = spyOn(component, 'getVimeoMovie').and.callThrough
      idInput.value = 'https://vimeo.com/138882294';
      idInput.dispatchEvent(new Event('input'));
      addButton.click();
      expect(component.getVimeoMovie).toHaveBeenCalledWith('138882294');
    })
    it('should send value to getVimeoMovie method while passing id like `138882294`', () => {
      fixture.detectChanges();
      spy = spyOn(component, 'getVimeoMovie').and.callThrough
      idInput.value = '138882294';
      idInput.dispatchEvent(new Event('input'));
      addButton.click();
      expect(component.getVimeoMovie).toHaveBeenCalledWith('138882294');
    })
  });




});
