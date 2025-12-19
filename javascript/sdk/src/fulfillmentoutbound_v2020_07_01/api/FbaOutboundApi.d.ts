/**
* FbaOutbound service.
* @module fulfillmentoutbound_v2020_07_01/api/FbaOutboundApi
* @version 2020-07-01
*/
export class FbaOutboundApi {
    /**
      * Constructs a new FbaOutboundApi.
      * @alias module:fulfillmentoutbound_v2020_07_01/api/FbaOutboundApi
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
       * Requests that Amazon stop attempting to fulfill the fulfillment order indicated by the specified order identifier.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} sellerFulfillmentOrderId The identifier assigned to the item by the seller when the fulfillment order was created.
       * @return {Promise<CancelFulfillmentOrderResponse>}
       */
    cancelFulfillmentOrderWithHttpInfo(sellerFulfillmentOrderId: string): Promise<CancelFulfillmentOrderResponse>;
    /**
       * Requests that Amazon stop attempting to fulfill the fulfillment order indicated by the specified order identifier.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} sellerFulfillmentOrderId The identifier assigned to the item by the seller when the fulfillment order was created.
       * @return {Promise<CancelFulfillmentOrderResponse>}
       */
    cancelFulfillmentOrder(sellerFulfillmentOrderId: string): Promise<CancelFulfillmentOrderResponse>;
    /**
       * Requests that Amazon ship items from the seller&#39;s inventory in Amazon&#39;s fulfillment network to a destination address.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api)
       * @param {CreateFulfillmentOrderRequest} body CreateFulfillmentOrderRequest parameter
       * @return {Promise<CreateFulfillmentOrderResponse>}
       */
    createFulfillmentOrderWithHttpInfo(body: CreateFulfillmentOrderRequest): Promise<CreateFulfillmentOrderResponse>;
    /**
       * Requests that Amazon ship items from the seller&#39;s inventory in Amazon&#39;s fulfillment network to a destination address.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api)
       * @param {CreateFulfillmentOrderRequest} body CreateFulfillmentOrderRequest parameter
       * @return {Promise<CreateFulfillmentOrderResponse>}
       */
    createFulfillmentOrder(body: CreateFulfillmentOrderRequest): Promise<CreateFulfillmentOrderResponse>;
    /**
       * Creates a fulfillment return.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} sellerFulfillmentOrderId An identifier the seller assigns to the fulfillment order at the time it was created. The seller uses their own records to find the correct &#x60;sellerFulfillmentOrderId&#x60; value based on the buyer&#39;s request to return items.
       * @param {CreateFulfillmentReturnRequest} body The request body of the &#x60;createFulfillmentReturn&#x60; operation.
       * @return {Promise<CreateFulfillmentReturnResponse>}
       */
    createFulfillmentReturnWithHttpInfo(sellerFulfillmentOrderId: string, body: CreateFulfillmentReturnRequest): Promise<CreateFulfillmentReturnResponse>;
    /**
       * Creates a fulfillment return.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} sellerFulfillmentOrderId An identifier the seller assigns to the fulfillment order at the time it was created. The seller uses their own records to find the correct &#x60;sellerFulfillmentOrderId&#x60; value based on the buyer&#39;s request to return items.
       * @param {CreateFulfillmentReturnRequest} body The request body of the &#x60;createFulfillmentReturn&#x60; operation.
       * @return {Promise<CreateFulfillmentReturnResponse>}
       */
    createFulfillmentReturn(sellerFulfillmentOrderId: string, body: CreateFulfillmentReturnRequest): Promise<CreateFulfillmentReturnResponse>;
    /**
       * Returns delivery options that include an estimated delivery date and offer expiration, based on criteria that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {GetDeliveryOffersRequest} body GetDeliveryOffersRequest parameter
       * @return {Promise<GetDeliveryOffersResponse>}
       */
    deliveryOffersWithHttpInfo(body: GetDeliveryOffersRequest): Promise<GetDeliveryOffersResponse>;
    /**
       * Returns delivery options that include an estimated delivery date and offer expiration, based on criteria that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {GetDeliveryOffersRequest} body GetDeliveryOffersRequest parameter
       * @return {Promise<GetDeliveryOffersResponse>}
       */
    deliveryOffers(body: GetDeliveryOffersRequest): Promise<GetDeliveryOffersResponse>;
    /**
       * Returns a list of inventory items that are eligible for the fulfillment feature you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api)..
       * @param {String} marketplaceId The marketplace for which to return a list of the inventory that is eligible for the specified feature.
       * @param {String} featureName The name of the feature for which to return a list of eligible inventory.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.nextToken] A string token returned in the response to your previous request that is used to return the next response page. A value of &#x60;null&#x60; will return the first page.
       * @param {Date} [opts.queryStartDate] A date that you can use to select inventory that has been updated since a specified date. An update is defined as any change in feature-enabled inventory availability. The date must be in the format &#x60;yyyy-MM-ddTHH:mm:ss.sssZ&#x60;
       * @return {Promise<GetFeatureInventoryResponse>}
       */
    getFeatureInventoryWithHttpInfo(marketplaceId: string, featureName: string, opts?: {
        nextToken?: string;
        queryStartDate?: Date;
    }): Promise<GetFeatureInventoryResponse>;
    /**
       * Returns a list of inventory items that are eligible for the fulfillment feature you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api)..
       * @param {String} marketplaceId The marketplace for which to return a list of the inventory that is eligible for the specified feature.
       * @param {String} featureName The name of the feature for which to return a list of eligible inventory.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.nextToken] A string token returned in the response to your previous request that is used to return the next response page. A value of &#x60;null&#x60; will return the first page.
       * @param {Date} [opts.queryStartDate] A date that you can use to select inventory that has been updated since a specified date. An update is defined as any change in feature-enabled inventory availability. The date must be in the format &#x60;yyyy-MM-ddTHH:mm:ss.sssZ&#x60;
       * @return {Promise<GetFeatureInventoryResponse>}
       */
    getFeatureInventory(marketplaceId: string, featureName: string, opts?: {
        nextToken?: string;
        queryStartDate?: Date;
    }): Promise<GetFeatureInventoryResponse>;
    /**
       * Returns the number of items with the &#x60;sellerSku&#x60; you specify that can have orders fulfilled using the specified feature. Note that if the &#x60;sellerSku&#x60; isn&#39;t eligible, the response will contain an empty &#x60;skuInfo&#x60; object. The parameters for this operation may contain special characters that require URL encoding. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} marketplaceId The marketplace for which to return the count.
       * @param {String} featureName The name of the feature.
       * @param {String} sellerSku Used to identify an item in the given marketplace. &#x60;sellerSku&#x60; is qualified by the seller&#39;s &#x60;sellerId&#x60;, which is included with every operation that you submit.
       * @return {Promise<GetFeatureSkuResponse>}
       */
    getFeatureSKUWithHttpInfo(marketplaceId: string, featureName: string, sellerSku: string): Promise<GetFeatureSkuResponse>;
    /**
       * Returns the number of items with the &#x60;sellerSku&#x60; you specify that can have orders fulfilled using the specified feature. Note that if the &#x60;sellerSku&#x60; isn&#39;t eligible, the response will contain an empty &#x60;skuInfo&#x60; object. The parameters for this operation may contain special characters that require URL encoding. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} marketplaceId The marketplace for which to return the count.
       * @param {String} featureName The name of the feature.
       * @param {String} sellerSku Used to identify an item in the given marketplace. &#x60;sellerSku&#x60; is qualified by the seller&#39;s &#x60;sellerId&#x60;, which is included with every operation that you submit.
       * @return {Promise<GetFeatureSkuResponse>}
       */
    getFeatureSKU(marketplaceId: string, featureName: string, sellerSku: string): Promise<GetFeatureSkuResponse>;
    /**
       * Returns a list of features available for Multi-Channel Fulfillment orders in the marketplace you specify, and whether the seller for which you made the call is enrolled for each feature.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} marketplaceId The marketplace for which to return the list of features.
       * @return {Promise<GetFeaturesResponse>}
       */
    getFeaturesWithHttpInfo(marketplaceId: string): Promise<GetFeaturesResponse>;
    /**
       * Returns a list of features available for Multi-Channel Fulfillment orders in the marketplace you specify, and whether the seller for which you made the call is enrolled for each feature.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} marketplaceId The marketplace for which to return the list of features.
       * @return {Promise<GetFeaturesResponse>}
       */
    getFeatures(marketplaceId: string): Promise<GetFeaturesResponse>;
    /**
       * Returns the fulfillment order indicated by the specified order identifier.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} sellerFulfillmentOrderId The identifier assigned to the item by the seller when the fulfillment order was created.
       * @return {Promise<GetFulfillmentOrderResponse>}
       */
    getFulfillmentOrderWithHttpInfo(sellerFulfillmentOrderId: string): Promise<GetFulfillmentOrderResponse>;
    /**
       * Returns the fulfillment order indicated by the specified order identifier.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} sellerFulfillmentOrderId The identifier assigned to the item by the seller when the fulfillment order was created.
       * @return {Promise<GetFulfillmentOrderResponse>}
       */
    getFulfillmentOrder(sellerFulfillmentOrderId: string): Promise<GetFulfillmentOrderResponse>;
    /**
       * Returns a list of fulfillment order previews based on shipping criteria that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {GetFulfillmentPreviewRequest} body GetFulfillmentPreviewRequest parameter
       * @return {Promise<GetFulfillmentPreviewResponse>}
       */
    getFulfillmentPreviewWithHttpInfo(body: GetFulfillmentPreviewRequest): Promise<GetFulfillmentPreviewResponse>;
    /**
       * Returns a list of fulfillment order previews based on shipping criteria that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {GetFulfillmentPreviewRequest} body GetFulfillmentPreviewRequest parameter
       * @return {Promise<GetFulfillmentPreviewResponse>}
       */
    getFulfillmentPreview(body: GetFulfillmentPreviewRequest): Promise<GetFulfillmentPreviewResponse>;
    /**
       * Returns delivery tracking information for a package in an outbound shipment for a Multi-Channel Fulfillment order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Number} packageNumber The unencrypted package identifier. You can obtain this value from the &#x60;getFulfillmentOrder&#x60; operation.
       * @return {Promise<GetPackageTrackingDetailsResponse>}
       */
    getPackageTrackingDetailsWithHttpInfo(packageNumber: number): Promise<GetPackageTrackingDetailsResponse>;
    /**
       * Returns delivery tracking information for a package in an outbound shipment for a Multi-Channel Fulfillment order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Number} packageNumber The unencrypted package identifier. You can obtain this value from the &#x60;getFulfillmentOrder&#x60; operation.
       * @return {Promise<GetPackageTrackingDetailsResponse>}
       */
    getPackageTrackingDetails(packageNumber: number): Promise<GetPackageTrackingDetailsResponse>;
    /**
       * Returns a list of fulfillment orders fulfilled after (or at) a specified date-time, or indicated by the &#x60;nextToken&#x60; parameter.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api)
       * @param {Object} [opts] Optional parameters
       * @param {Date} [opts.queryStartDate] A date used to select fulfillment orders that were last updated after (or at) a specified time. An update is defined as any change in fulfillment order status, including the creation of a new fulfillment order.
       * @param {String} [opts.nextToken] A string token returned in the response to your previous request.
       * @return {Promise<ListAllFulfillmentOrdersResponse>}
       */
    listAllFulfillmentOrdersWithHttpInfo(opts?: {
        queryStartDate?: Date;
        nextToken?: string;
    }): Promise<ListAllFulfillmentOrdersResponse>;
    /**
       * Returns a list of fulfillment orders fulfilled after (or at) a specified date-time, or indicated by the &#x60;nextToken&#x60; parameter.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api)
       * @param {Object} [opts] Optional parameters
       * @param {Date} [opts.queryStartDate] A date used to select fulfillment orders that were last updated after (or at) a specified time. An update is defined as any change in fulfillment order status, including the creation of a new fulfillment order.
       * @param {String} [opts.nextToken] A string token returned in the response to your previous request.
       * @return {Promise<ListAllFulfillmentOrdersResponse>}
       */
    listAllFulfillmentOrders(opts?: {
        queryStartDate?: Date;
        nextToken?: string;
    }): Promise<ListAllFulfillmentOrdersResponse>;
    /**
       * Returns a list of return reason codes for a seller SKU in a given marketplace. The parameters for this operation may contain special characters that require URL encoding. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} sellerSku The seller SKU for which return reason codes are required.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.marketplaceId] The marketplace for which the seller wants return reason codes.
       * @param {String} [opts.sellerFulfillmentOrderId] The identifier assigned to the item by the seller when the fulfillment order was created. The service uses this value to determine the marketplace for which the seller wants return reason codes.
       * @param {String} [opts.language] The language that the &#x60;TranslatedDescription&#x60; property of the &#x60;ReasonCodeDetails&#x60; response object should be translated into.
       * @return {Promise<ListReturnReasonCodesResponse>}
       */
    listReturnReasonCodesWithHttpInfo(sellerSku: string, opts?: {
        marketplaceId?: string;
        sellerFulfillmentOrderId?: string;
        language?: string;
    }): Promise<ListReturnReasonCodesResponse>;
    /**
       * Returns a list of return reason codes for a seller SKU in a given marketplace. The parameters for this operation may contain special characters that require URL encoding. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} sellerSku The seller SKU for which return reason codes are required.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.marketplaceId] The marketplace for which the seller wants return reason codes.
       * @param {String} [opts.sellerFulfillmentOrderId] The identifier assigned to the item by the seller when the fulfillment order was created. The service uses this value to determine the marketplace for which the seller wants return reason codes.
       * @param {String} [opts.language] The language that the &#x60;TranslatedDescription&#x60; property of the &#x60;ReasonCodeDetails&#x60; response object should be translated into.
       * @return {Promise<ListReturnReasonCodesResponse>}
       */
    listReturnReasonCodes(sellerSku: string, opts?: {
        marketplaceId?: string;
        sellerFulfillmentOrderId?: string;
        language?: string;
    }): Promise<ListReturnReasonCodesResponse>;
    /**
       * Requests that Amazon update the status of an order in the sandbox testing environment. This is a sandbox-only operation and must be directed to a sandbox endpoint. Refer to [Fulfillment Outbound Dynamic Sandbox Guide](https://developer-docs.amazon.com/sp-api/docs/fulfillment-outbound-dynamic-sandbox-guide) and [Selling Partner API sandbox](https://developer-docs.amazon.com/sp-api/docs/the-selling-partner-api-sandbox) for more information.
       * @param {String} sellerFulfillmentOrderId The identifier assigned to the item by the seller when the fulfillment order was created.
       * @param {SubmitFulfillmentOrderStatusUpdateRequest} body The identifier assigned to the item by the seller when the fulfillment order was created.
       * @return {Promise<SubmitFulfillmentOrderStatusUpdateResponse>}
       */
    submitFulfillmentOrderStatusUpdateWithHttpInfo(sellerFulfillmentOrderId: string, body: SubmitFulfillmentOrderStatusUpdateRequest): Promise<SubmitFulfillmentOrderStatusUpdateResponse>;
    /**
       * Requests that Amazon update the status of an order in the sandbox testing environment. This is a sandbox-only operation and must be directed to a sandbox endpoint. Refer to [Fulfillment Outbound Dynamic Sandbox Guide](https://developer-docs.amazon.com/sp-api/docs/fulfillment-outbound-dynamic-sandbox-guide) and [Selling Partner API sandbox](https://developer-docs.amazon.com/sp-api/docs/the-selling-partner-api-sandbox) for more information.
       * @param {String} sellerFulfillmentOrderId The identifier assigned to the item by the seller when the fulfillment order was created.
       * @param {SubmitFulfillmentOrderStatusUpdateRequest} body The identifier assigned to the item by the seller when the fulfillment order was created.
       * @return {Promise<SubmitFulfillmentOrderStatusUpdateResponse>}
       */
    submitFulfillmentOrderStatusUpdate(sellerFulfillmentOrderId: string, body: SubmitFulfillmentOrderStatusUpdateRequest): Promise<SubmitFulfillmentOrderStatusUpdateResponse>;
    /**
       * Updates and/or requests shipment for a fulfillment order with an order hold on it.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} sellerFulfillmentOrderId The identifier assigned to the item by the seller when the fulfillment order was created.
       * @param {UpdateFulfillmentOrderRequest} body The request body of the &#x60;updateFulfillmentOrder&#x60; operation.
       * @return {Promise<UpdateFulfillmentOrderResponse>}
       */
    updateFulfillmentOrderWithHttpInfo(sellerFulfillmentOrderId: string, body: UpdateFulfillmentOrderRequest): Promise<UpdateFulfillmentOrderResponse>;
    /**
       * Updates and/or requests shipment for a fulfillment order with an order hold on it.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} sellerFulfillmentOrderId The identifier assigned to the item by the seller when the fulfillment order was created.
       * @param {UpdateFulfillmentOrderRequest} body The request body of the &#x60;updateFulfillmentOrder&#x60; operation.
       * @return {Promise<UpdateFulfillmentOrderResponse>}
       */
    updateFulfillmentOrder(sellerFulfillmentOrderId: string, body: UpdateFulfillmentOrderRequest): Promise<UpdateFulfillmentOrderResponse>;
    #private;
}
import { CancelFulfillmentOrderResponse } from '../model/CancelFulfillmentOrderResponse.js';
import { CreateFulfillmentOrderRequest } from '../model/CreateFulfillmentOrderRequest.js';
import { CreateFulfillmentOrderResponse } from '../model/CreateFulfillmentOrderResponse.js';
import { CreateFulfillmentReturnRequest } from '../model/CreateFulfillmentReturnRequest.js';
import { CreateFulfillmentReturnResponse } from '../model/CreateFulfillmentReturnResponse.js';
import { GetDeliveryOffersRequest } from '../model/GetDeliveryOffersRequest.js';
import { GetDeliveryOffersResponse } from '../model/GetDeliveryOffersResponse.js';
import { GetFeatureInventoryResponse } from '../model/GetFeatureInventoryResponse.js';
import { GetFeatureSkuResponse } from '../model/GetFeatureSkuResponse.js';
import { GetFeaturesResponse } from '../model/GetFeaturesResponse.js';
import { GetFulfillmentOrderResponse } from '../model/GetFulfillmentOrderResponse.js';
import { GetFulfillmentPreviewRequest } from '../model/GetFulfillmentPreviewRequest.js';
import { GetFulfillmentPreviewResponse } from '../model/GetFulfillmentPreviewResponse.js';
import { GetPackageTrackingDetailsResponse } from '../model/GetPackageTrackingDetailsResponse.js';
import { ListAllFulfillmentOrdersResponse } from '../model/ListAllFulfillmentOrdersResponse.js';
import { ListReturnReasonCodesResponse } from '../model/ListReturnReasonCodesResponse.js';
import { SubmitFulfillmentOrderStatusUpdateRequest } from '../model/SubmitFulfillmentOrderStatusUpdateRequest.js';
import { SubmitFulfillmentOrderStatusUpdateResponse } from '../model/SubmitFulfillmentOrderStatusUpdateResponse.js';
import { UpdateFulfillmentOrderRequest } from '../model/UpdateFulfillmentOrderRequest.js';
import { UpdateFulfillmentOrderResponse } from '../model/UpdateFulfillmentOrderResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=FbaOutboundApi.d.ts.map