/**
 * The Address model module.
 * @module invoicing_v0/model/Address
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
     * The name.
     * @member {String} name
     * @type {String}
     */
    name: string;
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
     * The postal code.
     * @member {String} postalCode
     * @type {String}
     */
    postalCode: string;
    /**
     * The country code.
     * @member {String} countryCode
     * @type {String}
     */
    countryCode: string;
    /**
     * The phone number.
     * @member {String} phone
     * @type {String}
     */
    phone: string;
    /**
     * @member {AddressTypeEnum} addressType
     * @type {AddressTypeEnum}
     */
    addressType: AddressTypeEnum;
}
import { AddressTypeEnum } from './AddressTypeEnum.js';
//# sourceMappingURL=Address.d.ts.map