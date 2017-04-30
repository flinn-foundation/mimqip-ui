import {Component, OnInit} from '@angular/core';
import {EvaluationDto} from "../../../../../swagger-patient-service/model/EvaluationDto";
import EvaluationTypeEnum = EvaluationDto.EvaluationTypeEnum;
import {EvaluationBaseComponent} from "../evaluation-base/evaluation-base.component";
import {PHQ9_TITLES} from "./strings";

@Component({
  selector: 'app-depression-phq9',
  templateUrl: './depression-phq9.component.html',
  styleUrls: ['./depression-phq9.component.scss']
})
export class DepressionPhq9Component extends EvaluationBaseComponent implements OnInit {

  difficulties: string[] = ["not difficult", "somewhat difficult", "very difficult", "extremely difficult"];

  ngOnInit() {
    this.finishInit(EvaluationTypeEnum.PHQ9, PHQ9_TITLES);
  }

}
