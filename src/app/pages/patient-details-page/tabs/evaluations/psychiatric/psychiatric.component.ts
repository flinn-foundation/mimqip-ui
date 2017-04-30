import {Component, OnInit} from '@angular/core';
import {EvaluationDto} from "../../../../../swagger-patient-service/model/EvaluationDto";
import EvaluationTypeEnum = EvaluationDto.EvaluationTypeEnum;
import {EvaluationBaseComponent} from "../evaluation-base/evaluation-base.component";
import {PSYCHIATRIC_TITLES} from "./strings";

@Component({
  selector: 'app-psychiatric',
  templateUrl: './psychiatric.component.html',
  styleUrls: ['./psychiatric.component.scss']
})
export class PsychiatricComponent extends EvaluationBaseComponent implements OnInit {

  ngOnInit() {
    this.finishInit(EvaluationTypeEnum.PSYCHIATRIC, PSYCHIATRIC_TITLES)
  }

}
