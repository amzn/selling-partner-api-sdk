/**
 * The ReportDocument model module.
 * @module reports_v2021_06_30/model/ReportDocument
 * @version 2021-06-30
 */
export class ReportDocument {
    /**
     * Constructs a <code>ReportDocument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ReportDocument} obj Optional instance to populate.
     * @return {ReportDocument} The populated <code>ReportDocument</code> instance.
     */
    static constructFromObject(data: any, obj: ReportDocument): ReportDocument;
    /**
     * Constructs a new <code>ReportDocument</code>.
     * Information required for the report document.
     * @alias module:reports_v2021_06_30/model/ReportDocument
     * @class
     * @param reportDocumentId {String} The identifier for the report document. This identifier is unique only in combination with a seller ID.
     * @param url {String} A presigned URL for the report document. If `compressionAlgorithm` is not returned, you can download the report directly from this URL. This URL expires after 5 minutes.
     */
    constructor(reportDocumentId: string, url: string);
    reportDocumentId: string;
    url: string;
    /**
     * If the report document contents have been compressed, the compression algorithm used is returned in this property and you must decompress the report when you download. Otherwise, you can download the report directly. Refer to [Step 2. Download the report](https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-retrieve-a-report#step-2-download-the-report) in the use case guide, where sample code is provided.
     * @member {String} compressionAlgorithm
     * @type {String}
     */
    compressionAlgorithm: string;
}
export namespace ReportDocument {
    namespace CompressionAlgorithmEnum {
        let GZIP: string;
    }
    /**
     * *
     */
    type CompressionAlgorithmEnum = string;
}
//# sourceMappingURL=ReportDocument.d.ts.map