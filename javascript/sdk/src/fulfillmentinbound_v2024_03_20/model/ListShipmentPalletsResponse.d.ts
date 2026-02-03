/**
 * The ListShipmentPalletsResponse model module.
 * @module fulfillmentinbound_v2024_03_20/model/ListShipmentPalletsResponse
 * @version 2024-03-20
 */
export class ListShipmentPalletsResponse {
    /**
     * Constructs a <code>ListShipmentPalletsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListShipmentPalletsResponse} obj Optional instance to populate.
     * @return {ListShipmentPalletsResponse} The populated <code>ListShipmentPalletsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ListShipmentPalletsResponse): ListShipmentPalletsResponse;
    /**
     * Constructs a new <code>ListShipmentPalletsResponse</code>.
     * The &#x60;listShipmentPallets&#x60; response.
     * @alias module:fulfillmentinbound_v2024_03_20/model/ListShipmentPalletsResponse
     * @class
     * @param pallets {Array[]} The pallets in a shipment.
     */
    constructor(pallets: any[][]);
    pallets: any[][];
    /**
     * @member {Pagination} pagination
     * @type {Pagination}
     */
    pagination: Pagination;
}
import { Pagination } from './Pagination.js';
//# sourceMappingURL=ListShipmentPalletsResponse.d.ts.map