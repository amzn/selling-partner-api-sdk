/**
 * The VariablePrecisionAddress model module.
 * @module fulfillmentoutbound_v2020_07_01/model/VariablePrecisionAddress
 * @version 2020-07-01
 */
export class VariablePrecisionAddress {
    /**
     * Constructs a <code>VariablePrecisionAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {VariablePrecisionAddress} obj Optional instance to populate.
     * @return {VariablePrecisionAddress} The populated <code>VariablePrecisionAddress</code> instance.
     */
    static constructFromObject(data: any, obj: VariablePrecisionAddress): VariablePrecisionAddress;
    /**
     * Constructs a new <code>VariablePrecisionAddress</code>.
     * A physical address with varying degrees of precision. A more precise address can provide more accurate results than country code and postal code alone.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/VariablePrecisionAddress
     * @class
     * @param postalCode {String} The postal code of the address.
     * @param countryCode {String} The two digit country code. In ISO 3166-1 alpha-2 format.
     */
    constructor(postalCode: string, countryCode: string);
    postalCode: string;
    countryCode: string;
    /**
     * The first line of the address.
     * @member {String} addressLine1
     * @type {String}
     */
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
     * The city where the person, business, or institution is located. This property should not be used in Japan.
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
}
//# sourceMappingURL=VariablePrecisionAddress.d.ts.map