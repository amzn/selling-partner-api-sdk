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
       * Returns financial event groups for a given date range. It may take up to 48 hours for orders to appear in your financial events.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.maxResultsPerPage] The maximum number of results to return per page. If the response exceeds the maximum number of transactions or 10 MB, the API responds with &#39;InvalidInput&#39;. (default to 10)
       * @param {Date} [opts.financialEventGroupStartedBefore] A date used for selecting financial event groups that opened before (but not at) a specified date and time, in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format. The date-time  must be later than FinancialEventGroupStartedAfter and no later than two minutes before the request was submitted. If FinancialEventGroupStartedAfter and FinancialEventGroupStartedBefore are more than 180 days apart, no financial event groups are returned.
       * @param {Date} [opts.financialEventGroupStartedAfter] A date used for selecting financial event groups that opened after (or at) a specified date and time, in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format. The date-time must be no later than two minutes before the request was submitted.
       * @param {String} [opts.nextToken] A string token returned in the response of your previous request.
       * @return {Promise<ListFinancialEventGroupsResponse>}
       */
    listFinancialEventGroupsWithHttpInfo(opts?: {
        maxResultsPerPage?: number;
        financialEventGroupStartedBefore?: Date;
        financialEventGroupStartedAfter?: Date;
        nextToken?: string;
    }): Promise<ListFinancialEventGroupsResponse>;
    /**
       * Returns financial event groups for a given date range. It may take up to 48 hours for orders to appear in your financial events.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.maxResultsPerPage] The maximum number of results to return per page. If the response exceeds the maximum number of transactions or 10 MB, the API responds with &#39;InvalidInput&#39;. (default to 10)
       * @param {Date} [opts.financialEventGroupStartedBefore] A date used for selecting financial event groups that opened before (but not at) a specified date and time, in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format. The date-time  must be later than FinancialEventGroupStartedAfter and no later than two minutes before the request was submitted. If FinancialEventGroupStartedAfter and FinancialEventGroupStartedBefore are more than 180 days apart, no financial event groups are returned.
       * @param {Date} [opts.financialEventGroupStartedAfter] A date used for selecting financial event groups that opened after (or at) a specified date and time, in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format. The date-time must be no later than two minutes before the request was submitted.
       * @param {String} [opts.nextToken] A string token returned in the response of your previous request.
       * @return {Promise<ListFinancialEventGroupsResponse>}
       */
    listFinancialEventGroups(opts?: {
        maxResultsPerPage?: number;
        financialEventGroupStartedBefore?: Date;
        financialEventGroupStartedAfter?: Date;
        nextToken?: string;
    }): Promise<ListFinancialEventGroupsResponse>;
    /**
       * Returns financial events for the specified data range. It may take up to 48 hours for orders to appear in your financial events. **Note:** in &#x60;ListFinancialEvents&#x60;, deferred events don&#39;t show up in responses until in they are released.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.maxResultsPerPage] The maximum number of results to return per page. If the response exceeds the maximum number of transactions or 10 MB, the API responds with &#39;InvalidInput&#39;. (default to 100)
       * @param {Date} [opts.postedAfter] A date used for selecting financial events posted after (or at) a specified time. The date-time must be no later than two minutes before the request was submitted, in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date time format.
       * @param {Date} [opts.postedBefore] A date used for selecting financial events posted before (but not at) a specified time. The date-time must be later than PostedAfter and no later than two minutes before the request was submitted, in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date time format. If PostedAfter and PostedBefore are more than 180 days apart, no financial events are returned. You must specify the PostedAfter parameter if you specify the PostedBefore parameter. Default: Now minus two minutes.
       * @param {String} [opts.nextToken] A string token returned in the response of your previous request.
       * @return {Promise<ListFinancialEventsResponse>}
       */
    listFinancialEventsWithHttpInfo(opts?: {
        maxResultsPerPage?: number;
        postedAfter?: Date;
        postedBefore?: Date;
        nextToken?: string;
    }): Promise<ListFinancialEventsResponse>;
    /**
       * Returns financial events for the specified data range. It may take up to 48 hours for orders to appear in your financial events. **Note:** in &#x60;ListFinancialEvents&#x60;, deferred events don&#39;t show up in responses until in they are released.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.maxResultsPerPage] The maximum number of results to return per page. If the response exceeds the maximum number of transactions or 10 MB, the API responds with &#39;InvalidInput&#39;. (default to 100)
       * @param {Date} [opts.postedAfter] A date used for selecting financial events posted after (or at) a specified time. The date-time must be no later than two minutes before the request was submitted, in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date time format.
       * @param {Date} [opts.postedBefore] A date used for selecting financial events posted before (but not at) a specified time. The date-time must be later than PostedAfter and no later than two minutes before the request was submitted, in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date time format. If PostedAfter and PostedBefore are more than 180 days apart, no financial events are returned. You must specify the PostedAfter parameter if you specify the PostedBefore parameter. Default: Now minus two minutes.
       * @param {String} [opts.nextToken] A string token returned in the response of your previous request.
       * @return {Promise<ListFinancialEventsResponse>}
       */
    listFinancialEvents(opts?: {
        maxResultsPerPage?: number;
        postedAfter?: Date;
        postedBefore?: Date;
        nextToken?: string;
    }): Promise<ListFinancialEventsResponse>;
    /**
       * Returns all financial events for the specified financial event group. It may take up to 48 hours for orders to appear in your financial events.  **Note:** This operation will only retrieve group&#39;s data for the past two years. If a request is submitted for data spanning more than two years, an empty response is returned.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} eventGroupId The identifier of the financial event group to which the events belong.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.maxResultsPerPage] The maximum number of results to return per page. If the response exceeds the maximum number of transactions or 10 MB, the API responds with &#39;InvalidInput&#39;. (default to 100)
       * @param {Date} [opts.postedAfter] A date used for selecting financial events posted after (or at) a specified time. The date-time **must** be more than two minutes before the time of the request, in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date time format.
       * @param {Date} [opts.postedBefore] A date used for selecting financial events posted before (but not at) a specified time. The date-time must be later than &#x60;PostedAfter&#x60; and no later than two minutes before the request was submitted, in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date time format. If &#x60;PostedAfter&#x60; and &#x60;PostedBefore&#x60; are more than 180 days apart, no financial events are returned. You must specify the &#x60;PostedAfter&#x60; parameter if you specify the &#x60;PostedBefore&#x60; parameter. Default: Now minus two minutes.
       * @param {String} [opts.nextToken] A string token returned in the response of your previous request.
       * @return {Promise<ListFinancialEventsResponse>}
       */
    listFinancialEventsByGroupIdWithHttpInfo(eventGroupId: string, opts?: {
        maxResultsPerPage?: number;
        postedAfter?: Date;
        postedBefore?: Date;
        nextToken?: string;
    }): Promise<ListFinancialEventsResponse>;
    /**
       * Returns all financial events for the specified financial event group. It may take up to 48 hours for orders to appear in your financial events.  **Note:** This operation will only retrieve group&#39;s data for the past two years. If a request is submitted for data spanning more than two years, an empty response is returned.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} eventGroupId The identifier of the financial event group to which the events belong.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.maxResultsPerPage] The maximum number of results to return per page. If the response exceeds the maximum number of transactions or 10 MB, the API responds with &#39;InvalidInput&#39;. (default to 100)
       * @param {Date} [opts.postedAfter] A date used for selecting financial events posted after (or at) a specified time. The date-time **must** be more than two minutes before the time of the request, in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date time format.
       * @param {Date} [opts.postedBefore] A date used for selecting financial events posted before (but not at) a specified time. The date-time must be later than &#x60;PostedAfter&#x60; and no later than two minutes before the request was submitted, in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date time format. If &#x60;PostedAfter&#x60; and &#x60;PostedBefore&#x60; are more than 180 days apart, no financial events are returned. You must specify the &#x60;PostedAfter&#x60; parameter if you specify the &#x60;PostedBefore&#x60; parameter. Default: Now minus two minutes.
       * @param {String} [opts.nextToken] A string token returned in the response of your previous request.
       * @return {Promise<ListFinancialEventsResponse>}
       */
    listFinancialEventsByGroupId(eventGroupId: string, opts?: {
        maxResultsPerPage?: number;
        postedAfter?: Date;
        postedBefore?: Date;
        nextToken?: string;
    }): Promise<ListFinancialEventsResponse>;
    /**
       * Returns all financial events for the specified order. It may take up to 48 hours for orders to appear in your financial events.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} orderId An Amazon-defined order identifier, in 3-7-7 format.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.maxResultsPerPage] The maximum number of results to return per page. If the response exceeds the maximum number of transactions or 10 MB, the API responds with &#39;InvalidInput&#39;. (default to 100)
       * @param {String} [opts.nextToken] A string token returned in the response of your previous request.
       * @return {Promise<ListFinancialEventsResponse>}
       */
    listFinancialEventsByOrderIdWithHttpInfo(orderId: string, opts?: {
        maxResultsPerPage?: number;
        nextToken?: string;
    }): Promise<ListFinancialEventsResponse>;
    /**
       * Returns all financial events for the specified order. It may take up to 48 hours for orders to appear in your financial events.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} orderId An Amazon-defined order identifier, in 3-7-7 format.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.maxResultsPerPage] The maximum number of results to return per page. If the response exceeds the maximum number of transactions or 10 MB, the API responds with &#39;InvalidInput&#39;. (default to 100)
       * @param {String} [opts.nextToken] A string token returned in the response of your previous request.
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