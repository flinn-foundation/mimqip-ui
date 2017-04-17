import { Injectable } from '@angular/core';
import {DiagnosisApi} from "../../swagger-patient-service/api/DiagnosisApi";
import {Http} from "@angular/http";

@Injectable()
export class DiagnosisService extends DiagnosisApi {

  constructor(http: Http) {
    super(http, "http://localhost:8080", null);
  }
}
