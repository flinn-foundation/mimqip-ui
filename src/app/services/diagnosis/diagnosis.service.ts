import {Injectable} from '@angular/core';
import {DiagnosisApi} from "../../swagger-patient-service/api/DiagnosisApi";
import {Http} from "@angular/http";
import {Subject}    from 'rxjs/Subject';
import {DiagnosisDto} from "../../swagger-patient-service/model/DiagnosisDto";

@Injectable()
export class DiagnosisService extends DiagnosisApi {

  private diagnosisSource = new Subject<DiagnosisDto>();
  diagnosis$ = this.diagnosisSource.asObservable();

  constructor(http: Http) {
    super(http, "http://localhost:8080", null);
  }

  submitDiagnosis(diagnosis: DiagnosisDto) {
    this.diagnosisSource.next(diagnosis);
  }
}
