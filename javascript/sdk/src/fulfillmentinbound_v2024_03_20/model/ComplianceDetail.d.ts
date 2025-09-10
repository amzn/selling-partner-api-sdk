/**
 * The ComplianceDetail model module.
 * @module fulfillmentinbound_v2024_03_20/model/ComplianceDetail
 * @version 2024-03-20
 */
export class ComplianceDetail {
    /**
     * Constructs a <code>ComplianceDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ComplianceDetail} obj Optional instance to populate.
     * @return {ComplianceDetail} The populated <code>ComplianceDetail</code> instance.
     */
    static constructFromObject(data: any, obj: ComplianceDetail): ComplianceDetail;
    /**
     * The Amazon Standard Identification Number, which identifies the detail page identifier.
     * @member {String} asin
     * @type {String}
     */
    asin: string;
    /**
     * The Fulfillment Network SKU, which identifies a real fulfillable item with catalog data and condition.
     * @member {String} fnsku
     * @type {String}
     */
    fnsku: string;
    /**
     * The merchant SKU, a merchant-supplied identifier for a specific SKU.
     * @member {String} msku
     * @type {String}
     */
    msku: string;
    /**
     * @member {TaxDetails} taxDetails
     * @type {TaxDetails}
     */
    taxDetails: TaxDetails;
}
import { TaxDetails } from './TaxDetails.js';
//# sourceMappingURL=ComplianceDetail.d.ts.map