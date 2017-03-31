import {Component, Input, OnInit} from '@angular/core';
import {PatientDto} from "../../../../swagger/model/PatientDto";

@Component({
  selector: 'app-patient-information',
  templateUrl: './patient-information.component.html',
  styleUrls: ['./patient-information.component.scss']
})
export class PatientInformationComponent implements OnInit {

  @Input()
  patient: PatientDto;

  constructor() {
  }

  ngOnInit() {
  }

  calculateAge(dateOfBirth: Date) { // birthday is a date
    console.log(dateOfBirth);
    console.log(new Date());
    const ageDiffMs = Date.now() - dateOfBirth.getTime();
    const ageDate = new Date(ageDiffMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

}
