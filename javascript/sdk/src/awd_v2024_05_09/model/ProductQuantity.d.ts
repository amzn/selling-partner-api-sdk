/**
 * The ProductQuantity model module.
 * @module awd_v2024_05_09/model/ProductQuantity
 * @version 2024-05-09
 */
export class ProductQuantity {
    /**
     * Constructs a <code>ProductQuantity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ProductQuantity} obj Optional instance to populate.
     * @return {ProductQuantity} The populated <code>ProductQuantity</code> instance.
     */
    static constructFromObject(data: any, obj: ProductQuantity): ProductQuantity;
    /**
     * Constructs a new <code>ProductQuantity</code>.
     * Represents a product with the SKU details and the corresponding quantity.
     * @alias module:awd_v2024_05_09/model/ProductQuantity
     * @class
     * @param quantity {Number} Product quantity.
     * @param sku {String} The seller or merchant SKU.
     */
    constructor(quantity: number, sku: string);
    quantity: number;
    sku: string;
    /**
     * Contains attributes for this instance of the product. For example, item color, or other attributes that distinguish the product beyond the SKU. This is metadata for the product and Amazon does not process this data.
     * @member {ProductAttribute[]} attributes
     * @type {ProductAttribute[]}
     */
    attributes: ProductAttribute[];
    /**
     * The expiration date for the SKU. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @member {Date} expiration
     * @type {Date}
     */
    expiration: Date;
    /**
     * @member {PrepDetails} prepDetails
     * @type {PrepDetails}
     */
    prepDetails: PrepDetails;
}
import { ProductAttribute } from './ProductAttribute.js';
import { PrepDetails } from './PrepDetails.js';
//# sourceMappingURL=ProductQuantity.d.ts.map