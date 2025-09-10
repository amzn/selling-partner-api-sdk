/**
 * The Address model module.
 * @module orders_v0/model/Address
 * @version v0
 */
export class Address {
    /**
     * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Address} obj Optional instance to populate.
     * @return {Address} The populated <code>Address</code> instance.
     */
    static constructFromObject(data: any, obj: Address): Address;
    /**
     * Constructs a new <code>Address</code>.
     * The shipping address for the order.
     * @alias module:orders_v0/model/Address
     * @class
     * @param name {String} The name.
     */
    constructor(name: string);
    name: string;
    /**
     * The company name of the recipient.  **Note**: This attribute is only available for shipping address.
     * @member {String} companyName
     * @type {String}
     */
    companyName: string;
    /**
     * The street address.
     * @member {String} addressLine1
     * @type {String}
     */
    addressLine1: string;
    /**
     * Additional street address information, if required.
     * @member {String} addressLine2
     * @type {String}
     */
    addressLine2: string;
    /**
     * Additional street address information, if required.
     * @member {String} addressLine3
     * @type {String}
     */
    addressLine3: string;
    /**
     * The city.
     * @member {String} city
     * @type {String}
     */
    city: string;
    /**
     * The county.
     * @member {String} county
     * @type {String}
     */
    county: string;
    /**
     * The district.
     * @member {String} district
     * @type {String}
     */
    district: string;
    /**
     * The state or region.
     * @member {String} stateOrRegion
     * @type {String}
     */
    stateOrRegion: string;
    /**
     * The municipality.
     * @member {String} municipality
     * @type {String}
     */
    municipality: string;
    /**
     * The postal code.
     * @member {String} postalCode
     * @type {String}
     */
    postalCode: string;
    /**
     * The country code. A two-character country code, in ISO 3166-1 alpha-2 format.
     * @member {String} countryCode
     * @type {String}
     */
    countryCode: string;
    /**
     * The phone number of the buyer.  **Note**:  1. This attribute is only available for shipping address. 2. In some cases, the buyer phone number is suppressed:  a. Phone is suppressed for all `AFN` (fulfilled by Amazon) orders. b. Phone is suppressed for the shipped `MFN` (fulfilled by seller) order when the current date is past the Latest Delivery Date.
     * @member {String} phone
     * @type {String}
     */
    phone: string;
    /**
     * @member {AddressExtendedFields} extendedFields
     * @type {AddressExtendedFields}
     */
    extendedFields: AddressExtendedFields;
    /**
     * The address type of the shipping address.
     * @member {String} addressType
     * @type {String}
     */
    addressType: string;
}
export namespace Address {
    namespace AddressTypeEnum {
        let Residential: string;
        let Commercial: string;
    }
    /**
     * *
     */
    type AddressTypeEnum = string;
}
import { AddressExtendedFields } from './AddressExtendedFields.js';
//# sourceMappingURL=Address.d.ts.map