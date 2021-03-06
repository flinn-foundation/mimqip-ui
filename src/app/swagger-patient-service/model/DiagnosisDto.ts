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

export interface DiagnosisDto {
    id?: number;

    patientId?: number;

    diagnosisType?: DiagnosisDto.DiagnosisTypeEnum;

    secondaryDiagnosis?: string;

    stage?: number;

    createdTimestamp?: Date;

}
export namespace DiagnosisDto {
    export enum DiagnosisTypeEnum {
        SCHIZOPHRENICP = <any> 'SCHIZOPHRENIC_P',
        SCHIZOPHRENICD = <any> 'SCHIZOPHRENIC_D',
        SCHIZOPHRENICC = <any> 'SCHIZOPHRENIC_C',
        SCHIZOPHRENICU = <any> 'SCHIZOPHRENIC_U',
        SCHIZOPHRENICR = <any> 'SCHIZOPHRENIC_R',
        BIPOLARSM1 = <any> 'BIPOLAR_SM1',
        BIPOLARSM2 = <any> 'BIPOLAR_SM2',
        BIPOLARSM3 = <any> 'BIPOLAR_SM3',
        BIPOLARSM4 = <any> 'BIPOLAR_SM4',
        BIPOLARMRMH = <any> 'BIPOLAR_MRMH',
        BIPOLARMRM1 = <any> 'BIPOLAR_MRM1',
        BIPOLARMRM2 = <any> 'BIPOLAR_MRM2',
        BIPOLARMRM3 = <any> 'BIPOLAR_MRM3',
        BIPOLARMRM4 = <any> 'BIPOLAR_MRM4',
        BIPOLARMRD1 = <any> 'BIPOLAR_MRD1',
        BIPOLARMRD2 = <any> 'BIPOLAR_MRD2',
        BIPOLARMRD3 = <any> 'BIPOLAR_MRD3',
        BIPOLARMRD4 = <any> 'BIPOLAR_MRD4',
        MDDS1 = <any> 'MDD_S1',
        MDDS2 = <any> 'MDD_S2',
        MDDS3 = <any> 'MDD_S3',
        MDDS4 = <any> 'MDD_S4',
        MDDR1 = <any> 'MDD_R1',
        MDDR2 = <any> 'MDD_R2',
        MDDR3 = <any> 'MDD_R3',
        MDDR4 = <any> 'MDD_R4'
    }
}
