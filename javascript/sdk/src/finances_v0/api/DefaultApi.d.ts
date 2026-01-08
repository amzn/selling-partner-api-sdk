/**
* Default service.
* @module finances_v0/api/DefaultApi
* @version v0
*/
export class DefaultApi {
    /**
      * Constructs a new DefaultApi.
      * @alias module:finances_v0/api/DefaultApi
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
       * Returns financial event groups for a given date range. Orders from the last 48 hours might not be included in financial events.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput can have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.maxResultsPerPage] The maximum number of results per page. If the response exceeds the maximum number of transactions or 10 MB, the response is &#x60;InvalidInput&#x60;. (default to 10)
       * @param {Date} [opts.financialEventGroupStartedBefore] A date that selects financial event groups that opened before (but not at) a specified date and time, in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format. The date-time must be after &#x60;FinancialEventGroupStartedAfter&#x60; and more than two minutes before the time of request. If &#x60;FinancialEventGroupStartedAfter&#x60; and &#x60;FinancialEventGroupStartedBefore&#x60; are more than 180 days apart, no financial event groups are returned.
       * @param {Date} [opts.financialEventGroupStartedAfter] A date that selects financial event groups that opened after (or at) a specified date and time, in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format. The date-time must be more than two minutes before you submit the request.
       * @param {String} [opts.nextToken] The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;pageSize&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages.
       * @return {Promise<ListFinancialEventGroupsResponse>}
       */
    listFinancialEventGroupsWithHttpInfo(opts?: {
        maxResultsPerPage?: number;
        financialEventGroupStartedBefore?: Date;
        financialEventGroupStartedAfter?: Date;
        nextToken?: string;
    }): Promise<ListFinancialEventGroupsResponse>;
    /**
       * Returns financial event groups for a given date range. Orders from the last 48 hours might not be included in financial events.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput can have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.maxResultsPerPage] The maximum number of results per page. If the response exceeds the maximum number of transactions or 10 MB, the response is &#x60;InvalidInput&#x60;. (default to 10)
       * @param {Date} [opts.financialEventGroupStartedBefore] A date that selects financial event groups that opened before (but not at) a specified date and time, in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format. The date-time must be after &#x60;FinancialEventGroupStartedAfter&#x60; and more than two minutes before the time of request. If &#x60;FinancialEventGroupStartedAfter&#x60; and &#x60;FinancialEventGroupStartedBefore&#x60; are more than 180 days apart, no financial event groups are returned.
       * @param {Date} [opts.financialEventGroupStartedAfter] A date that selects financial event groups that opened after (or at) a specified date and time, in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format. The date-time must be more than two minutes before you submit the request.
       * @param {String} [opts.nextToken] The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;pageSize&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages.
       * @return {Promise<ListFinancialEventGroupsResponse>}
       */
    listFinancialEventGroups(opts?: {
        maxResultsPerPage?: number;
        financialEventGroupStartedBefore?: Date;
        financialEventGroupStartedAfter?: Date;
        nextToken?: string;
    }): Promise<ListFinancialEventGroupsResponse>;
    /**
       * Returns financial events for the specified data range. Orders from the last 48 hours might not be included in financial events.  **Note:** in &#x60;ListFinancialEvents&#x60;, deferred events don&#39;t show up in responses until they are released.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput can have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.maxResultsPerPage] The maximum number of results to return per page. If the response exceeds the maximum number of transactions or 10 MB, the response is &#x60;InvalidInput&#x60;. (default to 100)
       * @param {Date} [opts.postedAfter] The response includes financial events posted after (or on) this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The date-time must be more than two minutes before the time of the request.
       * @param {Date} [opts.postedBefore] The response includes financial events posted before (but not on) this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.  The date-time must be later than &#x60;PostedAfter&#x60; and more than two minutes before the request was submitted. If &#x60;PostedAfter&#x60; and &#x60;PostedBefore&#x60; are more than 180 days apart, the response is empty. If you include the &#x60;PostedBefore&#x60; parameter in your request, you must also specify the &#x60;PostedAfter&#x60; parameter.  **Default:** Two minutes before the time of the request.
       * @param {String} [opts.nextToken] The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;pageSize&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages.
       * @return {Promise<ListFinancialEventsResponse>}
       */
    listFinancialEventsWithHttpInfo(opts?: {
        maxResultsPerPage?: number;
        postedAfter?: Date;
        postedBefore?: Date;
        nextToken?: string;
    }): Promise<ListFinancialEventsResponse>;
    /**
       * Returns financial events for the specified data range. Orders from the last 48 hours might not be included in financial events.  **Note:** in &#x60;ListFinancialEvents&#x60;, deferred events don&#39;t show up in responses until they are released.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput can have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.maxResultsPerPage] The maximum number of results to return per page. If the response exceeds the maximum number of transactions or 10 MB, the response is &#x60;InvalidInput&#x60;. (default to 100)
       * @param {Date} [opts.postedAfter] The response includes financial events posted after (or on) this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The date-time must be more than two minutes before the time of the request.
       * @param {Date} [opts.postedBefore] The response includes financial events posted before (but not on) this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.  The date-time must be later than &#x60;PostedAfter&#x60; and more than two minutes before the request was submitted. If &#x60;PostedAfter&#x60; and &#x60;PostedBefore&#x60; are more than 180 days apart, the response is empty. If you include the &#x60;PostedBefore&#x60; parameter in your request, you must also specify the &#x60;PostedAfter&#x60; parameter.  **Default:** Two minutes before the time of the request.
       * @param {String} [opts.nextToken] The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;pageSize&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages.
       * @return {Promise<ListFinancialEventsResponse>}
       */
    listFinancialEvents(opts?: {
        maxResultsPerPage?: number;
        postedAfter?: Date;
        postedBefore?: Date;
        nextToken?: string;
    }): Promise<ListFinancialEventsResponse>;
    /**
       * Returns all financial events for the specified financial event group. Orders from the last 48 hours might not be included in financial events.  **Note:** This operation only retrieves a group&#39;s data for the past two years. A request for data spanning more than two years produces an empty response.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput can have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
       * @param {String} eventGroupId The identifier of the financial event group to which the events belong.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.maxResultsPerPage] The maximum number of results to return per page. If the response exceeds the maximum number of transactions or 10 MB, the response is &#x60;InvalidInput&#x60;. (default to 100)
       * @param {Date} [opts.postedAfter] The response includes financial events posted after (or on) this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The date-time must be more than two minutes before the time of the request.
       * @param {Date} [opts.postedBefore] The response includes financial events posted before (but not on) this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.  The date-time must be later than &#x60;PostedAfter&#x60; and more than two minutes before the request was submitted. If &#x60;PostedAfter&#x60; and &#x60;PostedBefore&#x60; are more than 180 days apart, the response is empty. If you include the &#x60;PostedBefore&#x60; parameter in your request, you must also specify the &#x60;PostedAfter&#x60; parameter.  **Default:** Two minutes before the time of the request.
       * @param {String} [opts.nextToken] The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;pageSize&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages.
       * @return {Promise<ListFinancialEventsResponse>}
       */
    listFinancialEventsByGroupIdWithHttpInfo(eventGroupId: string, opts?: {
        maxResultsPerPage?: number;
        postedAfter?: Date;
        postedBefore?: Date;
        nextToken?: string;
    }): Promise<ListFinancialEventsResponse>;
    /**
       * Returns all financial events for the specified financial event group. Orders from the last 48 hours might not be included in financial events.  **Note:** This operation only retrieves a group&#39;s data for the past two years. A request for data spanning more than two years produces an empty response.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput can have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
       * @param {String} eventGroupId The identifier of the financial event group to which the events belong.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.maxResultsPerPage] The maximum number of results to return per page. If the response exceeds the maximum number of transactions or 10 MB, the response is &#x60;InvalidInput&#x60;. (default to 100)
       * @param {Date} [opts.postedAfter] The response includes financial events posted after (or on) this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The date-time must be more than two minutes before the time of the request.
       * @param {Date} [opts.postedBefore] The response includes financial events posted before (but not on) this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.  The date-time must be later than &#x60;PostedAfter&#x60; and more than two minutes before the request was submitted. If &#x60;PostedAfter&#x60; and &#x60;PostedBefore&#x60; are more than 180 days apart, the response is empty. If you include the &#x60;PostedBefore&#x60; parameter in your request, you must also specify the &#x60;PostedAfter&#x60; parameter.  **Default:** Two minutes before the time of the request.
       * @param {String} [opts.nextToken] The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;pageSize&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages.
       * @return {Promise<ListFinancialEventsResponse>}
       */
    listFinancialEventsByGroupId(eventGroupId: string, opts?: {
        maxResultsPerPage?: number;
        postedAfter?: Date;
        postedBefore?: Date;
        nextToken?: string;
    }): Promise<ListFinancialEventsResponse>;
    /**
       * Returns all financial events for the specified order. Orders from the last 48 hours might not be included in financial events.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput can have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
       * @param {String} orderId An Amazon-defined order identifier, in 3-7-7 format.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.maxResultsPerPage] The maximum number of results to return per page. If the response exceeds the maximum number of transactions or 10 MB, the response is &#x60;InvalidInput&#x60;. (default to 100)
       * @param {String} [opts.nextToken] The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;pageSize&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages.
       * @return {Promise<ListFinancialEventsResponse>}
       */
    listFinancialEventsByOrderIdWithHttpInfo(orderId: string, opts?: {
        maxResultsPerPage?: number;
        nextToken?: string;
    }): Promise<ListFinancialEventsResponse>;
    /**
       * Returns all financial events for the specified order. Orders from the last 48 hours might not be included in financial events.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput can have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
       * @param {String} orderId An Amazon-defined order identifier, in 3-7-7 format.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.maxResultsPerPage] The maximum number of results to return per page. If the response exceeds the maximum number of transactions or 10 MB, the response is &#x60;InvalidInput&#x60;. (default to 100)
       * @param {String} [opts.nextToken] The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;pageSize&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages.
       * @return {Promise<ListFinancialEventsResponse>}
       */
    listFinancialEventsByOrderId(orderId: string, opts?: {
        maxResultsPerPage?: number;
        nextToken?: string;
    }): Promise<ListFinancialEventsResponse>;
    #private;
}
import { ListFinancialEventGroupsResponse } from '../model/ListFinancialEventGroupsResponse.js';
import { ListFinancialEventsResponse } from '../model/ListFinancialEventsResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=DefaultApi.d.ts.map