/**
* ProductPricing service.
* @module pricing_v0/api/ProductPricingApi
* @version v0
*/
export class ProductPricingApi {
    /**
      * Constructs a new ProductPricingApi.
      * @alias module:pricing_v0/api/ProductPricingApi
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
       * Returns competitive pricing information for a seller&#39;s offer listings based on seller SKU or ASIN.  **Note:** The parameters associated with this operation may contain special characters that require URL encoding to call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} marketplaceId A marketplace identifier. Specifies the marketplace for which prices are returned.
       * @param {String} itemType Indicates whether ASIN values or seller SKU values are used to identify items. If you specify Asin, the information in the response will be dependent on the list of Asins you provide in the Asins parameter. If you specify Sku, the information in the response will be dependent on the list of Skus you provide in the Skus parameter. Possible values: Asin, Sku.
       * @param {Object} [opts] Optional parameters
       * @param {[String]} [opts.asins] A list of up to twenty Amazon Standard Identification Number (ASIN) values used to identify items in the given marketplace.
       * @param {[String]} [opts.skus] A list of up to twenty seller SKU values used to identify items in the given marketplace.
       * @param {String} [opts.customerType] Indicates whether to request pricing information from the point of view of Consumer or Business buyers. Default is Consumer.
       * @return {Promise<GetPricingResponse>}
       */
    getCompetitivePricingWithHttpInfo(marketplaceId: string, itemType: string, opts?: {
        asins?: [string];
        skus?: [string];
        customerType?: string;
    }): Promise<GetPricingResponse>;
    /**
       * Returns competitive pricing information for a seller&#39;s offer listings based on seller SKU or ASIN.  **Note:** The parameters associated with this operation may contain special characters that require URL encoding to call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} marketplaceId A marketplace identifier. Specifies the marketplace for which prices are returned.
       * @param {String} itemType Indicates whether ASIN values or seller SKU values are used to identify items. If you specify Asin, the information in the response will be dependent on the list of Asins you provide in the Asins parameter. If you specify Sku, the information in the response will be dependent on the list of Skus you provide in the Skus parameter. Possible values: Asin, Sku.
       * @param {Object} [opts] Optional parameters
       * @param {[String]} [opts.asins] A list of up to twenty Amazon Standard Identification Number (ASIN) values used to identify items in the given marketplace.
       * @param {[String]} [opts.skus] A list of up to twenty seller SKU values used to identify items in the given marketplace.
       * @param {String} [opts.customerType] Indicates whether to request pricing information from the point of view of Consumer or Business buyers. Default is Consumer.
       * @return {Promise<GetPricingResponse>}
       */
    getCompetitivePricing(marketplaceId: string, itemType: string, opts?: {
        asins?: [string];
        skus?: [string];
        customerType?: string;
    }): Promise<GetPricingResponse>;
    /**
       * Returns the lowest priced offers for a single item based on ASIN.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} marketplaceId A marketplace identifier. Specifies the marketplace for which prices are returned.
       * @param {String} itemCondition Filters the offer listings to be considered based on item condition. Possible values: New, Used, Collectible, Refurbished, Club.
       * @param {String} asin The Amazon Standard Identification Number (ASIN) of the item.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.customerType] Indicates whether to request Consumer or Business offers. Default is Consumer.
       * @return {Promise<GetOffersResponse>}
       */
    getItemOffersWithHttpInfo(marketplaceId: string, itemCondition: string, asin: string, opts?: {
        customerType?: string;
    }): Promise<GetOffersResponse>;
    /**
       * Returns the lowest priced offers for a single item based on ASIN.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} marketplaceId A marketplace identifier. Specifies the marketplace for which prices are returned.
       * @param {String} itemCondition Filters the offer listings to be considered based on item condition. Possible values: New, Used, Collectible, Refurbished, Club.
       * @param {String} asin The Amazon Standard Identification Number (ASIN) of the item.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.customerType] Indicates whether to request Consumer or Business offers. Default is Consumer.
       * @return {Promise<GetOffersResponse>}
       */
    getItemOffers(marketplaceId: string, itemCondition: string, asin: string, opts?: {
        customerType?: string;
    }): Promise<GetOffersResponse>;
    /**
       * Returns the lowest priced offers for a batch of items based on ASIN.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {GetItemOffersBatchRequest} getItemOffersBatchRequestBody The request associated with the &#x60;getItemOffersBatch&#x60; API call.
       * @return {Promise<GetItemOffersBatchResponse>}
       */
    getItemOffersBatchWithHttpInfo(getItemOffersBatchRequestBody: GetItemOffersBatchRequest): Promise<GetItemOffersBatchResponse>;
    /**
       * Returns the lowest priced offers for a batch of items based on ASIN.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {GetItemOffersBatchRequest} getItemOffersBatchRequestBody The request associated with the &#x60;getItemOffersBatch&#x60; API call.
       * @return {Promise<GetItemOffersBatchResponse>}
       */
    getItemOffersBatch(getItemOffersBatchRequestBody: GetItemOffersBatchRequest): Promise<GetItemOffersBatchResponse>;
    /**
       * Returns the lowest priced offers for a single SKU listing.  **Note:** The parameters associated with this operation may contain special characters that require URL encoding to call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} marketplaceId A marketplace identifier. Specifies the marketplace for which prices are returned.
       * @param {String} itemCondition Filters the offer listings based on item condition. Possible values: New, Used, Collectible, Refurbished, Club.
       * @param {String} sellerSKU Identifies an item in the given marketplace. SellerSKU is qualified by the seller&#39;s SellerId, which is included with every operation that you submit.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.customerType] Indicates whether to request Consumer or Business offers. Default is Consumer.
       * @return {Promise<GetOffersResponse>}
       */
    getListingOffersWithHttpInfo(marketplaceId: string, itemCondition: string, sellerSKU: string, opts?: {
        customerType?: string;
    }): Promise<GetOffersResponse>;
    /**
       * Returns the lowest priced offers for a single SKU listing.  **Note:** The parameters associated with this operation may contain special characters that require URL encoding to call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} marketplaceId A marketplace identifier. Specifies the marketplace for which prices are returned.
       * @param {String} itemCondition Filters the offer listings based on item condition. Possible values: New, Used, Collectible, Refurbished, Club.
       * @param {String} sellerSKU Identifies an item in the given marketplace. SellerSKU is qualified by the seller&#39;s SellerId, which is included with every operation that you submit.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.customerType] Indicates whether to request Consumer or Business offers. Default is Consumer.
       * @return {Promise<GetOffersResponse>}
       */
    getListingOffers(marketplaceId: string, itemCondition: string, sellerSKU: string, opts?: {
        customerType?: string;
    }): Promise<GetOffersResponse>;
    /**
       * Returns the lowest priced offers for a batch of listings by SKU.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {GetListingOffersBatchRequest} getListingOffersBatchRequestBody The request associated with the &#x60;getListingOffersBatch&#x60; API call.
       * @return {Promise<GetListingOffersBatchResponse>}
       */
    getListingOffersBatchWithHttpInfo(getListingOffersBatchRequestBody: GetListingOffersBatchRequest): Promise<GetListingOffersBatchResponse>;
    /**
       * Returns the lowest priced offers for a batch of listings by SKU.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {GetListingOffersBatchRequest} getListingOffersBatchRequestBody The request associated with the &#x60;getListingOffersBatch&#x60; API call.
       * @return {Promise<GetListingOffersBatchResponse>}
       */
    getListingOffersBatch(getListingOffersBatchRequestBody: GetListingOffersBatchRequest): Promise<GetListingOffersBatchResponse>;
    /**
       * Returns pricing information for a seller&#39;s offer listings based on seller SKU or ASIN.  **Note:** The parameters associated with this operation may contain special characters that require URL encoding to call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} marketplaceId A marketplace identifier. Specifies the marketplace for which prices are returned.
       * @param {String} itemType Indicates whether ASIN values or seller SKU values are used to identify items. If you specify Asin, the information in the response will be dependent on the list of Asins you provide in the Asins parameter. If you specify Sku, the information in the response will be dependent on the list of Skus you provide in the Skus parameter.
       * @param {Object} [opts] Optional parameters
       * @param {[String]} [opts.asins] A list of up to twenty Amazon Standard Identification Number (ASIN) values used to identify items in the given marketplace.
       * @param {[String]} [opts.skus] A list of up to twenty seller SKU values used to identify items in the given marketplace.
       * @param {String} [opts.itemCondition] Filters the offer listings based on item condition. Possible values: New, Used, Collectible, Refurbished, Club.
       * @param {String} [opts.offerType] Indicates whether to request pricing information for the seller&#39;s B2C or B2B offers. Default is B2C.
       * @return {Promise<GetPricingResponse>}
       */
    getPricingWithHttpInfo(marketplaceId: string, itemType: string, opts?: {
        asins?: [string];
        skus?: [string];
        itemCondition?: string;
        offerType?: string;
    }): Promise<GetPricingResponse>;
    /**
       * Returns pricing information for a seller&#39;s offer listings based on seller SKU or ASIN.  **Note:** The parameters associated with this operation may contain special characters that require URL encoding to call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} marketplaceId A marketplace identifier. Specifies the marketplace for which prices are returned.
       * @param {String} itemType Indicates whether ASIN values or seller SKU values are used to identify items. If you specify Asin, the information in the response will be dependent on the list of Asins you provide in the Asins parameter. If you specify Sku, the information in the response will be dependent on the list of Skus you provide in the Skus parameter.
       * @param {Object} [opts] Optional parameters
       * @param {[String]} [opts.asins] A list of up to twenty Amazon Standard Identification Number (ASIN) values used to identify items in the given marketplace.
       * @param {[String]} [opts.skus] A list of up to twenty seller SKU values used to identify items in the given marketplace.
       * @param {String} [opts.itemCondition] Filters the offer listings based on item condition. Possible values: New, Used, Collectible, Refurbished, Club.
       * @param {String} [opts.offerType] Indicates whether to request pricing information for the seller&#39;s B2C or B2B offers. Default is B2C.
       * @return {Promise<GetPricingResponse>}
       */
    getPricing(marketplaceId: string, itemType: string, opts?: {
        asins?: [string];
        skus?: [string];
        itemCondition?: string;
        offerType?: string;
    }): Promise<GetPricingResponse>;
    #private;
}
import { GetPricingResponse } from '../model/GetPricingResponse.js';
import { GetOffersResponse } from '../model/GetOffersResponse.js';
import { GetItemOffersBatchRequest } from '../model/GetItemOffersBatchRequest.js';
import { GetItemOffersBatchResponse } from '../model/GetItemOffersBatchResponse.js';
import { GetListingOffersBatchRequest } from '../model/GetListingOffersBatchRequest.js';
import { GetListingOffersBatchResponse } from '../model/GetListingOffersBatchResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=ProductPricingApi.d.ts.map