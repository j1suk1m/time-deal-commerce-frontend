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
import type { CartItemResponse } from './CartItemResponse';
import {
    CartItemResponseFromJSON,
    CartItemResponseFromJSONTyped,
    CartItemResponseToJSON,
    CartItemResponseToJSONTyped,
} from './CartItemResponse';

/**
 * 
 * @export
 * @interface BaseResponseCartItemResponse
 */
export interface BaseResponseCartItemResponse {
    /**
     * 
     * @type {boolean}
     * @memberof BaseResponseCartItemResponse
     */
    success?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BaseResponseCartItemResponse
     */
    code?: number;
    /**
     * 
     * @type {number}
     * @memberof BaseResponseCartItemResponse
     */
    httpStatus?: number;
    /**
     * 
     * @type {string}
     * @memberof BaseResponseCartItemResponse
     */
    message?: string;
    /**
     * 
     * @type {CartItemResponse}
     * @memberof BaseResponseCartItemResponse
     */
    result?: CartItemResponse;
}

/**
 * Check if a given object implements the BaseResponseCartItemResponse interface.
 */
export function instanceOfBaseResponseCartItemResponse(value: object): value is BaseResponseCartItemResponse {
    return true;
}

export function BaseResponseCartItemResponseFromJSON(json: any): BaseResponseCartItemResponse {
    return BaseResponseCartItemResponseFromJSONTyped(json, false);
}

export function BaseResponseCartItemResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseResponseCartItemResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'success': json['success'] == null ? undefined : json['success'],
        'code': json['code'] == null ? undefined : json['code'],
        'httpStatus': json['httpStatus'] == null ? undefined : json['httpStatus'],
        'message': json['message'] == null ? undefined : json['message'],
        'result': json['result'] == null ? undefined : CartItemResponseFromJSON(json['result']),
    };
}

export function BaseResponseCartItemResponseToJSON(json: any): BaseResponseCartItemResponse {
    return BaseResponseCartItemResponseToJSONTyped(json, false);
}

export function BaseResponseCartItemResponseToJSONTyped(value?: BaseResponseCartItemResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'success': value['success'],
        'code': value['code'],
        'httpStatus': value['httpStatus'],
        'message': value['message'],
        'result': CartItemResponseToJSON(value['result']),
    };
}

