/**
* OrdersV0 service.
* @module orders_v0/api/OrdersV0Api
* @version v0
*/
export class OrdersV0Api {
    /**
      * Constructs a new OrdersV0Api.
      * @alias module:orders_v0/api/OrdersV0Api
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
       * Updates the shipment confirmation status for a specified order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} orderId An Amazon-defined order identifier, in 3-7-7 format.
       * @param {ConfirmShipmentRequest} payload Request body of &#x60;confirmShipment&#x60;.
       * @return {Promise<void>}
       */
    confirmShipmentWithHttpInfo(orderId: string, payload: ConfirmShipmentRequest): Promise<void>;
    /**
       * Updates the shipment confirmation status for a specified order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} orderId An Amazon-defined order identifier, in 3-7-7 format.
       * @param {ConfirmShipmentRequest} payload Request body of &#x60;confirmShipment&#x60;.
       * @return {Promise<void>}
       */
    confirmShipment(orderId: string, payload: ConfirmShipmentRequest): Promise<void>;
    /**
       * Returns the order that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} orderId An Amazon-defined order identifier, in 3-7-7 format.
       * @return {Promise<GetOrderResponse>}
       */
    getOrderWithHttpInfo(orderId: string): Promise<GetOrderResponse>;
    /**
       * Returns the order that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} orderId An Amazon-defined order identifier, in 3-7-7 format.
       * @return {Promise<GetOrderResponse>}
       */
    getOrder(orderId: string): Promise<GetOrderResponse>;
    /**
       * Returns the shipping address for the order that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} orderId The Amazon order identifier in 3-7-7 format.
       * @return {Promise<GetOrderAddressResponse>}
       */
    getOrderAddressWithHttpInfo(orderId: string): Promise<GetOrderAddressResponse>;
    /**
       * Returns the shipping address for the order that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} orderId The Amazon order identifier in 3-7-7 format.
       * @return {Promise<GetOrderAddressResponse>}
       */
    getOrderAddress(orderId: string): Promise<GetOrderAddressResponse>;
    /**
       * Returns buyer information for the order that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} orderId The Amazon order identifier in 3-7-7 format.
       * @return {Promise<GetOrderBuyerInfoResponse>}
       */
    getOrderBuyerInfoWithHttpInfo(orderId: string): Promise<GetOrderBuyerInfoResponse>;
    /**
       * Returns buyer information for the order that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} orderId The Amazon order identifier in 3-7-7 format.
       * @return {Promise<GetOrderBuyerInfoResponse>}
       */
    getOrderBuyerInfo(orderId: string): Promise<GetOrderBuyerInfoResponse>;
    /**
       * Returns detailed order item information for the order that you specify. If &#x60;NextToken&#x60; is provided, it&#39;s used to retrieve the next page of order items.  __Note__: When an order is in the Pending state (the order has been placed but payment has not been authorized), the getOrderItems operation does not return information about pricing, taxes, shipping charges, gift status or promotions for the order items in the order. After an order leaves the Pending state (this occurs when payment has been authorized) and enters the Unshipped, Partially Shipped, or Shipped state, the getOrderItems operation returns information about pricing, taxes, shipping charges, gift status and promotions for the order items in the order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} orderId An Amazon-defined order identifier, in 3-7-7 format.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.nextToken] A string token returned in the response of your previous request.
       * @return {Promise<GetOrderItemsResponse>}
       */
    getOrderItemsWithHttpInfo(orderId: string, opts?: {
        nextToken?: string;
    }): Promise<GetOrderItemsResponse>;
    /**
       * Returns detailed order item information for the order that you specify. If &#x60;NextToken&#x60; is provided, it&#39;s used to retrieve the next page of order items.  __Note__: When an order is in the Pending state (the order has been placed but payment has not been authorized), the getOrderItems operation does not return information about pricing, taxes, shipping charges, gift status or promotions for the order items in the order. After an order leaves the Pending state (this occurs when payment has been authorized) and enters the Unshipped, Partially Shipped, or Shipped state, the getOrderItems operation returns information about pricing, taxes, shipping charges, gift status and promotions for the order items in the order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} orderId An Amazon-defined order identifier, in 3-7-7 format.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.nextToken] A string token returned in the response of your previous request.
       * @return {Promise<GetOrderItemsResponse>}
       */
    getOrderItems(orderId: string, opts?: {
        nextToken?: string;
    }): Promise<GetOrderItemsResponse>;
    /**
       * Returns buyer information for the order items in the order that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} orderId An Amazon-defined order identifier, in 3-7-7 format.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.nextToken] A string token returned in the response of your previous request.
       * @return {Promise<GetOrderItemsBuyerInfoResponse>}
       */
    getOrderItemsBuyerInfoWithHttpInfo(orderId: string, opts?: {
        nextToken?: string;
    }): Promise<GetOrderItemsBuyerInfoResponse>;
    /**
       * Returns buyer information for the order items in the order that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} orderId An Amazon-defined order identifier, in 3-7-7 format.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.nextToken] A string token returned in the response of your previous request.
       * @return {Promise<GetOrderItemsBuyerInfoResponse>}
       */
    getOrderItemsBuyerInfo(orderId: string, opts?: {
        nextToken?: string;
    }): Promise<GetOrderItemsBuyerInfoResponse>;
    /**
       * Returns regulated information for the order that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} orderId The Amazon order identifier in 3-7-7 format.
       * @return {Promise<GetOrderRegulatedInfoResponse>}
       */
    getOrderRegulatedInfoWithHttpInfo(orderId: string): Promise<GetOrderRegulatedInfoResponse>;
    /**
       * Returns regulated information for the order that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} orderId The Amazon order identifier in 3-7-7 format.
       * @return {Promise<GetOrderRegulatedInfoResponse>}
       */
    getOrderRegulatedInfo(orderId: string): Promise<GetOrderRegulatedInfoResponse>;
    /**
       * Returns orders that are created or updated during the specified time period. If you want to return specific types of orders, you can apply filters to your request. &#x60;NextToken&#x60; doesn&#39;t affect any filters that you include in your request; it only impacts the pagination for the filtered orders response.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String[]} marketplaceIds A list of &#x60;MarketplaceId&#x60; values. Used to select orders that were placed in the specified marketplaces.  Refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) for a complete list of &#x60;marketplaceId&#x60; values.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.createdAfter] Use this date to select orders created after (or at) a specified time. Only orders placed after the specified time are returned. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.  **Note**: Either the &#x60;CreatedAfter&#x60; parameter or the &#x60;LastUpdatedAfter&#x60; parameter is required. Both cannot be empty. &#x60;LastUpdatedAfter&#x60; and &#x60;LastUpdatedBefore&#x60; cannot be set when &#x60;CreatedAfter&#x60; is set.
       * @param {String} [opts.createdBefore] Use this date to select orders created before (or at) a specified time. Only orders placed before the specified time are returned. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.  **Note**: &#x60;CreatedBefore&#x60; is optional when &#x60;CreatedAfter&#x60; is set. If specified, &#x60;CreatedBefore&#x60; must be equal to or after the &#x60;CreatedAfter&#x60; date and at least two minutes before current time.
       * @param {String} [opts.lastUpdatedAfter] Use this date to select orders that were last updated after (or at) a specified time. An update is defined as any change in order status, including the creation of a new order. Includes updates made by Amazon and by the seller. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.  **Note**: Either the &#x60;CreatedAfter&#x60; parameter or the &#x60;LastUpdatedAfter&#x60; parameter is required. Both cannot be empty. &#x60;CreatedAfter&#x60; or &#x60;CreatedBefore&#x60; cannot be set when &#x60;LastUpdatedAfter&#x60; is set.
       * @param {String} [opts.lastUpdatedBefore] Use this date to select orders that were last updated before (or at) a specified time. An update is defined as any change in order status, including the creation of a new order. Includes updates made by Amazon and by the seller. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.  **Note**: &#x60;LastUpdatedBefore&#x60; is optional when &#x60;LastUpdatedAfter&#x60; is set. But if specified, &#x60;LastUpdatedBefore&#x60; must be equal to or after the &#x60;LastUpdatedAfter&#x60; date and at least two minutes before current time.
       * @param {[String]} [opts.orderStatuses] A list of &#x60;OrderStatus&#x60; values used to filter the results.  **Possible values:** - &#x60;PendingAvailability&#x60; (This status is available for pre-orders only. The order has been placed, payment has not been authorized, and the release date of the item is in the future.) - &#x60;Pending&#x60; (The order has been placed but payment has not been authorized.) - &#x60;Unshipped&#x60; (Payment has been authorized and the order is ready for shipment, but no items in the order have been shipped.) - &#x60;PartiallyShipped&#x60; (One or more, but not all, items in the order have been shipped.) - &#x60;Shipped&#x60; (All items in the order have been shipped.) - &#x60;InvoiceUnconfirmed&#x60; (All items in the order have been shipped. The seller has not yet given confirmation to Amazon that the invoice has been shipped to the buyer.) - &#x60;Canceled&#x60; (The order has been canceled.) - &#x60;Unfulfillable&#x60; (The order cannot be fulfilled. This state applies only to Multi-Channel Fulfillment orders.)
       * @param {[String]} [opts.fulfillmentChannels] A list that indicates how an order was fulfilled. Filters the results by fulfillment channel.   **Possible values**: &#x60;AFN&#x60; (fulfilled by Amazon), &#x60;MFN&#x60; (fulfilled by seller).
       * @param {[String]} [opts.paymentMethods] A list of payment method values. Use this field to select orders that were paid with the specified payment methods.  **Possible values**: &#x60;COD&#x60; (cash on delivery), &#x60;CVS&#x60; (convenience store), &#x60;Other&#x60; (Any payment method other than COD or CVS).
       * @param {String} [opts.sellerOrderId] An order identifier that is specified by the seller. Used to select only the orders that match the order identifier. If &#x60;SellerOrderId&#x60; is specified, then &#x60;FulfillmentChannels&#x60;, &#x60;OrderStatuses&#x60;, &#x60;PaymentMethod&#x60;, &#x60;LastUpdatedAfter&#x60;, and &#x60;LastUpdatedBefore&#x60; cannot be specified.
       * @param {Number} [opts.maxResultsPerPage] A number that indicates the maximum number of orders that can be returned per page. Value must be 1 - 100. Default 100.
       * @param {[String]} [opts.easyShipShipmentStatuses] A list of &#x60;EasyShipShipmentStatus&#x60; values. Used to select Easy Ship orders with statuses that match the specified values. If &#x60;EasyShipShipmentStatus&#x60; is specified, only Amazon Easy Ship orders are returned.  **Possible values:** - &#x60;PendingSchedule&#x60; (The package is awaiting the schedule for pick-up.) - &#x60;PendingPickUp&#x60; (Amazon has not yet picked up the package from the seller.) - &#x60;PendingDropOff&#x60; (The seller will deliver the package to the carrier.) - &#x60;LabelCanceled&#x60; (The seller canceled the pickup.) - &#x60;PickedUp&#x60; (Amazon has picked up the package from the seller.) - &#x60;DroppedOff&#x60; (The package is delivered to the carrier by the seller.) - &#x60;AtOriginFC&#x60; (The packaged is at the origin fulfillment center.) - &#x60;AtDestinationFC&#x60; (The package is at the destination fulfillment center.) - &#x60;Delivered&#x60; (The package has been delivered.) - &#x60;RejectedByBuyer&#x60; (The package has been rejected by the buyer.) - &#x60;Undeliverable&#x60; (The package cannot be delivered.) - &#x60;ReturningToSeller&#x60; (The package was not delivered and is being returned to the seller.) - &#x60;ReturnedToSeller&#x60; (The package was not delivered and was returned to the seller.) - &#x60;Lost&#x60; (The package is lost.) - &#x60;OutForDelivery&#x60; (The package is out for delivery.) - &#x60;Damaged&#x60; (The package was damaged by the carrier.)
       * @param {[String]} [opts.electronicInvoiceStatuses] A list of &#x60;ElectronicInvoiceStatus&#x60; values. Used to select orders with electronic invoice statuses that match the specified values.  **Possible values:** - &#x60;NotRequired&#x60; (Electronic invoice submission is not required for this order.) - &#x60;NotFound&#x60; (The electronic invoice was not submitted for this order.) - &#x60;Processing&#x60; (The electronic invoice is being processed for this order.) - &#x60;Errored&#x60; (The last submitted electronic invoice was rejected for this order.) - &#x60;Accepted&#x60; (The last submitted electronic invoice was submitted and accepted.)
       * @param {String} [opts.nextToken] A string token returned in the response of your previous request.
       * @param {[String]} [opts.amazonOrderIds] A list of &#x60;AmazonOrderId&#x60; values. An &#x60;AmazonOrderId&#x60; is an Amazon-defined order identifier, in 3-7-7 format.
       * @param {String} [opts.actualFulfillmentSupplySourceId] The &#x60;sourceId&#x60; of the location from where you want the order fulfilled.
       * @param {Boolean} [opts.isISPU] When true, this order is marked to be picked up from a store rather than delivered.
       * @param {String} [opts.storeChainStoreId] The store chain store identifier. Linked to a specific store in a store chain.
       * @param {String} [opts.earliestDeliveryDateBefore] Use this date to select orders with an earliest delivery date before (or at) a specified time. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
       * @param {String} [opts.earliestDeliveryDateAfter] Use this date to select orders with an earliest delivery date after (or at) a specified time. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
       * @param {String} [opts.latestDeliveryDateBefore] Use this date to select orders with a latest delivery date before (or at) a specified time. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
       * @param {String} [opts.latestDeliveryDateAfter] Use this date to select orders with a latest delivery date after (or at) a specified time. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
       * @return {Promise<GetOrdersResponse>}
       */
    getOrdersWithHttpInfo(marketplaceIds: string[], opts?: {
        createdAfter?: string;
        createdBefore?: string;
        lastUpdatedAfter?: string;
        lastUpdatedBefore?: string;
        orderStatuses?: [string];
        fulfillmentChannels?: [string];
        paymentMethods?: [string];
        sellerOrderId?: string;
        maxResultsPerPage?: number;
        easyShipShipmentStatuses?: [string];
        electronicInvoiceStatuses?: [string];
        nextToken?: string;
        amazonOrderIds?: [string];
        actualFulfillmentSupplySourceId?: string;
        isISPU?: boolean;
        storeChainStoreId?: string;
        earliestDeliveryDateBefore?: string;
        earliestDeliveryDateAfter?: string;
        latestDeliveryDateBefore?: string;
        latestDeliveryDateAfter?: string;
    }): Promise<GetOrdersResponse>;
    /**
       * Returns orders that are created or updated during the specified time period. If you want to return specific types of orders, you can apply filters to your request. &#x60;NextToken&#x60; doesn&#39;t affect any filters that you include in your request; it only impacts the pagination for the filtered orders response.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String[]} marketplaceIds A list of &#x60;MarketplaceId&#x60; values. Used to select orders that were placed in the specified marketplaces.  Refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) for a complete list of &#x60;marketplaceId&#x60; values.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.createdAfter] Use this date to select orders created after (or at) a specified time. Only orders placed after the specified time are returned. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.  **Note**: Either the &#x60;CreatedAfter&#x60; parameter or the &#x60;LastUpdatedAfter&#x60; parameter is required. Both cannot be empty. &#x60;LastUpdatedAfter&#x60; and &#x60;LastUpdatedBefore&#x60; cannot be set when &#x60;CreatedAfter&#x60; is set.
       * @param {String} [opts.createdBefore] Use this date to select orders created before (or at) a specified time. Only orders placed before the specified time are returned. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.  **Note**: &#x60;CreatedBefore&#x60; is optional when &#x60;CreatedAfter&#x60; is set. If specified, &#x60;CreatedBefore&#x60; must be equal to or after the &#x60;CreatedAfter&#x60; date and at least two minutes before current time.
       * @param {String} [opts.lastUpdatedAfter] Use this date to select orders that were last updated after (or at) a specified time. An update is defined as any change in order status, including the creation of a new order. Includes updates made by Amazon and by the seller. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.  **Note**: Either the &#x60;CreatedAfter&#x60; parameter or the &#x60;LastUpdatedAfter&#x60; parameter is required. Both cannot be empty. &#x60;CreatedAfter&#x60; or &#x60;CreatedBefore&#x60; cannot be set when &#x60;LastUpdatedAfter&#x60; is set.
       * @param {String} [opts.lastUpdatedBefore] Use this date to select orders that were last updated before (or at) a specified time. An update is defined as any change in order status, including the creation of a new order. Includes updates made by Amazon and by the seller. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.  **Note**: &#x60;LastUpdatedBefore&#x60; is optional when &#x60;LastUpdatedAfter&#x60; is set. But if specified, &#x60;LastUpdatedBefore&#x60; must be equal to or after the &#x60;LastUpdatedAfter&#x60; date and at least two minutes before current time.
       * @param {[String]} [opts.orderStatuses] A list of &#x60;OrderStatus&#x60; values used to filter the results.  **Possible values:** - &#x60;PendingAvailability&#x60; (This status is available for pre-orders only. The order has been placed, payment has not been authorized, and the release date of the item is in the future.) - &#x60;Pending&#x60; (The order has been placed but payment has not been authorized.) - &#x60;Unshipped&#x60; (Payment has been authorized and the order is ready for shipment, but no items in the order have been shipped.) - &#x60;PartiallyShipped&#x60; (One or more, but not all, items in the order have been shipped.) - &#x60;Shipped&#x60; (All items in the order have been shipped.) - &#x60;InvoiceUnconfirmed&#x60; (All items in the order have been shipped. The seller has not yet given confirmation to Amazon that the invoice has been shipped to the buyer.) - &#x60;Canceled&#x60; (The order has been canceled.) - &#x60;Unfulfillable&#x60; (The order cannot be fulfilled. This state applies only to Multi-Channel Fulfillment orders.)
       * @param {[String]} [opts.fulfillmentChannels] A list that indicates how an order was fulfilled. Filters the results by fulfillment channel.   **Possible values**: &#x60;AFN&#x60; (fulfilled by Amazon), &#x60;MFN&#x60; (fulfilled by seller).
       * @param {[String]} [opts.paymentMethods] A list of payment method values. Use this field to select orders that were paid with the specified payment methods.  **Possible values**: &#x60;COD&#x60; (cash on delivery), &#x60;CVS&#x60; (convenience store), &#x60;Other&#x60; (Any payment method other than COD or CVS).
       * @param {String} [opts.sellerOrderId] An order identifier that is specified by the seller. Used to select only the orders that match the order identifier. If &#x60;SellerOrderId&#x60; is specified, then &#x60;FulfillmentChannels&#x60;, &#x60;OrderStatuses&#x60;, &#x60;PaymentMethod&#x60;, &#x60;LastUpdatedAfter&#x60;, and &#x60;LastUpdatedBefore&#x60; cannot be specified.
       * @param {Number} [opts.maxResultsPerPage] A number that indicates the maximum number of orders that can be returned per page. Value must be 1 - 100. Default 100.
       * @param {[String]} [opts.easyShipShipmentStatuses] A list of &#x60;EasyShipShipmentStatus&#x60; values. Used to select Easy Ship orders with statuses that match the specified values. If &#x60;EasyShipShipmentStatus&#x60; is specified, only Amazon Easy Ship orders are returned.  **Possible values:** - &#x60;PendingSchedule&#x60; (The package is awaiting the schedule for pick-up.) - &#x60;PendingPickUp&#x60; (Amazon has not yet picked up the package from the seller.) - &#x60;PendingDropOff&#x60; (The seller will deliver the package to the carrier.) - &#x60;LabelCanceled&#x60; (The seller canceled the pickup.) - &#x60;PickedUp&#x60; (Amazon has picked up the package from the seller.) - &#x60;DroppedOff&#x60; (The package is delivered to the carrier by the seller.) - &#x60;AtOriginFC&#x60; (The packaged is at the origin fulfillment center.) - &#x60;AtDestinationFC&#x60; (The package is at the destination fulfillment center.) - &#x60;Delivered&#x60; (The package has been delivered.) - &#x60;RejectedByBuyer&#x60; (The package has been rejected by the buyer.) - &#x60;Undeliverable&#x60; (The package cannot be delivered.) - &#x60;ReturningToSeller&#x60; (The package was not delivered and is being returned to the seller.) - &#x60;ReturnedToSeller&#x60; (The package was not delivered and was returned to the seller.) - &#x60;Lost&#x60; (The package is lost.) - &#x60;OutForDelivery&#x60; (The package is out for delivery.) - &#x60;Damaged&#x60; (The package was damaged by the carrier.)
       * @param {[String]} [opts.electronicInvoiceStatuses] A list of &#x60;ElectronicInvoiceStatus&#x60; values. Used to select orders with electronic invoice statuses that match the specified values.  **Possible values:** - &#x60;NotRequired&#x60; (Electronic invoice submission is not required for this order.) - &#x60;NotFound&#x60; (The electronic invoice was not submitted for this order.) - &#x60;Processing&#x60; (The electronic invoice is being processed for this order.) - &#x60;Errored&#x60; (The last submitted electronic invoice was rejected for this order.) - &#x60;Accepted&#x60; (The last submitted electronic invoice was submitted and accepted.)
       * @param {String} [opts.nextToken] A string token returned in the response of your previous request.
       * @param {[String]} [opts.amazonOrderIds] A list of &#x60;AmazonOrderId&#x60; values. An &#x60;AmazonOrderId&#x60; is an Amazon-defined order identifier, in 3-7-7 format.
       * @param {String} [opts.actualFulfillmentSupplySourceId] The &#x60;sourceId&#x60; of the location from where you want the order fulfilled.
       * @param {Boolean} [opts.isISPU] When true, this order is marked to be picked up from a store rather than delivered.
       * @param {String} [opts.storeChainStoreId] The store chain store identifier. Linked to a specific store in a store chain.
       * @param {String} [opts.earliestDeliveryDateBefore] Use this date to select orders with an earliest delivery date before (or at) a specified time. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
       * @param {String} [opts.earliestDeliveryDateAfter] Use this date to select orders with an earliest delivery date after (or at) a specified time. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
       * @param {String} [opts.latestDeliveryDateBefore] Use this date to select orders with a latest delivery date before (or at) a specified time. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
       * @param {String} [opts.latestDeliveryDateAfter] Use this date to select orders with a latest delivery date after (or at) a specified time. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
       * @return {Promise<GetOrdersResponse>}
       */
    getOrders(marketplaceIds: string[], opts?: {
        createdAfter?: string;
        createdBefore?: string;
        lastUpdatedAfter?: string;
        lastUpdatedBefore?: string;
        orderStatuses?: [string];
        fulfillmentChannels?: [string];
        paymentMethods?: [string];
        sellerOrderId?: string;
        maxResultsPerPage?: number;
        easyShipShipmentStatuses?: [string];
        electronicInvoiceStatuses?: [string];
        nextToken?: string;
        amazonOrderIds?: [string];
        actualFulfillmentSupplySourceId?: string;
        isISPU?: boolean;
        storeChainStoreId?: string;
        earliestDeliveryDateBefore?: string;
        earliestDeliveryDateAfter?: string;
        latestDeliveryDateBefore?: string;
        latestDeliveryDateAfter?: string;
    }): Promise<GetOrdersResponse>;
    /**
       * Updates (approves or rejects) the verification status of an order containing regulated products.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} orderId The Amazon order identifier in 3-7-7 format.
       * @param {UpdateVerificationStatusRequest} payload The request body for the &#x60;updateVerificationStatus&#x60; operation.
       * @return {Promise<void>}
       */
    updateVerificationStatusWithHttpInfo(orderId: string, payload: UpdateVerificationStatusRequest): Promise<void>;
    /**
       * Updates (approves or rejects) the verification status of an order containing regulated products.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} orderId The Amazon order identifier in 3-7-7 format.
       * @param {UpdateVerificationStatusRequest} payload The request body for the &#x60;updateVerificationStatus&#x60; operation.
       * @return {Promise<void>}
       */
    updateVerificationStatus(orderId: string, payload: UpdateVerificationStatusRequest): Promise<void>;
    #private;
}
import { ConfirmShipmentRequest } from '../model/ConfirmShipmentRequest.js';
import { GetOrderResponse } from '../model/GetOrderResponse.js';
import { GetOrderAddressResponse } from '../model/GetOrderAddressResponse.js';
import { GetOrderBuyerInfoResponse } from '../model/GetOrderBuyerInfoResponse.js';
import { GetOrderItemsResponse } from '../model/GetOrderItemsResponse.js';
import { GetOrderItemsBuyerInfoResponse } from '../model/GetOrderItemsBuyerInfoResponse.js';
import { GetOrderRegulatedInfoResponse } from '../model/GetOrderRegulatedInfoResponse.js';
import { GetOrdersResponse } from '../model/GetOrdersResponse.js';
import { UpdateVerificationStatusRequest } from '../model/UpdateVerificationStatusRequest.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=OrdersV0Api.d.ts.map