/**
 * The SearchOrdersResponse model module.
 * @module orders_v2026_01_01/model/SearchOrdersResponse
 * @version 2026-01-01
 */
export class SearchOrdersResponse {
    /**
     * Constructs a <code>SearchOrdersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SearchOrdersResponse} obj Optional instance to populate.
     * @return {SearchOrdersResponse} The populated <code>SearchOrdersResponse</code> instance.
     */
    static constructFromObject(data: any, obj: SearchOrdersResponse): SearchOrdersResponse;
    /**
     * Constructs a new <code>SearchOrdersResponse</code>.
     * A list of orders.
     * @alias module:orders_v2026_01_01/model/SearchOrdersResponse
     * @class
     * @param orders {Array[]} An array containing all orders that match the search criteria.
     */
    constructor(orders: any[][]);
    orders: any[][];
    /**
     * @member {Pagination} pagination
     * @type {Pagination}
     */
    pagination: Pagination;
    /**
     * Only orders updated before the specified time are returned. The date must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
     * @member {Date} lastUpdatedBefore
     * @type {Date}
     */
    lastUpdatedBefore: Date;
    /**
     * Only orders placed before the specified time are returned. The date must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
     * @member {Date} createdBefore
     * @type {Date}
     */
    createdBefore: Date;
}
import { Pagination } from './Pagination.js';
//# sourceMappingURL=SearchOrdersResponse.d.ts.map