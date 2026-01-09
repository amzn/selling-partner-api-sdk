/**
 * The AdjustmentItem model module.
 * @module finances_v0/model/AdjustmentItem
 * @version v0
 */
export class AdjustmentItem {
    /**
     * Constructs a <code>AdjustmentItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AdjustmentItem} obj Optional instance to populate.
     * @return {AdjustmentItem} The populated <code>AdjustmentItem</code> instance.
     */
    static constructFromObject(data: any, obj: AdjustmentItem): AdjustmentItem;
    /**
     * Represents the number of units in the seller's inventory when the `AdjustmentType` is `FBAInventoryReimbursement`.
     * @member {String} quantity
     * @type {String}
     */
    quantity: string;
    /**
     * @member {Currency} perUnitAmount
     * @type {Currency}
     */
    perUnitAmount: Currency;
    /**
     * @member {Currency} totalAmount
     * @type {Currency}
     */
    totalAmount: Currency;
    /**
     * The seller SKU of the item. The seller SKU is qualified by the seller's seller ID, which is included with every call to the Selling Partner API.
     * @member {String} sellerSKU
     * @type {String}
     */
    sellerSKU: string;
    /**
     * A unique identifier assigned to products stored in and fulfilled from a fulfillment center.
     * @member {String} fnSKU
     * @type {String}
     */
    fnSKU: string;
    /**
     * A short description of the item.
     * @member {String} productDescription
     * @type {String}
     */
    productDescription: string;
    /**
     * The Amazon Standard Identification Number (ASIN) of the item.
     * @member {String} ASIN
     * @type {String}
     */
    ASIN: string;
    /**
     * The transaction number that is related to the adjustment.
     * @member {String} transactionNumber
     * @type {String}
     */
    transactionNumber: string;
}
import { Currency } from './Currency.js';
//# sourceMappingURL=AdjustmentItem.d.ts.map