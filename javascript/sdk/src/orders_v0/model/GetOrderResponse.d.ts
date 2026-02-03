/**
 * The GetOrderResponse model module.
 * @module orders_v0/model/GetOrderResponse
 * @version v0
 */
export class GetOrderResponse {
    /**
     * Constructs a <code>GetOrderResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetOrderResponse} obj Optional instance to populate.
     * @return {GetOrderResponse} The populated <code>GetOrderResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetOrderResponse): GetOrderResponse;
    /**
     * @member {Order} payload
     * @type {Order}
     */
    payload: Order;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Array[]} errors
     * @type {Array[]}
     */
    errors: any[][];
}
import { Order } from './Order.js';
//# sourceMappingURL=GetOrderResponse.d.ts.map