/**
 * The AggregationSettings model module.
 * @module notifications_v1/model/AggregationSettings
 * @version v1
 */
export class AggregationSettings {
    /**
     * Constructs a <code>AggregationSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AggregationSettings} obj Optional instance to populate.
     * @return {AggregationSettings} The populated <code>AggregationSettings</code> instance.
     */
    static constructFromObject(data: any, obj: AggregationSettings): AggregationSettings;
    /**
     * Constructs a new <code>AggregationSettings</code>.
     * A container that holds all of the necessary properties to configure the aggregation of notifications.
     * @alias module:notifications_v1/model/AggregationSettings
     * @class
     * @param aggregationTimePeriod {AggregationTimePeriod}
     */
    constructor(aggregationTimePeriod: AggregationTimePeriod);
    aggregationTimePeriod: AggregationTimePeriod;
}
import { AggregationTimePeriod } from './AggregationTimePeriod.js';
//# sourceMappingURL=AggregationSettings.d.ts.map