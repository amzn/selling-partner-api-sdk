/**
* Offers service.
* @module replenishment_v2022_11_07/api/OffersApi
* @version 2022-11-07
*/
export class OffersApi {
    /**
      * Constructs a new OffersApi.
      * @alias module:replenishment_v2022_11_07/api/OffersApi
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
       * Returns aggregated replenishment program metrics for a selling partner&#39;s offers.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Object} [opts] Optional parameters
       * @param {ListOfferMetricsRequest} [opts.body] The request body for the &#x60;listOfferMetrics&#x60; operation.
       * @return {Promise<ListOfferMetricsResponse>}
       */
    listOfferMetricsWithHttpInfo(opts?: {
        body?: ListOfferMetricsRequest;
    }): Promise<ListOfferMetricsResponse>;
    /**
       * Returns aggregated replenishment program metrics for a selling partner&#39;s offers.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Object} [opts] Optional parameters
       * @param {ListOfferMetricsRequest} [opts.body] The request body for the &#x60;listOfferMetrics&#x60; operation.
       * @return {Promise<ListOfferMetricsResponse>}
       */
    listOfferMetrics(opts?: {
        body?: ListOfferMetricsRequest;
    }): Promise<ListOfferMetricsResponse>;
    /**
       * Returns the details of a selling partner&#39;s replenishment program offers.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Object} [opts] Optional parameters
       * @param {ListOffersRequest} [opts.body] The request body for the &#x60;listOffers&#x60; operation.
       * @return {Promise<ListOffersResponse>}
       */
    listOffersWithHttpInfo(opts?: {
        body?: ListOffersRequest;
    }): Promise<ListOffersResponse>;
    /**
       * Returns the details of a selling partner&#39;s replenishment program offers.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Object} [opts] Optional parameters
       * @param {ListOffersRequest} [opts.body] The request body for the &#x60;listOffers&#x60; operation.
       * @return {Promise<ListOffersResponse>}
       */
    listOffers(opts?: {
        body?: ListOffersRequest;
    }): Promise<ListOffersResponse>;
    #private;
}
import { ListOfferMetricsRequest } from '../model/ListOfferMetricsRequest.js';
import { ListOfferMetricsResponse } from '../model/ListOfferMetricsResponse.js';
import { ListOffersRequest } from '../model/ListOffersRequest.js';
import { ListOffersResponse } from '../model/ListOffersResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=OffersApi.d.ts.map