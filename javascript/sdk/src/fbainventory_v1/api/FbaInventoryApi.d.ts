/**
* FbaInventory service.
* @module fbainventory_v1/api/FbaInventoryApi
* @version v1
*/
export class FbaInventoryApi {
    /**
      * Constructs a new FbaInventoryApi.
      * @alias module:fbainventory_v1/api/FbaInventoryApi
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
       * Requests that Amazon add items to the Sandbox Inventory with desired amount of quantity in the sandbox environment. This is a sandbox-only operation and must be directed to a sandbox endpoint. Refer to [Selling Partner API sandbox](https://developer-docs.amazon.com/sp-api/docs/the-selling-partner-api-sandbox) for more information.
       * @param {String} xAmznIdempotencyToken A unique token/requestId provided with each call to ensure idempotency.
       * @param {AddInventoryRequest} addInventoryRequestBody List of items to add to Sandbox inventory.
       * @return {Promise<AddInventoryResponse>}
       */
    addInventoryWithHttpInfo(xAmznIdempotencyToken: string, addInventoryRequestBody: AddInventoryRequest): Promise<AddInventoryResponse>;
    /**
       * Requests that Amazon add items to the Sandbox Inventory with desired amount of quantity in the sandbox environment. This is a sandbox-only operation and must be directed to a sandbox endpoint. Refer to [Selling Partner API sandbox](https://developer-docs.amazon.com/sp-api/docs/the-selling-partner-api-sandbox) for more information.
       * @param {String} xAmznIdempotencyToken A unique token/requestId provided with each call to ensure idempotency.
       * @param {AddInventoryRequest} addInventoryRequestBody List of items to add to Sandbox inventory.
       * @return {Promise<AddInventoryResponse>}
       */
    addInventory(xAmznIdempotencyToken: string, addInventoryRequestBody: AddInventoryRequest): Promise<AddInventoryResponse>;
    /**
       * Requests that Amazon create product-details in the Sandbox Inventory in the sandbox environment. This is a sandbox-only operation and must be directed to a sandbox endpoint. Refer to [Selling Partner API sandbox](https://developer-docs.amazon.com/sp-api/docs/the-selling-partner-api-sandbox) for more information.
       * @param {CreateInventoryItemRequest} createInventoryItemRequestBody CreateInventoryItem Request Body Parameter.
       * @return {Promise<CreateInventoryItemResponse>}
       */
    createInventoryItemWithHttpInfo(createInventoryItemRequestBody: CreateInventoryItemRequest): Promise<CreateInventoryItemResponse>;
    /**
       * Requests that Amazon create product-details in the Sandbox Inventory in the sandbox environment. This is a sandbox-only operation and must be directed to a sandbox endpoint. Refer to [Selling Partner API sandbox](https://developer-docs.amazon.com/sp-api/docs/the-selling-partner-api-sandbox) for more information.
       * @param {CreateInventoryItemRequest} createInventoryItemRequestBody CreateInventoryItem Request Body Parameter.
       * @return {Promise<CreateInventoryItemResponse>}
       */
    createInventoryItem(createInventoryItemRequestBody: CreateInventoryItemRequest): Promise<CreateInventoryItemResponse>;
    /**
       * Requests that Amazon Deletes an item from the Sandbox Inventory in the sandbox environment. This is a sandbox-only operation and must be directed to a sandbox endpoint. Refer to [Selling Partner API sandbox](https://developer-docs.amazon.com/sp-api/docs/the-selling-partner-api-sandbox) for more information.
       * @param {String} sellerSku A single seller SKU used for querying the specified seller SKU inventory summaries.
       * @param {String} marketplaceId The marketplace ID for the marketplace for which the sellerSku is to be deleted.
       * @return {Promise<DeleteInventoryItemResponse>}
       */
    deleteInventoryItemWithHttpInfo(sellerSku: string, marketplaceId: string): Promise<DeleteInventoryItemResponse>;
    /**
       * Requests that Amazon Deletes an item from the Sandbox Inventory in the sandbox environment. This is a sandbox-only operation and must be directed to a sandbox endpoint. Refer to [Selling Partner API sandbox](https://developer-docs.amazon.com/sp-api/docs/the-selling-partner-api-sandbox) for more information.
       * @param {String} sellerSku A single seller SKU used for querying the specified seller SKU inventory summaries.
       * @param {String} marketplaceId The marketplace ID for the marketplace for which the sellerSku is to be deleted.
       * @return {Promise<DeleteInventoryItemResponse>}
       */
    deleteInventoryItem(sellerSku: string, marketplaceId: string): Promise<DeleteInventoryItemResponse>;
    /**
       * Returns a list of inventory summaries. The summaries returned depend on the presence or absence of the startDateTime, sellerSkus and sellerSku parameters:  - All inventory summaries with available details are returned when the startDateTime, sellerSkus and sellerSku parameters are omitted. - When startDateTime is provided, the operation returns inventory summaries that have had changes after the date and time specified. The sellerSkus and sellerSku parameters are ignored. Important: To avoid errors, use both startDateTime and nextToken to get the next page of inventory summaries that have changed after the date and time specified. - When the sellerSkus parameter is provided, the operation returns inventory summaries for only the specified sellerSkus. The sellerSku parameter is ignored. - When the sellerSku parameter is provided, the operation returns inventory summaries for only the specified sellerSku.  Note: The parameters associated with this operation may contain special characters that must be encoded to successfully call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  Usage Plan:  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
       * @param {String} granularityType The granularity type for the inventory aggregation level.
       * @param {String} granularityId The granularity ID for the inventory aggregation level.
       * @param {String[]} marketplaceIds The marketplace ID for the marketplace for which to return inventory summaries.
       * @param {Object} [opts] Optional parameters
       * @param {Boolean} [opts.details] true to return inventory summaries with additional summarized inventory details and quantities. Otherwise, returns inventory summaries only (default value). (default to false)
       * @param {Date} [opts.startDateTime] A start date and time in ISO8601 format. If specified, all inventory summaries that have changed since then are returned. You must specify a date and time that is no earlier than 18 months prior to the date and time when you call the API. Note: Changes in inboundWorkingQuantity, inboundShippedQuantity and inboundReceivingQuantity are not detected.
       * @param {String[]} [opts.sellerSkus] A list of seller SKUs for which to return inventory summaries. You may specify up to 50 SKUs.
       * @param {String} [opts.sellerSku] A single seller SKU used for querying the specified seller SKU inventory summaries.
       * @param {String} [opts.nextToken] String token returned in the response of your previous request. The string token will expire 30 seconds after being created.
       * @return {Promise<GetInventorySummariesResponse>}
       */
    getInventorySummariesWithHttpInfo(granularityType: string, granularityId: string, marketplaceIds: string[], opts?: {
        details?: boolean;
        startDateTime?: Date;
        sellerSkus?: string[];
        sellerSku?: string;
        nextToken?: string;
    }): Promise<GetInventorySummariesResponse>;
    /**
       * Returns a list of inventory summaries. The summaries returned depend on the presence or absence of the startDateTime, sellerSkus and sellerSku parameters:  - All inventory summaries with available details are returned when the startDateTime, sellerSkus and sellerSku parameters are omitted. - When startDateTime is provided, the operation returns inventory summaries that have had changes after the date and time specified. The sellerSkus and sellerSku parameters are ignored. Important: To avoid errors, use both startDateTime and nextToken to get the next page of inventory summaries that have changed after the date and time specified. - When the sellerSkus parameter is provided, the operation returns inventory summaries for only the specified sellerSkus. The sellerSku parameter is ignored. - When the sellerSku parameter is provided, the operation returns inventory summaries for only the specified sellerSku.  Note: The parameters associated with this operation may contain special characters that must be encoded to successfully call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  Usage Plan:  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
       * @param {String} granularityType The granularity type for the inventory aggregation level.
       * @param {String} granularityId The granularity ID for the inventory aggregation level.
       * @param {String[]} marketplaceIds The marketplace ID for the marketplace for which to return inventory summaries.
       * @param {Object} [opts] Optional parameters
       * @param {Boolean} [opts.details] true to return inventory summaries with additional summarized inventory details and quantities. Otherwise, returns inventory summaries only (default value). (default to false)
       * @param {Date} [opts.startDateTime] A start date and time in ISO8601 format. If specified, all inventory summaries that have changed since then are returned. You must specify a date and time that is no earlier than 18 months prior to the date and time when you call the API. Note: Changes in inboundWorkingQuantity, inboundShippedQuantity and inboundReceivingQuantity are not detected.
       * @param {String[]} [opts.sellerSkus] A list of seller SKUs for which to return inventory summaries. You may specify up to 50 SKUs.
       * @param {String} [opts.sellerSku] A single seller SKU used for querying the specified seller SKU inventory summaries.
       * @param {String} [opts.nextToken] String token returned in the response of your previous request. The string token will expire 30 seconds after being created.
       * @return {Promise<GetInventorySummariesResponse>}
       */
    getInventorySummaries(granularityType: string, granularityId: string, marketplaceIds: string[], opts?: {
        details?: boolean;
        startDateTime?: Date;
        sellerSkus?: string[];
        sellerSku?: string;
        nextToken?: string;
    }): Promise<GetInventorySummariesResponse>;
    #private;
}
import { AddInventoryRequest } from '../model/AddInventoryRequest.js';
import { AddInventoryResponse } from '../model/AddInventoryResponse.js';
import { CreateInventoryItemRequest } from '../model/CreateInventoryItemRequest.js';
import { CreateInventoryItemResponse } from '../model/CreateInventoryItemResponse.js';
import { DeleteInventoryItemResponse } from '../model/DeleteInventoryItemResponse.js';
import { GetInventorySummariesResponse } from '../model/GetInventorySummariesResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=FbaInventoryApi.d.ts.map