import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalMovieComponent } from '@components/modal-movie/modal-movie.component';
import { Video } from '@models/video';
import { SubjectMessangerService } from '@services/subject-messanger.service';

@Component({
  selector: 'app-display-grid-movie',
  templateUrl: './display-grid-movie.component.html',
  styleUrls: ['./display-grid-movie.component.scss']
})
export class DisplayGridMovieComponent {
  @Input() video: Video = { id: '', title: '', viewCount: '', likeCount: '', publishedAt: '', thumbnail: '' };
  @Input() displayMode = 'tile';

  constructor(private messanger: SubjectMessangerService, public dialog: MatDialog) { }

  openDialog(video: Video): void {
    if (video.youtubeVideo) {
      this.dialog.open(ModalMovieComponent, { data: video });
    }
    if (video.vimeoVideo) {
      this.dialog.open(ModalMovieComponent, { data: video });
    }

  }
  removeVideo(id: string): void {
    this.messanger.removeVideo(id);
  }
  favoriteVideo(id: string): void {
    this.messanger.favoriteVideo(id);
  }


}
