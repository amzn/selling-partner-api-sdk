/**
 * The BrowseNodeReviewTopicsResponse model module.
 * @module customerFeedback_2024_06_01/model/BrowseNodeReviewTopicsResponse
 * @version 2024-06-01
 */
export class BrowseNodeReviewTopicsResponse {
    /**
     * Constructs a <code>BrowseNodeReviewTopicsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BrowseNodeReviewTopicsResponse} obj Optional instance to populate.
     * @return {BrowseNodeReviewTopicsResponse} The populated <code>BrowseNodeReviewTopicsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: BrowseNodeReviewTopicsResponse): BrowseNodeReviewTopicsResponse;
    /**
     * Constructs a new <code>BrowseNodeReviewTopicsResponse</code>.
     * The response for the &#x60;getBrowseNodeReviewTopics&#x60; operation.
     * @alias module:customerFeedback_2024_06_01/model/BrowseNodeReviewTopicsResponse
     * @class
     * @param browseNodeId {String} The requested browse node id. A browse node id is the unique identifier of a given browse node.
     * @param displayName {String} The display name of the requested browse node id. The display name of the browse node as visible on the Amazon retail website.
     * @param marketplaceId {String} The requested marketplace id.
     * @param countryCode {String} The two digit country code of requested marketplace id, in ISO 3166-1 alpha-2 format.
     * @param dateRange {DateRange}
     * @param topics {BrowseNodeReviewTopics}
     */
    constructor(browseNodeId: string, displayName: string, marketplaceId: string, countryCode: string, dateRange: DateRange, topics: BrowseNodeReviewTopics);
    browseNodeId: string;
    displayName: string;
    marketplaceId: string;
    countryCode: string;
    dateRange: DateRange;
    topics: BrowseNodeReviewTopics;
}
import { DateRange } from './DateRange.js';
import { BrowseNodeReviewTopics } from './BrowseNodeReviewTopics.js';
//# sourceMappingURL=BrowseNodeReviewTopicsResponse.d.ts.map