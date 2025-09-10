/**
 * The Address model module.
 * @module sellers_v1/model/Address
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
     * Represents an address
     * @alias module:sellers_v1/model/Address
     * @class
     * @param addressLine1 {String} Street address information.
     * @param countryCode {String} The country code in two-character ISO 3166-1 alpha-2 format.
     */
    constructor(addressLine1: string, countryCode: string);
    addressLine1: string;
    countryCode: string;
    /**
     * Additional street address information.
     * @member {String} addressLine2
     * @type {String}
     */
    addressLine2: string;
    /**
     * The state or province code.
     * @member {String} stateOrProvinceCode
     * @type {String}
     */
    stateOrProvinceCode: string;
    /**
     * The city.
     * @member {String} city
     * @type {String}
     */
    city: string;
    /**
     * The postal code.
     * @member {String} postalCode
     * @type {String}
     */
    postalCode: string;
}
//# sourceMappingURL=Address.d.ts.map