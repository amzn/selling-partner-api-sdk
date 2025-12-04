/**
* Default service.
* @module finances_2024_06_19/api/DefaultApi
* @version 2024-06-19
*/
export class DefaultApi {
    /**
      * Constructs a new DefaultApi.
      * @alias module:finances_2024_06_19/api/DefaultApi
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
       * Returns transactions for the given parameters. Financial events might not include orders from the last 48 hours.  **Usage plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
       * @param {Object} [opts] Optional parameters
       * @param {Date} [opts.postedAfter] The response includes financial events posted on or after this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The date-time must be more than two minutes before the time of the request.  This field is required if you do not specify a related identifier.
       * @param {Date} [opts.postedBefore] The response includes financial events posted before (but not on) this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.  The date-time must be later than &#x60;PostedAfter&#x60; and more than two minutes before the request was submitted. If &#x60;PostedAfter&#x60; and &#x60;PostedBefore&#x60; are more than 180 days apart, the response is empty.  **Default:** Two minutes before the time of the request.
       * @param {String} [opts.marketplaceId] The identifier of the marketplace from which you want to retrieve transactions. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {String} [opts.transactionStatus] The status of the transaction.  **Possible values:**  * &#x60;DEFERRED&#x60;: the transaction is currently deferred. * &#x60;RELEASED&#x60;: the transaction is currently released. * &#x60;DEFERRED_RELEASED&#x60;: the transaction was deferred in the past, but is now released. The status of a deferred transaction is updated to &#x60;DEFERRED_RELEASED&#x60; when the transaction is released.
       * @param {String} [opts.relatedIdentifierName] The name of the &#x60;relatedIdentifier&#x60;.  **Possible values:**  * &#x60;FINANCIAL_EVENT_GROUP_ID&#x60;: the financial event group ID associated with the transaction.   **Note:**   FINANCIAL_EVENT_GROUP_ID is the only &#x60;relatedIdentifier&#x60; with filtering capabilities at the moment. While other &#x60;relatedIdentifier&#x60; values will be included in the response when available, they cannot be used for filtering purposes.
       * @param {String} [opts.relatedIdentifierValue] The value of the &#x60;relatedIdentifier&#x60;.
       * @param {String} [opts.nextToken] The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;pageSize&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages.
       * @return {Promise<ListTransactionsResponse>}
       */
    listTransactionsWithHttpInfo(opts?: {
        postedAfter?: Date;
        postedBefore?: Date;
        marketplaceId?: string;
        transactionStatus?: string;
        relatedIdentifierName?: string;
        relatedIdentifierValue?: string;
        nextToken?: string;
    }): Promise<ListTransactionsResponse>;
    /**
       * Returns transactions for the given parameters. Financial events might not include orders from the last 48 hours.  **Usage plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
       * @param {Object} [opts] Optional parameters
       * @param {Date} [opts.postedAfter] The response includes financial events posted on or after this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The date-time must be more than two minutes before the time of the request.  This field is required if you do not specify a related identifier.
       * @param {Date} [opts.postedBefore] The response includes financial events posted before (but not on) this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.  The date-time must be later than &#x60;PostedAfter&#x60; and more than two minutes before the request was submitted. If &#x60;PostedAfter&#x60; and &#x60;PostedBefore&#x60; are more than 180 days apart, the response is empty.  **Default:** Two minutes before the time of the request.
       * @param {String} [opts.marketplaceId] The identifier of the marketplace from which you want to retrieve transactions. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {String} [opts.transactionStatus] The status of the transaction.  **Possible values:**  * &#x60;DEFERRED&#x60;: the transaction is currently deferred. * &#x60;RELEASED&#x60;: the transaction is currently released. * &#x60;DEFERRED_RELEASED&#x60;: the transaction was deferred in the past, but is now released. The status of a deferred transaction is updated to &#x60;DEFERRED_RELEASED&#x60; when the transaction is released.
       * @param {String} [opts.relatedIdentifierName] The name of the &#x60;relatedIdentifier&#x60;.  **Possible values:**  * &#x60;FINANCIAL_EVENT_GROUP_ID&#x60;: the financial event group ID associated with the transaction.   **Note:**   FINANCIAL_EVENT_GROUP_ID is the only &#x60;relatedIdentifier&#x60; with filtering capabilities at the moment. While other &#x60;relatedIdentifier&#x60; values will be included in the response when available, they cannot be used for filtering purposes.
       * @param {String} [opts.relatedIdentifierValue] The value of the &#x60;relatedIdentifier&#x60;.
       * @param {String} [opts.nextToken] The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;pageSize&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages.
       * @return {Promise<ListTransactionsResponse>}
       */
    listTransactions(opts?: {
        postedAfter?: Date;
        postedBefore?: Date;
        marketplaceId?: string;
        transactionStatus?: string;
        relatedIdentifierName?: string;
        relatedIdentifierValue?: string;
        nextToken?: string;
    }): Promise<ListTransactionsResponse>;
    #private;
}
import { ListTransactionsResponse } from '../model/ListTransactionsResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=DefaultApi.d.ts.map