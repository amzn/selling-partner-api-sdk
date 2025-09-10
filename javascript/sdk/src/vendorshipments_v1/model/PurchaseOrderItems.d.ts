/**
 * The PurchaseOrderItems model module.
 * @module vendorshipments_v1/model/PurchaseOrderItems
 * @version v1
 */
export class PurchaseOrderItems {
    /**
     * Constructs a <code>PurchaseOrderItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PurchaseOrderItems} obj Optional instance to populate.
     * @return {PurchaseOrderItems} The populated <code>PurchaseOrderItems</code> instance.
     */
    static constructFromObject(data: any, obj: PurchaseOrderItems): PurchaseOrderItems;
    /**
     * Constructs a new <code>PurchaseOrderItems</code>.
     * Details of the item being shipped.
     * @alias module:vendorshipments_v1/model/PurchaseOrderItems
     * @class
     * @param itemSequenceNumber {String} Item sequence number for the item. The first item will be 001, the second 002, and so on. This number is used as a reference to refer to this item from the carton or pallet level.
     * @param shippedQuantity {ItemQuantity}
     */
    constructor(itemSequenceNumber: string, shippedQuantity: ItemQuantity);
    itemSequenceNumber: string;
    shippedQuantity: ItemQuantity;
    /**
     * Amazon Standard Identification Number (ASIN) for a SKU
     * @member {String} buyerProductIdentifier
     * @type {String}
     */
    buyerProductIdentifier: string;
    /**
     * The vendor selected product identification of the item. Should be the same as was sent in the purchase order.
     * @member {String} vendorProductIdentifier
     * @type {String}
     */
    vendorProductIdentifier: string;
    /**
     * @member {Money} maximumRetailPrice
     * @type {Money}
     */
    maximumRetailPrice: Money;
}
import { ItemQuantity } from './ItemQuantity.js';
import { Money } from './Money.js';
//# sourceMappingURL=PurchaseOrderItems.d.ts.map