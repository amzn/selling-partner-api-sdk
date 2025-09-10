/**
 * The AddressInput model module.
 * @module fulfillmentinbound_v2024_03_20/model/AddressInput
 * @version 2024-03-20
 */
export class AddressInput {
    /**
     * Constructs a <code>AddressInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AddressInput} obj Optional instance to populate.
     * @return {AddressInput} The populated <code>AddressInput</code> instance.
     */
    static constructFromObject(data: any, obj: AddressInput): AddressInput;
    /**
     * Constructs a new <code>AddressInput</code>.
     * Specific details to identify a place.
     * @alias module:fulfillmentinbound_v2024_03_20/model/AddressInput
     * @class
     * @param addressLine1 {String} Street address information.
     * @param city {String} The city.
     * @param countryCode {String} The country code in two-character ISO 3166-1 alpha-2 format.
     * @param name {String} The name of the individual who is the primary contact.
     * @param phoneNumber {String} The phone number.
     * @param postalCode {String} The postal code.
     */
    constructor(addressLine1: string, city: string, countryCode: string, name: string, phoneNumber: string, postalCode: string);
    addressLine1: string;
    city: string;
    countryCode: string;
    name: string;
    phoneNumber: string;
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
     * The state or province code.
     * @member {String} stateOrProvinceCode
     * @type {String}
     */
    stateOrProvinceCode: string;
}
//# sourceMappingURL=AddressInput.d.ts.map