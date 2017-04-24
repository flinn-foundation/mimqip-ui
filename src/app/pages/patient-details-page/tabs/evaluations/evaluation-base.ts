import {EvaluationDto} from "../../../../swagger-patient-service/model/EvaluationDto";
import {EvaluationService} from "../../../../services/evaluation/evaluation.service";

export class EvaluationBase {

  protected

  constructor(private evaluationService: EvaluationService) {
  }

  saveEvaluation(patientId, evaluation: EvaluationDto) {
    console.log(evaluation);
    this.evaluationService.createPatientEvaluation(patientId, evaluation).subscribe(
      (message: any) => {
        console.log(message)
      },
      (error) => console.log(error)
  )
  }

}
