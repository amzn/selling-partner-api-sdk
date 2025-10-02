/**
 * The TaxRegistrationInfo model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/TaxRegistrationInfo
 * @version 2024-09-11
 */
export class TaxRegistrationInfo {
    /**
     * Constructs a <code>TaxRegistrationInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TaxRegistrationInfo} obj Optional instance to populate.
     * @return {TaxRegistrationInfo} The populated <code>TaxRegistrationInfo</code> instance.
     */
    static constructFromObject(data: any, obj: TaxRegistrationInfo): TaxRegistrationInfo;
    /**
     * Tax registration type for the entity
     * @member {String} type
     * @type {String}
     */
    type: string;
    /**
     * The tax registration number for the party. For example, their VAT ID.
     * @member {String} number
     * @type {String}
     */
    number: string;
    /**
     * @member {Address} address
     * @type {Address}
     */
    address: Address;
    /**
     * Tax registration message that can be used for additional tax related details.
     * @member {String} messages
     * @type {String}
     */
    messages: string;
}
export namespace TaxRegistrationInfo {
    namespace TypeEnum {
        let VAT: string;
        let GST: string;
    }
    /**
     * *
     */
    type TypeEnum = string;
}
import { Address } from './Address.js';
//# sourceMappingURL=TaxRegistrationInfo.d.ts.map