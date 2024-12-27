# OpenAPI\Client\FbaInboundApi

All URIs are relative to https://sellingpartnerapi-na.amazon.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**confirmPreorder()**](FbaInboundApi.md#confirmPreorder) | **PUT** /fba/inbound/v0/shipments/{shipmentId}/preorder/confirm |  |
| [**confirmTransport()**](FbaInboundApi.md#confirmTransport) | **POST** /fba/inbound/v0/shipments/{shipmentId}/transport/confirm |  |
| [**createInboundShipment()**](FbaInboundApi.md#createInboundShipment) | **POST** /fba/inbound/v0/shipments/{shipmentId} |  |
| [**createInboundShipmentPlan()**](FbaInboundApi.md#createInboundShipmentPlan) | **POST** /fba/inbound/v0/plans |  |
| [**estimateTransport()**](FbaInboundApi.md#estimateTransport) | **POST** /fba/inbound/v0/shipments/{shipmentId}/transport/estimate |  |
| [**getBillOfLading()**](FbaInboundApi.md#getBillOfLading) | **GET** /fba/inbound/v0/shipments/{shipmentId}/billOfLading |  |
| [**getLabels()**](FbaInboundApi.md#getLabels) | **GET** /fba/inbound/v0/shipments/{shipmentId}/labels |  |
| [**getPreorderInfo()**](FbaInboundApi.md#getPreorderInfo) | **GET** /fba/inbound/v0/shipments/{shipmentId}/preorder |  |
| [**getPrepInstructions()**](FbaInboundApi.md#getPrepInstructions) | **GET** /fba/inbound/v0/prepInstructions |  |
| [**getShipmentItems()**](FbaInboundApi.md#getShipmentItems) | **GET** /fba/inbound/v0/shipmentItems |  |
| [**getShipmentItemsByShipmentId()**](FbaInboundApi.md#getShipmentItemsByShipmentId) | **GET** /fba/inbound/v0/shipments/{shipmentId}/items |  |
| [**getShipments()**](FbaInboundApi.md#getShipments) | **GET** /fba/inbound/v0/shipments |  |
| [**getTransportDetails()**](FbaInboundApi.md#getTransportDetails) | **GET** /fba/inbound/v0/shipments/{shipmentId}/transport |  |
| [**putTransportDetails()**](FbaInboundApi.md#putTransportDetails) | **PUT** /fba/inbound/v0/shipments/{shipmentId}/transport |  |
| [**updateInboundShipment()**](FbaInboundApi.md#updateInboundShipment) | **PUT** /fba/inbound/v0/shipments/{shipmentId} |  |
| [**voidTransport()**](FbaInboundApi.md#voidTransport) | **POST** /fba/inbound/v0/shipments/{shipmentId}/transport/void |  |


## `confirmPreorder()`

```php
confirmPreorder($shipment_id, $need_by_date, $marketplace_id): \OpenAPI\Client\Model\fulfillmentinboundv0\ConfirmPreorderResponse
```



Returns information needed to confirm a shipment for pre-order. Call this operation after calling the getPreorderInfo operation to get the NeedByDate value and other pre-order information about the shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FbaInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$shipment_id = 'shipment_id_example'; // string | A shipment identifier originally returned by the createInboundShipmentPlan operation.
$need_by_date = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime | Date that the shipment must arrive at the Amazon fulfillment center to avoid delivery promise breaks for pre-ordered items. Must be in YYYY-MM-DD format. The response to the getPreorderInfo operation returns this value.
$marketplace_id = 'marketplace_id_example'; // string | A marketplace identifier. Specifies the marketplace the shipment is tied to.

try {
    $result = $apiInstance->confirmPreorder($shipment_id, $need_by_date, $marketplace_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FbaInboundApi->confirmPreorder: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **shipment_id** | **string**| A shipment identifier originally returned by the createInboundShipmentPlan operation. | |
| **need_by_date** | **\DateTime**| Date that the shipment must arrive at the Amazon fulfillment center to avoid delivery promise breaks for pre-ordered items. Must be in YYYY-MM-DD format. The response to the getPreorderInfo operation returns this value. | |
| **marketplace_id** | **string**| A marketplace identifier. Specifies the marketplace the shipment is tied to. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentinboundv0\ConfirmPreorderResponse**](../Model/ConfirmPreorderResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `confirmTransport()`

```php
confirmTransport($shipment_id): \OpenAPI\Client\Model\fulfillmentinboundv0\ConfirmTransportResponse
```



Confirms that the seller accepts the Amazon-partnered shipping estimate, agrees to allow Amazon to charge their account for the shipping cost, and requests that the Amazon-partnered carrier ship the inbound shipment.  Prior to calling the confirmTransport operation, you should call the getTransportDetails operation to get the Amazon-partnered shipping estimate.  Important: After confirming the transportation request, if the seller decides that they do not want the Amazon-partnered carrier to ship the inbound shipment, you can call the voidTransport operation to cancel the transportation request. Note that for a Small Parcel shipment, the seller has 24 hours after confirming a transportation request to void the transportation request. For a Less Than Truckload/Full Truckload (LTL/FTL) shipment, the seller has one hour after confirming a transportation request to void it. After the grace period has expired the seller's account will be charged for the shipping cost.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FbaInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$shipment_id = 'shipment_id_example'; // string | A shipment identifier originally returned by the createInboundShipmentPlan operation.

try {
    $result = $apiInstance->confirmTransport($shipment_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FbaInboundApi->confirmTransport: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **shipment_id** | **string**| A shipment identifier originally returned by the createInboundShipmentPlan operation. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentinboundv0\ConfirmTransportResponse**](../Model/ConfirmTransportResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createInboundShipment()`

```php
createInboundShipment($shipment_id, $body): \OpenAPI\Client\Model\fulfillmentinboundv0\InboundShipmentResponse
```



Returns a new inbound shipment based on the specified shipmentId that was returned by the createInboundShipmentPlan operation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FbaInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$shipment_id = 'shipment_id_example'; // string | A shipment identifier originally returned by the createInboundShipmentPlan operation.
$body = new \OpenAPI\Client\Model\fulfillmentinboundv0\InboundShipmentRequest(); // \OpenAPI\Client\Model\fulfillmentinboundv0\InboundShipmentRequest | The request schema for the InboundShipmentRequest operation.

try {
    $result = $apiInstance->createInboundShipment($shipment_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FbaInboundApi->createInboundShipment: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **shipment_id** | **string**| A shipment identifier originally returned by the createInboundShipmentPlan operation. | |
| **body** | [**\OpenAPI\Client\Model\fulfillmentinboundv0\InboundShipmentRequest**](../Model/InboundShipmentRequest.md)| The request schema for the InboundShipmentRequest operation. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentinboundv0\InboundShipmentResponse**](../Model/InboundShipmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createInboundShipmentPlan()`

```php
createInboundShipmentPlan($body): \OpenAPI\Client\Model\fulfillmentinboundv0\CreateInboundShipmentPlanResponse
```



Returns one or more inbound shipment plans, which provide the information you need to create one or more inbound shipments for a set of items that you specify. Multiple inbound shipment plans might be required so that items can be optimally placed in Amazon's fulfillment network—for example, positioning inventory closer to the customer. Alternatively, two inbound shipment plans might be created with the same Amazon fulfillment center destination if the two shipment plans require different processing—for example, items that require labels must be shipped separately from stickerless, commingled inventory.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FbaInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \OpenAPI\Client\Model\fulfillmentinboundv0\CreateInboundShipmentPlanRequest(); // \OpenAPI\Client\Model\fulfillmentinboundv0\CreateInboundShipmentPlanRequest | The request schema for the CreateInboundShipmentPlanRequest operation.

try {
    $result = $apiInstance->createInboundShipmentPlan($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FbaInboundApi->createInboundShipmentPlan: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **body** | [**\OpenAPI\Client\Model\fulfillmentinboundv0\CreateInboundShipmentPlanRequest**](../Model/CreateInboundShipmentPlanRequest.md)| The request schema for the CreateInboundShipmentPlanRequest operation. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentinboundv0\CreateInboundShipmentPlanResponse**](../Model/CreateInboundShipmentPlanResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `estimateTransport()`

```php
estimateTransport($shipment_id): \OpenAPI\Client\Model\fulfillmentinboundv0\EstimateTransportResponse
```



Initiates the process of estimating the shipping cost for an inbound shipment by an Amazon-partnered carrier.  Prior to calling the estimateTransport operation, you must call the putTransportDetails operation to provide Amazon with the transportation information for the inbound shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FbaInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$shipment_id = 'shipment_id_example'; // string | A shipment identifier originally returned by the createInboundShipmentPlan operation.

try {
    $result = $apiInstance->estimateTransport($shipment_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FbaInboundApi->estimateTransport: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **shipment_id** | **string**| A shipment identifier originally returned by the createInboundShipmentPlan operation. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentinboundv0\EstimateTransportResponse**](../Model/EstimateTransportResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getBillOfLading()`

```php
getBillOfLading($shipment_id): \OpenAPI\Client\Model\fulfillmentinboundv0\GetBillOfLadingResponse
```



Returns a bill of lading for a Less Than Truckload/Full Truckload (LTL/FTL) shipment. The getBillOfLading operation returns PDF document data for printing a bill of lading for an Amazon-partnered Less Than Truckload/Full Truckload (LTL/FTL) inbound shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FbaInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$shipment_id = 'shipment_id_example'; // string | A shipment identifier originally returned by the createInboundShipmentPlan operation.

try {
    $result = $apiInstance->getBillOfLading($shipment_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FbaInboundApi->getBillOfLading: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **shipment_id** | **string**| A shipment identifier originally returned by the createInboundShipmentPlan operation. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentinboundv0\GetBillOfLadingResponse**](../Model/GetBillOfLadingResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getLabels()`

```php
getLabels($shipment_id, $page_type, $label_type, $number_of_packages, $package_labels_to_print, $number_of_pallets, $page_size, $page_start_index): \OpenAPI\Client\Model\fulfillmentinboundv0\GetLabelsResponse
```



Returns package/pallet labels for faster and more accurate shipment processing at the Amazon fulfillment center.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FbaInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$shipment_id = 'shipment_id_example'; // string | A shipment identifier originally returned by the createInboundShipmentPlan operation.
$page_type = 'page_type_example'; // string | The page type to use to print the labels. Submitting a PageType value that is not supported in your marketplace returns an error.
$label_type = 'label_type_example'; // string | The type of labels requested.
$number_of_packages = 56; // int | The number of packages in the shipment.
$package_labels_to_print = array('package_labels_to_print_example'); // string[] | A list of identifiers that specify packages for which you want package labels printed.  If you provide box content information with the [FBA Inbound Shipment Carton Information Feed](https://developer-docs.amazon.com/sp-api/docs/fulfillment-by-amazon-feed-type-values#fba-inbound-shipment-carton-information-feed), then `PackageLabelsToPrint` must match the `CartonId` values you provide through that feed. If you provide box content information with the Fulfillment Inbound API v2024-03-20, then `PackageLabelsToPrint` must match the `boxID` values from the [`listShipmentBoxes`](https://developer-docs.amazon.com/sp-api/docs/fulfillment-inbound-api-v2024-03-20-reference#listshipmentboxes) response. If these values do not match as required, the operation returns the `IncorrectPackageIdentifier` error code.
$number_of_pallets = 56; // int | The number of pallets in the shipment. This returns four identical labels for each pallet.
$page_size = 56; // int | The page size for paginating through the total packages' labels. This is a required parameter for Non-Partnered LTL Shipments. Max value:1000.
$page_start_index = 56; // int | The page start index for paginating through the total packages' labels. This is a required parameter for Non-Partnered LTL Shipments.

try {
    $result = $apiInstance->getLabels($shipment_id, $page_type, $label_type, $number_of_packages, $package_labels_to_print, $number_of_pallets, $page_size, $page_start_index);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FbaInboundApi->getLabels: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **shipment_id** | **string**| A shipment identifier originally returned by the createInboundShipmentPlan operation. | |
| **page_type** | **string**| The page type to use to print the labels. Submitting a PageType value that is not supported in your marketplace returns an error. | |
| **label_type** | **string**| The type of labels requested. | |
| **number_of_packages** | **int**| The number of packages in the shipment. | [optional] |
| **package_labels_to_print** | [**string[]**](../Model/string.md)| A list of identifiers that specify packages for which you want package labels printed.  If you provide box content information with the [FBA Inbound Shipment Carton Information Feed](https://developer-docs.amazon.com/sp-api/docs/fulfillment-by-amazon-feed-type-values#fba-inbound-shipment-carton-information-feed), then &#x60;PackageLabelsToPrint&#x60; must match the &#x60;CartonId&#x60; values you provide through that feed. If you provide box content information with the Fulfillment Inbound API v2024-03-20, then &#x60;PackageLabelsToPrint&#x60; must match the &#x60;boxID&#x60; values from the [&#x60;listShipmentBoxes&#x60;](https://developer-docs.amazon.com/sp-api/docs/fulfillment-inbound-api-v2024-03-20-reference#listshipmentboxes) response. If these values do not match as required, the operation returns the &#x60;IncorrectPackageIdentifier&#x60; error code. | [optional] |
| **number_of_pallets** | **int**| The number of pallets in the shipment. This returns four identical labels for each pallet. | [optional] |
| **page_size** | **int**| The page size for paginating through the total packages&#39; labels. This is a required parameter for Non-Partnered LTL Shipments. Max value:1000. | [optional] |
| **page_start_index** | **int**| The page start index for paginating through the total packages&#39; labels. This is a required parameter for Non-Partnered LTL Shipments. | [optional] |

### Return type

[**\OpenAPI\Client\Model\fulfillmentinboundv0\GetLabelsResponse**](../Model/GetLabelsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getPreorderInfo()`

```php
getPreorderInfo($shipment_id, $marketplace_id): \OpenAPI\Client\Model\fulfillmentinboundv0\GetPreorderInfoResponse
```



Returns pre-order information, including dates, that a seller needs before confirming a shipment for pre-order.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FbaInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$shipment_id = 'shipment_id_example'; // string | A shipment identifier originally returned by the createInboundShipmentPlan operation.
$marketplace_id = 'marketplace_id_example'; // string | A marketplace identifier. Specifies the marketplace the shipment is tied to.

try {
    $result = $apiInstance->getPreorderInfo($shipment_id, $marketplace_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FbaInboundApi->getPreorderInfo: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **shipment_id** | **string**| A shipment identifier originally returned by the createInboundShipmentPlan operation. | |
| **marketplace_id** | **string**| A marketplace identifier. Specifies the marketplace the shipment is tied to. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentinboundv0\GetPreorderInfoResponse**](../Model/GetPreorderInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getPrepInstructions()`

```php
getPrepInstructions($ship_to_country_code, $seller_sku_list, $asin_list): \OpenAPI\Client\Model\fulfillmentinboundv0\GetPrepInstructionsResponse
```



Returns labeling requirements and item preparation instructions to help prepare items for shipment to Amazon's fulfillment network.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FbaInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$ship_to_country_code = 'ship_to_country_code_example'; // string | The country code of the country to which the items will be shipped. Note that labeling requirements and item preparation instructions can vary by country.
$seller_sku_list = array('seller_sku_list_example'); // string[] | A list of SellerSKU values. Used to identify items for which you want labeling requirements and item preparation instructions for shipment to Amazon's fulfillment network. The SellerSKU is qualified by the Seller ID, which is included with every call to the Seller Partner API.  Note: Include seller SKUs that you have used to list items on Amazon's retail website. If you include a seller SKU that you have never used to list an item on Amazon's retail website, the seller SKU is returned in the InvalidSKUList property in the response.
$asin_list = array('asin_list_example'); // string[] | A list of ASIN values. Used to identify items for which you want item preparation instructions to help with item sourcing decisions.  Note: ASINs must be included in the product catalog for at least one of the marketplaces that the seller  participates in. Any ASIN that is not included in the product catalog for at least one of the marketplaces that the seller participates in is returned in the InvalidASINList property in the response. You can find out which marketplaces a seller participates in by calling the getMarketplaceParticipations operation in the Selling Partner API for Sellers.

try {
    $result = $apiInstance->getPrepInstructions($ship_to_country_code, $seller_sku_list, $asin_list);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FbaInboundApi->getPrepInstructions: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **ship_to_country_code** | **string**| The country code of the country to which the items will be shipped. Note that labeling requirements and item preparation instructions can vary by country. | |
| **seller_sku_list** | [**string[]**](../Model/string.md)| A list of SellerSKU values. Used to identify items for which you want labeling requirements and item preparation instructions for shipment to Amazon&#39;s fulfillment network. The SellerSKU is qualified by the Seller ID, which is included with every call to the Seller Partner API.  Note: Include seller SKUs that you have used to list items on Amazon&#39;s retail website. If you include a seller SKU that you have never used to list an item on Amazon&#39;s retail website, the seller SKU is returned in the InvalidSKUList property in the response. | [optional] |
| **asin_list** | [**string[]**](../Model/string.md)| A list of ASIN values. Used to identify items for which you want item preparation instructions to help with item sourcing decisions.  Note: ASINs must be included in the product catalog for at least one of the marketplaces that the seller  participates in. Any ASIN that is not included in the product catalog for at least one of the marketplaces that the seller participates in is returned in the InvalidASINList property in the response. You can find out which marketplaces a seller participates in by calling the getMarketplaceParticipations operation in the Selling Partner API for Sellers. | [optional] |

### Return type

[**\OpenAPI\Client\Model\fulfillmentinboundv0\GetPrepInstructionsResponse**](../Model/GetPrepInstructionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getShipmentItems()`

```php
getShipmentItems($query_type, $marketplace_id, $last_updated_after, $last_updated_before, $next_token): \OpenAPI\Client\Model\fulfillmentinboundv0\GetShipmentItemsResponse
```



Returns a list of items in a specified inbound shipment, or a list of items that were updated within a specified time frame.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FbaInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$query_type = 'query_type_example'; // string | Indicates whether items are returned using a date range (by providing the LastUpdatedAfter and LastUpdatedBefore parameters), or using NextToken, which continues returning items specified in a previous request.
$marketplace_id = 'marketplace_id_example'; // string | A marketplace identifier. Specifies the marketplace where the product would be stored.
$last_updated_after = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime | A date used for selecting inbound shipment items that were last updated after (or at) a specified time. The selection includes updates made by Amazon and by the seller.
$last_updated_before = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime | A date used for selecting inbound shipment items that were last updated before (or at) a specified time. The selection includes updates made by Amazon and by the seller.
$next_token = 'next_token_example'; // string | A string token returned in the response to your previous request.

try {
    $result = $apiInstance->getShipmentItems($query_type, $marketplace_id, $last_updated_after, $last_updated_before, $next_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FbaInboundApi->getShipmentItems: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **query_type** | **string**| Indicates whether items are returned using a date range (by providing the LastUpdatedAfter and LastUpdatedBefore parameters), or using NextToken, which continues returning items specified in a previous request. | |
| **marketplace_id** | **string**| A marketplace identifier. Specifies the marketplace where the product would be stored. | |
| **last_updated_after** | **\DateTime**| A date used for selecting inbound shipment items that were last updated after (or at) a specified time. The selection includes updates made by Amazon and by the seller. | [optional] |
| **last_updated_before** | **\DateTime**| A date used for selecting inbound shipment items that were last updated before (or at) a specified time. The selection includes updates made by Amazon and by the seller. | [optional] |
| **next_token** | **string**| A string token returned in the response to your previous request. | [optional] |

### Return type

[**\OpenAPI\Client\Model\fulfillmentinboundv0\GetShipmentItemsResponse**](../Model/GetShipmentItemsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getShipmentItemsByShipmentId()`

```php
getShipmentItemsByShipmentId($shipment_id, $marketplace_id): \OpenAPI\Client\Model\fulfillmentinboundv0\GetShipmentItemsResponse
```



Returns a list of items in a specified inbound shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FbaInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$shipment_id = 'shipment_id_example'; // string | A shipment identifier used for selecting items in a specific inbound shipment.
$marketplace_id = 'marketplace_id_example'; // string | A marketplace identifier. Specifies the marketplace where the product would be stored.

try {
    $result = $apiInstance->getShipmentItemsByShipmentId($shipment_id, $marketplace_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FbaInboundApi->getShipmentItemsByShipmentId: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **shipment_id** | **string**| A shipment identifier used for selecting items in a specific inbound shipment. | |
| **marketplace_id** | **string**| A marketplace identifier. Specifies the marketplace where the product would be stored. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentinboundv0\GetShipmentItemsResponse**](../Model/GetShipmentItemsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getShipments()`

```php
getShipments($query_type, $marketplace_id, $shipment_status_list, $shipment_id_list, $last_updated_after, $last_updated_before, $next_token): \OpenAPI\Client\Model\fulfillmentinboundv0\GetShipmentsResponse
```



Returns a list of inbound shipments based on criteria that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FbaInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$query_type = 'query_type_example'; // string | Indicates whether shipments are returned using shipment information (by providing the ShipmentStatusList or ShipmentIdList parameters), using a date range (by providing the LastUpdatedAfter and LastUpdatedBefore parameters), or by using NextToken to continue returning items specified in a previous request.
$marketplace_id = 'marketplace_id_example'; // string | A marketplace identifier. Specifies the marketplace where the product would be stored.
$shipment_status_list = array('shipment_status_list_example'); // string[] | A list of ShipmentStatus values. Used to select shipments with a current status that matches the status values that you specify.
$shipment_id_list = array('shipment_id_list_example'); // string[] | A list of shipment IDs used to select the shipments that you want. If both ShipmentStatusList and ShipmentIdList are specified, only shipments that match both parameters are returned.
$last_updated_after = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime | A date used for selecting inbound shipments that were last updated after (or at) a specified time. The selection includes updates made by Amazon and by the seller.
$last_updated_before = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime | A date used for selecting inbound shipments that were last updated before (or at) a specified time. The selection includes updates made by Amazon and by the seller.
$next_token = 'next_token_example'; // string | A string token returned in the response to your previous request.

try {
    $result = $apiInstance->getShipments($query_type, $marketplace_id, $shipment_status_list, $shipment_id_list, $last_updated_after, $last_updated_before, $next_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FbaInboundApi->getShipments: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **query_type** | **string**| Indicates whether shipments are returned using shipment information (by providing the ShipmentStatusList or ShipmentIdList parameters), using a date range (by providing the LastUpdatedAfter and LastUpdatedBefore parameters), or by using NextToken to continue returning items specified in a previous request. | |
| **marketplace_id** | **string**| A marketplace identifier. Specifies the marketplace where the product would be stored. | |
| **shipment_status_list** | [**string[]**](../Model/string.md)| A list of ShipmentStatus values. Used to select shipments with a current status that matches the status values that you specify. | [optional] |
| **shipment_id_list** | [**string[]**](../Model/string.md)| A list of shipment IDs used to select the shipments that you want. If both ShipmentStatusList and ShipmentIdList are specified, only shipments that match both parameters are returned. | [optional] |
| **last_updated_after** | **\DateTime**| A date used for selecting inbound shipments that were last updated after (or at) a specified time. The selection includes updates made by Amazon and by the seller. | [optional] |
| **last_updated_before** | **\DateTime**| A date used for selecting inbound shipments that were last updated before (or at) a specified time. The selection includes updates made by Amazon and by the seller. | [optional] |
| **next_token** | **string**| A string token returned in the response to your previous request. | [optional] |

### Return type

[**\OpenAPI\Client\Model\fulfillmentinboundv0\GetShipmentsResponse**](../Model/GetShipmentsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getTransportDetails()`

```php
getTransportDetails($shipment_id): \OpenAPI\Client\Model\fulfillmentinboundv0\GetTransportDetailsResponse
```



Returns current transportation information about an inbound shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FbaInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$shipment_id = 'shipment_id_example'; // string | A shipment identifier originally returned by the createInboundShipmentPlan operation.

try {
    $result = $apiInstance->getTransportDetails($shipment_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FbaInboundApi->getTransportDetails: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **shipment_id** | **string**| A shipment identifier originally returned by the createInboundShipmentPlan operation. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentinboundv0\GetTransportDetailsResponse**](../Model/GetTransportDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `putTransportDetails()`

```php
putTransportDetails($shipment_id, $body): \OpenAPI\Client\Model\fulfillmentinboundv0\PutTransportDetailsResponse
```



Sends transportation information to Amazon about an inbound shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FbaInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$shipment_id = 'shipment_id_example'; // string | A shipment identifier originally returned by the createInboundShipmentPlan operation.
$body = new \OpenAPI\Client\Model\fulfillmentinboundv0\PutTransportDetailsRequest(); // \OpenAPI\Client\Model\fulfillmentinboundv0\PutTransportDetailsRequest | The request schema for the PutTransportDetailsRequest operation.

try {
    $result = $apiInstance->putTransportDetails($shipment_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FbaInboundApi->putTransportDetails: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **shipment_id** | **string**| A shipment identifier originally returned by the createInboundShipmentPlan operation. | |
| **body** | [**\OpenAPI\Client\Model\fulfillmentinboundv0\PutTransportDetailsRequest**](../Model/PutTransportDetailsRequest.md)| The request schema for the PutTransportDetailsRequest operation. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentinboundv0\PutTransportDetailsResponse**](../Model/PutTransportDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateInboundShipment()`

```php
updateInboundShipment($shipment_id, $body): \OpenAPI\Client\Model\fulfillmentinboundv0\InboundShipmentResponse
```



Updates or removes items from the inbound shipment identified by the specified shipment identifier. Adding new items is not supported.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FbaInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$shipment_id = 'shipment_id_example'; // string | A shipment identifier originally returned by the createInboundShipmentPlan operation.
$body = new \OpenAPI\Client\Model\fulfillmentinboundv0\InboundShipmentRequest(); // \OpenAPI\Client\Model\fulfillmentinboundv0\InboundShipmentRequest | The request schema for the InboundShipmentRequest operation.

try {
    $result = $apiInstance->updateInboundShipment($shipment_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FbaInboundApi->updateInboundShipment: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **shipment_id** | **string**| A shipment identifier originally returned by the createInboundShipmentPlan operation. | |
| **body** | [**\OpenAPI\Client\Model\fulfillmentinboundv0\InboundShipmentRequest**](../Model/InboundShipmentRequest.md)| The request schema for the InboundShipmentRequest operation. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentinboundv0\InboundShipmentResponse**](../Model/InboundShipmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `voidTransport()`

```php
voidTransport($shipment_id): \OpenAPI\Client\Model\fulfillmentinboundv0\VoidTransportResponse
```



Cancels a previously-confirmed request to ship an inbound shipment using an Amazon-partnered carrier.  To be successful, you must call this operation before the VoidDeadline date that is returned by the getTransportDetails operation.  Important: The VoidDeadline date is 24 hours after you confirm a Small Parcel shipment transportation request or one hour after you confirm a Less Than Truckload/Full Truckload (LTL/FTL) shipment transportation request. After the void deadline passes, your account will be charged for the shipping cost.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FbaInboundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$shipment_id = 'shipment_id_example'; // string | A shipment identifier originally returned by the createInboundShipmentPlan operation.

try {
    $result = $apiInstance->voidTransport($shipment_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FbaInboundApi->voidTransport: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **shipment_id** | **string**| A shipment identifier originally returned by the createInboundShipmentPlan operation. | |

### Return type

[**\OpenAPI\Client\Model\fulfillmentinboundv0\VoidTransportResponse**](../Model/VoidTransportResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
