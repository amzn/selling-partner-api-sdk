/**
 * The MarketplaceTaxInfo model module.
 * @module invoicing_v0/model/MarketplaceTaxInfo
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
     * The list of tax classifications.
     * @member {[TaxClassification]} taxClassifications
     * @type {[TaxClassification]}
     */
    taxClassifications: [TaxClassification];
}
import { TaxClassification } from './TaxClassification.js';
//# sourceMappingURL=MarketplaceTaxInfo.d.ts.map