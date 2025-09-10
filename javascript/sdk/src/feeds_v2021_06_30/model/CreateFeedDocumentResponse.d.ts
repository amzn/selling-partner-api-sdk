/**
 * The CreateFeedDocumentResponse model module.
 * @module feeds_v2021_06_30/model/CreateFeedDocumentResponse
 * @version 2021-06-30
 */
export class CreateFeedDocumentResponse {
    /**
     * Constructs a <code>CreateFeedDocumentResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateFeedDocumentResponse} obj Optional instance to populate.
     * @return {CreateFeedDocumentResponse} The populated <code>CreateFeedDocumentResponse</code> instance.
     */
    static constructFromObject(data: any, obj: CreateFeedDocumentResponse): CreateFeedDocumentResponse;
    /**
     * Constructs a new <code>CreateFeedDocumentResponse</code>.
     * Information required to upload a feed document&#39;s contents.
     * @alias module:feeds_v2021_06_30/model/CreateFeedDocumentResponse
     * @class
     * @param feedDocumentId {String} The identifier of the feed document.
     * @param url {String} The presigned URL for uploading the feed contents. This URL expires after 5 minutes.
     */
    constructor(feedDocumentId: string, url: string);
    feedDocumentId: string;
    url: string;
}
//# sourceMappingURL=CreateFeedDocumentResponse.d.ts.map