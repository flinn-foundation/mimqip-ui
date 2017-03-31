import {Injectable} from '@angular/core';
import {PatientApi} from "../swagger/api/PatientApi";
import {Http} from '@angular/http';
import {Observable} from "rxjs";
import {PatientDto} from "../swagger/model/PatientDto";
import {Response} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class PatientService extends PatientApi {

  constructor(http: Http) {
    super(http, "http://localhost:8080", null);
  }


  public patientsGet(extraHttpRequestParams?: any): Observable<Array<PatientDto>> {
    return super.patientsGetWithHttpInfo(extraHttpRequestParams)
      .map((response: Response) => {
        if (response.status === 204) {
          return undefined;
        } else {
          return this.extractDataArray(response)
        }
      });
  }

  public patientsIdGet(id: number, extraHttpRequestParams?: any): Observable<PatientDto> {
    return this.patientsIdGetWithHttpInfo(id, extraHttpRequestParams)
      .map((response: Response) => {
        if (response.status === 204) {
          return undefined;
        } else {
          return this.extractData(response);
        }
      });
  }

  private extractDataArray(res: Response) {
    let patients: PatientDto[] = res.json() || [];
    patients.forEach((patient) => {
      patient.dateOfBirth = new Date(patient.dateOfBirth);
    });

    return patients;
  }

  private extractData(res: Response) {
    let patient: PatientDto = res.json();
    patient.dateOfBirth = new Date(patient.dateOfBirth);

    return patient;
  }

}
