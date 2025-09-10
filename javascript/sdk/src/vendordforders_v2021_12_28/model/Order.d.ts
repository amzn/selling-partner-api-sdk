/**
 * The Order model module.
 * @module vendordforders_v2021_12_28/model/Order
 * @version 2021-12-28
 */
export class Order {
    /**
     * Constructs a <code>Order</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Order} obj Optional instance to populate.
     * @return {Order} The populated <code>Order</code> instance.
     */
    static constructFromObject(data: any, obj: Order): Order;
    /**
     * Constructs a new <code>Order</code>.
     * Represents a purchase order.
     * @alias module:vendordforders_v2021_12_28/model/Order
     * @class
     * @param purchaseOrderNumber {String} The purchase order number for this order. Formatting Notes: alpha-numeric code.
     */
    constructor(purchaseOrderNumber: string);
    purchaseOrderNumber: string;
    /**
     * @member {OrderDetails} orderDetails
     * @type {OrderDetails}
     */
    orderDetails: OrderDetails;
}
import { OrderDetails } from './OrderDetails.js';
//# sourceMappingURL=Order.d.ts.map