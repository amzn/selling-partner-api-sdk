/**
 * The RelatedIdentifier model module.
 * @module finances_v0/model/RelatedIdentifier
 * @version v0
 */
export class RelatedIdentifier {
    /**
     * Constructs a <code>RelatedIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {RelatedIdentifier} obj Optional instance to populate.
     * @return {RelatedIdentifier} The populated <code>RelatedIdentifier</code> instance.
     */
    static constructFromObject(data: any, obj: RelatedIdentifier): RelatedIdentifier;
    /**
     * Enumerated set of related business identifier names.
     * @member {String} relatedIdentifierName
     * @type {String}
     */
    relatedIdentifierName: string;
    /**
     * The corresponding value to `RelatedIdentifierName`.
     * @member {String} relatedIdentifierValue
     * @type {String}
     */
    relatedIdentifierValue: string;
}
export namespace RelatedIdentifier {
    namespace RelatedIdentifierNameEnum {
        let ORDER_ID: string;
    }
    /**
     * *
     */
    type RelatedIdentifierNameEnum = string;
}
//# sourceMappingURL=RelatedIdentifier.d.ts.map