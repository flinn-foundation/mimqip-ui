import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumKeys'
})
export class EnumKeysPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let keys = [];
    for (var enumMember in value) {
      if (!enumMember.includes(" ")) {
        keys.push(enumMember);
        // Uncomment if you want log
        console.log("enum member: ",enumMember);
      }
    }
    return keys;
  }


}
