import {Component, Input, OnInit} from '@angular/core';
import {EvaluationDto} from "../../../../../../swagger-patient-service/model/EvaluationDto";
import {Question} from "../../evaluation-base/question";
import {SelectItem} from "primeng/primeng";
import {EvaluationBaseComponent} from "../../evaluation-base/evaluation-base.component";
import EvaluationTypeEnum = EvaluationDto.EvaluationTypeEnum;

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

  isHistorical: boolean = false;
  selectedEvaluation: EvaluationDto;
  historicalEvaluations: EvaluationDto[] = [];
  newEvaluation: EvaluationDto = {
    evaluationResponses: []
  };

  questions: Question[] = [];

  evaluationDates: SelectItem[] = [{label: 'New Evaluation', value: null}];

  ngOnInit() {

    for (let i = 0; i < this.subscaleStrings.titles.length; i++) {
      this.questions.push(new Question(this.subscaleStrings.titles[i], "", this.subscaleStrings.descriptions[i], this.subscaleStrings.longDescriptions[i], this.generateScaleDetails(this.subscaleStrings.scaleTitles, this.subscaleStrings.scaleLevels[i])));
      this.newEvaluation.evaluationResponses.push({prompt: this.subscaleStrings[i], answer: ""});
    }

    this.selectedEvaluation = this.newEvaluation;

    this.getHistoricalEvaluations(this.subscaleType).subscribe((evaluations: EvaluationDto[]) => {
      this.historicalEvaluations = evaluations;
      this.extractHistoricalEvaluationDates()
    });

  }

  extractHistoricalEvaluationDates() {
    for (let evaluation of this.historicalEvaluations) {
      this.evaluationDates.push({label: evaluation.created.toDateString(), value: evaluation})
    }
  }

  doSomething(selectedEvaluation: EvaluationDto) {
    console.log("ERR");
    if (selectedEvaluation == null) {
      this.selectedEvaluation = this.newEvaluation;
      this.isHistorical = false;
    } else {
      this.selectedEvaluation = selectedEvaluation;
      this.isHistorical = true;
    }
  }

}
