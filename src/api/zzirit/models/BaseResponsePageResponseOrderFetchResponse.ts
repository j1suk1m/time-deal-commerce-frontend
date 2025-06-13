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
import type { PageResponseOrderFetchResponse } from './PageResponseOrderFetchResponse';
import {
    PageResponseOrderFetchResponseFromJSON,
    PageResponseOrderFetchResponseFromJSONTyped,
    PageResponseOrderFetchResponseToJSON,
    PageResponseOrderFetchResponseToJSONTyped,
} from './PageResponseOrderFetchResponse';

/**
 * 
 * @export
 * @interface BaseResponsePageResponseOrderFetchResponse
 */
export interface BaseResponsePageResponseOrderFetchResponse {
    /**
     * 
     * @type {boolean}
     * @memberof BaseResponsePageResponseOrderFetchResponse
     */
    success?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BaseResponsePageResponseOrderFetchResponse
     */
    code?: number;
    /**
     * 
     * @type {number}
     * @memberof BaseResponsePageResponseOrderFetchResponse
     */
    httpStatus?: number;
    /**
     * 
     * @type {string}
     * @memberof BaseResponsePageResponseOrderFetchResponse
     */
    message?: string;
    /**
     * 
     * @type {PageResponseOrderFetchResponse}
     * @memberof BaseResponsePageResponseOrderFetchResponse
     */
    result?: PageResponseOrderFetchResponse;
}

/**
 * Check if a given object implements the BaseResponsePageResponseOrderFetchResponse interface.
 */
export function instanceOfBaseResponsePageResponseOrderFetchResponse(value: object): value is BaseResponsePageResponseOrderFetchResponse {
    return true;
}

export function BaseResponsePageResponseOrderFetchResponseFromJSON(json: any): BaseResponsePageResponseOrderFetchResponse {
    return BaseResponsePageResponseOrderFetchResponseFromJSONTyped(json, false);
}

export function BaseResponsePageResponseOrderFetchResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseResponsePageResponseOrderFetchResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'success': json['success'] == null ? undefined : json['success'],
        'code': json['code'] == null ? undefined : json['code'],
        'httpStatus': json['httpStatus'] == null ? undefined : json['httpStatus'],
        'message': json['message'] == null ? undefined : json['message'],
        'result': json['result'] == null ? undefined : PageResponseOrderFetchResponseFromJSON(json['result']),
    };
}

export function BaseResponsePageResponseOrderFetchResponseToJSON(json: any): BaseResponsePageResponseOrderFetchResponse {
    return BaseResponsePageResponseOrderFetchResponseToJSONTyped(json, false);
}

export function BaseResponsePageResponseOrderFetchResponseToJSONTyped(value?: BaseResponsePageResponseOrderFetchResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'success': value['success'],
        'code': value['code'],
        'httpStatus': value['httpStatus'],
        'message': value['message'],
        'result': PageResponseOrderFetchResponseToJSON(value['result']),
    };
}

