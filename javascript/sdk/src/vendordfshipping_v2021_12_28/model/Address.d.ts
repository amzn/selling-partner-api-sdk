/**
 * The Address model module.
 * @module vendordfshipping_v2021_12_28/model/Address
 * @version 2021-12-28
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
     * Address of the party.
     * @alias module:vendordfshipping_v2021_12_28/model/Address
     * @class
     * @param name {String} The name of the person, business or institution at that address.
     * @param addressLine1 {String} First line of the address.
     * @param countryCode {String} The two-letter country code in [ISO 3166-1 alpha-2](https://www.iban.com/country-codes) format.
     */
    constructor(name: string, addressLine1: string, countryCode: string);
    name: string;
    addressLine1: string;
    countryCode: string;
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
     * The city where the person, business or institution is located.
     * @member {String} city
     * @type {String}
     */
    city: string;
    /**
     * The county where person, business or institution is located.
     * @member {String} county
     * @type {String}
     */
    county: string;
    /**
     * The district where person, business or institution is located.
     * @member {String} district
     * @type {String}
     */
    district: string;
    /**
     * The state or region where person, business or institution is located.
     * @member {String} stateOrRegion
     * @type {String}
     */
    stateOrRegion: string;
    /**
     * The postal code of that address. It contains a series of letters or digits or both, sometimes including spaces or punctuation.
     * @member {String} postalCode
     * @type {String}
     */
    postalCode: string;
    /**
     * The phone number of the person, business or institution located at that address.
     * @member {String} phone
     * @type {String}
     */
    phone: string;
}
//# sourceMappingURL=Address.d.ts.map