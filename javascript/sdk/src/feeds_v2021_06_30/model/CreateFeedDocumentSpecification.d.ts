/**
 * The CreateFeedDocumentSpecification model module.
 * @module feeds_v2021_06_30/model/CreateFeedDocumentSpecification
 * @version 2021-06-30
 */
export class CreateFeedDocumentSpecification {
    /**
     * Constructs a <code>CreateFeedDocumentSpecification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateFeedDocumentSpecification} obj Optional instance to populate.
     * @return {CreateFeedDocumentSpecification} The populated <code>CreateFeedDocumentSpecification</code> instance.
     */
    static constructFromObject(data: any, obj: CreateFeedDocumentSpecification): CreateFeedDocumentSpecification;
    /**
     * Constructs a new <code>CreateFeedDocumentSpecification</code>.
     * Specifies the content type for the createFeedDocument operation.
     * @alias module:feeds_v2021_06_30/model/CreateFeedDocumentSpecification
     * @class
     * @param contentType {String} The content type of the feed.
     */
    constructor(contentType: string);
    contentType: string;
}
//# sourceMappingURL=CreateFeedDocumentSpecification.d.ts.map