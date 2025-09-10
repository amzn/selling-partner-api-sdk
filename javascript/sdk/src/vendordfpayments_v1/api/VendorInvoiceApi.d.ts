/**
* VendorInvoice service.
* @module vendordfpayments_v1/api/VendorInvoiceApi
* @version v1
*/
export class VendorInvoiceApi {
    /**
      * Constructs a new VendorInvoiceApi.
      * @alias module:vendordfpayments_v1/api/VendorInvoiceApi
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
       * Submits one or more invoices for a vendor&#39;s direct fulfillment orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {SubmitInvoiceRequest} body The request body containing one or more invoices for vendor orders.
       * @return {Promise<SubmitInvoiceResponse>}
       */
    submitInvoiceWithHttpInfo(body: SubmitInvoiceRequest): Promise<SubmitInvoiceResponse>;
    /**
       * Submits one or more invoices for a vendor&#39;s direct fulfillment orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {SubmitInvoiceRequest} body The request body containing one or more invoices for vendor orders.
       * @return {Promise<SubmitInvoiceResponse>}
       */
    submitInvoice(body: SubmitInvoiceRequest): Promise<SubmitInvoiceResponse>;
    #private;
}
import { SubmitInvoiceRequest } from '../model/SubmitInvoiceRequest.js';
import { SubmitInvoiceResponse } from '../model/SubmitInvoiceResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=VendorInvoiceApi.d.ts.map