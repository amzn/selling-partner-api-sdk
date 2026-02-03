/**
 * The ListReturnReasonCodesResponse model module.
 * @module fulfillmentoutbound_v2020_07_01/model/ListReturnReasonCodesResponse
 * @version 2020-07-01
 */
export class ListReturnReasonCodesResponse {
    /**
     * Constructs a <code>ListReturnReasonCodesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListReturnReasonCodesResponse} obj Optional instance to populate.
     * @return {ListReturnReasonCodesResponse} The populated <code>ListReturnReasonCodesResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ListReturnReasonCodesResponse): ListReturnReasonCodesResponse;
    /**
     * @member {ListReturnReasonCodesResult} payload
     * @type {ListReturnReasonCodesResult}
     */
    payload: ListReturnReasonCodesResult;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Array[]} errors
     * @type {Array[]}
     */
    errors: any[][];
}
import { ListReturnReasonCodesResult } from './ListReturnReasonCodesResult.js';
//# sourceMappingURL=ListReturnReasonCodesResponse.d.ts.map