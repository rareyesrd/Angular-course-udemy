import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterStatus: string, propName: string): any {
    if(value.length === 0 || filterStatus === ''){
      return value;
    }
    const resultStatus = [];
    for(const item of value){
      if(item[propName] === filterStatus){
        resultStatus.push(item);
      }
    }
    return resultStatus;
  }
}
