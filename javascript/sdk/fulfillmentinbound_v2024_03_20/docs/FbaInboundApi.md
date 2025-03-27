# TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelInboundPlan**](FbaInboundApi.md#cancelInboundPlan) | **PUT** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/cancellation | 
[**cancelSelfShipAppointment**](FbaInboundApi.md#cancelSelfShipAppointment) | **PUT** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/selfShipAppointmentCancellation | 
[**confirmDeliveryWindowOptions**](FbaInboundApi.md#confirmDeliveryWindowOptions) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/deliveryWindowOptions/{deliveryWindowOptionId}/confirmation | 
[**confirmPackingOption**](FbaInboundApi.md#confirmPackingOption) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/packingOptions/{packingOptionId}/confirmation | 
[**confirmPlacementOption**](FbaInboundApi.md#confirmPlacementOption) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/placementOptions/{placementOptionId}/confirmation | 
[**confirmShipmentContentUpdatePreview**](FbaInboundApi.md#confirmShipmentContentUpdatePreview) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/contentUpdatePreviews/{contentUpdatePreviewId}/confirmation | 
[**confirmTransportationOptions**](FbaInboundApi.md#confirmTransportationOptions) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/transportationOptions/confirmation | 
[**createInboundPlan**](FbaInboundApi.md#createInboundPlan) | **POST** /inbound/fba/2024-03-20/inboundPlans | 
[**createMarketplaceItemLabels**](FbaInboundApi.md#createMarketplaceItemLabels) | **POST** /inbound/fba/2024-03-20/items/labels | 
[**generateDeliveryWindowOptions**](FbaInboundApi.md#generateDeliveryWindowOptions) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/deliveryWindowOptions | 
[**generatePackingOptions**](FbaInboundApi.md#generatePackingOptions) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/packingOptions | 
[**generatePlacementOptions**](FbaInboundApi.md#generatePlacementOptions) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/placementOptions | 
[**generateSelfShipAppointmentSlots**](FbaInboundApi.md#generateSelfShipAppointmentSlots) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/selfShipAppointmentSlots | 
[**generateShipmentContentUpdatePreviews**](FbaInboundApi.md#generateShipmentContentUpdatePreviews) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/contentUpdatePreviews | 
[**generateTransportationOptions**](FbaInboundApi.md#generateTransportationOptions) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/transportationOptions | 
[**getDeliveryChallanDocument**](FbaInboundApi.md#getDeliveryChallanDocument) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/deliveryChallanDocument | 
[**getInboundOperationStatus**](FbaInboundApi.md#getInboundOperationStatus) | **GET** /inbound/fba/2024-03-20/operations/{operationId} | 
[**getInboundPlan**](FbaInboundApi.md#getInboundPlan) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId} | 
[**getSelfShipAppointmentSlots**](FbaInboundApi.md#getSelfShipAppointmentSlots) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/selfShipAppointmentSlots | 
[**getShipment**](FbaInboundApi.md#getShipment) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId} | 
[**getShipmentContentUpdatePreview**](FbaInboundApi.md#getShipmentContentUpdatePreview) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/contentUpdatePreviews/{contentUpdatePreviewId} | 
[**listDeliveryWindowOptions**](FbaInboundApi.md#listDeliveryWindowOptions) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/deliveryWindowOptions | 
[**listInboundPlanBoxes**](FbaInboundApi.md#listInboundPlanBoxes) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/boxes | 
[**listInboundPlanItems**](FbaInboundApi.md#listInboundPlanItems) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/items | 
[**listInboundPlanPallets**](FbaInboundApi.md#listInboundPlanPallets) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/pallets | 
[**listInboundPlans**](FbaInboundApi.md#listInboundPlans) | **GET** /inbound/fba/2024-03-20/inboundPlans | 
[**listItemComplianceDetails**](FbaInboundApi.md#listItemComplianceDetails) | **GET** /inbound/fba/2024-03-20/items/compliance | 
[**listPackingGroupBoxes**](FbaInboundApi.md#listPackingGroupBoxes) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/packingGroups/{packingGroupId}/boxes | 
[**listPackingGroupItems**](FbaInboundApi.md#listPackingGroupItems) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/packingGroups/{packingGroupId}/items | 
[**listPackingOptions**](FbaInboundApi.md#listPackingOptions) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/packingOptions | 
[**listPlacementOptions**](FbaInboundApi.md#listPlacementOptions) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/placementOptions | 
[**listPrepDetails**](FbaInboundApi.md#listPrepDetails) | **GET** /inbound/fba/2024-03-20/items/prepDetails | 
[**listShipmentBoxes**](FbaInboundApi.md#listShipmentBoxes) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/boxes | 
[**listShipmentContentUpdatePreviews**](FbaInboundApi.md#listShipmentContentUpdatePreviews) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/contentUpdatePreviews | 
[**listShipmentItems**](FbaInboundApi.md#listShipmentItems) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/items | 
[**listShipmentPallets**](FbaInboundApi.md#listShipmentPallets) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/pallets | 
[**listTransportationOptions**](FbaInboundApi.md#listTransportationOptions) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/transportationOptions | 
[**scheduleSelfShipAppointment**](FbaInboundApi.md#scheduleSelfShipAppointment) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/selfShipAppointmentSlots/{slotId}/schedule | 
[**setPackingInformation**](FbaInboundApi.md#setPackingInformation) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/packingInformation | 
[**setPrepDetails**](FbaInboundApi.md#setPrepDetails) | **POST** /inbound/fba/2024-03-20/items/prepDetails | 
[**updateInboundPlanName**](FbaInboundApi.md#updateInboundPlanName) | **PUT** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/name | 
[**updateItemComplianceDetails**](FbaInboundApi.md#updateItemComplianceDetails) | **PUT** /inbound/fba/2024-03-20/items/compliance | 
[**updateShipmentName**](FbaInboundApi.md#updateShipmentName) | **PUT** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/name | 
[**updateShipmentSourceAddress**](FbaInboundApi.md#updateShipmentSourceAddress) | **PUT** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/sourceAddress | 
[**updateShipmentTrackingDetails**](FbaInboundApi.md#updateShipmentTrackingDetails) | **PUT** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/trackingDetails | 



## cancelInboundPlan

> CancelInboundPlanResponse cancelInboundPlan(inboundPlanId)



Cancels an Inbound Plan. Charges may apply if the cancellation is performed outside of a void window. The window for Amazon Partnered Carriers is 24 hours for Small Parcel Delivery (SPD) and one hour for Less-Than-Truckload (LTL) carrier shipments.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
apiInstance.cancelInboundPlan(inboundPlanId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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


## cancelSelfShipAppointment

> CancelSelfShipAppointmentResponse cancelSelfShipAppointment(inboundPlanId, shipmentId, body)



Cancels a self-ship appointment slot against a shipment. Only available in the following [marketplaces](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids): MX, BR, EG, SA, AE, IN.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api). 

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
let shipmentId = "shipmentId_example"; // String | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
let body = new TheSellingPartnerApiForFbaInboundOperations.CancelSelfShipAppointmentRequest(); // CancelSelfShipAppointmentRequest | The body of the request to `cancelSelfShipAppointment`.
apiInstance.cancelSelfShipAppointment(inboundPlanId, shipmentId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. | 
 **shipmentId** | **String**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. | 
 **body** | [**CancelSelfShipAppointmentRequest**](CancelSelfShipAppointmentRequest.md)| The body of the request to &#x60;cancelSelfShipAppointment&#x60;. | 

### Return type

[**CancelSelfShipAppointmentResponse**](CancelSelfShipAppointmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## confirmDeliveryWindowOptions

> ConfirmDeliveryWindowOptionsResponse confirmDeliveryWindowOptions(inboundPlanId, shipmentId, deliveryWindowOptionId)



Confirms the delivery window option for chosen shipment within an inbound plan. A placement option must be confirmed prior to use of this API. Once confirmed, new delivery window options cannot be generated, but the chosen delivery window option can be updated before shipment closure. The window is used to provide the expected time when a shipment will arrive at the warehouse. All transportation options which have the program &#x60;CONFIRMED_DELIVERY_WINDOW&#x60; require a delivery window to be confirmed prior to transportation option confirmation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
let shipmentId = "shipmentId_example"; // String | The shipment to confirm the delivery window option for.
let deliveryWindowOptionId = "deliveryWindowOptionId_example"; // String | The id of the delivery window option to be confirmed.
apiInstance.confirmDeliveryWindowOptions(inboundPlanId, shipmentId, deliveryWindowOptionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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


## confirmPackingOption

> ConfirmPackingOptionResponse confirmPackingOption(inboundPlanId, packingOptionId)



Confirms the packing option for an inbound plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
let packingOptionId = "packingOptionId_example"; // String | Identifier of a packing option.
apiInstance.confirmPackingOption(inboundPlanId, packingOptionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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


## confirmPlacementOption

> ConfirmPlacementOptionResponse confirmPlacementOption(inboundPlanId, placementOptionId)



Confirms the placement option for an inbound plan. Once confirmed, it cannot be changed for the Inbound Plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
let placementOptionId = "placementOptionId_example"; // String | The identifier of a placement option. A placement option represents the shipment splits and destinations of SKUs.
apiInstance.confirmPlacementOption(inboundPlanId, placementOptionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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


## confirmShipmentContentUpdatePreview

> ConfirmShipmentContentUpdatePreviewResponse confirmShipmentContentUpdatePreview(inboundPlanId, shipmentId, contentUpdatePreviewId)



Confirm a shipment content update preview and accept the changes in transportation cost.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
let shipmentId = "shipmentId_example"; // String | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
let contentUpdatePreviewId = "contentUpdatePreviewId_example"; // String | Identifier of a content update preview.
apiInstance.confirmShipmentContentUpdatePreview(inboundPlanId, shipmentId, contentUpdatePreviewId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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


## confirmTransportationOptions

> ConfirmTransportationOptionsResponse confirmTransportationOptions(inboundPlanId, body)



Confirms all the transportation options for an inbound plan. A placement option must be confirmed prior to use of this API. Once confirmed, new transportation options can not be generated or confirmed for the Inbound Plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
let body = new TheSellingPartnerApiForFbaInboundOperations.ConfirmTransportationOptionsRequest(); // ConfirmTransportationOptionsRequest | The body of the request to `confirmTransportationOptions`.
apiInstance.confirmTransportationOptions(inboundPlanId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. | 
 **body** | [**ConfirmTransportationOptionsRequest**](ConfirmTransportationOptionsRequest.md)| The body of the request to &#x60;confirmTransportationOptions&#x60;. | 

### Return type

[**ConfirmTransportationOptionsResponse**](ConfirmTransportationOptionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createInboundPlan

> CreateInboundPlanResponse createInboundPlan(body)



Creates an inbound plan. An inbound plan contains all the necessary information to send shipments into Amazon&#39;s fufillment network.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let body = new TheSellingPartnerApiForFbaInboundOperations.CreateInboundPlanRequest(); // CreateInboundPlanRequest | The body of the request to `createInboundPlan`.
apiInstance.createInboundPlan(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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


## createMarketplaceItemLabels

> CreateMarketplaceItemLabelsResponse createMarketplaceItemLabels(body)



For a given marketplace - creates labels for a list of MSKUs.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let body = new TheSellingPartnerApiForFbaInboundOperations.CreateMarketplaceItemLabelsRequest(); // CreateMarketplaceItemLabelsRequest | The body of the request to `createMarketplaceItemLabels`.
apiInstance.createMarketplaceItemLabels(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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


## generateDeliveryWindowOptions

> GenerateDeliveryWindowOptionsResponse generateDeliveryWindowOptions(inboundPlanId, shipmentId)



Generates available delivery window options for a given shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
let shipmentId = "shipmentId_example"; // String | The shipment to generate delivery window options for.
apiInstance.generateDeliveryWindowOptions(inboundPlanId, shipmentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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


## generatePackingOptions

> GeneratePackingOptionsResponse generatePackingOptions(inboundPlanId)



Generates available packing options for the inbound plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
apiInstance.generatePackingOptions(inboundPlanId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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


## generatePlacementOptions

> GeneratePlacementOptionsResponse generatePlacementOptions(inboundPlanId, body)



Generates placement options for the inbound plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
let body = new TheSellingPartnerApiForFbaInboundOperations.GeneratePlacementOptionsRequest(); // GeneratePlacementOptionsRequest | The body of the request to `generatePlacementOptions`.
apiInstance.generatePlacementOptions(inboundPlanId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. | 
 **body** | [**GeneratePlacementOptionsRequest**](GeneratePlacementOptionsRequest.md)| The body of the request to &#x60;generatePlacementOptions&#x60;. | 

### Return type

[**GeneratePlacementOptionsResponse**](GeneratePlacementOptionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## generateSelfShipAppointmentSlots

> GenerateSelfShipAppointmentSlotsResponse generateSelfShipAppointmentSlots(inboundPlanId, shipmentId, body)



Initiates the process of generating the appointment slots list. Only available in the following [marketplaces](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids): MX, BR, EG, SA, AE, IN.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api). 

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
let shipmentId = "shipmentId_example"; // String | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
let body = new TheSellingPartnerApiForFbaInboundOperations.GenerateSelfShipAppointmentSlotsRequest(); // GenerateSelfShipAppointmentSlotsRequest | The body of the request to `generateSelfShipAppointmentSlots`.
apiInstance.generateSelfShipAppointmentSlots(inboundPlanId, shipmentId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. | 
 **shipmentId** | **String**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. | 
 **body** | [**GenerateSelfShipAppointmentSlotsRequest**](GenerateSelfShipAppointmentSlotsRequest.md)| The body of the request to &#x60;generateSelfShipAppointmentSlots&#x60;. | 

### Return type

[**GenerateSelfShipAppointmentSlotsResponse**](GenerateSelfShipAppointmentSlotsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## generateShipmentContentUpdatePreviews

> GenerateShipmentContentUpdatePreviewsResponse generateShipmentContentUpdatePreviews(inboundPlanId, shipmentId, body)



Generate a shipment content update preview given a set of intended boxes and/or items for a shipment with a confirmed carrier. The shipment content update preview will be viewable with the updated costs and contents prior to confirmation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
let shipmentId = "shipmentId_example"; // String | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
let body = new TheSellingPartnerApiForFbaInboundOperations.GenerateShipmentContentUpdatePreviewsRequest(); // GenerateShipmentContentUpdatePreviewsRequest | The body of the request to `generateShipmentContentUpdatePreviews`.
apiInstance.generateShipmentContentUpdatePreviews(inboundPlanId, shipmentId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. | 
 **shipmentId** | **String**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. | 
 **body** | [**GenerateShipmentContentUpdatePreviewsRequest**](GenerateShipmentContentUpdatePreviewsRequest.md)| The body of the request to &#x60;generateShipmentContentUpdatePreviews&#x60;. | 

### Return type

[**GenerateShipmentContentUpdatePreviewsResponse**](GenerateShipmentContentUpdatePreviewsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## generateTransportationOptions

> GenerateTransportationOptionsResponse generateTransportationOptions(inboundPlanId, body)



Generates available transportation options for a given placement option.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
let body = new TheSellingPartnerApiForFbaInboundOperations.GenerateTransportationOptionsRequest(); // GenerateTransportationOptionsRequest | The body of the request to `generateTransportationOptions`.
apiInstance.generateTransportationOptions(inboundPlanId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. | 
 **body** | [**GenerateTransportationOptionsRequest**](GenerateTransportationOptionsRequest.md)| The body of the request to &#x60;generateTransportationOptions&#x60;. | 

### Return type

[**GenerateTransportationOptionsResponse**](GenerateTransportationOptionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getDeliveryChallanDocument

> GetDeliveryChallanDocumentResponse getDeliveryChallanDocument(inboundPlanId, shipmentId)



Provide delivery challan document for PCP transportation in IN marketplace.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
let shipmentId = "shipmentId_example"; // String | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
apiInstance.getDeliveryChallanDocument(inboundPlanId, shipmentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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


## getInboundOperationStatus

> InboundOperationStatus getInboundOperationStatus(operationId)



Gets the status of the processing of an asynchronous API call.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let operationId = "operationId_example"; // String | Identifier of an asynchronous operation.
apiInstance.getInboundOperationStatus(operationId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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


## getInboundPlan

> InboundPlan getInboundPlan(inboundPlanId)



Fetches the top level information about an inbound plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
apiInstance.getInboundPlan(inboundPlanId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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


## getSelfShipAppointmentSlots

> GetSelfShipAppointmentSlotsResponse getSelfShipAppointmentSlots(inboundPlanId, shipmentId, opts)



Retrieves a list of available self-ship appointment slots used to drop off a shipment at a warehouse. Only available in the following [marketplaces](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids): MX, BR, EG, SA, AE, IN.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api). 

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
let shipmentId = "shipmentId_example"; // String | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
let opts = {
  'pageSize': 10, // Number | The number of self ship appointment slots to return in the response matching the given query.
  'paginationToken': "paginationToken_example" // String | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
};
apiInstance.getSelfShipAppointmentSlots(inboundPlanId, shipmentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. | 
 **shipmentId** | **String**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. | 
 **pageSize** | **Number**| The number of self ship appointment slots to return in the response matching the given query. | [optional] [default to 10]
 **paginationToken** | **String**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional] 

### Return type

[**GetSelfShipAppointmentSlotsResponse**](GetSelfShipAppointmentSlotsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getShipment

> Shipment getShipment(inboundPlanId, shipmentId)



Provides the full details for a specific shipment within an inbound plan. The &#x60;transportationOptionId&#x60; inside &#x60;acceptedTransportationSelection&#x60; can be used to retrieve the transportation details for the shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
let shipmentId = "shipmentId_example"; // String | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
apiInstance.getShipment(inboundPlanId, shipmentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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


## getShipmentContentUpdatePreview

> ContentUpdatePreview getShipmentContentUpdatePreview(inboundPlanId, shipmentId, contentUpdatePreviewId)



Retrieve a shipment content update preview which provides a summary of the requested shipment content changes along with the transportation cost implications of the change that can only be confirmed prior to the expiry date specified.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
let shipmentId = "shipmentId_example"; // String | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
let contentUpdatePreviewId = "contentUpdatePreviewId_example"; // String | Identifier of a content update preview.
apiInstance.getShipmentContentUpdatePreview(inboundPlanId, shipmentId, contentUpdatePreviewId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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


## listDeliveryWindowOptions

> ListDeliveryWindowOptionsResponse listDeliveryWindowOptions(inboundPlanId, shipmentId, opts)



Retrieves all delivery window options for a shipment. Delivery window options must first be generated by the &#x60;generateDeliveryWindowOptions&#x60; operation before becoming available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
let shipmentId = "shipmentId_example"; // String | The shipment to get delivery window options for.
let opts = {
  'pageSize': 10, // Number | The number of delivery window options to return in the response matching the given query.
  'paginationToken': "paginationToken_example" // String | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
};
apiInstance.listDeliveryWindowOptions(inboundPlanId, shipmentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. | 
 **shipmentId** | **String**| The shipment to get delivery window options for. | 
 **pageSize** | **Number**| The number of delivery window options to return in the response matching the given query. | [optional] [default to 10]
 **paginationToken** | **String**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional] 

### Return type

[**ListDeliveryWindowOptionsResponse**](ListDeliveryWindowOptionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listInboundPlanBoxes

> ListInboundPlanBoxesResponse listInboundPlanBoxes(inboundPlanId, opts)



Provides a paginated list of box packages in an inbound plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
let opts = {
  'pageSize': 10, // Number | The number of boxes to return in the response matching the given query.
  'paginationToken': "paginationToken_example" // String | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
};
apiInstance.listInboundPlanBoxes(inboundPlanId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. | 
 **pageSize** | **Number**| The number of boxes to return in the response matching the given query. | [optional] [default to 10]
 **paginationToken** | **String**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional] 

### Return type

[**ListInboundPlanBoxesResponse**](ListInboundPlanBoxesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listInboundPlanItems

> ListInboundPlanItemsResponse listInboundPlanItems(inboundPlanId, opts)



Provides a paginated list of item packages in an inbound plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
let opts = {
  'pageSize': 10, // Number | The number of items to return in the response matching the given query.
  'paginationToken': "paginationToken_example" // String | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
};
apiInstance.listInboundPlanItems(inboundPlanId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. | 
 **pageSize** | **Number**| The number of items to return in the response matching the given query. | [optional] [default to 10]
 **paginationToken** | **String**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional] 

### Return type

[**ListInboundPlanItemsResponse**](ListInboundPlanItemsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listInboundPlanPallets

> ListInboundPlanPalletsResponse listInboundPlanPallets(inboundPlanId, opts)



Provides a paginated list of pallet packages in an inbound plan. An inbound plan will have pallets when the related details are provided after generating Less-Than-Truckload (LTL) carrier shipments.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
let opts = {
  'pageSize': 10, // Number | The number of pallets to return in the response matching the given query.
  'paginationToken': "paginationToken_example" // String | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
};
apiInstance.listInboundPlanPallets(inboundPlanId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. | 
 **pageSize** | **Number**| The number of pallets to return in the response matching the given query. | [optional] [default to 10]
 **paginationToken** | **String**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional] 

### Return type

[**ListInboundPlanPalletsResponse**](ListInboundPlanPalletsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listInboundPlans

> ListInboundPlansResponse listInboundPlans(opts)



Provides a list of inbound plans with minimal information.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let opts = {
  'pageSize': 10, // Number | The number of inbound plans to return in the response matching the given query.
  'paginationToken': "paginationToken_example", // String | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
  'status': "status_example", // String | The status of an inbound plan.
  'sortBy': "sortBy_example", // String | Sort by field.
  'sortOrder': "sortOrder_example" // String | The sort order.
};
apiInstance.listInboundPlans(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **Number**| The number of inbound plans to return in the response matching the given query. | [optional] [default to 10]
 **paginationToken** | **String**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional] 
 **status** | **String**| The status of an inbound plan. | [optional] 
 **sortBy** | **String**| Sort by field. | [optional] 
 **sortOrder** | **String**| The sort order. | [optional] 

### Return type

[**ListInboundPlansResponse**](ListInboundPlansResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listItemComplianceDetails

> ListItemComplianceDetailsResponse listItemComplianceDetails(mskus, marketplaceId)



List the inbound compliance details for MSKUs in a given marketplace.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let mskus = ["null"]; // [String] | A list of merchant SKUs, a merchant-supplied identifier of a specific SKU.
let marketplaceId = "marketplaceId_example"; // String | The Marketplace ID. For a list of possible values, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
apiInstance.listItemComplianceDetails(mskus, marketplaceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mskus** | [**[String]**](String.md)| A list of merchant SKUs, a merchant-supplied identifier of a specific SKU. | 
 **marketplaceId** | **String**| The Marketplace ID. For a list of possible values, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). | 

### Return type

[**ListItemComplianceDetailsResponse**](ListItemComplianceDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPackingGroupBoxes

> ListPackingGroupBoxesResponse listPackingGroupBoxes(inboundPlanId, packingGroupId, opts)



Retrieves a page of boxes from a given packing group. These boxes were previously provided through the &#x60;setPackingInformation&#x60; operation. This API is used for workflows where boxes are packed before Amazon determines shipment splits.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
let packingGroupId = "packingGroupId_example"; // String | Identifier of a packing group.
let opts = {
  'pageSize': 10, // Number | The number of packing group boxes to return in the response matching the given query.
  'paginationToken': "paginationToken_example" // String | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
};
apiInstance.listPackingGroupBoxes(inboundPlanId, packingGroupId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. | 
 **packingGroupId** | **String**| Identifier of a packing group. | 
 **pageSize** | **Number**| The number of packing group boxes to return in the response matching the given query. | [optional] [default to 10]
 **paginationToken** | **String**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional] 

### Return type

[**ListPackingGroupBoxesResponse**](ListPackingGroupBoxesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPackingGroupItems

> ListPackingGroupItemsResponse listPackingGroupItems(inboundPlanId, packingGroupId, opts)



Retrieves a page of items in a given packing group. Packing options must first be generated by the corresponding operation before packing group items can be listed.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
let packingGroupId = "packingGroupId_example"; // String | Identifier of a packing group.
let opts = {
  'pageSize': 10, // Number | The number of packing group items to return in the response matching the given query.
  'paginationToken': "paginationToken_example" // String | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
};
apiInstance.listPackingGroupItems(inboundPlanId, packingGroupId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. | 
 **packingGroupId** | **String**| Identifier of a packing group. | 
 **pageSize** | **Number**| The number of packing group items to return in the response matching the given query. | [optional] [default to 10]
 **paginationToken** | **String**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional] 

### Return type

[**ListPackingGroupItemsResponse**](ListPackingGroupItemsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPackingOptions

> ListPackingOptionsResponse listPackingOptions(inboundPlanId, opts)



Retrieves a list of all packing options for an inbound plan. Packing options must first be generated by the corresponding operation before becoming available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
let opts = {
  'pageSize': 10, // Number | The number of packing options to return in the response matching the given query.
  'paginationToken': "paginationToken_example" // String | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
};
apiInstance.listPackingOptions(inboundPlanId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. | 
 **pageSize** | **Number**| The number of packing options to return in the response matching the given query. | [optional] [default to 10]
 **paginationToken** | **String**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional] 

### Return type

[**ListPackingOptionsResponse**](ListPackingOptionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPlacementOptions

> ListPlacementOptionsResponse listPlacementOptions(inboundPlanId, opts)



Provides a list of all placement options for an inbound plan. Placement options must first be generated by the corresponding operation before becoming available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
let opts = {
  'pageSize': 10, // Number | The number of placement options to return in the response matching the given query.
  'paginationToken': "paginationToken_example" // String | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
};
apiInstance.listPlacementOptions(inboundPlanId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. | 
 **pageSize** | **Number**| The number of placement options to return in the response matching the given query. | [optional] [default to 10]
 **paginationToken** | **String**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional] 

### Return type

[**ListPlacementOptionsResponse**](ListPlacementOptionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPrepDetails

> ListPrepDetailsResponse listPrepDetails(marketplaceId, mskus)



Get preparation details for a list of MSKUs in a specified marketplace.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let marketplaceId = "marketplaceId_example"; // String | The marketplace ID. For a list of possible values, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
let mskus = ["null"]; // [String] | A list of merchant SKUs, a merchant-supplied identifier of a specific SKU.
apiInstance.listPrepDetails(marketplaceId, mskus).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceId** | **String**| The marketplace ID. For a list of possible values, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). | 
 **mskus** | [**[String]**](String.md)| A list of merchant SKUs, a merchant-supplied identifier of a specific SKU. | 

### Return type

[**ListPrepDetailsResponse**](ListPrepDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listShipmentBoxes

> ListShipmentBoxesResponse listShipmentBoxes(inboundPlanId, shipmentId, opts)



Provides a paginated list of box packages in a shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
let shipmentId = "shipmentId_example"; // String | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
let opts = {
  'pageSize': 10, // Number | The number of boxes to return in the response matching the given query.
  'paginationToken': "paginationToken_example" // String | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
};
apiInstance.listShipmentBoxes(inboundPlanId, shipmentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. | 
 **shipmentId** | **String**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. | 
 **pageSize** | **Number**| The number of boxes to return in the response matching the given query. | [optional] [default to 10]
 **paginationToken** | **String**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional] 

### Return type

[**ListShipmentBoxesResponse**](ListShipmentBoxesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listShipmentContentUpdatePreviews

> ListShipmentContentUpdatePreviewsResponse listShipmentContentUpdatePreviews(inboundPlanId, shipmentId, opts)



Retrieve a paginated list of shipment content update previews for a given shipment. The shipment content update preview is a summary of the requested shipment content changes along with the transportation cost implications of the change that can only be confirmed prior to the expiry date specified.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
let shipmentId = "shipmentId_example"; // String | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
let opts = {
  'pageSize': 10, // Number | The number of content update previews to return.
  'paginationToken': "paginationToken_example" // String | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
};
apiInstance.listShipmentContentUpdatePreviews(inboundPlanId, shipmentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. | 
 **shipmentId** | **String**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. | 
 **pageSize** | **Number**| The number of content update previews to return. | [optional] [default to 10]
 **paginationToken** | **String**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional] 

### Return type

[**ListShipmentContentUpdatePreviewsResponse**](ListShipmentContentUpdatePreviewsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listShipmentItems

> ListShipmentItemsResponse listShipmentItems(inboundPlanId, shipmentId, opts)



Provides a paginated list of item packages in a shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
let shipmentId = "shipmentId_example"; // String | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
let opts = {
  'pageSize': 10, // Number | The number of items to return in the response matching the given query.
  'paginationToken': "paginationToken_example" // String | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
};
apiInstance.listShipmentItems(inboundPlanId, shipmentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. | 
 **shipmentId** | **String**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. | 
 **pageSize** | **Number**| The number of items to return in the response matching the given query. | [optional] [default to 10]
 **paginationToken** | **String**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional] 

### Return type

[**ListShipmentItemsResponse**](ListShipmentItemsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listShipmentPallets

> ListShipmentPalletsResponse listShipmentPallets(inboundPlanId, shipmentId, opts)



Provides a paginated list of pallet packages in a shipment. A palletized shipment will have pallets when the related details are provided after generating Less-Than-Truckload (LTL) carrier shipments.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
let shipmentId = "shipmentId_example"; // String | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
let opts = {
  'pageSize': 10, // Number | The number of pallets to return in the response matching the given query.
  'paginationToken': "paginationToken_example" // String | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
};
apiInstance.listShipmentPallets(inboundPlanId, shipmentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. | 
 **shipmentId** | **String**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. | 
 **pageSize** | **Number**| The number of pallets to return in the response matching the given query. | [optional] [default to 10]
 **paginationToken** | **String**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional] 

### Return type

[**ListShipmentPalletsResponse**](ListShipmentPalletsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTransportationOptions

> ListTransportationOptionsResponse listTransportationOptions(inboundPlanId, opts)



Retrieves all transportation options for a shipment. Transportation options must first be generated by the &#x60;generateTransportationOptions&#x60; operation before becoming available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
let opts = {
  'pageSize': 10, // Number | The number of transportation options to return in the response matching the given query.
  'paginationToken': "paginationToken_example", // String | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
  'placementOptionId': "placementOptionId_example", // String | The placement option to get transportation options for. Either `placementOptionId` or `shipmentId` must be specified.
  'shipmentId': "shipmentId_example" // String | The shipment to get transportation options for. Either `placementOptionId` or `shipmentId` must be specified.
};
apiInstance.listTransportationOptions(inboundPlanId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. | 
 **pageSize** | **Number**| The number of transportation options to return in the response matching the given query. | [optional] [default to 10]
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


## scheduleSelfShipAppointment

> ScheduleSelfShipAppointmentResponse scheduleSelfShipAppointment(inboundPlanId, shipmentId, slotId, body)



Confirms or reschedules a self-ship appointment slot against a shipment. Only available in the following [marketplaces](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids): MX, BR, EG, SA, AE, IN.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api). 

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
let shipmentId = "shipmentId_example"; // String | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
let slotId = "slotId_example"; // String | An identifier to a self-ship appointment slot.
let body = new TheSellingPartnerApiForFbaInboundOperations.ScheduleSelfShipAppointmentRequest(); // ScheduleSelfShipAppointmentRequest | The body of the request to `scheduleSelfShipAppointment`.
apiInstance.scheduleSelfShipAppointment(inboundPlanId, shipmentId, slotId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. | 
 **shipmentId** | **String**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. | 
 **slotId** | **String**| An identifier to a self-ship appointment slot. | 
 **body** | [**ScheduleSelfShipAppointmentRequest**](ScheduleSelfShipAppointmentRequest.md)| The body of the request to &#x60;scheduleSelfShipAppointment&#x60;. | 

### Return type

[**ScheduleSelfShipAppointmentResponse**](ScheduleSelfShipAppointmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setPackingInformation

> SetPackingInformationResponse setPackingInformation(inboundPlanId, body)



Sets packing information for an inbound plan. This should be called after an inbound plan is created to populate the box level information required for planning and transportation estimates.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
let body = new TheSellingPartnerApiForFbaInboundOperations.SetPackingInformationRequest(); // SetPackingInformationRequest | The body of the request to `setPackingInformation`.
apiInstance.setPackingInformation(inboundPlanId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. | 
 **body** | [**SetPackingInformationRequest**](SetPackingInformationRequest.md)| The body of the request to &#x60;setPackingInformation&#x60;. | 

### Return type

[**SetPackingInformationResponse**](SetPackingInformationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setPrepDetails

> SetPrepDetailsResponse setPrepDetails(body)



Set the preparation details for a list of MSKUs in a specified marketplace.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let body = new TheSellingPartnerApiForFbaInboundOperations.SetPrepDetailsRequest(); // SetPrepDetailsRequest | The body of the request to `setPrepDetails`.
apiInstance.setPrepDetails(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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


## updateInboundPlanName

> updateInboundPlanName(inboundPlanId, body)



Updates the name of an existing inbound plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
let body = new TheSellingPartnerApiForFbaInboundOperations.UpdateInboundPlanNameRequest(); // UpdateInboundPlanNameRequest | The body of the request to `updateInboundPlanName`.
apiInstance.updateInboundPlanName(inboundPlanId, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. | 
 **body** | [**UpdateInboundPlanNameRequest**](UpdateInboundPlanNameRequest.md)| The body of the request to &#x60;updateInboundPlanName&#x60;. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateItemComplianceDetails

> UpdateItemComplianceDetailsResponse updateItemComplianceDetails(marketplaceId, body)



Update compliance details for a list of MSKUs. The details provided here are only used for the India (IN - A21TJRUUN4KGV) marketplace compliance validation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let marketplaceId = "marketplaceId_example"; // String | The Marketplace ID. For a list of possible values, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
let body = new TheSellingPartnerApiForFbaInboundOperations.UpdateItemComplianceDetailsRequest(); // UpdateItemComplianceDetailsRequest | The body of the request to `updateItemComplianceDetails`.
apiInstance.updateItemComplianceDetails(marketplaceId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceId** | **String**| The Marketplace ID. For a list of possible values, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). | 
 **body** | [**UpdateItemComplianceDetailsRequest**](UpdateItemComplianceDetailsRequest.md)| The body of the request to &#x60;updateItemComplianceDetails&#x60;. | 

### Return type

[**UpdateItemComplianceDetailsResponse**](UpdateItemComplianceDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateShipmentName

> updateShipmentName(inboundPlanId, shipmentId, body)



Updates the name of an existing shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
let shipmentId = "shipmentId_example"; // String | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
let body = new TheSellingPartnerApiForFbaInboundOperations.UpdateShipmentNameRequest(); // UpdateShipmentNameRequest | The body of the request to `updateShipmentName`.
apiInstance.updateShipmentName(inboundPlanId, shipmentId, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. | 
 **shipmentId** | **String**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. | 
 **body** | [**UpdateShipmentNameRequest**](UpdateShipmentNameRequest.md)| The body of the request to &#x60;updateShipmentName&#x60;. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateShipmentSourceAddress

> UpdateShipmentSourceAddressResponse updateShipmentSourceAddress(inboundPlanId, shipmentId, body)



Updates the source address of an existing shipment. The shipment source address can only be updated prior to the confirmation of the shipment carriers. As a result of the updated source address, existing transportation options will be invalidated and will need to be regenerated to capture the potential difference in transportation options and quotes due to the new source address.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
let shipmentId = "shipmentId_example"; // String | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
let body = new TheSellingPartnerApiForFbaInboundOperations.UpdateShipmentSourceAddressRequest(); // UpdateShipmentSourceAddressRequest | The body of the request to `updateShipmentSourceAddress`.
apiInstance.updateShipmentSourceAddress(inboundPlanId, shipmentId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. | 
 **shipmentId** | **String**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. | 
 **body** | [**UpdateShipmentSourceAddressRequest**](UpdateShipmentSourceAddressRequest.md)| The body of the request to &#x60;updateShipmentSourceAddress&#x60;. | 

### Return type

[**UpdateShipmentSourceAddressResponse**](UpdateShipmentSourceAddressResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateShipmentTrackingDetails

> UpdateShipmentTrackingDetailsResponse updateShipmentTrackingDetails(inboundPlanId, shipmentId, body)



Updates a shipment&#39;s tracking details.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFbaInboundOperations from 'the_selling_partner_api_for_fba_inbound_operations_';

let apiInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
let inboundPlanId = "inboundPlanId_example"; // String | Identifier of an inbound plan.
let shipmentId = "shipmentId_example"; // String | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
let body = new TheSellingPartnerApiForFbaInboundOperations.UpdateShipmentTrackingDetailsRequest(); // UpdateShipmentTrackingDetailsRequest | The body of the request to `updateShipmentTrackingDetails`.
apiInstance.updateShipmentTrackingDetails(inboundPlanId, shipmentId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inboundPlanId** | **String**| Identifier of an inbound plan. | 
 **shipmentId** | **String**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. | 
 **body** | [**UpdateShipmentTrackingDetailsRequest**](UpdateShipmentTrackingDetailsRequest.md)| The body of the request to &#x60;updateShipmentTrackingDetails&#x60;. | 

### Return type

[**UpdateShipmentTrackingDetailsResponse**](UpdateShipmentTrackingDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

