/**
 * The TaxRegistrationDetails model module.
 * @module vendordfshipping_v2021_12_28/model/TaxRegistrationDetails
 * @version 2021-12-28
 */
export class TaxRegistrationDetails {
    /**
     * Constructs a <code>TaxRegistrationDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TaxRegistrationDetails} obj Optional instance to populate.
     * @return {TaxRegistrationDetails} The populated <code>TaxRegistrationDetails</code> instance.
     */
    static constructFromObject(data: any, obj: TaxRegistrationDetails): TaxRegistrationDetails;
    /**
     * Constructs a new <code>TaxRegistrationDetails</code>.
     * Tax registration details of the entity.
     * @alias module:vendordfshipping_v2021_12_28/model/TaxRegistrationDetails
     * @class
     * @param taxRegistrationNumber {String} Tax registration number for the party. For example, VAT ID.
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
     * @member {String} taxRegistrationMessages
     * @type {String}
     */
    taxRegistrationMessages: string;
}
export namespace TaxRegistrationDetails {
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
//# sourceMappingURL=TaxRegistrationDetails.d.ts.map