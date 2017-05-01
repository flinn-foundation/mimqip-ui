import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {MessageApi} from "../../swagger-recommendation-service/api/MessageApi";
import {Observable} from "rxjs/Observable";
import {PatientService} from "../patient/patient.service";
import {MessageDto} from "../../swagger-recommendation-service/model/MessageDto";

@Injectable()
export class MessageService extends MessageApi {

  constructor(private patientService: PatientService, http: Http) {
    super(http, "http://localhost:8081", null);
  }

  public getMessages(extraHttpRequestParams?: any): Observable<Array<MessageDto>> {
    return super.getMessages(this.patientService.getPatientId(), extraHttpRequestParams);
  }
}
