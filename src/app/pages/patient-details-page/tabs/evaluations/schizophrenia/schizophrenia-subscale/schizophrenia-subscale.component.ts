import {Component, Input, OnInit} from '@angular/core';
import {EvaluationDto} from "../../../../../../swagger-patient-service/model/EvaluationDto";
import {Question} from "../../evaluation-base/question";
import {SelectItem} from "primeng/primeng";
import {EvaluationBaseComponent} from "../../evaluation-base/evaluation-base.component";
import EvaluationTypeEnum = EvaluationDto.EvaluationTypeEnum;
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-schizophrenia-subscale',
  templateUrl: './schizophrenia-subscale.component.html',
  styleUrls: ['./schizophrenia-subscale.component.scss']
})
export class SchizophreniaSubscaleComponent extends EvaluationBaseComponent implements OnInit {

  @Input()
  subscaleType: EvaluationTypeEnum;

  @Input()
  subscaleStrings: any;

  private datePipe;

  isHistorical: boolean = false;
  selectedEvaluation: EvaluationDto;
  historicalEvaluations: EvaluationDto[] = [];
  newEvaluation: EvaluationDto = {
    evaluationResponses: []
  };

  questions: Question[] = [];

  evaluationDates: SelectItem[] = [{label: 'New Evaluation', value: null}];

  ngOnInit() {
    this.datePipe = new DatePipe('en-US');

    this.newEvaluation.evaluationType = this.subscaleType;

    for (let i = 0; i < this.subscaleStrings.titles.length; i++) {
      this.questions.push(new Question(this.subscaleStrings.titles[i], "", this.subscaleStrings.descriptions[i], this.subscaleStrings.longDescriptions[i], this.generateScaleDetails(this.subscaleStrings.scaleTitles, this.subscaleStrings.scaleLevels[i])));
      this.newEvaluation.evaluationResponses.push({prompt: this.subscaleStrings.titles[i], answer: ""});
    }

    this.selectedEvaluation = this.newEvaluation;

    this.getHistoricalEvaluations(this.subscaleType).subscribe((evaluations: EvaluationDto[]) =>
      this.extractHistoricalEvaluationDates(evaluations)
    );
  }

  extractHistoricalEvaluationDates(evaluations: EvaluationDto[]) {
    this.historicalEvaluations = evaluations;
    for (let evaluation of this.historicalEvaluations) {
      this.evaluationDates.push({label: this.datePipe.transform(evaluation.created, "short"), value: evaluation})
    }
  }

  doSomething(selectedEvaluation: EvaluationDto) {
    if (selectedEvaluation == null) {
      this.selectedEvaluation = this.newEvaluation;
      this.isHistorical = false;
    } else {
      this.selectedEvaluation = selectedEvaluation;
      this.isHistorical = true;
    }
  }

}
