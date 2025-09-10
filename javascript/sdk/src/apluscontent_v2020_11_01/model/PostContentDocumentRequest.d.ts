/**
 * The PostContentDocumentRequest model module.
 * @module apluscontent_v2020_11_01/model/PostContentDocumentRequest
 * @version 2020-11-01
 */
export class PostContentDocumentRequest {
    /**
     * Constructs a <code>PostContentDocumentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PostContentDocumentRequest} obj Optional instance to populate.
     * @return {PostContentDocumentRequest} The populated <code>PostContentDocumentRequest</code> instance.
     */
    static constructFromObject(data: any, obj: PostContentDocumentRequest): PostContentDocumentRequest;
    /**
     * Constructs a new <code>PostContentDocumentRequest</code>.
     * @alias module:apluscontent_v2020_11_01/model/PostContentDocumentRequest
     * @class
     * @param contentDocument {ContentDocument}
     */
    constructor(contentDocument: ContentDocument);
    contentDocument: ContentDocument;
}
import { ContentDocument } from './ContentDocument.js';
//# sourceMappingURL=PostContentDocumentRequest.d.ts.map