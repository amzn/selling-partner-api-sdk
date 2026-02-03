/**
* Listings service.
* @module listingsrestrictions_v2021_08_01/api/ListingsApi
* @version 2021-08-01
*/
export class ListingsApi {
    /**
      * Constructs a new ListingsApi.
      * @alias module:listingsrestrictions_v2021_08_01/api/ListingsApi
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
       * Returns listing restrictions for an item in the Amazon Catalog.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} asin The Amazon Standard Identification Number (ASIN) of the item.
       * @param {String} sellerId A selling partner identifier, such as a merchant account.
       * @param {String[]} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.conditionType] The condition used to filter restrictions.
       * @param {String} [opts.reasonLocale] A locale for reason text localization. When not provided, the default language code of the first marketplace is used. Examples: \&quot;en_US\&quot;, \&quot;fr_CA\&quot;, \&quot;fr_FR\&quot;. Localized messages default to \&quot;en_US\&quot; when a localization is not available in the specified locale.
       * @return {Promise<RestrictionList>}
       */
    getListingsRestrictionsWithHttpInfo(asin: string, sellerId: string, marketplaceIds: string[], opts?: {
        conditionType?: string;
        reasonLocale?: string;
    }): Promise<RestrictionList>;
    /**
       * Returns listing restrictions for an item in the Amazon Catalog.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} asin The Amazon Standard Identification Number (ASIN) of the item.
       * @param {String} sellerId A selling partner identifier, such as a merchant account.
       * @param {String[]} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.conditionType] The condition used to filter restrictions.
       * @param {String} [opts.reasonLocale] A locale for reason text localization. When not provided, the default language code of the first marketplace is used. Examples: \&quot;en_US\&quot;, \&quot;fr_CA\&quot;, \&quot;fr_FR\&quot;. Localized messages default to \&quot;en_US\&quot; when a localization is not available in the specified locale.
       * @return {Promise<RestrictionList>}
       */
    getListingsRestrictions(asin: string, sellerId: string, marketplaceIds: string[], opts?: {
        conditionType?: string;
        reasonLocale?: string;
    }): Promise<RestrictionList>;
    #private;
}
import { RestrictionList } from '../model/RestrictionList.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=ListingsApi.d.ts.map