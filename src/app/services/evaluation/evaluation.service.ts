import { Injectable } from '@angular/core';
import {EvaluationApi} from "../../swagger-patient-service/api/EvaluationApi";
import {Http} from "@angular/http";

@Injectable()
export class EvaluationService extends EvaluationApi {

  constructor(http: Http) {
    super(http, "http://localhost:8080", null);
  }

}
