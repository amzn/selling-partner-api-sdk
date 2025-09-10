/**
 * The ContentRecord model module.
 * @module apluscontent_v2020_11_01/model/ContentRecord
 * @version 2020-11-01
 */
export class ContentRecord {
    /**
     * Constructs a <code>ContentRecord</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ContentRecord} obj Optional instance to populate.
     * @return {ContentRecord} The populated <code>ContentRecord</code> instance.
     */
    static constructFromObject(data: any, obj: ContentRecord): ContentRecord;
    /**
     * Constructs a new <code>ContentRecord</code>.
     * A content document with additional information for content management.
     * @alias module:apluscontent_v2020_11_01/model/ContentRecord
     * @class
     * @param contentReferenceKey {String} A unique reference key for the A+ Content document. A content reference key cannot form a permalink and might change in the future. A content reference key is not guaranteed to match any A+ content identifier.
     */
    constructor(contentReferenceKey: string);
    contentReferenceKey: string;
    /**
     * @member {ContentMetadata} contentMetadata
     * @type {ContentMetadata}
     */
    contentMetadata: ContentMetadata;
    /**
     * @member {ContentDocument} contentDocument
     * @type {ContentDocument}
     */
    contentDocument: ContentDocument;
}
import { ContentMetadata } from './ContentMetadata.js';
import { ContentDocument } from './ContentDocument.js';
//# sourceMappingURL=ContentRecord.d.ts.map