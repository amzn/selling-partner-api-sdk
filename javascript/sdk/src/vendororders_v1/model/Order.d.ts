/**
 * The Order model module.
 * @module vendororders_v1/model/Order
 * @version v1
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
     * Represents an order placed by Amazon, including the purchase order number, current state, and order details.
     * @alias module:vendororders_v1/model/Order
     * @class
     * @param purchaseOrderNumber {String} The purchase order number for this order. Formatting Notes: 8-character alpha-numeric code.
     * @param purchaseOrderState {String} This field will contain the current state of the purchase order.
     */
    constructor(purchaseOrderNumber: string, purchaseOrderState: string);
    purchaseOrderNumber: string;
    purchaseOrderState: string;
    /**
     * @member {OrderDetails} orderDetails
     * @type {OrderDetails}
     */
    orderDetails: OrderDetails;
}
export namespace Order {
    namespace PurchaseOrderStateEnum {
        let New: string;
        let Acknowledged: string;
        let Closed: string;
    }
    /**
     * *
     */
    type PurchaseOrderStateEnum = string;
}
import { OrderDetails } from './OrderDetails.js';
//# sourceMappingURL=Order.d.ts.map