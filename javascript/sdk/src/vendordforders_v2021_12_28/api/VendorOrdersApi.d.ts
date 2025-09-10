/**
* VendorOrders service.
* @module vendordforders_v2021_12_28/api/VendorOrdersApi
* @version 2021-12-28
*/
export class VendorOrdersApi {
    /**
      * Constructs a new VendorOrdersApi.
      * @alias module:vendordforders_v2021_12_28/api/VendorOrdersApi
      * @class
      * @param {ApiClient} [apiClient] Optional API client implementation to use,
      * default to {@link ApiClient#instance} if unspecified.
      */
    constructor(apiClient?: ApiClient);
    apiClient: any;
    /**
       * Initialize rate limiters for API operations
       */
    initializeDefaultRateLimiterMap(): void;
    /**
       * Get rate limiter for a specific operation
       * @param {String} operation name
       */
    getRateLimiter(operation: string): any;
    /**
       * Returns purchase order information for the purchaseOrderNumber that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} purchaseOrderNumber The order identifier for the purchase order that you want. Formatting Notes: alpha-numeric code.
       * @return {Promise<Order>}
       */
    getOrderWithHttpInfo(purchaseOrderNumber: string): Promise<Order>;
    /**
       * Returns purchase order information for the purchaseOrderNumber that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} purchaseOrderNumber The order identifier for the purchase order that you want. Formatting Notes: alpha-numeric code.
       * @return {Promise<Order>}
       */
    getOrder(purchaseOrderNumber: string): Promise<Order>;
    /**
       * Returns a list of purchase orders created during the time frame that you specify. You define the time frame using the createdAfter and createdBefore parameters. You must use both parameters. You can choose to get only the purchase order numbers by setting the includeDetails parameter to false. In that case, the operation returns a list of purchase order numbers. You can then call the getOrder operation to return the details of a specific order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Date} createdAfter Purchase orders that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format.
       * @param {Date} createdBefore Purchase orders that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.shipFromPartyId] The vendor warehouse identifier for the fulfillment warehouse. If not specified, the result will contain orders for all warehouses.
       * @param {String} [opts.status] Returns only the purchase orders that match the specified status. If not specified, the result will contain orders that match any status.
       * @param {Number} [opts.limit] The limit to the number of purchase orders returned.
       * @param {String} [opts.sortOrder] Sort the list in ascending or descending order by order creation date.
       * @param {String} [opts.nextToken] Used for pagination when there are more orders than the specified result size limit. The token value is returned in the previous API call.
       * @param {Boolean} [opts.includeDetails] When true, returns the complete purchase order details. Otherwise, only purchase order numbers are returned. (default to &#39;true&#39;)
       * @return {Promise<OrderList>}
       */
    getOrdersWithHttpInfo(createdAfter: Date, createdBefore: Date, opts?: {
        shipFromPartyId?: string;
        status?: string;
        limit?: number;
        sortOrder?: string;
        nextToken?: string;
        includeDetails?: boolean;
    }): Promise<OrderList>;
    /**
       * Returns a list of purchase orders created during the time frame that you specify. You define the time frame using the createdAfter and createdBefore parameters. You must use both parameters. You can choose to get only the purchase order numbers by setting the includeDetails parameter to false. In that case, the operation returns a list of purchase order numbers. You can then call the getOrder operation to return the details of a specific order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Date} createdAfter Purchase orders that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format.
       * @param {Date} createdBefore Purchase orders that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.shipFromPartyId] The vendor warehouse identifier for the fulfillment warehouse. If not specified, the result will contain orders for all warehouses.
       * @param {String} [opts.status] Returns only the purchase orders that match the specified status. If not specified, the result will contain orders that match any status.
       * @param {Number} [opts.limit] The limit to the number of purchase orders returned.
       * @param {String} [opts.sortOrder] Sort the list in ascending or descending order by order creation date.
       * @param {String} [opts.nextToken] Used for pagination when there are more orders than the specified result size limit. The token value is returned in the previous API call.
       * @param {Boolean} [opts.includeDetails] When true, returns the complete purchase order details. Otherwise, only purchase order numbers are returned. (default to &#39;true&#39;)
       * @return {Promise<OrderList>}
       */
    getOrders(createdAfter: Date, createdBefore: Date, opts?: {
        shipFromPartyId?: string;
        status?: string;
        limit?: number;
        sortOrder?: string;
        nextToken?: string;
        includeDetails?: boolean;
    }): Promise<OrderList>;
    /**
       * Submits acknowledgements for one or more purchase orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {SubmitAcknowledgementRequest} body The request body containing the acknowledgement to an order
       * @return {Promise<TransactionId>}
       */
    submitAcknowledgementWithHttpInfo(body: SubmitAcknowledgementRequest): Promise<TransactionId>;
    /**
       * Submits acknowledgements for one or more purchase orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {SubmitAcknowledgementRequest} body The request body containing the acknowledgement to an order
       * @return {Promise<TransactionId>}
       */
    submitAcknowledgement(body: SubmitAcknowledgementRequest): Promise<TransactionId>;
    #private;
}
import { Order } from '../model/Order.js';
import { OrderList } from '../model/OrderList.js';
import { SubmitAcknowledgementRequest } from '../model/SubmitAcknowledgementRequest.js';
import { TransactionId } from '../model/TransactionId.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=VendorOrdersApi.d.ts.map