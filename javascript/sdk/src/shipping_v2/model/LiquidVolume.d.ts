/**
 * The LiquidVolume model module.
 * @module shipping_v2/model/LiquidVolume
 * @version v2
 */
export class LiquidVolume {
    /**
     * Constructs a <code>LiquidVolume</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {LiquidVolume} obj Optional instance to populate.
     * @return {LiquidVolume} The populated <code>LiquidVolume</code> instance.
     */
    static constructFromObject(data: any, obj: LiquidVolume): LiquidVolume;
    /**
     * Constructs a new <code>LiquidVolume</code>.
     * Liquid Volume.
     * @alias module:shipping_v2/model/LiquidVolume
     * @class
     * @param unit {String} The unit of measurement.
     * @param value {Number} The measurement value.
     */
    constructor(unit: string, value: number);
    unit: string;
    value: number;
}
export namespace LiquidVolume {
    namespace UnitEnum {
        let ML: string;
        let L: string;
        let FL_OZ: string;
        let GAL: string;
        let PT: string;
        let QT: string;
        let C: string;
    }
    /**
     * *
     */
    type UnitEnum = string;
}
//# sourceMappingURL=LiquidVolume.d.ts.map