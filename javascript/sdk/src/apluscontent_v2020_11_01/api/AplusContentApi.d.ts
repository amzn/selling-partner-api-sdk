/**
* AplusContent service.
* @module apluscontent_v2020_11_01/api/AplusContentApi
* @version 2020-11-01
*/
export class AplusContentApi {
    /**
      * Constructs a new AplusContentApi.
      * @alias module:apluscontent_v2020_11_01/api/AplusContentApi
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
       * Creates a new A+ Content document.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} marketplaceId The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {PostContentDocumentRequest} postContentDocumentRequest The content document request details.
       * @return {Promise<PostContentDocumentResponse>}
       */
    createContentDocumentWithHttpInfo(marketplaceId: string, postContentDocumentRequest: PostContentDocumentRequest): Promise<PostContentDocumentResponse>;
    /**
       * Creates a new A+ Content document.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} marketplaceId The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {PostContentDocumentRequest} postContentDocumentRequest The content document request details.
       * @return {Promise<PostContentDocumentResponse>}
       */
    createContentDocument(marketplaceId: string, postContentDocumentRequest: PostContentDocumentRequest): Promise<PostContentDocumentResponse>;
    /**
       * Returns an A+ Content document, if available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} contentReferenceKey The unique reference key for the A+ Content document. A content reference key cannot form a permalink and might change in the future. A content reference key is not guaranteed to match any A+ Content identifier.
       * @param {String} marketplaceId The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {[String]} includedDataSet The set of A+ Content data types to include in the response.
       * @return {Promise<GetContentDocumentResponse>}
       */
    getContentDocumentWithHttpInfo(contentReferenceKey: string, marketplaceId: string, includedDataSet: [string]): Promise<GetContentDocumentResponse>;
    /**
       * Returns an A+ Content document, if available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} contentReferenceKey The unique reference key for the A+ Content document. A content reference key cannot form a permalink and might change in the future. A content reference key is not guaranteed to match any A+ Content identifier.
       * @param {String} marketplaceId The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {[String]} includedDataSet The set of A+ Content data types to include in the response.
       * @return {Promise<GetContentDocumentResponse>}
       */
    getContentDocument(contentReferenceKey: string, marketplaceId: string, includedDataSet: [string]): Promise<GetContentDocumentResponse>;
    /**
       * Returns a list of ASINs that are related to the specified A+ Content document, if available. If you don&#39;t include the &#x60;asinSet&#x60; parameter, this operation returns all ASINs related to the content document.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} contentReferenceKey The unique reference key for the A+ Content document. A content reference key cannot form a permalink and might change in the future. A content reference key is not guaranteed to match any A+ Content identifier.
       * @param {String} marketplaceId The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {Object} [opts] Optional parameters
       * @param {[String]} [opts.includedDataSet] The set of A+ Content data types to include in the response. If you don&#39;t include this parameter, the operation returns the related ASINs without metadata.
       * @param {[String]} [opts.asinSet] The set of ASINs.
       * @param {String} [opts.pageToken] A token that you use to fetch a specific page when there are multiple pages of results.
       * @return {Promise<ListContentDocumentAsinRelationsResponse>}
       */
    listContentDocumentAsinRelationsWithHttpInfo(contentReferenceKey: string, marketplaceId: string, opts?: {
        includedDataSet?: [string];
        asinSet?: [string];
        pageToken?: string;
    }): Promise<ListContentDocumentAsinRelationsResponse>;
    /**
       * Returns a list of ASINs that are related to the specified A+ Content document, if available. If you don&#39;t include the &#x60;asinSet&#x60; parameter, this operation returns all ASINs related to the content document.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} contentReferenceKey The unique reference key for the A+ Content document. A content reference key cannot form a permalink and might change in the future. A content reference key is not guaranteed to match any A+ Content identifier.
       * @param {String} marketplaceId The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {Object} [opts] Optional parameters
       * @param {[String]} [opts.includedDataSet] The set of A+ Content data types to include in the response. If you don&#39;t include this parameter, the operation returns the related ASINs without metadata.
       * @param {[String]} [opts.asinSet] The set of ASINs.
       * @param {String} [opts.pageToken] A token that you use to fetch a specific page when there are multiple pages of results.
       * @return {Promise<ListContentDocumentAsinRelationsResponse>}
       */
    listContentDocumentAsinRelations(contentReferenceKey: string, marketplaceId: string, opts?: {
        includedDataSet?: [string];
        asinSet?: [string];
        pageToken?: string;
    }): Promise<ListContentDocumentAsinRelationsResponse>;
    /**
       * Submits an A+ Content document for review, approval, and publishing.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} contentReferenceKey The unique reference key for the A+ Content document. A content reference key cannot form a permalink and might change in the future. A content reference key is not guaranteed to match any A+ content identifier.
       * @param {String} marketplaceId The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @return {Promise<PostContentDocumentApprovalSubmissionResponse>}
       */
    postContentDocumentApprovalSubmissionWithHttpInfo(contentReferenceKey: string, marketplaceId: string): Promise<PostContentDocumentApprovalSubmissionResponse>;
    /**
       * Submits an A+ Content document for review, approval, and publishing.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} contentReferenceKey The unique reference key for the A+ Content document. A content reference key cannot form a permalink and might change in the future. A content reference key is not guaranteed to match any A+ content identifier.
       * @param {String} marketplaceId The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @return {Promise<PostContentDocumentApprovalSubmissionResponse>}
       */
    postContentDocumentApprovalSubmission(contentReferenceKey: string, marketplaceId: string): Promise<PostContentDocumentApprovalSubmissionResponse>;
    /**
       * Replaces all ASINs related to the specified A+ Content document, if available. This operation can add or remove ASINs, depending on the current set of related ASINs. Removing an ASIN will suspend the content document from that ASIN.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} contentReferenceKey The unique reference key for the A+ Content document. A content reference key cannot form a permalink and might change in the future. A content reference key is not guaranteed to match any A+ content identifier.
       * @param {String} marketplaceId The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {PostContentDocumentAsinRelationsRequest} postContentDocumentAsinRelationsRequest The request details for the content document ASIN relations.
       * @return {Promise<PostContentDocumentAsinRelationsResponse>}
       */
    postContentDocumentAsinRelationsWithHttpInfo(contentReferenceKey: string, marketplaceId: string, postContentDocumentAsinRelationsRequest: PostContentDocumentAsinRelationsRequest): Promise<PostContentDocumentAsinRelationsResponse>;
    /**
       * Replaces all ASINs related to the specified A+ Content document, if available. This operation can add or remove ASINs, depending on the current set of related ASINs. Removing an ASIN will suspend the content document from that ASIN.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} contentReferenceKey The unique reference key for the A+ Content document. A content reference key cannot form a permalink and might change in the future. A content reference key is not guaranteed to match any A+ content identifier.
       * @param {String} marketplaceId The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {PostContentDocumentAsinRelationsRequest} postContentDocumentAsinRelationsRequest The request details for the content document ASIN relations.
       * @return {Promise<PostContentDocumentAsinRelationsResponse>}
       */
    postContentDocumentAsinRelations(contentReferenceKey: string, marketplaceId: string, postContentDocumentAsinRelationsRequest: PostContentDocumentAsinRelationsRequest): Promise<PostContentDocumentAsinRelationsResponse>;
    /**
       * Submits a request to suspend visible A+ Content. This doesn&#39;t delete the content document or the ASIN relations.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} contentReferenceKey The unique reference key for the A+ Content document. A content reference key cannot form a permalink and might change in the future. A content reference key is not guaranteed to match any A+ content identifier.
       * @param {String} marketplaceId The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @return {Promise<PostContentDocumentSuspendSubmissionResponse>}
       */
    postContentDocumentSuspendSubmissionWithHttpInfo(contentReferenceKey: string, marketplaceId: string): Promise<PostContentDocumentSuspendSubmissionResponse>;
    /**
       * Submits a request to suspend visible A+ Content. This doesn&#39;t delete the content document or the ASIN relations.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} contentReferenceKey The unique reference key for the A+ Content document. A content reference key cannot form a permalink and might change in the future. A content reference key is not guaranteed to match any A+ content identifier.
       * @param {String} marketplaceId The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @return {Promise<PostContentDocumentSuspendSubmissionResponse>}
       */
    postContentDocumentSuspendSubmission(contentReferenceKey: string, marketplaceId: string): Promise<PostContentDocumentSuspendSubmissionResponse>;
    /**
       * Returns a list of all A+ Content documents, including metadata, that are assigned to a selling partner. To get the actual contents of the A+ Content documents, call the &#x60;getContentDocument&#x60; operation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} marketplaceId The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.pageToken] A token that you use to fetch a specific page when there are multiple pages of results.
       * @return {Promise<SearchContentDocumentsResponse>}
       */
    searchContentDocumentsWithHttpInfo(marketplaceId: string, opts?: {
        pageToken?: string;
    }): Promise<SearchContentDocumentsResponse>;
    /**
       * Returns a list of all A+ Content documents, including metadata, that are assigned to a selling partner. To get the actual contents of the A+ Content documents, call the &#x60;getContentDocument&#x60; operation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} marketplaceId The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.pageToken] A token that you use to fetch a specific page when there are multiple pages of results.
       * @return {Promise<SearchContentDocumentsResponse>}
       */
    searchContentDocuments(marketplaceId: string, opts?: {
        pageToken?: string;
    }): Promise<SearchContentDocumentsResponse>;
    /**
       * Searches for A+ Content publishing records, if available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} marketplaceId The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {String} asin The Amazon Standard Identification Number (ASIN) is the unique identifier of a product within a marketplace.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.pageToken] A token that you use to fetch a specific page when there are multiple pages of results.
       * @return {Promise<SearchContentPublishRecordsResponse>}
       */
    searchContentPublishRecordsWithHttpInfo(marketplaceId: string, asin: string, opts?: {
        pageToken?: string;
    }): Promise<SearchContentPublishRecordsResponse>;
    /**
       * Searches for A+ Content publishing records, if available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} marketplaceId The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {String} asin The Amazon Standard Identification Number (ASIN) is the unique identifier of a product within a marketplace.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.pageToken] A token that you use to fetch a specific page when there are multiple pages of results.
       * @return {Promise<SearchContentPublishRecordsResponse>}
       */
    searchContentPublishRecords(marketplaceId: string, asin: string, opts?: {
        pageToken?: string;
    }): Promise<SearchContentPublishRecordsResponse>;
    /**
       * Updates an existing A+ Content document.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} contentReferenceKey The unique reference key for the A+ Content document. A content reference key cannot form a permalink and might change in the future. A content reference key is not guaranteed to match any A+ Content identifier.
       * @param {String} marketplaceId The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {PostContentDocumentRequest} postContentDocumentRequest The content document request details.
       * @return {Promise<PostContentDocumentResponse>}
       */
    updateContentDocumentWithHttpInfo(contentReferenceKey: string, marketplaceId: string, postContentDocumentRequest: PostContentDocumentRequest): Promise<PostContentDocumentResponse>;
    /**
       * Updates an existing A+ Content document.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} contentReferenceKey The unique reference key for the A+ Content document. A content reference key cannot form a permalink and might change in the future. A content reference key is not guaranteed to match any A+ Content identifier.
       * @param {String} marketplaceId The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {PostContentDocumentRequest} postContentDocumentRequest The content document request details.
       * @return {Promise<PostContentDocumentResponse>}
       */
    updateContentDocument(contentReferenceKey: string, marketplaceId: string, postContentDocumentRequest: PostContentDocumentRequest): Promise<PostContentDocumentResponse>;
    /**
       * Checks if the A+ Content document is valid for use on a set of ASINs.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} marketplaceId The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {PostContentDocumentRequest} postContentDocumentRequest The content document request details.
       * @param {Object} [opts] Optional parameters
       * @param {[String]} [opts.asinSet] The set of ASINs.
       * @return {Promise<ValidateContentDocumentAsinRelationsResponse>}
       */
    validateContentDocumentAsinRelationsWithHttpInfo(marketplaceId: string, postContentDocumentRequest: PostContentDocumentRequest, opts?: {
        asinSet?: [string];
    }): Promise<ValidateContentDocumentAsinRelationsResponse>;
    /**
       * Checks if the A+ Content document is valid for use on a set of ASINs.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} marketplaceId The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {PostContentDocumentRequest} postContentDocumentRequest The content document request details.
       * @param {Object} [opts] Optional parameters
       * @param {[String]} [opts.asinSet] The set of ASINs.
       * @return {Promise<ValidateContentDocumentAsinRelationsResponse>}
       */
    validateContentDocumentAsinRelations(marketplaceId: string, postContentDocumentRequest: PostContentDocumentRequest, opts?: {
        asinSet?: [string];
    }): Promise<ValidateContentDocumentAsinRelationsResponse>;
    #private;
}
import { PostContentDocumentRequest } from '../model/PostContentDocumentRequest.js';
import { PostContentDocumentResponse } from '../model/PostContentDocumentResponse.js';
import { GetContentDocumentResponse } from '../model/GetContentDocumentResponse.js';
import { ListContentDocumentAsinRelationsResponse } from '../model/ListContentDocumentAsinRelationsResponse.js';
import { PostContentDocumentApprovalSubmissionResponse } from '../model/PostContentDocumentApprovalSubmissionResponse.js';
import { PostContentDocumentAsinRelationsRequest } from '../model/PostContentDocumentAsinRelationsRequest.js';
import { PostContentDocumentAsinRelationsResponse } from '../model/PostContentDocumentAsinRelationsResponse.js';
import { PostContentDocumentSuspendSubmissionResponse } from '../model/PostContentDocumentSuspendSubmissionResponse.js';
import { SearchContentDocumentsResponse } from '../model/SearchContentDocumentsResponse.js';
import { SearchContentPublishRecordsResponse } from '../model/SearchContentPublishRecordsResponse.js';
import { ValidateContentDocumentAsinRelationsResponse } from '../model/ValidateContentDocumentAsinRelationsResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=AplusContentApi.d.ts.map