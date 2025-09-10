/**
 * The Address model module.
 * @module awd_v2024_05_09/model/Address
 * @version 2024-05-09
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
     * Shipping address that represents the origin or destination location.
     * @alias module:awd_v2024_05_09/model/Address
     * @class
     * @param addressLine1 {String} First line of the address text.
     * @param countryCode {String} Two-digit, ISO 3166-1 alpha-2 formatted country code where this address is located.
     * @param name {String} Name of the person, business, or institution at this address.
     * @param stateOrRegion {String} State or region where this address is located. Note that this is contextual to the specified country code.
     */
    constructor(addressLine1: string, countryCode: string, name: string, stateOrRegion: string);
    addressLine1: string;
    countryCode: string;
    name: string;
    stateOrRegion: string;
    /**
     * Optional second line of the address text.
     * @member {String} addressLine2
     * @type {String}
     */
    addressLine2: string;
    /**
     * Optional third line of the address text.
     * @member {String} addressLine3
     * @type {String}
     */
    addressLine3: string;
    /**
     * Optional city where this address is located.
     * @member {String} city
     * @type {String}
     */
    city: string;
    /**
     * Optional county where this address is located.
     * @member {String} county
     * @type {String}
     */
    county: string;
    /**
     * Optional district where this address is located.
     * @member {String} district
     * @type {String}
     */
    district: string;
    /**
     * Optional E.164-formatted phone number for an available contact at this address.
     * @member {String} phoneNumber
     * @type {String}
     */
    phoneNumber: string;
    /**
     * Optional postal code where this address is located.
     * @member {String} postalCode
     * @type {String}
     */
    postalCode: string;
}
//# sourceMappingURL=Address.d.ts.map