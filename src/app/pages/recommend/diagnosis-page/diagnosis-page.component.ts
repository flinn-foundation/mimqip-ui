import { Component, OnInit } from '@angular/core';
import {Diagnosis} from "../../../models/diagnosis";

@Component({
  selector: 'app-diagnosis-page',
  templateUrl: './diagnosis-page.component.html',
  styleUrls: ['./diagnosis-page.component.scss']
})
export class DiagnosisPageComponent implements OnInit {

  diagnoses : Diagnosis[];

  constructor() { }

  ngOnInit() {
  }

}
