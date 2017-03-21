import { Component, OnInit } from '@angular/core';
import {Diagnosis} from "../../models/diagnosis";

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.scss']
})
export class DiagnosisComponent implements OnInit {

  diagnoses : Diagnosis[];

  constructor() { }

  ngOnInit() {
  }

}
