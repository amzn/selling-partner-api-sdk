/**
 * The Address model module.
 * @module shipping_v2/model/Address
 * @version v2
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
     * The address.
     * @alias module:shipping_v2/model/Address
     * @class
     * @param name {String} The name of the person, business or institution at the address.
     * @param addressLine1 {String} The first line of the address.
     * @param stateOrRegion {String} The state, county or region where the person, business or institution is located.
     * @param city {String} The city or town where the person, business or institution is located.
     * @param countryCode {String} The two digit country code. Follows ISO 3166-1 alpha-2 format.
     * @param postalCode {String} The postal code of that address. It contains a series of letters or digits or both, sometimes including spaces or punctuation.
     */
    constructor(name: string, addressLine1: string, stateOrRegion: string, city: string, countryCode: string, postalCode: string);
    name: string;
    addressLine1: string;
    stateOrRegion: string;
    city: string;
    countryCode: string;
    postalCode: string;
    /**
     * Additional address information, if required.
     * @member {String} addressLine2
     * @type {String}
     */
    addressLine2: string;
    /**
     * Additional address information, if required.
     * @member {String} addressLine3
     * @type {String}
     */
    addressLine3: string;
    /**
     * The name of the business or institution associated with the address.
     * @member {String} companyName
     * @type {String}
     */
    companyName: string;
    /**
     * The email address of the contact associated with the address.
     * @member {String} email
     * @type {String}
     */
    email: string;
    /**
     * The phone number of the person, business or institution located at that address, including the country calling code.
     * @member {String} phoneNumber
     * @type {String}
     */
    phoneNumber: string;
    /**
     * @member {Geocode} geocode
     * @type {Geocode}
     */
    geocode: Geocode;
}
import { Geocode } from './Geocode.js';
//# sourceMappingURL=Address.d.ts.map