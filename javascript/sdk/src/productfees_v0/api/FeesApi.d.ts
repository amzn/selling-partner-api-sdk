/**
* Fees service.
* @module productfees_v0/api/FeesApi
* @version v0
*/
export class FeesApi {
    /**
      * Constructs a new FeesApi.
      * @alias module:productfees_v0/api/FeesApi
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
       * Returns the estimated fees for the item indicated by the specified ASIN in the marketplace specified in the request body.  You can call &#x60;getMyFeesEstimateForASIN&#x60; for an item on behalf of a selling partner before the selling partner sets the item&#39;s price. The selling partner can then take estimated fees into account. Each fees request must include an original identifier. This identifier is included in the fees estimate so you can correlate a fees estimate with the original request.  **Note:** This identifier value is used to identify an estimate. Actual costs may vary. Search \&quot;fees\&quot; in [Seller Central](https://sellercentral.amazon.com/) and consult the store-specific fee schedule for the most up-to-date information.  **Note:** When using the &#x60;getMyFeesEstimateForASIN&#x60; operation with an ASIN, the fee estimates might be different. This is because these estimates use the item&#39;s catalog size, which might not always match the actual size of the item sent to Amazon.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} asin The Amazon Standard Identification Number (ASIN) of the item.
       * @param {GetMyFeesEstimateRequest} body The request body schema for the getMyFeesEstimates operation
       * @return {Promise<GetMyFeesEstimateResponse>}
       */
    getMyFeesEstimateForASINWithHttpInfo(asin: string, body: GetMyFeesEstimateRequest): Promise<GetMyFeesEstimateResponse>;
    /**
       * Returns the estimated fees for the item indicated by the specified ASIN in the marketplace specified in the request body.  You can call &#x60;getMyFeesEstimateForASIN&#x60; for an item on behalf of a selling partner before the selling partner sets the item&#39;s price. The selling partner can then take estimated fees into account. Each fees request must include an original identifier. This identifier is included in the fees estimate so you can correlate a fees estimate with the original request.  **Note:** This identifier value is used to identify an estimate. Actual costs may vary. Search \&quot;fees\&quot; in [Seller Central](https://sellercentral.amazon.com/) and consult the store-specific fee schedule for the most up-to-date information.  **Note:** When using the &#x60;getMyFeesEstimateForASIN&#x60; operation with an ASIN, the fee estimates might be different. This is because these estimates use the item&#39;s catalog size, which might not always match the actual size of the item sent to Amazon.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} asin The Amazon Standard Identification Number (ASIN) of the item.
       * @param {GetMyFeesEstimateRequest} body The request body schema for the getMyFeesEstimates operation
       * @return {Promise<GetMyFeesEstimateResponse>}
       */
    getMyFeesEstimateForASIN(asin: string, body: GetMyFeesEstimateRequest): Promise<GetMyFeesEstimateResponse>;
    /**
       * Returns the estimated fees for the item indicated by the specified seller SKU in the marketplace specified in the request body.  **Note:** The parameters associated with this operation may contain special characters that require URL encoding to call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  You can call &#x60;getMyFeesEstimateForSKU&#x60; for an item on behalf of a selling partner before the selling partner sets the item&#39;s price. The selling partner can then take any estimated fees into account. Each fees estimate request must include an original identifier. This identifier is included in the fees estimate so that you can correlate a fees estimate with the original request.  **Note:** This identifier value is used to identify an estimate. Actual costs may vary. Search \&quot;fees\&quot; in [Seller Central](https://sellercentral.amazon.com/) and consult the store-specific fee schedule for the most up-to-date information.  **Note:** When sellers use the &#x60;getMyFeesEstimateForSKU&#x60; operation with their &#x60;SellerSKU&#x60;, they get accurate fees based on real item measurements, but only after they&#39;ve sent their items to Amazon.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} sellerSKU Used to identify an item in the given marketplace. SellerSKU is qualified by the seller&#39;s SellerId, which is included with every operation that you submit.
       * @param {GetMyFeesEstimateRequest} body The request body schema for the getMyFeesEstimates operation
       * @return {Promise<GetMyFeesEstimateResponse>}
       */
    getMyFeesEstimateForSKUWithHttpInfo(sellerSKU: string, body: GetMyFeesEstimateRequest): Promise<GetMyFeesEstimateResponse>;
    /**
       * Returns the estimated fees for the item indicated by the specified seller SKU in the marketplace specified in the request body.  **Note:** The parameters associated with this operation may contain special characters that require URL encoding to call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  You can call &#x60;getMyFeesEstimateForSKU&#x60; for an item on behalf of a selling partner before the selling partner sets the item&#39;s price. The selling partner can then take any estimated fees into account. Each fees estimate request must include an original identifier. This identifier is included in the fees estimate so that you can correlate a fees estimate with the original request.  **Note:** This identifier value is used to identify an estimate. Actual costs may vary. Search \&quot;fees\&quot; in [Seller Central](https://sellercentral.amazon.com/) and consult the store-specific fee schedule for the most up-to-date information.  **Note:** When sellers use the &#x60;getMyFeesEstimateForSKU&#x60; operation with their &#x60;SellerSKU&#x60;, they get accurate fees based on real item measurements, but only after they&#39;ve sent their items to Amazon.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} sellerSKU Used to identify an item in the given marketplace. SellerSKU is qualified by the seller&#39;s SellerId, which is included with every operation that you submit.
       * @param {GetMyFeesEstimateRequest} body The request body schema for the getMyFeesEstimates operation
       * @return {Promise<GetMyFeesEstimateResponse>}
       */
    getMyFeesEstimateForSKU(sellerSKU: string, body: GetMyFeesEstimateRequest): Promise<GetMyFeesEstimateResponse>;
    /**
       * Returns the estimated fees for a list of products.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {FeesEstimateByIdRequest[]} body The request body schema for the getMyFeesEstimates operation
       * @return {Promise<[FeesEstimateResult]>}
       */
    getMyFeesEstimatesWithHttpInfo(body: FeesEstimateByIdRequest[]): Promise<[FeesEstimateResult]>;
    /**
       * Returns the estimated fees for a list of products.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {FeesEstimateByIdRequest[]} body The request body schema for the getMyFeesEstimates operation
       * @return {Promise<[FeesEstimateResult]>}
       */
    getMyFeesEstimates(body: FeesEstimateByIdRequest[]): Promise<[FeesEstimateResult]>;
    #private;
}
import { GetMyFeesEstimateRequest } from '../model/GetMyFeesEstimateRequest.js';
import { GetMyFeesEstimateResponse } from '../model/GetMyFeesEstimateResponse.js';
import { FeesEstimateByIdRequest } from '../model/FeesEstimateByIdRequest.js';
import { FeesEstimateResult } from '../model/FeesEstimateResult.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=FeesApi.d.ts.map