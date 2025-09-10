/**
 * The BrowseNodeReviewTrendPoint model module.
 * @module customerFeedback_2024_06_01/model/BrowseNodeReviewTrendPoint
 * @version 2024-06-01
 */
export class BrowseNodeReviewTrendPoint {
    /**
     * Constructs a <code>BrowseNodeReviewTrendPoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BrowseNodeReviewTrendPoint} obj Optional instance to populate.
     * @return {BrowseNodeReviewTrendPoint} The populated <code>BrowseNodeReviewTrendPoint</code> instance.
     */
    static constructFromObject(data: any, obj: BrowseNodeReviewTrendPoint): BrowseNodeReviewTrendPoint;
    /**
     * Constructs a new <code>BrowseNodeReviewTrendPoint</code>.
     * The browse node&#39;s review metrics for a certain month.
     * @alias module:customerFeedback_2024_06_01/model/BrowseNodeReviewTrendPoint
     * @class
     * @param dateRange {DateRange}
     * @param browseNodeMetrics {BrowseNodeReviewTrendMetrics}
     */
    constructor(dateRange: DateRange, browseNodeMetrics: BrowseNodeReviewTrendMetrics);
    dateRange: DateRange;
    browseNodeMetrics: BrowseNodeReviewTrendMetrics;
}
import { DateRange } from './DateRange.js';
import { BrowseNodeReviewTrendMetrics } from './BrowseNodeReviewTrendMetrics.js';
//# sourceMappingURL=BrowseNodeReviewTrendPoint.d.ts.map