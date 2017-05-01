import {Component, Input, OnInit} from '@angular/core';
import {EvaluationDto} from "../../../../../../swagger-patient-service/model/EvaluationDto";
import {Question} from "../../evaluation-base/question";
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

  questions: Question[] = [];

  ngOnInit() {

    for (let i = 0; i < this.subscaleStrings.titles.length; i++) {
      this.questions.push(new Question(this.subscaleStrings.titles[i], "", this.subscaleStrings.descriptions[i], this.subscaleStrings.longDescriptions[i], this.generateScaleDetails(this.subscaleStrings.scaleTitles, this.subscaleStrings.scaleLevels[i])));
    }

    this.finishInit(this.subscaleType, this.subscaleStrings.titles);
  }
}
