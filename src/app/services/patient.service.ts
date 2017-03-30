import {Injectable} from '@angular/core';
import {PatientApi} from "../swagger/api/PatientApi";
import {Http} from '@angular/http';

@Injectable()
export class PatientService extends PatientApi {

  constructor(http: Http) {
    super(http, "http://localhost:8080", null);
  }

}
