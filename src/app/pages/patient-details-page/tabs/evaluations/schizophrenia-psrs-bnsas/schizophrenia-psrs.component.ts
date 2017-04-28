import {Component, OnInit} from '@angular/core';
import {EvaluationDto} from "../../../../../swagger-patient-service/model/EvaluationDto";
import EvaluationTypeEnum = EvaluationDto.EvaluationTypeEnum;
import {Question} from "../evaluation-base/question";
import {
  BNSAS_DESCRIPTIONS, BNSAS_LONG_DESCRIPTIONS, BNSAS_SCALE_LEVELS, BNSAS_SCALE_TITLES, BNSAS_SUBTITLES, BNSAS_TITLES,
  PSRS_DESCRIPTIONS, PSRS_LONG_DESCRIPTIONS, PSRS_SCALE_LEVELS, PSRS_SCALE_TITLES, PSRS_TITLES
} from "./strings";
import {EvaluationBaseComponent} from "../evaluation-base/evaluation-base.component";

@Component({
  selector: 'app-schizophrenia-psrs',
  templateUrl: './schizophrenia-psrs.component.html',
  styleUrls: ['./schizophrenia-psrs.component.scss']
})
export class SchizophreniaPsrsComponent extends EvaluationBaseComponent implements OnInit {

  psrsEvaluation: EvaluationDto = {
    evaluationType: EvaluationTypeEnum.PSRS,
    evaluationResponses: []
  };

  bnsasEvaluation: EvaluationDto = {
    evaluationType: EvaluationTypeEnum.BNSAS,
    evaluationResponses: []
  };

  private psrsQuestions: Question[] = [];
  private bnsasQuestions: Question[] = [];

  ngOnInit() {

    for (let i = 0; i < PSRS_TITLES.length; i++) {
      this.psrsQuestions.push(new Question(PSRS_TITLES[i], "", PSRS_DESCRIPTIONS[i], PSRS_LONG_DESCRIPTIONS[i], this.generateScaleDetails(PSRS_SCALE_TITLES, PSRS_SCALE_LEVELS[i])));
      this.psrsEvaluation.evaluationResponses.push({prompt: PSRS_TITLES[i], answer: ""});
    }

    for (let i = 0; i < BNSAS_TITLES.length; i++) {
      this.bnsasQuestions.push(new Question(BNSAS_TITLES[i], BNSAS_SUBTITLES[i], BNSAS_DESCRIPTIONS[i], BNSAS_LONG_DESCRIPTIONS[i], this.generateScaleDetails(BNSAS_SCALE_TITLES, BNSAS_SCALE_LEVELS[i])));
      this.bnsasEvaluation.evaluationResponses.push({prompt: BNSAS_TITLES[i], answer: ""})
    }

  }


}
