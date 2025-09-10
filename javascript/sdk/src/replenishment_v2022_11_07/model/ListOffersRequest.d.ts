/**
 * The ListOffersRequest model module.
 * @module replenishment_v2022_11_07/model/ListOffersRequest
 * @version 2022-11-07
 */
export class ListOffersRequest {
    /**
     * Constructs a <code>ListOffersRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListOffersRequest} obj Optional instance to populate.
     * @return {ListOffersRequest} The populated <code>ListOffersRequest</code> instance.
     */
    static constructFromObject(data: any, obj: ListOffersRequest): ListOffersRequest;
    /**
     * Constructs a new <code>ListOffersRequest</code>.
     * The request body for the &#x60;listOffers&#x60; operation.
     * @alias module:replenishment_v2022_11_07/model/ListOffersRequest
     * @class
     * @param pagination {ListOffersRequestPagination}
     * @param filters {ListOffersRequestFilters}
     */
    constructor(pagination: ListOffersRequestPagination, filters: ListOffersRequestFilters);
    pagination: ListOffersRequestPagination;
    filters: ListOffersRequestFilters;
    /**
     * @member {ListOffersRequestSort} sort
     * @type {ListOffersRequestSort}
     */
    sort: ListOffersRequestSort;
}
import { ListOffersRequestPagination } from './ListOffersRequestPagination.js';
import { ListOffersRequestFilters } from './ListOffersRequestFilters.js';
import { ListOffersRequestSort } from './ListOffersRequestSort.js';
//# sourceMappingURL=ListOffersRequest.d.ts.map