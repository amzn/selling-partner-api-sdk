/**
 * The CreateFeedSpecification model module.
 * @module feeds_v2021_06_30/model/CreateFeedSpecification
 * @version 2021-06-30
 */
export class CreateFeedSpecification {
    /**
     * Constructs a <code>CreateFeedSpecification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateFeedSpecification} obj Optional instance to populate.
     * @return {CreateFeedSpecification} The populated <code>CreateFeedSpecification</code> instance.
     */
    static constructFromObject(data: any, obj: CreateFeedSpecification): CreateFeedSpecification;
    /**
     * Constructs a new <code>CreateFeedSpecification</code>.
     * Information required to create the feed.
     * @alias module:feeds_v2021_06_30/model/CreateFeedSpecification
     * @class
     * @param feedType {String} The feed type.
     * @param marketplaceIds {String[]} A list of identifiers for marketplaces that you want the feed to be applied to.
     * @param inputFeedDocumentId {String} The document identifier returned by the createFeedDocument operation. Upload the feed document contents before calling the createFeed operation.
     */
    constructor(feedType: string, marketplaceIds: string[], inputFeedDocumentId: string);
    feedType: string;
    marketplaceIds: string[];
    inputFeedDocumentId: string;
    /**
     * Additional options to control the feed. These vary by feed type.
     * @member {{String: String}} feedOptions
     * @type {{String: String}}
     */
    feedOptions: {
        String: string;
    };
}
//# sourceMappingURL=CreateFeedSpecification.d.ts.map