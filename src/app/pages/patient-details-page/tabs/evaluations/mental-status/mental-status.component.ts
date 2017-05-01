import {Component, OnInit} from '@angular/core';
import {EvaluationDto} from "../../../../../swagger-patient-service/model/EvaluationDto";
import EvaluationTypeEnum = EvaluationDto.EvaluationTypeEnum;
import {EvaluationBaseComponent} from "../evaluation-base/evaluation-base.component";
import {MENTAL_STATUS_TITLES} from "./strings";

@Component({
  selector: 'app-mental-status',
  templateUrl: './mental-status.component.html',
  styleUrls: ['./mental-status.component.scss']
})
export class MentalStatusComponent extends EvaluationBaseComponent implements OnInit {


  ngOnInit() {
    this.finishInit(EvaluationTypeEnum.MENTALSTATUS, MENTAL_STATUS_TITLES)
  }

}
