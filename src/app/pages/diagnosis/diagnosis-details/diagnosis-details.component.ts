import { Component, OnInit } from '@angular/core';
import {Diagnosis} from "../../../models/diagnosis";

@Component({
  selector: 'app-diagnosis-details',
  templateUrl: './diagnosis-details.component.html',
  styleUrls: ['./diagnosis-details.component.scss']
})
export class DiagnosisDetailsComponent implements OnInit {

  diagnosis : Diagnosis;

  constructor() { }

  ngOnInit() {
  }

}
