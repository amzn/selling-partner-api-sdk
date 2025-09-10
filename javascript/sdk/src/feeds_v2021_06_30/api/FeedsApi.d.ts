/**
* Feeds service.
* @module feeds_v2021_06_30/api/FeedsApi
* @version 2021-06-30
*/
export class FeedsApi {
    /**
      * Constructs a new FeedsApi.
      * @alias module:feeds_v2021_06_30/api/FeedsApi
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
       * Cancels the feed that you specify. Only feeds with &#x60;processingStatus&#x3D;IN_QUEUE&#x60; can be cancelled. Cancelled feeds are returned in subsequent calls to the [&#x60;getFeed&#x60;](https://developer-docs.amazon.com/sp-api/reference/getfeed) and [&#x60;getFeeds&#x60;](https://developer-docs.amazon.com/sp-api/reference/getfeeds) operations.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} feedId The identifier for the feed. This identifier is unique only in combination with a seller ID.
       * @return {Promise<void>}
       */
    cancelFeedWithHttpInfo(feedId: string): Promise<void>;
    /**
       * Cancels the feed that you specify. Only feeds with &#x60;processingStatus&#x3D;IN_QUEUE&#x60; can be cancelled. Cancelled feeds are returned in subsequent calls to the [&#x60;getFeed&#x60;](https://developer-docs.amazon.com/sp-api/reference/getfeed) and [&#x60;getFeeds&#x60;](https://developer-docs.amazon.com/sp-api/reference/getfeeds) operations.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} feedId The identifier for the feed. This identifier is unique only in combination with a seller ID.
       * @return {Promise<void>}
       */
    cancelFeed(feedId: string): Promise<void>;
    /**
       * Creates a feed. Upload the contents of the feed document before calling this operation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0083 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).  The rate limit for the [&#x60;JSON_LISTINGS_FEED&#x60;](https://developer-docs.amazon.com/sp-api/docs/listings-feed-type-values#listings-feed) feed type differs from the rate limit for the [&#x60;createFeed&#x60;](https://developer-docs.amazon.com/sp-api/reference/createfeed) operation. For more information, refer to the [Building Listings Management Workflows Guide](https://developer-docs.amazon.com/sp-api/docs/building-listings-management-workflows-guide#should-i-submit-in-bulk-using-the-json_listings_feed-or-individually-with-the-listings-items-api).
       * @param {CreateFeedSpecification} body Information required to create the feed.
       * @return {Promise<CreateFeedResponse>}
       */
    createFeedWithHttpInfo(body: CreateFeedSpecification): Promise<CreateFeedResponse>;
    /**
       * Creates a feed. Upload the contents of the feed document before calling this operation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0083 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).  The rate limit for the [&#x60;JSON_LISTINGS_FEED&#x60;](https://developer-docs.amazon.com/sp-api/docs/listings-feed-type-values#listings-feed) feed type differs from the rate limit for the [&#x60;createFeed&#x60;](https://developer-docs.amazon.com/sp-api/reference/createfeed) operation. For more information, refer to the [Building Listings Management Workflows Guide](https://developer-docs.amazon.com/sp-api/docs/building-listings-management-workflows-guide#should-i-submit-in-bulk-using-the-json_listings_feed-or-individually-with-the-listings-items-api).
       * @param {CreateFeedSpecification} body Information required to create the feed.
       * @return {Promise<CreateFeedResponse>}
       */
    createFeed(body: CreateFeedSpecification): Promise<CreateFeedResponse>;
    /**
       * Creates a feed document for the feed type that you specify. This operation returns a presigned URL for uploading the feed document contents. It also returns a &#x60;feedDocumentId&#x60; value that you can pass in with a subsequent call to the [&#x60;createFeed&#x60;](https://developer-docs.amazon.com/sp-api/reference/createfeed) operation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {CreateFeedDocumentSpecification} body Specifies the content type for the createFeedDocument operation.
       * @return {Promise<CreateFeedDocumentResponse>}
       */
    createFeedDocumentWithHttpInfo(body: CreateFeedDocumentSpecification): Promise<CreateFeedDocumentResponse>;
    /**
       * Creates a feed document for the feed type that you specify. This operation returns a presigned URL for uploading the feed document contents. It also returns a &#x60;feedDocumentId&#x60; value that you can pass in with a subsequent call to the [&#x60;createFeed&#x60;](https://developer-docs.amazon.com/sp-api/reference/createfeed) operation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {CreateFeedDocumentSpecification} body Specifies the content type for the createFeedDocument operation.
       * @return {Promise<CreateFeedDocumentResponse>}
       */
    createFeedDocument(body: CreateFeedDocumentSpecification): Promise<CreateFeedDocumentResponse>;
    /**
       * Returns feed details (including the &#x60;resultDocumentId&#x60;, if available) for the feed that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} feedId The identifier for the feed. This identifier is unique only in combination with a seller ID.
       * @return {Promise<Feed>}
       */
    getFeedWithHttpInfo(feedId: string): Promise<Feed>;
    /**
       * Returns feed details (including the &#x60;resultDocumentId&#x60;, if available) for the feed that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} feedId The identifier for the feed. This identifier is unique only in combination with a seller ID.
       * @return {Promise<Feed>}
       */
    getFeed(feedId: string): Promise<Feed>;
    /**
       * Returns the information required for retrieving a feed document&#39;s contents.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} feedDocumentId The identifier of the feed document.
       * @return {Promise<FeedDocument>}
       */
    getFeedDocumentWithHttpInfo(feedDocumentId: string): Promise<FeedDocument>;
    /**
       * Returns the information required for retrieving a feed document&#39;s contents.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} feedDocumentId The identifier of the feed document.
       * @return {Promise<FeedDocument>}
       */
    getFeedDocument(feedDocumentId: string): Promise<FeedDocument>;
    /**
       * Returns feed details for the feeds that match the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Object} [opts] Optional parameters
       * @param {[String]} [opts.feedTypes] A list of feed types used to filter feeds. When feedTypes is provided, the other filter parameters (processingStatuses, marketplaceIds, createdSince, createdUntil) and pageSize may also be provided. Either feedTypes or nextToken is required.
       * @param {[String]} [opts.marketplaceIds] A list of marketplace identifiers used to filter feeds. The feeds returned will match at least one of the marketplaces that you specify.
       * @param {Number} [opts.pageSize] The maximum number of feeds to return in a single call. (default to 10)
       * @param {[String]} [opts.processingStatuses] A list of processing statuses used to filter feeds.
       * @param {Date} [opts.createdSince] The earliest feed creation date and time for feeds included in the response, in ISO 8601 format. The default is 90 days ago. Feeds are retained for a maximum of 90 days.
       * @param {Date} [opts.createdUntil] The latest feed creation date and time for feeds included in the response, in ISO 8601 format. The default is now.
       * @param {String} [opts.nextToken] A string token returned in the response to your previous request. nextToken is returned when the number of results exceeds the specified pageSize value. To get the next page of results, call the getFeeds operation and include this token as the only parameter. Specifying nextToken with any other parameters will cause the request to fail.
       * @return {Promise<GetFeedsResponse>}
       */
    getFeedsWithHttpInfo(opts?: {
        feedTypes?: [string];
        marketplaceIds?: [string];
        pageSize?: number;
        processingStatuses?: [string];
        createdSince?: Date;
        createdUntil?: Date;
        nextToken?: string;
    }): Promise<GetFeedsResponse>;
    /**
       * Returns feed details for the feeds that match the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Object} [opts] Optional parameters
       * @param {[String]} [opts.feedTypes] A list of feed types used to filter feeds. When feedTypes is provided, the other filter parameters (processingStatuses, marketplaceIds, createdSince, createdUntil) and pageSize may also be provided. Either feedTypes or nextToken is required.
       * @param {[String]} [opts.marketplaceIds] A list of marketplace identifiers used to filter feeds. The feeds returned will match at least one of the marketplaces that you specify.
       * @param {Number} [opts.pageSize] The maximum number of feeds to return in a single call. (default to 10)
       * @param {[String]} [opts.processingStatuses] A list of processing statuses used to filter feeds.
       * @param {Date} [opts.createdSince] The earliest feed creation date and time for feeds included in the response, in ISO 8601 format. The default is 90 days ago. Feeds are retained for a maximum of 90 days.
       * @param {Date} [opts.createdUntil] The latest feed creation date and time for feeds included in the response, in ISO 8601 format. The default is now.
       * @param {String} [opts.nextToken] A string token returned in the response to your previous request. nextToken is returned when the number of results exceeds the specified pageSize value. To get the next page of results, call the getFeeds operation and include this token as the only parameter. Specifying nextToken with any other parameters will cause the request to fail.
       * @return {Promise<GetFeedsResponse>}
       */
    getFeeds(opts?: {
        feedTypes?: [string];
        marketplaceIds?: [string];
        pageSize?: number;
        processingStatuses?: [string];
        createdSince?: Date;
        createdUntil?: Date;
        nextToken?: string;
    }): Promise<GetFeedsResponse>;
    #private;
}
import { CreateFeedSpecification } from '../model/CreateFeedSpecification.js';
import { CreateFeedResponse } from '../model/CreateFeedResponse.js';
import { CreateFeedDocumentSpecification } from '../model/CreateFeedDocumentSpecification.js';
import { CreateFeedDocumentResponse } from '../model/CreateFeedDocumentResponse.js';
import { Feed } from '../model/Feed.js';
import { FeedDocument } from '../model/FeedDocument.js';
import { GetFeedsResponse } from '../model/GetFeedsResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=FeedsApi.d.ts.map