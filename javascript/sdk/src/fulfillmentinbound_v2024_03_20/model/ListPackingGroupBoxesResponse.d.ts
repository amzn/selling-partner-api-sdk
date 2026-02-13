/**
 * The ListPackingGroupBoxesResponse model module.
 * @module fulfillmentinbound_v2024_03_20/model/ListPackingGroupBoxesResponse
 * @version 2024-03-20
 */
export class ListPackingGroupBoxesResponse {
    /**
     * Constructs a <code>ListPackingGroupBoxesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListPackingGroupBoxesResponse} obj Optional instance to populate.
     * @return {ListPackingGroupBoxesResponse} The populated <code>ListPackingGroupBoxesResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ListPackingGroupBoxesResponse): ListPackingGroupBoxesResponse;
    /**
     * Constructs a new <code>ListPackingGroupBoxesResponse</code>.
     * The &#x60;listPackingGroupBoxes&#x60; response.
     * @alias module:fulfillmentinbound_v2024_03_20/model/ListPackingGroupBoxesResponse
     * @class
     * @param boxes {[Box]} Provides the information about the list of boxes in the packing group.
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
//# sourceMappingURL=ListPackingGroupBoxesResponse.d.ts.map