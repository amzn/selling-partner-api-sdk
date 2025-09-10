/**
 * The Measurement model module.
 * @module orders_v0/model/Measurement
 * @version v0
 */
export class Measurement {
    /**
     * Constructs a <code>Measurement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Measurement} obj Optional instance to populate.
     * @return {Measurement} The populated <code>Measurement</code> instance.
     */
    static constructFromObject(data: any, obj: Measurement): Measurement;
    /**
     * Constructs a new <code>Measurement</code>.
     * Measurement information for an order item.
     * @alias module:orders_v0/model/Measurement
     * @class
     * @param unit {String} The unit of measure.
     * @param value {Number} The measurement value.
     */
    constructor(unit: string, value: number);
    unit: string;
    value: number;
}
export namespace Measurement {
    namespace UnitEnum {
        let OUNCES: string;
        let POUNDS: string;
        let KILOGRAMS: string;
        let GRAMS: string;
        let MILLIGRAMS: string;
        let INCHES: string;
        let FEET: string;
        let METERS: string;
        let CENTIMETERS: string;
        let MILLIMETERS: string;
        let SQUARE_METERS: string;
        let SQUARE_CENTIMETERS: string;
        let SQUARE_FEET: string;
        let SQUARE_INCHES: string;
        let GALLONS: string;
        let PINTS: string;
        let QUARTS: string;
        let FLUID_OUNCES: string;
        let LITERS: string;
        let CUBIC_METERS: string;
        let CUBIC_FEET: string;
        let CUBIC_INCHES: string;
        let CUBIC_CENTIMETERS: string;
        let COUNT: string;
    }
    /**
     * *
     */
    type UnitEnum = string;
}
//# sourceMappingURL=Measurement.d.ts.map