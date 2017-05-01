import {Component, Input, OnInit} from '@angular/core';
import {PatientDto} from "../../../../swagger-patient-service/model/PatientDto";
import {PatientService} from "../../../../services/patient/patient.service";
import {PatientSimpleDto} from "../../../../swagger-patient-service/model/PatientSimpleDto";
import SexEnum = PatientDto.SexEnum;

@Component({
  selector: 'app-patient-information',
  templateUrl: './patient-information.component.html',
  styleUrls: ['./patient-information.component.scss']
})
export class PatientInformationComponent implements OnInit {

  private patient: PatientSimpleDto = {};

  constructor(private patientService: PatientService) {
  }

  ngOnInit() {
    this.patientService.getPatientSimpleById(this.patientService.getPatientId()).subscribe(
      (patient: PatientSimpleDto) => this.patient = patient,
      error => console.log(error)
    );
  }

}
