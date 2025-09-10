/**
 * The Duration model module.
 * @module supplysources_v2020_07_01/model/Duration
 * @version 2020-07-01
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
     * An unsigned integer that can be only positive or zero.
     * @member {Number} value
     * @type {Number}
     */
    value: number;
    /**
     * @member {TimeUnit} timeUnit
     * @type {TimeUnit}
     */
    timeUnit: TimeUnit;
}
import { TimeUnit } from './TimeUnit.js';
//# sourceMappingURL=Duration.d.ts.map