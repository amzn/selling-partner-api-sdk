/**
* CreateContainerLabel service.
* @module vendordfshipping_v2021_12_28/api/CreateContainerLabelApi
* @version 2021-12-28
*/
export class CreateContainerLabelApi {
    /**
      * Constructs a new CreateContainerLabelApi.
      * @alias module:vendordfshipping_v2021_12_28/api/CreateContainerLabelApi
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
       * createContainerLabel
       * Creates a container (pallet) label for the associated shipment package.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {CreateContainerLabelRequest} body Request body containing the container label data.
       * @return {Promise<CreateContainerLabelResponse>}
       */
    createContainerLabelWithHttpInfo(body: CreateContainerLabelRequest): Promise<CreateContainerLabelResponse>;
    /**
       * createContainerLabel
       * Creates a container (pallet) label for the associated shipment package.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {CreateContainerLabelRequest} body Request body containing the container label data.
       * @return {Promise<CreateContainerLabelResponse>}
       */
    createContainerLabel(body: CreateContainerLabelRequest): Promise<CreateContainerLabelResponse>;
    #private;
}
import { CreateContainerLabelRequest } from '../model/CreateContainerLabelRequest.js';
import { CreateContainerLabelResponse } from '../model/CreateContainerLabelResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=CreateContainerLabelApi.d.ts.map