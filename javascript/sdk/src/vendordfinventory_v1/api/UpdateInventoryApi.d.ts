/**
* UpdateInventory service.
* @module vendordfinventory_v1/api/UpdateInventoryApi
* @version v1
*/
export class UpdateInventoryApi {
    /**
      * Constructs a new UpdateInventoryApi.
      * @alias module:vendordfinventory_v1/api/UpdateInventoryApi
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
       * Submits inventory updates for the specified warehouse for either a partial or full feed of inventory items.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} warehouseId Identifier for the warehouse for which to update inventory.
       * @param {SubmitInventoryUpdateRequest} body The request body containing the inventory update data to submit.
       * @return {Promise<SubmitInventoryUpdateResponse>}
       */
    submitInventoryUpdateWithHttpInfo(warehouseId: string, body: SubmitInventoryUpdateRequest): Promise<SubmitInventoryUpdateResponse>;
    /**
       * Submits inventory updates for the specified warehouse for either a partial or full feed of inventory items.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} warehouseId Identifier for the warehouse for which to update inventory.
       * @param {SubmitInventoryUpdateRequest} body The request body containing the inventory update data to submit.
       * @return {Promise<SubmitInventoryUpdateResponse>}
       */
    submitInventoryUpdate(warehouseId: string, body: SubmitInventoryUpdateRequest): Promise<SubmitInventoryUpdateResponse>;
    #private;
}
import { SubmitInventoryUpdateRequest } from '../model/SubmitInventoryUpdateRequest.js';
import { SubmitInventoryUpdateResponse } from '../model/SubmitInventoryUpdateResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=UpdateInventoryApi.d.ts.map