/**
 * The ListInboundPlansResponse model module.
 * @module fulfillmentinbound_v2024_03_20/model/ListInboundPlansResponse
 * @version 2024-03-20
 */
export class ListInboundPlansResponse {
    /**
     * Constructs a <code>ListInboundPlansResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListInboundPlansResponse} obj Optional instance to populate.
     * @return {ListInboundPlansResponse} The populated <code>ListInboundPlansResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ListInboundPlansResponse): ListInboundPlansResponse;
    /**
     * A list of inbound plans with minimal information.
     * @member {InboundPlanSummary[]} inboundPlans
     * @type {InboundPlanSummary[]}
     */
    inboundPlans: InboundPlanSummary[];
    /**
     * @member {Pagination} pagination
     * @type {Pagination}
     */
    pagination: Pagination;
}
import { InboundPlanSummary } from './InboundPlanSummary.js';
import { Pagination } from './Pagination.js';
//# sourceMappingURL=ListInboundPlansResponse.d.ts.map