import {Injectable} from '@angular/core';
import {PatientApi} from "../../swagger-patient-service/api/PatientApi";
import {Http} from '@angular/http';
import {Observable} from "rxjs";
import {PatientDto} from "../../swagger-patient-service/model/PatientDto";
import {Response} from '@angular/http';

import 'rxjs/add/operator/map';
import {PatientSimpleDto} from "../../swagger-patient-service/model/PatientSimpleDto";
import {Subject} from "rxjs/Subject";
import {DiagnosisDto} from "../../swagger-patient-service/model/DiagnosisDto";

@Injectable()
export class PatientService extends PatientApi {

  private patientId: number;

  setPatientId(patientId) {
    this.patientId = patientId;
  }

  getPatientId() {
    return this.patientId;
  }


  constructor(http: Http) {
    super(http, "http://localhost:8080", null);
  }

  public getPatientsSimple(extraHttpRequestParams?: any): Observable<Array<PatientSimpleDto>> {
    return super.getPatientsSimpleWithHttpInfo(extraHttpRequestParams)
      .map((response: Response) => {
        if (response.status === 204) {
          return undefined;
        } else {
          return this.extractDataArray(response)
        }
      });
  }

  public getPatientSimpleById(id: number, extraHttpRequestParams?: any): Observable<PatientSimpleDto> {
    return this.getPatientSimpleByIdWithHttpInfo(id, extraHttpRequestParams)
      .map((response: Response) => {
        if (response.status === 204) {
          return undefined;
        } else {
          return this.extractData(response);
        }
      });
  }


  public getPatients(extraHttpRequestParams?: any): Observable<Array<PatientDto>> {
    return super.getPatientsWithHttpInfo(extraHttpRequestParams)
      .map((response: Response) => {
        if (response.status === 204) {
          return undefined;
        } else {
          return this.extractDataArray(response)
        }
      });
  }

  public getPatientById(id: number, extraHttpRequestParams?: any): Observable<PatientDto> {
    return this.getPatientByIdWithHttpInfo(id, extraHttpRequestParams)
      .map((response: Response) => {
        if (response.status === 204) {
          return undefined;
        } else {
          return this.extractData(response);
        }
      });
  }

  private extractDataArray(res: Response) {
    let patients: any[] = res.json() || [];
    patients.forEach((patient) => {
      patient.dateOfBirth = new Date(patient.dateOfBirth);
    });

    return patients;
  }

  private extractData(res: Response) {
    let patient: any = res.json();
    patient.dateOfBirth = new Date(patient.dateOfBirth);

    return patient;
  }

}
