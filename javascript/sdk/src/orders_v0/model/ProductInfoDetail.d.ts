/**
 * The ProductInfoDetail model module.
 * @module orders_v0/model/ProductInfoDetail
 * @version v0
 */
export class ProductInfoDetail {
    /**
     * Constructs a <code>ProductInfoDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ProductInfoDetail} obj Optional instance to populate.
     * @return {ProductInfoDetail} The populated <code>ProductInfoDetail</code> instance.
     */
    static constructFromObject(data: any, obj: ProductInfoDetail): ProductInfoDetail;
    /**
     * The total number of items that are included in the ASIN.
     * @member {String} numberOfItems
     * @type {String}
     */
    numberOfItems: string;
}
//# sourceMappingURL=ProductInfoDetail.d.ts.map