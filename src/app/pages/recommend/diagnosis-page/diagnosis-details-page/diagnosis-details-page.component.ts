import { Component, OnInit } from '@angular/core';
import {Diagnosis} from "../../../../models/diagnosis";

@Component({
  selector: 'app-diagnosis-details-page',
  templateUrl: './diagnosis-details-page.component.html',
  styleUrls: ['./diagnosis-details-page.component.scss']
})
export class DiagnosisDetailsPageComponent implements OnInit {

  diagnosis : Diagnosis;

  constructor() { }

  ngOnInit() {
  }

  updateDiagnosis() {

  }

  addTreatment() {

  }

  editTreatment() {

  }

  removeTreatment() {

  }

}
