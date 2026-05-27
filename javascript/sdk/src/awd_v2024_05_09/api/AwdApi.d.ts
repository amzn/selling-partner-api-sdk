/**
* Awd service.
* @module awd_v2024_05_09/api/AwdApi
* @version 2024-05-09
*/
export class AwdApi {
    /**
      * Constructs a new AwdApi.
      * @alias module:awd_v2024_05_09/api/AwdApi
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
       * Cancels an AWD Inbound order and its associated shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} orderId The ID of the inbound order you want to cancel.
       * @return {Promise<void>}
       */
    cancelInboundWithHttpInfo(orderId: string): Promise<void>;
    /**
       * Cancels an AWD Inbound order and its associated shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} orderId The ID of the inbound order you want to cancel.
       * @return {Promise<void>}
       */
    cancelInbound(orderId: string): Promise<void>;
    /**
       * Determines if the packages you specify are eligible for an AWD inbound order and contains error details for ineligible packages.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {InboundPackages} body Represents the packages you want to inbound.
       * @return {Promise<InboundEligibility>}
       */
    checkInboundEligibilityWithHttpInfo(body: InboundPackages): Promise<InboundEligibility>;
    /**
       * Determines if the packages you specify are eligible for an AWD inbound order and contains error details for ineligible packages.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {InboundPackages} body Represents the packages you want to inbound.
       * @return {Promise<InboundEligibility>}
       */
    checkInboundEligibility(body: InboundPackages): Promise<InboundEligibility>;
    /**
       * Confirms an AWD inbound order in &#x60;DRAFT&#x60; status.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} orderId The ID of the inbound order that you want to confirm.
       * @return {Promise<void>}
       */
    confirmInboundWithHttpInfo(orderId: string): Promise<void>;
    /**
       * Confirms an AWD inbound order in &#x60;DRAFT&#x60; status.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} orderId The ID of the inbound order that you want to confirm.
       * @return {Promise<void>}
       */
    confirmInbound(orderId: string): Promise<void>;
    /**
       * Confirms an AWD outbound order for a set of shipments that contain items that must be outbound to a destination node. You can confirm the order only if it&#39;s in an&#x60;ELIGIBLE&#x60; state.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} orderId ID for the outbound order you want to confirm.
       * @return {Promise<void>}
       */
    confirmOutboundWithHttpInfo(orderId: string): Promise<void>;
    /**
       * Confirms an AWD outbound order for a set of shipments that contain items that must be outbound to a destination node. You can confirm the order only if it&#39;s in an&#x60;ELIGIBLE&#x60; state.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} orderId ID for the outbound order you want to confirm.
       * @return {Promise<void>}
       */
    confirmOutbound(orderId: string): Promise<void>;
    /**
       * Confirms an AWD replenishment order in ELIGIBLE state with a set of shipments containing items that are needed to be replenished to an FBA node. Order can only be confirmed in ELIGIBLE state.
       * @param {String} orderId ID of the replenishment order to be confirmed.
       * @return {Promise<void>}
       */
    confirmReplenishmentOrderWithHttpInfo(orderId: string): Promise<void>;
    /**
       * Confirms an AWD replenishment order in ELIGIBLE state with a set of shipments containing items that are needed to be replenished to an FBA node. Order can only be confirmed in ELIGIBLE state.
       * @param {String} orderId ID of the replenishment order to be confirmed.
       * @return {Promise<void>}
       */
    confirmReplenishmentOrder(orderId: string): Promise<void>;
    /**
       * Creates a draft AWD inbound order with a list of packages for inbound shipment. The operation creates one shipment per order.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {InboundOrderCreationData} body Payload for creating an inbound order.
       * @return {Promise<InboundOrderReference>}
       */
    createInboundWithHttpInfo(body: InboundOrderCreationData): Promise<InboundOrderReference>;
    /**
       * Creates a draft AWD inbound order with a list of packages for inbound shipment. The operation creates one shipment per order.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {InboundOrderCreationData} body Payload for creating an inbound order.
       * @return {Promise<InboundOrderReference>}
       */
    createInbound(body: InboundOrderCreationData): Promise<InboundOrderReference>;
    /**
       * Creates a draft AWD outbound order with the specified products. The API returns the order ID for the newly created order and starts an async validation check on the outbound products. After the validation check, the order status transitions from &#x60;VALIDATING&#x60; to &#x60;ELIGIBLE/INELIGIBLE&#x60;.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {OutboundOrderCreationData} body Payload for creating an outbound order.
       * @return {Promise<OutboundOrderReference>}
       */
    createOutboundWithHttpInfo(body: OutboundOrderCreationData): Promise<OutboundOrderReference>;
    /**
       * Creates a draft AWD outbound order with the specified products. The API returns the order ID for the newly created order and starts an async validation check on the outbound products. After the validation check, the order status transitions from &#x60;VALIDATING&#x60; to &#x60;ELIGIBLE/INELIGIBLE&#x60;.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {OutboundOrderCreationData} body Payload for creating an outbound order.
       * @return {Promise<OutboundOrderReference>}
       */
    createOutbound(body: OutboundOrderCreationData): Promise<OutboundOrderReference>;
    /**
       * Creates an AWD replenishment order with given products to replenish. The API will return the order ID of the newly created order and also start an async validation check on the products to e. The order status will transition to ELIGIBLE/INELIGIBLE status from VALIDATING post validation check
       * @param {ReplenishmentOrderCreationData} body Payload for creating a replenishment order.
       * @return {Promise<ReplenishmentOrderReference>}
       */
    createReplenishmentOrderWithHttpInfo(body: ReplenishmentOrderCreationData): Promise<ReplenishmentOrderReference>;
    /**
       * Creates an AWD replenishment order with given products to replenish. The API will return the order ID of the newly created order and also start an async validation check on the products to e. The order status will transition to ELIGIBLE/INELIGIBLE status from VALIDATING post validation check
       * @param {ReplenishmentOrderCreationData} body Payload for creating a replenishment order.
       * @return {Promise<ReplenishmentOrderReference>}
       */
    createReplenishmentOrder(body: ReplenishmentOrderCreationData): Promise<ReplenishmentOrderReference>;
    /**
       * Retrieves an AWD inbound order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} orderId The ID of the inbound order that you want to retrieve.
       * @return {Promise<InboundOrder>}
       */
    getInboundWithHttpInfo(orderId: string): Promise<InboundOrder>;
    /**
       * Retrieves an AWD inbound order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} orderId The ID of the inbound order that you want to retrieve.
       * @return {Promise<InboundOrder>}
       */
    getInbound(orderId: string): Promise<InboundOrder>;
    /**
       * Retrieves an AWD inbound shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api)
       * @param {String} shipmentId ID for the shipment. A shipment contains the cases being inbounded.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.skuQuantities] If equal to &#x60;SHOW&#x60;, the response includes the shipment SKU quantity details.  Defaults to &#x60;HIDE&#x60;, in which case the response does not contain SKU quantities
       * @return {Promise<InboundShipment>}
       */
    getInboundShipmentWithHttpInfo(shipmentId: string, opts?: {
        skuQuantities?: string | undefined;
    }): Promise<InboundShipment>;
    /**
       * Retrieves an AWD inbound shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api)
       * @param {String} shipmentId ID for the shipment. A shipment contains the cases being inbounded.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.skuQuantities] If equal to &#x60;SHOW&#x60;, the response includes the shipment SKU quantity details.  Defaults to &#x60;HIDE&#x60;, in which case the response does not contain SKU quantities
       * @return {Promise<InboundShipment>}
       */
    getInboundShipment(shipmentId: string, opts?: {
        skuQuantities?: string | undefined;
    }): Promise<InboundShipment>;
    /**
       * Retrieves the box labels for a shipment ID that you specify. This is an asynchronous operation. If the label status is &#x60;GENERATED&#x60;, then the label URL is available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} shipmentId ID for the shipment.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.pageType] Page type for the generated labels. The default is &#x60;PLAIN_PAPER&#x60;.
       * @param {String} [opts.formatType] The format type of the output file that contains your labels. The default format type is &#x60;PDF&#x60;.
       * @return {Promise<ShipmentLabels>}
       */
    getInboundShipmentLabelsWithHttpInfo(shipmentId: string, opts?: {
        pageType?: string | undefined;
        formatType?: string | undefined;
    }): Promise<ShipmentLabels>;
    /**
       * Retrieves the box labels for a shipment ID that you specify. This is an asynchronous operation. If the label status is &#x60;GENERATED&#x60;, then the label URL is available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} shipmentId ID for the shipment.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.pageType] Page type for the generated labels. The default is &#x60;PLAIN_PAPER&#x60;.
       * @param {String} [opts.formatType] The format type of the output file that contains your labels. The default format type is &#x60;PDF&#x60;.
       * @return {Promise<ShipmentLabels>}
       */
    getInboundShipmentLabels(shipmentId: string, opts?: {
        pageType?: string | undefined;
        formatType?: string | undefined;
    }): Promise<ShipmentLabels>;
    /**
       * Retrieves the available label page types for a shipment ID that you specify. This is an asynchronous operation. If the label status is &#x60;GENERATED&#x60;, then the pageTypes are available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} shipmentId ID for the shipment.
       * @return {Promise<ShipmentLabelPageTypes>}
       */
    getLabelPageTypesWithHttpInfo(shipmentId: string): Promise<ShipmentLabelPageTypes>;
    /**
       * Retrieves the available label page types for a shipment ID that you specify. This is an asynchronous operation. If the label status is &#x60;GENERATED&#x60;, then the pageTypes are available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} shipmentId ID for the shipment.
       * @return {Promise<ShipmentLabelPageTypes>}
       */
    getLabelPageTypes(shipmentId: string): Promise<ShipmentLabelPageTypes>;
    /**
       * Retrieves an AWD outbound order with a set of shipments that contain items that are outbound into a destination channel. If the order is not eligible, the validation errors field is included in the order response. The API returns the order ID for the newly created order and starts an async validation check on the outbound products. After the validation check, the order status transitions from &#x60;VALIDATING&#x60; to &#x60;ELIGIBLE/INELIGIBLE&#x60;.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} orderId ID for the outbound order to be retrieved.
       * @return {Promise<OutboundOrder>}
       */
    getOutboundWithHttpInfo(orderId: string): Promise<OutboundOrder>;
    /**
       * Retrieves an AWD outbound order with a set of shipments that contain items that are outbound into a destination channel. If the order is not eligible, the validation errors field is included in the order response. The API returns the order ID for the newly created order and starts an async validation check on the outbound products. After the validation check, the order status transitions from &#x60;VALIDATING&#x60; to &#x60;ELIGIBLE/INELIGIBLE&#x60;.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} orderId ID for the outbound order to be retrieved.
       * @return {Promise<OutboundOrder>}
       */
    getOutbound(orderId: string): Promise<OutboundOrder>;
    /**
       * Retrieves an AWD Replenishment order with a set of shipments containing items that is/was planned to be replenished into an FBA node.
       * @param {String} orderId ID of the replenishment order to be retrieved.
       * @return {Promise<ReplenishmentOrder>}
       */
    getReplenishmentOrderWithHttpInfo(orderId: string): Promise<ReplenishmentOrder>;
    /**
       * Retrieves an AWD Replenishment order with a set of shipments containing items that is/was planned to be replenished into an FBA node.
       * @param {String} orderId ID of the replenishment order to be retrieved.
       * @return {Promise<ReplenishmentOrder>}
       */
    getReplenishmentOrder(orderId: string): Promise<ReplenishmentOrder>;
    /**
       * Retrieves a summary of all the inbound AWD shipments associated with a merchant, with the ability to apply optional filters.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.sortBy] Field to sort results by. By default, the response will be sorted by UPDATED_AT.
       * @param {String} [opts.sortOrder] Sort the response in ASCENDING or DESCENDING order. By default, the response will be sorted in DESCENDING order.
       * @param {String} [opts.shipmentStatus] Filter by inbound shipment status.
       * @param {Date} [opts.updatedAfter] List the inbound shipments that were updated after a certain time (inclusive). The date must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {Date} [opts.updatedBefore] List the inbound shipments that were updated before a certain time (inclusive). The date must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {Number} [opts.maxResults] Maximum number of results to return. (default to 25)
       * @param {String} [opts.nextToken] A token that is used to retrieve the next page of results. The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;maxResults&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages.
       * @return {Promise<ShipmentListing>}
       */
    listInboundShipmentsWithHttpInfo(opts?: {
        sortBy?: string | undefined;
        sortOrder?: string | undefined;
        shipmentStatus?: string | undefined;
        updatedAfter?: Date | undefined;
        updatedBefore?: Date | undefined;
        maxResults?: number | undefined;
        nextToken?: string | undefined;
    }): Promise<ShipmentListing>;
    /**
       * Retrieves a summary of all the inbound AWD shipments associated with a merchant, with the ability to apply optional filters.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.sortBy] Field to sort results by. By default, the response will be sorted by UPDATED_AT.
       * @param {String} [opts.sortOrder] Sort the response in ASCENDING or DESCENDING order. By default, the response will be sorted in DESCENDING order.
       * @param {String} [opts.shipmentStatus] Filter by inbound shipment status.
       * @param {Date} [opts.updatedAfter] List the inbound shipments that were updated after a certain time (inclusive). The date must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {Date} [opts.updatedBefore] List the inbound shipments that were updated before a certain time (inclusive). The date must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {Number} [opts.maxResults] Maximum number of results to return. (default to 25)
       * @param {String} [opts.nextToken] A token that is used to retrieve the next page of results. The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;maxResults&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages.
       * @return {Promise<ShipmentListing>}
       */
    listInboundShipments(opts?: {
        sortBy?: string | undefined;
        sortOrder?: string | undefined;
        shipmentStatus?: string | undefined;
        updatedAfter?: Date | undefined;
        updatedBefore?: Date | undefined;
        maxResults?: number | undefined;
        nextToken?: string | undefined;
    }): Promise<ShipmentListing>;
    /**
       * Lists AWD inventory associated with a merchant with the ability to apply optional filters.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.sku] Filter by seller or merchant SKU for the item.
       * @param {String} [opts.sortOrder] Sort the response in &#x60;ASCENDING&#x60; or &#x60;DESCENDING&#x60; order.
       * @param {String} [opts.details] Set to &#x60;SHOW&#x60; to return summaries with additional inventory details. Defaults to &#x60;HIDE,&#x60; which returns only inventory summary totals.
       * @param {String} [opts.nextToken] A token that is used to retrieve the next page of results. The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;maxResults&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages.
       * @param {Number} [opts.maxResults] Maximum number of results to return. (default to 25)
       * @return {Promise<InventoryListing>}
       */
    listInventoryWithHttpInfo(opts?: {
        sku?: string | undefined;
        sortOrder?: string | undefined;
        details?: string | undefined;
        nextToken?: string | undefined;
        maxResults?: number | undefined;
    }): Promise<InventoryListing>;
    /**
       * Lists AWD inventory associated with a merchant with the ability to apply optional filters.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.sku] Filter by seller or merchant SKU for the item.
       * @param {String} [opts.sortOrder] Sort the response in &#x60;ASCENDING&#x60; or &#x60;DESCENDING&#x60; order.
       * @param {String} [opts.details] Set to &#x60;SHOW&#x60; to return summaries with additional inventory details. Defaults to &#x60;HIDE,&#x60; which returns only inventory summary totals.
       * @param {String} [opts.nextToken] A token that is used to retrieve the next page of results. The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;maxResults&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages.
       * @param {Number} [opts.maxResults] Maximum number of results to return. (default to 25)
       * @return {Promise<InventoryListing>}
       */
    listInventory(opts?: {
        sku?: string | undefined;
        sortOrder?: string | undefined;
        details?: string | undefined;
        nextToken?: string | undefined;
        maxResults?: number | undefined;
    }): Promise<InventoryListing>;
    /**
       * Retrieves all outbound AWD orders (with optional filters) that pertain to a merchant. By default, orders are sorted by the &#x60;updatedAt&#x60; attribute in descending order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Object} [opts] Optional parameters
       * @param {Date} [opts.updatedAfter] Get the outbound orders updated after a certain time (inclusive). The date must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {Date} [opts.updatedBefore] Get the outbound orders updated before a certain time (inclusive). The date must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {String} [opts.sortOrder] Sort the response in &#x60;ASCENDING&#x60; or &#x60;DESCENDING&#x60; order.
       * @param {Number} [opts.maxResults] Maximum number of results to return. (default to 25)
       * @param {String} [opts.nextToken] A token that is used to retrieve the next page of results. The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;maxResults&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages.
       * @return {Promise<OutboundListing>}
       */
    listOutboundsWithHttpInfo(opts?: {
        updatedAfter?: Date | undefined;
        updatedBefore?: Date | undefined;
        sortOrder?: string | undefined;
        maxResults?: number | undefined;
        nextToken?: string | undefined;
    }): Promise<OutboundListing>;
    /**
       * Retrieves all outbound AWD orders (with optional filters) that pertain to a merchant. By default, orders are sorted by the &#x60;updatedAt&#x60; attribute in descending order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Object} [opts] Optional parameters
       * @param {Date} [opts.updatedAfter] Get the outbound orders updated after a certain time (inclusive). The date must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {Date} [opts.updatedBefore] Get the outbound orders updated before a certain time (inclusive). The date must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {String} [opts.sortOrder] Sort the response in &#x60;ASCENDING&#x60; or &#x60;DESCENDING&#x60; order.
       * @param {Number} [opts.maxResults] Maximum number of results to return. (default to 25)
       * @param {String} [opts.nextToken] A token that is used to retrieve the next page of results. The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;maxResults&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages.
       * @return {Promise<OutboundListing>}
       */
    listOutbounds(opts?: {
        updatedAfter?: Date | undefined;
        updatedBefore?: Date | undefined;
        sortOrder?: string | undefined;
        maxResults?: number | undefined;
        nextToken?: string | undefined;
    }): Promise<OutboundListing>;
    /**
       * Retrieves all the AWD replenishment orders pertaining to a merchant with optional filters. API by default will sort orders by updatedAt attribute in descending order.
       * @param {Object} [opts] Optional parameters
       * @param {Date} [opts.updatedAfter] Get the replenishment orders updated after certain time (Inclusive) Date should be in ISO 8601 format as defined by date-time in - https://www.rfc-editor.org/rfc/rfc3339.
       * @param {Date} [opts.updatedBefore] Get the replenishment orders updated before certain time (Inclusive) Date should be in ISO 8601 format as defined by date-time in - https://www.rfc-editor.org/rfc/rfc3339.
       * @param {String} [opts.sortOrder] Sort the response in ASCENDING or DESCENDING order. The default sort order is DESCENDING.
       * @param {Number} [opts.maxResults] Maximum results to be returned in a single response. (default to 25)
       * @param {String} [opts.nextToken] A token that is used to retrieve the next page of results. The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;maxResults&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages.
       * @return {Promise<ReplenishmentOrderListing>}
       */
    listReplenishmentOrdersWithHttpInfo(opts?: {
        updatedAfter?: Date | undefined;
        updatedBefore?: Date | undefined;
        sortOrder?: string | undefined;
        maxResults?: number | undefined;
        nextToken?: string | undefined;
    }): Promise<ReplenishmentOrderListing>;
    /**
       * Retrieves all the AWD replenishment orders pertaining to a merchant with optional filters. API by default will sort orders by updatedAt attribute in descending order.
       * @param {Object} [opts] Optional parameters
       * @param {Date} [opts.updatedAfter] Get the replenishment orders updated after certain time (Inclusive) Date should be in ISO 8601 format as defined by date-time in - https://www.rfc-editor.org/rfc/rfc3339.
       * @param {Date} [opts.updatedBefore] Get the replenishment orders updated before certain time (Inclusive) Date should be in ISO 8601 format as defined by date-time in - https://www.rfc-editor.org/rfc/rfc3339.
       * @param {String} [opts.sortOrder] Sort the response in ASCENDING or DESCENDING order. The default sort order is DESCENDING.
       * @param {Number} [opts.maxResults] Maximum results to be returned in a single response. (default to 25)
       * @param {String} [opts.nextToken] A token that is used to retrieve the next page of results. The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;maxResults&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages.
       * @return {Promise<ReplenishmentOrderListing>}
       */
    listReplenishmentOrders(opts?: {
        updatedAfter?: Date | undefined;
        updatedBefore?: Date | undefined;
        sortOrder?: string | undefined;
        maxResults?: number | undefined;
        nextToken?: string | undefined;
    }): Promise<ReplenishmentOrderListing>;
    /**
       * Updates an AWD inbound order that is in &#x60;DRAFT&#x60; status and not yet confirmed. Use this operation to update the &#x60;packagesToInbound&#x60;, &#x60;originAddress&#x60; and &#x60;preferences&#x60; attributes.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} orderId The ID of the inbound order that you want to update.
       * @param {InboundOrder} body Represents an AWD inbound order.
       * @return {Promise<void>}
       */
    updateInboundWithHttpInfo(orderId: string, body: InboundOrder): Promise<void>;
    /**
       * Updates an AWD inbound order that is in &#x60;DRAFT&#x60; status and not yet confirmed. Use this operation to update the &#x60;packagesToInbound&#x60;, &#x60;originAddress&#x60; and &#x60;preferences&#x60; attributes.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} orderId The ID of the inbound order that you want to update.
       * @param {InboundOrder} body Represents an AWD inbound order.
       * @return {Promise<void>}
       */
    updateInbound(orderId: string, body: InboundOrder): Promise<void>;
    /**
       * Updates transport details for an AWD shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} shipmentId The shipment ID.
       * @param {TransportationDetails} body Transportation details for the shipment.
       * @return {Promise<void>}
       */
    updateInboundShipmentTransportDetailsWithHttpInfo(shipmentId: string, body: TransportationDetails): Promise<void>;
    /**
       * Updates transport details for an AWD shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} shipmentId The shipment ID.
       * @param {TransportationDetails} body Transportation details for the shipment.
       * @return {Promise<void>}
       */
    updateInboundShipmentTransportDetails(shipmentId: string, body: TransportationDetails): Promise<void>;
    /**
       * Updates an AWD outbound order that is in &#x60;DRAFT&#x60;, &#x60;ELIGIBLE&#x60;, or &#x60;INELIGIBLE&#x60; status. This API allows updates on &#x60;productsToOutbound&#x60; and &#x60;orderPreferences&#x60; attributes only. Any updates will restart the outbound order validation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} orderId ID for the outbound order to be updated.
       * @param {OutboundOrder} body Represents an AWD outbound order.
       * @return {Promise<OutboundOrderReference>}
       */
    updateOutboundWithHttpInfo(orderId: string, body: OutboundOrder): Promise<OutboundOrderReference>;
    /**
       * Updates an AWD outbound order that is in &#x60;DRAFT&#x60;, &#x60;ELIGIBLE&#x60;, or &#x60;INELIGIBLE&#x60; status. This API allows updates on &#x60;productsToOutbound&#x60; and &#x60;orderPreferences&#x60; attributes only. Any updates will restart the outbound order validation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} orderId ID for the outbound order to be updated.
       * @param {OutboundOrder} body Represents an AWD outbound order.
       * @return {Promise<OutboundOrderReference>}
       */
    updateOutbound(orderId: string, body: OutboundOrder): Promise<OutboundOrderReference>;
    #private;
}
import { InboundPackages } from '../model/InboundPackages.js';
import { InboundEligibility } from '../model/InboundEligibility.js';
import { InboundOrderCreationData } from '../model/InboundOrderCreationData.js';
import { InboundOrderReference } from '../model/InboundOrderReference.js';
import { OutboundOrderCreationData } from '../model/OutboundOrderCreationData.js';
import { OutboundOrderReference } from '../model/OutboundOrderReference.js';
import { ReplenishmentOrderCreationData } from '../model/ReplenishmentOrderCreationData.js';
import { ReplenishmentOrderReference } from '../model/ReplenishmentOrderReference.js';
import { InboundOrder } from '../model/InboundOrder.js';
import { InboundShipment } from '../model/InboundShipment.js';
import { ShipmentLabels } from '../model/ShipmentLabels.js';
import { ShipmentLabelPageTypes } from '../model/ShipmentLabelPageTypes.js';
import { OutboundOrder } from '../model/OutboundOrder.js';
import { ReplenishmentOrder } from '../model/ReplenishmentOrder.js';
import { ShipmentListing } from '../model/ShipmentListing.js';
import { InventoryListing } from '../model/InventoryListing.js';
import { OutboundListing } from '../model/OutboundListing.js';
import { ReplenishmentOrderListing } from '../model/ReplenishmentOrderListing.js';
import { TransportationDetails } from '../model/TransportationDetails.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=AwdApi.d.ts.map