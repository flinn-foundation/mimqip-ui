import {Component, Input, OnInit} from '@angular/core';
import {EvaluationDto} from "../../../../../swagger-patient-service/model/EvaluationDto";
import {Router} from "@angular/router";
import {EvaluationService} from "../../../../../services/evaluation/evaluation.service";
import {ScaleDetail} from "./scale-detail";
import {EvaluationResponseDto} from "../../../../../swagger-patient-service/model/EvaluationResponseDto";
import {Question} from "./question";
import EvaluationTypeEnum = EvaluationDto.EvaluationTypeEnum;
import {Observable} from "rxjs/Observable";
import {SelectItem} from "primeng/primeng";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-evaluation-base',
  templateUrl: './evaluation-base.component.html',
  styleUrls: ['./evaluation-base.component.scss']
})
export class EvaluationBaseComponent implements OnInit {



  displayDialog: boolean = false;
  dialogKey: string;
  dialogScaleDetails: ScaleDetail[];
  dialogLongDescription: string;

  isHistorical: boolean = false;
  historicalEvaluations: EvaluationDto[] = [];
  evaluationDates: SelectItem[] = [{label: 'New Evaluation', value: null}];

  newEvaluation: EvaluationDto = {
    evaluationResponses: []
  };

  selectedEvaluation: EvaluationDto = this.newEvaluation;

  private datePipe;

  constructor(private evaluationService: EvaluationService, private router: Router) {
    this.datePipe = new DatePipe('en-US');
  }

  ngOnInit(): void {
  }

  finishInit(subscaleType: EvaluationTypeEnum, titles: string[]) {

    this.newEvaluation.evaluationType = subscaleType;
    for(let title of titles) {
      this.newEvaluation.evaluationResponses.push({prompt: title, answer: ""});
    }

    this.getHistoricalEvaluations(this.newEvaluation.evaluationType).subscribe(
      (evaluations: EvaluationDto[]) => this.extractHistoricalEvaluationDates(evaluations)
    );
  }

  extractHistoricalEvaluationDates(evaluations: EvaluationDto[]) {
    this.historicalEvaluations = evaluations;
    for (let evaluation of this.historicalEvaluations) {
      this.evaluationDates.push({label: this.datePipe.transform(evaluation.createdTimestamp, "short"), value: evaluation})
    }
  }

  selectEvaluation(selectedEvaluation: EvaluationDto) {
    if (selectedEvaluation == null) {
      this.selectedEvaluation = this.newEvaluation;
      this.isHistorical = false;
    } else {
      this.selectedEvaluation = selectedEvaluation;
      this.isHistorical = true;
    }
  }


  getHistoricalEvaluations(evaluationType?: EvaluationTypeEnum): Observable<Array<EvaluationDto>> {
    return this.evaluationService.getEvaluations(evaluationType);
  }

  successRedirect() {
    this.router.navigate(['/patient/details/evaluations/success'], {
      preserveQueryParams: true,
      skipLocationChange: true
    });
  }

  saveEvaluation() {
    this.evaluationService.saveEvaluation(this.newEvaluation).subscribe(
      (message: any) => this.successRedirect(),
      (error) => console.log(error)
    );
  }

  generateScaleDetails(scaleTitles: string[], scaleLevels: string[]): ScaleDetail[] {
    let scaleDetails: ScaleDetail[] = [];
    for (let i = 0; i < scaleTitles.length; i++) {
      scaleDetails.push(new ScaleDetail(scaleTitles[i], scaleLevels[i]));
    }

    return scaleDetails
  }

  calculateTotal(evaluationResponses: EvaluationResponseDto[]): number {
    let total: number = 0;
    for (let evaluationResponse of evaluationResponses) {
      total += +evaluationResponse.answer;
    }

    return total;
  }

  openScaleDetails(question: Question) {
    this.dialogScaleDetails = question.scaleDetails;
    this.dialogLongDescription = question.longDescription;
    this.dialogKey = question.title;
    this.displayDialog = true;
  }

}
