import {Component, OnInit} from '@angular/core';
import {EvaluationDto} from "../../../../../swagger-patient-service/model/EvaluationDto";
import EvaluationTypeEnum = EvaluationDto.EvaluationTypeEnum;
import {EvaluationBaseComponent} from "../evaluation-base/evaluation-base.component";

@Component({
  selector: 'app-substance-abuse',
  templateUrl: './substance-abuse.component.html',
  styleUrls: ['./substance-abuse.component.scss']
})
export class SubstanceAbuseComponent extends EvaluationBaseComponent implements OnInit {

  evaluationDto: EvaluationDto = {
    evaluationType: EvaluationTypeEnum.SUBSTANCEABUSE,
    evaluationResponses: [
      {prompt: "Nicotine", answer: ""},
      {prompt: "Stimulants", answer: ""},
      {prompt: "Inhalants", answer: ""},
      {prompt: "Alcohol", answer: ""},
      {prompt: "Opioids", answer: ""},
      {prompt: "Cannabis", answer: ""},
      {prompt: "Cocaine", answer: ""},
      {prompt: "Hallucinogen", answer: ""},
      {prompt: "Other", answer: ""}
    ]
  };

  ngOnInit() {
  }


}
