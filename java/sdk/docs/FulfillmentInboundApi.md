# FulfillmentInboundApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelInboundPlan**](FulfillmentInboundApi.md#cancelInboundPlan) | **PUT** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/cancellation | cancelInboundPlan
[**cancelSelfShipAppointment**](FulfillmentInboundApi.md#cancelSelfShipAppointment) | **PUT** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/selfShipAppointmentCancellation | cancelSelfShipAppointment
[**confirmDeliveryWindowOptions**](FulfillmentInboundApi.md#confirmDeliveryWindowOptions) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/deliveryWindowOptions/{deliveryWindowOptionId}/confirmation | confirmDeliveryWindowOptions
[**confirmPackingOption**](FulfillmentInboundApi.md#confirmPackingOption) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/packingOptions/{packingOptionId}/confirmation | confirmPackingOption
[**confirmPlacementOption**](FulfillmentInboundApi.md#confirmPlacementOption) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/placementOptions/{placementOptionId}/confirmation | confirmPlacementOption
[**confirmShipmentContentUpdatePreview**](FulfillmentInboundApi.md#confirmShipmentContentUpdatePreview) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/contentUpdatePreviews/{contentUpdatePreviewId}/confirmation | confirmShipmentContentUpdatePreview
[**confirmTransportationOptions**](FulfillmentInboundApi.md#confirmTransportationOptions) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/transportationOptions/confirmation | confirmTransportationOptions
[**createInboundPlan**](FulfillmentInboundApi.md#createInboundPlan) | **POST** /inbound/fba/2024-03-20/inboundPlans | createInboundPlan
[**createMarketplaceItemLabels**](FulfillmentInboundApi.md#createMarketplaceItemLabels) | **POST** /inbound/fba/2024-03-20/items/labels | createMarketplaceItemLabels
[**generateDeliveryWindowOptions**](FulfillmentInboundApi.md#generateDeliveryWindowOptions) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/deliveryWindowOptions | generateDeliveryWindowOptions
[**generatePackingOptions**](FulfillmentInboundApi.md#generatePackingOptions) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/packingOptions | generatePackingOptions
[**generatePlacementOptions**](FulfillmentInboundApi.md#generatePlacementOptions) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/placementOptions | generatePlacementOptions
[**generateSelfShipAppointmentSlots**](FulfillmentInboundApi.md#generateSelfShipAppointmentSlots) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/selfShipAppointmentSlots | generateSelfShipAppointmentSlots
[**generateShipmentContentUpdatePreviews**](FulfillmentInboundApi.md#generateShipmentContentUpdatePreviews) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/contentUpdatePreviews | generateShipmentContentUpdatePreviews
[**generateTransportationOptions**](FulfillmentInboundApi.md#generateTransportationOptions) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/transportationOptions | generateTransportationOptions
[**getDeliveryChallanDocument**](FulfillmentInboundApi.md#getDeliveryChallanDocument) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/deliveryChallanDocument | getDeliveryChallanDocument
[**getInboundOperationStatus**](FulfillmentInboundApi.md#getInboundOperationStatus) | **GET** /inbound/fba/2024-03-20/operations/{operationId} | getInboundOperationStatus
[**getInboundPlan**](FulfillmentInboundApi.md#getInboundPlan) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId} | getInboundPlan
[**getSelfShipAppointmentSlots**](FulfillmentInboundApi.md#getSelfShipAppointmentSlots) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/selfShipAppointmentSlots | getSelfShipAppointmentSlots
[**getShipment**](FulfillmentInboundApi.md#getShipment) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId} | getShipment
[**getShipmentContentUpdatePreview**](FulfillmentInboundApi.md#getShipmentContentUpdatePreview) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/contentUpdatePreviews/{contentUpdatePreviewId} | getShipmentContentUpdatePreview
[**listDeliveryWindowOptions**](FulfillmentInboundApi.md#listDeliveryWindowOptions) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/deliveryWindowOptions | listDeliveryWindowOptions
[**listInboundPlanBoxes**](FulfillmentInboundApi.md#listInboundPlanBoxes) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/boxes | listInboundPlanBoxes
[**listInboundPlanItems**](FulfillmentInboundApi.md#listInboundPlanItems) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/items | listInboundPlanItems
[**listInboundPlanPallets**](FulfillmentInboundApi.md#listInboundPlanPallets) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/pallets | listInboundPlanPallets
[**listInboundPlans**](FulfillmentInboundApi.md#listInboundPlans) | **GET** /inbound/fba/2024-03-20/inboundPlans | listInboundPlans
[**listItemComplianceDetails**](FulfillmentInboundApi.md#listItemComplianceDetails) | **GET** /inbound/fba/2024-03-20/items/compliance | listItemComplianceDetails
[**listPackingGroupBoxes**](FulfillmentInboundApi.md#listPackingGroupBoxes) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/packingGroups/{packingGroupId}/boxes | listPackingGroupBoxes
[**listPackingGroupItems**](FulfillmentInboundApi.md#listPackingGroupItems) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/packingGroups/{packingGroupId}/items | listPackingGroupItems
[**listPackingOptions**](FulfillmentInboundApi.md#listPackingOptions) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/packingOptions | listPackingOptions
[**listPlacementOptions**](FulfillmentInboundApi.md#listPlacementOptions) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/placementOptions | listPlacementOptions
[**listPrepDetails**](FulfillmentInboundApi.md#listPrepDetails) | **GET** /inbound/fba/2024-03-20/items/prepDetails | listPrepDetails
[**listShipmentBoxes**](FulfillmentInboundApi.md#listShipmentBoxes) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/boxes | listShipmentBoxes
[**listShipmentContentUpdatePreviews**](FulfillmentInboundApi.md#listShipmentContentUpdatePreviews) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/contentUpdatePreviews | listShipmentContentUpdatePreviews
[**listShipmentItems**](FulfillmentInboundApi.md#listShipmentItems) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/items | listShipmentItems
[**listShipmentPallets**](FulfillmentInboundApi.md#listShipmentPallets) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/pallets | listShipmentPallets
[**listTransportationOptions**](FulfillmentInboundApi.md#listTransportationOptions) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/transportationOptions | listTransportationOptions
[**scheduleSelfShipAppointment**](FulfillmentInboundApi.md#scheduleSelfShipAppointment) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/selfShipAppointmentSlots/{slotId}/schedule | scheduleSelfShipAppointment
[**setPackingInformation**](FulfillmentInboundApi.md#setPackingInformation) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/packingInformation | setPackingInformation
[**setPrepDetails**](FulfillmentInboundApi.md#setPrepDetails) | **POST** /inbound/fba/2024-03-20/items/prepDetails | setPrepDetails
[**updateInboundPlanName**](FulfillmentInboundApi.md#updateInboundPlanName) | **PUT** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/name | updateInboundPlanName
[**updateItemComplianceDetails**](FulfillmentInboundApi.md#updateItemComplianceDetails) | **PUT** /inbound/fba/2024-03-20/items/compliance | updateItemComplianceDetails
[**updateShipmentName**](FulfillmentInboundApi.md#updateShipmentName) | **PUT** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/name | updateShipmentName
[**updateShipmentSourceAddress**](FulfillmentInboundApi.md#updateShipmentSourceAddress) | **PUT** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/sourceAddress | updateShipmentSourceAddress
[**updateShipmentTrackingDetails**](FulfillmentInboundApi.md#updateShipmentTrackingDetails) | **PUT** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/trackingDetails | updateShipmentTrackingDetails

<a name="cancelInboundPlan"></a>
# **cancelInboundPlan**
> CancelInboundPlanResponse cancelInboundPlan(inboundPlanId)

cancelInboundPlan

Cancels an Inbound Plan. Charges may apply if the cancellation is performed outside of a void window. The window for Amazon Partnered Carriers is 24 hours for Small Parcel Delivery (SPD) and one hour for Less-Than-Truckload (LTL) carrier shipments.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
String inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
try {
    CancelInboundPlanResponse result = apiInstance.cancelInboundPlan(inboundPlanId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#cancelInboundPlan");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. |

### Return type

[**CancelInboundPlanResponse**](CancelInboundPlanResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cancelSelfShipAppointment"></a>
# **cancelSelfShipAppointment**
> CancelSelfShipAppointmentResponse cancelSelfShipAppointment(body, inboundPlanId, shipmentId)

cancelSelfShipAppointment

Cancels a self-ship appointment slot against a shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
CancelSelfShipAppointmentRequest body = new CancelSelfShipAppointmentRequest(); // CancelSelfShipAppointmentRequest | The body of the request to `cancelSelfShipAppointment`.
String inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
String shipmentId = "shipmentId_example"; // String | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
try {
    CancelSelfShipAppointmentResponse result = apiInstance.cancelSelfShipAppointment(body, inboundPlanId, shipmentId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#cancelSelfShipAppointment");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CancelSelfShipAppointmentRequest**](CancelSelfShipAppointmentRequest.md)| The body of the request to &#x60;cancelSelfShipAppointment&#x60;. |
 **inboundPlanId** | **String**| Identifier of an inbound plan. |
 **shipmentId** | **String**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. |

### Return type

[**CancelSelfShipAppointmentResponse**](CancelSelfShipAppointmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="confirmDeliveryWindowOptions"></a>
# **confirmDeliveryWindowOptions**
> ConfirmDeliveryWindowOptionsResponse confirmDeliveryWindowOptions(inboundPlanId, shipmentId, deliveryWindowOptionId)

confirmDeliveryWindowOptions

Confirms the delivery window option for chosen shipment within an inbound plan. A placement option must be confirmed prior to use of this API. Once confirmed, new delivery window options cannot be generated, but the chosen delivery window option can be updated before shipment closure. The window is used to provide the expected time when a shipment will arrive at the warehouse. All transportation options which have the program &#x60;CONFIRMED_DELIVERY_WINDOW&#x60; require a delivery window to be confirmed prior to transportation option confirmation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
String inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
String shipmentId = "shipmentId_example"; // String | The shipment to confirm the delivery window option for.
String deliveryWindowOptionId = "deliveryWindowOptionId_example"; // String | The id of the delivery window option to be confirmed.
try {
    ConfirmDeliveryWindowOptionsResponse result = apiInstance.confirmDeliveryWindowOptions(inboundPlanId, shipmentId, deliveryWindowOptionId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#confirmDeliveryWindowOptions");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. |
 **shipmentId** | **String**| The shipment to confirm the delivery window option for. |
 **deliveryWindowOptionId** | **String**| The id of the delivery window option to be confirmed. |

### Return type

[**ConfirmDeliveryWindowOptionsResponse**](ConfirmDeliveryWindowOptionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="confirmPackingOption"></a>
# **confirmPackingOption**
> ConfirmPackingOptionResponse confirmPackingOption(inboundPlanId, packingOptionId)

confirmPackingOption

Confirms the packing option for an inbound plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
String inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
String packingOptionId = "packingOptionId_example"; // String | Identifier of a packing option.
try {
    ConfirmPackingOptionResponse result = apiInstance.confirmPackingOption(inboundPlanId, packingOptionId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#confirmPackingOption");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. |
 **packingOptionId** | **String**| Identifier of a packing option. |

### Return type

[**ConfirmPackingOptionResponse**](ConfirmPackingOptionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="confirmPlacementOption"></a>
# **confirmPlacementOption**
> ConfirmPlacementOptionResponse confirmPlacementOption(inboundPlanId, placementOptionId)

confirmPlacementOption

Confirms the placement option for an inbound plan. Once confirmed, it cannot be changed for the Inbound Plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
String inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
String placementOptionId = "placementOptionId_example"; // String | The identifier of a placement option. A placement option represents the shipment splits and destinations of SKUs.
try {
    ConfirmPlacementOptionResponse result = apiInstance.confirmPlacementOption(inboundPlanId, placementOptionId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#confirmPlacementOption");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. |
 **placementOptionId** | **String**| The identifier of a placement option. A placement option represents the shipment splits and destinations of SKUs. |

### Return type

[**ConfirmPlacementOptionResponse**](ConfirmPlacementOptionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="confirmShipmentContentUpdatePreview"></a>
# **confirmShipmentContentUpdatePreview**
> ConfirmShipmentContentUpdatePreviewResponse confirmShipmentContentUpdatePreview(inboundPlanId, shipmentId, contentUpdatePreviewId)

confirmShipmentContentUpdatePreview

Confirm a shipment content update preview and accept the changes in transportation cost.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
String inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
String shipmentId = "shipmentId_example"; // String | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
String contentUpdatePreviewId = "contentUpdatePreviewId_example"; // String | Identifier of a content update preview.
try {
    ConfirmShipmentContentUpdatePreviewResponse result = apiInstance.confirmShipmentContentUpdatePreview(inboundPlanId, shipmentId, contentUpdatePreviewId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#confirmShipmentContentUpdatePreview");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. |
 **shipmentId** | **String**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. |
 **contentUpdatePreviewId** | **String**| Identifier of a content update preview. |

### Return type

[**ConfirmShipmentContentUpdatePreviewResponse**](ConfirmShipmentContentUpdatePreviewResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="confirmTransportationOptions"></a>
# **confirmTransportationOptions**
> ConfirmTransportationOptionsResponse confirmTransportationOptions(body, inboundPlanId)

confirmTransportationOptions

Confirms all the transportation options for an inbound plan. A placement option must be confirmed prior to use of this API. Once confirmed, new transportation options can not be generated or confirmed for the Inbound Plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
ConfirmTransportationOptionsRequest body = new ConfirmTransportationOptionsRequest(); // ConfirmTransportationOptionsRequest | The body of the request to `confirmTransportationOptions`.
String inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
try {
    ConfirmTransportationOptionsResponse result = apiInstance.confirmTransportationOptions(body, inboundPlanId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#confirmTransportationOptions");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ConfirmTransportationOptionsRequest**](ConfirmTransportationOptionsRequest.md)| The body of the request to &#x60;confirmTransportationOptions&#x60;. |
 **inboundPlanId** | **String**| Identifier of an inbound plan. |

### Return type

[**ConfirmTransportationOptionsResponse**](ConfirmTransportationOptionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createInboundPlan"></a>
# **createInboundPlan**
> CreateInboundPlanResponse createInboundPlan(body)

createInboundPlan

Creates an inbound plan. An inbound plan contains all the necessary information to send shipments into Amazon&#x27;s fufillment network.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
CreateInboundPlanRequest body = new CreateInboundPlanRequest(); // CreateInboundPlanRequest | The body of the request to `createInboundPlan`.
try {
    CreateInboundPlanResponse result = apiInstance.createInboundPlan(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#createInboundPlan");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateInboundPlanRequest**](CreateInboundPlanRequest.md)| The body of the request to &#x60;createInboundPlan&#x60;. |

### Return type

[**CreateInboundPlanResponse**](CreateInboundPlanResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createMarketplaceItemLabels"></a>
# **createMarketplaceItemLabels**
> CreateMarketplaceItemLabelsResponse createMarketplaceItemLabels(body)

createMarketplaceItemLabels

For a given marketplace - creates labels for a list of MSKUs.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
CreateMarketplaceItemLabelsRequest body = new CreateMarketplaceItemLabelsRequest(); // CreateMarketplaceItemLabelsRequest | The body of the request to `createMarketplaceItemLabels`.
try {
    CreateMarketplaceItemLabelsResponse result = apiInstance.createMarketplaceItemLabels(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#createMarketplaceItemLabels");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateMarketplaceItemLabelsRequest**](CreateMarketplaceItemLabelsRequest.md)| The body of the request to &#x60;createMarketplaceItemLabels&#x60;. |

### Return type

[**CreateMarketplaceItemLabelsResponse**](CreateMarketplaceItemLabelsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="generateDeliveryWindowOptions"></a>
# **generateDeliveryWindowOptions**
> GenerateDeliveryWindowOptionsResponse generateDeliveryWindowOptions(inboundPlanId, shipmentId)

generateDeliveryWindowOptions

Generates available delivery window options for a given shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
String inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
String shipmentId = "shipmentId_example"; // String | The shipment to generate delivery window options for.
try {
    GenerateDeliveryWindowOptionsResponse result = apiInstance.generateDeliveryWindowOptions(inboundPlanId, shipmentId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#generateDeliveryWindowOptions");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. |
 **shipmentId** | **String**| The shipment to generate delivery window options for. |

### Return type

[**GenerateDeliveryWindowOptionsResponse**](GenerateDeliveryWindowOptionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="generatePackingOptions"></a>
# **generatePackingOptions**
> GeneratePackingOptionsResponse generatePackingOptions(inboundPlanId)

generatePackingOptions

Generates available packing options for the inbound plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
String inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
try {
    GeneratePackingOptionsResponse result = apiInstance.generatePackingOptions(inboundPlanId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#generatePackingOptions");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. |

### Return type

[**GeneratePackingOptionsResponse**](GeneratePackingOptionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="generatePlacementOptions"></a>
# **generatePlacementOptions**
> GeneratePlacementOptionsResponse generatePlacementOptions(body, inboundPlanId)

generatePlacementOptions

Generates placement options for the inbound plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
GeneratePlacementOptionsRequest body = new GeneratePlacementOptionsRequest(); // GeneratePlacementOptionsRequest | The body of the request to `generatePlacementOptions`.
String inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
try {
    GeneratePlacementOptionsResponse result = apiInstance.generatePlacementOptions(body, inboundPlanId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#generatePlacementOptions");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GeneratePlacementOptionsRequest**](GeneratePlacementOptionsRequest.md)| The body of the request to &#x60;generatePlacementOptions&#x60;. |
 **inboundPlanId** | **String**| Identifier of an inbound plan. |

### Return type

[**GeneratePlacementOptionsResponse**](GeneratePlacementOptionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="generateSelfShipAppointmentSlots"></a>
# **generateSelfShipAppointmentSlots**
> GenerateSelfShipAppointmentSlotsResponse generateSelfShipAppointmentSlots(body, inboundPlanId, shipmentId)

generateSelfShipAppointmentSlots

Initiates the process of generating the appointment slots list.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
GenerateSelfShipAppointmentSlotsRequest body = new GenerateSelfShipAppointmentSlotsRequest(); // GenerateSelfShipAppointmentSlotsRequest | The body of the request to `generateSelfShipAppointmentSlots`.
String inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
String shipmentId = "shipmentId_example"; // String | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
try {
    GenerateSelfShipAppointmentSlotsResponse result = apiInstance.generateSelfShipAppointmentSlots(body, inboundPlanId, shipmentId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#generateSelfShipAppointmentSlots");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GenerateSelfShipAppointmentSlotsRequest**](GenerateSelfShipAppointmentSlotsRequest.md)| The body of the request to &#x60;generateSelfShipAppointmentSlots&#x60;. |
 **inboundPlanId** | **String**| Identifier of an inbound plan. |
 **shipmentId** | **String**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. |

### Return type

[**GenerateSelfShipAppointmentSlotsResponse**](GenerateSelfShipAppointmentSlotsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="generateShipmentContentUpdatePreviews"></a>
# **generateShipmentContentUpdatePreviews**
> GenerateShipmentContentUpdatePreviewsResponse generateShipmentContentUpdatePreviews(body, inboundPlanId, shipmentId)

generateShipmentContentUpdatePreviews

Generate a shipment content update preview given a set of intended boxes and/or items for a shipment with a confirmed carrier. The shipment content update preview will be viewable with the updated costs and contents prior to confirmation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
GenerateShipmentContentUpdatePreviewsRequest body = new GenerateShipmentContentUpdatePreviewsRequest(); // GenerateShipmentContentUpdatePreviewsRequest | The body of the request to `generateShipmentContentUpdatePreviews`.
String inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
String shipmentId = "shipmentId_example"; // String | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
try {
    GenerateShipmentContentUpdatePreviewsResponse result = apiInstance.generateShipmentContentUpdatePreviews(body, inboundPlanId, shipmentId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#generateShipmentContentUpdatePreviews");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GenerateShipmentContentUpdatePreviewsRequest**](GenerateShipmentContentUpdatePreviewsRequest.md)| The body of the request to &#x60;generateShipmentContentUpdatePreviews&#x60;. |
 **inboundPlanId** | **String**| Identifier of an inbound plan. |
 **shipmentId** | **String**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. |

### Return type

[**GenerateShipmentContentUpdatePreviewsResponse**](GenerateShipmentContentUpdatePreviewsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="generateTransportationOptions"></a>
# **generateTransportationOptions**
> GenerateTransportationOptionsResponse generateTransportationOptions(body, inboundPlanId)

generateTransportationOptions

Generates available transportation options for a given placement option.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
GenerateTransportationOptionsRequest body = new GenerateTransportationOptionsRequest(); // GenerateTransportationOptionsRequest | The body of the request to `generateTransportationOptions`.
String inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
try {
    GenerateTransportationOptionsResponse result = apiInstance.generateTransportationOptions(body, inboundPlanId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#generateTransportationOptions");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GenerateTransportationOptionsRequest**](GenerateTransportationOptionsRequest.md)| The body of the request to &#x60;generateTransportationOptions&#x60;. |
 **inboundPlanId** | **String**| Identifier of an inbound plan. |

### Return type

[**GenerateTransportationOptionsResponse**](GenerateTransportationOptionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDeliveryChallanDocument"></a>
# **getDeliveryChallanDocument**
> GetDeliveryChallanDocumentResponse getDeliveryChallanDocument(inboundPlanId, shipmentId)

getDeliveryChallanDocument

Provide delivery challan document for PCP transportation in IN marketplace.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
String inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
String shipmentId = "shipmentId_example"; // String | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
try {
    GetDeliveryChallanDocumentResponse result = apiInstance.getDeliveryChallanDocument(inboundPlanId, shipmentId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#getDeliveryChallanDocument");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. |
 **shipmentId** | **String**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. |

### Return type

[**GetDeliveryChallanDocumentResponse**](GetDeliveryChallanDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInboundOperationStatus"></a>
# **getInboundOperationStatus**
> InboundOperationStatus getInboundOperationStatus(operationId)

getInboundOperationStatus

Gets the status of the processing of an asynchronous API call.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
String operationId = "operationId_example"; // String | Identifier of an asynchronous operation.
try {
    InboundOperationStatus result = apiInstance.getInboundOperationStatus(operationId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#getInboundOperationStatus");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **operationId** | **String**| Identifier of an asynchronous operation. |

### Return type

[**InboundOperationStatus**](InboundOperationStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInboundPlan"></a>
# **getInboundPlan**
> InboundPlan getInboundPlan(inboundPlanId)

getInboundPlan

Fetches the top level information about an inbound plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
String inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
try {
    InboundPlan result = apiInstance.getInboundPlan(inboundPlanId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#getInboundPlan");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. |

### Return type

[**InboundPlan**](InboundPlan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSelfShipAppointmentSlots"></a>
# **getSelfShipAppointmentSlots**
> GetSelfShipAppointmentSlotsResponse getSelfShipAppointmentSlots(inboundPlanId, shipmentId, pageSize, paginationToken)

getSelfShipAppointmentSlots

Retrieves a list of available self-ship appointment slots used to drop off a shipment at a warehouse.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
String inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
String shipmentId = "shipmentId_example"; // String | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
Integer pageSize = 10; // Integer | The number of self ship appointment slots to return in the response matching the given query.
String paginationToken = "paginationToken_example"; // String | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
try {
    GetSelfShipAppointmentSlotsResponse result = apiInstance.getSelfShipAppointmentSlots(inboundPlanId, shipmentId, pageSize, paginationToken);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#getSelfShipAppointmentSlots");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. |
 **shipmentId** | **String**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. |
 **pageSize** | **Integer**| The number of self ship appointment slots to return in the response matching the given query. | [optional] [default to 10] [enum: ]
 **paginationToken** | **String**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional]

### Return type

[**GetSelfShipAppointmentSlotsResponse**](GetSelfShipAppointmentSlotsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getShipment"></a>
# **getShipment**
> Shipment getShipment(inboundPlanId, shipmentId)

getShipment

Provides the full details for a specific shipment within an inbound plan. The &#x60;transportationOptionId&#x60; inside &#x60;acceptedTransportationSelection&#x60; can be used to retrieve the transportation details for the shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
String inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
String shipmentId = "shipmentId_example"; // String | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
try {
    Shipment result = apiInstance.getShipment(inboundPlanId, shipmentId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#getShipment");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. |
 **shipmentId** | **String**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. |

### Return type

[**Shipment**](Shipment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getShipmentContentUpdatePreview"></a>
# **getShipmentContentUpdatePreview**
> ContentUpdatePreview getShipmentContentUpdatePreview(inboundPlanId, shipmentId, contentUpdatePreviewId)

getShipmentContentUpdatePreview

Retrieve a shipment content update preview which provides a summary of the requested shipment content changes along with the transportation cost implications of the change that can only be confirmed prior to the expiry date specified.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
String inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
String shipmentId = "shipmentId_example"; // String | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
String contentUpdatePreviewId = "contentUpdatePreviewId_example"; // String | Identifier of a content update preview.
try {
    ContentUpdatePreview result = apiInstance.getShipmentContentUpdatePreview(inboundPlanId, shipmentId, contentUpdatePreviewId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#getShipmentContentUpdatePreview");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. |
 **shipmentId** | **String**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. |
 **contentUpdatePreviewId** | **String**| Identifier of a content update preview. |

### Return type

[**ContentUpdatePreview**](ContentUpdatePreview.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listDeliveryWindowOptions"></a>
# **listDeliveryWindowOptions**
> ListDeliveryWindowOptionsResponse listDeliveryWindowOptions(inboundPlanId, shipmentId, pageSize, paginationToken)

listDeliveryWindowOptions

Retrieves all delivery window options for a shipment. Delivery window options must first be generated by the &#x60;generateDeliveryWindowOptions&#x60; operation before becoming available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
String inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
String shipmentId = "shipmentId_example"; // String | The shipment to get delivery window options for.
Integer pageSize = 10; // Integer | The number of delivery window options to return in the response matching the given query.
String paginationToken = "paginationToken_example"; // String | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
try {
    ListDeliveryWindowOptionsResponse result = apiInstance.listDeliveryWindowOptions(inboundPlanId, shipmentId, pageSize, paginationToken);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#listDeliveryWindowOptions");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. |
 **shipmentId** | **String**| The shipment to get delivery window options for. |
 **pageSize** | **Integer**| The number of delivery window options to return in the response matching the given query. | [optional] [default to 10] [enum: ]
 **paginationToken** | **String**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional]

### Return type

[**ListDeliveryWindowOptionsResponse**](ListDeliveryWindowOptionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listInboundPlanBoxes"></a>
# **listInboundPlanBoxes**
> ListInboundPlanBoxesResponse listInboundPlanBoxes(inboundPlanId, pageSize, paginationToken)

listInboundPlanBoxes

Provides a paginated list of box packages in an inbound plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
String inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
Integer pageSize = 10; // Integer | The number of boxes to return in the response matching the given query.
String paginationToken = "paginationToken_example"; // String | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
try {
    ListInboundPlanBoxesResponse result = apiInstance.listInboundPlanBoxes(inboundPlanId, pageSize, paginationToken);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#listInboundPlanBoxes");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. |
 **pageSize** | **Integer**| The number of boxes to return in the response matching the given query. | [optional] [default to 10] [enum: ]
 **paginationToken** | **String**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional]

### Return type

[**ListInboundPlanBoxesResponse**](ListInboundPlanBoxesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listInboundPlanItems"></a>
# **listInboundPlanItems**
> ListInboundPlanItemsResponse listInboundPlanItems(inboundPlanId, pageSize, paginationToken)

listInboundPlanItems

Provides a paginated list of item packages in an inbound plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
String inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
Integer pageSize = 10; // Integer | The number of items to return in the response matching the given query.
String paginationToken = "paginationToken_example"; // String | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
try {
    ListInboundPlanItemsResponse result = apiInstance.listInboundPlanItems(inboundPlanId, pageSize, paginationToken);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#listInboundPlanItems");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. |
 **pageSize** | **Integer**| The number of items to return in the response matching the given query. | [optional] [default to 10] [enum: ]
 **paginationToken** | **String**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional]

### Return type

[**ListInboundPlanItemsResponse**](ListInboundPlanItemsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listInboundPlanPallets"></a>
# **listInboundPlanPallets**
> ListInboundPlanPalletsResponse listInboundPlanPallets(inboundPlanId, pageSize, paginationToken)

listInboundPlanPallets

Provides a paginated list of pallet packages in an inbound plan. An inbound plan will have pallets when the related details are provided after generating Less-Than-Truckload (LTL) carrier shipments.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
String inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
Integer pageSize = 10; // Integer | The number of pallets to return in the response matching the given query.
String paginationToken = "paginationToken_example"; // String | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
try {
    ListInboundPlanPalletsResponse result = apiInstance.listInboundPlanPallets(inboundPlanId, pageSize, paginationToken);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#listInboundPlanPallets");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. |
 **pageSize** | **Integer**| The number of pallets to return in the response matching the given query. | [optional] [default to 10] [enum: ]
 **paginationToken** | **String**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional]

### Return type

[**ListInboundPlanPalletsResponse**](ListInboundPlanPalletsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listInboundPlans"></a>
# **listInboundPlans**
> ListInboundPlansResponse listInboundPlans(pageSize, paginationToken, status, sortBy, sortOrder)

listInboundPlans

Provides a list of inbound plans with minimal information.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
Integer pageSize = 10; // Integer | The number of inbound plans to return in the response matching the given query.
String paginationToken = "paginationToken_example"; // String | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
String status = "status_example"; // String | The status of an inbound plan.
String sortBy = "sortBy_example"; // String | Sort by field.
String sortOrder = "sortOrder_example"; // String | The sort order.
try {
    ListInboundPlansResponse result = apiInstance.listInboundPlans(pageSize, paginationToken, status, sortBy, sortOrder);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#listInboundPlans");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **Integer**| The number of inbound plans to return in the response matching the given query. | [optional] [default to 10] [enum: ]
 **paginationToken** | **String**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional]
 **status** | **String**| The status of an inbound plan. | [optional] [enum: ACTIVE, VOIDED, SHIPPED]
 **sortBy** | **String**| Sort by field. | [optional] [enum: LAST_UPDATED_TIME, CREATION_TIME]
 **sortOrder** | **String**| The sort order. | [optional] [enum: ASC, DESC]

### Return type

[**ListInboundPlansResponse**](ListInboundPlansResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listItemComplianceDetails"></a>
# **listItemComplianceDetails**
> ListItemComplianceDetailsResponse listItemComplianceDetails(mskus, marketplaceId)

listItemComplianceDetails

List the inbound compliance details for MSKUs in a given marketplace.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
List<String> mskus = Arrays.asList("mskus_example"); // List<String> | A list of merchant SKUs, a merchant-supplied identifier of a specific SKU.
String marketplaceId = "marketplaceId_example"; // String | The Marketplace ID. For a list of possible values, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
try {
    ListItemComplianceDetailsResponse result = apiInstance.listItemComplianceDetails(mskus, marketplaceId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#listItemComplianceDetails");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mskus** | [**List&lt;String&gt;**](String.md)| A list of merchant SKUs, a merchant-supplied identifier of a specific SKU. |
 **marketplaceId** | **String**| The Marketplace ID. For a list of possible values, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). |

### Return type

[**ListItemComplianceDetailsResponse**](ListItemComplianceDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listPackingGroupBoxes"></a>
# **listPackingGroupBoxes**
> ListPackingGroupBoxesResponse listPackingGroupBoxes(inboundPlanId, packingGroupId, pageSize, paginationToken)

listPackingGroupBoxes

Retrieves a page of boxes from a given packing group. These boxes were previously provided through the &#x60;setPackingInformation&#x60; operation. This API is used for workflows where boxes are packed before Amazon determines shipment splits.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
String inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
String packingGroupId = "packingGroupId_example"; // String | Identifier of a packing group.
Integer pageSize = 10; // Integer | The number of packing group boxes to return in the response matching the given query.
String paginationToken = "paginationToken_example"; // String | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
try {
    ListPackingGroupBoxesResponse result = apiInstance.listPackingGroupBoxes(inboundPlanId, packingGroupId, pageSize, paginationToken);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#listPackingGroupBoxes");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. |
 **packingGroupId** | **String**| Identifier of a packing group. |
 **pageSize** | **Integer**| The number of packing group boxes to return in the response matching the given query. | [optional] [default to 10] [enum: ]
 **paginationToken** | **String**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional]

### Return type

[**ListPackingGroupBoxesResponse**](ListPackingGroupBoxesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listPackingGroupItems"></a>
# **listPackingGroupItems**
> ListPackingGroupItemsResponse listPackingGroupItems(inboundPlanId, packingGroupId, pageSize, paginationToken)

listPackingGroupItems

Retrieves a page of items in a given packing group. Packing options must first be generated by the corresponding operation before packing group items can be listed.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
String inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
String packingGroupId = "packingGroupId_example"; // String | Identifier of a packing group.
Integer pageSize = 10; // Integer | The number of packing group items to return in the response matching the given query.
String paginationToken = "paginationToken_example"; // String | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
try {
    ListPackingGroupItemsResponse result = apiInstance.listPackingGroupItems(inboundPlanId, packingGroupId, pageSize, paginationToken);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#listPackingGroupItems");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. |
 **packingGroupId** | **String**| Identifier of a packing group. |
 **pageSize** | **Integer**| The number of packing group items to return in the response matching the given query. | [optional] [default to 10] [enum: ]
 **paginationToken** | **String**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional]

### Return type

[**ListPackingGroupItemsResponse**](ListPackingGroupItemsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listPackingOptions"></a>
# **listPackingOptions**
> ListPackingOptionsResponse listPackingOptions(inboundPlanId, pageSize, paginationToken)

listPackingOptions

Retrieves a list of all packing options for an inbound plan. Packing options must first be generated by the corresponding operation before becoming available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
String inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
Integer pageSize = 10; // Integer | The number of packing options to return in the response matching the given query.
String paginationToken = "paginationToken_example"; // String | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
try {
    ListPackingOptionsResponse result = apiInstance.listPackingOptions(inboundPlanId, pageSize, paginationToken);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#listPackingOptions");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. |
 **pageSize** | **Integer**| The number of packing options to return in the response matching the given query. | [optional] [default to 10] [enum: ]
 **paginationToken** | **String**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional]

### Return type

[**ListPackingOptionsResponse**](ListPackingOptionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listPlacementOptions"></a>
# **listPlacementOptions**
> ListPlacementOptionsResponse listPlacementOptions(inboundPlanId, pageSize, paginationToken)

listPlacementOptions

Provides a list of all placement options for an inbound plan. Placement options must first be generated by the corresponding operation before becoming available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
String inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
Integer pageSize = 10; // Integer | The number of placement options to return in the response matching the given query.
String paginationToken = "paginationToken_example"; // String | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
try {
    ListPlacementOptionsResponse result = apiInstance.listPlacementOptions(inboundPlanId, pageSize, paginationToken);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#listPlacementOptions");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. |
 **pageSize** | **Integer**| The number of placement options to return in the response matching the given query. | [optional] [default to 10] [enum: ]
 **paginationToken** | **String**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional]

### Return type

[**ListPlacementOptionsResponse**](ListPlacementOptionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listPrepDetails"></a>
# **listPrepDetails**
> ListPrepDetailsResponse listPrepDetails(marketplaceId, mskus)

listPrepDetails

Get preparation details for a list of MSKUs in a specified marketplace.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
String marketplaceId = "marketplaceId_example"; // String | The marketplace ID. For a list of possible values, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
List<String> mskus = Arrays.asList("mskus_example"); // List<String> | A list of merchant SKUs, a merchant-supplied identifier of a specific SKU.
try {
    ListPrepDetailsResponse result = apiInstance.listPrepDetails(marketplaceId, mskus);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#listPrepDetails");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceId** | **String**| The marketplace ID. For a list of possible values, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). |
 **mskus** | [**List&lt;String&gt;**](String.md)| A list of merchant SKUs, a merchant-supplied identifier of a specific SKU. |

### Return type

[**ListPrepDetailsResponse**](ListPrepDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listShipmentBoxes"></a>
# **listShipmentBoxes**
> ListShipmentBoxesResponse listShipmentBoxes(inboundPlanId, shipmentId, pageSize, paginationToken)

listShipmentBoxes

Provides a paginated list of box packages in a shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
String inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
String shipmentId = "shipmentId_example"; // String | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
Integer pageSize = 10; // Integer | The number of boxes to return in the response matching the given query.
String paginationToken = "paginationToken_example"; // String | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
try {
    ListShipmentBoxesResponse result = apiInstance.listShipmentBoxes(inboundPlanId, shipmentId, pageSize, paginationToken);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#listShipmentBoxes");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. |
 **shipmentId** | **String**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. |
 **pageSize** | **Integer**| The number of boxes to return in the response matching the given query. | [optional] [default to 10] [enum: ]
 **paginationToken** | **String**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional]

### Return type

[**ListShipmentBoxesResponse**](ListShipmentBoxesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listShipmentContentUpdatePreviews"></a>
# **listShipmentContentUpdatePreviews**
> ListShipmentContentUpdatePreviewsResponse listShipmentContentUpdatePreviews(inboundPlanId, shipmentId, pageSize, paginationToken)

listShipmentContentUpdatePreviews

Retrieve a paginated list of shipment content update previews for a given shipment. The shipment content update preview is a summary of the requested shipment content changes along with the transportation cost implications of the change that can only be confirmed prior to the expiry date specified.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
String inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
String shipmentId = "shipmentId_example"; // String | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
Integer pageSize = 10; // Integer | The number of content update previews to return.
String paginationToken = "paginationToken_example"; // String | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
try {
    ListShipmentContentUpdatePreviewsResponse result = apiInstance.listShipmentContentUpdatePreviews(inboundPlanId, shipmentId, pageSize, paginationToken);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#listShipmentContentUpdatePreviews");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. |
 **shipmentId** | **String**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. |
 **pageSize** | **Integer**| The number of content update previews to return. | [optional] [default to 10] [enum: ]
 **paginationToken** | **String**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional]

### Return type

[**ListShipmentContentUpdatePreviewsResponse**](ListShipmentContentUpdatePreviewsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listShipmentItems"></a>
# **listShipmentItems**
> ListShipmentItemsResponse listShipmentItems(inboundPlanId, shipmentId, pageSize, paginationToken)

listShipmentItems

Provides a paginated list of item packages in a shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
String inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
String shipmentId = "shipmentId_example"; // String | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
Integer pageSize = 10; // Integer | The number of items to return in the response matching the given query.
String paginationToken = "paginationToken_example"; // String | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
try {
    ListShipmentItemsResponse result = apiInstance.listShipmentItems(inboundPlanId, shipmentId, pageSize, paginationToken);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#listShipmentItems");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. |
 **shipmentId** | **String**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. |
 **pageSize** | **Integer**| The number of items to return in the response matching the given query. | [optional] [default to 10] [enum: ]
 **paginationToken** | **String**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional]

### Return type

[**ListShipmentItemsResponse**](ListShipmentItemsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listShipmentPallets"></a>
# **listShipmentPallets**
> ListShipmentPalletsResponse listShipmentPallets(inboundPlanId, shipmentId, pageSize, paginationToken)

listShipmentPallets

Provides a paginated list of pallet packages in a shipment. A palletized shipment will have pallets when the related details are provided after generating Less-Than-Truckload (LTL) carrier shipments.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
String inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
String shipmentId = "shipmentId_example"; // String | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
Integer pageSize = 10; // Integer | The number of pallets to return in the response matching the given query.
String paginationToken = "paginationToken_example"; // String | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
try {
    ListShipmentPalletsResponse result = apiInstance.listShipmentPallets(inboundPlanId, shipmentId, pageSize, paginationToken);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#listShipmentPallets");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. |
 **shipmentId** | **String**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. |
 **pageSize** | **Integer**| The number of pallets to return in the response matching the given query. | [optional] [default to 10] [enum: ]
 **paginationToken** | **String**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional]

### Return type

[**ListShipmentPalletsResponse**](ListShipmentPalletsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listTransportationOptions"></a>
# **listTransportationOptions**
> ListTransportationOptionsResponse listTransportationOptions(inboundPlanId, pageSize, paginationToken, placementOptionId, shipmentId)

listTransportationOptions

Retrieves all transportation options for a shipment. Transportation options must first be generated by the &#x60;generateTransportationOptions&#x60; operation before becoming available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
String inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
Integer pageSize = 10; // Integer | The number of transportation options to return in the response matching the given query.
String paginationToken = "paginationToken_example"; // String | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
String placementOptionId = "placementOptionId_example"; // String | The placement option to get transportation options for. Either `placementOptionId` or `shipmentId` must be specified.
String shipmentId = "shipmentId_example"; // String | The shipment to get transportation options for. Either `placementOptionId` or `shipmentId` must be specified.
try {
    ListTransportationOptionsResponse result = apiInstance.listTransportationOptions(inboundPlanId, pageSize, paginationToken, placementOptionId, shipmentId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#listTransportationOptions");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. |
 **pageSize** | **Integer**| The number of transportation options to return in the response matching the given query. | [optional] [default to 10] [enum: ]
 **paginationToken** | **String**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional]
 **placementOptionId** | **String**| The placement option to get transportation options for. Either &#x60;placementOptionId&#x60; or &#x60;shipmentId&#x60; must be specified. | [optional]
 **shipmentId** | **String**| The shipment to get transportation options for. Either &#x60;placementOptionId&#x60; or &#x60;shipmentId&#x60; must be specified. | [optional]

### Return type

[**ListTransportationOptionsResponse**](ListTransportationOptionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="scheduleSelfShipAppointment"></a>
# **scheduleSelfShipAppointment**
> ScheduleSelfShipAppointmentResponse scheduleSelfShipAppointment(body, inboundPlanId, shipmentId, slotId)

scheduleSelfShipAppointment

Confirms or reschedules a self-ship appointment slot against a shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
ScheduleSelfShipAppointmentRequest body = new ScheduleSelfShipAppointmentRequest(); // ScheduleSelfShipAppointmentRequest | The body of the request to `scheduleSelfShipAppointment`.
String inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
String shipmentId = "shipmentId_example"; // String | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
String slotId = "slotId_example"; // String | An identifier to a self-ship appointment slot.
try {
    ScheduleSelfShipAppointmentResponse result = apiInstance.scheduleSelfShipAppointment(body, inboundPlanId, shipmentId, slotId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#scheduleSelfShipAppointment");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ScheduleSelfShipAppointmentRequest**](ScheduleSelfShipAppointmentRequest.md)| The body of the request to &#x60;scheduleSelfShipAppointment&#x60;. |
 **inboundPlanId** | **String**| Identifier of an inbound plan. |
 **shipmentId** | **String**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. |
 **slotId** | **String**| An identifier to a self-ship appointment slot. |

### Return type

[**ScheduleSelfShipAppointmentResponse**](ScheduleSelfShipAppointmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setPackingInformation"></a>
# **setPackingInformation**
> SetPackingInformationResponse setPackingInformation(body, inboundPlanId)

setPackingInformation

Sets packing information for an inbound plan. This should be called after an inbound plan is created to populate the box level information required for planning and transportation estimates.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
SetPackingInformationRequest body = new SetPackingInformationRequest(); // SetPackingInformationRequest | The body of the request to `setPackingInformation`.
String inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
try {
    SetPackingInformationResponse result = apiInstance.setPackingInformation(body, inboundPlanId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#setPackingInformation");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SetPackingInformationRequest**](SetPackingInformationRequest.md)| The body of the request to &#x60;setPackingInformation&#x60;. |
 **inboundPlanId** | **String**| Identifier of an inbound plan. |

### Return type

[**SetPackingInformationResponse**](SetPackingInformationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setPrepDetails"></a>
# **setPrepDetails**
> SetPrepDetailsResponse setPrepDetails(body)

setPrepDetails

Set the preparation details for a list of MSKUs in a specified marketplace.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
SetPrepDetailsRequest body = new SetPrepDetailsRequest(); // SetPrepDetailsRequest | The body of the request to `setPrepDetails`.
try {
    SetPrepDetailsResponse result = apiInstance.setPrepDetails(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#setPrepDetails");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SetPrepDetailsRequest**](SetPrepDetailsRequest.md)| The body of the request to &#x60;setPrepDetails&#x60;. |

### Return type

[**SetPrepDetailsResponse**](SetPrepDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateInboundPlanName"></a>
# **updateInboundPlanName**
> updateInboundPlanName(body, inboundPlanId)

updateInboundPlanName

Updates the name of an existing inbound plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
UpdateInboundPlanNameRequest body = new UpdateInboundPlanNameRequest(); // UpdateInboundPlanNameRequest | The body of the request to `updateInboundPlanName`.
String inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
try {
    apiInstance.updateInboundPlanName(body, inboundPlanId);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#updateInboundPlanName");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateInboundPlanNameRequest**](UpdateInboundPlanNameRequest.md)| The body of the request to &#x60;updateInboundPlanName&#x60;. |
 **inboundPlanId** | **String**| Identifier of an inbound plan. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateItemComplianceDetails"></a>
# **updateItemComplianceDetails**
> UpdateItemComplianceDetailsResponse updateItemComplianceDetails(body, marketplaceId)

updateItemComplianceDetails

Update compliance details for a list of MSKUs. The details provided here are only used for the India (IN - A21TJRUUN4KGV) marketplace compliance validation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
UpdateItemComplianceDetailsRequest body = new UpdateItemComplianceDetailsRequest(); // UpdateItemComplianceDetailsRequest | The body of the request to `updateItemComplianceDetails`.
String marketplaceId = "marketplaceId_example"; // String | The Marketplace ID. For a list of possible values, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
try {
    UpdateItemComplianceDetailsResponse result = apiInstance.updateItemComplianceDetails(body, marketplaceId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#updateItemComplianceDetails");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateItemComplianceDetailsRequest**](UpdateItemComplianceDetailsRequest.md)| The body of the request to &#x60;updateItemComplianceDetails&#x60;. |
 **marketplaceId** | **String**| The Marketplace ID. For a list of possible values, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). |

### Return type

[**UpdateItemComplianceDetailsResponse**](UpdateItemComplianceDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateShipmentName"></a>
# **updateShipmentName**
> updateShipmentName(body, inboundPlanId, shipmentId)

updateShipmentName

Updates the name of an existing shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
UpdateShipmentNameRequest body = new UpdateShipmentNameRequest(); // UpdateShipmentNameRequest | The body of the request to `updateShipmentName`.
String inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
String shipmentId = "shipmentId_example"; // String | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
try {
    apiInstance.updateShipmentName(body, inboundPlanId, shipmentId);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#updateShipmentName");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateShipmentNameRequest**](UpdateShipmentNameRequest.md)| The body of the request to &#x60;updateShipmentName&#x60;. |
 **inboundPlanId** | **String**| Identifier of an inbound plan. |
 **shipmentId** | **String**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateShipmentSourceAddress"></a>
# **updateShipmentSourceAddress**
> UpdateShipmentSourceAddressResponse updateShipmentSourceAddress(body, inboundPlanId, shipmentId)

updateShipmentSourceAddress

Updates the source address of an existing shipment. The shipment source address can only be updated prior to the confirmation of the shipment carriers. As a result of the updated source address, existing transportation options will be invalidated and will need to be regenerated to capture the potential difference in transportation options and quotes due to the new source address.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
UpdateShipmentSourceAddressRequest body = new UpdateShipmentSourceAddressRequest(); // UpdateShipmentSourceAddressRequest | The body of the request to `updateShipmentSourceAddress`.
String inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
String shipmentId = "shipmentId_example"; // String | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
try {
    UpdateShipmentSourceAddressResponse result = apiInstance.updateShipmentSourceAddress(body, inboundPlanId, shipmentId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#updateShipmentSourceAddress");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateShipmentSourceAddressRequest**](UpdateShipmentSourceAddressRequest.md)| The body of the request to &#x60;updateShipmentSourceAddress&#x60;. |
 **inboundPlanId** | **String**| Identifier of an inbound plan. |
 **shipmentId** | **String**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. |

### Return type

[**UpdateShipmentSourceAddressResponse**](UpdateShipmentSourceAddressResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateShipmentTrackingDetails"></a>
# **updateShipmentTrackingDetails**
> UpdateShipmentTrackingDetailsResponse updateShipmentTrackingDetails(body, inboundPlanId, shipmentId)

updateShipmentTrackingDetails

Updates a shipment&#x27;s tracking details.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.FulfillmentInboundApi;


FulfillmentInboundApi apiInstance = new FulfillmentInboundApi();
UpdateShipmentTrackingDetailsRequest body = new UpdateShipmentTrackingDetailsRequest(); // UpdateShipmentTrackingDetailsRequest | The body of the request to `updateShipmentTrackingDetails`.
String inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
String shipmentId = "shipmentId_example"; // String | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
try {
    UpdateShipmentTrackingDetailsResponse result = apiInstance.updateShipmentTrackingDetails(body, inboundPlanId, shipmentId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FulfillmentInboundApi#updateShipmentTrackingDetails");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateShipmentTrackingDetailsRequest**](UpdateShipmentTrackingDetailsRequest.md)| The body of the request to &#x60;updateShipmentTrackingDetails&#x60;. |
 **inboundPlanId** | **String**| Identifier of an inbound plan. |
 **shipmentId** | **String**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. |

### Return type

[**UpdateShipmentTrackingDetailsResponse**](UpdateShipmentTrackingDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

