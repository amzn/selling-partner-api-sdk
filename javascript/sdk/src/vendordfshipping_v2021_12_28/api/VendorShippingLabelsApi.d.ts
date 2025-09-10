/**
* VendorShippingLabels service.
* @module vendordfshipping_v2021_12_28/api/VendorShippingLabelsApi
* @version 2021-12-28
*/
export class VendorShippingLabelsApi {
    /**
      * Constructs a new VendorShippingLabelsApi.
      * @alias module:vendordfshipping_v2021_12_28/api/VendorShippingLabelsApi
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
       * createShippingLabels
       * Creates shipping labels for a purchase order and returns the labels.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
       * @param {String} purchaseOrderNumber The purchase order number for which you want to return the shipping labels. It should be the same number as the &#x60;purchaseOrderNumber&#x60; in the order.
       * @param {CreateShippingLabelsRequest} body The request payload that contains the parameters for creating shipping labels.
       * @return {Promise<ShippingLabel>}
       */
    createShippingLabelsWithHttpInfo(purchaseOrderNumber: string, body: CreateShippingLabelsRequest): Promise<ShippingLabel>;
    /**
       * createShippingLabels
       * Creates shipping labels for a purchase order and returns the labels.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
       * @param {String} purchaseOrderNumber The purchase order number for which you want to return the shipping labels. It should be the same number as the &#x60;purchaseOrderNumber&#x60; in the order.
       * @param {CreateShippingLabelsRequest} body The request payload that contains the parameters for creating shipping labels.
       * @return {Promise<ShippingLabel>}
       */
    createShippingLabels(purchaseOrderNumber: string, body: CreateShippingLabelsRequest): Promise<ShippingLabel>;
    /**
       * getShippingLabel
       * Returns a shipping label for the &#x60;purchaseOrderNumber&#x60; that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
       * @param {String} purchaseOrderNumber The purchase order number for which you want to return the shipping label. It should be the same &#x60;purchaseOrderNumber&#x60; that you received in the order.
       * @return {Promise<ShippingLabel>}
       */
    getShippingLabelWithHttpInfo(purchaseOrderNumber: string): Promise<ShippingLabel>;
    /**
       * getShippingLabel
       * Returns a shipping label for the &#x60;purchaseOrderNumber&#x60; that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
       * @param {String} purchaseOrderNumber The purchase order number for which you want to return the shipping label. It should be the same &#x60;purchaseOrderNumber&#x60; that you received in the order.
       * @return {Promise<ShippingLabel>}
       */
    getShippingLabel(purchaseOrderNumber: string): Promise<ShippingLabel>;
    /**
       * getShippingLabels
       * Returns a list of shipping labels created during the time frame that you specify. Use the &#x60;createdAfter&#x60; and &#x60;createdBefore&#x60; parameters to define the time frame. You must use both of these parameters. The date range to search must not be more than seven days.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
       * @param {Date} createdAfter Shipping labels that became available after this date and time will be included in the result. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
       * @param {Date} createdBefore Shipping labels that became available before this date and time will be included in the result. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.shipFromPartyId] The vendor &#x60;warehouseId&#x60; for order fulfillment. If not specified, the result contains orders for all warehouses.
       * @param {Number} [opts.limit] The limit to the number of records returned.
       * @param {String} [opts.sortOrder] The sort order creation date. You can choose between ascending (&#x60;ASC&#x60;) or descending (&#x60;DESC&#x60;) sort order. (default to &#39;ASC&#39;)
       * @param {String} [opts.nextToken] Used for pagination when there are more ship labels than the specified result size limit. The token value is returned in the previous API call.
       * @return {Promise<ShippingLabelList>}
       */
    getShippingLabelsWithHttpInfo(createdAfter: Date, createdBefore: Date, opts?: {
        shipFromPartyId?: string;
        limit?: number;
        sortOrder?: string;
        nextToken?: string;
    }): Promise<ShippingLabelList>;
    /**
       * getShippingLabels
       * Returns a list of shipping labels created during the time frame that you specify. Use the &#x60;createdAfter&#x60; and &#x60;createdBefore&#x60; parameters to define the time frame. You must use both of these parameters. The date range to search must not be more than seven days.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
       * @param {Date} createdAfter Shipping labels that became available after this date and time will be included in the result. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
       * @param {Date} createdBefore Shipping labels that became available before this date and time will be included in the result. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.shipFromPartyId] The vendor &#x60;warehouseId&#x60; for order fulfillment. If not specified, the result contains orders for all warehouses.
       * @param {Number} [opts.limit] The limit to the number of records returned.
       * @param {String} [opts.sortOrder] The sort order creation date. You can choose between ascending (&#x60;ASC&#x60;) or descending (&#x60;DESC&#x60;) sort order. (default to &#39;ASC&#39;)
       * @param {String} [opts.nextToken] Used for pagination when there are more ship labels than the specified result size limit. The token value is returned in the previous API call.
       * @return {Promise<ShippingLabelList>}
       */
    getShippingLabels(createdAfter: Date, createdBefore: Date, opts?: {
        shipFromPartyId?: string;
        limit?: number;
        sortOrder?: string;
        nextToken?: string;
    }): Promise<ShippingLabelList>;
    /**
       * submitShippingLabelRequest
       * Creates a shipping label for a purchase order and returns a &#x60;transactionId&#x60; for reference.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
       * @param {SubmitShippingLabelsRequest} body The request body that contains the shipping labels data.
       * @return {Promise<TransactionReference>}
       */
    submitShippingLabelRequestWithHttpInfo(body: SubmitShippingLabelsRequest): Promise<TransactionReference>;
    /**
       * submitShippingLabelRequest
       * Creates a shipping label for a purchase order and returns a &#x60;transactionId&#x60; for reference.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
       * @param {SubmitShippingLabelsRequest} body The request body that contains the shipping labels data.
       * @return {Promise<TransactionReference>}
       */
    submitShippingLabelRequest(body: SubmitShippingLabelsRequest): Promise<TransactionReference>;
    #private;
}
import { CreateShippingLabelsRequest } from '../model/CreateShippingLabelsRequest.js';
import { ShippingLabel } from '../model/ShippingLabel.js';
import { ShippingLabelList } from '../model/ShippingLabelList.js';
import { SubmitShippingLabelsRequest } from '../model/SubmitShippingLabelsRequest.js';
import { TransactionReference } from '../model/TransactionReference.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=VendorShippingLabelsApi.d.ts.map