/**
 * The ListInboundPlanPalletsResponse model module.
 * @module fulfillmentinbound_v2024_03_20/model/ListInboundPlanPalletsResponse
 * @version 2024-03-20
 */
export class ListInboundPlanPalletsResponse {
    /**
     * Constructs a <code>ListInboundPlanPalletsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListInboundPlanPalletsResponse} obj Optional instance to populate.
     * @return {ListInboundPlanPalletsResponse} The populated <code>ListInboundPlanPalletsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ListInboundPlanPalletsResponse): ListInboundPlanPalletsResponse;
    /**
     * Constructs a new <code>ListInboundPlanPalletsResponse</code>.
     * The &#x60;listInboundPlanPallets&#x60; response.
     * @alias module:fulfillmentinbound_v2024_03_20/model/ListInboundPlanPalletsResponse
     * @class
     * @param pallets {Array[]} The pallets in an inbound plan.
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
//# sourceMappingURL=ListInboundPlanPalletsResponse.d.ts.map