import { Component, OnInit } from '@angular/core';
import {EvaluationBase} from "../evaluation-base";
import {EvaluationService} from "../../../../../services/evaluation/evaluation.service";
import {EvaluationDto} from "../../../../../swagger-patient-service/model/EvaluationDto";
import EvaluationTypeEnum = EvaluationDto.EvaluationTypeEnum;

@Component({
  selector: 'app-psychiatric',
  templateUrl: './psychiatric.component.html',
  styleUrls: ['./psychiatric.component.scss']
})
export class PsychiatricComponent extends EvaluationBase implements OnInit {

  evaluationDto: EvaluationDto = {
    evaluationType: EvaluationTypeEnum.PSYCHIATRIC,
    evaluationResponses: [
      {prompt: "Reasons for Evaluation", answer: ""},
      {prompt: "History of Present Illness", answer: ""},
      {prompt: "Past Psychiatric History", answer: ""},
      {prompt: "History of Alcohol and Other Substance Abuse", answer: ""},
      {prompt: "General Medical History", answer: ""},
      {prompt: "Developmental, Psychosocial and Sociocultural History", answer: ""},
      {prompt: "Occupational and Military History", answer: ""},
      {prompt: "Legal History", answer: ""},
      {prompt: "Family History", answer: ""},
      {prompt: "Review of Systems", answer: ""},
      {prompt: "Functional Assessments", answer: ""}
    ]
  };

  constructor(evaluationService: EvaluationService) {
    super(evaluationService);
  }

  ngOnInit() {
  }

}
