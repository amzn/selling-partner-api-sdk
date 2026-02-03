/**
 * The ListDeliveryWindowOptionsResponse model module.
 * @module fulfillmentinbound_v2024_03_20/model/ListDeliveryWindowOptionsResponse
 * @version 2024-03-20
 */
export class ListDeliveryWindowOptionsResponse {
    /**
     * Constructs a <code>ListDeliveryWindowOptionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListDeliveryWindowOptionsResponse} obj Optional instance to populate.
     * @return {ListDeliveryWindowOptionsResponse} The populated <code>ListDeliveryWindowOptionsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ListDeliveryWindowOptionsResponse): ListDeliveryWindowOptionsResponse;
    /**
     * Constructs a new <code>ListDeliveryWindowOptionsResponse</code>.
     * The &#x60;listDeliveryWindowOptions&#x60; response.
     * @alias module:fulfillmentinbound_v2024_03_20/model/ListDeliveryWindowOptionsResponse
     * @class
     * @param deliveryWindowOptions {Array[]} Delivery window options generated for the placement option.
     */
    constructor(deliveryWindowOptions: any[][]);
    deliveryWindowOptions: any[][];
    /**
     * @member {Pagination} pagination
     * @type {Pagination}
     */
    pagination: Pagination;
}
import { Pagination } from './Pagination.js';
//# sourceMappingURL=ListDeliveryWindowOptionsResponse.d.ts.map