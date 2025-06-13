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
import type { MyPageInfoResponse } from './MyPageInfoResponse';
import {
    MyPageInfoResponseFromJSON,
    MyPageInfoResponseFromJSONTyped,
    MyPageInfoResponseToJSON,
    MyPageInfoResponseToJSONTyped,
} from './MyPageInfoResponse';

/**
 * 
 * @export
 * @interface BaseResponseMyPageInfoResponse
 */
export interface BaseResponseMyPageInfoResponse {
    /**
     * 
     * @type {boolean}
     * @memberof BaseResponseMyPageInfoResponse
     */
    success?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BaseResponseMyPageInfoResponse
     */
    code?: number;
    /**
     * 
     * @type {number}
     * @memberof BaseResponseMyPageInfoResponse
     */
    httpStatus?: number;
    /**
     * 
     * @type {string}
     * @memberof BaseResponseMyPageInfoResponse
     */
    message?: string;
    /**
     * 
     * @type {MyPageInfoResponse}
     * @memberof BaseResponseMyPageInfoResponse
     */
    result?: MyPageInfoResponse;
}

/**
 * Check if a given object implements the BaseResponseMyPageInfoResponse interface.
 */
export function instanceOfBaseResponseMyPageInfoResponse(value: object): value is BaseResponseMyPageInfoResponse {
    return true;
}

export function BaseResponseMyPageInfoResponseFromJSON(json: any): BaseResponseMyPageInfoResponse {
    return BaseResponseMyPageInfoResponseFromJSONTyped(json, false);
}

export function BaseResponseMyPageInfoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseResponseMyPageInfoResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'success': json['success'] == null ? undefined : json['success'],
        'code': json['code'] == null ? undefined : json['code'],
        'httpStatus': json['httpStatus'] == null ? undefined : json['httpStatus'],
        'message': json['message'] == null ? undefined : json['message'],
        'result': json['result'] == null ? undefined : MyPageInfoResponseFromJSON(json['result']),
    };
}

export function BaseResponseMyPageInfoResponseToJSON(json: any): BaseResponseMyPageInfoResponse {
    return BaseResponseMyPageInfoResponseToJSONTyped(json, false);
}

export function BaseResponseMyPageInfoResponseToJSONTyped(value?: BaseResponseMyPageInfoResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'success': value['success'],
        'code': value['code'],
        'httpStatus': value['httpStatus'],
        'message': value['message'],
        'result': MyPageInfoResponseToJSON(value['result']),
    };
}

