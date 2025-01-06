# OpenAPI\Client\FulfillmentInboundApi

All URIs are relative to https://sellingpartnerapi-na.amazon.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**cancelInboundPlan()**](FulfillmentInboundApi.md#cancelInboundPlan) | **PUT** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/cancellation | cancelInboundPlan |
| [**cancelSelfShipAppointment()**](FulfillmentInboundApi.md#cancelSelfShipAppointment) | **PUT** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/selfShipAppointmentCancellation | cancelSelfShipAppointment |
| [**confirmDeliveryWindowOptions()**](FulfillmentInboundApi.md#confirmDeliveryWindowOptions) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/deliveryWindowOptions/{deliveryWindowOptionId}/confirmation | confirmDeliveryWindowOptions |
| [**confirmPackingOption()**](FulfillmentInboundApi.md#confirmPackingOption) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/packingOptions/{packingOptionId}/confirmation | confirmPackingOption |
| [**confirmPlacementOption()**](FulfillmentInboundApi.md#confirmPlacementOption) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/placementOptions/{placementOptionId}/confirmation | confirmPlacementOption |
| [**confirmShipmentContentUpdatePreview()**](FulfillmentInboundApi.md#confirmShipmentContentUpdatePreview) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/contentUpdatePreviews/{contentUpdatePreviewId}/confirmation | confirmShipmentContentUpdatePreview |
| [**confirmTransportationOptions()**](FulfillmentInboundApi.md#confirmTransportationOptions) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/transportationOptions/confirmation | confirmTransportationOptions |
| [**createInboundPlan()**](FulfillmentInboundApi.md#createInboundPlan) | **POST** /inbound/fba/2024-03-20/inboundPlans | createInboundPlan |
| [**createMarketplaceItemLabels()**](FulfillmentInboundApi.md#createMarketplaceItemLabels) | **POST** /inbound/fba/2024-03-20/items/labels | createMarketplaceItemLabels |
| [**generateDeliveryWindowOptions()**](FulfillmentInboundApi.md#generateDeliveryWindowOptions) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/deliveryWindowOptions | generateDeliveryWindowOptions |
| [**generatePackingOptions()**](FulfillmentInboundApi.md#generatePackingOptions) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/packingOptions | generatePackingOptions |
| [**generatePlacementOptions()**](FulfillmentInboundApi.md#generatePlacementOptions) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/placementOptions | generatePlacementOptions |
| [**generateSelfShipAppointmentSlots()**](FulfillmentInboundApi.md#generateSelfShipAppointmentSlots) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/selfShipAppointmentSlots | generateSelfShipAppointmentSlots |
| [**generateShipmentContentUpdatePreviews()**](FulfillmentInboundApi.md#generateShipmentContentUpdatePreviews) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/contentUpdatePreviews | generateShipmentContentUpdatePreviews |
| [**generateTransportationOptions()**](FulfillmentInboundApi.md#generateTransportationOptions) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/transportationOptions | generateTransportationOptions |
| [**getDeliveryChallanDocument()**](FulfillmentInboundApi.md#getDeliveryChallanDocument) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/deliveryChallanDocument | getDeliveryChallanDocument |
| [**getInboundOperationStatus()**](FulfillmentInboundApi.md#getInboundOperationStatus) | **GET** /inbound/fba/2024-03-20/operations/{operationId} | getInboundOperationStatus |
| [**getInboundPlan()**](FulfillmentInboundApi.md#getInboundPlan) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId} | getInboundPlan |
| [**getSelfShipAppointmentSlots()**](FulfillmentInboundApi.md#getSelfShipAppointmentSlots) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/selfShipAppointmentSlots | getSelfShipAppointmentSlots |
| [**getShipment()**](FulfillmentInboundApi.md#getShipment) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId} | getShipment |
| [**getShipmentContentUpdatePreview()**](FulfillmentInboundApi.md#getShipmentContentUpdatePreview) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/contentUpdatePreviews/{contentUpdatePreviewId} | getShipmentContentUpdatePreview |
| [**listDeliveryWindowOptions()**](FulfillmentInboundApi.md#listDeliveryWindowOptions) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/deliveryWindowOptions | listDeliveryWindowOptions |
| [**listInboundPlanBoxes()**](FulfillmentInboundApi.md#listInboundPlanBoxes) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/boxes | listInboundPlanBoxes |
| [**listInboundPlanItems()**](FulfillmentInboundApi.md#listInboundPlanItems) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/items | listInboundPlanItems |
| [**listInboundPlanPallets()**](FulfillmentInboundApi.md#listInboundPlanPallets) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/pallets | listInboundPlanPallets |
| [**listInboundPlans()**](FulfillmentInboundApi.md#listInboundPlans) | **GET** /inbound/fba/2024-03-20/inboundPlans | listInboundPlans |
| [**listItemComplianceDetails()**](FulfillmentInboundApi.md#listItemComplianceDetails) | **GET** /inbound/fba/2024-03-20/items/compliance | listItemComplianceDetails |
| [**listPackingGroupBoxes()**](FulfillmentInboundApi.md#listPackingGroupBoxes) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/packingGroups/{packingGroupId}/boxes | listPackingGroupBoxes |
| [**listPackingGroupItems()**](FulfillmentInboundApi.md#listPackingGroupItems) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/packingGroups/{packingGroupId}/items | listPackingGroupItems |
| [**listPackingOptions()**](FulfillmentInboundApi.md#listPackingOptions) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/packingOptions | listPackingOptions |
| [**listPlacementOptions()**](FulfillmentInboundApi.md#listPlacementOptions) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/placementOptions | listPlacementOptions |
| [**listPrepDetails()**](FulfillmentInboundApi.md#listPrepDetails) | **GET** /inbound/fba/2024-03-20/items/prepDetails | listPrepDetails |
| [**listShipmentBoxes()**](FulfillmentInboundApi.md#listShipmentBoxes) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/boxes | listShipmentBoxes |
| [**listShipmentContentUpdatePreviews()**](FulfillmentInboundApi.md#listShipmentContentUpdatePreviews) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/contentUpdatePreviews | listShipmentContentUpdatePreviews |
| [**listShipmentItems()**](FulfillmentInboundApi.md#listShipmentItems) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/items | listShipmentItems |
| [**listShipmentPallets()**](FulfillmentInboundApi.md#listShipmentPallets) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/pallets | listShipmentPallets |
| [**listTransportationOptions()**](FulfillmentInboundApi.md#listTransportationOptions) | **GET** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/transportationOptions | listTransportationOptions |
| [**scheduleSelfShipAppointment()**](FulfillmentInboundApi.md#scheduleSelfShipAppointment) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/selfShipAppointmentSlots/{slotId}/schedule | scheduleSelfShipAppointment |
| [**setPackingInformation()**](FulfillmentInboundApi.md#setPackingInformation) | **POST** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/packingInformation | setPackingInformation |
| [**setPrepDetails()**](FulfillmentInboundApi.md#setPrepDetails) | **POST** /inbound/fba/2024-03-20/items/prepDetails | setPrepDetails |
| [**updateInboundPlanName()**](FulfillmentInboundApi.md#updateInboundPlanName) | **PUT** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/name | updateInboundPlanName |
| [**updateItemComplianceDetails()**](FulfillmentInboundApi.md#updateItemComplianceDetails) | **PUT** /inbound/fba/2024-03-20/items/compliance | updateItemComplianceDetails |
| [**updateShipmentName()**](FulfillmentInboundApi.md#updateShipmentName) | **PUT** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/name | updateShipmentName |
| [**updateShipmentSourceAddress()**](FulfillmentInboundApi.md#updateShipmentSourceAddress) | **PUT** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/sourceAddress | updateShipmentSourceAddress |
| [**updateShipmentTrackingDetails()**](FulfillmentInboundApi.md#updateShipmentTrackingDetails) | **PUT** /inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/trackingDetails | updateShipmentTrackingDetails |


## `cancelInboundPlan()`

```php
cancelInboundPlan($inbound_plan_id): \OpenAPI\Client\Model\fulfillmentInbound\CancelInboundPlanResponse
```

cancelInboundPlan

Cancels an Inbound Plan. Charges may apply if the cancellation is performed outside of a void window. The window for Amazon Partnered Carriers is 24 hours for Small Parcel Delivery (SPD) and one hour for Less-Than-Truckload (LTL) carrier shipments.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inbound_plan_id = 'inbound_plan_id_example'; // string | Identifier of an inbound plan.

try {
    $result = $apiInstance->cancelInboundPlan($inbound_plan_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->cancelInboundPlan: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **inbound_plan_id** | **string**| Identifier of an inbound plan. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\CancelInboundPlanResponse**](../Model/CancelInboundPlanResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `cancelSelfShipAppointment()`

```php
cancelSelfShipAppointment($inbound_plan_id, $shipment_id, $body): \OpenAPI\Client\Model\fulfillmentInbound\CancelSelfShipAppointmentResponse
```

cancelSelfShipAppointment

Cancels a self-ship appointment slot against a shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inbound_plan_id = 'inbound_plan_id_example'; // string | Identifier of an inbound plan.
$shipment_id = 'shipment_id_example'; // string | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
$body = new \OpenAPI\Client\Model\fulfillmentInbound\CancelSelfShipAppointmentRequest(); // \OpenAPI\Client\Model\fulfillmentInbound\CancelSelfShipAppointmentRequest | The body of the request to `cancelSelfShipAppointment`.

try {
    $result = $apiInstance->cancelSelfShipAppointment($inbound_plan_id, $shipment_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->cancelSelfShipAppointment: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **inbound_plan_id** | **string**| Identifier of an inbound plan. | |
| **shipment_id** | **string**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. | |
| **body** | [**\OpenAPI\Client\Model\fulfillmentInbound\CancelSelfShipAppointmentRequest**](../Model/CancelSelfShipAppointmentRequest.md)| The body of the request to &#x60;cancelSelfShipAppointment&#x60;. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\CancelSelfShipAppointmentResponse**](../Model/CancelSelfShipAppointmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `confirmDeliveryWindowOptions()`

```php
confirmDeliveryWindowOptions($inbound_plan_id, $shipment_id, $delivery_window_option_id): \OpenAPI\Client\Model\fulfillmentInbound\ConfirmDeliveryWindowOptionsResponse
```

confirmDeliveryWindowOptions

Confirms the delivery window option for chosen shipment within an inbound plan. A placement option must be confirmed prior to use of this API. Once confirmed, new delivery window options cannot be generated, but the chosen delivery window option can be updated before shipment closure. The window is used to provide the expected time when a shipment will arrive at the warehouse. All transportation options which have the program `CONFIRMED_DELIVERY_WINDOW` require a delivery window to be confirmed prior to transportation option confirmation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inbound_plan_id = 'inbound_plan_id_example'; // string | Identifier of an inbound plan.
$shipment_id = 'shipment_id_example'; // string | The shipment to confirm the delivery window option for.
$delivery_window_option_id = 'delivery_window_option_id_example'; // string | The id of the delivery window option to be confirmed.

try {
    $result = $apiInstance->confirmDeliveryWindowOptions($inbound_plan_id, $shipment_id, $delivery_window_option_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->confirmDeliveryWindowOptions: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **inbound_plan_id** | **string**| Identifier of an inbound plan. | |
| **shipment_id** | **string**| The shipment to confirm the delivery window option for. | |
| **delivery_window_option_id** | **string**| The id of the delivery window option to be confirmed. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\ConfirmDeliveryWindowOptionsResponse**](../Model/ConfirmDeliveryWindowOptionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `confirmPackingOption()`

```php
confirmPackingOption($inbound_plan_id, $packing_option_id): \OpenAPI\Client\Model\fulfillmentInbound\ConfirmPackingOptionResponse
```

confirmPackingOption

Confirms the packing option for an inbound plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inbound_plan_id = 'inbound_plan_id_example'; // string | Identifier of an inbound plan.
$packing_option_id = 'packing_option_id_example'; // string | Identifier of a packing option.

try {
    $result = $apiInstance->confirmPackingOption($inbound_plan_id, $packing_option_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->confirmPackingOption: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **inbound_plan_id** | **string**| Identifier of an inbound plan. | |
| **packing_option_id** | **string**| Identifier of a packing option. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\ConfirmPackingOptionResponse**](../Model/ConfirmPackingOptionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `confirmPlacementOption()`

```php
confirmPlacementOption($inbound_plan_id, $placement_option_id): \OpenAPI\Client\Model\fulfillmentInbound\ConfirmPlacementOptionResponse
```

confirmPlacementOption

Confirms the placement option for an inbound plan. Once confirmed, it cannot be changed for the Inbound Plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inbound_plan_id = 'inbound_plan_id_example'; // string | Identifier of an inbound plan.
$placement_option_id = 'placement_option_id_example'; // string | The identifier of a placement option. A placement option represents the shipment splits and destinations of SKUs.

try {
    $result = $apiInstance->confirmPlacementOption($inbound_plan_id, $placement_option_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->confirmPlacementOption: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **inbound_plan_id** | **string**| Identifier of an inbound plan. | |
| **placement_option_id** | **string**| The identifier of a placement option. A placement option represents the shipment splits and destinations of SKUs. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\ConfirmPlacementOptionResponse**](../Model/ConfirmPlacementOptionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `confirmShipmentContentUpdatePreview()`

```php
confirmShipmentContentUpdatePreview($inbound_plan_id, $shipment_id, $content_update_preview_id): \OpenAPI\Client\Model\fulfillmentInbound\ConfirmShipmentContentUpdatePreviewResponse
```

confirmShipmentContentUpdatePreview

Confirm a shipment content update preview and accept the changes in transportation cost.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inbound_plan_id = 'inbound_plan_id_example'; // string | Identifier of an inbound plan.
$shipment_id = 'shipment_id_example'; // string | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
$content_update_preview_id = 'content_update_preview_id_example'; // string | Identifier of a content update preview.

try {
    $result = $apiInstance->confirmShipmentContentUpdatePreview($inbound_plan_id, $shipment_id, $content_update_preview_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->confirmShipmentContentUpdatePreview: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **inbound_plan_id** | **string**| Identifier of an inbound plan. | |
| **shipment_id** | **string**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. | |
| **content_update_preview_id** | **string**| Identifier of a content update preview. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\ConfirmShipmentContentUpdatePreviewResponse**](../Model/ConfirmShipmentContentUpdatePreviewResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `confirmTransportationOptions()`

```php
confirmTransportationOptions($inbound_plan_id, $body): \OpenAPI\Client\Model\fulfillmentInbound\ConfirmTransportationOptionsResponse
```

confirmTransportationOptions

Confirms all the transportation options for an inbound plan. A placement option must be confirmed prior to use of this API. Once confirmed, new transportation options can not be generated or confirmed for the Inbound Plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inbound_plan_id = 'inbound_plan_id_example'; // string | Identifier of an inbound plan.
$body = new \OpenAPI\Client\Model\fulfillmentInbound\ConfirmTransportationOptionsRequest(); // \OpenAPI\Client\Model\fulfillmentInbound\ConfirmTransportationOptionsRequest | The body of the request to `confirmTransportationOptions`.

try {
    $result = $apiInstance->confirmTransportationOptions($inbound_plan_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->confirmTransportationOptions: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **inbound_plan_id** | **string**| Identifier of an inbound plan. | |
| **body** | [**\OpenAPI\Client\Model\fulfillmentInbound\ConfirmTransportationOptionsRequest**](../Model/ConfirmTransportationOptionsRequest.md)| The body of the request to &#x60;confirmTransportationOptions&#x60;. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\ConfirmTransportationOptionsResponse**](../Model/ConfirmTransportationOptionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createInboundPlan()`

```php
createInboundPlan($body): \OpenAPI\Client\Model\fulfillmentInbound\CreateInboundPlanResponse
```

createInboundPlan

Creates an inbound plan. An inbound plan contains all the necessary information to send shipments into Amazon's fufillment network.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \OpenAPI\Client\Model\fulfillmentInbound\CreateInboundPlanRequest(); // \OpenAPI\Client\Model\fulfillmentInbound\CreateInboundPlanRequest | The body of the request to `createInboundPlan`.

try {
    $result = $apiInstance->createInboundPlan($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->createInboundPlan: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **body** | [**\OpenAPI\Client\Model\fulfillmentInbound\CreateInboundPlanRequest**](../Model/CreateInboundPlanRequest.md)| The body of the request to &#x60;createInboundPlan&#x60;. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\CreateInboundPlanResponse**](../Model/CreateInboundPlanResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createMarketplaceItemLabels()`

```php
createMarketplaceItemLabels($body): \OpenAPI\Client\Model\fulfillmentInbound\CreateMarketplaceItemLabelsResponse
```

createMarketplaceItemLabels

For a given marketplace - creates labels for a list of MSKUs.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \OpenAPI\Client\Model\fulfillmentInbound\CreateMarketplaceItemLabelsRequest(); // \OpenAPI\Client\Model\fulfillmentInbound\CreateMarketplaceItemLabelsRequest | The body of the request to `createMarketplaceItemLabels`.

try {
    $result = $apiInstance->createMarketplaceItemLabels($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->createMarketplaceItemLabels: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **body** | [**\OpenAPI\Client\Model\fulfillmentInbound\CreateMarketplaceItemLabelsRequest**](../Model/CreateMarketplaceItemLabelsRequest.md)| The body of the request to &#x60;createMarketplaceItemLabels&#x60;. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\CreateMarketplaceItemLabelsResponse**](../Model/CreateMarketplaceItemLabelsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `generateDeliveryWindowOptions()`

```php
generateDeliveryWindowOptions($inbound_plan_id, $shipment_id): \OpenAPI\Client\Model\fulfillmentInbound\GenerateDeliveryWindowOptionsResponse
```

generateDeliveryWindowOptions

Generates available delivery window options for a given shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inbound_plan_id = 'inbound_plan_id_example'; // string | Identifier of an inbound plan.
$shipment_id = 'shipment_id_example'; // string | The shipment to generate delivery window options for.

try {
    $result = $apiInstance->generateDeliveryWindowOptions($inbound_plan_id, $shipment_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->generateDeliveryWindowOptions: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **inbound_plan_id** | **string**| Identifier of an inbound plan. | |
| **shipment_id** | **string**| The shipment to generate delivery window options for. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\GenerateDeliveryWindowOptionsResponse**](../Model/GenerateDeliveryWindowOptionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `generatePackingOptions()`

```php
generatePackingOptions($inbound_plan_id): \OpenAPI\Client\Model\fulfillmentInbound\GeneratePackingOptionsResponse
```

generatePackingOptions

Generates available packing options for the inbound plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inbound_plan_id = 'inbound_plan_id_example'; // string | Identifier of an inbound plan.

try {
    $result = $apiInstance->generatePackingOptions($inbound_plan_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->generatePackingOptions: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **inbound_plan_id** | **string**| Identifier of an inbound plan. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\GeneratePackingOptionsResponse**](../Model/GeneratePackingOptionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `generatePlacementOptions()`

```php
generatePlacementOptions($inbound_plan_id, $body): \OpenAPI\Client\Model\fulfillmentInbound\GeneratePlacementOptionsResponse
```

generatePlacementOptions

Generates placement options for the inbound plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inbound_plan_id = 'inbound_plan_id_example'; // string | Identifier of an inbound plan.
$body = new \OpenAPI\Client\Model\fulfillmentInbound\GeneratePlacementOptionsRequest(); // \OpenAPI\Client\Model\fulfillmentInbound\GeneratePlacementOptionsRequest | The body of the request to `generatePlacementOptions`.

try {
    $result = $apiInstance->generatePlacementOptions($inbound_plan_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->generatePlacementOptions: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **inbound_plan_id** | **string**| Identifier of an inbound plan. | |
| **body** | [**\OpenAPI\Client\Model\fulfillmentInbound\GeneratePlacementOptionsRequest**](../Model/GeneratePlacementOptionsRequest.md)| The body of the request to &#x60;generatePlacementOptions&#x60;. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\GeneratePlacementOptionsResponse**](../Model/GeneratePlacementOptionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `generateSelfShipAppointmentSlots()`

```php
generateSelfShipAppointmentSlots($inbound_plan_id, $shipment_id, $body): \OpenAPI\Client\Model\fulfillmentInbound\GenerateSelfShipAppointmentSlotsResponse
```

generateSelfShipAppointmentSlots

Initiates the process of generating the appointment slots list.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inbound_plan_id = 'inbound_plan_id_example'; // string | Identifier of an inbound plan.
$shipment_id = 'shipment_id_example'; // string | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
$body = new \OpenAPI\Client\Model\fulfillmentInbound\GenerateSelfShipAppointmentSlotsRequest(); // \OpenAPI\Client\Model\fulfillmentInbound\GenerateSelfShipAppointmentSlotsRequest | The body of the request to `generateSelfShipAppointmentSlots`.

try {
    $result = $apiInstance->generateSelfShipAppointmentSlots($inbound_plan_id, $shipment_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->generateSelfShipAppointmentSlots: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **inbound_plan_id** | **string**| Identifier of an inbound plan. | |
| **shipment_id** | **string**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. | |
| **body** | [**\OpenAPI\Client\Model\fulfillmentInbound\GenerateSelfShipAppointmentSlotsRequest**](../Model/GenerateSelfShipAppointmentSlotsRequest.md)| The body of the request to &#x60;generateSelfShipAppointmentSlots&#x60;. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\GenerateSelfShipAppointmentSlotsResponse**](../Model/GenerateSelfShipAppointmentSlotsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `generateShipmentContentUpdatePreviews()`

```php
generateShipmentContentUpdatePreviews($inbound_plan_id, $shipment_id, $body): \OpenAPI\Client\Model\fulfillmentInbound\GenerateShipmentContentUpdatePreviewsResponse
```

generateShipmentContentUpdatePreviews

Generate a shipment content update preview given a set of intended boxes and/or items for a shipment with a confirmed carrier. The shipment content update preview will be viewable with the updated costs and contents prior to confirmation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inbound_plan_id = 'inbound_plan_id_example'; // string | Identifier of an inbound plan.
$shipment_id = 'shipment_id_example'; // string | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
$body = new \OpenAPI\Client\Model\fulfillmentInbound\GenerateShipmentContentUpdatePreviewsRequest(); // \OpenAPI\Client\Model\fulfillmentInbound\GenerateShipmentContentUpdatePreviewsRequest | The body of the request to `generateShipmentContentUpdatePreviews`.

try {
    $result = $apiInstance->generateShipmentContentUpdatePreviews($inbound_plan_id, $shipment_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->generateShipmentContentUpdatePreviews: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **inbound_plan_id** | **string**| Identifier of an inbound plan. | |
| **shipment_id** | **string**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. | |
| **body** | [**\OpenAPI\Client\Model\fulfillmentInbound\GenerateShipmentContentUpdatePreviewsRequest**](../Model/GenerateShipmentContentUpdatePreviewsRequest.md)| The body of the request to &#x60;generateShipmentContentUpdatePreviews&#x60;. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\GenerateShipmentContentUpdatePreviewsResponse**](../Model/GenerateShipmentContentUpdatePreviewsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `generateTransportationOptions()`

```php
generateTransportationOptions($inbound_plan_id, $body): \OpenAPI\Client\Model\fulfillmentInbound\GenerateTransportationOptionsResponse
```

generateTransportationOptions

Generates available transportation options for a given placement option.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inbound_plan_id = 'inbound_plan_id_example'; // string | Identifier of an inbound plan.
$body = new \OpenAPI\Client\Model\fulfillmentInbound\GenerateTransportationOptionsRequest(); // \OpenAPI\Client\Model\fulfillmentInbound\GenerateTransportationOptionsRequest | The body of the request to `generateTransportationOptions`.

try {
    $result = $apiInstance->generateTransportationOptions($inbound_plan_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->generateTransportationOptions: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **inbound_plan_id** | **string**| Identifier of an inbound plan. | |
| **body** | [**\OpenAPI\Client\Model\fulfillmentInbound\GenerateTransportationOptionsRequest**](../Model/GenerateTransportationOptionsRequest.md)| The body of the request to &#x60;generateTransportationOptions&#x60;. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\GenerateTransportationOptionsResponse**](../Model/GenerateTransportationOptionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getDeliveryChallanDocument()`

```php
getDeliveryChallanDocument($inbound_plan_id, $shipment_id): \OpenAPI\Client\Model\fulfillmentInbound\GetDeliveryChallanDocumentResponse
```

getDeliveryChallanDocument

Provide delivery challan document for PCP transportation in IN marketplace.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inbound_plan_id = 'inbound_plan_id_example'; // string | Identifier of an inbound plan.
$shipment_id = 'shipment_id_example'; // string | Identifier of a shipment. A shipment contains the boxes and units being inbounded.

try {
    $result = $apiInstance->getDeliveryChallanDocument($inbound_plan_id, $shipment_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->getDeliveryChallanDocument: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **inbound_plan_id** | **string**| Identifier of an inbound plan. | |
| **shipment_id** | **string**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\GetDeliveryChallanDocumentResponse**](../Model/GetDeliveryChallanDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getInboundOperationStatus()`

```php
getInboundOperationStatus($operation_id): \OpenAPI\Client\Model\fulfillmentInbound\InboundOperationStatus
```

getInboundOperationStatus

Gets the status of the processing of an asynchronous API call.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$operation_id = 'operation_id_example'; // string | Identifier of an asynchronous operation.

try {
    $result = $apiInstance->getInboundOperationStatus($operation_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->getInboundOperationStatus: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **operation_id** | **string**| Identifier of an asynchronous operation. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\InboundOperationStatus**](../Model/InboundOperationStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getInboundPlan()`

```php
getInboundPlan($inbound_plan_id): \OpenAPI\Client\Model\fulfillmentInbound\InboundPlan
```

getInboundPlan

Fetches the top level information about an inbound plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inbound_plan_id = 'inbound_plan_id_example'; // string | Identifier of an inbound plan.

try {
    $result = $apiInstance->getInboundPlan($inbound_plan_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->getInboundPlan: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **inbound_plan_id** | **string**| Identifier of an inbound plan. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\InboundPlan**](../Model/InboundPlan.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getSelfShipAppointmentSlots()`

```php
getSelfShipAppointmentSlots($inbound_plan_id, $shipment_id, $page_size, $pagination_token): \OpenAPI\Client\Model\fulfillmentInbound\GetSelfShipAppointmentSlotsResponse
```

getSelfShipAppointmentSlots

Retrieves a list of available self-ship appointment slots used to drop off a shipment at a warehouse.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inbound_plan_id = 'inbound_plan_id_example'; // string | Identifier of an inbound plan.
$shipment_id = 'shipment_id_example'; // string | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
$page_size = 10; // int | The number of self ship appointment slots to return in the response matching the given query.
$pagination_token = 'pagination_token_example'; // string | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.

try {
    $result = $apiInstance->getSelfShipAppointmentSlots($inbound_plan_id, $shipment_id, $page_size, $pagination_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->getSelfShipAppointmentSlots: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **inbound_plan_id** | **string**| Identifier of an inbound plan. | |
| **shipment_id** | **string**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. | |
| **page_size** | **int**| The number of self ship appointment slots to return in the response matching the given query. | [optional] [default to 10] |
| **pagination_token** | **string**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional] |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\GetSelfShipAppointmentSlotsResponse**](../Model/GetSelfShipAppointmentSlotsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getShipment()`

```php
getShipment($inbound_plan_id, $shipment_id): \OpenAPI\Client\Model\fulfillmentInbound\Shipment
```

getShipment

Provides the full details for a specific shipment within an inbound plan. The `transportationOptionId` inside `acceptedTransportationSelection` can be used to retrieve the transportation details for the shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inbound_plan_id = 'inbound_plan_id_example'; // string | Identifier of an inbound plan.
$shipment_id = 'shipment_id_example'; // string | Identifier of a shipment. A shipment contains the boxes and units being inbounded.

try {
    $result = $apiInstance->getShipment($inbound_plan_id, $shipment_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->getShipment: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **inbound_plan_id** | **string**| Identifier of an inbound plan. | |
| **shipment_id** | **string**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\Shipment**](../Model/Shipment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getShipmentContentUpdatePreview()`

```php
getShipmentContentUpdatePreview($inbound_plan_id, $shipment_id, $content_update_preview_id): \OpenAPI\Client\Model\fulfillmentInbound\ContentUpdatePreview
```

getShipmentContentUpdatePreview

Retrieve a shipment content update preview which provides a summary of the requested shipment content changes along with the transportation cost implications of the change that can only be confirmed prior to the expiry date specified.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inbound_plan_id = 'inbound_plan_id_example'; // string | Identifier of an inbound plan.
$shipment_id = 'shipment_id_example'; // string | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
$content_update_preview_id = 'content_update_preview_id_example'; // string | Identifier of a content update preview.

try {
    $result = $apiInstance->getShipmentContentUpdatePreview($inbound_plan_id, $shipment_id, $content_update_preview_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->getShipmentContentUpdatePreview: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **inbound_plan_id** | **string**| Identifier of an inbound plan. | |
| **shipment_id** | **string**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. | |
| **content_update_preview_id** | **string**| Identifier of a content update preview. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\ContentUpdatePreview**](../Model/ContentUpdatePreview.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listDeliveryWindowOptions()`

```php
listDeliveryWindowOptions($inbound_plan_id, $shipment_id, $page_size, $pagination_token): \OpenAPI\Client\Model\fulfillmentInbound\ListDeliveryWindowOptionsResponse
```

listDeliveryWindowOptions

Retrieves all delivery window options for a shipment. Delivery window options must first be generated by the `generateDeliveryWindowOptions` operation before becoming available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inbound_plan_id = 'inbound_plan_id_example'; // string | Identifier of an inbound plan.
$shipment_id = 'shipment_id_example'; // string | The shipment to get delivery window options for.
$page_size = 10; // int | The number of delivery window options to return in the response matching the given query.
$pagination_token = 'pagination_token_example'; // string | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.

try {
    $result = $apiInstance->listDeliveryWindowOptions($inbound_plan_id, $shipment_id, $page_size, $pagination_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->listDeliveryWindowOptions: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **inbound_plan_id** | **string**| Identifier of an inbound plan. | |
| **shipment_id** | **string**| The shipment to get delivery window options for. | |
| **page_size** | **int**| The number of delivery window options to return in the response matching the given query. | [optional] [default to 10] |
| **pagination_token** | **string**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional] |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\ListDeliveryWindowOptionsResponse**](../Model/ListDeliveryWindowOptionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listInboundPlanBoxes()`

```php
listInboundPlanBoxes($inbound_plan_id, $page_size, $pagination_token): \OpenAPI\Client\Model\fulfillmentInbound\ListInboundPlanBoxesResponse
```

listInboundPlanBoxes

Provides a paginated list of box packages in an inbound plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inbound_plan_id = 'inbound_plan_id_example'; // string | Identifier of an inbound plan.
$page_size = 10; // int | The number of boxes to return in the response matching the given query.
$pagination_token = 'pagination_token_example'; // string | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.

try {
    $result = $apiInstance->listInboundPlanBoxes($inbound_plan_id, $page_size, $pagination_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->listInboundPlanBoxes: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **inbound_plan_id** | **string**| Identifier of an inbound plan. | |
| **page_size** | **int**| The number of boxes to return in the response matching the given query. | [optional] [default to 10] |
| **pagination_token** | **string**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional] |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\ListInboundPlanBoxesResponse**](../Model/ListInboundPlanBoxesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listInboundPlanItems()`

```php
listInboundPlanItems($inbound_plan_id, $page_size, $pagination_token): \OpenAPI\Client\Model\fulfillmentInbound\ListInboundPlanItemsResponse
```

listInboundPlanItems

Provides a paginated list of item packages in an inbound plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inbound_plan_id = 'inbound_plan_id_example'; // string | Identifier of an inbound plan.
$page_size = 10; // int | The number of items to return in the response matching the given query.
$pagination_token = 'pagination_token_example'; // string | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.

try {
    $result = $apiInstance->listInboundPlanItems($inbound_plan_id, $page_size, $pagination_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->listInboundPlanItems: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **inbound_plan_id** | **string**| Identifier of an inbound plan. | |
| **page_size** | **int**| The number of items to return in the response matching the given query. | [optional] [default to 10] |
| **pagination_token** | **string**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional] |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\ListInboundPlanItemsResponse**](../Model/ListInboundPlanItemsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listInboundPlanPallets()`

```php
listInboundPlanPallets($inbound_plan_id, $page_size, $pagination_token): \OpenAPI\Client\Model\fulfillmentInbound\ListInboundPlanPalletsResponse
```

listInboundPlanPallets

Provides a paginated list of pallet packages in an inbound plan. An inbound plan will have pallets when the related details are provided after generating Less-Than-Truckload (LTL) carrier shipments.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inbound_plan_id = 'inbound_plan_id_example'; // string | Identifier of an inbound plan.
$page_size = 10; // int | The number of pallets to return in the response matching the given query.
$pagination_token = 'pagination_token_example'; // string | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.

try {
    $result = $apiInstance->listInboundPlanPallets($inbound_plan_id, $page_size, $pagination_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->listInboundPlanPallets: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **inbound_plan_id** | **string**| Identifier of an inbound plan. | |
| **page_size** | **int**| The number of pallets to return in the response matching the given query. | [optional] [default to 10] |
| **pagination_token** | **string**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional] |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\ListInboundPlanPalletsResponse**](../Model/ListInboundPlanPalletsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listInboundPlans()`

```php
listInboundPlans($page_size, $pagination_token, $status, $sort_by, $sort_order): \OpenAPI\Client\Model\fulfillmentInbound\ListInboundPlansResponse
```

listInboundPlans

Provides a list of inbound plans with minimal information.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$page_size = 10; // int | The number of inbound plans to return in the response matching the given query.
$pagination_token = 'pagination_token_example'; // string | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
$status = 'status_example'; // string | The status of an inbound plan.
$sort_by = 'sort_by_example'; // string | Sort by field.
$sort_order = 'sort_order_example'; // string | The sort order.

try {
    $result = $apiInstance->listInboundPlans($page_size, $pagination_token, $status, $sort_by, $sort_order);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->listInboundPlans: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **page_size** | **int**| The number of inbound plans to return in the response matching the given query. | [optional] [default to 10] |
| **pagination_token** | **string**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional] |
| **status** | **string**| The status of an inbound plan. | [optional] |
| **sort_by** | **string**| Sort by field. | [optional] |
| **sort_order** | **string**| The sort order. | [optional] |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\ListInboundPlansResponse**](../Model/ListInboundPlansResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listItemComplianceDetails()`

```php
listItemComplianceDetails($mskus, $marketplace_id): \OpenAPI\Client\Model\fulfillmentInbound\ListItemComplianceDetailsResponse
```

listItemComplianceDetails

List the inbound compliance details for MSKUs in a given marketplace.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$mskus = array('mskus_example'); // string[] | A list of merchant SKUs, a merchant-supplied identifier of a specific SKU.
$marketplace_id = 'marketplace_id_example'; // string | The Marketplace ID. For a list of possible values, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).

try {
    $result = $apiInstance->listItemComplianceDetails($mskus, $marketplace_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->listItemComplianceDetails: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **mskus** | [**string[]**](../Model/string.md)| A list of merchant SKUs, a merchant-supplied identifier of a specific SKU. | |
| **marketplace_id** | **string**| The Marketplace ID. For a list of possible values, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\ListItemComplianceDetailsResponse**](../Model/ListItemComplianceDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listPackingGroupBoxes()`

```php
listPackingGroupBoxes($inbound_plan_id, $packing_group_id, $page_size, $pagination_token): \OpenAPI\Client\Model\fulfillmentInbound\ListPackingGroupBoxesResponse
```

listPackingGroupBoxes

Retrieves a page of boxes from a given packing group. These boxes were previously provided through the `setPackingInformation` operation. This API is used for workflows where boxes are packed before Amazon determines shipment splits.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inbound_plan_id = 'inbound_plan_id_example'; // string | Identifier of an inbound plan.
$packing_group_id = 'packing_group_id_example'; // string | Identifier of a packing group.
$page_size = 10; // int | The number of packing group boxes to return in the response matching the given query.
$pagination_token = 'pagination_token_example'; // string | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.

try {
    $result = $apiInstance->listPackingGroupBoxes($inbound_plan_id, $packing_group_id, $page_size, $pagination_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->listPackingGroupBoxes: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **inbound_plan_id** | **string**| Identifier of an inbound plan. | |
| **packing_group_id** | **string**| Identifier of a packing group. | |
| **page_size** | **int**| The number of packing group boxes to return in the response matching the given query. | [optional] [default to 10] |
| **pagination_token** | **string**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional] |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\ListPackingGroupBoxesResponse**](../Model/ListPackingGroupBoxesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listPackingGroupItems()`

```php
listPackingGroupItems($inbound_plan_id, $packing_group_id, $page_size, $pagination_token): \OpenAPI\Client\Model\fulfillmentInbound\ListPackingGroupItemsResponse
```

listPackingGroupItems

Retrieves a page of items in a given packing group. Packing options must first be generated by the corresponding operation before packing group items can be listed.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inbound_plan_id = 'inbound_plan_id_example'; // string | Identifier of an inbound plan.
$packing_group_id = 'packing_group_id_example'; // string | Identifier of a packing group.
$page_size = 10; // int | The number of packing group items to return in the response matching the given query.
$pagination_token = 'pagination_token_example'; // string | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.

try {
    $result = $apiInstance->listPackingGroupItems($inbound_plan_id, $packing_group_id, $page_size, $pagination_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->listPackingGroupItems: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **inbound_plan_id** | **string**| Identifier of an inbound plan. | |
| **packing_group_id** | **string**| Identifier of a packing group. | |
| **page_size** | **int**| The number of packing group items to return in the response matching the given query. | [optional] [default to 10] |
| **pagination_token** | **string**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional] |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\ListPackingGroupItemsResponse**](../Model/ListPackingGroupItemsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listPackingOptions()`

```php
listPackingOptions($inbound_plan_id, $page_size, $pagination_token): \OpenAPI\Client\Model\fulfillmentInbound\ListPackingOptionsResponse
```

listPackingOptions

Retrieves a list of all packing options for an inbound plan. Packing options must first be generated by the corresponding operation before becoming available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inbound_plan_id = 'inbound_plan_id_example'; // string | Identifier of an inbound plan.
$page_size = 10; // int | The number of packing options to return in the response matching the given query.
$pagination_token = 'pagination_token_example'; // string | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.

try {
    $result = $apiInstance->listPackingOptions($inbound_plan_id, $page_size, $pagination_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->listPackingOptions: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **inbound_plan_id** | **string**| Identifier of an inbound plan. | |
| **page_size** | **int**| The number of packing options to return in the response matching the given query. | [optional] [default to 10] |
| **pagination_token** | **string**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional] |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\ListPackingOptionsResponse**](../Model/ListPackingOptionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listPlacementOptions()`

```php
listPlacementOptions($inbound_plan_id, $page_size, $pagination_token): \OpenAPI\Client\Model\fulfillmentInbound\ListPlacementOptionsResponse
```

listPlacementOptions

Provides a list of all placement options for an inbound plan. Placement options must first be generated by the corresponding operation before becoming available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inbound_plan_id = 'inbound_plan_id_example'; // string | Identifier of an inbound plan.
$page_size = 10; // int | The number of placement options to return in the response matching the given query.
$pagination_token = 'pagination_token_example'; // string | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.

try {
    $result = $apiInstance->listPlacementOptions($inbound_plan_id, $page_size, $pagination_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->listPlacementOptions: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **inbound_plan_id** | **string**| Identifier of an inbound plan. | |
| **page_size** | **int**| The number of placement options to return in the response matching the given query. | [optional] [default to 10] |
| **pagination_token** | **string**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional] |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\ListPlacementOptionsResponse**](../Model/ListPlacementOptionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listPrepDetails()`

```php
listPrepDetails($marketplace_id, $mskus): \OpenAPI\Client\Model\fulfillmentInbound\ListPrepDetailsResponse
```

listPrepDetails

Get preparation details for a list of MSKUs in a specified marketplace.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$marketplace_id = 'marketplace_id_example'; // string | The marketplace ID. For a list of possible values, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
$mskus = array('mskus_example'); // string[] | A list of merchant SKUs, a merchant-supplied identifier of a specific SKU.

try {
    $result = $apiInstance->listPrepDetails($marketplace_id, $mskus);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->listPrepDetails: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **marketplace_id** | **string**| The marketplace ID. For a list of possible values, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). | |
| **mskus** | [**string[]**](../Model/string.md)| A list of merchant SKUs, a merchant-supplied identifier of a specific SKU. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\ListPrepDetailsResponse**](../Model/ListPrepDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listShipmentBoxes()`

```php
listShipmentBoxes($inbound_plan_id, $shipment_id, $page_size, $pagination_token): \OpenAPI\Client\Model\fulfillmentInbound\ListShipmentBoxesResponse
```

listShipmentBoxes

Provides a paginated list of box packages in a shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inbound_plan_id = 'inbound_plan_id_example'; // string | Identifier of an inbound plan.
$shipment_id = 'shipment_id_example'; // string | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
$page_size = 10; // int | The number of boxes to return in the response matching the given query.
$pagination_token = 'pagination_token_example'; // string | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.

try {
    $result = $apiInstance->listShipmentBoxes($inbound_plan_id, $shipment_id, $page_size, $pagination_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->listShipmentBoxes: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **inbound_plan_id** | **string**| Identifier of an inbound plan. | |
| **shipment_id** | **string**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. | |
| **page_size** | **int**| The number of boxes to return in the response matching the given query. | [optional] [default to 10] |
| **pagination_token** | **string**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional] |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\ListShipmentBoxesResponse**](../Model/ListShipmentBoxesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listShipmentContentUpdatePreviews()`

```php
listShipmentContentUpdatePreviews($inbound_plan_id, $shipment_id, $page_size, $pagination_token): \OpenAPI\Client\Model\fulfillmentInbound\ListShipmentContentUpdatePreviewsResponse
```

listShipmentContentUpdatePreviews

Retrieve a paginated list of shipment content update previews for a given shipment. The shipment content update preview is a summary of the requested shipment content changes along with the transportation cost implications of the change that can only be confirmed prior to the expiry date specified.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inbound_plan_id = 'inbound_plan_id_example'; // string | Identifier of an inbound plan.
$shipment_id = 'shipment_id_example'; // string | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
$page_size = 10; // int | The number of content update previews to return.
$pagination_token = 'pagination_token_example'; // string | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.

try {
    $result = $apiInstance->listShipmentContentUpdatePreviews($inbound_plan_id, $shipment_id, $page_size, $pagination_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->listShipmentContentUpdatePreviews: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **inbound_plan_id** | **string**| Identifier of an inbound plan. | |
| **shipment_id** | **string**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. | |
| **page_size** | **int**| The number of content update previews to return. | [optional] [default to 10] |
| **pagination_token** | **string**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional] |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\ListShipmentContentUpdatePreviewsResponse**](../Model/ListShipmentContentUpdatePreviewsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listShipmentItems()`

```php
listShipmentItems($inbound_plan_id, $shipment_id, $page_size, $pagination_token): \OpenAPI\Client\Model\fulfillmentInbound\ListShipmentItemsResponse
```

listShipmentItems

Provides a paginated list of item packages in a shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inbound_plan_id = 'inbound_plan_id_example'; // string | Identifier of an inbound plan.
$shipment_id = 'shipment_id_example'; // string | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
$page_size = 10; // int | The number of items to return in the response matching the given query.
$pagination_token = 'pagination_token_example'; // string | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.

try {
    $result = $apiInstance->listShipmentItems($inbound_plan_id, $shipment_id, $page_size, $pagination_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->listShipmentItems: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **inbound_plan_id** | **string**| Identifier of an inbound plan. | |
| **shipment_id** | **string**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. | |
| **page_size** | **int**| The number of items to return in the response matching the given query. | [optional] [default to 10] |
| **pagination_token** | **string**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional] |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\ListShipmentItemsResponse**](../Model/ListShipmentItemsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listShipmentPallets()`

```php
listShipmentPallets($inbound_plan_id, $shipment_id, $page_size, $pagination_token): \OpenAPI\Client\Model\fulfillmentInbound\ListShipmentPalletsResponse
```

listShipmentPallets

Provides a paginated list of pallet packages in a shipment. A palletized shipment will have pallets when the related details are provided after generating Less-Than-Truckload (LTL) carrier shipments.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inbound_plan_id = 'inbound_plan_id_example'; // string | Identifier of an inbound plan.
$shipment_id = 'shipment_id_example'; // string | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
$page_size = 10; // int | The number of pallets to return in the response matching the given query.
$pagination_token = 'pagination_token_example'; // string | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.

try {
    $result = $apiInstance->listShipmentPallets($inbound_plan_id, $shipment_id, $page_size, $pagination_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->listShipmentPallets: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **inbound_plan_id** | **string**| Identifier of an inbound plan. | |
| **shipment_id** | **string**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. | |
| **page_size** | **int**| The number of pallets to return in the response matching the given query. | [optional] [default to 10] |
| **pagination_token** | **string**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional] |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\ListShipmentPalletsResponse**](../Model/ListShipmentPalletsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listTransportationOptions()`

```php
listTransportationOptions($inbound_plan_id, $page_size, $pagination_token, $placement_option_id, $shipment_id): \OpenAPI\Client\Model\fulfillmentInbound\ListTransportationOptionsResponse
```

listTransportationOptions

Retrieves all transportation options for a shipment. Transportation options must first be generated by the `generateTransportationOptions` operation before becoming available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inbound_plan_id = 'inbound_plan_id_example'; // string | Identifier of an inbound plan.
$page_size = 10; // int | The number of transportation options to return in the response matching the given query.
$pagination_token = 'pagination_token_example'; // string | A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the `pagination` returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result.
$placement_option_id = 'placement_option_id_example'; // string | The placement option to get transportation options for. Either `placementOptionId` or `shipmentId` must be specified.
$shipment_id = 'shipment_id_example'; // string | The shipment to get transportation options for. Either `placementOptionId` or `shipmentId` must be specified.

try {
    $result = $apiInstance->listTransportationOptions($inbound_plan_id, $page_size, $pagination_token, $placement_option_id, $shipment_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->listTransportationOptions: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **inbound_plan_id** | **string**| Identifier of an inbound plan. | |
| **page_size** | **int**| The number of transportation options to return in the response matching the given query. | [optional] [default to 10] |
| **pagination_token** | **string**| A token to fetch a certain page when there are multiple pages worth of results. The value of this token is fetched from the &#x60;pagination&#x60; returned in the API response. In the absence of the token value from the query parameter the API returns the first page of the result. | [optional] |
| **placement_option_id** | **string**| The placement option to get transportation options for. Either &#x60;placementOptionId&#x60; or &#x60;shipmentId&#x60; must be specified. | [optional] |
| **shipment_id** | **string**| The shipment to get transportation options for. Either &#x60;placementOptionId&#x60; or &#x60;shipmentId&#x60; must be specified. | [optional] |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\ListTransportationOptionsResponse**](../Model/ListTransportationOptionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `scheduleSelfShipAppointment()`

```php
scheduleSelfShipAppointment($inbound_plan_id, $shipment_id, $slot_id, $body): \OpenAPI\Client\Model\fulfillmentInbound\ScheduleSelfShipAppointmentResponse
```

scheduleSelfShipAppointment

Confirms or reschedules a self-ship appointment slot against a shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inbound_plan_id = 'inbound_plan_id_example'; // string | Identifier of an inbound plan.
$shipment_id = 'shipment_id_example'; // string | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
$slot_id = 'slot_id_example'; // string | An identifier to a self-ship appointment slot.
$body = new \OpenAPI\Client\Model\fulfillmentInbound\ScheduleSelfShipAppointmentRequest(); // \OpenAPI\Client\Model\fulfillmentInbound\ScheduleSelfShipAppointmentRequest | The body of the request to `scheduleSelfShipAppointment`.

try {
    $result = $apiInstance->scheduleSelfShipAppointment($inbound_plan_id, $shipment_id, $slot_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->scheduleSelfShipAppointment: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **inbound_plan_id** | **string**| Identifier of an inbound plan. | |
| **shipment_id** | **string**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. | |
| **slot_id** | **string**| An identifier to a self-ship appointment slot. | |
| **body** | [**\OpenAPI\Client\Model\fulfillmentInbound\ScheduleSelfShipAppointmentRequest**](../Model/ScheduleSelfShipAppointmentRequest.md)| The body of the request to &#x60;scheduleSelfShipAppointment&#x60;. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\ScheduleSelfShipAppointmentResponse**](../Model/ScheduleSelfShipAppointmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `setPackingInformation()`

```php
setPackingInformation($inbound_plan_id, $body): \OpenAPI\Client\Model\fulfillmentInbound\SetPackingInformationResponse
```

setPackingInformation

Sets packing information for an inbound plan. This should be called after an inbound plan is created to populate the box level information required for planning and transportation estimates.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inbound_plan_id = 'inbound_plan_id_example'; // string | Identifier of an inbound plan.
$body = new \OpenAPI\Client\Model\fulfillmentInbound\SetPackingInformationRequest(); // \OpenAPI\Client\Model\fulfillmentInbound\SetPackingInformationRequest | The body of the request to `setPackingInformation`.

try {
    $result = $apiInstance->setPackingInformation($inbound_plan_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->setPackingInformation: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **inbound_plan_id** | **string**| Identifier of an inbound plan. | |
| **body** | [**\OpenAPI\Client\Model\fulfillmentInbound\SetPackingInformationRequest**](../Model/SetPackingInformationRequest.md)| The body of the request to &#x60;setPackingInformation&#x60;. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\SetPackingInformationResponse**](../Model/SetPackingInformationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `setPrepDetails()`

```php
setPrepDetails($body): \OpenAPI\Client\Model\fulfillmentInbound\SetPrepDetailsResponse
```

setPrepDetails

Set the preparation details for a list of MSKUs in a specified marketplace.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \OpenAPI\Client\Model\fulfillmentInbound\SetPrepDetailsRequest(); // \OpenAPI\Client\Model\fulfillmentInbound\SetPrepDetailsRequest | The body of the request to `setPrepDetails`.

try {
    $result = $apiInstance->setPrepDetails($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->setPrepDetails: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **body** | [**\OpenAPI\Client\Model\fulfillmentInbound\SetPrepDetailsRequest**](../Model/SetPrepDetailsRequest.md)| The body of the request to &#x60;setPrepDetails&#x60;. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\SetPrepDetailsResponse**](../Model/SetPrepDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateInboundPlanName()`

```php
updateInboundPlanName($inbound_plan_id, $body)
```

updateInboundPlanName

Updates the name of an existing inbound plan.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inbound_plan_id = 'inbound_plan_id_example'; // string | Identifier of an inbound plan.
$body = new \OpenAPI\Client\Model\fulfillmentInbound\UpdateInboundPlanNameRequest(); // \OpenAPI\Client\Model\fulfillmentInbound\UpdateInboundPlanNameRequest | The body of the request to `updateInboundPlanName`.

try {
    $apiInstance->updateInboundPlanName($inbound_plan_id, $body);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->updateInboundPlanName: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **inbound_plan_id** | **string**| Identifier of an inbound plan. | |
| **body** | [**\OpenAPI\Client\Model\fulfillmentInbound\UpdateInboundPlanNameRequest**](../Model/UpdateInboundPlanNameRequest.md)| The body of the request to &#x60;updateInboundPlanName&#x60;. | |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateItemComplianceDetails()`

```php
updateItemComplianceDetails($marketplace_id, $body): \OpenAPI\Client\Model\fulfillmentInbound\UpdateItemComplianceDetailsResponse
```

updateItemComplianceDetails

Update compliance details for a list of MSKUs. The details provided here are only used for the India (IN - A21TJRUUN4KGV) marketplace compliance validation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 6 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$marketplace_id = 'marketplace_id_example'; // string | The Marketplace ID. For a list of possible values, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
$body = new \OpenAPI\Client\Model\fulfillmentInbound\UpdateItemComplianceDetailsRequest(); // \OpenAPI\Client\Model\fulfillmentInbound\UpdateItemComplianceDetailsRequest | The body of the request to `updateItemComplianceDetails`.

try {
    $result = $apiInstance->updateItemComplianceDetails($marketplace_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->updateItemComplianceDetails: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **marketplace_id** | **string**| The Marketplace ID. For a list of possible values, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). | |
| **body** | [**\OpenAPI\Client\Model\fulfillmentInbound\UpdateItemComplianceDetailsRequest**](../Model/UpdateItemComplianceDetailsRequest.md)| The body of the request to &#x60;updateItemComplianceDetails&#x60;. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\UpdateItemComplianceDetailsResponse**](../Model/UpdateItemComplianceDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateShipmentName()`

```php
updateShipmentName($inbound_plan_id, $shipment_id, $body)
```

updateShipmentName

Updates the name of an existing shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inbound_plan_id = 'inbound_plan_id_example'; // string | Identifier of an inbound plan.
$shipment_id = 'shipment_id_example'; // string | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
$body = new \OpenAPI\Client\Model\fulfillmentInbound\UpdateShipmentNameRequest(); // \OpenAPI\Client\Model\fulfillmentInbound\UpdateShipmentNameRequest | The body of the request to `updateShipmentName`.

try {
    $apiInstance->updateShipmentName($inbound_plan_id, $shipment_id, $body);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->updateShipmentName: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **inbound_plan_id** | **string**| Identifier of an inbound plan. | |
| **shipment_id** | **string**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. | |
| **body** | [**\OpenAPI\Client\Model\fulfillmentInbound\UpdateShipmentNameRequest**](../Model/UpdateShipmentNameRequest.md)| The body of the request to &#x60;updateShipmentName&#x60;. | |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateShipmentSourceAddress()`

```php
updateShipmentSourceAddress($inbound_plan_id, $shipment_id, $body): \OpenAPI\Client\Model\fulfillmentInbound\UpdateShipmentSourceAddressResponse
```

updateShipmentSourceAddress

Updates the source address of an existing shipment. The shipment source address can only be updated prior to the confirmation of the shipment carriers. As a result of the updated source address, existing transportation options will be invalidated and will need to be regenerated to capture the potential difference in transportation options and quotes due to the new source address.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inbound_plan_id = 'inbound_plan_id_example'; // string | Identifier of an inbound plan.
$shipment_id = 'shipment_id_example'; // string | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
$body = new \OpenAPI\Client\Model\fulfillmentInbound\UpdateShipmentSourceAddressRequest(); // \OpenAPI\Client\Model\fulfillmentInbound\UpdateShipmentSourceAddressRequest | The body of the request to `updateShipmentSourceAddress`.

try {
    $result = $apiInstance->updateShipmentSourceAddress($inbound_plan_id, $shipment_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->updateShipmentSourceAddress: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **inbound_plan_id** | **string**| Identifier of an inbound plan. | |
| **shipment_id** | **string**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. | |
| **body** | [**\OpenAPI\Client\Model\fulfillmentInbound\UpdateShipmentSourceAddressRequest**](../Model/UpdateShipmentSourceAddressRequest.md)| The body of the request to &#x60;updateShipmentSourceAddress&#x60;. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\UpdateShipmentSourceAddressResponse**](../Model/UpdateShipmentSourceAddressResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateShipmentTrackingDetails()`

```php
updateShipmentTrackingDetails($inbound_plan_id, $shipment_id, $body): \OpenAPI\Client\Model\fulfillmentInbound\UpdateShipmentTrackingDetailsResponse
```

updateShipmentTrackingDetails

Updates a shipment's tracking details.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FulfillmentInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inbound_plan_id = 'inbound_plan_id_example'; // string | Identifier of an inbound plan.
$shipment_id = 'shipment_id_example'; // string | Identifier of a shipment. A shipment contains the boxes and units being inbounded.
$body = new \OpenAPI\Client\Model\fulfillmentInbound\UpdateShipmentTrackingDetailsRequest(); // \OpenAPI\Client\Model\fulfillmentInbound\UpdateShipmentTrackingDetailsRequest | The body of the request to `updateShipmentTrackingDetails`.

try {
    $result = $apiInstance->updateShipmentTrackingDetails($inbound_plan_id, $shipment_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FulfillmentInboundApi->updateShipmentTrackingDetails: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **inbound_plan_id** | **string**| Identifier of an inbound plan. | |
| **shipment_id** | **string**| Identifier of a shipment. A shipment contains the boxes and units being inbounded. | |
| **body** | [**\OpenAPI\Client\Model\fulfillmentInbound\UpdateShipmentTrackingDetailsRequest**](../Model/UpdateShipmentTrackingDetailsRequest.md)| The body of the request to &#x60;updateShipmentTrackingDetails&#x60;. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentInbound\UpdateShipmentTrackingDetailsResponse**](../Model/UpdateShipmentTrackingDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
