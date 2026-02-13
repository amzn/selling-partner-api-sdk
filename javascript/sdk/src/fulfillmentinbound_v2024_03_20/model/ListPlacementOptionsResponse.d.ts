/**
 * The ListPlacementOptionsResponse model module.
 * @module fulfillmentinbound_v2024_03_20/model/ListPlacementOptionsResponse
 * @version 2024-03-20
 */
export class ListPlacementOptionsResponse {
    /**
     * Constructs a <code>ListPlacementOptionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListPlacementOptionsResponse} obj Optional instance to populate.
     * @return {ListPlacementOptionsResponse} The populated <code>ListPlacementOptionsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ListPlacementOptionsResponse): ListPlacementOptionsResponse;
    /**
     * Constructs a new <code>ListPlacementOptionsResponse</code>.
     * The &#x60;listPlacementOptions&#x60; response.
     * @alias module:fulfillmentinbound_v2024_03_20/model/ListPlacementOptionsResponse
     * @class
     * @param placementOptions {[PlacementOption]} Placement options generated for the inbound plan.
     */
    constructor(placementOptions: [PlacementOption]);
    placementOptions: PlacementOption[];
    /**
     * @member {Pagination} pagination
     * @type {Pagination}
     */
    pagination: Pagination;
}
import { PlacementOption } from './PlacementOption.js';
import { Pagination } from './Pagination.js';
//# sourceMappingURL=ListPlacementOptionsResponse.d.ts.map