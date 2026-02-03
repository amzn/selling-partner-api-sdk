/**
 * The Feed model module.
 * @module feeds_v2021_06_30/model/Feed
 * @version 2021-06-30
 */
export class Feed {
    /**
     * Constructs a <code>Feed</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Feed} obj Optional instance to populate.
     * @return {Feed} The populated <code>Feed</code> instance.
     */
    static constructFromObject(data: any, obj: Feed): Feed;
    /**
     * Constructs a new <code>Feed</code>.
     * Detailed information about the feed.
     * @alias module:feeds_v2021_06_30/model/Feed
     * @class
     * @param feedId {String} The identifier for the feed. This identifier is unique only in combination with a seller ID.
     * @param feedType {String} The feed type.
     * @param createdTime {Date} The date and time when the feed was created, in ISO 8601 date time format.
     * @param processingStatus {String} The processing status of the feed.
     */
    constructor(feedId: string, feedType: string, createdTime: Date, processingStatus: string);
    feedId: string;
    feedType: string;
    createdTime: Date;
    processingStatus: string;
    /**
     * A list of identifiers for the marketplaces that the feed is applied to.
     * @member {Array[]} marketplaceIds
     * @type {Array[]}
     */
    marketplaceIds: any[][];
    /**
     * The date and time when feed processing started, in ISO 8601 date time format.
     * @member {Date} processingStartTime
     * @type {Date}
     */
    processingStartTime: Date;
    /**
     * The date and time when feed processing completed, in ISO 8601 date time format.
     * @member {Date} processingEndTime
     * @type {Date}
     */
    processingEndTime: Date;
    /**
     * The identifier for the feed document. This identifier is unique only in combination with a seller ID.
     * @member {String} resultFeedDocumentId
     * @type {String}
     */
    resultFeedDocumentId: string;
}
export namespace Feed {
    namespace ProcessingStatusEnum {
        let CANCELLED: string;
        let DONE: string;
        let FATAL: string;
        let IN_PROGRESS: string;
        let IN_QUEUE: string;
    }
    /**
     * *
     */
    type ProcessingStatusEnum = string;
}
//# sourceMappingURL=Feed.d.ts.map