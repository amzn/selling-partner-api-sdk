/**
 * The ListPackingOptionsResponse model module.
 * @module fulfillmentinbound_v2024_03_20/model/ListPackingOptionsResponse
 * @version 2024-03-20
 */
export class ListPackingOptionsResponse {
    /**
     * Constructs a <code>ListPackingOptionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListPackingOptionsResponse} obj Optional instance to populate.
     * @return {ListPackingOptionsResponse} The populated <code>ListPackingOptionsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ListPackingOptionsResponse): ListPackingOptionsResponse;
    /**
     * Constructs a new <code>ListPackingOptionsResponse</code>.
     * The &#x60;listPlacementOptions&#x60; response.
     * @alias module:fulfillmentinbound_v2024_03_20/model/ListPackingOptionsResponse
     * @class
     * @param packingOptions {[PackingOption]} List of packing options.
     */
    constructor(packingOptions: [PackingOption]);
    packingOptions: [PackingOption];
    /**
     * @member {Pagination} pagination
     * @type {Pagination}
     */
    pagination: Pagination;
}
import { PackingOption } from './PackingOption.js';
import { Pagination } from './Pagination.js';
//# sourceMappingURL=ListPackingOptionsResponse.d.ts.map