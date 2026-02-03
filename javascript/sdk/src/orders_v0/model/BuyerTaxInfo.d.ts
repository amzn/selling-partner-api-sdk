/**
 * The BuyerTaxInfo model module.
 * @module orders_v0/model/BuyerTaxInfo
 * @version v0
 */
export class BuyerTaxInfo {
    /**
     * Constructs a <code>BuyerTaxInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BuyerTaxInfo} obj Optional instance to populate.
     * @return {BuyerTaxInfo} The populated <code>BuyerTaxInfo</code> instance.
     */
    static constructFromObject(data: any, obj: BuyerTaxInfo): BuyerTaxInfo;
    /**
     * The legal name of the company.
     * @member {String} companyLegalName
     * @type {String}
     */
    companyLegalName: string;
    /**
     * The country or region imposing the tax.
     * @member {String} taxingRegion
     * @type {String}
     */
    taxingRegion: string;
    /**
     * A list of tax classifications that apply to the order.
     * @member {Array[]} taxClassifications
     * @type {Array[]}
     */
    taxClassifications: any[][];
}
//# sourceMappingURL=BuyerTaxInfo.d.ts.map