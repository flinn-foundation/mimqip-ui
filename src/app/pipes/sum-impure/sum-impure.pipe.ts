import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sumImpure',
  pure: false
})
export class SumImpurePipe implements PipeTransform {

  transform(arr: any): number|number[] {
    return Array.isArray(arr)
      ? arr.reduce((sum, curr) => sum + parseInt(curr), 0)
      : arr;
  }
}
