/**
 * The ContentDocument model module.
 * @module apluscontent_v2020_11_01/model/ContentDocument
 * @version 2020-11-01
 */
export class ContentDocument {
    /**
     * Constructs a <code>ContentDocument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ContentDocument} obj Optional instance to populate.
     * @return {ContentDocument} The populated <code>ContentDocument</code> instance.
     */
    static constructFromObject(data: any, obj: ContentDocument): ContentDocument;
    /**
     * Constructs a new <code>ContentDocument</code>.
     * The A+ Content document. This is the enhanced content that is published to product detail pages.
     * @alias module:apluscontent_v2020_11_01/model/ContentDocument
     * @class
     * @param name {String} The A+ Content document name.
     * @param contentType {ContentType}
     * @param locale {String} The IETF language tag, which supports the primary language subtag and one secondary language subtag. The secondary language subtag is usually a regional designation. This doesn't support subtags other than the primary and secondary subtags. **Pattern:** ^[a-z]{2,}-[A-Z0-9]{2,}$
     * @param contentModuleList {Array[]} A list of A+ Content modules.
     */
    constructor(name: string, contentType: ContentType, locale: string, contentModuleList: any[][]);
    name: string;
    contentType: ContentType;
    locale: string;
    contentModuleList: any[][];
    /**
     * The A+ Content document subtype. This represents a special-purpose type of an A+ Content document. Not every A+ Content document type has a subtype, and subtypes can change at any time.
     * @member {String} contentSubType
     * @type {String}
     */
    contentSubType: string;
}
import { ContentType } from './ContentType.js';
//# sourceMappingURL=ContentDocument.d.ts.map