/**
 * The CreateFulfillmentReturnResponse model module.
 * @module fulfillmentoutbound_v2020_07_01/model/CreateFulfillmentReturnResponse
 * @version 2020-07-01
 */
export class CreateFulfillmentReturnResponse {
    /**
     * Constructs a <code>CreateFulfillmentReturnResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateFulfillmentReturnResponse} obj Optional instance to populate.
     * @return {CreateFulfillmentReturnResponse} The populated <code>CreateFulfillmentReturnResponse</code> instance.
     */
    static constructFromObject(data: any, obj: CreateFulfillmentReturnResponse): CreateFulfillmentReturnResponse;
    /**
     * @member {CreateFulfillmentReturnResult} payload
     * @type {CreateFulfillmentReturnResult}
     */
    payload: CreateFulfillmentReturnResult;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Error[]} errors
     * @type {Error[]}
     */
    errors: Error[];
}
import { CreateFulfillmentReturnResult } from './CreateFulfillmentReturnResult.js';
import { Error } from './Error.js';
//# sourceMappingURL=CreateFulfillmentReturnResponse.d.ts.map