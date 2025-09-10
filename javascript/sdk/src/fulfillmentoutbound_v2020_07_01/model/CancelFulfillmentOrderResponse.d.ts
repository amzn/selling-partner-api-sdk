/**
 * The CancelFulfillmentOrderResponse model module.
 * @module fulfillmentoutbound_v2020_07_01/model/CancelFulfillmentOrderResponse
 * @version 2020-07-01
 */
export class CancelFulfillmentOrderResponse {
    /**
     * Constructs a <code>CancelFulfillmentOrderResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CancelFulfillmentOrderResponse} obj Optional instance to populate.
     * @return {CancelFulfillmentOrderResponse} The populated <code>CancelFulfillmentOrderResponse</code> instance.
     */
    static constructFromObject(data: any, obj: CancelFulfillmentOrderResponse): CancelFulfillmentOrderResponse;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { Error } from './Error.js';
//# sourceMappingURL=CancelFulfillmentOrderResponse.d.ts.map