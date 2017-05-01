import {Component, OnInit} from '@angular/core';
import {PatientDto} from "../../../../swagger-patient-service/model/PatientDto";
import LivingEnum = PatientDto.LivingEnum;
import {SelectItem} from "primeng/primeng";
import MaritalEnum = PatientDto.MaritalEnum;
import SexEnum = PatientDto.SexEnum;
import EmploymentEnum = PatientDto.EmploymentEnum;
import EthnicityEnum = PatientDto.EthnicityEnum;
import RaceEnum = PatientDto.RaceEnum;
import {Router} from "@angular/router";
import {PatientService} from "../../../../services/patient/patient.service";

@Component({
  selector: 'app-patient-information-input',
  templateUrl: './patient-information-input.component.html',
  styleUrls: ['./patient-information-input.component.scss']
})
export class InformationComponent implements OnInit {

  patient: PatientDto = { race: [] };

  defaultDate: Date;

  yearRange: string = (new Date().getFullYear() - 120) + ':' + (new Date().getFullYear() - 5);

  raceOptions = [
    {label: "White", value: RaceEnum.WHITE},
    {label: "African-American, Black", value: RaceEnum.BLACK},
    {label: "American Indian", value: RaceEnum.AMERICANINDIAN},
    {label: "Asian (Indian, Chinese, Filipino, Japanese, Korean, or other)", value: RaceEnum.ASIAN},
    {label: "Pacific Islander (Hawaiian, Samoan, or other)", value: RaceEnum.PACIFICISLANDER},
    {label: "No response", value: RaceEnum.NORESPONSE}
  ];

  ethnicityOptions = [
    {label: "Hispanic, Latino or Spanish", value: EthnicityEnum.HISPANIC},
    {label: "Non Hispanic", value: EthnicityEnum.NONHISPANIC},
    {label: "No Response", value: EthnicityEnum.NORESPONSE}
  ];

  employmentOptions: SelectItem[] = [
    {label: 'Full Time Salaried', value: EmploymentEnum.FULLTIMESALARIED},
    {label: 'Part Time Salaried', value: EmploymentEnum.PARTTIMESALARIED},
    {label: 'Full Time Non-salaried', value: EmploymentEnum.FULLTIMENONSALARIED},
    {label: 'Part Time Non-salaried', value: EmploymentEnum.PARTTIMENONSALARIED},
    {label: 'Self Employed', value: EmploymentEnum.SELFEMPLOYED}
  ];

  sexOptions: SelectItem[] = [
    {label: 'Male', value: SexEnum.MALE},
    {label: 'Female', value: SexEnum.FEMALE}
  ];

  maritalOptions: SelectItem[] = [
    {label: 'Single', value: MaritalEnum.SINGLE},
    {label: 'Married', value: MaritalEnum.MARRIED},
    {label: 'Separated', value: MaritalEnum.SEPARATED},
    {label: 'Divorced', value: MaritalEnum.DIVORCED},
    {label: 'Widowed', value: MaritalEnum.WIDOWED}
  ];

  livingOptions: SelectItem[] = [
    {label: 'Alone', value: LivingEnum.ALONE},
    {label: 'With Roommates', value: LivingEnum.WITHROOMMATES},
    {label: 'With Spouse', value: LivingEnum.WITHSPOUSE},
    {label: 'With Spouse and Children', value: LivingEnum.WITHSPOUSEANDCHILDREN},
    {label: 'With Parents', value: LivingEnum.WITHPARENTS},
    {label: 'Group Home', value: LivingEnum.GROUPHOME}
  ];

  constructor(private patientService: PatientService, private router: Router) {
    this.defaultDate = new Date();
    this.defaultDate.setFullYear(new Date().getFullYear() - 30);
  }

  ngOnInit() {
    if (this.patientService.getPatientId()) {
      this.patientService.getPatient().subscribe(
        (patient: PatientDto) => this.patient = patient
      );
    }
  }

  saveNewPatient() {
    this.patientService.createPatient(this.patient).subscribe(
      (patientId: string) => this.router.navigate(['/patient/details'], {queryParams: {patientId: patientId}}),
      error => console.log(error)
    );
  }

}
