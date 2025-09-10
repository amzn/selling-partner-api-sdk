/**
 * The Address model module.
 * @module fulfillmentinbound_v0/model/Address
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
     * Specific details to identify a place.
     * @alias module:fulfillmentinbound_v0/model/Address
     * @class
     * @param name {String} Name of the individual or business.
     * @param addressLine1 {String} The street address information.
     * @param city {String} The city.
     * @param stateOrProvinceCode {String} The state or province code.  If state or province codes are used in your marketplace, it is recommended that you include one with your request. This helps Amazon to select the most appropriate Amazon fulfillment center for your inbound shipment plan.
     * @param countryCode {String} The country code in two-character ISO 3166-1 alpha-2 format.
     * @param postalCode {String} The postal code.  If postal codes are used in your marketplace, we recommended that you include one with your request. This helps Amazon select the most appropriate Amazon fulfillment center for the inbound shipment plan.
     */
    constructor(name: string, addressLine1: string, city: string, stateOrProvinceCode: string, countryCode: string, postalCode: string);
    name: string;
    addressLine1: string;
    city: string;
    stateOrProvinceCode: string;
    countryCode: string;
    postalCode: string;
    /**
     * Additional street address information, if required.
     * @member {String} addressLine2
     * @type {String}
     */
    addressLine2: string;
    /**
     * The district or county.
     * @member {String} districtOrCounty
     * @type {String}
     */
    districtOrCounty: string;
}
//# sourceMappingURL=Address.d.ts.map