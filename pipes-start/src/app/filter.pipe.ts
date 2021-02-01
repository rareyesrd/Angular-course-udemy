import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterElement: string, prop: string): any {
    if (value.length === 0 || filterElement === '') {
      return value;
    }
    const resultSearch = [];
    for (const item of value) {
      if (item[prop] === filterElement) {
        resultSearch.push(item);
      }
    }
    return resultSearch;
  }
}
