/**
 * The PostContentDocumentResponse model module.
 * @module apluscontent_v2020_11_01/model/PostContentDocumentResponse
 * @version 2020-11-01
 */
export class PostContentDocumentResponse {
    /**
     * Constructs a <code>PostContentDocumentResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PostContentDocumentResponse} obj Optional instance to populate.
     * @return {PostContentDocumentResponse} The populated <code>PostContentDocumentResponse</code> instance.
     */
    static constructFromObject(data: any, obj: PostContentDocumentResponse): PostContentDocumentResponse;
    /**
     * Constructs a new <code>PostContentDocumentResponse</code>.
     * @alias module:apluscontent_v2020_11_01/model/PostContentDocumentResponse
     * @class
     * @implements module:apluscontent_v2020_11_01/model/AplusResponse
     * @param contentReferenceKey {String} A unique reference key for the A+ Content document. A content reference key cannot form a permalink and might change in the future. A content reference key is not guaranteed to match any A+ content identifier.
     */
    constructor(contentReferenceKey: string);
    contentReferenceKey: string;
    /**
     * A set of messages to the user, such as warnings or comments.
     * @member {[Error]} warnings
     * @type {[Error]}
     */
    warnings: [Error];
}
import { Error } from './Error.js';
//# sourceMappingURL=PostContentDocumentResponse.d.ts.map