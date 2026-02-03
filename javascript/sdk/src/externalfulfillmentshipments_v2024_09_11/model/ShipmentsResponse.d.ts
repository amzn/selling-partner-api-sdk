/**
 * The ShipmentsResponse model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/ShipmentsResponse
 * @version 2024-09-11
 */
export class ShipmentsResponse {
    /**
     * Constructs a <code>ShipmentsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShipmentsResponse} obj Optional instance to populate.
     * @return {ShipmentsResponse} The populated <code>ShipmentsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ShipmentsResponse): ShipmentsResponse;
    /**
     * A list of shipments.
     * @member {Array[]} shipments
     * @type {Array[]}
     */
    shipments: any[][];
    /**
     * @member {Pagination} pagination
     * @type {Pagination}
     */
    pagination: Pagination;
}
import { Pagination } from './Pagination.js';
//# sourceMappingURL=ShipmentsResponse.d.ts.map