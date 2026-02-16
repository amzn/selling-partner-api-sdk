/**
 * The CreateFulfillmentOrderResponse model module.
 * @module fulfillmentoutbound_v2020_07_01/model/CreateFulfillmentOrderResponse
 * @version 2020-07-01
 */
export class CreateFulfillmentOrderResponse {
    /**
     * Constructs a <code>CreateFulfillmentOrderResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateFulfillmentOrderResponse} obj Optional instance to populate.
     * @return {CreateFulfillmentOrderResponse} The populated <code>CreateFulfillmentOrderResponse</code> instance.
     */
    static constructFromObject(data: any, obj: CreateFulfillmentOrderResponse): CreateFulfillmentOrderResponse;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Error[]} errors
     * @type {Error[]}
     */
    errors: Error[];
}
import { Error } from './Error.js';
//# sourceMappingURL=CreateFulfillmentOrderResponse.d.ts.map