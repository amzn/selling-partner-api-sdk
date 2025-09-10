/**
 * The DocumentDownload model module.
 * @module fulfillmentinbound_v2024_03_20/model/DocumentDownload
 * @version 2024-03-20
 */
export class DocumentDownload {
    /**
     * Constructs a <code>DocumentDownload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DocumentDownload} obj Optional instance to populate.
     * @return {DocumentDownload} The populated <code>DocumentDownload</code> instance.
     */
    static constructFromObject(data: any, obj: DocumentDownload): DocumentDownload;
    /**
     * Constructs a new <code>DocumentDownload</code>.
     * Resource to download the requested document.
     * @alias module:fulfillmentinbound_v2024_03_20/model/DocumentDownload
     * @class
     * @param downloadType {String} The type of download. Possible values: `URL`.
     * @param uri {String} Uniform resource identifier to identify where the document is located.
     */
    constructor(downloadType: string, uri: string);
    downloadType: string;
    uri: string;
    /**
     * The URI's expiration time. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern `yyyy-MM-ddTHH:mm:ss.sssZ`.
     * @member {Date} expiration
     * @type {Date}
     */
    expiration: Date;
}
//# sourceMappingURL=DocumentDownload.d.ts.map