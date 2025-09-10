/**
* Default service.
* @module transfers_v2024_06_01/api/DefaultApi
* @version 2024-06-01
*/
export class DefaultApi {
    /**
      * Constructs a new DefaultApi.
      * @alias module:transfers_v2024_06_01/api/DefaultApi
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
       * Returns the list of payment methods for the seller, which can be filtered by method type.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | .5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} marketplaceId The identifier of the marketplace from which you want to retrieve payment methods. For the list of possible marketplace identifiers, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {Object} [opts] Optional parameters
       * @param {[String]} [opts.paymentMethodTypes] A comma-separated list of the payment method types you want to include in the response.
       * @return {Promise<GetPaymentMethodsResponse>}
       */
    getPaymentMethodsWithHttpInfo(marketplaceId: string, opts?: {
        paymentMethodTypes?: [string];
    }): Promise<GetPaymentMethodsResponse>;
    /**
       * Returns the list of payment methods for the seller, which can be filtered by method type.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | .5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} marketplaceId The identifier of the marketplace from which you want to retrieve payment methods. For the list of possible marketplace identifiers, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {Object} [opts] Optional parameters
       * @param {[String]} [opts.paymentMethodTypes] A comma-separated list of the payment method types you want to include in the response.
       * @return {Promise<GetPaymentMethodsResponse>}
       */
    getPaymentMethods(marketplaceId: string, opts?: {
        paymentMethodTypes?: [string];
    }): Promise<GetPaymentMethodsResponse>;
    /**
       * Initiates an on-demand payout to the seller&#39;s default deposit method in Seller Central for the given &#x60;marketplaceId&#x60; and &#x60;accountType&#x60;, if eligible. You can only initiate one on-demand payout for each marketplace and account type within a 24-hour period.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.017 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {InitiatePayoutRequest} body The request body for the &#x60;initiatePayout&#x60; operation.
       * @return {Promise<InitiatePayoutResponse>}
       */
    initiatePayoutWithHttpInfo(body: InitiatePayoutRequest): Promise<InitiatePayoutResponse>;
    /**
       * Initiates an on-demand payout to the seller&#39;s default deposit method in Seller Central for the given &#x60;marketplaceId&#x60; and &#x60;accountType&#x60;, if eligible. You can only initiate one on-demand payout for each marketplace and account type within a 24-hour period.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.017 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {InitiatePayoutRequest} body The request body for the &#x60;initiatePayout&#x60; operation.
       * @return {Promise<InitiatePayoutResponse>}
       */
    initiatePayout(body: InitiatePayoutRequest): Promise<InitiatePayoutResponse>;
    #private;
}
import { GetPaymentMethodsResponse } from '../model/GetPaymentMethodsResponse.js';
import { InitiatePayoutRequest } from '../model/InitiatePayoutRequest.js';
import { InitiatePayoutResponse } from '../model/InitiatePayoutResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=DefaultApi.d.ts.map