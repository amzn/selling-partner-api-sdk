/**
 * The ItemReviewTrendPoint model module.
 * @module customerFeedback_2024_06_01/model/ItemReviewTrendPoint
 * @version 2024-06-01
 */
export class ItemReviewTrendPoint {
    /**
     * Constructs a <code>ItemReviewTrendPoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemReviewTrendPoint} obj Optional instance to populate.
     * @return {ItemReviewTrendPoint} The populated <code>ItemReviewTrendPoint</code> instance.
     */
    static constructFromObject(data: any, obj: ItemReviewTrendPoint): ItemReviewTrendPoint;
    /**
     * Constructs a new <code>ItemReviewTrendPoint</code>.
     * The review metrics for a certain month.
     * @alias module:customerFeedback_2024_06_01/model/ItemReviewTrendPoint
     * @class
     * @param dateRange {DateRange}
     * @param asinMetrics {ReviewTrendMetrics}
     */
    constructor(dateRange: DateRange, asinMetrics: ReviewTrendMetrics);
    dateRange: DateRange;
    asinMetrics: ReviewTrendMetrics;
    /**
     * @member {ReviewTrendMetrics} parentAsinMetrics
     * @type {ReviewTrendMetrics}
     */
    parentAsinMetrics: ReviewTrendMetrics;
    /**
     * @member {BrowseNodeTrendMetrics} browseNodeMetrics
     * @type {BrowseNodeTrendMetrics}
     */
    browseNodeMetrics: BrowseNodeTrendMetrics;
}
import { DateRange } from './DateRange.js';
import { ReviewTrendMetrics } from './ReviewTrendMetrics.js';
import { BrowseNodeTrendMetrics } from './BrowseNodeTrendMetrics.js';
//# sourceMappingURL=ItemReviewTrendPoint.d.ts.map