import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EvaluationDto} from "../../../../../swagger-patient-service/model/EvaluationDto";
import {EvaluationResponseDto} from "../../../../../swagger-patient-service/model/EvaluationResponseDto";
import EvaluationTypeEnum = EvaluationDto.EvaluationTypeEnum;
import {EvaluationBaseComponent} from "../evaluation-base/evaluation-base.component";
import {GLOBAL_DESCRIPTIONS, GLOBAL_TITLES} from "./strings";

@Component({
  selector: 'app-global-ratings',
  templateUrl: './global-ratings.component.html',
  styleUrls: ['./global-ratings.component.scss']
})
export class GlobalRatingsComponent extends EvaluationBaseComponent implements OnInit {

  globalDescriptions = GLOBAL_DESCRIPTIONS;

  ngOnInit() {

    this.finishInit(EvaluationTypeEnum.GLOBAL, GLOBAL_TITLES);
  }

}
