/**
 * The BrowseNodeReturnTrendPoint model module.
 * @module customerFeedback_2024_06_01/model/BrowseNodeReturnTrendPoint
 * @version 2024-06-01
 */
export class BrowseNodeReturnTrendPoint {
    /**
     * Constructs a <code>BrowseNodeReturnTrendPoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BrowseNodeReturnTrendPoint} obj Optional instance to populate.
     * @return {BrowseNodeReturnTrendPoint} The populated <code>BrowseNodeReturnTrendPoint</code> instance.
     */
    static constructFromObject(data: any, obj: BrowseNodeReturnTrendPoint): BrowseNodeReturnTrendPoint;
    /**
     * Constructs a new <code>BrowseNodeReturnTrendPoint</code>.
     * The return metrics for a certain month.
     * @alias module:customerFeedback_2024_06_01/model/BrowseNodeReturnTrendPoint
     * @class
     * @param dateRange {DateRange}
     * @param browseNodeMetrics {BrowseNodeTrendMetrics}
     */
    constructor(dateRange: DateRange, browseNodeMetrics: BrowseNodeTrendMetrics);
    dateRange: DateRange;
    browseNodeMetrics: BrowseNodeTrendMetrics;
}
import { DateRange } from './DateRange.js';
import { BrowseNodeTrendMetrics } from './BrowseNodeTrendMetrics.js';
//# sourceMappingURL=BrowseNodeReturnTrendPoint.d.ts.map