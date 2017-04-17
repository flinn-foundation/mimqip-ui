import {Component, Input, OnInit} from '@angular/core';
import {EvaluationDto} from "../../../../swagger-patient-service/model/EvaluationDto";
import EvaluationTypeEnum = EvaluationDto.EvaluationTypeEnum;
import {EvaluationService} from "../../../../services/evaluation/evaluation.service";

@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrls: ['./evaluations.component.scss'],
  providers: [EvaluationService]
})
export class EvaluationsComponent implements OnInit {

  @Input()
  private patientId: number;

  private evlautionEnum = EvaluationTypeEnum;
  private activeEvaluation = EvaluationTypeEnum.GLOBAL;

  constructor(private evaluationService: EvaluationService) {
  }

  ngOnInit() {
  }

  saveEvaluation(evaluation: EvaluationDto) {
    console.log(evaluation);
    this.evaluationService.createPatientEvaluation(this.patientId, evaluation).subscribe(() => console.log("success"), () => console.log("failure"))
  }

}
