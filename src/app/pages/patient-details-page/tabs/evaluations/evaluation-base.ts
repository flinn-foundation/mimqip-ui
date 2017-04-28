import {EvaluationDto} from "../../../../swagger-patient-service/model/EvaluationDto";
import {EvaluationService} from "../../../../services/evaluation/evaluation.service";
import {ScaleDetail} from "./scale-detail";
import {EvaluationResponseDto} from "../../../../swagger-patient-service/model/EvaluationResponseDto";
import {Question} from "./question";

export class EvaluationBase {

  displayDialog: boolean = false;
  dialogKey: string;
  dialogScaleDetails: ScaleDetail[];
  dialogLongDescription: string;

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

  generateScaleDetails(scaleTitles: string[], scaleLevels: string[]): ScaleDetail[] {
    let scaleDetails: ScaleDetail[] = [];
    for (let i = 0; i < scaleTitles.length; i++) {
      scaleDetails.push(new ScaleDetail(scaleTitles[i], scaleLevels[i]));
    }

    return scaleDetails
  }

  calculateTotal(evaluationResponses: EvaluationResponseDto[]): number {
    let total: number = 0;
    for(let evaluationResponse of evaluationResponses) {
      total += +evaluationResponse.answer;
    }

    console.log(total);
    return total;
  }

  openScaleDetails(question: Question) {
    console.log(question);
    this.dialogScaleDetails = question.scaleDetails;
    this.dialogLongDescription = question.longDescription;
    this.dialogKey = question.title;
    this.displayDialog = true;
  }

}
