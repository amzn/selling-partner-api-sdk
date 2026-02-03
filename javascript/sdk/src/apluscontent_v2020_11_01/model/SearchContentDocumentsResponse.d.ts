/**
 * The SearchContentDocumentsResponse model module.
 * @module apluscontent_v2020_11_01/model/SearchContentDocumentsResponse
 * @version 2020-11-01
 */
export class SearchContentDocumentsResponse {
    /**
     * Constructs a <code>SearchContentDocumentsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SearchContentDocumentsResponse} obj Optional instance to populate.
     * @return {SearchContentDocumentsResponse} The populated <code>SearchContentDocumentsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: SearchContentDocumentsResponse): SearchContentDocumentsResponse;
    /**
     * Constructs a new <code>SearchContentDocumentsResponse</code>.
     * @alias module:apluscontent_v2020_11_01/model/SearchContentDocumentsResponse
     * @class
     * @implements module:apluscontent_v2020_11_01/model/AplusPaginatedResponse
     * @param contentMetadataRecords {Array[]} A list of A+ Content metadata records.
     */
    constructor(contentMetadataRecords: any[][]);
    contentMetadataRecords: any[][];
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
//# sourceMappingURL=SearchContentDocumentsResponse.d.ts.map