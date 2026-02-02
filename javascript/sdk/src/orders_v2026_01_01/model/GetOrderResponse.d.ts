/**
 * The GetOrderResponse model module.
 * @module orders_v2026_01_01/model/GetOrderResponse
 * @version 2026-01-01
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
     * Constructs a new <code>GetOrderResponse</code>.
     * Order details.
     * @alias module:orders_v2026_01_01/model/GetOrderResponse
     * @class
     * @param order {Order}
     */
    constructor(order: Order);
    order: Order;
}
import { Order } from './Order.js';
//# sourceMappingURL=GetOrderResponse.d.ts.map