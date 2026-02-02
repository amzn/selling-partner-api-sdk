/**
 * The Order model module.
 * @module orders_v2026_01_01/model/Order
 * @version 2026-01-01
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
     * Comprehensive information about a customer order.
     * @alias module:orders_v2026_01_01/model/Order
     * @class
     * @param orderId {String} An Amazon-defined order identifier.
     * @param createdTime {Date} The time when the customer placed the order. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
     * @param lastUpdatedTime {Date} The most recent time when any aspect of this order was modified by Amazon or the seller. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
     * @param salesChannel {SalesChannel}
     * @param orderItems {[OrderItem]} The list of all order items included in this order.
     */
    constructor(orderId: string, createdTime: Date, lastUpdatedTime: Date, salesChannel: SalesChannel, orderItems: [OrderItem]);
    orderId: string;
    createdTime: Date;
    lastUpdatedTime: Date;
    salesChannel: SalesChannel;
    orderItems: [OrderItem];
    /**
     * Alternative identifiers that can be used to reference this order, such as seller-defined order numbers.
     * @member {[Alias]} orderAliases
     * @type {[Alias]}
     */
    orderAliases: [Alias];
    /**
     * Special programs associated with this order that may affect fulfillment or customer experience.   **Possible values**: `AMAZON_BAZAAR`, `AMAZON_BUSINESS`,  `AMAZON_EASY_SHIP`, `AMAZON_HAUL`, `DELIVERY_BY_AMAZON`, `FBM_SHIP_PLUS`, `IN_STORE_PICK_UP`, `PREMIUM`, `PREORDER`, `PRIME`
     * @member {[String]} programs
     * @type {[String]}
     */
    programs: [string];
    /**
     * Other orders that have a direct relationship to this order, such as replacement or exchange orders.
     * @member {[AssociatedOrder]} associatedOrders
     * @type {[AssociatedOrder]}
     */
    associatedOrders: [AssociatedOrder];
    /**
     * @member {Buyer} buyer
     * @type {Buyer}
     */
    buyer: Buyer;
    /**
     * @member {Recipient} recipient
     * @type {Recipient}
     */
    recipient: Recipient;
    /**
     * @member {OrderProceeds} proceeds
     * @type {OrderProceeds}
     */
    proceeds: OrderProceeds;
    /**
     * @member {OrderFulfillment} fulfillment
     * @type {OrderFulfillment}
     */
    fulfillment: OrderFulfillment;
    /**
     * Shipping packages created for this order, including tracking information. **Note:** Only available for merchant-fulfilled (FBM) orders.
     * @member {[OrderPackage]} packages
     * @type {[OrderPackage]}
     */
    packages: [OrderPackage];
}
import { SalesChannel } from './SalesChannel.js';
import { OrderItem } from './OrderItem.js';
import { Alias } from './Alias.js';
import { AssociatedOrder } from './AssociatedOrder.js';
import { Buyer } from './Buyer.js';
import { Recipient } from './Recipient.js';
import { OrderProceeds } from './OrderProceeds.js';
import { OrderFulfillment } from './OrderFulfillment.js';
import { OrderPackage } from './OrderPackage.js';
//# sourceMappingURL=Order.d.ts.map