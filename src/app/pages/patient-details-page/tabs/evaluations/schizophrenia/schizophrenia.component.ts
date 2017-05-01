import {Component, OnInit} from '@angular/core';
import {EvaluationDto} from "../../../../../swagger-patient-service/model/EvaluationDto";
import EvaluationTypeEnum = EvaluationDto.EvaluationTypeEnum;
import {EvaluationBaseComponent} from "../evaluation-base/evaluation-base.component";
import {PSRS_STRINGS, BNSAS_STRINGS} from "./strings";

@Component({
  selector: 'app-schizophrenia',
  templateUrl: './schizophrenia.component.html',
  styleUrls: ['./schizophrenia.component.scss']
})
export class SchizophreniaComponent extends EvaluationBaseComponent implements OnInit {

  psrsStrings = PSRS_STRINGS;
  bnsasStrings = BNSAS_STRINGS;

  evaluationTypeEnum = EvaluationTypeEnum;

  ngOnInit() {

  }

}
