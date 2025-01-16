# OpenAPI\Client\VendorShippingApi

All URIs are relative to https://sellingpartnerapi-na.amazon.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getPackingSlip()**](VendorShippingApi.md#getPackingSlip) | **GET** /vendor/directFulfillment/shipping/2021-12-28/packingSlips/{purchaseOrderNumber} |  |
| [**getPackingSlips()**](VendorShippingApi.md#getPackingSlips) | **GET** /vendor/directFulfillment/shipping/2021-12-28/packingSlips |  |
| [**submitShipmentConfirmations()**](VendorShippingApi.md#submitShipmentConfirmations) | **POST** /vendor/directFulfillment/shipping/2021-12-28/shipmentConfirmations |  |
| [**submitShipmentStatusUpdates()**](VendorShippingApi.md#submitShipmentStatusUpdates) | **POST** /vendor/directFulfillment/shipping/2021-12-28/shipmentStatusUpdates |  |


## `getPackingSlip()`

```php
getPackingSlip($purchase_order_number): \OpenAPI\Client\Model\vendor\df\shipping\PackingSlip
```



Returns a packing slip based on the purchaseOrderNumber that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\VendorShippingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$purchase_order_number = 'purchase_order_number_example'; // string | The purchaseOrderNumber for the packing slip you want.

try {
    $result = $apiInstance->getPackingSlip($purchase_order_number);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VendorShippingApi->getPackingSlip: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **purchase_order_number** | **string**| The purchaseOrderNumber for the packing slip you want. | |

### Return type

[**\OpenAPI\Client\Model\vendor\df\shipping\PackingSlip**](../Model/PackingSlip.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getPackingSlips()`

```php
getPackingSlips($created_after, $created_before, $ship_from_party_id, $limit, $sort_order, $next_token): \OpenAPI\Client\Model\vendor\df\shipping\PackingSlipList
```



Returns a list of packing slips for the purchase orders that match the criteria specified. Date range to search must not be more than 7 days.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\VendorShippingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$created_after = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime | Packing slips that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format.
$created_before = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime | Packing slips that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format.
$ship_from_party_id = 'ship_from_party_id_example'; // string | The vendor warehouseId for order fulfillment. If not specified the result will contain orders for all warehouses.
$limit = 56; // int | The limit to the number of records returned
$sort_order = 'ASC'; // string | Sort ASC or DESC by packing slip creation date.
$next_token = 'next_token_example'; // string | Used for pagination when there are more packing slips than the specified result size limit. The token value is returned in the previous API call.

try {
    $result = $apiInstance->getPackingSlips($created_after, $created_before, $ship_from_party_id, $limit, $sort_order, $next_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VendorShippingApi->getPackingSlips: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **created_after** | **\DateTime**| Packing slips that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format. | |
| **created_before** | **\DateTime**| Packing slips that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format. | |
| **ship_from_party_id** | **string**| The vendor warehouseId for order fulfillment. If not specified the result will contain orders for all warehouses. | [optional] |
| **limit** | **int**| The limit to the number of records returned | [optional] |
| **sort_order** | **string**| Sort ASC or DESC by packing slip creation date. | [optional] [default to &#39;ASC&#39;] |
| **next_token** | **string**| Used for pagination when there are more packing slips than the specified result size limit. The token value is returned in the previous API call. | [optional] |

### Return type

[**\OpenAPI\Client\Model\vendor\df\shipping\PackingSlipList**](../Model/PackingSlipList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `submitShipmentConfirmations()`

```php
submitShipmentConfirmations($body): \OpenAPI\Client\Model\vendor\df\shipping\TransactionReference
```



Submits one or more shipment confirmations for vendor orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\VendorShippingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \OpenAPI\Client\Model\vendor\df\shipping\SubmitShipmentConfirmationsRequest(); // \OpenAPI\Client\Model\vendor\df\shipping\SubmitShipmentConfirmationsRequest | Request body containing the shipment confirmations data.

try {
    $result = $apiInstance->submitShipmentConfirmations($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VendorShippingApi->submitShipmentConfirmations: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **body** | [**\OpenAPI\Client\Model\vendor\df\shipping\SubmitShipmentConfirmationsRequest**](../Model/SubmitShipmentConfirmationsRequest.md)| Request body containing the shipment confirmations data. | |

### Return type

[**\OpenAPI\Client\Model\vendor\df\shipping\TransactionReference**](../Model/TransactionReference.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `submitShipmentStatusUpdates()`

```php
submitShipmentStatusUpdates($body): \OpenAPI\Client\Model\vendor\df\shipping\TransactionReference
```



This operation is only to be used by Vendor-Own-Carrier (VOC) vendors. Calling this API submits a shipment status update for the package that a vendor has shipped. It will provide the Amazon customer visibility on their order, when the package is outside of Amazon Network visibility.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\VendorShippingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \OpenAPI\Client\Model\vendor\df\shipping\SubmitShipmentStatusUpdatesRequest(); // \OpenAPI\Client\Model\vendor\df\shipping\SubmitShipmentStatusUpdatesRequest | Request body containing the shipment status update data.

try {
    $result = $apiInstance->submitShipmentStatusUpdates($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VendorShippingApi->submitShipmentStatusUpdates: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **body** | [**\OpenAPI\Client\Model\vendor\df\shipping\SubmitShipmentStatusUpdatesRequest**](../Model/SubmitShipmentStatusUpdatesRequest.md)| Request body containing the shipment status update data. | |

### Return type

[**\OpenAPI\Client\Model\vendor\df\shipping\TransactionReference**](../Model/TransactionReference.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
