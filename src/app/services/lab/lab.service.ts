import { Injectable } from '@angular/core';
import {LabApi} from "../../swagger-patient-service/api/LabApi";
import {Http} from "@angular/http";
import {CbcLabDto} from "../../swagger-patient-service/model/CbcLabDto";
import {Observable} from "rxjs/Observable";
import {PatientService} from "../patient/patient.service";

@Injectable()
export class LabService extends LabApi {

  constructor(http: Http, private patientService: PatientService) {
    super(http, "http://localhost:8080", null);
  }

  public saveCbcLab(cbcLabDto: CbcLabDto): Observable<number> {
    return super.saveCbcLab(this.patientService.getPatientId(), cbcLabDto);
  }

}
