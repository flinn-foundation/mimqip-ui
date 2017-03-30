import { Component, OnInit } from '@angular/core';
import {PatientService} from "../../../services/patient.service";

@Component({
  selector: 'app-patient-creation-page',
  templateUrl: './patient-creation-page.component.html',
  styleUrls: ['./patient-creation-page.component.scss']
})
export class PatientCreationPageComponent implements OnInit {

  constructor(private patientService: PatientService) { }

  ngOnInit() {
  }

}
