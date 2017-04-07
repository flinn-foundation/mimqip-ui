import {Component, OnInit} from '@angular/core';
import {PatientDto} from "../../../../swagger/model/PatientDto";
import EmploymentEnum = PatientDto.EmploymentEnum;
import LivingEnum = PatientDto.LivingEnum;
import MaritalEnum = PatientDto.MaritalEnum;
import SexEnum = PatientDto.SexEnum;
import RaceEnum = PatientDto.RaceEnum;

@Component({
  selector: 'app-new-patient-form',
  templateUrl: './new-patient-form.component.html',
  styleUrls: ['./new-patient-form.component.scss']
})
export class NewPatientFormComponent implements OnInit {

  private patient: PatientDto = {};

  private defaultDate: Date;

  private yearRange: string = (new Date().getFullYear() - 120) + ':' + (new Date().getFullYear() - 5);


  private employmentOptions = EmploymentEnum;
  private maritalOptions = MaritalEnum;
  private livingOptions = LivingEnum;
  private sexOptions = SexEnum;

  private raceOptions = [
    {name:RaceEnum.White,  checked:false},
    {name:RaceEnum.Black,  checked:false},
    {name:RaceEnum.Asian, checked:false},
    {name:RaceEnum.IndianAmerican, checked:false},
    {name:RaceEnum.PacificIslander, checked:false},
    {name:RaceEnum.NoResponse, checked:false}
  ]

  constructor() {
    this.defaultDate = new Date();
    this.defaultDate.setFullYear(new Date().getFullYear() - 30);

    // let employmentOptionsKeys : string[] = EmploymentEnum;
    // this.employmentOptions = employmentOptionsKeys;
  }

  ngOnInit() {
  }

  saveNewPatient() {
    console.log(this.patient);
    console.log(this.raceOptions);
  }

}
