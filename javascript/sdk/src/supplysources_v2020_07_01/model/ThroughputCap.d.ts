/**
 * The ThroughputCap model module.
 * @module supplysources_v2020_07_01/model/ThroughputCap
 * @version 2020-07-01
 */
export class ThroughputCap {
    /**
     * Constructs a <code>ThroughputCap</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ThroughputCap} obj Optional instance to populate.
     * @return {ThroughputCap} The populated <code>ThroughputCap</code> instance.
     */
    static constructFromObject(data: any, obj: ThroughputCap): ThroughputCap;
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
//# sourceMappingURL=ThroughputCap.d.ts.map