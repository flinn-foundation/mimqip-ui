import { Component, OnInit } from '@angular/core';
import {EvaluationDto} from "../../../../../swagger-patient-service/model/EvaluationDto";
import EvaluationTypeEnum = EvaluationDto.EvaluationTypeEnum;
import {EvaluationBase} from "../evaluation-base";
import {EvaluationService} from "../../../../../services/evaluation/evaluation.service";

@Component({
  selector: 'app-mental-status',
  templateUrl: './mental-status.component.html',
  styleUrls: ['./mental-status.component.scss']
})
export class MentalStatusComponent extends EvaluationBase implements OnInit {

  evaluationDto: EvaluationDto = {
    evaluationType: EvaluationTypeEnum.MENTALSTATUS,
    evaluationResponses: [
      {prompt: "Appearance and General Behavior", answer: ""},
      {prompt: "Motor Activity", answer: ""},
      {prompt: "Speech", answer: ""},
      {prompt: "Mood and Affect", answer: ""},
      {prompt: "Thought Process", answer: ""},
      {prompt: "Thought Content", answer: ""},
      {prompt: "Perceptual Disturbances", answer: ""},
      {prompt: "Sensorium and Cognition", answer: ""},
      {prompt: "Insight", answer: ""},
      {prompt: "Judgement", answer: ""}
    ]
  };

  constructor(evaluationService: EvaluationService) {
    super(evaluationService);
  }

  ngOnInit() {
  }

}
