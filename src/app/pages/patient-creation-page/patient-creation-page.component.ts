import {Component, OnInit} from "@angular/core";
import {PatientDto} from "../../swagger-patient-service/model/PatientDto";
import RaceEnum = PatientDto.RaceEnum;
import EthnicityEnum = PatientDto.EthnicityEnum;
import EmploymentEnum = PatientDto.EmploymentEnum;
import SexEnum = PatientDto.SexEnum;
import MaritalEnum = PatientDto.MaritalEnum;
import LivingEnum = PatientDto.LivingEnum;

@Component({
  selector: 'app-patient-creation-page',
  templateUrl: './patient-creation-page.component.html',
  styleUrls: ['./patient-creation-page.component.scss']
})
export class PatientCreationPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
