/**
 * The BrowseNodeReturnTopicsResponse model module.
 * @module customerFeedback_2024_06_01/model/BrowseNodeReturnTopicsResponse
 * @version 2024-06-01
 */
export class BrowseNodeReturnTopicsResponse {
    /**
     * Constructs a <code>BrowseNodeReturnTopicsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BrowseNodeReturnTopicsResponse} obj Optional instance to populate.
     * @return {BrowseNodeReturnTopicsResponse} The populated <code>BrowseNodeReturnTopicsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: BrowseNodeReturnTopicsResponse): BrowseNodeReturnTopicsResponse;
    /**
     * Constructs a new <code>BrowseNodeReturnTopicsResponse</code>.
     * The response for the &#x60;getBrowseNodeReturnTopics&#x60; operation.
     * @alias module:customerFeedback_2024_06_01/model/BrowseNodeReturnTopicsResponse
     * @class
     * @param browseNodeId {String} The requested browse node id. A browse node id is the unique identifier of a given browse node.
     * @param displayName {String} The display name of the browse node, as visible on the Amazon retail website.
     * @param marketplaceId {String} The requested marketplace id.
     * @param countryCode {String} The two digit country code of requested marketplace id, in ISO 3166-1 alpha-2 format.
     * @param dateRange {DateRange}
     * @param topics {[BrowseNodeReturnTopics]} The list of browse node return topics.
     */
    constructor(browseNodeId: string, displayName: string, marketplaceId: string, countryCode: string, dateRange: DateRange, topics: [BrowseNodeReturnTopics]);
    browseNodeId: string;
    displayName: string;
    marketplaceId: string;
    countryCode: string;
    dateRange: DateRange;
    topics: BrowseNodeReturnTopics[];
}
import { DateRange } from './DateRange.js';
import { BrowseNodeReturnTopics } from './BrowseNodeReturnTopics.js';
//# sourceMappingURL=BrowseNodeReturnTopicsResponse.d.ts.map