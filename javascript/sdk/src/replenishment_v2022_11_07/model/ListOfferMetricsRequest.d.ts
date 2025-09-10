/**
 * The ListOfferMetricsRequest model module.
 * @module replenishment_v2022_11_07/model/ListOfferMetricsRequest
 * @version 2022-11-07
 */
export class ListOfferMetricsRequest {
    /**
     * Constructs a <code>ListOfferMetricsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListOfferMetricsRequest} obj Optional instance to populate.
     * @return {ListOfferMetricsRequest} The populated <code>ListOfferMetricsRequest</code> instance.
     */
    static constructFromObject(data: any, obj: ListOfferMetricsRequest): ListOfferMetricsRequest;
    /**
     * Constructs a new <code>ListOfferMetricsRequest</code>.
     * The request body for the &#x60;listOfferMetrics&#x60; operation.
     * @alias module:replenishment_v2022_11_07/model/ListOfferMetricsRequest
     * @class
     * @param pagination {ListOfferMetricsRequestPagination}
     * @param filters {ListOfferMetricsRequestFilters}
     */
    constructor(pagination: ListOfferMetricsRequestPagination, filters: ListOfferMetricsRequestFilters);
    pagination: ListOfferMetricsRequestPagination;
    filters: ListOfferMetricsRequestFilters;
    /**
     * @member {ListOfferMetricsRequestSort} sort
     * @type {ListOfferMetricsRequestSort}
     */
    sort: ListOfferMetricsRequestSort;
}
import { ListOfferMetricsRequestPagination } from './ListOfferMetricsRequestPagination.js';
import { ListOfferMetricsRequestFilters } from './ListOfferMetricsRequestFilters.js';
import { ListOfferMetricsRequestSort } from './ListOfferMetricsRequestSort.js';
//# sourceMappingURL=ListOfferMetricsRequest.d.ts.map