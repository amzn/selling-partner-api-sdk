/**
 * The ContentMetadataRecord model module.
 * @module apluscontent_v2020_11_01/model/ContentMetadataRecord
 * @version 2020-11-01
 */
export class ContentMetadataRecord {
    /**
     * Constructs a <code>ContentMetadataRecord</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ContentMetadataRecord} obj Optional instance to populate.
     * @return {ContentMetadataRecord} The populated <code>ContentMetadataRecord</code> instance.
     */
    static constructFromObject(data: any, obj: ContentMetadataRecord): ContentMetadataRecord;
    /**
     * Constructs a new <code>ContentMetadataRecord</code>.
     * The metadata for an A+ Content document, with additional information for content management.
     * @alias module:apluscontent_v2020_11_01/model/ContentMetadataRecord
     * @class
     * @param contentReferenceKey {String} A unique reference key for the A+ Content document. A content reference key cannot form a permalink and might change in the future. A content reference key is not guaranteed to match any A+ content identifier.
     * @param contentMetadata {ContentMetadata}
     */
    constructor(contentReferenceKey: string, contentMetadata: ContentMetadata);
    contentReferenceKey: string;
    contentMetadata: ContentMetadata;
}
import { ContentMetadata } from './ContentMetadata.js';
//# sourceMappingURL=ContentMetadataRecord.d.ts.map