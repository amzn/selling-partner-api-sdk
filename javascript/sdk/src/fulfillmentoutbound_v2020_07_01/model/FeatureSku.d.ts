/**
 * The FeatureSku model module.
 * @module fulfillmentoutbound_v2020_07_01/model/FeatureSku
 * @version 2020-07-01
 */
export class FeatureSku {
    /**
     * Constructs a <code>FeatureSku</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FeatureSku} obj Optional instance to populate.
     * @return {FeatureSku} The populated <code>FeatureSku</code> instance.
     */
    static constructFromObject(data: any, obj: FeatureSku): FeatureSku;
    /**
     * Used to identify an item in the given marketplace. `SellerSKU` is qualified by the seller's SellerId, which is included with every operation that you submit.
     * @member {String} sellerSku
     * @type {String}
     */
    sellerSku: string;
    /**
     * The unique SKU used by Amazon's fulfillment network.
     * @member {String} fnSku
     * @type {String}
     */
    fnSku: string;
    /**
     * The Amazon Standard Identification Number (ASIN) of the item.
     * @member {String} asin
     * @type {String}
     */
    asin: string;
    /**
     * The number of SKUs available for this service.
     * @member {Number} skuCount
     * @type {Number}
     */
    skuCount: number;
    /**
     * Other seller SKUs that are shared across the same inventory.
     * @member {Array[]} overlappingSkus
     * @type {Array[]}
     */
    overlappingSkus: any[][];
}
//# sourceMappingURL=FeatureSku.d.ts.map