/**
 * The CreateMarketplaceItemLabelsResponse model module.
 * @module fulfillmentinbound_v2024_03_20/model/CreateMarketplaceItemLabelsResponse
 * @version 2024-03-20
 */
export class CreateMarketplaceItemLabelsResponse {
    /**
     * Constructs a <code>CreateMarketplaceItemLabelsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateMarketplaceItemLabelsResponse} obj Optional instance to populate.
     * @return {CreateMarketplaceItemLabelsResponse} The populated <code>CreateMarketplaceItemLabelsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: CreateMarketplaceItemLabelsResponse): CreateMarketplaceItemLabelsResponse;
    /**
     * Constructs a new <code>CreateMarketplaceItemLabelsResponse</code>.
     * The &#x60;createMarketplaceItemLabels&#x60; response.
     * @alias module:fulfillmentinbound_v2024_03_20/model/CreateMarketplaceItemLabelsResponse
     * @class
     * @param documentDownloads {[DocumentDownload]} Resources to download the requested document.
     */
    constructor(documentDownloads: [DocumentDownload]);
    documentDownloads: [DocumentDownload];
}
import { DocumentDownload } from './DocumentDownload.js';
//# sourceMappingURL=CreateMarketplaceItemLabelsResponse.d.ts.map