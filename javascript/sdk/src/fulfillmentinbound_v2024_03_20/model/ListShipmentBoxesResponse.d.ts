/**
 * The ListShipmentBoxesResponse model module.
 * @module fulfillmentinbound_v2024_03_20/model/ListShipmentBoxesResponse
 * @version 2024-03-20
 */
export class ListShipmentBoxesResponse {
    /**
     * Constructs a <code>ListShipmentBoxesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListShipmentBoxesResponse} obj Optional instance to populate.
     * @return {ListShipmentBoxesResponse} The populated <code>ListShipmentBoxesResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ListShipmentBoxesResponse): ListShipmentBoxesResponse;
    /**
     * Constructs a new <code>ListShipmentBoxesResponse</code>.
     * The &#x60;listShipmentBoxes&#x60; response.
     * @alias module:fulfillmentinbound_v2024_03_20/model/ListShipmentBoxesResponse
     * @class
     * @param boxes {[Box]} A list of boxes in a shipment.
     */
    constructor(boxes: [Box]);
    boxes: Box[];
    /**
     * @member {Pagination} pagination
     * @type {Pagination}
     */
    pagination: Pagination;
}
import { Box } from './Box.js';
import { Pagination } from './Pagination.js';
//# sourceMappingURL=ListShipmentBoxesResponse.d.ts.map