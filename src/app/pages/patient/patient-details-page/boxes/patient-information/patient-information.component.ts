import {Component, Input, OnInit} from '@angular/core';
import {PatientDto} from "../../../../../swagger/model/PatientDto";
import {PatientService} from "../../../../../services/patient.service";
import {PatientSimpleDto} from "../../../../../swagger/model/PatientSimpleDto";
import SexEnum = PatientDto.SexEnum;

@Component({
  selector: 'app-patient-information',
  templateUrl: './patient-information.component.html',
  styleUrls: ['./patient-information.component.scss'],
  providers: [PatientService]
})
export class PatientInformationComponent implements OnInit {

  @Input()
  private patientId: number;

  private patient: PatientSimpleDto;

  constructor(private patientService: PatientService) {

  }

  ngOnInit() {
    this.patientService.getPatientSimpleById(this.patientId).subscribe(
      (patient: PatientSimpleDto) => this.patient = patient,
      error => console.log(error)
    );
  }

  calculateAge(dateOfBirth: Date) { // birthday is a date
    const ageDiffMs = Date.now() - dateOfBirth.getTime();
    const ageDate = new Date(ageDiffMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

}
