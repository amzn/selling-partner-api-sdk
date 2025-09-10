/**
* Definitions service.
* @module producttypedefinitions_v2020_09_01/api/DefinitionsApi
* @version 2020-09-01
*/
export class DefinitionsApi {
    /**
      * Constructs a new DefinitionsApi.
      * @alias module:producttypedefinitions_v2020_09_01/api/DefinitionsApi
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
       * Retrieve an Amazon product type definition.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} productType The Amazon product type name.
       * @param {[String]} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request. Note: This parameter is limited to one marketplaceId at this time.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.sellerId] A selling partner identifier. When provided, seller-specific requirements and values are populated within the product type definition schema, such as brand names associated with the selling partner.
       * @param {String} [opts.productTypeVersion] The version of the Amazon product type to retrieve. Defaults to \&quot;LATEST\&quot;,. Prerelease versions of product type definitions may be retrieved with \&quot;RELEASE_CANDIDATE\&quot;. If no prerelease version is currently available, the \&quot;LATEST\&quot; live version will be provided. (default to &#39;LATEST&#39;)
       * @param {String} [opts.requirements] The name of the requirements set to retrieve requirements for. (default to &#39;LISTING&#39;)
       * @param {String} [opts.requirementsEnforced] Identifies if the required attributes for a requirements set are enforced by the product type definition schema. Non-enforced requirements enable structural validation of individual attributes without all the required attributes being present (such as for partial updates). (default to &#39;ENFORCED&#39;)
       * @param {String} [opts.locale] Locale for retrieving display labels and other presentation details. Defaults to the default language of the first marketplace in the request. (default to &#39;DEFAULT&#39;)
       * @return {Promise<ProductTypeDefinition>}
       */
    getDefinitionsProductTypeWithHttpInfo(productType: string, marketplaceIds: [string], opts?: {
        sellerId?: string;
        productTypeVersion?: string;
        requirements?: string;
        requirementsEnforced?: string;
        locale?: string;
    }): Promise<ProductTypeDefinition>;
    /**
       * Retrieve an Amazon product type definition.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} productType The Amazon product type name.
       * @param {[String]} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request. Note: This parameter is limited to one marketplaceId at this time.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.sellerId] A selling partner identifier. When provided, seller-specific requirements and values are populated within the product type definition schema, such as brand names associated with the selling partner.
       * @param {String} [opts.productTypeVersion] The version of the Amazon product type to retrieve. Defaults to \&quot;LATEST\&quot;,. Prerelease versions of product type definitions may be retrieved with \&quot;RELEASE_CANDIDATE\&quot;. If no prerelease version is currently available, the \&quot;LATEST\&quot; live version will be provided. (default to &#39;LATEST&#39;)
       * @param {String} [opts.requirements] The name of the requirements set to retrieve requirements for. (default to &#39;LISTING&#39;)
       * @param {String} [opts.requirementsEnforced] Identifies if the required attributes for a requirements set are enforced by the product type definition schema. Non-enforced requirements enable structural validation of individual attributes without all the required attributes being present (such as for partial updates). (default to &#39;ENFORCED&#39;)
       * @param {String} [opts.locale] Locale for retrieving display labels and other presentation details. Defaults to the default language of the first marketplace in the request. (default to &#39;DEFAULT&#39;)
       * @return {Promise<ProductTypeDefinition>}
       */
    getDefinitionsProductType(productType: string, marketplaceIds: [string], opts?: {
        sellerId?: string;
        productTypeVersion?: string;
        requirements?: string;
        requirementsEnforced?: string;
        locale?: string;
    }): Promise<ProductTypeDefinition>;
    /**
       * Search for and return a list of Amazon product types that have definitions available.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {[String]} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
       * @param {Object} [opts] Optional parameters
       * @param {[String]} [opts.keywords] A comma-delimited list of keywords to search product types. **Note:** Cannot be used with &#x60;itemName&#x60;.
       * @param {String} [opts.itemName] The title of the ASIN to get the product type recommendation. **Note:** Cannot be used with &#x60;keywords&#x60;.
       * @param {String} [opts.locale] The locale for the display names in the response. Defaults to the primary locale of the marketplace.
       * @param {String} [opts.searchLocale] The locale used for the &#x60;keywords&#x60; and &#x60;itemName&#x60; parameters. Defaults to the primary locale of the marketplace.
       * @return {Promise<ProductTypeList>}
       */
    searchDefinitionsProductTypesWithHttpInfo(marketplaceIds: [string], opts?: {
        keywords?: [string];
        itemName?: string;
        locale?: string;
        searchLocale?: string;
    }): Promise<ProductTypeList>;
    /**
       * Search for and return a list of Amazon product types that have definitions available.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {[String]} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
       * @param {Object} [opts] Optional parameters
       * @param {[String]} [opts.keywords] A comma-delimited list of keywords to search product types. **Note:** Cannot be used with &#x60;itemName&#x60;.
       * @param {String} [opts.itemName] The title of the ASIN to get the product type recommendation. **Note:** Cannot be used with &#x60;keywords&#x60;.
       * @param {String} [opts.locale] The locale for the display names in the response. Defaults to the primary locale of the marketplace.
       * @param {String} [opts.searchLocale] The locale used for the &#x60;keywords&#x60; and &#x60;itemName&#x60; parameters. Defaults to the primary locale of the marketplace.
       * @return {Promise<ProductTypeList>}
       */
    searchDefinitionsProductTypes(marketplaceIds: [string], opts?: {
        keywords?: [string];
        itemName?: string;
        locale?: string;
        searchLocale?: string;
    }): Promise<ProductTypeList>;
    #private;
}
import { ProductTypeDefinition } from '../model/ProductTypeDefinition.js';
import { ProductTypeList } from '../model/ProductTypeList.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=DefinitionsApi.d.ts.map