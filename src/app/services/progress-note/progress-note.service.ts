import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {ProgressNoteApi} from "../../swagger-patient-service/api/ProgressNoteApi";

@Injectable()
export class ProgressNoteService extends ProgressNoteApi {

  constructor(http: Http) {
    super(http, "http://localhost:8080", null);
  }

}
