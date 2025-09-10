/**
* CustomerFeedback service.
* @module customerFeedback_2024_06_01/api/CustomerFeedbackApi
* @version 2024-06-01
*/
export class CustomerFeedbackApi {
    /**
      * Constructs a new CustomerFeedbackApi.
      * @alias module:customerFeedback_2024_06_01/api/CustomerFeedbackApi
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
       * Retrieve the topics that customers mention when they return items in a browse node.
       * @param {String} browseNodeId A browse node ID is a unique identifier for a browse node. A browse node is a named location in a browse tree that is used for navigation, product classification, and website content.
       * @param {String} marketplaceId The MarketplaceId is the globally unique identifier of a marketplace, you can refer to the marketplaceId here : https://developer-docs.amazon.com/sp-api/docs/marketplace-ids.
       * @return {Promise<BrowseNodeReturnTopicsResponse>}
       */
    getBrowseNodeReturnTopicsWithHttpInfo(browseNodeId: string, marketplaceId: string): Promise<BrowseNodeReturnTopicsResponse>;
    /**
       * Retrieve the topics that customers mention when they return items in a browse node.
       * @param {String} browseNodeId A browse node ID is a unique identifier for a browse node. A browse node is a named location in a browse tree that is used for navigation, product classification, and website content.
       * @param {String} marketplaceId The MarketplaceId is the globally unique identifier of a marketplace, you can refer to the marketplaceId here : https://developer-docs.amazon.com/sp-api/docs/marketplace-ids.
       * @return {Promise<BrowseNodeReturnTopicsResponse>}
       */
    getBrowseNodeReturnTopics(browseNodeId: string, marketplaceId: string): Promise<BrowseNodeReturnTopicsResponse>;
    /**
       * Retrieve the trends of topics that customers mention when they return items in a browse node.
       * @param {String} browseNodeId A browse node ID is a unique identifier of a browse node. A browse node is a named location in a browse tree that is used for navigation, product classification, and website content.
       * @param {String} marketplaceId The MarketplaceId is the globally unique identifier of a marketplace, you can refer to the marketplaceId here : https://developer-docs.amazon.com/sp-api/docs/marketplace-ids.
       * @return {Promise<BrowseNodeReturnTrendsResponse>}
       */
    getBrowseNodeReturnTrendsWithHttpInfo(browseNodeId: string, marketplaceId: string): Promise<BrowseNodeReturnTrendsResponse>;
    /**
       * Retrieve the trends of topics that customers mention when they return items in a browse node.
       * @param {String} browseNodeId A browse node ID is a unique identifier of a browse node. A browse node is a named location in a browse tree that is used for navigation, product classification, and website content.
       * @param {String} marketplaceId The MarketplaceId is the globally unique identifier of a marketplace, you can refer to the marketplaceId here : https://developer-docs.amazon.com/sp-api/docs/marketplace-ids.
       * @return {Promise<BrowseNodeReturnTrendsResponse>}
       */
    getBrowseNodeReturnTrends(browseNodeId: string, marketplaceId: string): Promise<BrowseNodeReturnTrendsResponse>;
    /**
       * Retrieve a browse node&#39;s ten most positive and ten most negative review topics.
       * @param {String} browseNodeId The ID of a browse node. A browse node is a named location in a browse tree that is used for navigation, product classification, and website content.
       * @param {String} marketplaceId The MarketplaceId is the globally unique identifier of a marketplace, you can refer to the marketplaceId here : https://developer-docs.amazon.com/sp-api/docs/marketplace-ids.
       * @param {String} sortBy The metric by which to sort the data in the response.
       * @return {Promise<BrowseNodeReviewTopicsResponse>}
       */
    getBrowseNodeReviewTopicsWithHttpInfo(browseNodeId: string, marketplaceId: string, sortBy: string): Promise<BrowseNodeReviewTopicsResponse>;
    /**
       * Retrieve a browse node&#39;s ten most positive and ten most negative review topics.
       * @param {String} browseNodeId The ID of a browse node. A browse node is a named location in a browse tree that is used for navigation, product classification, and website content.
       * @param {String} marketplaceId The MarketplaceId is the globally unique identifier of a marketplace, you can refer to the marketplaceId here : https://developer-docs.amazon.com/sp-api/docs/marketplace-ids.
       * @param {String} sortBy The metric by which to sort the data in the response.
       * @return {Promise<BrowseNodeReviewTopicsResponse>}
       */
    getBrowseNodeReviewTopics(browseNodeId: string, marketplaceId: string, sortBy: string): Promise<BrowseNodeReviewTopicsResponse>;
    /**
       * Retrieve the positive and negative review trends of items in a browse node for the past six months.
       * @param {String} browseNodeId A browse node ID is a unique identifier of a browse node. A browse node is a named location in a browse tree that is used for navigation, product classification, and website content.
       * @param {String} marketplaceId The marketplace ID is the globally unique identifier of a marketplace. For more information, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @return {Promise<BrowseNodeReviewTrendsResponse>}
       */
    getBrowseNodeReviewTrendsWithHttpInfo(browseNodeId: string, marketplaceId: string): Promise<BrowseNodeReviewTrendsResponse>;
    /**
       * Retrieve the positive and negative review trends of items in a browse node for the past six months.
       * @param {String} browseNodeId A browse node ID is a unique identifier of a browse node. A browse node is a named location in a browse tree that is used for navigation, product classification, and website content.
       * @param {String} marketplaceId The marketplace ID is the globally unique identifier of a marketplace. For more information, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @return {Promise<BrowseNodeReviewTrendsResponse>}
       */
    getBrowseNodeReviewTrends(browseNodeId: string, marketplaceId: string): Promise<BrowseNodeReviewTrendsResponse>;
    /**
       * This API returns the associated browse node of the requested ASIN. A browse node is a location in a browse tree that is used for navigation, product classification, and website content on the Amazon retail website.
       * @param {String} asin The Amazon Standard Identification Number (ASIN) is the unique identifier of a product within a marketplace.
       * @param {String} marketplaceId The MarketplaceId is the globally unique identifier of a marketplace, you can refer to the marketplaceId here : https://developer-docs.amazon.com/sp-api/docs/marketplace-ids.
       * @return {Promise<BrowseNodeResponse>}
       */
    getItemBrowseNodeWithHttpInfo(asin: string, marketplaceId: string): Promise<BrowseNodeResponse>;
    /**
       * This API returns the associated browse node of the requested ASIN. A browse node is a location in a browse tree that is used for navigation, product classification, and website content on the Amazon retail website.
       * @param {String} asin The Amazon Standard Identification Number (ASIN) is the unique identifier of a product within a marketplace.
       * @param {String} marketplaceId The MarketplaceId is the globally unique identifier of a marketplace, you can refer to the marketplaceId here : https://developer-docs.amazon.com/sp-api/docs/marketplace-ids.
       * @return {Promise<BrowseNodeResponse>}
       */
    getItemBrowseNode(asin: string, marketplaceId: string): Promise<BrowseNodeResponse>;
    /**
       * Retrieve an item&#39;s ten most positive and ten most negative review topics.
       * @param {String} asin The Amazon Standard Identification Number (ASIN) is the unique identifier of a product within a marketplace. The value must be a child ASIN.
       * @param {String} marketplaceId The MarketplaceId is the globally unique identifier of a marketplace, you can refer to the marketplaceId here : https://developer-docs.amazon.com/sp-api/docs/marketplace-ids.
       * @param {String} sortBy The metric by which to sort data in the response.
       * @return {Promise<ItemReviewTopicsResponse>}
       */
    getItemReviewTopicsWithHttpInfo(asin: string, marketplaceId: string, sortBy: string): Promise<ItemReviewTopicsResponse>;
    /**
       * Retrieve an item&#39;s ten most positive and ten most negative review topics.
       * @param {String} asin The Amazon Standard Identification Number (ASIN) is the unique identifier of a product within a marketplace. The value must be a child ASIN.
       * @param {String} marketplaceId The MarketplaceId is the globally unique identifier of a marketplace, you can refer to the marketplaceId here : https://developer-docs.amazon.com/sp-api/docs/marketplace-ids.
       * @param {String} sortBy The metric by which to sort data in the response.
       * @return {Promise<ItemReviewTopicsResponse>}
       */
    getItemReviewTopics(asin: string, marketplaceId: string, sortBy: string): Promise<ItemReviewTopicsResponse>;
    /**
       * Retrieve an item&#39;s positive and negative review trends for the past six months.
       * @param {String} asin The Amazon Standard Identification Number (ASIN) is the unique identifier of a product within a marketplace. This API takes child ASIN as an input.
       * @param {String} marketplaceId The MarketplaceId is the globally unique identifier of a marketplace, you can refer to the marketplaceId here : https://developer-docs.amazon.com/sp-api/docs/marketplace-ids.
       * @return {Promise<ItemReviewTrendsResponse>}
       */
    getItemReviewTrendsWithHttpInfo(asin: string, marketplaceId: string): Promise<ItemReviewTrendsResponse>;
    /**
       * Retrieve an item&#39;s positive and negative review trends for the past six months.
       * @param {String} asin The Amazon Standard Identification Number (ASIN) is the unique identifier of a product within a marketplace. This API takes child ASIN as an input.
       * @param {String} marketplaceId The MarketplaceId is the globally unique identifier of a marketplace, you can refer to the marketplaceId here : https://developer-docs.amazon.com/sp-api/docs/marketplace-ids.
       * @return {Promise<ItemReviewTrendsResponse>}
       */
    getItemReviewTrends(asin: string, marketplaceId: string): Promise<ItemReviewTrendsResponse>;
    #private;
}
import { BrowseNodeReturnTopicsResponse } from '../model/BrowseNodeReturnTopicsResponse.js';
import { BrowseNodeReturnTrendsResponse } from '../model/BrowseNodeReturnTrendsResponse.js';
import { BrowseNodeReviewTopicsResponse } from '../model/BrowseNodeReviewTopicsResponse.js';
import { BrowseNodeReviewTrendsResponse } from '../model/BrowseNodeReviewTrendsResponse.js';
import { BrowseNodeResponse } from '../model/BrowseNodeResponse.js';
import { ItemReviewTopicsResponse } from '../model/ItemReviewTopicsResponse.js';
import { ItemReviewTrendsResponse } from '../model/ItemReviewTrendsResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=CustomerFeedbackApi.d.ts.map