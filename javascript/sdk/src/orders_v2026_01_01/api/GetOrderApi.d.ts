/**
* GetOrder service.
* @module orders_v2026_01_01/api/GetOrderApi
* @version 2026-01-01
*/
export class GetOrderApi {
    /**
      * Constructs a new GetOrderApi.
      * @alias module:orders_v2026_01_01/api/GetOrderApi
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
       * Returns the order that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that are applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may receive higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API documentation.
       * @param {String} orderId An Amazon-defined order identifier.
       * @param {Object} [opts] Optional parameters
       * @param {String[]} [opts.includedData] A list of datasets to include in the response.
       * @return {Promise<GetOrderResponse>}
       */
    getOrderWithHttpInfo(orderId: string, opts?: {
        includedData?: string[] | undefined;
    }): Promise<GetOrderResponse>;
    /**
       * Returns the order that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that are applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may receive higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API documentation.
       * @param {String} orderId An Amazon-defined order identifier.
       * @param {Object} [opts] Optional parameters
       * @param {String[]} [opts.includedData] A list of datasets to include in the response.
       * @return {Promise<GetOrderResponse>}
       */
    getOrder(orderId: string, opts?: {
        includedData?: string[] | undefined;
    }): Promise<GetOrderResponse>;
    #private;
}
import { GetOrderResponse } from '../model/GetOrderResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=GetOrderApi.d.ts.map