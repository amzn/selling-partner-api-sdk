/**
 * The DistributionProduct model module.
 * @module awd_v2024_05_09/model/DistributionProduct
 * @version 2024-05-09
 */
export class DistributionProduct {
    /**
     * Constructs a <code>DistributionProduct</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DistributionProduct} obj Optional instance to populate.
     * @return {DistributionProduct} The populated <code>DistributionProduct</code> instance.
     */
    static constructFromObject(data: any, obj: DistributionProduct): DistributionProduct;
    /**
     * Constructs a new <code>DistributionProduct</code>.
     * Represents a product with sku details and corresponding quantity
     * @alias module:awd_v2024_05_09/model/DistributionProduct
     * @class
     * @param quantity {Number} Quantity of the product
     * @param sku {String} The seller/merchant stock keeping unit (SKU).
     */
    constructor(quantity: number, sku: string);
    quantity: number;
    sku: string;
    /**
     * Attributes for this instance of the product, i.e. already-prepped, or other attributes that distinguish the product beyond the SKU.
     * @member {Array[]} attributes
     * @type {Array[]}
     */
    attributes: any[][];
}
//# sourceMappingURL=DistributionProduct.d.ts.map