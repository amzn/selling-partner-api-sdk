/**
 * The SearchContentPublishRecordsResponse model module.
 * @module apluscontent_v2020_11_01/model/SearchContentPublishRecordsResponse
 * @version 2020-11-01
 */
export class SearchContentPublishRecordsResponse {
    /**
     * Constructs a <code>SearchContentPublishRecordsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SearchContentPublishRecordsResponse} obj Optional instance to populate.
     * @return {SearchContentPublishRecordsResponse} The populated <code>SearchContentPublishRecordsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: SearchContentPublishRecordsResponse): SearchContentPublishRecordsResponse;
    /**
     * Constructs a new <code>SearchContentPublishRecordsResponse</code>.
     * @alias module:apluscontent_v2020_11_01/model/SearchContentPublishRecordsResponse
     * @class
     * @implements module:apluscontent_v2020_11_01/model/AplusPaginatedResponse
     * @param publishRecordList {Array[]} A list of A+ Content publishing records.
     */
    constructor(publishRecordList: any[][]);
    publishRecordList: any[][];
    /**
     * A set of messages to the user, such as warnings or comments.
     * @member {Array[]} warnings
     * @type {Array[]}
     */
    warnings: any[][];
    /**
     * A token that you use to fetch a specific page when there are multiple pages of results.
     * @member {String} nextPageToken
     * @type {String}
     */
    nextPageToken: string;
}
//# sourceMappingURL=SearchContentPublishRecordsResponse.d.ts.map