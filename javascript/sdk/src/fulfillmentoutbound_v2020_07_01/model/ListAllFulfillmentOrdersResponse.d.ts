/**
 * The ListAllFulfillmentOrdersResponse model module.
 * @module fulfillmentoutbound_v2020_07_01/model/ListAllFulfillmentOrdersResponse
 * @version 2020-07-01
 */
export class ListAllFulfillmentOrdersResponse {
    /**
     * Constructs a <code>ListAllFulfillmentOrdersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListAllFulfillmentOrdersResponse} obj Optional instance to populate.
     * @return {ListAllFulfillmentOrdersResponse} The populated <code>ListAllFulfillmentOrdersResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ListAllFulfillmentOrdersResponse): ListAllFulfillmentOrdersResponse;
    /**
     * @member {ListAllFulfillmentOrdersResult} payload
     * @type {ListAllFulfillmentOrdersResult}
     */
    payload: ListAllFulfillmentOrdersResult;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { ListAllFulfillmentOrdersResult } from './ListAllFulfillmentOrdersResult.js';
import { Error } from './Error.js';
//# sourceMappingURL=ListAllFulfillmentOrdersResponse.d.ts.map