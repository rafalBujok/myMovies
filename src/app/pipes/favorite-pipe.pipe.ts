import { Pipe, PipeTransform } from '@angular/core';
import { Video } from '../models/video';

@Pipe({
  name: 'favoritePipe',
  pure: false
})
export class FavoritePipePipe implements PipeTransform {

  transform(videolist: Video[], filter: boolean): any {
    if (!videolist || !filter) {
      return videolist;
    }
    return videolist.filter(video => video.favorite);
  }
}
