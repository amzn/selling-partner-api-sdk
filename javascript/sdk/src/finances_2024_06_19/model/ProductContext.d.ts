/**
 * The ProductContext model module.
 * @module finances_2024_06_19/model/ProductContext
 * @version 2024-06-19
 */
export class ProductContext {
    /**
     * Constructs a <code>ProductContext</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ProductContext} obj Optional instance to populate.
     * @return {ProductContext} The populated <code>ProductContext</code> instance.
     */
    static constructFromObject(data: any, obj: ProductContext): ProductContext;
    /**
     * Amazon Standard Identification Number (ASIN) of the item.
     * @member {String} asin
     * @type {String}
     */
    asin: string;
    /**
     * Stock keeping unit (SKU) of the item.
     * @member {String} sku
     * @type {String}
     */
    sku: string;
    /**
     * Quantity of the item shipped.
     * @member {Number} quantityShipped
     * @type {Number}
     */
    quantityShipped: number;
    /**
     * Fulfillment network of the item.
     * @member {String} fulfillmentNetwork
     * @type {String}
     */
    fulfillmentNetwork: string;
}
//# sourceMappingURL=ProductContext.d.ts.map