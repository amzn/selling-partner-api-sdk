/**
 * The ListShipmentItemsResponse model module.
 * @module fulfillmentinbound_v2024_03_20/model/ListShipmentItemsResponse
 * @version 2024-03-20
 */
export class ListShipmentItemsResponse {
    /**
     * Constructs a <code>ListShipmentItemsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListShipmentItemsResponse} obj Optional instance to populate.
     * @return {ListShipmentItemsResponse} The populated <code>ListShipmentItemsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ListShipmentItemsResponse): ListShipmentItemsResponse;
    /**
     * Constructs a new <code>ListShipmentItemsResponse</code>.
     * The &#x60;listShipmentItems&#x60; response.
     * @alias module:fulfillmentinbound_v2024_03_20/model/ListShipmentItemsResponse
     * @class
     * @param items {Item[]} The items in a shipment.
     */
    constructor(items: Item[]);
    items: Item[];
    /**
     * @member {Pagination} pagination
     * @type {Pagination}
     */
    pagination: Pagination;
}
import { Item } from './Item.js';
import { Pagination } from './Pagination.js';
//# sourceMappingURL=ListShipmentItemsResponse.d.ts.map