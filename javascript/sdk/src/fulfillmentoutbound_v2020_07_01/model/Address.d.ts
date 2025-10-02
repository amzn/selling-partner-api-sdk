/**
 * The Address model module.
 * @module fulfillmentoutbound_v2020_07_01/model/Address
 * @version 2020-07-01
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
     * A physical address.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/Address
     * @class
     * @param name {String} The name of the person, business or institution at the address.
     * @param addressLine1 {String} The first line of the address.
     * @param postalCode {String} The postal code of the address.
     * @param countryCode {String} The two digit country code. In ISO 3166-1 alpha-2 format.
     */
    constructor(name: string, addressLine1: string, postalCode: string, countryCode: string);
    name: string;
    addressLine1: string;
    postalCode: string;
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
     * The city where the person, business, or institution is located. This property is required in all countries except Japan. It should not be used in Japan.
     * @member {String} city
     * @type {String}
     */
    city: string;
    /**
     * The district or county where the person, business, or institution is located.
     * @member {String} districtOrCounty
     * @type {String}
     */
    districtOrCounty: string;
    /**
     * The state or region where the person, business or institution is located.
     * @member {String} stateOrRegion
     * @type {String}
     */
    stateOrRegion: string;
    /**
     * The phone number of the person, business, or institution located at the address.
     * @member {String} phone
     * @type {String}
     */
    phone: string;
}
//# sourceMappingURL=Address.d.ts.map