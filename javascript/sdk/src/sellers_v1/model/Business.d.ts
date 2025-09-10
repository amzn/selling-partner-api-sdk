/**
 * The Business model module.
 * @module sellers_v1/model/Business
 * @version v1
 */
export class Business {
    /**
     * Constructs a <code>Business</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Business} obj Optional instance to populate.
     * @return {Business} The populated <code>Business</code> instance.
     */
    static constructFromObject(data: any, obj: Business): Business;
    /**
     * Constructs a new <code>Business</code>.
     * Information about the seller&#39;s business. Certain fields may be omitted depending on the seller&#39;s &#x60;businessType&#x60;.
     * @alias module:sellers_v1/model/Business
     * @class
     * @param name {String} The registered business name.
     * @param registeredBusinessAddress {Address}
     */
    constructor(name: string, registeredBusinessAddress: Address);
    name: string;
    registeredBusinessAddress: Address;
    /**
     * The seller's company registration number, if applicable. This field will be absent for individual sellers and sole proprietorships.
     * @member {String} companyRegistrationNumber
     * @type {String}
     */
    companyRegistrationNumber: string;
    /**
     * The seller's company tax identification number, if applicable. This field will be present for certain business types only, such as sole proprietorships.
     * @member {String} companyTaxIdentificationNumber
     * @type {String}
     */
    companyTaxIdentificationNumber: string;
    /**
     * The non-Latin script version of the registered business name, if applicable.
     * @member {String} nonLatinName
     * @type {String}
     */
    nonLatinName: string;
}
import { Address } from './Address.js';
//# sourceMappingURL=Business.d.ts.map