/**
 * The ListPackingGroupItemsResponse model module.
 * @module fulfillmentinbound_v2024_03_20/model/ListPackingGroupItemsResponse
 * @version 2024-03-20
 */
export class ListPackingGroupItemsResponse {
    /**
     * Constructs a <code>ListPackingGroupItemsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListPackingGroupItemsResponse} obj Optional instance to populate.
     * @return {ListPackingGroupItemsResponse} The populated <code>ListPackingGroupItemsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ListPackingGroupItemsResponse): ListPackingGroupItemsResponse;
    /**
     * Constructs a new <code>ListPackingGroupItemsResponse</code>.
     * The &#x60;listPackingGroupItems&#x60; response.
     * @alias module:fulfillmentinbound_v2024_03_20/model/ListPackingGroupItemsResponse
     * @class
     * @param items {Array[]} Provides the information about the list of items in the packing group.
     */
    constructor(items: any[][]);
    items: any[][];
    /**
     * @member {Pagination} pagination
     * @type {Pagination}
     */
    pagination: Pagination;
}
import { Pagination } from './Pagination.js';
//# sourceMappingURL=ListPackingGroupItemsResponse.d.ts.map