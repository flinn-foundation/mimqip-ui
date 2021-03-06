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

import * as models from './models';

export interface ProgressNoteDto {
    id?: number;

    patientId?: number;

    progressNoteTagTypes?: Array<ProgressNoteDto.ProgressNoteTagTypesEnum>;

    noteText?: string;

    createdTimestamp?: Date;

}
export namespace ProgressNoteDto {
    export enum ProgressNoteTagTypesEnum {
        GENERAL = <any> 'GENERAL',
        MEDICATIONS = <any> 'MEDICATIONS',
        DIAGNOSIS = <any> 'DIAGNOSIS',
        LABS = <any> 'LABS',
        EVALUATIONS = <any> 'EVALUATIONS'
    }
}
