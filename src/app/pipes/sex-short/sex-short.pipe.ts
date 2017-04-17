import { Pipe, PipeTransform } from '@angular/core';
import {PatientDto} from "../../swagger-patient-service/model/PatientDto";
import SexEnum = PatientDto.SexEnum;

@Pipe({
  name: 'sexShort'
})
export class SexShortPipe implements PipeTransform {

  transform(text: any, chars: string = '\\s'): string {
    if (typeof text !== 'string') {
      return text;
    }

    let responseChar: string = "";
    if(text.toUpperCase() == SexEnum.MALE.toString()) {
      responseChar = "M";
    } else if(text.toUpperCase() == SexEnum.FEMALE.toString()) {
      responseChar = "F";
    }

    return responseChar;
  }

}
