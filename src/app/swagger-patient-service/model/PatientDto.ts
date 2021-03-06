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

export interface PatientDto {
    id?: number;

    firstName?: string;

    lastName?: string;

    sex?: PatientDto.SexEnum;

    dateOfBirth?: Date;

    valid?: boolean;

    zipCode?: string;

    race?: Array<PatientDto.RaceEnum>;

    ethnicity?: PatientDto.EthnicityEnum;

    marital?: PatientDto.MaritalEnum;

    living?: PatientDto.LivingEnum;

    employment?: PatientDto.EmploymentEnum;

    primaryCarePhysicianName?: string;

    primaryCarePhysicianEmail?: string;

    startDate?: Date;

}
export namespace PatientDto {
    export enum SexEnum {
        MALE = <any> 'MALE',
        FEMALE = <any> 'FEMALE'
    }
    export enum RaceEnum {
        WHITE = <any> 'WHITE',
        BLACK = <any> 'BLACK',
        AMERICANINDIAN = <any> 'AMERICAN_INDIAN',
        ASIAN = <any> 'ASIAN',
        PACIFICISLANDER = <any> 'PACIFIC_ISLANDER',
        NORESPONSE = <any> 'NO_RESPONSE'
    }
    export enum EthnicityEnum {
        HISPANIC = <any> 'HISPANIC',
        NONHISPANIC = <any> 'NON_HISPANIC',
        NORESPONSE = <any> 'NO_RESPONSE'
    }
    export enum MaritalEnum {
        MARRIED = <any> 'MARRIED',
        SINGLE = <any> 'SINGLE',
        SEPARATED = <any> 'SEPARATED',
        DIVORCED = <any> 'DIVORCED',
        WIDOWED = <any> 'WIDOWED'
    }
    export enum LivingEnum {
        ALONE = <any> 'ALONE',
        WITHROOMMATES = <any> 'WITH_ROOMMATES',
        WITHSPOUSE = <any> 'WITH_SPOUSE',
        WITHSPOUSEANDCHILDREN = <any> 'WITH_SPOUSE_AND_CHILDREN',
        WITHPARENTS = <any> 'WITH_PARENTS',
        GROUPHOME = <any> 'GROUP_HOME'
    }
    export enum EmploymentEnum {
        UNEMPLOYED = <any> 'UNEMPLOYED',
        FULLTIMESALARIED = <any> 'FULL_TIME_SALARIED',
        PARTTIMESALARIED = <any> 'PART_TIME_SALARIED',
        FULLTIMENONSALARIED = <any> 'FULL_TIME_NON_SALARIED',
        PARTTIMENONSALARIED = <any> 'PART_TIME_NON_SALARIED',
        SELFEMPLOYED = <any> 'SELF_EMPLOYED'
    }
}
