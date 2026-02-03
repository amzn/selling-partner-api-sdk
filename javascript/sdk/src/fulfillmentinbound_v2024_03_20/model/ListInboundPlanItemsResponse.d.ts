/**
 * The ListInboundPlanItemsResponse model module.
 * @module fulfillmentinbound_v2024_03_20/model/ListInboundPlanItemsResponse
 * @version 2024-03-20
 */
export class ListInboundPlanItemsResponse {
    /**
     * Constructs a <code>ListInboundPlanItemsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListInboundPlanItemsResponse} obj Optional instance to populate.
     * @return {ListInboundPlanItemsResponse} The populated <code>ListInboundPlanItemsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ListInboundPlanItemsResponse): ListInboundPlanItemsResponse;
    /**
     * Constructs a new <code>ListInboundPlanItemsResponse</code>.
     * The &#x60;listInboundPlanItems&#x60; response.
     * @alias module:fulfillmentinbound_v2024_03_20/model/ListInboundPlanItemsResponse
     * @class
     * @param items {Array[]} The items in an inbound plan.
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
//# sourceMappingURL=ListInboundPlanItemsResponse.d.ts.map