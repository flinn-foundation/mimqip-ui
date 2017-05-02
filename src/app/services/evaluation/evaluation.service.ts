import {Injectable} from '@angular/core';
import {EvaluationApi} from "../../swagger-patient-service/api/EvaluationApi";
import {Http} from "@angular/http";
import {PatientService} from "../patient/patient.service";
import {VitalSignsDto} from "../../swagger-patient-service/model/VitalSignsDto";
import {Observable} from "rxjs/Observable";
import {EvaluationDto} from "../../swagger-patient-service/model/EvaluationDto";
import EvaluationTypeEnum = EvaluationDto.EvaluationTypeEnum;

@Injectable()
export class EvaluationService extends EvaluationApi {

  constructor(http: Http, private patientService: PatientService) {
    super(http, "http://localhost:8080", null);
  }

  public createNewVitalSignEvaluation(vitalSignsEvaluation: VitalSignsDto, extraHttpRequestParams?: any): Observable<string> {
    return super.createNewVitalSignEvaluation(this.patientService.getPatientId(), vitalSignsEvaluation, extraHttpRequestParams);
  }

  public saveEvaluation(evaluation: EvaluationDto, extraHttpRequestParams?: any): Observable<number> {
    return super.createPatientEvaluation(this.patientService.getPatientId(), evaluation, extraHttpRequestParams);
  }

  public getEvaluations(evaluationType?: EvaluationTypeEnum): Observable<Array<EvaluationDto>> {
    return super.getEvaluationsByPatientId(this.patientService.getPatientId(), evaluationType.toString()).map(
      (evaluations: Array<EvaluationDto>) => {
        evaluations.forEach((evaluation) => {
          evaluation.createdTimestamp = new Date(evaluation.createdTimestamp);
        });

        return evaluations;
      });
  }


}
