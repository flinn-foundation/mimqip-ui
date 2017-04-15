import { Component, OnInit } from '@angular/core';
import {EvaluationDto} from "../../../../swagger/model/EvaluationDto";
import EvaluationTypeEnum = EvaluationDto.EvaluationTypeEnum;

@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrls: ['./evaluations.component.scss']
})
export class EvaluationsComponent implements OnInit {

  private evlautionEnum = EvaluationTypeEnum;
  private activeEvaluation = EvaluationTypeEnum.GLOBAL;

  constructor() { }

  ngOnInit() {
  }

}
