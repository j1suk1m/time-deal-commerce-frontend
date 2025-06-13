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
import type { ItemFetchResponse } from './ItemFetchResponse';
import {
    ItemFetchResponseFromJSON,
    ItemFetchResponseFromJSONTyped,
    ItemFetchResponseToJSON,
    ItemFetchResponseToJSONTyped,
} from './ItemFetchResponse';

/**
 * 
 * @export
 * @interface BaseResponseItemFetchResponse
 */
export interface BaseResponseItemFetchResponse {
    /**
     * 
     * @type {boolean}
     * @memberof BaseResponseItemFetchResponse
     */
    success?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BaseResponseItemFetchResponse
     */
    code?: number;
    /**
     * 
     * @type {number}
     * @memberof BaseResponseItemFetchResponse
     */
    httpStatus?: number;
    /**
     * 
     * @type {string}
     * @memberof BaseResponseItemFetchResponse
     */
    message?: string;
    /**
     * 
     * @type {ItemFetchResponse}
     * @memberof BaseResponseItemFetchResponse
     */
    result?: ItemFetchResponse;
}

/**
 * Check if a given object implements the BaseResponseItemFetchResponse interface.
 */
export function instanceOfBaseResponseItemFetchResponse(value: object): value is BaseResponseItemFetchResponse {
    return true;
}

export function BaseResponseItemFetchResponseFromJSON(json: any): BaseResponseItemFetchResponse {
    return BaseResponseItemFetchResponseFromJSONTyped(json, false);
}

export function BaseResponseItemFetchResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseResponseItemFetchResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'success': json['success'] == null ? undefined : json['success'],
        'code': json['code'] == null ? undefined : json['code'],
        'httpStatus': json['httpStatus'] == null ? undefined : json['httpStatus'],
        'message': json['message'] == null ? undefined : json['message'],
        'result': json['result'] == null ? undefined : ItemFetchResponseFromJSON(json['result']),
    };
}

export function BaseResponseItemFetchResponseToJSON(json: any): BaseResponseItemFetchResponse {
    return BaseResponseItemFetchResponseToJSONTyped(json, false);
}

export function BaseResponseItemFetchResponseToJSONTyped(value?: BaseResponseItemFetchResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'success': value['success'],
        'code': value['code'],
        'httpStatus': value['httpStatus'],
        'message': value['message'],
        'result': ItemFetchResponseToJSON(value['result']),
    };
}

