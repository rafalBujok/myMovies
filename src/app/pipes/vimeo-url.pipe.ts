import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'vimeoUrl'
})
export class VimeoUrlPipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer) { }

  transform(value: string): any {
    const url = value.replace('vimeo.com/', 'player.vimeo.com/video/');

    return this.sanitizer.bypassSecurityTrustResourceUrl(url);

  }

}
