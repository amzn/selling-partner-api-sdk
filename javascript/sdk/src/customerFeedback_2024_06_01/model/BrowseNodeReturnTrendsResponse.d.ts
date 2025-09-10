/**
 * The BrowseNodeReturnTrendsResponse model module.
 * @module customerFeedback_2024_06_01/model/BrowseNodeReturnTrendsResponse
 * @version 2024-06-01
 */
export class BrowseNodeReturnTrendsResponse {
    /**
     * Constructs a <code>BrowseNodeReturnTrendsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BrowseNodeReturnTrendsResponse} obj Optional instance to populate.
     * @return {BrowseNodeReturnTrendsResponse} The populated <code>BrowseNodeReturnTrendsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: BrowseNodeReturnTrendsResponse): BrowseNodeReturnTrendsResponse;
    /**
     * Constructs a new <code>BrowseNodeReturnTrendsResponse</code>.
     * The response for the &#x60;getBrowseNodeReturnTrends&#x60; operation.
     * @alias module:customerFeedback_2024_06_01/model/BrowseNodeReturnTrendsResponse
     * @class
     * @param browseNodeId {String} The requested browse node id. A browse node id is the unique identifier of a given browse node.
     * @param displayName {String} The display name of the browse node, as visible on the Amazon retail website.
     * @param marketplaceId {String} The requested marketplace id.
     * @param countryCode {String} The two digit country code of requested marketplace id, in ISO 3166-1 alpha-2 format.
     * @param dateRange {DateRange}
     * @param returnTrends {[BrowseNodeReturnTrend]} The browse node return trends.
     */
    constructor(browseNodeId: string, displayName: string, marketplaceId: string, countryCode: string, dateRange: DateRange, returnTrends: [BrowseNodeReturnTrend]);
    browseNodeId: string;
    displayName: string;
    marketplaceId: string;
    countryCode: string;
    dateRange: DateRange;
    returnTrends: [BrowseNodeReturnTrend];
}
import { DateRange } from './DateRange.js';
import { BrowseNodeReturnTrend } from './BrowseNodeReturnTrend.js';
//# sourceMappingURL=BrowseNodeReturnTrendsResponse.d.ts.map