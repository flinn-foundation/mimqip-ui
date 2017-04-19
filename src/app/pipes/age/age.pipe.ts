import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(dateOfBirth: Date, args?: any): number {
    if (dateOfBirth) {
      const ageDiffMs = Date.now() - dateOfBirth.getTime();
      const ageDate = new Date(ageDiffMs);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
  }

}
