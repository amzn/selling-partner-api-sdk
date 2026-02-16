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
     * @param contentMetadataRecords {ContentMetadataRecord[]} A list of A+ Content metadata records.
     */
    constructor(contentMetadataRecords: ContentMetadataRecord[]);
    contentMetadataRecords: ContentMetadataRecord[];
    /**
     * A set of messages to the user, such as warnings or comments.
     * @member {Error[]} warnings
     * @type {Error[]}
     */
    warnings: Error[];
    /**
     * A token that you use to fetch a specific page when there are multiple pages of results.
     * @member {String} nextPageToken
     * @type {String}
     */
    nextPageToken: string;
}
import { ContentMetadataRecord } from './ContentMetadataRecord.js';
import { Error } from './Error.js';
//# sourceMappingURL=SearchContentDocumentsResponse.d.ts.map