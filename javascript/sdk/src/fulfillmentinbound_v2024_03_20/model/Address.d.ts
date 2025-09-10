/**
 * The Address model module.
 * @module fulfillmentinbound_v2024_03_20/model/Address
 * @version 2024-03-20
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
     * Specific details to identify a place.
     * @alias module:fulfillmentinbound_v2024_03_20/model/Address
     * @class
     * @param addressLine1 {String} Street address information.
     * @param city {String} The city.
     * @param countryCode {String} The country code in two-character ISO 3166-1 alpha-2 format.
     * @param name {String} The name of the individual who is the primary contact.
     * @param postalCode {String} The postal code.
     */
    constructor(addressLine1: string, city: string, countryCode: string, name: string, postalCode: string);
    addressLine1: string;
    city: string;
    countryCode: string;
    name: string;
    postalCode: string;
    /**
     * Additional street address information.
     * @member {String} addressLine2
     * @type {String}
     */
    addressLine2: string;
    /**
     * The name of the business.
     * @member {String} companyName
     * @type {String}
     */
    companyName: string;
    /**
     * The district or county.
     * @member {String} districtOrCounty
     * @type {String}
     */
    districtOrCounty: string;
    /**
     * The email address.
     * @member {String} email
     * @type {String}
     */
    email: string;
    /**
     * The phone number.
     * @member {String} phoneNumber
     * @type {String}
     */
    phoneNumber: string;
    /**
     * The state or province code.
     * @member {String} stateOrProvinceCode
     * @type {String}
     */
    stateOrProvinceCode: string;
}
//# sourceMappingURL=Address.d.ts.map