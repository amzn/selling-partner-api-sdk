/**
* Sellingpartners service.
* @module replenishment_v2022_11_07/api/SellingpartnersApi
* @version 2022-11-07
*/
export class SellingpartnersApi {
    /**
      * Constructs a new SellingpartnersApi.
      * @alias module:replenishment_v2022_11_07/api/SellingpartnersApi
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
       * Returns aggregated replenishment program metrics for a selling partner.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Object} [opts] Optional parameters
       * @param {GetSellingPartnerMetricsRequest} [opts.body] The request body for the &#x60;getSellingPartnerMetrics&#x60; operation.
       * @return {Promise<GetSellingPartnerMetricsResponse>}
       */
    getSellingPartnerMetricsWithHttpInfo(opts?: {
        body?: GetSellingPartnerMetricsRequest;
    }): Promise<GetSellingPartnerMetricsResponse>;
    /**
       * Returns aggregated replenishment program metrics for a selling partner.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Object} [opts] Optional parameters
       * @param {GetSellingPartnerMetricsRequest} [opts.body] The request body for the &#x60;getSellingPartnerMetrics&#x60; operation.
       * @return {Promise<GetSellingPartnerMetricsResponse>}
       */
    getSellingPartnerMetrics(opts?: {
        body?: GetSellingPartnerMetricsRequest;
    }): Promise<GetSellingPartnerMetricsResponse>;
    #private;
}
import { GetSellingPartnerMetricsRequest } from '../model/GetSellingPartnerMetricsRequest.js';
import { GetSellingPartnerMetricsResponse } from '../model/GetSellingPartnerMetricsResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=SellingpartnersApi.d.ts.map