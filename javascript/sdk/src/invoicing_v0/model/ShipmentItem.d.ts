/**
 * The ShipmentItem model module.
 * @module invoicing_v0/model/ShipmentItem
 * @version v0
 */
export class ShipmentItem {
    /**
     * Constructs a <code>ShipmentItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShipmentItem} obj Optional instance to populate.
     * @return {ShipmentItem} The populated <code>ShipmentItem</code> instance.
     */
    static constructFromObject(data: any, obj: ShipmentItem): ShipmentItem;
    /**
     * The Amazon Standard Identification Number (ASIN) of the item.
     * @member {String} ASIN
     * @type {String}
     */
    ASIN: string;
    /**
     * The seller SKU of the item.
     * @member {String} sellerSKU
     * @type {String}
     */
    sellerSKU: string;
    /**
     * The Amazon-defined identifier for the order item.
     * @member {String} orderItemId
     * @type {String}
     */
    orderItemId: string;
    /**
     * The name of the item.
     * @member {String} title
     * @type {String}
     */
    title: string;
    /**
     * The number of items ordered.
     * @member {Number} quantityOrdered
     * @type {Number}
     */
    quantityOrdered: number;
    /**
     * @member {Money} itemPrice
     * @type {Money}
     */
    itemPrice: Money;
    /**
     * @member {Money} shippingPrice
     * @type {Money}
     */
    shippingPrice: Money;
    /**
     * @member {Money} giftWrapPrice
     * @type {Money}
     */
    giftWrapPrice: Money;
    /**
     * @member {Money} shippingDiscount
     * @type {Money}
     */
    shippingDiscount: Money;
    /**
     * @member {Money} promotionDiscount
     * @type {Money}
     */
    promotionDiscount: Money;
    /**
     * The list of serial numbers.
     * @member {[String]} serialNumbers
     * @type {[String]}
     */
    serialNumbers: [string];
}
import { Money } from './Money.js';
//# sourceMappingURL=ShipmentItem.d.ts.map