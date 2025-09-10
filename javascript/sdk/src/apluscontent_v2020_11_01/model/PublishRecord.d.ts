/**
 * The PublishRecord model module.
 * @module apluscontent_v2020_11_01/model/PublishRecord
 * @version 2020-11-01
 */
export class PublishRecord {
    /**
     * Constructs a <code>PublishRecord</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PublishRecord} obj Optional instance to populate.
     * @return {PublishRecord} The populated <code>PublishRecord</code> instance.
     */
    static constructFromObject(data: any, obj: PublishRecord): PublishRecord;
    /**
     * Constructs a new <code>PublishRecord</code>.
     * The full context for an A+ Content publishing event.
     * @alias module:apluscontent_v2020_11_01/model/PublishRecord
     * @class
     * @param marketplaceId {String} The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     * @param locale {String} The IETF language tag, which supports the primary language subtag and one secondary language subtag. The secondary language subtag is usually a regional designation. This doesn't support subtags other than the primary and secondary subtags. **Pattern:** ^[a-z]{2,}-[A-Z0-9]{2,}$
     * @param asin {String} The Amazon Standard Identification Number (ASIN).
     * @param contentType {ContentType}
     * @param contentReferenceKey {String} A unique reference key for the A+ Content document. A content reference key cannot form a permalink and might change in the future. A content reference key is not guaranteed to match any A+ content identifier.
     */
    constructor(marketplaceId: string, locale: string, asin: string, contentType: ContentType, contentReferenceKey: string);
    marketplaceId: string;
    locale: string;
    asin: string;
    contentType: ContentType;
    contentReferenceKey: string;
    /**
     * The A+ Content document subtype. This represents a special-purpose type of an A+ Content document. Not every A+ Content document type has a subtype, and subtypes can change at any time.
     * @member {String} contentSubType
     * @type {String}
     */
    contentSubType: string;
}
import { ContentType } from './ContentType.js';
//# sourceMappingURL=PublishRecord.d.ts.map