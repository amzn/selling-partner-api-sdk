/**
 * The GetFulfillmentOrderResponse model module.
 * @module fulfillmentoutbound_v2020_07_01/model/GetFulfillmentOrderResponse
 * @version 2020-07-01
 */
export class GetFulfillmentOrderResponse {
    /**
     * Constructs a <code>GetFulfillmentOrderResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetFulfillmentOrderResponse} obj Optional instance to populate.
     * @return {GetFulfillmentOrderResponse} The populated <code>GetFulfillmentOrderResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetFulfillmentOrderResponse): GetFulfillmentOrderResponse;
    /**
     * @member {GetFulfillmentOrderResult} payload
     * @type {GetFulfillmentOrderResult}
     */
    payload: GetFulfillmentOrderResult;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Error[]} errors
     * @type {Error[]}
     */
    errors: Error[];
}
import { GetFulfillmentOrderResult } from './GetFulfillmentOrderResult.js';
import { Error } from './Error.js';
//# sourceMappingURL=GetFulfillmentOrderResponse.d.ts.map