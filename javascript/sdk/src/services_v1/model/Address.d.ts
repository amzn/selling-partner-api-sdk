/**
 * The Address model module.
 * @module services_v1/model/Address
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
     * The shipping address for the service job.
     * @alias module:services_v1/model/Address
     * @class
     * @param name {String} The name of the person, business, or institution.
     * @param addressLine1 {String} The first line of the address.
     */
    constructor(name: string, addressLine1: string);
    name: string;
    addressLine1: string;
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
     * The postal code. This can contain letters, digits, spaces, and/or punctuation.
     * @member {String} postalCode
     * @type {String}
     */
    postalCode: string;
    /**
     * The two digit country code, in ISO 3166-1 alpha-2 format.
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
}
//# sourceMappingURL=Address.d.ts.map