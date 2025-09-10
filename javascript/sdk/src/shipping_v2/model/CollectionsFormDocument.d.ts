/**
 * The CollectionsFormDocument model module.
 * @module shipping_v2/model/CollectionsFormDocument
 * @version v2
 */
export class CollectionsFormDocument {
    /**
     * Constructs a <code>CollectionsFormDocument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CollectionsFormDocument} obj Optional instance to populate.
     * @return {CollectionsFormDocument} The populated <code>CollectionsFormDocument</code> instance.
     */
    static constructFromObject(data: any, obj: CollectionsFormDocument): CollectionsFormDocument;
    /**
     * Base64 document Value of Collection.
     * @member {String} base64EncodedContent
     * @type {String}
     */
    base64EncodedContent: string;
    /**
     * Collection Document format is PDF.
     * @member {String} documentFormat
     * @type {String}
     */
    documentFormat: string;
}
//# sourceMappingURL=CollectionsFormDocument.d.ts.map