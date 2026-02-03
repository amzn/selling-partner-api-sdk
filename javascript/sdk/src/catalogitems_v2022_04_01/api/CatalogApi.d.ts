/**
* Catalog service.
* @module catalogitems_v2022_04_01/api/CatalogApi
* @version 2022-04-01
*/
export class CatalogApi {
    /**
      * Constructs a new CatalogApi.
      * @alias module:catalogitems_v2022_04_01/api/CatalogApi
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
       * Retrieves details for an item in the Amazon catalog.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} asin The Amazon Standard Identification Number (ASIN) of the item.
       * @param {String[]} marketplaceIds A comma-delimited list of Amazon marketplace identifiers. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {Object} [opts] Optional parameters
       * @param {[String]} [opts.includedData] A comma-delimited list of datasets to include in the response.
       * @param {String} [opts.locale] The locale for which you want to retrieve localized summaries. Defaults to the primary locale of the marketplace.
       * @return {Promise<Item>}
       */
    getCatalogItemWithHttpInfo(asin: string, marketplaceIds: string[], opts?: {
        includedData?: [string];
        locale?: string;
    }): Promise<Item>;
    /**
       * Retrieves details for an item in the Amazon catalog.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} asin The Amazon Standard Identification Number (ASIN) of the item.
       * @param {String[]} marketplaceIds A comma-delimited list of Amazon marketplace identifiers. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {Object} [opts] Optional parameters
       * @param {[String]} [opts.includedData] A comma-delimited list of datasets to include in the response.
       * @param {String} [opts.locale] The locale for which you want to retrieve localized summaries. Defaults to the primary locale of the marketplace.
       * @return {Promise<Item>}
       */
    getCatalogItem(asin: string, marketplaceIds: string[], opts?: {
        includedData?: [string];
        locale?: string;
    }): Promise<Item>;
    /**
       * Search for a list of Amazon catalog items and item-related information. You can search by identifier or by keywords.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String[]} marketplaceIds A comma-delimited list of Amazon marketplace identifiers. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {Object} [opts] Optional parameters
       * @param {[String]} [opts.identifiers] A comma-delimited list of product identifiers that you can use to search the Amazon catalog. **Note:** You cannot include &#x60;identifiers&#x60; and &#x60;keywords&#x60; in the same request.
       * @param {String} [opts.identifiersType] The type of product identifiers that you can use to search the Amazon catalog. **Note:** &#x60;identifiersType&#x60; is required when &#x60;identifiers&#x60; is in the request.
       * @param {[String]} [opts.includedData] A comma-delimited list of datasets to include in the response.
       * @param {String} [opts.locale] The locale for which you want to retrieve localized summaries. Defaults to the primary locale of the marketplace.
       * @param {String} [opts.sellerId] A selling partner identifier, such as a seller account or vendor code. **Note:** Required when &#x60;identifiersType&#x60; is &#x60;SKU&#x60;.
       * @param {[String]} [opts.keywords] A comma-delimited list of keywords that you can use to search the Amazon catalog. **Note:** You cannot include &#x60;keywords&#x60; and &#x60;identifiers&#x60; in the same request.
       * @param {[String]} [opts.brandNames] A comma-delimited list of brand names that you can use to limit the search in queries based on &#x60;keywords&#x60;. **Note:** Cannot be used with &#x60;identifiers&#x60;.
       * @param {[String]} [opts.classificationIds] A comma-delimited list of classification identifiers that you can use to limit the search in queries based on &#x60;keywords&#x60;. **Note:** Cannot be used with &#x60;identifiers&#x60;.
       * @param {Number} [opts.pageSize] The number of results to include on each page. (default to 10)
       * @param {String} [opts.pageToken] A token that you can use to fetch a specific page when there are multiple pages of results.
       * @param {String} [opts.keywordsLocale] The language of the keywords that are included in queries based on &#x60;keywords&#x60;. Defaults to the primary locale of the marketplace. **Note:** Cannot be used with &#x60;identifiers&#x60;.
       * @return {Promise<ItemSearchResults>}
       */
    searchCatalogItemsWithHttpInfo(marketplaceIds: string[], opts?: {
        identifiers?: [string];
        identifiersType?: string;
        includedData?: [string];
        locale?: string;
        sellerId?: string;
        keywords?: [string];
        brandNames?: [string];
        classificationIds?: [string];
        pageSize?: number;
        pageToken?: string;
        keywordsLocale?: string;
    }): Promise<ItemSearchResults>;
    /**
       * Search for a list of Amazon catalog items and item-related information. You can search by identifier or by keywords.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String[]} marketplaceIds A comma-delimited list of Amazon marketplace identifiers. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {Object} [opts] Optional parameters
       * @param {[String]} [opts.identifiers] A comma-delimited list of product identifiers that you can use to search the Amazon catalog. **Note:** You cannot include &#x60;identifiers&#x60; and &#x60;keywords&#x60; in the same request.
       * @param {String} [opts.identifiersType] The type of product identifiers that you can use to search the Amazon catalog. **Note:** &#x60;identifiersType&#x60; is required when &#x60;identifiers&#x60; is in the request.
       * @param {[String]} [opts.includedData] A comma-delimited list of datasets to include in the response.
       * @param {String} [opts.locale] The locale for which you want to retrieve localized summaries. Defaults to the primary locale of the marketplace.
       * @param {String} [opts.sellerId] A selling partner identifier, such as a seller account or vendor code. **Note:** Required when &#x60;identifiersType&#x60; is &#x60;SKU&#x60;.
       * @param {[String]} [opts.keywords] A comma-delimited list of keywords that you can use to search the Amazon catalog. **Note:** You cannot include &#x60;keywords&#x60; and &#x60;identifiers&#x60; in the same request.
       * @param {[String]} [opts.brandNames] A comma-delimited list of brand names that you can use to limit the search in queries based on &#x60;keywords&#x60;. **Note:** Cannot be used with &#x60;identifiers&#x60;.
       * @param {[String]} [opts.classificationIds] A comma-delimited list of classification identifiers that you can use to limit the search in queries based on &#x60;keywords&#x60;. **Note:** Cannot be used with &#x60;identifiers&#x60;.
       * @param {Number} [opts.pageSize] The number of results to include on each page. (default to 10)
       * @param {String} [opts.pageToken] A token that you can use to fetch a specific page when there are multiple pages of results.
       * @param {String} [opts.keywordsLocale] The language of the keywords that are included in queries based on &#x60;keywords&#x60;. Defaults to the primary locale of the marketplace. **Note:** Cannot be used with &#x60;identifiers&#x60;.
       * @return {Promise<ItemSearchResults>}
       */
    searchCatalogItems(marketplaceIds: string[], opts?: {
        identifiers?: [string];
        identifiersType?: string;
        includedData?: [string];
        locale?: string;
        sellerId?: string;
        keywords?: [string];
        brandNames?: [string];
        classificationIds?: [string];
        pageSize?: number;
        pageToken?: string;
        keywordsLocale?: string;
    }): Promise<ItemSearchResults>;
    #private;
}
import { Item } from '../model/Item.js';
import { ItemSearchResults } from '../model/ItemSearchResults.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=CatalogApi.d.ts.map