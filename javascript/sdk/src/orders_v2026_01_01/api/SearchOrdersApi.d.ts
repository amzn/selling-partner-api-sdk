/**
* SearchOrders service.
* @module orders_v2026_01_01/api/SearchOrdersApi
* @version 2026-01-01
*/
export class SearchOrdersApi {
    /**
      * Constructs a new SearchOrdersApi.
      * @alias module:orders_v2026_01_01/api/SearchOrdersApi
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
       * Returns orders created or updated during the time period that you specify. You can filter the response for specific types of orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0056 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that are applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may receive higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API documentation.
       * @param {Object} [opts] Optional parameters
       * @param {Date} [opts.createdAfter] The response includes orders created at or after this time. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.  **Note**: You must provide exactly one of &#x60;createdAfter&#x60; and &#x60;lastUpdatedAfter&#x60; in your request. If &#x60;createdAfter&#x60; is provided, neither &#x60;lastUpdatedAfter&#x60; nor &#x60;lastUpdatedBefore&#x60; may be provided.
       * @param {Date} [opts.createdBefore] The response includes orders created at or before this time. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.  **Note**: If you include &#x60;createdAfter&#x60; in the request, &#x60;createdBefore&#x60; is optional, and if provided must be equal to or after the &#x60;createdAfter&#x60; date and at least two minutes before the time of the request. If &#x60;createdBefore&#x60; is provided, neither &#x60;lastUpdatedAfter&#x60; nor &#x60;lastUpdatedBefore&#x60; may be provided.
       * @param {Date} [opts.lastUpdatedAfter] The response includes orders updated at or after this time. An update is any change made by Amazon or the seller, including changes to order status. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.  **Note**: You must provide exactly one of &#x60;createdAfter&#x60; and &#x60;lastUpdatedAfter&#x60;. If &#x60;lastUpdatedAfter&#x60; is provided, neither &#x60;createdAfter&#x60; nor &#x60;createdBefore&#x60; may be provided.
       * @param {Date} [opts.lastUpdatedBefore] The response includes orders updated at or before this time. An update is any change made by Amazon or the seller, including changes to order status. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.  **Note**: If you include &#x60;lastUpdatedAfter&#x60; in the request, &#x60;lastUpdatedBefore&#x60; is optional, and if provided must be equal to or after the &#x60;lastUpdatedAfter&#x60; date and at least two minutes before the time of the request. If &#x60;lastUpdatedBefore&#x60; is provided, neither &#x60;createdAfter&#x60; nor &#x60;createdBefore&#x60; may be provided.
       * @param {String[]} [opts.fulfillmentStatuses] A list of &#x60;FulfillmentStatus&#x60; values you can use to filter the results.
       * @param {String[]} [opts.marketplaceIds] The response includes orders that were placed in marketplaces you include in this list.  Refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) for a complete list of &#x60;marketplaceId&#x60; values.
       * @param {String[]} [opts.fulfilledBy] The response includes orders that are fulfilled by the parties that you include in this list.
       * @param {Number} [opts.maxResultsPerPage] The maximum number of orders that can be returned per page. The value must be between 1 and 100. **Default:** 100.
       * @param {String} [opts.paginationToken] Pagination occurs when a request produces a response that exceeds the &#x60;maxResultsPerPage&#x60;. This means that the response is divided into individual pages. To retrieve the next page, you must pass the &#x60;nextToken&#x60; value as the &#x60;paginationToken&#x60; query parameter in the next request. You will not receive a &#x60;nextToken&#x60; value on the last page.
       * @param {String[]} [opts.includedData] A list of datasets to include in the response.
       * @return {Promise<SearchOrdersResponse>}
       */
    searchOrdersWithHttpInfo(opts?: {
        createdAfter?: Date | undefined;
        createdBefore?: Date | undefined;
        lastUpdatedAfter?: Date | undefined;
        lastUpdatedBefore?: Date | undefined;
        fulfillmentStatuses?: string[] | undefined;
        marketplaceIds?: string[] | undefined;
        fulfilledBy?: string[] | undefined;
        maxResultsPerPage?: number | undefined;
        paginationToken?: string | undefined;
        includedData?: string[] | undefined;
    }): Promise<SearchOrdersResponse>;
    /**
       * Returns orders created or updated during the time period that you specify. You can filter the response for specific types of orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0056 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that are applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may receive higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API documentation.
       * @param {Object} [opts] Optional parameters
       * @param {Date} [opts.createdAfter] The response includes orders created at or after this time. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.  **Note**: You must provide exactly one of &#x60;createdAfter&#x60; and &#x60;lastUpdatedAfter&#x60; in your request. If &#x60;createdAfter&#x60; is provided, neither &#x60;lastUpdatedAfter&#x60; nor &#x60;lastUpdatedBefore&#x60; may be provided.
       * @param {Date} [opts.createdBefore] The response includes orders created at or before this time. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.  **Note**: If you include &#x60;createdAfter&#x60; in the request, &#x60;createdBefore&#x60; is optional, and if provided must be equal to or after the &#x60;createdAfter&#x60; date and at least two minutes before the time of the request. If &#x60;createdBefore&#x60; is provided, neither &#x60;lastUpdatedAfter&#x60; nor &#x60;lastUpdatedBefore&#x60; may be provided.
       * @param {Date} [opts.lastUpdatedAfter] The response includes orders updated at or after this time. An update is any change made by Amazon or the seller, including changes to order status. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.  **Note**: You must provide exactly one of &#x60;createdAfter&#x60; and &#x60;lastUpdatedAfter&#x60;. If &#x60;lastUpdatedAfter&#x60; is provided, neither &#x60;createdAfter&#x60; nor &#x60;createdBefore&#x60; may be provided.
       * @param {Date} [opts.lastUpdatedBefore] The response includes orders updated at or before this time. An update is any change made by Amazon or the seller, including changes to order status. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.  **Note**: If you include &#x60;lastUpdatedAfter&#x60; in the request, &#x60;lastUpdatedBefore&#x60; is optional, and if provided must be equal to or after the &#x60;lastUpdatedAfter&#x60; date and at least two minutes before the time of the request. If &#x60;lastUpdatedBefore&#x60; is provided, neither &#x60;createdAfter&#x60; nor &#x60;createdBefore&#x60; may be provided.
       * @param {String[]} [opts.fulfillmentStatuses] A list of &#x60;FulfillmentStatus&#x60; values you can use to filter the results.
       * @param {String[]} [opts.marketplaceIds] The response includes orders that were placed in marketplaces you include in this list.  Refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) for a complete list of &#x60;marketplaceId&#x60; values.
       * @param {String[]} [opts.fulfilledBy] The response includes orders that are fulfilled by the parties that you include in this list.
       * @param {Number} [opts.maxResultsPerPage] The maximum number of orders that can be returned per page. The value must be between 1 and 100. **Default:** 100.
       * @param {String} [opts.paginationToken] Pagination occurs when a request produces a response that exceeds the &#x60;maxResultsPerPage&#x60;. This means that the response is divided into individual pages. To retrieve the next page, you must pass the &#x60;nextToken&#x60; value as the &#x60;paginationToken&#x60; query parameter in the next request. You will not receive a &#x60;nextToken&#x60; value on the last page.
       * @param {String[]} [opts.includedData] A list of datasets to include in the response.
       * @return {Promise<SearchOrdersResponse>}
       */
    searchOrders(opts?: {
        createdAfter?: Date | undefined;
        createdBefore?: Date | undefined;
        lastUpdatedAfter?: Date | undefined;
        lastUpdatedBefore?: Date | undefined;
        fulfillmentStatuses?: string[] | undefined;
        marketplaceIds?: string[] | undefined;
        fulfilledBy?: string[] | undefined;
        maxResultsPerPage?: number | undefined;
        paginationToken?: string | undefined;
        includedData?: string[] | undefined;
    }): Promise<SearchOrdersResponse>;
    #private;
}
import { SearchOrdersResponse } from '../model/SearchOrdersResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=SearchOrdersApi.d.ts.map