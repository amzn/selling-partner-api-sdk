/**
 * The UpdateFulfillmentOrderResponse model module.
 * @module fulfillmentoutbound_v2020_07_01/model/UpdateFulfillmentOrderResponse
 * @version 2020-07-01
 */
export class UpdateFulfillmentOrderResponse {
    /**
     * Constructs a <code>UpdateFulfillmentOrderResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {UpdateFulfillmentOrderResponse} obj Optional instance to populate.
     * @return {UpdateFulfillmentOrderResponse} The populated <code>UpdateFulfillmentOrderResponse</code> instance.
     */
    static constructFromObject(data: any, obj: UpdateFulfillmentOrderResponse): UpdateFulfillmentOrderResponse;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { Error } from './Error.js';
//# sourceMappingURL=UpdateFulfillmentOrderResponse.d.ts.map