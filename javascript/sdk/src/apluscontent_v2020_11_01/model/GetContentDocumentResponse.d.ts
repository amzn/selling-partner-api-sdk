/**
 * The GetContentDocumentResponse model module.
 * @module apluscontent_v2020_11_01/model/GetContentDocumentResponse
 * @version 2020-11-01
 */
export class GetContentDocumentResponse {
    /**
     * Constructs a <code>GetContentDocumentResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetContentDocumentResponse} obj Optional instance to populate.
     * @return {GetContentDocumentResponse} The populated <code>GetContentDocumentResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetContentDocumentResponse): GetContentDocumentResponse;
    /**
     * Constructs a new <code>GetContentDocumentResponse</code>.
     * @alias module:apluscontent_v2020_11_01/model/GetContentDocumentResponse
     * @class
     * @implements module:apluscontent_v2020_11_01/model/AplusResponse
     * @param contentRecord {ContentRecord}
     */
    constructor(contentRecord: ContentRecord);
    contentRecord: ContentRecord;
    /**
     * A set of messages to the user, such as warnings or comments.
     * @member {Error[]} warnings
     * @type {Error[]}
     */
    warnings: Error[];
}
import { ContentRecord } from './ContentRecord.js';
import { Error } from './Error.js';
//# sourceMappingURL=GetContentDocumentResponse.d.ts.map