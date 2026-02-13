/**
 * The OrderItemsList model module.
 * @module orders_v0/model/OrderItemsList
 * @version v0
 */
export class OrderItemsList {
    /**
     * Constructs a <code>OrderItemsList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrderItemsList} obj Optional instance to populate.
     * @return {OrderItemsList} The populated <code>OrderItemsList</code> instance.
     */
    static constructFromObject(data: any, obj: OrderItemsList): OrderItemsList;
    /**
     * Constructs a new <code>OrderItemsList</code>.
     * The order items list along with the order ID.
     * @alias module:orders_v0/model/OrderItemsList
     * @class
     * @param orderItems {[OrderItem]} A list of order items.
     * @param amazonOrderId {String} An Amazon-defined order identifier, in 3-7-7 format.
     */
    constructor(orderItems: [OrderItem], amazonOrderId: string);
    orderItems: OrderItem[];
    amazonOrderId: string;
    /**
     * When present and not empty, pass this string token in the next request to return the next response page.
     * @member {String} nextToken
     * @type {String}
     */
    nextToken: string;
}
import { OrderItem } from './OrderItem.js';
//# sourceMappingURL=OrderItemsList.d.ts.map