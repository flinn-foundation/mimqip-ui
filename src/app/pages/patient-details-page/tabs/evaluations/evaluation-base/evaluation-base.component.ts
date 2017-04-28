import { Component, OnInit } from '@angular/core';
import {EvaluationDto} from "../../../../../swagger-patient-service/model/EvaluationDto";
import {Router} from "@angular/router";
import {EvaluationService} from "../../../../../services/evaluation/evaluation.service";
import {ScaleDetail} from "./scale-detail";
import {EvaluationResponseDto} from "../../../../../swagger-patient-service/model/EvaluationResponseDto";
import {Question} from "./question";
import EvaluationTypeEnum = EvaluationDto.EvaluationTypeEnum;
import {Observable} from "rxjs/Observable";

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

  constructor(private evaluationService: EvaluationService, private router: Router) {
  }

  ngOnInit(): void {
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

  saveEvaluation(evaluation: EvaluationDto) {
    this.evaluationService.saveEvaluation(evaluation).subscribe(
      (message: any) => this.successRedirect(),
      (error) => console.log(error)
    );
  }

  saveEvaluations(evaluations: EvaluationDto[]) {
    this.evaluationService.saveEvaluations(evaluations).subscribe(
      () => this.successRedirect(),
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
