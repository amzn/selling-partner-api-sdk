/**
 * The Duration model module.
 * @module vendorshipments_v1/model/Duration
 * @version v1
 */
export class Duration {
    /**
     * Constructs a <code>Duration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Duration} obj Optional instance to populate.
     * @return {Duration} The populated <code>Duration</code> instance.
     */
    static constructFromObject(data: any, obj: Duration): Duration;
    /**
     * Constructs a new <code>Duration</code>.
     * Duration after manufacturing date during which the product is valid for consumption.
     * @alias module:vendorshipments_v1/model/Duration
     * @class
     * @param durationUnit {String} Unit for duration.
     * @param durationValue {Number} Value for the duration in terms of the durationUnit.
     */
    constructor(durationUnit: string, durationValue: number);
    durationUnit: string;
    durationValue: number;
}
export namespace Duration {
    namespace DurationUnitEnum {
        let Days: string;
        let Months: string;
    }
    /**
     * *
     */
    type DurationUnitEnum = string;
}
//# sourceMappingURL=Duration.d.ts.map