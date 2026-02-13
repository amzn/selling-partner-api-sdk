/**
 * The GetOrdersResponse model module.
 * @module orders_v0/model/GetOrdersResponse
 * @version v0
 */
export class GetOrdersResponse {
    /**
     * Constructs a <code>GetOrdersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetOrdersResponse} obj Optional instance to populate.
     * @return {GetOrdersResponse} The populated <code>GetOrdersResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetOrdersResponse): GetOrdersResponse;
    /**
     * @member {OrdersList} payload
     * @type {OrdersList}
     */
    payload: OrdersList;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Error[]} errors
     * @type {Error[]}
     */
    errors: Error[];
}
import { OrdersList } from './OrdersList.js';
import { Error } from './Error.js';
//# sourceMappingURL=GetOrdersResponse.d.ts.map