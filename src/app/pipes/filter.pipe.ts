import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchValue?: any): any {
    if (searchValue === '') return value;

    return value.filter(item => {
      if (Object.keys(item)[0] === 'jobWork' || Object.keys(item)[1] === 'jobWork') {
        return item.jobWork.toLowerCase().includes(searchValue.toLowerCase());
      } else if (Object.keys(item)[0] === 'jobTrade' || Object.keys(item)[1] === 'jobTrade') {
        return item.jobTrade.toLowerCase().includes(searchValue.toLowerCase());
      }
    })
  }

}
