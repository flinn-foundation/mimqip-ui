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

export interface Rule {
    id?: string;

    priority?: number;

    valid?: boolean;

    ruleType?: Rule.RuleTypeEnum;

    name?: string;

}
export namespace Rule {
    export enum RuleTypeEnum {
        Val1 = <any> 'val1',
        Val2 = <any> 'val2',
        Val3 = <any> 'val3',
        Val4 = <any> 'val4'
    }
}
