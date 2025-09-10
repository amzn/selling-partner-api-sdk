/**
 * The AggregationFilter model module.
 * @module notifications_v1/model/AggregationFilter
 * @version v1
 */
export class AggregationFilter {
    /**
     * Constructs a <code>AggregationFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AggregationFilter} obj Optional instance to populate.
     * @return {AggregationFilter} The populated <code>AggregationFilter</code> instance.
     */
    static constructFromObject(data: any, obj: AggregationFilter): AggregationFilter;
    /**
     * @member {AggregationSettings} aggregationSettings
     * @type {AggregationSettings}
     */
    aggregationSettings: AggregationSettings;
}
import { AggregationSettings } from './AggregationSettings.js';
//# sourceMappingURL=AggregationFilter.d.ts.map