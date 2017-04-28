import {Component, OnInit} from '@angular/core';
import {EvaluationDto} from "../../../../../swagger-patient-service/model/EvaluationDto";
import EvaluationTypeEnum = EvaluationDto.EvaluationTypeEnum;
import {EvaluationResponseDto} from "../../../../../swagger-patient-service/model/EvaluationResponseDto";
import {
  BBDSS_DESCIPTIONS, BBDSS_LONG_DESCRIPTIONS, BBDSS_TITLES, DEPRESSED_QUESTIONS, MANIC_QUESTIONS,
  PSYCHOTIC_QUESTIONS, SCALE_LEVELS, SCALE_TITLES
} from "./strings";
import {Question} from "../question";
import {EvaluationService} from "../../../../../services/evaluation/evaluation.service";
import {EvaluationBase} from "../evaluation-base";

@Component({
  selector: 'app-bipolar-bbdss',
  templateUrl: './bipolar-bbdss.component.html',
  styleUrls: ['./bipolar-bbdss.component.scss']
})
export class BipolarBbdssComponent extends EvaluationBase implements OnInit {

  evaluation: EvaluationDto = {
    evaluationType: EvaluationTypeEnum.BNSAS,
    evaluationResponses: []
  };

  private questions: Question[] = [];
  private subscaleMap = new Map<string, string[]>();

  constructor(evaluationService: EvaluationService) {
    super(evaluationService);

    this.subscaleMap.set("manic", MANIC_QUESTIONS);
    this.subscaleMap.set("depressed", DEPRESSED_QUESTIONS);
    this.subscaleMap.set("psychotic", PSYCHOTIC_QUESTIONS);

    for (let i = 0; i < BBDSS_TITLES.length; i++) {
      this.questions.push(new Question(BBDSS_TITLES[i], "", BBDSS_DESCIPTIONS[i], BBDSS_LONG_DESCRIPTIONS[i], this.generateScaleDetails(SCALE_TITLES, SCALE_LEVELS[i])));
      this.evaluation.evaluationResponses.push({prompt: BBDSS_TITLES[i], answer: ""});
    }
  }

  ngOnInit() {
  }


  calculateSubscale(evaluationResponses: EvaluationResponseDto[], subscale: string): number {

    let subscaleEvaluationResponses: EvaluationResponseDto[] = [];
    let subscaleQuestions = this.subscaleMap.get(subscale);

    for(let evaluationResponse of evaluationResponses) {
      if(subscaleQuestions.includes(evaluationResponse.prompt)) {
        subscaleEvaluationResponses.push(evaluationResponse);
      }
    }

    return this.calculateTotal(subscaleEvaluationResponses)/subscaleEvaluationResponses.length;

  }

}
