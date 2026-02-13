/**
 * The GetFeedsResponse model module.
 * @module feeds_v2021_06_30/model/GetFeedsResponse
 * @version 2021-06-30
 */
export class GetFeedsResponse {
    /**
     * Constructs a <code>GetFeedsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetFeedsResponse} obj Optional instance to populate.
     * @return {GetFeedsResponse} The populated <code>GetFeedsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetFeedsResponse): GetFeedsResponse;
    /**
     * Constructs a new <code>GetFeedsResponse</code>.
     * Response schema.
     * @alias module:feeds_v2021_06_30/model/GetFeedsResponse
     * @class
     * @param feeds {Feed[]} A list of feeds.
     */
    constructor(feeds: Feed[]);
    feeds: Feed[];
    /**
     * Returned when the number of results exceeds pageSize. To get the next page of results, call the getFeeds operation with this token as the only parameter.
     * @member {String} nextToken
     * @type {String}
     */
    nextToken: string;
}
import { Feed } from './Feed.js';
//# sourceMappingURL=GetFeedsResponse.d.ts.map