/**
* ProductPricing service.
* @module pricing_v2022_05_01/api/ProductPricingApi
* @version 2022-05-01
*/
export class ProductPricingApi {
    /**
      * Constructs a new ProductPricingApi.
      * @alias module:pricing_v2022_05_01/api/ProductPricingApi
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
       * Returns the competitive summary response, including featured buying options for the ASIN and &#x60;marketplaceId&#x60; combination.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.033 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that are applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may receive higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API.
       * @param {CompetitiveSummaryBatchRequest} requests The batch of &#x60;getCompetitiveSummary&#x60; requests.
       * @return {Promise<CompetitiveSummaryBatchResponse>}
       */
    getCompetitiveSummaryWithHttpInfo(requests: CompetitiveSummaryBatchRequest): Promise<CompetitiveSummaryBatchResponse>;
    /**
       * Returns the competitive summary response, including featured buying options for the ASIN and &#x60;marketplaceId&#x60; combination.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.033 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that are applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may receive higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API.
       * @param {CompetitiveSummaryBatchRequest} requests The batch of &#x60;getCompetitiveSummary&#x60; requests.
       * @return {Promise<CompetitiveSummaryBatchResponse>}
       */
    getCompetitiveSummary(requests: CompetitiveSummaryBatchRequest): Promise<CompetitiveSummaryBatchResponse>;
    /**
       * Returns the set of responses that correspond to the batched list of up to 40 requests defined in the request body. The response for each successful (HTTP status code 200) request in the set includes the computed listing price at or below which a seller can expect to become the featured offer (before applicable promotions). This is called the featured offer expected price (FOEP). Featured offer is not guaranteed because competing offers might change. Other offers might be featured based on factors such as fulfillment capabilities to a specific customer. The response to an unsuccessful request includes the available error text.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.033 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that are applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may receive higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API.
       * @param {GetFeaturedOfferExpectedPriceBatchRequest} getFeaturedOfferExpectedPriceBatchRequestBody The batch of &#x60;getFeaturedOfferExpectedPrice&#x60; requests.
       * @return {Promise<GetFeaturedOfferExpectedPriceBatchResponse>}
       */
    getFeaturedOfferExpectedPriceBatchWithHttpInfo(getFeaturedOfferExpectedPriceBatchRequestBody: GetFeaturedOfferExpectedPriceBatchRequest): Promise<GetFeaturedOfferExpectedPriceBatchResponse>;
    /**
       * Returns the set of responses that correspond to the batched list of up to 40 requests defined in the request body. The response for each successful (HTTP status code 200) request in the set includes the computed listing price at or below which a seller can expect to become the featured offer (before applicable promotions). This is called the featured offer expected price (FOEP). Featured offer is not guaranteed because competing offers might change. Other offers might be featured based on factors such as fulfillment capabilities to a specific customer. The response to an unsuccessful request includes the available error text.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.033 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that are applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may receive higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API.
       * @param {GetFeaturedOfferExpectedPriceBatchRequest} getFeaturedOfferExpectedPriceBatchRequestBody The batch of &#x60;getFeaturedOfferExpectedPrice&#x60; requests.
       * @return {Promise<GetFeaturedOfferExpectedPriceBatchResponse>}
       */
    getFeaturedOfferExpectedPriceBatch(getFeaturedOfferExpectedPriceBatchRequestBody: GetFeaturedOfferExpectedPriceBatchRequest): Promise<GetFeaturedOfferExpectedPriceBatchResponse>;
    #private;
}
import { CompetitiveSummaryBatchRequest } from '../model/CompetitiveSummaryBatchRequest.js';
import { CompetitiveSummaryBatchResponse } from '../model/CompetitiveSummaryBatchResponse.js';
import { GetFeaturedOfferExpectedPriceBatchRequest } from '../model/GetFeaturedOfferExpectedPriceBatchRequest.js';
import { GetFeaturedOfferExpectedPriceBatchResponse } from '../model/GetFeaturedOfferExpectedPriceBatchResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=ProductPricingApi.d.ts.map