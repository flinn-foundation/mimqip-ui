import {EvaluationDto} from "../../../../swagger-patient-service/model/EvaluationDto";
import {EvaluationService} from "../../../../services/evaluation/evaluation.service";

export class EvaluationBase {


  constructor(private evaluationService: EvaluationService) {
  }

  saveEvaluation(evaluation: EvaluationDto) {
    console.log(evaluation);
    this.evaluationService.createPatientEvaluation(evaluation).subscribe(
      (message: any) => {
        console.log(message)
      },
      (error) => console.log(error)
    );
  }

}
