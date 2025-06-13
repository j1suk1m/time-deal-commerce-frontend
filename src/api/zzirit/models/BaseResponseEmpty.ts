/* tslint:disable */
/* eslint-disable */
/**
 * zzirit API
 * 찌릿 API 명세서
 *
 * The version of the OpenAPI document: v0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface BaseResponseEmpty
 */
export interface BaseResponseEmpty {
    /**
     * 
     * @type {boolean}
     * @memberof BaseResponseEmpty
     */
    success?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BaseResponseEmpty
     */
    code?: number;
    /**
     * 
     * @type {number}
     * @memberof BaseResponseEmpty
     */
    httpStatus?: number;
    /**
     * 
     * @type {string}
     * @memberof BaseResponseEmpty
     */
    message?: string;
    /**
     * 
     * @type {object}
     * @memberof BaseResponseEmpty
     */
    result?: object;
}

/**
 * Check if a given object implements the BaseResponseEmpty interface.
 */
export function instanceOfBaseResponseEmpty(value: object): value is BaseResponseEmpty {
    return true;
}

export function BaseResponseEmptyFromJSON(json: any): BaseResponseEmpty {
    return BaseResponseEmptyFromJSONTyped(json, false);
}

export function BaseResponseEmptyFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseResponseEmpty {
    if (json == null) {
        return json;
    }
    return {
        
        'success': json['success'] == null ? undefined : json['success'],
        'code': json['code'] == null ? undefined : json['code'],
        'httpStatus': json['httpStatus'] == null ? undefined : json['httpStatus'],
        'message': json['message'] == null ? undefined : json['message'],
        'result': json['result'] == null ? undefined : json['result'],
    };
}

export function BaseResponseEmptyToJSON(json: any): BaseResponseEmpty {
    return BaseResponseEmptyToJSONTyped(json, false);
}

export function BaseResponseEmptyToJSONTyped(value?: BaseResponseEmpty | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'success': value['success'],
        'code': value['code'],
        'httpStatus': value['httpStatus'],
        'message': value['message'],
        'result': value['result'],
    };
}

