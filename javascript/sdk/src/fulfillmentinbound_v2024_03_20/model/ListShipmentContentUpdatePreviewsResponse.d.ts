/**
 * The ListShipmentContentUpdatePreviewsResponse model module.
 * @module fulfillmentinbound_v2024_03_20/model/ListShipmentContentUpdatePreviewsResponse
 * @version 2024-03-20
 */
export class ListShipmentContentUpdatePreviewsResponse {
    /**
     * Constructs a <code>ListShipmentContentUpdatePreviewsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListShipmentContentUpdatePreviewsResponse} obj Optional instance to populate.
     * @return {ListShipmentContentUpdatePreviewsResponse} The populated <code>ListShipmentContentUpdatePreviewsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ListShipmentContentUpdatePreviewsResponse): ListShipmentContentUpdatePreviewsResponse;
    /**
     * Constructs a new <code>ListShipmentContentUpdatePreviewsResponse</code>.
     * The &#x60;ListShipmentContentUpdatePreviews&#x60; response.
     * @alias module:fulfillmentinbound_v2024_03_20/model/ListShipmentContentUpdatePreviewsResponse
     * @class
     * @param contentUpdatePreviews {[ContentUpdatePreview]} A list of content update previews in a shipment.
     */
    constructor(contentUpdatePreviews: [ContentUpdatePreview]);
    contentUpdatePreviews: [ContentUpdatePreview];
    /**
     * @member {Pagination} pagination
     * @type {Pagination}
     */
    pagination: Pagination;
}
import { ContentUpdatePreview } from './ContentUpdatePreview.js';
import { Pagination } from './Pagination.js';
//# sourceMappingURL=ListShipmentContentUpdatePreviewsResponse.d.ts.map