import { Pipe, PipeTransform } from '@angular/core';
import { Video } from '../models/video';

@Pipe({
  name: 'favorite',
  pure: false
})
export class FavoritePipe implements PipeTransform {

  transform(videolist: Video[], filter: boolean): any {
    if (!videolist || !filter) {
      return videolist;
    }
    return videolist.filter(video => video.favorite);
  }
}
