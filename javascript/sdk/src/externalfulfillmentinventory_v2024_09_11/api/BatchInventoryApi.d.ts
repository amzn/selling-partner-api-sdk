/**
* BatchInventory service.
* @module externalfulfillmentinventory_v2024_09_11/api/BatchInventoryApi
* @version 2024-09-11
*/
export class BatchInventoryApi {
    /**
      * Constructs a new BatchInventoryApi.
      * @alias module:externalfulfillmentinventory_v2024_09_11/api/BatchInventoryApi
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
       * Make up to 10 inventory requests. The response includes the set of responses that correspond to requests. The response for each successful request in the set includes the  inventory count for the provided &#x60;sku&#x60; and &#x60;locationId&#x60; pair.
       * @param {BatchInventoryRequest} body A list of inventory requests.
       * @return {Promise<BatchInventoryResponse>}
       */
    batchInventoryWithHttpInfo(body: BatchInventoryRequest): Promise<BatchInventoryResponse>;
    /**
       * Make up to 10 inventory requests. The response includes the set of responses that correspond to requests. The response for each successful request in the set includes the  inventory count for the provided &#x60;sku&#x60; and &#x60;locationId&#x60; pair.
       * @param {BatchInventoryRequest} body A list of inventory requests.
       * @return {Promise<BatchInventoryResponse>}
       */
    batchInventory(body: BatchInventoryRequest): Promise<BatchInventoryResponse>;
    #private;
}
import { BatchInventoryRequest } from '../model/BatchInventoryRequest.js';
import { BatchInventoryResponse } from '../model/BatchInventoryResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=BatchInventoryApi.d.ts.map