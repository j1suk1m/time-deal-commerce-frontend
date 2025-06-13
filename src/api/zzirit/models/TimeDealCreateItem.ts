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
 * @interface TimeDealCreateItem
 */
export interface TimeDealCreateItem {
    /**
     * 
     * @type {number}
     * @memberof TimeDealCreateItem
     */
    itemId?: number;
    /**
     * 
     * @type {number}
     * @memberof TimeDealCreateItem
     */
    quantity?: number;
}

/**
 * Check if a given object implements the TimeDealCreateItem interface.
 */
export function instanceOfTimeDealCreateItem(value: object): value is TimeDealCreateItem {
    return true;
}

export function TimeDealCreateItemFromJSON(json: any): TimeDealCreateItem {
    return TimeDealCreateItemFromJSONTyped(json, false);
}

export function TimeDealCreateItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeDealCreateItem {
    if (json == null) {
        return json;
    }
    return {
        
        'itemId': json['itemId'] == null ? undefined : json['itemId'],
        'quantity': json['quantity'] == null ? undefined : json['quantity'],
    };
}

export function TimeDealCreateItemToJSON(json: any): TimeDealCreateItem {
    return TimeDealCreateItemToJSONTyped(json, false);
}

export function TimeDealCreateItemToJSONTyped(value?: TimeDealCreateItem | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'itemId': value['itemId'],
        'quantity': value['quantity'],
    };
}

