/**
* VendorTransaction service.
* @module vendordftransactions_v2021_12_28/api/VendorTransactionApi
* @version 2021-12-28
*/
export class VendorTransactionApi {
    /**
      * Constructs a new VendorTransactionApi.
      * @alias module:vendordftransactions_v2021_12_28/api/VendorTransactionApi
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
       * Returns the status of the transaction indicated by the specified transactionId.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} transactionId Previously returned in the response to the POST request of a specific transaction.
       * @return {Promise<TransactionStatus>}
       */
    getTransactionStatusWithHttpInfo(transactionId: string): Promise<TransactionStatus>;
    /**
       * Returns the status of the transaction indicated by the specified transactionId.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} transactionId Previously returned in the response to the POST request of a specific transaction.
       * @return {Promise<TransactionStatus>}
       */
    getTransactionStatus(transactionId: string): Promise<TransactionStatus>;
    #private;
}
import { TransactionStatus } from '../model/TransactionStatus.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=VendorTransactionApi.d.ts.map