/**
* CustomerInvoices service.
* @module vendordfshipping_v2021_12_28/api/CustomerInvoicesApi
* @version 2021-12-28
*/
export class CustomerInvoicesApi {
    /**
      * Constructs a new CustomerInvoicesApi.
      * @alias module:vendordfshipping_v2021_12_28/api/CustomerInvoicesApi
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
       * getCustomerInvoice
       * Returns a customer invoice based on the purchaseOrderNumber that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
       * @param {String} purchaseOrderNumber Purchase order number of the shipment for which to return the invoice.
       * @return {Promise<CustomerInvoice>}
       */
    getCustomerInvoiceWithHttpInfo(purchaseOrderNumber: string): Promise<CustomerInvoice>;
    /**
       * getCustomerInvoice
       * Returns a customer invoice based on the purchaseOrderNumber that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
       * @param {String} purchaseOrderNumber Purchase order number of the shipment for which to return the invoice.
       * @return {Promise<CustomerInvoice>}
       */
    getCustomerInvoice(purchaseOrderNumber: string): Promise<CustomerInvoice>;
    /**
       * getCustomerInvoices
       * Returns a list of customer invoices created during a time frame that you specify. You define the time frame using the createdAfter and createdBefore parameters. You must use both of these parameters. The date range to search must be no more than 7 days.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
       * @param {Date} createdAfter Orders that became available after this date and time will be included in the result. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
       * @param {Date} createdBefore Orders that became available before this date and time will be included in the result. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.shipFromPartyId] The vendor warehouseId for order fulfillment. If not specified, the result will contain orders for all warehouses.
       * @param {Number} [opts.limit] The limit to the number of records returned
       * @param {String} [opts.sortOrder] Sort ASC or DESC by order creation date.
       * @param {String} [opts.nextToken] Used for pagination when there are more orders than the specified result size limit. The token value is returned in the previous API call.
       * @return {Promise<CustomerInvoiceList>}
       */
    getCustomerInvoicesWithHttpInfo(createdAfter: Date, createdBefore: Date, opts?: {
        shipFromPartyId?: string;
        limit?: number;
        sortOrder?: string;
        nextToken?: string;
    }): Promise<CustomerInvoiceList>;
    /**
       * getCustomerInvoices
       * Returns a list of customer invoices created during a time frame that you specify. You define the time frame using the createdAfter and createdBefore parameters. You must use both of these parameters. The date range to search must be no more than 7 days.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
       * @param {Date} createdAfter Orders that became available after this date and time will be included in the result. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
       * @param {Date} createdBefore Orders that became available before this date and time will be included in the result. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.shipFromPartyId] The vendor warehouseId for order fulfillment. If not specified, the result will contain orders for all warehouses.
       * @param {Number} [opts.limit] The limit to the number of records returned
       * @param {String} [opts.sortOrder] Sort ASC or DESC by order creation date.
       * @param {String} [opts.nextToken] Used for pagination when there are more orders than the specified result size limit. The token value is returned in the previous API call.
       * @return {Promise<CustomerInvoiceList>}
       */
    getCustomerInvoices(createdAfter: Date, createdBefore: Date, opts?: {
        shipFromPartyId?: string;
        limit?: number;
        sortOrder?: string;
        nextToken?: string;
    }): Promise<CustomerInvoiceList>;
    #private;
}
import { CustomerInvoice } from '../model/CustomerInvoice.js';
import { CustomerInvoiceList } from '../model/CustomerInvoiceList.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=CustomerInvoicesApi.d.ts.map