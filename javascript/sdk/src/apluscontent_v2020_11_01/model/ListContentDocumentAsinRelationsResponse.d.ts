/**
 * The ListContentDocumentAsinRelationsResponse model module.
 * @module apluscontent_v2020_11_01/model/ListContentDocumentAsinRelationsResponse
 * @version 2020-11-01
 */
export class ListContentDocumentAsinRelationsResponse {
    /**
     * Constructs a <code>ListContentDocumentAsinRelationsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListContentDocumentAsinRelationsResponse} obj Optional instance to populate.
     * @return {ListContentDocumentAsinRelationsResponse} The populated <code>ListContentDocumentAsinRelationsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ListContentDocumentAsinRelationsResponse): ListContentDocumentAsinRelationsResponse;
    /**
     * Constructs a new <code>ListContentDocumentAsinRelationsResponse</code>.
     * @alias module:apluscontent_v2020_11_01/model/ListContentDocumentAsinRelationsResponse
     * @class
     * @implements module:apluscontent_v2020_11_01/model/AplusPaginatedResponse
     * @param asinMetadataSet {AsinMetadata[]} The set of ASIN metadata.
     */
    constructor(asinMetadataSet: AsinMetadata[]);
    asinMetadataSet: AsinMetadata[];
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
import { AsinMetadata } from './AsinMetadata.js';
import { Error } from './Error.js';
//# sourceMappingURL=ListContentDocumentAsinRelationsResponse.d.ts.map