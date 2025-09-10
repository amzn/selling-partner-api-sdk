/**
 * The ContentMetadata model module.
 * @module apluscontent_v2020_11_01/model/ContentMetadata
 * @version 2020-11-01
 */
export class ContentMetadata {
    /**
     * Constructs a <code>ContentMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ContentMetadata} obj Optional instance to populate.
     * @return {ContentMetadata} The populated <code>ContentMetadata</code> instance.
     */
    static constructFromObject(data: any, obj: ContentMetadata): ContentMetadata;
    /**
     * Constructs a new <code>ContentMetadata</code>.
     * The A+ Content document&#39;s metadata.
     * @alias module:apluscontent_v2020_11_01/model/ContentMetadata
     * @class
     * @param name {String} The A+ Content document's name.
     * @param marketplaceId {String} The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     * @param status {ContentStatus}
     * @param badgeSet {[ContentBadge]} The set of content badges.
     * @param updateTime {Date} The approximate age of the A+ Content document and metadata.
     */
    constructor(name: string, marketplaceId: string, status: ContentStatus, badgeSet: [ContentBadge], updateTime: Date);
    name: string;
    marketplaceId: string;
    status: ContentStatus;
    badgeSet: [ContentBadge];
    updateTime: Date;
}
import { ContentStatus } from './ContentStatus.js';
import { ContentBadge } from './ContentBadge.js';
//# sourceMappingURL=ContentMetadata.d.ts.map