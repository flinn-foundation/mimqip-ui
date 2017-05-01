import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {ProgressNoteApi} from "../../swagger-patient-service/api/ProgressNoteApi";
import {PatientService} from "../patient/patient.service";
import {Observable} from "rxjs/Observable";
import {ProgressNoteDto} from "../../swagger-patient-service/model/ProgressNoteDto";

@Injectable()
export class ProgressNoteService extends ProgressNoteApi {

  constructor(http: Http, private patientService: PatientService) {
    super(http, "http://localhost:8080", null);
  }

  public saveProgressNote(progressNote: ProgressNoteDto, extraHttpRequestParams?: any): Observable<{}> {
    return super.saveProgressNote(this.patientService.getPatientId(), progressNote, extraHttpRequestParams);
  }

  public getProgressNotes(extraHttpRequestParams?: any): Observable<Array<ProgressNoteDto>> {
    return super.getProgressNotes(this.patientService.getPatientId(), extraHttpRequestParams);
  }
}
