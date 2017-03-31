import {Component, OnInit} from '@angular/core';
import {PatientService} from "../../../services/patient.service";
import {ActivatedRoute, Params} from "@angular/router";
import {PatientDto} from "../../../swagger/model/PatientDto";

@Component({
  selector: 'app-patient-details-page',
  templateUrl: './patient-details-page.component.html',
  styleUrls: ['./patient-details-page.component.scss'],
  providers: [PatientService]
})
export class PatientDetailsPageComponent implements OnInit {

  patient: PatientDto;

  constructor(private patientService: PatientService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      let patientId = params['patientId'];

      this.patientService.patientsIdGet(patientId).subscribe(
        (patient: PatientDto) => this.patient = patient,
        error => console.log(error)
      );
    });



  }

}
