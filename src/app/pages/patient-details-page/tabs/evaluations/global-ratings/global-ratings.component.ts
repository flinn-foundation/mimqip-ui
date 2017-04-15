import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-global-ratings',
  templateUrl: './global-ratings.component.html',
  styleUrls: ['./global-ratings.component.scss']
})
export class GlobalRatingsComponent implements OnInit {

  private evaluation = [
    {
      title: "Overall Side Effect Severity",
      description: "Please rate the severity of the patient's side effects over the last week on the scale below from <span class='blue'>0 = No side effects</span> to <span class='blue'>10 = Very severe side effects</span>",
      response: null
    },
    {
      title: "Overall Symptom Severity",
      description: "Please rate the severity of the patient's symptoms over the last week on the scale below from <span class='blue'>0 = No symptoms</span> to <span class='blue'>10 = Very severe symptoms</span>",
      response: null
    },
    {
      title: "Overall Functional Impairment",
      description: "Please rate the severity of the patient's overall functional impairment over the last week on the scale below from <span class='blue'>0 = No functional impairment</span> to <span class='blue'>10 = Very severe functional impairment</span>",
      response: null
    },
    {
      title: "Patient Medication Compliance",
      description: "",
      response: null
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  private saveEvaluation() {
    console.log("Saving Eval");
  }

}
