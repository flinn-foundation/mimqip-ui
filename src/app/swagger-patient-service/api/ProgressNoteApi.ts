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
export class ProgressNoteApi {
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
     * Get progress notes for patient
     * Get progress notes for patient
     * @param patientId Id of patient progress notes to fetch
     */
    public getProgressNotes(patientId: number, extraHttpRequestParams?: any): Observable<Array<models.ProgressNoteDto>> {
        return this.getProgressNotesWithHttpInfo(patientId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Save new progress note for patient
     * Save new progress note for patient
     * @param patientId Id of patient progress note to create
     * @param progressNote Progress note to submit
     */
    public saveProgressNote(patientId: number, progressNote: models.ProgressNoteDto, extraHttpRequestParams?: any): Observable<string> {
        return this.saveProgressNoteWithHttpInfo(patientId, progressNote, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * Get progress notes for patient
     * Get progress notes for patient
     * @param patientId Id of patient progress notes to fetch
     */
    public getProgressNotesWithHttpInfo(patientId: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/patients/${patientId}/progressNotes`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'patientId' is not null or undefined
        if (patientId === null || patientId === undefined) {
            throw new Error('Required parameter patientId was null or undefined when calling getProgressNotes.');
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
     * Save new progress note for patient
     * Save new progress note for patient
     * @param patientId Id of patient progress note to create
     * @param progressNote Progress note to submit
     */
    public saveProgressNoteWithHttpInfo(patientId: number, progressNote: models.ProgressNoteDto, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/patients/${patientId}/progressNotes`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'patientId' is not null or undefined
        if (patientId === null || patientId === undefined) {
            throw new Error('Required parameter patientId was null or undefined when calling saveProgressNote.');
        }
        // verify required parameter 'progressNote' is not null or undefined
        if (progressNote === null || progressNote === undefined) {
            throw new Error('Required parameter progressNote was null or undefined when calling saveProgressNote.');
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
            body: progressNote == null ? '' : JSON.stringify(progressNote), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
