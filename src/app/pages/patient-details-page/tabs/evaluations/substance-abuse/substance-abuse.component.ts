import {Component, OnInit} from '@angular/core';
import {EvaluationDto} from "../../../../../swagger-patient-service/model/EvaluationDto";
import EvaluationTypeEnum = EvaluationDto.EvaluationTypeEnum;
import {EvaluationBaseComponent} from "../evaluation-base/evaluation-base.component";
import {SUBSTANCE_ABUSE_TITLES} from "./strings";

@Component({
  selector: 'app-substance-abuse',
  templateUrl: './substance-abuse.component.html',
  styleUrls: ['./substance-abuse.component.scss']
})
export class SubstanceAbuseComponent extends EvaluationBaseComponent implements OnInit {


  ngOnInit() {

    this.finishInit(EvaluationTypeEnum.SUBSTANCEABUSE, SUBSTANCE_ABUSE_TITLES);
  }


}
