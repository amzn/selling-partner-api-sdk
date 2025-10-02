/**
* ReturnRetrieval service.
* @module externalfulfillmentreturns_v2024_09_11/api/ReturnRetrievalApi
* @version 2024-09-11
*/
export class ReturnRetrievalApi {
    /**
      * Constructs a new ReturnRetrievalApi.
      * @alias module:externalfulfillmentreturns_v2024_09_11/api/ReturnRetrievalApi
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
       * Retrieve the return item with the specified ID.
       * @param {String} returnId The ID of the return item you want.
       * @return {Promise<Return>}
       */
    getReturnWithHttpInfo(returnId: string): Promise<Return>;
    /**
       * Retrieve the return item with the specified ID.
       * @param {String} returnId The ID of the return item you want.
       * @return {Promise<Return>}
       */
    getReturn(returnId: string): Promise<Return>;
    /**
       * Retrieve a list of return items. You can filter results by location, RMA ID, status, or time.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.returnLocationId] The SmartConnect location ID of the location from which you want to retrieve return items.
       * @param {String} [opts.rmaId] The RMA ID of the return items you want to list.
       * @param {String} [opts.status] The status of return items you want to list. You can retrieve all new return items with the &#x60;CREATED&#x60; status.
       * @param {String} [opts.reverseTrackingId] The reverse tracking ID of the return items you want to list.
       * @param {String} [opts.createdSince] Return items created after the specified date are included in the response. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
       * @param {String} [opts.createdUntil] Return items created before the specified date are included in the response. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
       * @param {String} [opts.lastUpdatedSince] Return items updated after the specified date are included in the response. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. If you supply this parameter, you must also supply &#x60;returnLocationId&#x60; and &#x60;status&#x60;.
       * @param {String} [opts.lastUpdatedUntil] Return items whose most recent update is before the specified date are included in the response. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. If you supply this parameter, you must also supply &#x60;returnLocationId&#x60; and &#x60;status&#x60;.
       * @param {String} [opts.lastUpdatedAfter] DEPRECATED. Use the &#x60;createdSince&#x60; parameter.
       * @param {String} [opts.lastUpdatedBefore] DEPRECATED. Use the &#x60;createdUntil&#x60; parameter.
       * @param {Number} [opts.maxResults] The number of return items you want to include in the response.  **Default:** 10  **Maximum:** 100
       * @param {String} [opts.nextToken] A token that you use to retrieve the next page of results. The response includes &#x60;nextToken&#x60; when there are multiple pages of results. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages.
       * @return {Promise<ReturnsResponse>}
       */
    listReturnsWithHttpInfo(opts?: {
        returnLocationId?: string;
        rmaId?: string;
        status?: string;
        reverseTrackingId?: string;
        createdSince?: string;
        createdUntil?: string;
        lastUpdatedSince?: string;
        lastUpdatedUntil?: string;
        lastUpdatedAfter?: string;
        lastUpdatedBefore?: string;
        maxResults?: number;
        nextToken?: string;
    }): Promise<ReturnsResponse>;
    /**
       * Retrieve a list of return items. You can filter results by location, RMA ID, status, or time.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.returnLocationId] The SmartConnect location ID of the location from which you want to retrieve return items.
       * @param {String} [opts.rmaId] The RMA ID of the return items you want to list.
       * @param {String} [opts.status] The status of return items you want to list. You can retrieve all new return items with the &#x60;CREATED&#x60; status.
       * @param {String} [opts.reverseTrackingId] The reverse tracking ID of the return items you want to list.
       * @param {String} [opts.createdSince] Return items created after the specified date are included in the response. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
       * @param {String} [opts.createdUntil] Return items created before the specified date are included in the response. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
       * @param {String} [opts.lastUpdatedSince] Return items updated after the specified date are included in the response. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. If you supply this parameter, you must also supply &#x60;returnLocationId&#x60; and &#x60;status&#x60;.
       * @param {String} [opts.lastUpdatedUntil] Return items whose most recent update is before the specified date are included in the response. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. If you supply this parameter, you must also supply &#x60;returnLocationId&#x60; and &#x60;status&#x60;.
       * @param {String} [opts.lastUpdatedAfter] DEPRECATED. Use the &#x60;createdSince&#x60; parameter.
       * @param {String} [opts.lastUpdatedBefore] DEPRECATED. Use the &#x60;createdUntil&#x60; parameter.
       * @param {Number} [opts.maxResults] The number of return items you want to include in the response.  **Default:** 10  **Maximum:** 100
       * @param {String} [opts.nextToken] A token that you use to retrieve the next page of results. The response includes &#x60;nextToken&#x60; when there are multiple pages of results. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages.
       * @return {Promise<ReturnsResponse>}
       */
    listReturns(opts?: {
        returnLocationId?: string;
        rmaId?: string;
        status?: string;
        reverseTrackingId?: string;
        createdSince?: string;
        createdUntil?: string;
        lastUpdatedSince?: string;
        lastUpdatedUntil?: string;
        lastUpdatedAfter?: string;
        lastUpdatedBefore?: string;
        maxResults?: number;
        nextToken?: string;
    }): Promise<ReturnsResponse>;
    #private;
}
import { Return } from '../model/Return.js';
import { ReturnsResponse } from '../model/ReturnsResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=ReturnRetrievalApi.d.ts.map