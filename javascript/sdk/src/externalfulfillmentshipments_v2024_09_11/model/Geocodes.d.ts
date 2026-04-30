/**
 * The Geocodes model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/Geocodes
 * @version 2024-09-11
 */
export class Geocodes {
    /**
     * Constructs a <code>Geocodes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Geocodes} obj Optional instance to populate.
     * @return {Geocodes} The populated <code>Geocodes</code> instance.
     */
    static constructFromObject(data: Object, obj: Geocodes): Geocodes;
    /**
     * Constructs a new <code>Geocodes</code>.
     * Geographic coordinates.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/Geocodes
     * @class
     * @param latitude {String} A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies.
     * @param longitude {String} A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies.
     */
    constructor(latitude: string, longitude: string);
    latitude: string;
    longitude: string;
    /**
     * A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies.
     * @member {String} elevation
     * @type {String}
     */
    elevation: string;
}
//# sourceMappingURL=Geocodes.d.ts.map