/**
 * The ItemProduct model module.
 * @module orders_v2026_01_01/model/ItemProduct
 * @version 2026-01-01
 */
export class ItemProduct {
    /**
     * Constructs a <code>ItemProduct</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemProduct} obj Optional instance to populate.
     * @return {ItemProduct} The populated <code>ItemProduct</code> instance.
     */
    static constructFromObject(data: any, obj: ItemProduct): ItemProduct;
    /**
     * The Amazon Standard Identification Number (ASIN), which uniquely identifies a product (catalog item).
     * @member {String} asin
     * @type {String}
     */
    asin: string;
    /**
     * The product name or title as displayed to customers in the marketplace.
     * @member {String} title
     * @type {String}
     */
    title: string;
    /**
     * The seller SKU of a product (catalog item). This is a unique number assigned by the seller when listing an item.
     * @member {String} sellerSku
     * @type {String}
     */
    sellerSku: string;
    /**
     * @member {ItemCondition} condition
     * @type {ItemCondition}
     */
    condition: ItemCondition;
    /**
     * @member {ItemPrice} price
     * @type {ItemPrice}
     */
    price: ItemPrice;
    /**
     * Unique serial numbers for products that require individual tracking, typically provided for FBA orders.
     * @member {String[]} serialNumbers
     * @type {String[]}
     */
    serialNumbers: string[];
    /**
     * @member {ItemCustomization} customization
     * @type {ItemCustomization}
     */
    customization: ItemCustomization;
}
import { ItemCondition } from './ItemCondition.js';
import { ItemPrice } from './ItemPrice.js';
import { ItemCustomization } from './ItemCustomization.js';
//# sourceMappingURL=ItemProduct.d.ts.map