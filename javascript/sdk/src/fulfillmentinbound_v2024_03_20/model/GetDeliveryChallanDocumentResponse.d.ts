/**
 * The GetDeliveryChallanDocumentResponse model module.
 * @module fulfillmentinbound_v2024_03_20/model/GetDeliveryChallanDocumentResponse
 * @version 2024-03-20
 */
export class GetDeliveryChallanDocumentResponse {
    /**
     * Constructs a <code>GetDeliveryChallanDocumentResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetDeliveryChallanDocumentResponse} obj Optional instance to populate.
     * @return {GetDeliveryChallanDocumentResponse} The populated <code>GetDeliveryChallanDocumentResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetDeliveryChallanDocumentResponse): GetDeliveryChallanDocumentResponse;
    /**
     * Constructs a new <code>GetDeliveryChallanDocumentResponse</code>.
     * The &#x60;getDeliveryChallanDocumentResponse&#x60; response.
     * @alias module:fulfillmentinbound_v2024_03_20/model/GetDeliveryChallanDocumentResponse
     * @class
     * @param documentDownload {DocumentDownload}
     */
    constructor(documentDownload: DocumentDownload);
    documentDownload: DocumentDownload;
}
import { DocumentDownload } from './DocumentDownload.js';
//# sourceMappingURL=GetDeliveryChallanDocumentResponse.d.ts.map