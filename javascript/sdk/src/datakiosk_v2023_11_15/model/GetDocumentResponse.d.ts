/**
 * The GetDocumentResponse model module.
 * @module datakiosk_v2023_11_15/model/GetDocumentResponse
 * @version 2023-11-15
 */
export class GetDocumentResponse {
    /**
     * Constructs a <code>GetDocumentResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetDocumentResponse} obj Optional instance to populate.
     * @return {GetDocumentResponse} The populated <code>GetDocumentResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetDocumentResponse): GetDocumentResponse;
    /**
     * Constructs a new <code>GetDocumentResponse</code>.
     * The response for the &#x60;getDocument&#x60; operation.
     * @alias module:datakiosk_v2023_11_15/model/GetDocumentResponse
     * @class
     * @param documentId {String} The identifier for the Data Kiosk document. This identifier is unique only in combination with a selling partner account ID.
     * @param documentUrl {String} A presigned URL that can be used to retrieve the Data Kiosk document. This URL expires after 5 minutes. If the Data Kiosk document is compressed, the `Content-Encoding` header will indicate the compression algorithm.  **Note:** Most HTTP clients are capable of automatically decompressing downloaded files based on the `Content-Encoding` header.
     */
    constructor(documentId: string, documentUrl: string);
    documentId: string;
    documentUrl: string;
}
//# sourceMappingURL=GetDocumentResponse.d.ts.map