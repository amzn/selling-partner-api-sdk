/**
 * The AsinMetadata model module.
 * @module apluscontent_v2020_11_01/model/AsinMetadata
 * @version 2020-11-01
 */
export class AsinMetadata {
    /**
     * Constructs a <code>AsinMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AsinMetadata} obj Optional instance to populate.
     * @return {AsinMetadata} The populated <code>AsinMetadata</code> instance.
     */
    static constructFromObject(data: any, obj: AsinMetadata): AsinMetadata;
    /**
     * Constructs a new <code>AsinMetadata</code>.
     * The A+ Content ASIN with additional metadata for content management. If you don&#39;t include the &#x60;includedDataSet&#x60; parameter in a call to the &#x60;listContentDocumentAsinRelations&#x60; operation, the related ASINs are returned without metadata.
     * @alias module:apluscontent_v2020_11_01/model/AsinMetadata
     * @class
     * @param asin {String} The Amazon Standard Identification Number (ASIN).
     */
    constructor(asin: string);
    asin: string;
    /**
     * The set of ASIN badges.
     * @member {Array[]} badgeSet
     * @type {Array[]}
     */
    badgeSet: any[][];
    /**
     * The Amazon Standard Identification Number (ASIN).
     * @member {String} parent
     * @type {String}
     */
    parent: string;
    /**
     * The title for the ASIN in the Amazon catalog.
     * @member {String} title
     * @type {String}
     */
    title: string;
    /**
     * The default image for the ASIN in the Amazon catalog.
     * @member {String} imageUrl
     * @type {String}
     */
    imageUrl: string;
    /**
     * A set of content reference keys.
     * @member {Array[]} contentReferenceKeySet
     * @type {Array[]}
     */
    contentReferenceKeySet: any[][];
}
//# sourceMappingURL=AsinMetadata.d.ts.map