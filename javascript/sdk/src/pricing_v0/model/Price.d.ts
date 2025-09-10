/**
 * The Price model module.
 * @module pricing_v0/model/Price
 * @version v0
 */
export class Price {
    /**
     * Constructs a <code>Price</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Price} obj Optional instance to populate.
     * @return {Price} The populated <code>Price</code> instance.
     */
    static constructFromObject(data: any, obj: Price): Price;
    /**
     * Constructs a new <code>Price</code>.
     * Schema for price info in &#x60;getPricing&#x60; response
     * @alias module:pricing_v0/model/Price
     * @class
     * @param status {String} The status of the operation.
     */
    constructor(status: string);
    status: string;
    /**
     * The seller stock keeping unit (SKU) of the item.
     * @member {String} sellerSKU
     * @type {String}
     */
    sellerSKU: string;
    /**
     * The Amazon Standard Identification Number (ASIN) of the item.
     * @member {String} ASIN
     * @type {String}
     */
    ASIN: string;
    /**
     * @member {Product} product
     * @type {Product}
     */
    product: Product;
}
import { Product } from './Product.js';
//# sourceMappingURL=Price.d.ts.map