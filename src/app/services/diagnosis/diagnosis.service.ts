import {Injectable} from '@angular/core';
import {DiagnosisApi} from "../../swagger-patient-service/api/DiagnosisApi";
import {Http} from "@angular/http";
import {Subject}    from 'rxjs/Subject';
import {DiagnosisDto} from "../../swagger-patient-service/model/DiagnosisDto";
import {Observable} from "rxjs/Observable";
import {PatientService} from "../patient/patient.service";

@Injectable()
export class DiagnosisService extends DiagnosisApi {

  private diagnosisSource = new Subject<DiagnosisDto>();
  diagnosis$ = this.diagnosisSource.asObservable();

  constructor(http: Http, private patientService: PatientService) {
    super(http, "http://localhost:8080", null);
  }

  submitDiagnosis(diagnosis: DiagnosisDto) {
    this.diagnosisSource.next(diagnosis);
  }

  public getDiagnoses( extraHttpRequestParams?: any): Observable<Array<DiagnosisDto>> {
    return super.getDiagnosesByPatientId(this.patientService.getPatientId(), extraHttpRequestParams);
  }

  public getMostRecentDiagnosis(extraHttpRequestParams?: any): Observable<DiagnosisDto> {
    return super.getMostRecentDiagnosisByPatientId(this.patientService.getPatientId(), extraHttpRequestParams);
  }

  public savePatientDiagnosis(diagnosis: DiagnosisDto, extraHttpRequestParams?: any): Observable<string> {
    return super.savePatientDiagnosis(this.patientService.getPatientId(), diagnosis, extraHttpRequestParams);
  }
}
