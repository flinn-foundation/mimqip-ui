import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EvaluationDto} from "../../../../../swagger-patient-service/model/EvaluationDto";
import {EvaluationResponseDto} from "../../../../../swagger-patient-service/model/EvaluationResponseDto";
import EvaluationTypeEnum = EvaluationDto.EvaluationTypeEnum;
import {EvaluationBaseComponent} from "../evaluation-base/evaluation-base.component";

@Component({
  selector: 'app-global-ratings',
  templateUrl: './global-ratings.component.html',
  styleUrls: ['./global-ratings.component.scss']
})
export class GlobalRatingsComponent extends EvaluationBaseComponent implements OnInit {

  private description: string[] = [
    "Please rate the severity of the patient's side effects over the last week on the scale below from <span class='blue'>0 = No side effects</span> to <span class='blue'>10 = Very severe side effects</span>",
    "Please rate the severity of the patient's symptoms over the last week on the scale below from <span class='blue'>0 = No symptoms</span> to <span class='blue'>10 = Very severe symptoms</span>",
    "Please rate the severity of the patient's overall functional impairment over the last week on the scale below from <span class='blue'>0 = No functional impairment</span> to <span class='blue'>10 = Very severe functional impairment</span>",
    ""
  ];

  private evaluationQuestions: EvaluationResponseDto[] = [
    {
      prompt: "Overall Side Effect Severity",
      answer: null
    },
    {
      prompt: "Overall Symptom Severity",
      answer: null
    },
    {
      prompt: "Overall Functional Impairment",
      answer: null
    },
    {
      prompt: "Patient Medication Compliance",
      answer: null
    }
  ];

  evaluation: EvaluationDto = {
    evaluationResponses: this.evaluationQuestions,
    evaluationType: EvaluationTypeEnum.GLOBAL
  };

  ngOnInit() {
  }

}
