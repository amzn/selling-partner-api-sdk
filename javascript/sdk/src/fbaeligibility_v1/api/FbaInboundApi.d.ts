/**
* FbaInbound service.
* @module fbaeligibility_v1/api/FbaInboundApi
* @version v1
*/
export class FbaInboundApi {
    /**
      * Constructs a new FbaInboundApi.
      * @alias module:fbaeligibility_v1/api/FbaInboundApi
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
       * This operation gets an eligibility preview for an item that you specify. You can specify the type of eligibility preview that you want (INBOUND or COMMINGLING). For INBOUND previews, you can specify the marketplace in which you want to determine the item&#39;s eligibility.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} asin The ASIN of the item for which you want an eligibility preview.
       * @param {String} program The program that you want to check eligibility against.
       * @param {Object} [opts] Optional parameters
       * @param {[String]} [opts.marketplaceIds] The identifier for the marketplace in which you want to determine eligibility. Required only when program&#x3D;INBOUND.
       * @return {Promise<GetItemEligibilityPreviewResponse>}
       */
    getItemEligibilityPreviewWithHttpInfo(asin: string, program: string, opts?: {
        marketplaceIds?: [string];
    }): Promise<GetItemEligibilityPreviewResponse>;
    /**
       * This operation gets an eligibility preview for an item that you specify. You can specify the type of eligibility preview that you want (INBOUND or COMMINGLING). For INBOUND previews, you can specify the marketplace in which you want to determine the item&#39;s eligibility.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} asin The ASIN of the item for which you want an eligibility preview.
       * @param {String} program The program that you want to check eligibility against.
       * @param {Object} [opts] Optional parameters
       * @param {[String]} [opts.marketplaceIds] The identifier for the marketplace in which you want to determine eligibility. Required only when program&#x3D;INBOUND.
       * @return {Promise<GetItemEligibilityPreviewResponse>}
       */
    getItemEligibilityPreview(asin: string, program: string, opts?: {
        marketplaceIds?: [string];
    }): Promise<GetItemEligibilityPreviewResponse>;
    #private;
}
import { GetItemEligibilityPreviewResponse } from '../model/GetItemEligibilityPreviewResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=FbaInboundApi.d.ts.map