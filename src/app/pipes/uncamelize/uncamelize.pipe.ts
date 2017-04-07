import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uncamelize'
})
export class UncamelizePipe implements PipeTransform {

  transform(text: any, chars: string = '\\s'): string {
    console.log(text);
    if (typeof text !== 'string') {
      console.log('string?');
      return text;
    }

    return text.replace(/([A-Z])/g, ' $1');
  }

}
