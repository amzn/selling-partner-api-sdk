/**
 * The ThroughputConfig model module.
 * @module supplysources_v2020_07_01/model/ThroughputConfig
 * @version 2020-07-01
 */
export class ThroughputConfig {
    /**
     * Constructs a <code>ThroughputConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ThroughputConfig} obj Optional instance to populate.
     * @return {ThroughputConfig} The populated <code>ThroughputConfig</code> instance.
     */
    static constructFromObject(data: any, obj: ThroughputConfig): ThroughputConfig;
    /**
     * Constructs a new <code>ThroughputConfig</code>.
     * The throughput configuration.
     * @alias module:supplysources_v2020_07_01/model/ThroughputConfig
     * @class
     * @param throughputUnit {ThroughputUnit}
     */
    constructor(throughputUnit: ThroughputUnit);
    throughputUnit: ThroughputUnit;
    /**
     * @member {ThroughputCap} throughputCap
     * @type {ThroughputCap}
     */
    throughputCap: ThroughputCap;
}
import { ThroughputUnit } from './ThroughputUnit.js';
import { ThroughputCap } from './ThroughputCap.js';
//# sourceMappingURL=ThroughputConfig.d.ts.map