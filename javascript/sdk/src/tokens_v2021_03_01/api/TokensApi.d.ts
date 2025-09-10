/**
* Tokens service.
* @module tokens_v2021_03_01/api/TokensApi
* @version 2021-03-01
*/
export class TokensApi {
    /**
      * Constructs a new TokensApi.
      * @alias module:tokens_v2021_03_01/api/TokensApi
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
       * Returns a Restricted Data Token (RDT) for one or more restricted resources that you specify. A restricted resource is the HTTP method and path from a restricted operation that returns Personally Identifiable Information (PII), plus a dataElements value that indicates the type of PII requested. See the Tokens API Use Case Guide for a list of restricted operations. Use the RDT returned here as the access token in subsequent calls to the corresponding restricted operations.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {CreateRestrictedDataTokenRequest} body The restricted data token request details.
       * @return {Promise<CreateRestrictedDataTokenResponse>}
       */
    createRestrictedDataTokenWithHttpInfo(body: CreateRestrictedDataTokenRequest): Promise<CreateRestrictedDataTokenResponse>;
    /**
       * Returns a Restricted Data Token (RDT) for one or more restricted resources that you specify. A restricted resource is the HTTP method and path from a restricted operation that returns Personally Identifiable Information (PII), plus a dataElements value that indicates the type of PII requested. See the Tokens API Use Case Guide for a list of restricted operations. Use the RDT returned here as the access token in subsequent calls to the corresponding restricted operations.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {CreateRestrictedDataTokenRequest} body The restricted data token request details.
       * @return {Promise<CreateRestrictedDataTokenResponse>}
       */
    createRestrictedDataToken(body: CreateRestrictedDataTokenRequest): Promise<CreateRestrictedDataTokenResponse>;
    #private;
}
import { CreateRestrictedDataTokenRequest } from '../model/CreateRestrictedDataTokenRequest.js';
import { CreateRestrictedDataTokenResponse } from '../model/CreateRestrictedDataTokenResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=TokensApi.d.ts.map