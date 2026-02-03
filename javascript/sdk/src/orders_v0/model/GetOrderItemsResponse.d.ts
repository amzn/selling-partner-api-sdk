/**
 * The GetOrderItemsResponse model module.
 * @module orders_v0/model/GetOrderItemsResponse
 * @version v0
 */
export class GetOrderItemsResponse {
    /**
     * Constructs a <code>GetOrderItemsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetOrderItemsResponse} obj Optional instance to populate.
     * @return {GetOrderItemsResponse} The populated <code>GetOrderItemsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetOrderItemsResponse): GetOrderItemsResponse;
    /**
     * @member {OrderItemsList} payload
     * @type {OrderItemsList}
     */
    payload: OrderItemsList;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Array[]} errors
     * @type {Array[]}
     */
    errors: any[][];
}
import { OrderItemsList } from './OrderItemsList.js';
//# sourceMappingURL=GetOrderItemsResponse.d.ts.map