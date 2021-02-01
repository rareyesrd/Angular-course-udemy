import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(name: string, limit: number ): string {
      return `${name.substr(0, limit)}...`;
  }

}
