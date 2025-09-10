/**
* VendorOrders service.
* @module vendororders_v1/api/VendorOrdersApi
* @version v1
*/
export class VendorOrdersApi {
    /**
      * Constructs a new VendorOrdersApi.
      * @alias module:vendororders_v1/api/VendorOrdersApi
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
       * Returns a purchase order based on the &#x60;purchaseOrderNumber&#x60; value that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} purchaseOrderNumber The purchase order identifier for the order that you want. Formatting Notes: 8-character alpha-numeric code.
       * @return {Promise<GetPurchaseOrderResponse>}
       */
    getPurchaseOrderWithHttpInfo(purchaseOrderNumber: string): Promise<GetPurchaseOrderResponse>;
    /**
       * Returns a purchase order based on the &#x60;purchaseOrderNumber&#x60; value that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} purchaseOrderNumber The purchase order identifier for the order that you want. Formatting Notes: 8-character alpha-numeric code.
       * @return {Promise<GetPurchaseOrderResponse>}
       */
    getPurchaseOrder(purchaseOrderNumber: string): Promise<GetPurchaseOrderResponse>;
    /**
       * Returns a list of purchase orders created or changed during the time frame that you specify. You define the time frame using the &#x60;createdAfter&#x60;, &#x60;createdBefore&#x60;, &#x60;changedAfter&#x60; and &#x60;changedBefore&#x60; parameters. The date range to search must not be more than 7 days. You can choose to get only the purchase order numbers by setting &#x60;includeDetails&#x60; to false. You can then use the &#x60;getPurchaseOrder&#x60; operation to receive details for a specific purchase order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.limit] The limit to the number of records returned. Default value is 100 records.
       * @param {Date} [opts.createdAfter] Purchase orders that became available after this time will be included in the result. Must be in ISO-8601 date/time format.
       * @param {Date} [opts.createdBefore] Purchase orders that became available before this time will be included in the result. Must be in ISO-8601 date/time format.
       * @param {String} [opts.sortOrder] Sort in ascending or descending order by purchase order creation date.
       * @param {String} [opts.nextToken] Used for pagination when there is more purchase orders than the specified result size limit. The token value is returned in the previous API call
       * @param {Boolean} [opts.includeDetails] When true, returns purchase orders with complete details. Otherwise, only purchase order numbers are returned. Default value is true.
       * @param {Date} [opts.changedAfter] Purchase orders that changed after this timestamp will be included in the result. Must be in ISO-8601 date/time format.
       * @param {Date} [opts.changedBefore] Purchase orders that changed before this timestamp will be included in the result. Must be in ISO-8601 date/time format.
       * @param {String} [opts.poItemState] Current state of the purchase order item. If this value is Cancelled, this API will return purchase orders which have one or more items cancelled by Amazon with updated item quantity as zero.
       * @param {Boolean} [opts.isPOChanged] When true, returns purchase orders which were modified after the order was placed. Vendors are required to pull the changed purchase order and fulfill the updated purchase order and not the original one. Default value is false.
       * @param {String} [opts.purchaseOrderState] Filters purchase orders based on the purchase order state.
       * @param {String} [opts.orderingVendorCode] Filters purchase orders based on the specified ordering vendor code. This value should be same as &#39;sellingParty.partyId&#39; in the purchase order. If not included in the filter, all purchase orders for all of the vendor codes that exist in the vendor group used to authorize the API client application are returned.
       * @return {Promise<GetPurchaseOrdersResponse>}
       */
    getPurchaseOrdersWithHttpInfo(opts?: {
        limit?: number;
        createdAfter?: Date;
        createdBefore?: Date;
        sortOrder?: string;
        nextToken?: string;
        includeDetails?: boolean;
        changedAfter?: Date;
        changedBefore?: Date;
        poItemState?: string;
        isPOChanged?: boolean;
        purchaseOrderState?: string;
        orderingVendorCode?: string;
    }): Promise<GetPurchaseOrdersResponse>;
    /**
       * Returns a list of purchase orders created or changed during the time frame that you specify. You define the time frame using the &#x60;createdAfter&#x60;, &#x60;createdBefore&#x60;, &#x60;changedAfter&#x60; and &#x60;changedBefore&#x60; parameters. The date range to search must not be more than 7 days. You can choose to get only the purchase order numbers by setting &#x60;includeDetails&#x60; to false. You can then use the &#x60;getPurchaseOrder&#x60; operation to receive details for a specific purchase order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.limit] The limit to the number of records returned. Default value is 100 records.
       * @param {Date} [opts.createdAfter] Purchase orders that became available after this time will be included in the result. Must be in ISO-8601 date/time format.
       * @param {Date} [opts.createdBefore] Purchase orders that became available before this time will be included in the result. Must be in ISO-8601 date/time format.
       * @param {String} [opts.sortOrder] Sort in ascending or descending order by purchase order creation date.
       * @param {String} [opts.nextToken] Used for pagination when there is more purchase orders than the specified result size limit. The token value is returned in the previous API call
       * @param {Boolean} [opts.includeDetails] When true, returns purchase orders with complete details. Otherwise, only purchase order numbers are returned. Default value is true.
       * @param {Date} [opts.changedAfter] Purchase orders that changed after this timestamp will be included in the result. Must be in ISO-8601 date/time format.
       * @param {Date} [opts.changedBefore] Purchase orders that changed before this timestamp will be included in the result. Must be in ISO-8601 date/time format.
       * @param {String} [opts.poItemState] Current state of the purchase order item. If this value is Cancelled, this API will return purchase orders which have one or more items cancelled by Amazon with updated item quantity as zero.
       * @param {Boolean} [opts.isPOChanged] When true, returns purchase orders which were modified after the order was placed. Vendors are required to pull the changed purchase order and fulfill the updated purchase order and not the original one. Default value is false.
       * @param {String} [opts.purchaseOrderState] Filters purchase orders based on the purchase order state.
       * @param {String} [opts.orderingVendorCode] Filters purchase orders based on the specified ordering vendor code. This value should be same as &#39;sellingParty.partyId&#39; in the purchase order. If not included in the filter, all purchase orders for all of the vendor codes that exist in the vendor group used to authorize the API client application are returned.
       * @return {Promise<GetPurchaseOrdersResponse>}
       */
    getPurchaseOrders(opts?: {
        limit?: number;
        createdAfter?: Date;
        createdBefore?: Date;
        sortOrder?: string;
        nextToken?: string;
        includeDetails?: boolean;
        changedAfter?: Date;
        changedBefore?: Date;
        poItemState?: string;
        isPOChanged?: boolean;
        purchaseOrderState?: string;
        orderingVendorCode?: string;
    }): Promise<GetPurchaseOrdersResponse>;
    /**
       * Returns purchase order statuses based on the filters that you specify. Date range to search must not be more than 7 days. You can return a list of purchase order statuses using the available filters, or a single purchase order status by providing the purchase order number.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.limit] The limit to the number of records returned. Default value is 100 records.
       * @param {String} [opts.sortOrder] Sort in ascending or descending order by purchase order creation date.
       * @param {String} [opts.nextToken] Used for pagination when there are more purchase orders than the specified result size limit.
       * @param {Date} [opts.createdAfter] Purchase orders that became available after this timestamp will be included in the result. Must be in ISO-8601 date/time format.
       * @param {Date} [opts.createdBefore] Purchase orders that became available before this timestamp will be included in the result. Must be in ISO-8601 date/time format.
       * @param {Date} [opts.updatedAfter] Purchase orders for which the last purchase order update happened after this timestamp will be included in the result. Must be in ISO-8601 date/time format.
       * @param {Date} [opts.updatedBefore] Purchase orders for which the last purchase order update happened before this timestamp will be included in the result. Must be in ISO-8601 date/time format.
       * @param {String} [opts.purchaseOrderNumber] Provides purchase order status for the specified purchase order number.
       * @param {String} [opts.purchaseOrderStatus] Filters purchase orders based on the specified purchase order status. If not included in filter, this will return purchase orders for all statuses.
       * @param {String} [opts.itemConfirmationStatus] Filters purchase orders based on their item confirmation status. If the item confirmation status is not included in the filter, purchase orders for all confirmation statuses are included.
       * @param {String} [opts.itemReceiveStatus] Filters purchase orders based on the purchase order&#39;s item receive status. If the item receive status is not included in the filter, purchase orders for all receive statuses are included.
       * @param {String} [opts.orderingVendorCode] Filters purchase orders based on the specified ordering vendor code. This value should be same as &#39;sellingParty.partyId&#39; in the purchase order. If not included in filter, all purchase orders for all the vendor codes that exist in the vendor group used to authorize API client application are returned.
       * @param {String} [opts.shipToPartyId] Filters purchase orders for a specific buyer&#39;s Fulfillment Center/warehouse by providing ship to location id here. This value should be same as &#39;shipToParty.partyId&#39; in the purchase order. If not included in filter, this will return purchase orders for all the buyer&#39;s warehouses used for vendor group purchase orders.
       * @return {Promise<GetPurchaseOrdersStatusResponse>}
       */
    getPurchaseOrdersStatusWithHttpInfo(opts?: {
        limit?: number;
        sortOrder?: string;
        nextToken?: string;
        createdAfter?: Date;
        createdBefore?: Date;
        updatedAfter?: Date;
        updatedBefore?: Date;
        purchaseOrderNumber?: string;
        purchaseOrderStatus?: string;
        itemConfirmationStatus?: string;
        itemReceiveStatus?: string;
        orderingVendorCode?: string;
        shipToPartyId?: string;
    }): Promise<GetPurchaseOrdersStatusResponse>;
    /**
       * Returns purchase order statuses based on the filters that you specify. Date range to search must not be more than 7 days. You can return a list of purchase order statuses using the available filters, or a single purchase order status by providing the purchase order number.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.limit] The limit to the number of records returned. Default value is 100 records.
       * @param {String} [opts.sortOrder] Sort in ascending or descending order by purchase order creation date.
       * @param {String} [opts.nextToken] Used for pagination when there are more purchase orders than the specified result size limit.
       * @param {Date} [opts.createdAfter] Purchase orders that became available after this timestamp will be included in the result. Must be in ISO-8601 date/time format.
       * @param {Date} [opts.createdBefore] Purchase orders that became available before this timestamp will be included in the result. Must be in ISO-8601 date/time format.
       * @param {Date} [opts.updatedAfter] Purchase orders for which the last purchase order update happened after this timestamp will be included in the result. Must be in ISO-8601 date/time format.
       * @param {Date} [opts.updatedBefore] Purchase orders for which the last purchase order update happened before this timestamp will be included in the result. Must be in ISO-8601 date/time format.
       * @param {String} [opts.purchaseOrderNumber] Provides purchase order status for the specified purchase order number.
       * @param {String} [opts.purchaseOrderStatus] Filters purchase orders based on the specified purchase order status. If not included in filter, this will return purchase orders for all statuses.
       * @param {String} [opts.itemConfirmationStatus] Filters purchase orders based on their item confirmation status. If the item confirmation status is not included in the filter, purchase orders for all confirmation statuses are included.
       * @param {String} [opts.itemReceiveStatus] Filters purchase orders based on the purchase order&#39;s item receive status. If the item receive status is not included in the filter, purchase orders for all receive statuses are included.
       * @param {String} [opts.orderingVendorCode] Filters purchase orders based on the specified ordering vendor code. This value should be same as &#39;sellingParty.partyId&#39; in the purchase order. If not included in filter, all purchase orders for all the vendor codes that exist in the vendor group used to authorize API client application are returned.
       * @param {String} [opts.shipToPartyId] Filters purchase orders for a specific buyer&#39;s Fulfillment Center/warehouse by providing ship to location id here. This value should be same as &#39;shipToParty.partyId&#39; in the purchase order. If not included in filter, this will return purchase orders for all the buyer&#39;s warehouses used for vendor group purchase orders.
       * @return {Promise<GetPurchaseOrdersStatusResponse>}
       */
    getPurchaseOrdersStatus(opts?: {
        limit?: number;
        sortOrder?: string;
        nextToken?: string;
        createdAfter?: Date;
        createdBefore?: Date;
        updatedAfter?: Date;
        updatedBefore?: Date;
        purchaseOrderNumber?: string;
        purchaseOrderStatus?: string;
        itemConfirmationStatus?: string;
        itemReceiveStatus?: string;
        orderingVendorCode?: string;
        shipToPartyId?: string;
    }): Promise<GetPurchaseOrdersStatusResponse>;
    /**
       * Submits acknowledgements for one or more purchase orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {SubmitAcknowledgementRequest} body Submits acknowledgements for one or more purchase orders from a vendor.
       * @return {Promise<SubmitAcknowledgementResponse>}
       */
    submitAcknowledgementWithHttpInfo(body: SubmitAcknowledgementRequest): Promise<SubmitAcknowledgementResponse>;
    /**
       * Submits acknowledgements for one or more purchase orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {SubmitAcknowledgementRequest} body Submits acknowledgements for one or more purchase orders from a vendor.
       * @return {Promise<SubmitAcknowledgementResponse>}
       */
    submitAcknowledgement(body: SubmitAcknowledgementRequest): Promise<SubmitAcknowledgementResponse>;
    #private;
}
import { GetPurchaseOrderResponse } from '../model/GetPurchaseOrderResponse.js';
import { GetPurchaseOrdersResponse } from '../model/GetPurchaseOrdersResponse.js';
import { GetPurchaseOrdersStatusResponse } from '../model/GetPurchaseOrdersStatusResponse.js';
import { SubmitAcknowledgementRequest } from '../model/SubmitAcknowledgementRequest.js';
import { SubmitAcknowledgementResponse } from '../model/SubmitAcknowledgementResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=VendorOrdersApi.d.ts.map