/**
 * The ListInboundPlanBoxesResponse model module.
 * @module fulfillmentinbound_v2024_03_20/model/ListInboundPlanBoxesResponse
 * @version 2024-03-20
 */
export class ListInboundPlanBoxesResponse {
    /**
     * Constructs a <code>ListInboundPlanBoxesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListInboundPlanBoxesResponse} obj Optional instance to populate.
     * @return {ListInboundPlanBoxesResponse} The populated <code>ListInboundPlanBoxesResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ListInboundPlanBoxesResponse): ListInboundPlanBoxesResponse;
    /**
     * Constructs a new <code>ListInboundPlanBoxesResponse</code>.
     * The &#x60;listInboundPlanBoxes&#x60; response.
     * @alias module:fulfillmentinbound_v2024_03_20/model/ListInboundPlanBoxesResponse
     * @class
     * @param boxes {[Box]} A list of boxes in an inbound plan.
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
//# sourceMappingURL=ListInboundPlanBoxesResponse.d.ts.map