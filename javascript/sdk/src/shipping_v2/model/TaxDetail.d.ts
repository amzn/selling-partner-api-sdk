/**
 * The TaxDetail model module.
 * @module shipping_v2/model/TaxDetail
 * @version v2
 */
export class TaxDetail {
    /**
     * Constructs a <code>TaxDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TaxDetail} obj Optional instance to populate.
     * @return {TaxDetail} The populated <code>TaxDetail</code> instance.
     */
    static constructFromObject(data: any, obj: TaxDetail): TaxDetail;
    /**
     * Constructs a new <code>TaxDetail</code>.
     * Indicates the tax specifications associated with the shipment for customs compliance purposes in certain regions.
     * @alias module:shipping_v2/model/TaxDetail
     * @class
     * @param taxType {TaxType}
     * @param taxRegistrationNumber {String} The shipper's tax registration number associated with the shipment for customs compliance purposes in certain regions.
     */
    constructor(taxType: TaxType, taxRegistrationNumber: string);
    taxType: "GST";
    taxRegistrationNumber: string;
}
import { TaxType } from './TaxType.js';
//# sourceMappingURL=TaxDetail.d.ts.map