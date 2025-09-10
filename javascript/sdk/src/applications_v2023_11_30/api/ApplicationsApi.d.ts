/**
* Applications service.
* @module applications_v2023_11_30/api/ApplicationsApi
* @version 2023-11-30
*/
export class ApplicationsApi {
    /**
      * Constructs a new ApplicationsApi.
      * @alias module:applications_v2023_11_30/api/ApplicationsApi
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
       * Rotates application client secrets for a developer application. Developers must register a destination queue in the developer console before calling this operation. When this operation is called a new client secret is generated and sent to the developer-registered queue. For more information, refer to [Rotate your application client secret](https://developer-docs.amazon.com/sp-api/v0/docs/application-management-api-v2023-11-30-use-case-guide#tutorial-rotate-your-applications-client-secret).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @return {Promise<void>}
       */
    rotateApplicationClientSecretWithHttpInfo(): Promise<void>;
    /**
       * Rotates application client secrets for a developer application. Developers must register a destination queue in the developer console before calling this operation. When this operation is called a new client secret is generated and sent to the developer-registered queue. For more information, refer to [Rotate your application client secret](https://developer-docs.amazon.com/sp-api/v0/docs/application-management-api-v2023-11-30-use-case-guide#tutorial-rotate-your-applications-client-secret).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @return {Promise<void>}
       */
    rotateApplicationClientSecret(): Promise<void>;
    #private;
}
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=ApplicationsApi.d.ts.map