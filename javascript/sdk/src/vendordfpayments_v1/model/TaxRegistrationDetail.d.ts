/**
 * The TaxRegistrationDetail model module.
 * @module vendordfpayments_v1/model/TaxRegistrationDetail
 * @version v1
 */
export class TaxRegistrationDetail {
    /**
     * Constructs a <code>TaxRegistrationDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TaxRegistrationDetail} obj Optional instance to populate.
     * @return {TaxRegistrationDetail} The populated <code>TaxRegistrationDetail</code> instance.
     */
    static constructFromObject(data: any, obj: TaxRegistrationDetail): TaxRegistrationDetail;
    /**
     * Constructs a new <code>TaxRegistrationDetail</code>.
     * Tax registration details of the entity.
     * @alias module:vendordfpayments_v1/model/TaxRegistrationDetail
     * @class
     * @param taxRegistrationNumber {String} Tax registration number for the entity. For example, VAT ID, Consumption Tax ID.
     */
    constructor(taxRegistrationNumber: string);
    taxRegistrationNumber: string;
    /**
     * Tax registration type for the entity.
     * @member {String} taxRegistrationType
     * @type {String}
     */
    taxRegistrationType: string;
    /**
     * @member {Address} taxRegistrationAddress
     * @type {Address}
     */
    taxRegistrationAddress: Address;
    /**
     * Tax registration message that can be used for additional tax related details.
     * @member {String} taxRegistrationMessage
     * @type {String}
     */
    taxRegistrationMessage: string;
}
export namespace TaxRegistrationDetail {
    namespace TaxRegistrationTypeEnum {
        let VAT: string;
        let GST: string;
    }
    /**
     * *
     */
    type TaxRegistrationTypeEnum = string;
}
import { Address } from './Address.js';
//# sourceMappingURL=TaxRegistrationDetail.d.ts.map