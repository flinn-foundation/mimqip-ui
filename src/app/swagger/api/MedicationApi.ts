/**
 * MiMQIP API
 * Endpoints for the MiMQIP API
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import {Inject, Injectable, Optional}                      from '@angular/core';
import {Http, Headers, URLSearchParams}                    from '@angular/http';
import {RequestMethod, RequestOptions, RequestOptionsArgs} from '@angular/http';
import {Response, ResponseContentType}                     from '@angular/http';

import {Observable}                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../model/models';
import {BASE_PATH, COLLECTION_FORMATS}                     from '../variables';
import {Configuration}                                     from '../configuration';

/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class MedicationApi {
  protected basePath = 'https://api.mimqip/';
  public defaultHeaders: Headers = new Headers();
  public configuration: Configuration = new Configuration();

  constructor(protected http: Http, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
    }
  }

  /**
   * Get all medications for patient
   * Get all medications for patient
   * @param patientId ID of patient to fetch
   */
  public getPatientMedicationsByPatientId(patientId: number, extraHttpRequestParams?: any): Observable<models.PatientMedicationDto> {
    return this.getPatientMedicationsByPatientIdWithHttpInfo(patientId, extraHttpRequestParams)
      .map((response: Response) => {
        if (response.status === 204) {
          return undefined;
        } else {
          return response.json();
        }
      });
  }


  /**
   * Get all medications for patient
   * Get all medications for patient
   * @param patientId ID of patient to fetch
   */
  public getPatientMedicationsByPatientIdWithHttpInfo(patientId: number, extraHttpRequestParams?: any): Observable<Response> {
    const path = this.basePath + `/medications`;

    let queryParameters = new URLSearchParams();
    let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
    // verify required parameter 'patientId' is not null or undefined
    if (patientId === null || patientId === undefined) {
      throw new Error('Required parameter patientId was null or undefined when calling getPatientMedicationsByPatientId.');
    }
    if (patientId !== undefined) {
      queryParameters.set('patientId', <any>patientId);
    }

    // to determine the Content-Type header
    let consumes: string[] = [];

    // to determine the Accept header
    let produces: string[] = [
      'application/json'
    ];

    let requestOptions: RequestOptionsArgs = new RequestOptions({
      method: RequestMethod.Get,
      headers: headers,
      search: queryParameters
    });

    // https://github.com/swagger-api/swagger-codegen/issues/4037
    if (extraHttpRequestParams) {
      requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
    }

    return this.http.request(path, requestOptions);
  }

}
