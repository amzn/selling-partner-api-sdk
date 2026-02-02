/**
 * The OrderItem model module.
 * @module orders_v2026_01_01/model/OrderItem
 * @version 2026-01-01
 */
export class OrderItem {
    /**
     * Constructs a <code>OrderItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrderItem} obj Optional instance to populate.
     * @return {OrderItem} The populated <code>OrderItem</code> instance.
     */
    static constructFromObject(data: any, obj: OrderItem): OrderItem;
    /**
     * Constructs a new <code>OrderItem</code>.
     * Information about a single product within an order.
     * @alias module:orders_v2026_01_01/model/OrderItem
     * @class
     * @param orderItemId {String} A unique identifier for this specific item within the order.
     * @param quantityOrdered {Number} The number of units of this item that the customer ordered.
     * @param product {ItemProduct}
     */
    constructor(orderItemId: string, quantityOrdered: number, product: ItemProduct);
    orderItemId: string;
    quantityOrdered: number;
    product: ItemProduct;
    /**
     * @member {Measurement} measurement
     * @type {Measurement}
     */
    measurement: Measurement;
    /**
     * Special programs that apply specifically to this item within the order.  **Possible values**: `TRANSPARENCY`, `SUBSCRIBE_AND_SAVE`
     * @member {[String]} programs
     * @type {[String]}
     */
    programs: [string];
    /**
     * @member {ItemProceeds} proceeds
     * @type {ItemProceeds}
     */
    proceeds: ItemProceeds;
    /**
     * @member {ItemExpense} expense
     * @type {ItemExpense}
     */
    expense: ItemExpense;
    /**
     * @member {ItemPromotion} promotion
     * @type {ItemPromotion}
     */
    promotion: ItemPromotion;
    /**
     * @member {ItemCancellation} cancellation
     * @type {ItemCancellation}
     */
    cancellation: ItemCancellation;
    /**
     * @member {ItemFulfillment} fulfillment
     * @type {ItemFulfillment}
     */
    fulfillment: ItemFulfillment;
}
import { ItemProduct } from './ItemProduct.js';
import { Measurement } from './Measurement.js';
import { ItemProceeds } from './ItemProceeds.js';
import { ItemExpense } from './ItemExpense.js';
import { ItemPromotion } from './ItemPromotion.js';
import { ItemCancellation } from './ItemCancellation.js';
import { ItemFulfillment } from './ItemFulfillment.js';
//# sourceMappingURL=OrderItem.d.ts.map