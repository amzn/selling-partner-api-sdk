/**
 * The Address model module.
 * @module vendororders_v1/model/Address
 * @version v1
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
     * @alias module:vendororders_v1/model/Address
     * @class
     * @param name {String} The name of the person, business or institution at that address.
     * @param addressLine1 {String} First line of the address.
     * @param countryCode {String} The two digit country code. In ISO 3166-1 alpha-2 format.
     */
    constructor(name: string, addressLine1: string, countryCode: string);
    name: string;
    addressLine1: string;
    countryCode: string;
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
     * The postal code of that address. It conatins a series of letters or digits or both, sometimes including spaces or punctuation.
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