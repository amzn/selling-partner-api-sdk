/**
* FbaInbound service.
* @module fulfillmentinbound_v2024_03_20/api/FbaInboundApi
* @version 2024-03-20
*/
export class FbaInboundApi {
    /**
      * Constructs a new FbaInboundApi.
      * @alias module:fulfillmentinbound_v2024_03_20/api/FbaInboundApi
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
       * Cancels an Inbound Plan. Charges may apply if the cancellation is performed outside of a void window. The window for Amazon Partnered Carriers is 24 hours for Small Parcel Delivery (SPD) and one hour for Less-Than-Truckload (LTL) carrier shipments.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @return {Promise<CancelInboundPlanResponse>}
       */
    cancelInboundPlanWithHttpInfo(inboundPlanId: string): Promise<CancelInboundPlanResponse>;
    /**
       * Cancels an Inbound Plan. Charges may apply if the cancellation is performed outside of a void window. The window for Amazon Partnered Carriers is 24 hours for Small Parcel Delivery (SPD) and one hour for Less-Than-Truckload (LTL) carrier shipments.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @return {Promise<CancelInboundPlanResponse>}
       */
    cancelInboundPlan(inboundPlanId: string): Promise<CancelInboundPlanResponse>;
    /**
       * Cancels a self-ship appointment slot against a shipment. Only available in the following [marketplaces](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids): MX, BR, EG, SA, AE, IN.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | n | n |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId Identifier of a shipment. A shipment contains the boxes and units being inbounded.
       * @param {CancelSelfShipAppointmentRequest} body The body of the request to &#x60;cancelSelfShipAppointment&#x60;.
       * @return {Promise<CancelSelfShipAppointmentResponse>}
       */
    cancelSelfShipAppointmentWithHttpInfo(inboundPlanId: string, shipmentId: string, body: CancelSelfShipAppointmentRequest): Promise<CancelSelfShipAppointmentResponse>;
    /**
       * Cancels a self-ship appointment slot against a shipment. Only available in the following [marketplaces](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids): MX, BR, EG, SA, AE, IN.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | n | n |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId Identifier of a shipment. A shipment contains the boxes and units being inbounded.
       * @param {CancelSelfShipAppointmentRequest} body The body of the request to &#x60;cancelSelfShipAppointment&#x60;.
       * @return {Promise<CancelSelfShipAppointmentResponse>}
       */
    cancelSelfShipAppointment(inboundPlanId: string, shipmentId: string, body: CancelSelfShipAppointmentRequest): Promise<CancelSelfShipAppointmentResponse>;
    /**
       * Confirms the delivery window option for chosen shipment within an inbound plan. A placement option must be confirmed prior to use of this API. Once confirmed, new delivery window options cannot be generated, but the chosen delivery window option can be updated before shipment closure. The window is used to provide the expected time when a shipment will arrive at the warehouse. All transportation options which have the program &#x60;CONFIRMED_DELIVERY_WINDOW&#x60; require a delivery window to be confirmed prior to transportation option confirmation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId The shipment to confirm the delivery window option for.
       * @param {String} deliveryWindowOptionId The id of the delivery window option to be confirmed.
       * @return {Promise<ConfirmDeliveryWindowOptionsResponse>}
       */
    confirmDeliveryWindowOptionsWithHttpInfo(inboundPlanId: string, shipmentId: string, deliveryWindowOptionId: string): Promise<ConfirmDeliveryWindowOptionsResponse>;
    /**
       * Confirms the delivery window option for chosen shipment within an inbound plan. A placement option must be confirmed prior to use of this API. Once confirmed, new delivery window options cannot be generated, but the chosen delivery window option can be updated before shipment closure. The window is used to provide the expected time when a shipment will arrive at the warehouse. All transportation options which have the program &#x60;CONFIRMED_DELIVERY_WINDOW&#x60; require a delivery window to be confirmed prior to transportation option confirmation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId The shipment to confirm the delivery window option for.
       * @param {String} deliveryWindowOptionId The id of the delivery window option to be confirmed.
       * @return {Promise<ConfirmDeliveryWindowOptionsResponse>}
       */
    confirmDeliveryWindowOptions(inboundPlanId: string, shipmentId: string, deliveryWindowOptionId: string): Promise<ConfirmDeliveryWindowOptionsResponse>;
    /**
       * Confirms the packing option for an inbound plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} packingOptionId Identifier of a packing option.
       * @return {Promise<ConfirmPackingOptionResponse>}
       */
    confirmPackingOptionWithHttpInfo(inboundPlanId: string, packingOptionId: string): Promise<ConfirmPackingOptionResponse>;
    /**
       * Confirms the packing option for an inbound plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} packingOptionId Identifier of a packing option.
       * @return {Promise<ConfirmPackingOptionResponse>}
       */
    confirmPackingOption(inboundPlanId: string, packingOptionId: string): Promise<ConfirmPackingOptionResponse>;
    /**
       * Confirms the placement option for an inbound plan. Once confirmed, it cannot be changed for the Inbound Plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} placementOptionId The identifier of a placement option. A placement option represents the shipment splits and destinations of SKUs.
       * @return {Promise<ConfirmPlacementOptionResponse>}
       */
    confirmPlacementOptionWithHttpInfo(inboundPlanId: string, placementOptionId: string): Promise<ConfirmPlacementOptionResponse>;
    /**
       * Confirms the placement option for an inbound plan. Once confirmed, it cannot be changed for the Inbound Plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} placementOptionId The identifier of a placement option. A placement option represents the shipment splits and destinations of SKUs.
       * @return {Promise<ConfirmPlacementOptionResponse>}
       */
    confirmPlacementOption(inboundPlanId: string, placementOptionId: string): Promise<ConfirmPlacementOptionResponse>;
    /**
       * Confirm a shipment content update preview and accept the changes in transportation cost.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId Identifier of a shipment. A shipment contains the boxes and units being inbounded.
       * @param {String} contentUpdatePreviewId Identifier of a content update preview.
       * @return {Promise<ConfirmShipmentContentUpdatePreviewResponse>}
       */
    confirmShipmentContentUpdatePreviewWithHttpInfo(inboundPlanId: string, shipmentId: string, contentUpdatePreviewId: string): Promise<ConfirmShipmentContentUpdatePreviewResponse>;
    /**
       * Confirm a shipment content update preview and accept the changes in transportation cost.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId Identifier of a shipment. A shipment contains the boxes and units being inbounded.
       * @param {String} contentUpdatePreviewId Identifier of a content update preview.
       * @return {Promise<ConfirmShipmentContentUpdatePreviewResponse>}
       */
    confirmShipmentContentUpdatePreview(inboundPlanId: string, shipmentId: string, contentUpdatePreviewId: string): Promise<ConfirmShipmentContentUpdatePreviewResponse>;
    /**
       * Confirms all the transportation options for an inbound plan. A placement option must be confirmed prior to use of this API. Once confirmed, new transportation options can not be generated or confirmed for the Inbound Plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {ConfirmTransportationOptionsRequest} body The body of the request to &#x60;confirmTransportationOptions&#x60;.
       * @return {Promise<ConfirmTransportationOptionsResponse>}
       */
    confirmTransportationOptionsWithHttpInfo(inboundPlanId: string, body: ConfirmTransportationOptionsRequest): Promise<ConfirmTransportationOptionsResponse>;
    /**
       * Confirms all the transportation options for an inbound plan. A placement option must be confirmed prior to use of this API. Once confirmed, new transportation options can not be generated or confirmed for the Inbound Plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {ConfirmTransportationOptionsRequest} body The body of the request to &#x60;confirmTransportationOptions&#x60;.
       * @return {Promise<ConfirmTransportationOptionsResponse>}
       */
    confirmTransportationOptions(inboundPlanId: string, body: ConfirmTransportationOptionsRequest): Promise<ConfirmTransportationOptionsResponse>;
    /**
       * Creates an inbound plan. An inbound plan contains all the necessary information to send shipments into Amazon&#39;s fufillment network.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {CreateInboundPlanRequest} body The body of the request to &#x60;createInboundPlan&#x60;.
       * @return {Promise<CreateInboundPlanResponse>}
       */
    createInboundPlanWithHttpInfo(body: CreateInboundPlanRequest): Promise<CreateInboundPlanResponse>;
    /**
       * Creates an inbound plan. An inbound plan contains all the necessary information to send shipments into Amazon&#39;s fufillment network.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {CreateInboundPlanRequest} body The body of the request to &#x60;createInboundPlan&#x60;.
       * @return {Promise<CreateInboundPlanResponse>}
       */
    createInboundPlan(body: CreateInboundPlanRequest): Promise<CreateInboundPlanResponse>;
    /**
       * For a given marketplace - creates labels for a list of MSKUs.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {CreateMarketplaceItemLabelsRequest} body The body of the request to &#x60;createMarketplaceItemLabels&#x60;.
       * @return {Promise<CreateMarketplaceItemLabelsResponse>}
       */
    createMarketplaceItemLabelsWithHttpInfo(body: CreateMarketplaceItemLabelsRequest): Promise<CreateMarketplaceItemLabelsResponse>;
    /**
       * For a given marketplace - creates labels for a list of MSKUs.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {CreateMarketplaceItemLabelsRequest} body The body of the request to &#x60;createMarketplaceItemLabels&#x60;.
       * @return {Promise<CreateMarketplaceItemLabelsResponse>}
       */
    createMarketplaceItemLabels(body: CreateMarketplaceItemLabelsRequest): Promise<CreateMarketplaceItemLabelsResponse>;
    /**
       * Generates available delivery window options for a given shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId The shipment to generate delivery window options for.
       * @return {Promise<GenerateDeliveryWindowOptionsResponse>}
       */
    generateDeliveryWindowOptionsWithHttpInfo(inboundPlanId: string, shipmentId: string): Promise<GenerateDeliveryWindowOptionsResponse>;
    /**
       * Generates available delivery window options for a given shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId The shipment to generate delivery window options for.
       * @return {Promise<GenerateDeliveryWindowOptionsResponse>}
       */
    generateDeliveryWindowOptions(inboundPlanId: string, shipmentId: string): Promise<GenerateDeliveryWindowOptionsResponse>;
    /**
       * Generates available packing options for the inbound plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @return {Promise<GeneratePackingOptionsResponse>}
       */
    generatePackingOptionsWithHttpInfo(inboundPlanId: string): Promise<GeneratePackingOptionsResponse>;
    /**
       * Generates available packing options for the inbound plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @return {Promise<GeneratePackingOptionsResponse>}
       */
    generatePackingOptions(inboundPlanId: string): Promise<GeneratePackingOptionsResponse>;
    /**
       * Generates placement options for the inbound plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {GeneratePlacementOptionsRequest} body The body of the request to &#x60;generatePlacementOptions&#x60;.
       * @return {Promise<GeneratePlacementOptionsResponse>}
       */
    generatePlacementOptionsWithHttpInfo(inboundPlanId: string, body: GeneratePlacementOptionsRequest): Promise<GeneratePlacementOptionsResponse>;
    /**
       * Generates placement options for the inbound plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {GeneratePlacementOptionsRequest} body The body of the request to &#x60;generatePlacementOptions&#x60;.
       * @return {Promise<GeneratePlacementOptionsResponse>}
       */
    generatePlacementOptions(inboundPlanId: string, body: GeneratePlacementOptionsRequest): Promise<GeneratePlacementOptionsResponse>;
    /**
       * Initiates the process of generating the appointment slots list. Only available in the following [marketplaces](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids): MX, BR, EG, SA, AE, IN.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | n | n |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId Identifier of a shipment. A shipment contains the boxes and units being inbounded.
       * @param {GenerateSelfShipAppointmentSlotsRequest} body The body of the request to &#x60;generateSelfShipAppointmentSlots&#x60;.
       * @return {Promise<GenerateSelfShipAppointmentSlotsResponse>}
       */
    generateSelfShipAppointmentSlotsWithHttpInfo(inboundPlanId: string, shipmentId: string, body: GenerateSelfShipAppointmentSlotsRequest): Promise<GenerateSelfShipAppointmentSlotsResponse>;
    /**
       * Initiates the process of generating the appointment slots list. Only available in the following [marketplaces](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids): MX, BR, EG, SA, AE, IN.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | n | n |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId Identifier of a shipment. A shipment contains the boxes and units being inbounded.
       * @param {GenerateSelfShipAppointmentSlotsRequest} body The body of the request to &#x60;generateSelfShipAppointmentSlots&#x60;.
       * @return {Promise<GenerateSelfShipAppointmentSlotsResponse>}
       */
    generateSelfShipAppointmentSlots(inboundPlanId: string, shipmentId: string, body: GenerateSelfShipAppointmentSlotsRequest): Promise<GenerateSelfShipAppointmentSlotsResponse>;
    /**
       * Generate a shipment content update preview given a set of intended boxes and/or items for a shipment with a confirmed carrier. The shipment content update preview will be viewable with the updated costs and contents prior to confirmation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId Identifier of a shipment. A shipment contains the boxes and units being inbounded.
       * @param {GenerateShipmentContentUpdatePreviewsRequest} body The body of the request to &#x60;generateShipmentContentUpdatePreviews&#x60;.
       * @return {Promise<GenerateShipmentContentUpdatePreviewsResponse>}
       */
    generateShipmentContentUpdatePreviewsWithHttpInfo(inboundPlanId: string, shipmentId: string, body: GenerateShipmentContentUpdatePreviewsRequest): Promise<GenerateShipmentContentUpdatePreviewsResponse>;
    /**
       * Generate a shipment content update preview given a set of intended boxes and/or items for a shipment with a confirmed carrier. The shipment content update preview will be viewable with the updated costs and contents prior to confirmation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId Identifier of a shipment. A shipment contains the boxes and units being inbounded.
       * @param {GenerateShipmentContentUpdatePreviewsRequest} body The body of the request to &#x60;generateShipmentContentUpdatePreviews&#x60;.
       * @return {Promise<GenerateShipmentContentUpdatePreviewsResponse>}
       */
    generateShipmentContentUpdatePreviews(inboundPlanId: string, shipmentId: string, body: GenerateShipmentContentUpdatePreviewsRequest): Promise<GenerateShipmentContentUpdatePreviewsResponse>;
    /**
       * Generates available transportation options for a given placement option.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {GenerateTransportationOptionsRequest} body The body of the request to &#x60;generateTransportationOptions&#x60;.
       * @return {Promise<GenerateTransportationOptionsResponse>}
       */
    generateTransportationOptionsWithHttpInfo(inboundPlanId: string, body: GenerateTransportationOptionsRequest): Promise<GenerateTransportationOptionsResponse>;
    /**
       * Generates available transportation options for a given placement option.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {GenerateTransportationOptionsRequest} body The body of the request to &#x60;generateTransportationOptions&#x60;.
       * @return {Promise<GenerateTransportationOptionsResponse>}
       */
    generateTransportationOptions(inboundPlanId: string, body: GenerateTransportationOptionsRequest): Promise<GenerateTransportationOptionsResponse>;
    /**
       * Provide delivery challan document for PCP transportation in IN marketplace.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId Identifier of a shipment. A shipment contains the boxes and units being inbounded.
       * @return {Promise<GetDeliveryChallanDocumentResponse>}
       */
    getDeliveryChallanDocumentWithHttpInfo(inboundPlanId: string, shipmentId: string): Promise<GetDeliveryChallanDocumentResponse>;
    /**
       * Provide delivery challan document for PCP transportation in IN marketplace.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId Identifier of a shipment. A shipment contains the boxes and units being inbounded.
       * @return {Promise<GetDeliveryChallanDocumentResponse>}
       */
    getDeliveryChallanDocument(inboundPlanId: string, shipmentId: string): Promise<GetDeliveryChallanDocumentResponse>;
    /**
       * Gets the status of the processing of an asynchronous API call.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} operationId Identifier of an asynchronous operation.
       * @return {Promise<InboundOperationStatus>}
       */
    getInboundOperationStatusWithHttpInfo(operationId: string): Promise<InboundOperationStatus>;
    /**
       * Gets the status of the processing of an asynchronous API call.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} operationId Identifier of an asynchronous operation.
       * @return {Promise<InboundOperationStatus>}
       */
    getInboundOperationStatus(operationId: string): Promise<InboundOperationStatus>;
    /**
       * Fetches the top level information about an inbound plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @return {Promise<InboundPlan>}
       */
    getInboundPlanWithHttpInfo(inboundPlanId: string): Promise<InboundPlan>;
    /**
       * Fetches the top level information about an inbound plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @return {Promise<InboundPlan>}
       */
    getInboundPlan(inboundPlanId: string): Promise<InboundPlan>;
    /**
       * Retrieves a list of available self-ship appointment slots used to drop off a shipment at a warehouse. Only available in the following [marketplaces](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids): MX, BR, EG, SA, AE, IN.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | n | n |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId Identifier of a shipment. A shipment contains the boxes and units being inbounded.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.pageSize] The number of self ship appointment slots to return in the response matching the given query. (default to 10)
       * @param {String} [opts.paginationToken] A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
       * @return {Promise<GetSelfShipAppointmentSlotsResponse>}
       */
    getSelfShipAppointmentSlotsWithHttpInfo(inboundPlanId: string, shipmentId: string, opts?: {
        pageSize?: number;
        paginationToken?: string;
    }): Promise<GetSelfShipAppointmentSlotsResponse>;
    /**
       * Retrieves a list of available self-ship appointment slots used to drop off a shipment at a warehouse. Only available in the following [marketplaces](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids): MX, BR, EG, SA, AE, IN.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | n | n |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId Identifier of a shipment. A shipment contains the boxes and units being inbounded.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.pageSize] The number of self ship appointment slots to return in the response matching the given query. (default to 10)
       * @param {String} [opts.paginationToken] A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
       * @return {Promise<GetSelfShipAppointmentSlotsResponse>}
       */
    getSelfShipAppointmentSlots(inboundPlanId: string, shipmentId: string, opts?: {
        pageSize?: number;
        paginationToken?: string;
    }): Promise<GetSelfShipAppointmentSlotsResponse>;
    /**
       * Provides the full details for a specific shipment within an inbound plan. The &#x60;transportationOptionId&#x60; inside &#x60;acceptedTransportationSelection&#x60; can be used to retrieve the transportation details for the shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId Identifier of a shipment. A shipment contains the boxes and units being inbounded.
       * @return {Promise<Shipment>}
       */
    getShipmentWithHttpInfo(inboundPlanId: string, shipmentId: string): Promise<Shipment>;
    /**
       * Provides the full details for a specific shipment within an inbound plan. The &#x60;transportationOptionId&#x60; inside &#x60;acceptedTransportationSelection&#x60; can be used to retrieve the transportation details for the shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId Identifier of a shipment. A shipment contains the boxes and units being inbounded.
       * @return {Promise<Shipment>}
       */
    getShipment(inboundPlanId: string, shipmentId: string): Promise<Shipment>;
    /**
       * Retrieve a shipment content update preview which provides a summary of the requested shipment content changes along with the transportation cost implications of the change that can only be confirmed prior to the expiry date specified.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId Identifier of a shipment. A shipment contains the boxes and units being inbounded.
       * @param {String} contentUpdatePreviewId Identifier of a content update preview.
       * @return {Promise<ContentUpdatePreview>}
       */
    getShipmentContentUpdatePreviewWithHttpInfo(inboundPlanId: string, shipmentId: string, contentUpdatePreviewId: string): Promise<ContentUpdatePreview>;
    /**
       * Retrieve a shipment content update preview which provides a summary of the requested shipment content changes along with the transportation cost implications of the change that can only be confirmed prior to the expiry date specified.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId Identifier of a shipment. A shipment contains the boxes and units being inbounded.
       * @param {String} contentUpdatePreviewId Identifier of a content update preview.
       * @return {Promise<ContentUpdatePreview>}
       */
    getShipmentContentUpdatePreview(inboundPlanId: string, shipmentId: string, contentUpdatePreviewId: string): Promise<ContentUpdatePreview>;
    /**
       * Retrieves all delivery window options for a shipment. Delivery window options must first be generated by the &#x60;generateDeliveryWindowOptions&#x60; operation before becoming available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId The shipment to get delivery window options for.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.pageSize] The number of delivery window options to return in the response matching the given query. (default to 10)
       * @param {String} [opts.paginationToken] A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
       * @return {Promise<ListDeliveryWindowOptionsResponse>}
       */
    listDeliveryWindowOptionsWithHttpInfo(inboundPlanId: string, shipmentId: string, opts?: {
        pageSize?: number;
        paginationToken?: string;
    }): Promise<ListDeliveryWindowOptionsResponse>;
    /**
       * Retrieves all delivery window options for a shipment. Delivery window options must first be generated by the &#x60;generateDeliveryWindowOptions&#x60; operation before becoming available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId The shipment to get delivery window options for.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.pageSize] The number of delivery window options to return in the response matching the given query. (default to 10)
       * @param {String} [opts.paginationToken] A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
       * @return {Promise<ListDeliveryWindowOptionsResponse>}
       */
    listDeliveryWindowOptions(inboundPlanId: string, shipmentId: string, opts?: {
        pageSize?: number;
        paginationToken?: string;
    }): Promise<ListDeliveryWindowOptionsResponse>;
    /**
       * Provides a paginated list of box packages in an inbound plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.pageSize] The number of boxes to return in the response matching the given query. (default to 10)
       * @param {String} [opts.paginationToken] A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
       * @return {Promise<ListInboundPlanBoxesResponse>}
       */
    listInboundPlanBoxesWithHttpInfo(inboundPlanId: string, opts?: {
        pageSize?: number;
        paginationToken?: string;
    }): Promise<ListInboundPlanBoxesResponse>;
    /**
       * Provides a paginated list of box packages in an inbound plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.pageSize] The number of boxes to return in the response matching the given query. (default to 10)
       * @param {String} [opts.paginationToken] A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
       * @return {Promise<ListInboundPlanBoxesResponse>}
       */
    listInboundPlanBoxes(inboundPlanId: string, opts?: {
        pageSize?: number;
        paginationToken?: string;
    }): Promise<ListInboundPlanBoxesResponse>;
    /**
       * Provides a paginated list of item packages in an inbound plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.pageSize] The number of items to return in the response matching the given query. (default to 10)
       * @param {String} [opts.paginationToken] A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
       * @return {Promise<ListInboundPlanItemsResponse>}
       */
    listInboundPlanItemsWithHttpInfo(inboundPlanId: string, opts?: {
        pageSize?: number;
        paginationToken?: string;
    }): Promise<ListInboundPlanItemsResponse>;
    /**
       * Provides a paginated list of item packages in an inbound plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.pageSize] The number of items to return in the response matching the given query. (default to 10)
       * @param {String} [opts.paginationToken] A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
       * @return {Promise<ListInboundPlanItemsResponse>}
       */
    listInboundPlanItems(inboundPlanId: string, opts?: {
        pageSize?: number;
        paginationToken?: string;
    }): Promise<ListInboundPlanItemsResponse>;
    /**
       * Provides a paginated list of pallet packages in an inbound plan. An inbound plan will have pallets when the related details are provided after generating Less-Than-Truckload (LTL) carrier shipments.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.pageSize] The number of pallets to return in the response matching the given query. (default to 10)
       * @param {String} [opts.paginationToken] A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
       * @return {Promise<ListInboundPlanPalletsResponse>}
       */
    listInboundPlanPalletsWithHttpInfo(inboundPlanId: string, opts?: {
        pageSize?: number;
        paginationToken?: string;
    }): Promise<ListInboundPlanPalletsResponse>;
    /**
       * Provides a paginated list of pallet packages in an inbound plan. An inbound plan will have pallets when the related details are provided after generating Less-Than-Truckload (LTL) carrier shipments.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.pageSize] The number of pallets to return in the response matching the given query. (default to 10)
       * @param {String} [opts.paginationToken] A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
       * @return {Promise<ListInboundPlanPalletsResponse>}
       */
    listInboundPlanPallets(inboundPlanId: string, opts?: {
        pageSize?: number;
        paginationToken?: string;
    }): Promise<ListInboundPlanPalletsResponse>;
    /**
       * Provides a list of inbound plans with minimal information.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.pageSize] The number of inbound plans to return in the response matching the given query. (default to 10)
       * @param {String} [opts.paginationToken] A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
       * @param {String} [opts.status] The status of an inbound plan.
       * @param {String} [opts.sortBy] Sort by field.
       * @param {String} [opts.sortOrder] The sort order.
       * @return {Promise<ListInboundPlansResponse>}
       */
    listInboundPlansWithHttpInfo(opts?: {
        pageSize?: number;
        paginationToken?: string;
        status?: string;
        sortBy?: string;
        sortOrder?: string;
    }): Promise<ListInboundPlansResponse>;
    /**
       * Provides a list of inbound plans with minimal information.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.pageSize] The number of inbound plans to return in the response matching the given query. (default to 10)
       * @param {String} [opts.paginationToken] A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
       * @param {String} [opts.status] The status of an inbound plan.
       * @param {String} [opts.sortBy] Sort by field.
       * @param {String} [opts.sortOrder] The sort order.
       * @return {Promise<ListInboundPlansResponse>}
       */
    listInboundPlans(opts?: {
        pageSize?: number;
        paginationToken?: string;
        status?: string;
        sortBy?: string;
        sortOrder?: string;
    }): Promise<ListInboundPlansResponse>;
    /**
       * List the inbound compliance details for MSKUs in a given marketplace.\\n\\n**Note:** MSKUs that contain certain characters must be encoded. For more information, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).\\n\\nThe following characters must be double percent encoded:\\n\\n- &#x60;%&#x60;\\n- &#x60;+&#x60;\\n- &#x60;,&#x60;\\n\\n**Examples:** An MSKU value of &#x60;test%msku&#x60; is encoded as &#x60;test%2525msku&#x60;. An MSKU value of &#x60;test,msku&#x60; is encoded as &#x60;test%252Cmsku&#x60;.\\n\\n**Usage Plan:**\\n\\n| Rate (requests per second) | Burst |\\n| ---- | ---- |\\n| n | n |\\n\\nThe &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {[String]} mskus A list of merchant SKUs, a merchant-supplied identifier of a specific SKU.
       * @param {String} marketplaceId The Marketplace ID. For a list of possible values, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @return {Promise<ListItemComplianceDetailsResponse>}
       */
    listItemComplianceDetailsWithHttpInfo(mskus: [string], marketplaceId: string): Promise<ListItemComplianceDetailsResponse>;
    /**
       * List the inbound compliance details for MSKUs in a given marketplace.\\n\\n**Note:** MSKUs that contain certain characters must be encoded. For more information, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).\\n\\nThe following characters must be double percent encoded:\\n\\n- &#x60;%&#x60;\\n- &#x60;+&#x60;\\n- &#x60;,&#x60;\\n\\n**Examples:** An MSKU value of &#x60;test%msku&#x60; is encoded as &#x60;test%2525msku&#x60;. An MSKU value of &#x60;test,msku&#x60; is encoded as &#x60;test%252Cmsku&#x60;.\\n\\n**Usage Plan:**\\n\\n| Rate (requests per second) | Burst |\\n| ---- | ---- |\\n| n | n |\\n\\nThe &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {[String]} mskus A list of merchant SKUs, a merchant-supplied identifier of a specific SKU.
       * @param {String} marketplaceId The Marketplace ID. For a list of possible values, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @return {Promise<ListItemComplianceDetailsResponse>}
       */
    listItemComplianceDetails(mskus: [string], marketplaceId: string): Promise<ListItemComplianceDetailsResponse>;
    /**
       * Retrieves a page of boxes from a given packing group. These boxes were previously provided through the &#x60;setPackingInformation&#x60; operation. This API is used for workflows where boxes are packed before Amazon determines shipment splits.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} packingGroupId Identifier of a packing group.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.pageSize] The number of packing group boxes to return in the response matching the given query. (default to 10)
       * @param {String} [opts.paginationToken] A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
       * @return {Promise<ListPackingGroupBoxesResponse>}
       */
    listPackingGroupBoxesWithHttpInfo(inboundPlanId: string, packingGroupId: string, opts?: {
        pageSize?: number;
        paginationToken?: string;
    }): Promise<ListPackingGroupBoxesResponse>;
    /**
       * Retrieves a page of boxes from a given packing group. These boxes were previously provided through the &#x60;setPackingInformation&#x60; operation. This API is used for workflows where boxes are packed before Amazon determines shipment splits.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} packingGroupId Identifier of a packing group.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.pageSize] The number of packing group boxes to return in the response matching the given query. (default to 10)
       * @param {String} [opts.paginationToken] A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
       * @return {Promise<ListPackingGroupBoxesResponse>}
       */
    listPackingGroupBoxes(inboundPlanId: string, packingGroupId: string, opts?: {
        pageSize?: number;
        paginationToken?: string;
    }): Promise<ListPackingGroupBoxesResponse>;
    /**
       * Retrieves a page of items in a given packing group. Packing options must first be generated by the corresponding operation before packing group items can be listed.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} packingGroupId Identifier of a packing group.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.pageSize] The number of packing group items to return in the response matching the given query. (default to 10)
       * @param {String} [opts.paginationToken] A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
       * @return {Promise<ListPackingGroupItemsResponse>}
       */
    listPackingGroupItemsWithHttpInfo(inboundPlanId: string, packingGroupId: string, opts?: {
        pageSize?: number;
        paginationToken?: string;
    }): Promise<ListPackingGroupItemsResponse>;
    /**
       * Retrieves a page of items in a given packing group. Packing options must first be generated by the corresponding operation before packing group items can be listed.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} packingGroupId Identifier of a packing group.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.pageSize] The number of packing group items to return in the response matching the given query. (default to 10)
       * @param {String} [opts.paginationToken] A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
       * @return {Promise<ListPackingGroupItemsResponse>}
       */
    listPackingGroupItems(inboundPlanId: string, packingGroupId: string, opts?: {
        pageSize?: number;
        paginationToken?: string;
    }): Promise<ListPackingGroupItemsResponse>;
    /**
       * Retrieves a list of all packing options for an inbound plan. Packing options must first be generated by the corresponding operation before becoming available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.pageSize] The number of packing options to return in the response matching the given query. (default to 10)
       * @param {String} [opts.paginationToken] A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
       * @return {Promise<ListPackingOptionsResponse>}
       */
    listPackingOptionsWithHttpInfo(inboundPlanId: string, opts?: {
        pageSize?: number;
        paginationToken?: string;
    }): Promise<ListPackingOptionsResponse>;
    /**
       * Retrieves a list of all packing options for an inbound plan. Packing options must first be generated by the corresponding operation before becoming available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.pageSize] The number of packing options to return in the response matching the given query. (default to 10)
       * @param {String} [opts.paginationToken] A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
       * @return {Promise<ListPackingOptionsResponse>}
       */
    listPackingOptions(inboundPlanId: string, opts?: {
        pageSize?: number;
        paginationToken?: string;
    }): Promise<ListPackingOptionsResponse>;
    /**
       * Provides a list of all placement options for an inbound plan. Placement options must first be generated by the corresponding operation before becoming available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.pageSize] The number of placement options to return in the response matching the given query. (default to 10)
       * @param {String} [opts.paginationToken] A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
       * @return {Promise<ListPlacementOptionsResponse>}
       */
    listPlacementOptionsWithHttpInfo(inboundPlanId: string, opts?: {
        pageSize?: number;
        paginationToken?: string;
    }): Promise<ListPlacementOptionsResponse>;
    /**
       * Provides a list of all placement options for an inbound plan. Placement options must first be generated by the corresponding operation before becoming available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.pageSize] The number of placement options to return in the response matching the given query. (default to 10)
       * @param {String} [opts.paginationToken] A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
       * @return {Promise<ListPlacementOptionsResponse>}
       */
    listPlacementOptions(inboundPlanId: string, opts?: {
        pageSize?: number;
        paginationToken?: string;
    }): Promise<ListPlacementOptionsResponse>;
    /**
       * Get preparation details for a list of MSKUs in a specified marketplace.\\n\\n**Note:** MSKUs that contain certain characters must be encoded. For more information, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).\\n\\nThe following characters must be double percent encoded:\\n\\n- &#x60;%&#x60;\\n- &#x60;+&#x60;\\n- &#x60;,&#x60;\\n\\n**Examples:** An MSKU value of &#x60;test%msku&#x60; is encoded as &#x60;test%2525msku&#x60;. An MSKU value of &#x60;test,msku&#x60; is encoded as &#x60;test%252Cmsku&#x60;.\\n\\n**Usage Plan:**\\n\\n| Rate (requests per second) | Burst |\\n| ---- | ---- |\\n| n | n |\\n\\nThe &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} marketplaceId The marketplace ID. For a list of possible values, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {[String]} mskus A list of merchant SKUs, a merchant-supplied identifier of a specific SKU.
       * @return {Promise<ListPrepDetailsResponse>}
       */
    listPrepDetailsWithHttpInfo(marketplaceId: string, mskus: [string]): Promise<ListPrepDetailsResponse>;
    /**
       * Get preparation details for a list of MSKUs in a specified marketplace.\\n\\n**Note:** MSKUs that contain certain characters must be encoded. For more information, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).\\n\\nThe following characters must be double percent encoded:\\n\\n- &#x60;%&#x60;\\n- &#x60;+&#x60;\\n- &#x60;,&#x60;\\n\\n**Examples:** An MSKU value of &#x60;test%msku&#x60; is encoded as &#x60;test%2525msku&#x60;. An MSKU value of &#x60;test,msku&#x60; is encoded as &#x60;test%252Cmsku&#x60;.\\n\\n**Usage Plan:**\\n\\n| Rate (requests per second) | Burst |\\n| ---- | ---- |\\n| n | n |\\n\\nThe &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} marketplaceId The marketplace ID. For a list of possible values, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {[String]} mskus A list of merchant SKUs, a merchant-supplied identifier of a specific SKU.
       * @return {Promise<ListPrepDetailsResponse>}
       */
    listPrepDetails(marketplaceId: string, mskus: [string]): Promise<ListPrepDetailsResponse>;
    /**
       * Provides a paginated list of box packages in a shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId Identifier of a shipment. A shipment contains the boxes and units being inbounded.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.pageSize] The number of boxes to return in the response matching the given query. (default to 10)
       * @param {String} [opts.paginationToken] A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
       * @return {Promise<ListShipmentBoxesResponse>}
       */
    listShipmentBoxesWithHttpInfo(inboundPlanId: string, shipmentId: string, opts?: {
        pageSize?: number;
        paginationToken?: string;
    }): Promise<ListShipmentBoxesResponse>;
    /**
       * Provides a paginated list of box packages in a shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId Identifier of a shipment. A shipment contains the boxes and units being inbounded.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.pageSize] The number of boxes to return in the response matching the given query. (default to 10)
       * @param {String} [opts.paginationToken] A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
       * @return {Promise<ListShipmentBoxesResponse>}
       */
    listShipmentBoxes(inboundPlanId: string, shipmentId: string, opts?: {
        pageSize?: number;
        paginationToken?: string;
    }): Promise<ListShipmentBoxesResponse>;
    /**
       * Retrieve a paginated list of shipment content update previews for a given shipment. The shipment content update preview is a summary of the requested shipment content changes along with the transportation cost implications of the change that can only be confirmed prior to the expiry date specified.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId Identifier of a shipment. A shipment contains the boxes and units being inbounded.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.pageSize] The number of content update previews to return. (default to 10)
       * @param {String} [opts.paginationToken] A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
       * @return {Promise<ListShipmentContentUpdatePreviewsResponse>}
       */
    listShipmentContentUpdatePreviewsWithHttpInfo(inboundPlanId: string, shipmentId: string, opts?: {
        pageSize?: number;
        paginationToken?: string;
    }): Promise<ListShipmentContentUpdatePreviewsResponse>;
    /**
       * Retrieve a paginated list of shipment content update previews for a given shipment. The shipment content update preview is a summary of the requested shipment content changes along with the transportation cost implications of the change that can only be confirmed prior to the expiry date specified.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId Identifier of a shipment. A shipment contains the boxes and units being inbounded.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.pageSize] The number of content update previews to return. (default to 10)
       * @param {String} [opts.paginationToken] A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
       * @return {Promise<ListShipmentContentUpdatePreviewsResponse>}
       */
    listShipmentContentUpdatePreviews(inboundPlanId: string, shipmentId: string, opts?: {
        pageSize?: number;
        paginationToken?: string;
    }): Promise<ListShipmentContentUpdatePreviewsResponse>;
    /**
       * Provides a paginated list of item packages in a shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId Identifier of a shipment. A shipment contains the boxes and units being inbounded.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.pageSize] The number of items to return in the response matching the given query. (default to 10)
       * @param {String} [opts.paginationToken] A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
       * @return {Promise<ListShipmentItemsResponse>}
       */
    listShipmentItemsWithHttpInfo(inboundPlanId: string, shipmentId: string, opts?: {
        pageSize?: number;
        paginationToken?: string;
    }): Promise<ListShipmentItemsResponse>;
    /**
       * Provides a paginated list of item packages in a shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId Identifier of a shipment. A shipment contains the boxes and units being inbounded.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.pageSize] The number of items to return in the response matching the given query. (default to 10)
       * @param {String} [opts.paginationToken] A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
       * @return {Promise<ListShipmentItemsResponse>}
       */
    listShipmentItems(inboundPlanId: string, shipmentId: string, opts?: {
        pageSize?: number;
        paginationToken?: string;
    }): Promise<ListShipmentItemsResponse>;
    /**
       * Provides a paginated list of pallet packages in a shipment. A palletized shipment will have pallets when the related details are provided after generating Less-Than-Truckload (LTL) carrier shipments.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId Identifier of a shipment. A shipment contains the boxes and units being inbounded.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.pageSize] The number of pallets to return in the response matching the given query. (default to 10)
       * @param {String} [opts.paginationToken] A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
       * @return {Promise<ListShipmentPalletsResponse>}
       */
    listShipmentPalletsWithHttpInfo(inboundPlanId: string, shipmentId: string, opts?: {
        pageSize?: number;
        paginationToken?: string;
    }): Promise<ListShipmentPalletsResponse>;
    /**
       * Provides a paginated list of pallet packages in a shipment. A palletized shipment will have pallets when the related details are provided after generating Less-Than-Truckload (LTL) carrier shipments.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId Identifier of a shipment. A shipment contains the boxes and units being inbounded.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.pageSize] The number of pallets to return in the response matching the given query. (default to 10)
       * @param {String} [opts.paginationToken] A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
       * @return {Promise<ListShipmentPalletsResponse>}
       */
    listShipmentPallets(inboundPlanId: string, shipmentId: string, opts?: {
        pageSize?: number;
        paginationToken?: string;
    }): Promise<ListShipmentPalletsResponse>;
    /**
       * Retrieves all transportation options for a shipment. Transportation options must first be generated by the &#x60;generateTransportationOptions&#x60; operation before becoming available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.pageSize] The number of transportation options to return in the response matching the given query. (default to 10)
       * @param {String} [opts.paginationToken] A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
       * @param {String} [opts.placementOptionId] The placement option to get transportation options for. Either &#x60;placementOptionId&#x60; or &#x60;shipmentId&#x60; must be specified.
       * @param {String} [opts.shipmentId] The shipment to get transportation options for. Either &#x60;placementOptionId&#x60; or &#x60;shipmentId&#x60; must be specified.
       * @return {Promise<ListTransportationOptionsResponse>}
       */
    listTransportationOptionsWithHttpInfo(inboundPlanId: string, opts?: {
        pageSize?: number;
        paginationToken?: string;
        placementOptionId?: string;
        shipmentId?: string;
    }): Promise<ListTransportationOptionsResponse>;
    /**
       * Retrieves all transportation options for a shipment. Transportation options must first be generated by the &#x60;generateTransportationOptions&#x60; operation before becoming available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.pageSize] The number of transportation options to return in the response matching the given query. (default to 10)
       * @param {String} [opts.paginationToken] A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
       * @param {String} [opts.placementOptionId] The placement option to get transportation options for. Either &#x60;placementOptionId&#x60; or &#x60;shipmentId&#x60; must be specified.
       * @param {String} [opts.shipmentId] The shipment to get transportation options for. Either &#x60;placementOptionId&#x60; or &#x60;shipmentId&#x60; must be specified.
       * @return {Promise<ListTransportationOptionsResponse>}
       */
    listTransportationOptions(inboundPlanId: string, opts?: {
        pageSize?: number;
        paginationToken?: string;
        placementOptionId?: string;
        shipmentId?: string;
    }): Promise<ListTransportationOptionsResponse>;
    /**
       * Confirms or reschedules a self-ship appointment slot against a shipment. Only available in the following [marketplaces](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids): MX, BR, EG, SA, AE, IN.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | n | n |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId Identifier of a shipment. A shipment contains the boxes and units being inbounded.
       * @param {String} slotId An identifier to a self-ship appointment slot.
       * @param {ScheduleSelfShipAppointmentRequest} body The body of the request to &#x60;scheduleSelfShipAppointment&#x60;.
       * @return {Promise<ScheduleSelfShipAppointmentResponse>}
       */
    scheduleSelfShipAppointmentWithHttpInfo(inboundPlanId: string, shipmentId: string, slotId: string, body: ScheduleSelfShipAppointmentRequest): Promise<ScheduleSelfShipAppointmentResponse>;
    /**
       * Confirms or reschedules a self-ship appointment slot against a shipment. Only available in the following [marketplaces](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids): MX, BR, EG, SA, AE, IN.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | n | n |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId Identifier of a shipment. A shipment contains the boxes and units being inbounded.
       * @param {String} slotId An identifier to a self-ship appointment slot.
       * @param {ScheduleSelfShipAppointmentRequest} body The body of the request to &#x60;scheduleSelfShipAppointment&#x60;.
       * @return {Promise<ScheduleSelfShipAppointmentResponse>}
       */
    scheduleSelfShipAppointment(inboundPlanId: string, shipmentId: string, slotId: string, body: ScheduleSelfShipAppointmentRequest): Promise<ScheduleSelfShipAppointmentResponse>;
    /**
       * Sets packing information for an inbound plan. This should be called after an inbound plan is created to populate the box level information required for planning and transportation estimates.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {SetPackingInformationRequest} body The body of the request to &#x60;setPackingInformation&#x60;.
       * @return {Promise<SetPackingInformationResponse>}
       */
    setPackingInformationWithHttpInfo(inboundPlanId: string, body: SetPackingInformationRequest): Promise<SetPackingInformationResponse>;
    /**
       * Sets packing information for an inbound plan. This should be called after an inbound plan is created to populate the box level information required for planning and transportation estimates.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {SetPackingInformationRequest} body The body of the request to &#x60;setPackingInformation&#x60;.
       * @return {Promise<SetPackingInformationResponse>}
       */
    setPackingInformation(inboundPlanId: string, body: SetPackingInformationRequest): Promise<SetPackingInformationResponse>;
    /**
       * Set the preparation details for a list of MSKUs in a specified marketplace.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {SetPrepDetailsRequest} body The body of the request to &#x60;setPrepDetails&#x60;.
       * @return {Promise<SetPrepDetailsResponse>}
       */
    setPrepDetailsWithHttpInfo(body: SetPrepDetailsRequest): Promise<SetPrepDetailsResponse>;
    /**
       * Set the preparation details for a list of MSKUs in a specified marketplace.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {SetPrepDetailsRequest} body The body of the request to &#x60;setPrepDetails&#x60;.
       * @return {Promise<SetPrepDetailsResponse>}
       */
    setPrepDetails(body: SetPrepDetailsRequest): Promise<SetPrepDetailsResponse>;
    /**
       * Update/Add custom identifier to the boxes within a shipment. These custom identifiers are provided by the clients and reflected on the box labels to identify boxes. One example of this custom identifier is the SSCC (Serial Shipping Container Codes) barcodes, with the encoding of GS1-128, which is an industry standard to uniquely identify boxes.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | n | n |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier to an inbound plan.
       * @param {String} shipmentId Identifier to a shipment. A shipment contains the boxes and units being inbounded.
       * @param {UpdateBoxIdentifiersRequest} body The body of the request to &#x60;updateBoxIdentifiers&#x60;.
       * @return {Promise<UpdateBoxIdentifiersResponse>}
       */
    updateBoxIdentifiersWithHttpInfo(inboundPlanId: string, shipmentId: string, body: UpdateBoxIdentifiersRequest): Promise<UpdateBoxIdentifiersResponse>;
    /**
       * Update/Add custom identifier to the boxes within a shipment. These custom identifiers are provided by the clients and reflected on the box labels to identify boxes. One example of this custom identifier is the SSCC (Serial Shipping Container Codes) barcodes, with the encoding of GS1-128, which is an industry standard to uniquely identify boxes.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | n | n |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier to an inbound plan.
       * @param {String} shipmentId Identifier to a shipment. A shipment contains the boxes and units being inbounded.
       * @param {UpdateBoxIdentifiersRequest} body The body of the request to &#x60;updateBoxIdentifiers&#x60;.
       * @return {Promise<UpdateBoxIdentifiersResponse>}
       */
    updateBoxIdentifiers(inboundPlanId: string, shipmentId: string, body: UpdateBoxIdentifiersRequest): Promise<UpdateBoxIdentifiersResponse>;
    /**
       * Updates the name of an existing inbound plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {UpdateInboundPlanNameRequest} body The body of the request to &#x60;updateInboundPlanName&#x60;.
       * @return {Promise<void>}
       */
    updateInboundPlanNameWithHttpInfo(inboundPlanId: string, body: UpdateInboundPlanNameRequest): Promise<void>;
    /**
       * Updates the name of an existing inbound plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {UpdateInboundPlanNameRequest} body The body of the request to &#x60;updateInboundPlanName&#x60;.
       * @return {Promise<void>}
       */
    updateInboundPlanName(inboundPlanId: string, body: UpdateInboundPlanNameRequest): Promise<void>;
    /**
       * Update compliance details for a list of MSKUs. The details provided here are only used for the India (IN - A21TJRUUN4KGV) marketplace compliance validation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} marketplaceId The Marketplace ID. For a list of possible values, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {UpdateItemComplianceDetailsRequest} body The body of the request to &#x60;updateItemComplianceDetails&#x60;.
       * @return {Promise<UpdateItemComplianceDetailsResponse>}
       */
    updateItemComplianceDetailsWithHttpInfo(marketplaceId: string, body: UpdateItemComplianceDetailsRequest): Promise<UpdateItemComplianceDetailsResponse>;
    /**
       * Update compliance details for a list of MSKUs. The details provided here are only used for the India (IN - A21TJRUUN4KGV) marketplace compliance validation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} marketplaceId The Marketplace ID. For a list of possible values, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {UpdateItemComplianceDetailsRequest} body The body of the request to &#x60;updateItemComplianceDetails&#x60;.
       * @return {Promise<UpdateItemComplianceDetailsResponse>}
       */
    updateItemComplianceDetails(marketplaceId: string, body: UpdateItemComplianceDetailsRequest): Promise<UpdateItemComplianceDetailsResponse>;
    /**
       * Updates the name of an existing shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId Identifier of a shipment. A shipment contains the boxes and units being inbounded.
       * @param {UpdateShipmentNameRequest} body The body of the request to &#x60;updateShipmentName&#x60;.
       * @return {Promise<void>}
       */
    updateShipmentNameWithHttpInfo(inboundPlanId: string, shipmentId: string, body: UpdateShipmentNameRequest): Promise<void>;
    /**
       * Updates the name of an existing shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId Identifier of a shipment. A shipment contains the boxes and units being inbounded.
       * @param {UpdateShipmentNameRequest} body The body of the request to &#x60;updateShipmentName&#x60;.
       * @return {Promise<void>}
       */
    updateShipmentName(inboundPlanId: string, shipmentId: string, body: UpdateShipmentNameRequest): Promise<void>;
    /**
       * Updates the source address of an existing shipment. The shipment source address can only be updated prior to the confirmation of the shipment carriers. As a result of the updated source address, existing transportation options will be invalidated and will need to be regenerated to capture the potential difference in transportation options and quotes due to the new source address.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId Identifier of a shipment. A shipment contains the boxes and units being inbounded.
       * @param {UpdateShipmentSourceAddressRequest} body The body of the request to &#x60;updateShipmentSourceAddress&#x60;.
       * @return {Promise<UpdateShipmentSourceAddressResponse>}
       */
    updateShipmentSourceAddressWithHttpInfo(inboundPlanId: string, shipmentId: string, body: UpdateShipmentSourceAddressRequest): Promise<UpdateShipmentSourceAddressResponse>;
    /**
       * Updates the source address of an existing shipment. The shipment source address can only be updated prior to the confirmation of the shipment carriers. As a result of the updated source address, existing transportation options will be invalidated and will need to be regenerated to capture the potential difference in transportation options and quotes due to the new source address.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId Identifier of a shipment. A shipment contains the boxes and units being inbounded.
       * @param {UpdateShipmentSourceAddressRequest} body The body of the request to &#x60;updateShipmentSourceAddress&#x60;.
       * @return {Promise<UpdateShipmentSourceAddressResponse>}
       */
    updateShipmentSourceAddress(inboundPlanId: string, shipmentId: string, body: UpdateShipmentSourceAddressRequest): Promise<UpdateShipmentSourceAddressResponse>;
    /**
       * Updates a shipment&#39;s tracking details.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId Identifier of a shipment. A shipment contains the boxes and units being inbounded.
       * @param {UpdateShipmentTrackingDetailsRequest} body The body of the request to &#x60;updateShipmentTrackingDetails&#x60;.
       * @return {Promise<UpdateShipmentTrackingDetailsResponse>}
       */
    updateShipmentTrackingDetailsWithHttpInfo(inboundPlanId: string, shipmentId: string, body: UpdateShipmentTrackingDetailsRequest): Promise<UpdateShipmentTrackingDetailsResponse>;
    /**
       * Updates a shipment&#39;s tracking details.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} inboundPlanId Identifier of an inbound plan.
       * @param {String} shipmentId Identifier of a shipment. A shipment contains the boxes and units being inbounded.
       * @param {UpdateShipmentTrackingDetailsRequest} body The body of the request to &#x60;updateShipmentTrackingDetails&#x60;.
       * @return {Promise<UpdateShipmentTrackingDetailsResponse>}
       */
    updateShipmentTrackingDetails(inboundPlanId: string, shipmentId: string, body: UpdateShipmentTrackingDetailsRequest): Promise<UpdateShipmentTrackingDetailsResponse>;
    #private;
}
import { CancelInboundPlanResponse } from '../model/CancelInboundPlanResponse.js';
import { CancelSelfShipAppointmentRequest } from '../model/CancelSelfShipAppointmentRequest.js';
import { CancelSelfShipAppointmentResponse } from '../model/CancelSelfShipAppointmentResponse.js';
import { ConfirmDeliveryWindowOptionsResponse } from '../model/ConfirmDeliveryWindowOptionsResponse.js';
import { ConfirmPackingOptionResponse } from '../model/ConfirmPackingOptionResponse.js';
import { ConfirmPlacementOptionResponse } from '../model/ConfirmPlacementOptionResponse.js';
import { ConfirmShipmentContentUpdatePreviewResponse } from '../model/ConfirmShipmentContentUpdatePreviewResponse.js';
import { ConfirmTransportationOptionsRequest } from '../model/ConfirmTransportationOptionsRequest.js';
import { ConfirmTransportationOptionsResponse } from '../model/ConfirmTransportationOptionsResponse.js';
import { CreateInboundPlanRequest } from '../model/CreateInboundPlanRequest.js';
import { CreateInboundPlanResponse } from '../model/CreateInboundPlanResponse.js';
import { CreateMarketplaceItemLabelsRequest } from '../model/CreateMarketplaceItemLabelsRequest.js';
import { CreateMarketplaceItemLabelsResponse } from '../model/CreateMarketplaceItemLabelsResponse.js';
import { GenerateDeliveryWindowOptionsResponse } from '../model/GenerateDeliveryWindowOptionsResponse.js';
import { GeneratePackingOptionsResponse } from '../model/GeneratePackingOptionsResponse.js';
import { GeneratePlacementOptionsRequest } from '../model/GeneratePlacementOptionsRequest.js';
import { GeneratePlacementOptionsResponse } from '../model/GeneratePlacementOptionsResponse.js';
import { GenerateSelfShipAppointmentSlotsRequest } from '../model/GenerateSelfShipAppointmentSlotsRequest.js';
import { GenerateSelfShipAppointmentSlotsResponse } from '../model/GenerateSelfShipAppointmentSlotsResponse.js';
import { GenerateShipmentContentUpdatePreviewsRequest } from '../model/GenerateShipmentContentUpdatePreviewsRequest.js';
import { GenerateShipmentContentUpdatePreviewsResponse } from '../model/GenerateShipmentContentUpdatePreviewsResponse.js';
import { GenerateTransportationOptionsRequest } from '../model/GenerateTransportationOptionsRequest.js';
import { GenerateTransportationOptionsResponse } from '../model/GenerateTransportationOptionsResponse.js';
import { GetDeliveryChallanDocumentResponse } from '../model/GetDeliveryChallanDocumentResponse.js';
import { InboundOperationStatus } from '../model/InboundOperationStatus.js';
import { InboundPlan } from '../model/InboundPlan.js';
import { GetSelfShipAppointmentSlotsResponse } from '../model/GetSelfShipAppointmentSlotsResponse.js';
import { Shipment } from '../model/Shipment.js';
import { ContentUpdatePreview } from '../model/ContentUpdatePreview.js';
import { ListDeliveryWindowOptionsResponse } from '../model/ListDeliveryWindowOptionsResponse.js';
import { ListInboundPlanBoxesResponse } from '../model/ListInboundPlanBoxesResponse.js';
import { ListInboundPlanItemsResponse } from '../model/ListInboundPlanItemsResponse.js';
import { ListInboundPlanPalletsResponse } from '../model/ListInboundPlanPalletsResponse.js';
import { ListInboundPlansResponse } from '../model/ListInboundPlansResponse.js';
import { ListItemComplianceDetailsResponse } from '../model/ListItemComplianceDetailsResponse.js';
import { ListPackingGroupBoxesResponse } from '../model/ListPackingGroupBoxesResponse.js';
import { ListPackingGroupItemsResponse } from '../model/ListPackingGroupItemsResponse.js';
import { ListPackingOptionsResponse } from '../model/ListPackingOptionsResponse.js';
import { ListPlacementOptionsResponse } from '../model/ListPlacementOptionsResponse.js';
import { ListPrepDetailsResponse } from '../model/ListPrepDetailsResponse.js';
import { ListShipmentBoxesResponse } from '../model/ListShipmentBoxesResponse.js';
import { ListShipmentContentUpdatePreviewsResponse } from '../model/ListShipmentContentUpdatePreviewsResponse.js';
import { ListShipmentItemsResponse } from '../model/ListShipmentItemsResponse.js';
import { ListShipmentPalletsResponse } from '../model/ListShipmentPalletsResponse.js';
import { ListTransportationOptionsResponse } from '../model/ListTransportationOptionsResponse.js';
import { ScheduleSelfShipAppointmentRequest } from '../model/ScheduleSelfShipAppointmentRequest.js';
import { ScheduleSelfShipAppointmentResponse } from '../model/ScheduleSelfShipAppointmentResponse.js';
import { SetPackingInformationRequest } from '../model/SetPackingInformationRequest.js';
import { SetPackingInformationResponse } from '../model/SetPackingInformationResponse.js';
import { SetPrepDetailsRequest } from '../model/SetPrepDetailsRequest.js';
import { SetPrepDetailsResponse } from '../model/SetPrepDetailsResponse.js';
import { UpdateBoxIdentifiersRequest } from '../model/UpdateBoxIdentifiersRequest.js';
import { UpdateBoxIdentifiersResponse } from '../model/UpdateBoxIdentifiersResponse.js';
import { UpdateInboundPlanNameRequest } from '../model/UpdateInboundPlanNameRequest.js';
import { UpdateItemComplianceDetailsRequest } from '../model/UpdateItemComplianceDetailsRequest.js';
import { UpdateItemComplianceDetailsResponse } from '../model/UpdateItemComplianceDetailsResponse.js';
import { UpdateShipmentNameRequest } from '../model/UpdateShipmentNameRequest.js';
import { UpdateShipmentSourceAddressRequest } from '../model/UpdateShipmentSourceAddressRequest.js';
import { UpdateShipmentSourceAddressResponse } from '../model/UpdateShipmentSourceAddressResponse.js';
import { UpdateShipmentTrackingDetailsRequest } from '../model/UpdateShipmentTrackingDetailsRequest.js';
import { UpdateShipmentTrackingDetailsResponse } from '../model/UpdateShipmentTrackingDetailsResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=FbaInboundApi.d.ts.map