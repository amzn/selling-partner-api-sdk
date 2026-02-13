/**
* Listings service.
* @module listingsitems_v2021_08_01/api/ListingsApi
* @version 2021-08-01
*/
export class ListingsApi {
    /**
      * Constructs a new ListingsApi.
      * @alias module:listingsitems_v2021_08_01/api/ListingsApi
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
       * Delete a listings item for a selling partner.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput can receive higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API documentation.
       * @param {String} sellerId A selling partner identifier, such as a merchant account or vendor code.
       * @param {String} sku A selling partner provided identifier for an Amazon listing.
       * @param {String[]} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.issueLocale] A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: &#x60;en_US&#x60;, &#x60;fr_CA&#x60;, &#x60;fr_FR&#x60;. Localized messages default to &#x60;en_US&#x60; when a localization is not available in the specified locale.
       * @return {Promise<ListingsItemSubmissionResponse>}
       */
    deleteListingsItemWithHttpInfo(sellerId: string, sku: string, marketplaceIds: string[], opts?: {
        issueLocale?: string;
    }): Promise<ListingsItemSubmissionResponse>;
    /**
       * Delete a listings item for a selling partner.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput can receive higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API documentation.
       * @param {String} sellerId A selling partner identifier, such as a merchant account or vendor code.
       * @param {String} sku A selling partner provided identifier for an Amazon listing.
       * @param {String[]} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.issueLocale] A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: &#x60;en_US&#x60;, &#x60;fr_CA&#x60;, &#x60;fr_FR&#x60;. Localized messages default to &#x60;en_US&#x60; when a localization is not available in the specified locale.
       * @return {Promise<ListingsItemSubmissionResponse>}
       */
    deleteListingsItem(sellerId: string, sku: string, marketplaceIds: string[], opts?: {
        issueLocale?: string;
    }): Promise<ListingsItemSubmissionResponse>;
    /**
       * Returns details about a listings item for a selling partner.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput can receive higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API documentation.
       * @param {String} sellerId A selling partner identifier, such as a merchant account or vendor code.
       * @param {String} sku A selling partner provided identifier for an Amazon listing.
       * @param {String[]} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.issueLocale] A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: &#x60;en_US&#x60;, &#x60;fr_CA&#x60;, &#x60;fr_FR&#x60;. Localized messages default to &#x60;en_US&#x60; when a localization is not available in the specified locale.
       * @param {String[]} [opts.includedData] A comma-delimited list of data sets to include in the response. Default: &#x60;summaries&#x60;.
       * @return {Promise<Item>}
       */
    getListingsItemWithHttpInfo(sellerId: string, sku: string, marketplaceIds: string[], opts?: {
        issueLocale?: string;
        includedData?: string[];
    }): Promise<Item>;
    /**
       * Returns details about a listings item for a selling partner.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput can receive higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API documentation.
       * @param {String} sellerId A selling partner identifier, such as a merchant account or vendor code.
       * @param {String} sku A selling partner provided identifier for an Amazon listing.
       * @param {String[]} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.issueLocale] A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: &#x60;en_US&#x60;, &#x60;fr_CA&#x60;, &#x60;fr_FR&#x60;. Localized messages default to &#x60;en_US&#x60; when a localization is not available in the specified locale.
       * @param {String[]} [opts.includedData] A comma-delimited list of data sets to include in the response. Default: &#x60;summaries&#x60;.
       * @return {Promise<Item>}
       */
    getListingsItem(sellerId: string, sku: string, marketplaceIds: string[], opts?: {
        issueLocale?: string;
        includedData?: string[];
    }): Promise<Item>;
    /**
       * Partially update (patch) a listings item for a selling partner. Only top-level listings item attributes can be patched. Patching nested attributes is not supported.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput can receive higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API documentation.
       * @param {String} sellerId A selling partner identifier, such as a merchant account or vendor code.
       * @param {String} sku A selling partner provided identifier for an Amazon listing.
       * @param {String[]} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
       * @param {ListingsItemPatchRequest} body The request body schema for the &#x60;patchListingsItem&#x60; operation.
       * @param {Object} [opts] Optional parameters
       * @param {String[]} [opts.includedData] A comma-delimited list of data sets to include in the response. Default: &#x60;issues&#x60;.
       * @param {String} [opts.mode] The mode of operation for the request.
       * @param {String} [opts.issueLocale] A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: &#x60;en_US&#x60;, &#x60;fr_CA&#x60;, &#x60;fr_FR&#x60;. Localized messages default to &#x60;en_US&#x60; when a localization is not available in the specified locale.
       * @return {Promise<ListingsItemSubmissionResponse>}
       */
    patchListingsItemWithHttpInfo(sellerId: string, sku: string, marketplaceIds: string[], body: ListingsItemPatchRequest, opts?: {
        includedData?: string[];
        mode?: string;
        issueLocale?: string;
    }): Promise<ListingsItemSubmissionResponse>;
    /**
       * Partially update (patch) a listings item for a selling partner. Only top-level listings item attributes can be patched. Patching nested attributes is not supported.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput can receive higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API documentation.
       * @param {String} sellerId A selling partner identifier, such as a merchant account or vendor code.
       * @param {String} sku A selling partner provided identifier for an Amazon listing.
       * @param {String[]} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
       * @param {ListingsItemPatchRequest} body The request body schema for the &#x60;patchListingsItem&#x60; operation.
       * @param {Object} [opts] Optional parameters
       * @param {String[]} [opts.includedData] A comma-delimited list of data sets to include in the response. Default: &#x60;issues&#x60;.
       * @param {String} [opts.mode] The mode of operation for the request.
       * @param {String} [opts.issueLocale] A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: &#x60;en_US&#x60;, &#x60;fr_CA&#x60;, &#x60;fr_FR&#x60;. Localized messages default to &#x60;en_US&#x60; when a localization is not available in the specified locale.
       * @return {Promise<ListingsItemSubmissionResponse>}
       */
    patchListingsItem(sellerId: string, sku: string, marketplaceIds: string[], body: ListingsItemPatchRequest, opts?: {
        includedData?: string[];
        mode?: string;
        issueLocale?: string;
    }): Promise<ListingsItemSubmissionResponse>;
    /**
       * Creates a new or fully-updates an existing listings item for a selling partner.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput can receive higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API documentation.
       * @param {String} sellerId A selling partner identifier, such as a merchant account or vendor code.
       * @param {String} sku A selling partner provided identifier for an Amazon listing.
       * @param {String[]} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
       * @param {ListingsItemPutRequest} body The request body schema for the &#x60;putListingsItem&#x60; operation.
       * @param {Object} [opts] Optional parameters
       * @param {String[]} [opts.includedData] A comma-delimited list of data sets to include in the response. Default: &#x60;issues&#x60;.
       * @param {String} [opts.mode] The mode of operation for the request.
       * @param {String} [opts.issueLocale] A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: &#x60;en_US&#x60;, &#x60;fr_CA&#x60;, &#x60;fr_FR&#x60;. Localized messages default to &#x60;en_US&#x60; when a localization is not available in the specified locale.
       * @return {Promise<ListingsItemSubmissionResponse>}
       */
    putListingsItemWithHttpInfo(sellerId: string, sku: string, marketplaceIds: string[], body: ListingsItemPutRequest, opts?: {
        includedData?: string[];
        mode?: string;
        issueLocale?: string;
    }): Promise<ListingsItemSubmissionResponse>;
    /**
       * Creates a new or fully-updates an existing listings item for a selling partner.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput can receive higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API documentation.
       * @param {String} sellerId A selling partner identifier, such as a merchant account or vendor code.
       * @param {String} sku A selling partner provided identifier for an Amazon listing.
       * @param {String[]} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
       * @param {ListingsItemPutRequest} body The request body schema for the &#x60;putListingsItem&#x60; operation.
       * @param {Object} [opts] Optional parameters
       * @param {String[]} [opts.includedData] A comma-delimited list of data sets to include in the response. Default: &#x60;issues&#x60;.
       * @param {String} [opts.mode] The mode of operation for the request.
       * @param {String} [opts.issueLocale] A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: &#x60;en_US&#x60;, &#x60;fr_CA&#x60;, &#x60;fr_FR&#x60;. Localized messages default to &#x60;en_US&#x60; when a localization is not available in the specified locale.
       * @return {Promise<ListingsItemSubmissionResponse>}
       */
    putListingsItem(sellerId: string, sku: string, marketplaceIds: string[], body: ListingsItemPutRequest, opts?: {
        includedData?: string[];
        mode?: string;
        issueLocale?: string;
    }): Promise<ListingsItemSubmissionResponse>;
    /**
       * Search for and return a list of selling partner listings items and their respective details.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that are applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} sellerId A selling partner identifier, such as a merchant account or vendor code.
       * @param {String[]} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.issueLocale] A locale that is used to localize issues. When not provided, the default language code of the first marketplace is used. Examples: \&quot;en_US\&quot;, \&quot;fr_CA\&quot;, \&quot;fr_FR\&quot;. When a localization is not available in the specified locale, localized messages default to \&quot;en_US\&quot;.
       * @param {String[]} [opts.includedData] A comma-delimited list of datasets that you want to include in the response. Default: &#x60;summaries&#x60;.
       * @param {String[]} [opts.identifiers] A comma-delimited list of product identifiers that you can use to search for listings items.   **Note**:  1. This is required when you specify &#x60;identifiersType&#x60;. 2. You cannot use &#39;identifiers&#39; if you specify &#x60;variationParentSku&#x60; or &#x60;packageHierarchySku&#x60;.
       * @param {String} [opts.identifiersType] A type of product identifiers that you can use to search for listings items.   **Note**:  This is required when &#x60;identifiers&#x60; is provided.
       * @param {String} [opts.variationParentSku] Filters results to include listing items that are variation children of the specified SKU.   **Note**: You cannot use &#x60;variationParentSku&#x60; if you include &#x60;identifiers&#x60; or &#x60;packageHierarchySku&#x60; in your request.
       * @param {String} [opts.packageHierarchySku] Filter results to include listing items that contain or are contained by the specified SKU.   **Note**: You cannot use &#x60;packageHierarchySku&#x60; if you include &#x60;identifiers&#x60; or &#x60;variationParentSku&#x60; in your request.
       * @param {Date} [opts.createdAfter] A date-time that is used to filter listing items. The response includes listings items that were created at or after this time. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
       * @param {Date} [opts.createdBefore] A date-time that is used to filter listing items. The response includes listings items that were created at or before this time. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
       * @param {Date} [opts.lastUpdatedAfter] A date-time that is used to filter listing items. The response includes listings items that were last updated at or after this time. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
       * @param {Date} [opts.lastUpdatedBefore] A date-time that is used to filter listing items. The response includes listings items that were last updated at or before this time. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
       * @param {String[]} [opts.withIssueSeverity] Filter results to include only listing items that have issues that match one or more of the specified severity levels.
       * @param {String[]} [opts.withStatus] Filter results to include only listing items that have the specified status.
       * @param {String[]} [opts.withoutStatus] Filter results to include only listing items that don&#39;t contain the specified statuses.
       * @param {String} [opts.sortBy] An attribute by which to sort the returned listing items. (default to &#39;lastUpdatedDate&#39;)
       * @param {String} [opts.sortOrder] The order in which to sort the result items. (default to &#39;DESC&#39;)
       * @param {Number} [opts.pageSize] The number of results that you want to include on each page. (default to 10)
       * @param {String} [opts.pageToken] A token that you can use to fetch a specific page when there are multiple pages of results.
       * @return {Promise<ItemSearchResults>}
       */
    searchListingsItemsWithHttpInfo(sellerId: string, marketplaceIds: string[], opts?: {
        issueLocale?: string;
        includedData?: string[];
        identifiers?: string[];
        identifiersType?: string;
        variationParentSku?: string;
        packageHierarchySku?: string;
        createdAfter?: Date;
        createdBefore?: Date;
        lastUpdatedAfter?: Date;
        lastUpdatedBefore?: Date;
        withIssueSeverity?: string[];
        withStatus?: string[];
        withoutStatus?: string[];
        sortBy?: string;
        sortOrder?: string;
        pageSize?: number;
        pageToken?: string;
    }): Promise<ItemSearchResults>;
    /**
       * Search for and return a list of selling partner listings items and their respective details.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that are applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} sellerId A selling partner identifier, such as a merchant account or vendor code.
       * @param {String[]} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.issueLocale] A locale that is used to localize issues. When not provided, the default language code of the first marketplace is used. Examples: \&quot;en_US\&quot;, \&quot;fr_CA\&quot;, \&quot;fr_FR\&quot;. When a localization is not available in the specified locale, localized messages default to \&quot;en_US\&quot;.
       * @param {String[]} [opts.includedData] A comma-delimited list of datasets that you want to include in the response. Default: &#x60;summaries&#x60;.
       * @param {String[]} [opts.identifiers] A comma-delimited list of product identifiers that you can use to search for listings items.   **Note**:  1. This is required when you specify &#x60;identifiersType&#x60;. 2. You cannot use &#39;identifiers&#39; if you specify &#x60;variationParentSku&#x60; or &#x60;packageHierarchySku&#x60;.
       * @param {String} [opts.identifiersType] A type of product identifiers that you can use to search for listings items.   **Note**:  This is required when &#x60;identifiers&#x60; is provided.
       * @param {String} [opts.variationParentSku] Filters results to include listing items that are variation children of the specified SKU.   **Note**: You cannot use &#x60;variationParentSku&#x60; if you include &#x60;identifiers&#x60; or &#x60;packageHierarchySku&#x60; in your request.
       * @param {String} [opts.packageHierarchySku] Filter results to include listing items that contain or are contained by the specified SKU.   **Note**: You cannot use &#x60;packageHierarchySku&#x60; if you include &#x60;identifiers&#x60; or &#x60;variationParentSku&#x60; in your request.
       * @param {Date} [opts.createdAfter] A date-time that is used to filter listing items. The response includes listings items that were created at or after this time. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
       * @param {Date} [opts.createdBefore] A date-time that is used to filter listing items. The response includes listings items that were created at or before this time. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
       * @param {Date} [opts.lastUpdatedAfter] A date-time that is used to filter listing items. The response includes listings items that were last updated at or after this time. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
       * @param {Date} [opts.lastUpdatedBefore] A date-time that is used to filter listing items. The response includes listings items that were last updated at or before this time. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
       * @param {String[]} [opts.withIssueSeverity] Filter results to include only listing items that have issues that match one or more of the specified severity levels.
       * @param {String[]} [opts.withStatus] Filter results to include only listing items that have the specified status.
       * @param {String[]} [opts.withoutStatus] Filter results to include only listing items that don&#39;t contain the specified statuses.
       * @param {String} [opts.sortBy] An attribute by which to sort the returned listing items. (default to &#39;lastUpdatedDate&#39;)
       * @param {String} [opts.sortOrder] The order in which to sort the result items. (default to &#39;DESC&#39;)
       * @param {Number} [opts.pageSize] The number of results that you want to include on each page. (default to 10)
       * @param {String} [opts.pageToken] A token that you can use to fetch a specific page when there are multiple pages of results.
       * @return {Promise<ItemSearchResults>}
       */
    searchListingsItems(sellerId: string, marketplaceIds: string[], opts?: {
        issueLocale?: string;
        includedData?: string[];
        identifiers?: string[];
        identifiersType?: string;
        variationParentSku?: string;
        packageHierarchySku?: string;
        createdAfter?: Date;
        createdBefore?: Date;
        lastUpdatedAfter?: Date;
        lastUpdatedBefore?: Date;
        withIssueSeverity?: string[];
        withStatus?: string[];
        withoutStatus?: string[];
        sortBy?: string;
        sortOrder?: string;
        pageSize?: number;
        pageToken?: string;
    }): Promise<ItemSearchResults>;
    #private;
}
import { ListingsItemSubmissionResponse } from '../model/ListingsItemSubmissionResponse.js';
import { Item } from '../model/Item.js';
import { ListingsItemPatchRequest } from '../model/ListingsItemPatchRequest.js';
import { ListingsItemPutRequest } from '../model/ListingsItemPutRequest.js';
import { ItemSearchResults } from '../model/ItemSearchResults.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=ListingsApi.d.ts.map