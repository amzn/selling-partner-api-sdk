/**
 * The CreateFeedResponse model module.
 * @module feeds_v2021_06_30/model/CreateFeedResponse
 * @version 2021-06-30
 */
export class CreateFeedResponse {
    /**
     * Constructs a <code>CreateFeedResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateFeedResponse} obj Optional instance to populate.
     * @return {CreateFeedResponse} The populated <code>CreateFeedResponse</code> instance.
     */
    static constructFromObject(data: any, obj: CreateFeedResponse): CreateFeedResponse;
    /**
     * Constructs a new <code>CreateFeedResponse</code>.
     * Response schema.
     * @alias module:feeds_v2021_06_30/model/CreateFeedResponse
     * @class
     * @param feedId {String} The identifier for the feed. This identifier is unique only in combination with a seller ID.
     */
    constructor(feedId: string);
    feedId: string;
}
//# sourceMappingURL=CreateFeedResponse.d.ts.map