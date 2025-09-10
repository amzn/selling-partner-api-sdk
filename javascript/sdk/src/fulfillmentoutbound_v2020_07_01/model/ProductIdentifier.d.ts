/**
 * The ProductIdentifier model module.
 * @module fulfillmentoutbound_v2020_07_01/model/ProductIdentifier
 * @version 2020-07-01
 */
export class ProductIdentifier {
    /**
     * Constructs a <code>ProductIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ProductIdentifier} obj Optional instance to populate.
     * @return {ProductIdentifier} The populated <code>ProductIdentifier</code> instance.
     */
    static constructFromObject(data: any, obj: ProductIdentifier): ProductIdentifier;
    /**
     * Constructs a new <code>ProductIdentifier</code>.
     * Product identifier input that locates a product for MCF.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/ProductIdentifier
     * @class
     * @param merchantSku {String} The merchant SKU for the product.
     */
    constructor(merchantSku: string);
    merchantSku: string;
}
//# sourceMappingURL=ProductIdentifier.d.ts.map