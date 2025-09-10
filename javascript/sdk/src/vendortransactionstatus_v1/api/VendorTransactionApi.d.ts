/**
* VendorTransaction service.
* @module vendortransactionstatus_v1/api/VendorTransactionApi
* @version v1
*/
export class VendorTransactionApi {
    /**
      * Constructs a new VendorTransactionApi.
      * @alias module:vendortransactionstatus_v1/api/VendorTransactionApi
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
       * Returns the status of the transaction that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} transactionId The GUID provided by Amazon in the &#39;transactionId&#39; field in response to the post request of a specific transaction.
       * @return {Promise<GetTransactionResponse>}
       */
    getTransactionWithHttpInfo(transactionId: string): Promise<GetTransactionResponse>;
    /**
       * Returns the status of the transaction that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} transactionId The GUID provided by Amazon in the &#39;transactionId&#39; field in response to the post request of a specific transaction.
       * @return {Promise<GetTransactionResponse>}
       */
    getTransaction(transactionId: string): Promise<GetTransactionResponse>;
    #private;
}
import { GetTransactionResponse } from '../model/GetTransactionResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=VendorTransactionApi.d.ts.map