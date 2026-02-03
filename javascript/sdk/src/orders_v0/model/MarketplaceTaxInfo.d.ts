/**
 * The MarketplaceTaxInfo model module.
 * @module orders_v0/model/MarketplaceTaxInfo
 * @version v0
 */
export class MarketplaceTaxInfo {
    /**
     * Constructs a <code>MarketplaceTaxInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {MarketplaceTaxInfo} obj Optional instance to populate.
     * @return {MarketplaceTaxInfo} The populated <code>MarketplaceTaxInfo</code> instance.
     */
    static constructFromObject(data: any, obj: MarketplaceTaxInfo): MarketplaceTaxInfo;
    /**
     * A list of tax classifications that apply to the order.
     * @member {Array[]} taxClassifications
     * @type {Array[]}
     */
    taxClassifications: any[][];
}
//# sourceMappingURL=MarketplaceTaxInfo.d.ts.map