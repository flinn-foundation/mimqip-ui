import {Component, OnInit} from '@angular/core';
import {EvaluationDto} from "../../../../../swagger-patient-service/model/EvaluationDto";
import EvaluationTypeEnum = EvaluationDto.EvaluationTypeEnum;
import {Question} from "./question";
import {PSRS_DESCRIPTIONS, PSRS_LONG_DESCRIPTIONS, PSRS_SCALE_LEVELS, PSRS_SCALE_TITLES, PSRS_TITLES} from "./strings";
import {ScaleDetail} from "./scale-detail";

@Component({
  selector: 'app-schizophrenia-psrs',
  templateUrl: './schizophrenia-psrs.component.html',
  styleUrls: ['./schizophrenia-psrs.component.scss']
})
export class SchizophreniaPsrsComponent implements OnInit {

  displayDialog: boolean = false;
  dialogKey: string;
  dialogScaleDetails: ScaleDetail[];
  dialogLongDescription: string;

  psrsEvaluation: EvaluationDto = {
    evaluationType: EvaluationTypeEnum.PSRS,
    evaluationResponses: []
  };

  // bnsas: EvaluationDto = {
  //   evaluationType: EvaluationTypeEnum.BNSAS,
  //   evaluationResponses: [
  //     {prompt: "Prolonged Time to Respond (A Measure of Alogia)", answer: ""},
  //     {
  //       prompt: "Emotion: Unchanging Facial Expression; Blank, Expressionless Face (A Measure of Flat Affect)",
  //       answer: ""
  //     },
  //     {prompt: "Reduced Social Drive (A Measure of Asociality)", answer: ""},
  //     {prompt: "Grooming and Hygiene (A Measure of Amotivation)", answer: ""}
  //   ]
  // };

  private psrsQuestions: Question[] = [];

  // private bnsasScaleLevels = ["NORMAL", "MINIMAL", "MILD", "MODERATE", "MARKED", "SEVERE"];


  constructor() {
    for (let i = 0; i < PSRS_TITLES.length; i++) {
      this.psrsQuestions.push(new Question(PSRS_TITLES[i], "", PSRS_DESCRIPTIONS[i], PSRS_LONG_DESCRIPTIONS[i], this.generateScaleDetails(i)));
      this.psrsEvaluation.evaluationResponses.push({prompt: PSRS_TITLES[i], answer: ""});
    }
    console.log(this.psrsQuestions);
  }

  ngOnInit() {
  }

  generateScaleDetails(index: number): ScaleDetail[] {
    let scaleDetails: ScaleDetail[] = [];
    for (let i = 0; i < PSRS_SCALE_TITLES.length; i++) {
      scaleDetails.push(new ScaleDetail(PSRS_SCALE_TITLES[i], PSRS_SCALE_LEVELS[index][i]));
    }

    return scaleDetails
  }

  openScaleDetails(question: Question) {
    console.log(question);
    this.dialogScaleDetails = question.scaleDetails;
    this.dialogLongDescription = question.longDescription;
    this.dialogKey = question.title;
    this.displayDialog = true;

  }

}
