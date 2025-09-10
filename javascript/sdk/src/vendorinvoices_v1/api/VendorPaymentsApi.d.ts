/**
* VendorPayments service.
* @module vendorinvoices_v1/api/VendorPaymentsApi
* @version v1
*/
export class VendorPaymentsApi {
    /**
      * Constructs a new VendorPaymentsApi.
      * @alias module:vendorinvoices_v1/api/VendorPaymentsApi
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
       * Submit new invoices to Amazon.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {SubmitInvoicesRequest} body The request body containing the invoice data to submit.
       * @return {Promise<SubmitInvoicesResponse>}
       */
    submitInvoicesWithHttpInfo(body: SubmitInvoicesRequest): Promise<SubmitInvoicesResponse>;
    /**
       * Submit new invoices to Amazon.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {SubmitInvoicesRequest} body The request body containing the invoice data to submit.
       * @return {Promise<SubmitInvoicesResponse>}
       */
    submitInvoices(body: SubmitInvoicesRequest): Promise<SubmitInvoicesResponse>;
    #private;
}
import { SubmitInvoicesRequest } from '../model/SubmitInvoicesRequest.js';
import { SubmitInvoicesResponse } from '../model/SubmitInvoicesResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=VendorPaymentsApi.d.ts.map