# OpenAPI\Client\AwdApi

All URIs are relative to https://sellingpartnerapi-na.amazon.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getInboundShipment()**](AwdApi.md#getInboundShipment) | **GET** /awd/2024-05-09/inboundShipments/{shipmentId} |  |
| [**listInboundShipments()**](AwdApi.md#listInboundShipments) | **GET** /awd/2024-05-09/inboundShipments |  |
| [**listInventory()**](AwdApi.md#listInventory) | **GET** /awd/2024-05-09/inventory |  |


## `getInboundShipment()`

```php
getInboundShipment($shipment_id, $sku_quantities): \OpenAPI\Client\Model\awd\InboundShipment
```



Retrieves an AWD inbound shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\AwdApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$shipment_id = 'shipment_id_example'; // string | ID for the shipment. A shipment contains the cases being inbounded.
$sku_quantities = SHOW; // string | If equal to `SHOW`, the response includes the shipment SKU quantity details.  Defaults to `HIDE`, in which case the response does not contain SKU quantities

try {
    $result = $apiInstance->getInboundShipment($shipment_id, $sku_quantities);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AwdApi->getInboundShipment: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **shipment_id** | **string**| ID for the shipment. A shipment contains the cases being inbounded. | |
| **sku_quantities** | **string**| If equal to &#x60;SHOW&#x60;, the response includes the shipment SKU quantity details.  Defaults to &#x60;HIDE&#x60;, in which case the response does not contain SKU quantities | [optional] |

### Return type

[**\OpenAPI\Client\Model\awd\InboundShipment**](../Model/InboundShipment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listInboundShipments()`

```php
listInboundShipments($sort_by, $sort_order, $shipment_status, $updated_after, $updated_before, $max_results, $next_token): \OpenAPI\Client\Model\awd\ShipmentListing
```



Retrieves a summary of all the inbound AWD shipments associated with a merchant, with the ability to apply optional filters.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\AwdApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$sort_by = 'sort_by_example'; // string | Field to sort results by. By default, the response will be sorted by UPDATED_AT.
$sort_order = ASCENDING; // string | Sort the response in ASCENDING or DESCENDING order. By default, the response will be sorted in DESCENDING order.
$shipment_status = CREATED; // string | Filter by inbound shipment status.
$updated_after = 2023-01-12T10:00:00.000Z; // \DateTime | List the inbound shipments that were updated after a certain time (inclusive). The date must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
$updated_before = 2023-01-12T10:00:00.000Z; // \DateTime | List the inbound shipments that were updated before a certain time (inclusive). The date must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
$max_results = 10; // int | Maximum number of results to return.
$next_token = SampleToken; // string | Token to retrieve the next set of paginated results.

try {
    $result = $apiInstance->listInboundShipments($sort_by, $sort_order, $shipment_status, $updated_after, $updated_before, $max_results, $next_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AwdApi->listInboundShipments: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **sort_by** | **string**| Field to sort results by. By default, the response will be sorted by UPDATED_AT. | [optional] |
| **sort_order** | **string**| Sort the response in ASCENDING or DESCENDING order. By default, the response will be sorted in DESCENDING order. | [optional] |
| **shipment_status** | **string**| Filter by inbound shipment status. | [optional] |
| **updated_after** | **\DateTime**| List the inbound shipments that were updated after a certain time (inclusive). The date must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format. | [optional] |
| **updated_before** | **\DateTime**| List the inbound shipments that were updated before a certain time (inclusive). The date must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format. | [optional] |
| **max_results** | **int**| Maximum number of results to return. | [optional] [default to 25] |
| **next_token** | **string**| Token to retrieve the next set of paginated results. | [optional] |

### Return type

[**\OpenAPI\Client\Model\awd\ShipmentListing**](../Model/ShipmentListing.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listInventory()`

```php
listInventory($sku, $sort_order, $details, $next_token, $max_results): \OpenAPI\Client\Model\awd\InventoryListing
```



Lists AWD inventory associated with a merchant with the ability to apply optional filters.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\AwdApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$sku = TestSKU; // string | Filter by seller or merchant SKU for the item.
$sort_order = 'sort_order_example'; // string | Sort the response in `ASCENDING` or `DESCENDING` order.
$details = SHOW; // string | Set to `SHOW` to return summaries with additional inventory details. Defaults to `HIDE,` which returns only inventory summary totals.
$next_token = SampleToken; // string | Token to retrieve the next set of paginated results.
$max_results = 10; // int | Maximum number of results to return.

try {
    $result = $apiInstance->listInventory($sku, $sort_order, $details, $next_token, $max_results);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AwdApi->listInventory: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **sku** | **string**| Filter by seller or merchant SKU for the item. | [optional] |
| **sort_order** | **string**| Sort the response in &#x60;ASCENDING&#x60; or &#x60;DESCENDING&#x60; order. | [optional] |
| **details** | **string**| Set to &#x60;SHOW&#x60; to return summaries with additional inventory details. Defaults to &#x60;HIDE,&#x60; which returns only inventory summary totals. | [optional] |
| **next_token** | **string**| Token to retrieve the next set of paginated results. | [optional] |
| **max_results** | **int**| Maximum number of results to return. | [optional] [default to 25] |

### Return type

[**\OpenAPI\Client\Model\awd\InventoryListing**](../Model/InventoryListing.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
