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

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../model/models';
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';

/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class DiagnosisApi {
    protected basePath = 'https://api.mimqip/';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    /**
     * Get diagnoses by patient ID
     * Get diagnoses by patient ID
     * @param patientId ID of patient diagnoses to fetch
     */
    public getDiagnosesByPatientId(patientId: number, extraHttpRequestParams?: any): Observable<Array<models.DiagnosisDto>> {
        return this.getDiagnosesByPatientIdWithHttpInfo(patientId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get most recent diagnoses by patient ID
     * Get most recent diagnoses by patient ID
     * @param patientId ID of patient diagnoses to fetch
     */
    public getMostRecentDiagnosisByPatientId(patientId: number, extraHttpRequestParams?: any): Observable<models.DiagnosisDto> {
        return this.getMostRecentDiagnosisByPatientIdWithHttpInfo(patientId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Submit new diagnosis for patient
     * Submit new diagnosis for patient
     * @param patientId ID of patient to fetch
     * @param diagnosis Diagnosis to add
     */
    public savePatientDiagnosis(patientId: number, diagnosis: models.DiagnosisDto, extraHttpRequestParams?: any): Observable<string> {
        return this.savePatientDiagnosisWithHttpInfo(patientId, diagnosis, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * Get diagnoses by patient ID
     * Get diagnoses by patient ID
     * @param patientId ID of patient diagnoses to fetch
     */
    public getDiagnosesByPatientIdWithHttpInfo(patientId: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/patients/${patientId}/diagnoses`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'patientId' is not null or undefined
        if (patientId === null || patientId === undefined) {
            throw new Error('Required parameter patientId was null or undefined when calling getDiagnosesByPatientId.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

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

    /**
     * Get most recent diagnoses by patient ID
     * Get most recent diagnoses by patient ID
     * @param patientId ID of patient diagnoses to fetch
     */
    public getMostRecentDiagnosisByPatientIdWithHttpInfo(patientId: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/patients/${patientId}/diagnoses/latest`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'patientId' is not null or undefined
        if (patientId === null || patientId === undefined) {
            throw new Error('Required parameter patientId was null or undefined when calling getMostRecentDiagnosisByPatientId.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

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

    /**
     * Submit new diagnosis for patient
     * Submit new diagnosis for patient
     * @param patientId ID of patient to fetch
     * @param diagnosis Diagnosis to add
     */
    public savePatientDiagnosisWithHttpInfo(patientId: number, diagnosis: models.DiagnosisDto, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/patients/${patientId}/diagnoses`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'patientId' is not null or undefined
        if (patientId === null || patientId === undefined) {
            throw new Error('Required parameter patientId was null or undefined when calling savePatientDiagnosis.');
        }
        // verify required parameter 'diagnosis' is not null or undefined
        if (diagnosis === null || diagnosis === undefined) {
            throw new Error('Required parameter diagnosis was null or undefined when calling savePatientDiagnosis.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: diagnosis == null ? '' : JSON.stringify(diagnosis), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
