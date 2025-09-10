/**
 * The FeedDocument model module.
 * @module feeds_v2021_06_30/model/FeedDocument
 * @version 2021-06-30
 */
export class FeedDocument {
    /**
     * Constructs a <code>FeedDocument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FeedDocument} obj Optional instance to populate.
     * @return {FeedDocument} The populated <code>FeedDocument</code> instance.
     */
    static constructFromObject(data: any, obj: FeedDocument): FeedDocument;
    /**
     * Constructs a new <code>FeedDocument</code>.
     * Information required for the feed document.
     * @alias module:feeds_v2021_06_30/model/FeedDocument
     * @class
     * @param feedDocumentId {String} The identifier for the feed document. This identifier is unique only in combination with a seller ID.
     * @param url {String} A presigned URL for the feed document. If `compressionAlgorithm` is not returned, you can download the feed directly from this URL. This URL expires after 5 minutes.
     */
    constructor(feedDocumentId: string, url: string);
    feedDocumentId: string;
    url: string;
    /**
     * If the feed document contents have been compressed, the compression algorithm used is returned in this property and you must decompress the feed when you download. Otherwise, you can download the feed directly. Refer to [Step 7. Download the feed processing report](doc:feeds-api-v2021-06-30-use-case-guide#step-7-download-the-feed-processing-report) in the use case guide, where sample code is provided.
     * @member {String} compressionAlgorithm
     * @type {String}
     */
    compressionAlgorithm: string;
}
export namespace FeedDocument {
    namespace CompressionAlgorithmEnum {
        let GZIP: string;
    }
    /**
     * *
     */
    type CompressionAlgorithmEnum = string;
}
//# sourceMappingURL=FeedDocument.d.ts.map