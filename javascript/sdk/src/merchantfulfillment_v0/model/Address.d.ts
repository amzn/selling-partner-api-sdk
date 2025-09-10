/**
 * The Address model module.
 * @module merchantfulfillment_v0/model/Address
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
     * The postal address information.
     * @alias module:merchantfulfillment_v0/model/Address
     * @class
     * @param name {String} The name of the addressee, or business name.
     * @param addressLine1 {String} The street address information.
     * @param email {String} The email address.
     * @param city {String} The city.
     * @param postalCode {String} The zip code or postal code.
     * @param countryCode {String} The two-letter country code in [ISO 3166-1 alpha-2](https://www.iban.com/country-codes) format.
     * @param phone {String} The phone number.
     */
    constructor(name: string, addressLine1: string, email: string, city: string, postalCode: string, countryCode: string, phone: string);
    name: string;
    addressLine1: string;
    email: string;
    city: string;
    postalCode: string;
    countryCode: string;
    phone: string;
    /**
     * Additional street address information.
     * @member {String} addressLine2
     * @type {String}
     */
    addressLine2: string;
    /**
     * Additional street address information.
     * @member {String} addressLine3
     * @type {String}
     */
    addressLine3: string;
    /**
     * The district or county.
     * @member {String} districtOrCounty
     * @type {String}
     */
    districtOrCounty: string;
    /**
     * The state or province code. This is a required field in Canada, US, and UK marketplaces, and for shipments that originate in China.
     * @member {String} stateOrProvinceCode
     * @type {String}
     */
    stateOrProvinceCode: string;
}
//# sourceMappingURL=Address.d.ts.map