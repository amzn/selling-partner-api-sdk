/**
 * The Distance model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/Distance
 * @version 2024-09-11
 */
export class Distance {
    /**
     * Constructs a <code>Distance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Distance} obj Optional instance to populate.
     * @return {Distance} The populated <code>Distance</code> instance.
     */
    static constructFromObject(data: Object, obj: Distance): Distance;
    /**
     * Constructs a new <code>Distance</code>.
     * A distance measurement.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/Distance
     * @class
     * @param value {String} A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies.
     * @param distanceUnit {String} The unit of measurement of the distance.
     */
    constructor(value: string, distanceUnit: string);
    value: string;
    distanceUnit: string;
}
export namespace Distance {
    namespace DistanceUnitEnum {
        let MI: string;
        let KM: string;
    }
    /**
     * *
     */
    type DistanceUnitEnum = string;
}
//# sourceMappingURL=Distance.d.ts.map