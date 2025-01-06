# OpenAPI\Client\FbaInventoryApi

All URIs are relative to https://sellingpartnerapi-na.amazon.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**addInventory()**](FbaInventoryApi.md#addInventory) | **POST** /fba/inventory/v1/items/inventory |  |
| [**createInventoryItem()**](FbaInventoryApi.md#createInventoryItem) | **POST** /fba/inventory/v1/items |  |
| [**deleteInventoryItem()**](FbaInventoryApi.md#deleteInventoryItem) | **DELETE** /fba/inventory/v1/items/{sellerSku} |  |
| [**getInventorySummaries()**](FbaInventoryApi.md#getInventorySummaries) | **GET** /fba/inventory/v1/summaries |  |


## `addInventory()`

```php
addInventory($x_amzn_idempotency_token, $add_inventory_request_body): \OpenAPI\Client\Model\fbaInventory\AddInventoryResponse
```



Requests that Amazon add items to the Sandbox Inventory with desired amount of quantity in the sandbox environment. This is a sandbox-only operation and must be directed to a sandbox endpoint. Refer to [Selling Partner API sandbox](https://developer-docs.amazon.com/sp-api/docs/the-selling-partner-api-sandbox) for more information.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FbaInventoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$x_amzn_idempotency_token = 'x_amzn_idempotency_token_example'; // string | A unique token/requestId provided with each call to ensure idempotency.
$add_inventory_request_body = new \OpenAPI\Client\Model\fbaInventory\AddInventoryRequest(); // \OpenAPI\Client\Model\fbaInventory\AddInventoryRequest | List of items to add to Sandbox inventory.

try {
    $result = $apiInstance->addInventory($x_amzn_idempotency_token, $add_inventory_request_body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FbaInventoryApi->addInventory: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **x_amzn_idempotency_token** | **string**| A unique token/requestId provided with each call to ensure idempotency. | |
| **add_inventory_request_body** | [**\OpenAPI\Client\Model\fbaInventory\AddInventoryRequest**](../Model/AddInventoryRequest.md)| List of items to add to Sandbox inventory. | |

### Return type

[**\OpenAPI\Client\Model\fbaInventory\AddInventoryResponse**](../Model/AddInventoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createInventoryItem()`

```php
createInventoryItem($create_inventory_item_request_body): \OpenAPI\Client\Model\fbaInventory\CreateInventoryItemResponse
```



Requests that Amazon create product-details in the Sandbox Inventory in the sandbox environment. This is a sandbox-only operation and must be directed to a sandbox endpoint. Refer to [Selling Partner API sandbox](https://developer-docs.amazon.com/sp-api/docs/the-selling-partner-api-sandbox) for more information.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FbaInventoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$create_inventory_item_request_body = new \OpenAPI\Client\Model\fbaInventory\CreateInventoryItemRequest(); // \OpenAPI\Client\Model\fbaInventory\CreateInventoryItemRequest | CreateInventoryItem Request Body Parameter.

try {
    $result = $apiInstance->createInventoryItem($create_inventory_item_request_body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FbaInventoryApi->createInventoryItem: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_inventory_item_request_body** | [**\OpenAPI\Client\Model\fbaInventory\CreateInventoryItemRequest**](../Model/CreateInventoryItemRequest.md)| CreateInventoryItem Request Body Parameter. | |

### Return type

[**\OpenAPI\Client\Model\fbaInventory\CreateInventoryItemResponse**](../Model/CreateInventoryItemResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteInventoryItem()`

```php
deleteInventoryItem($seller_sku, $marketplace_id): \OpenAPI\Client\Model\fbaInventory\DeleteInventoryItemResponse
```



Requests that Amazon Deletes an item from the Sandbox Inventory in the sandbox environment. This is a sandbox-only operation and must be directed to a sandbox endpoint. Refer to [Selling Partner API sandbox](https://developer-docs.amazon.com/sp-api/docs/the-selling-partner-api-sandbox) for more information.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FbaInventoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$seller_sku = 'seller_sku_example'; // string | A single seller SKU used for querying the specified seller SKU inventory summaries.
$marketplace_id = 'marketplace_id_example'; // string | The marketplace ID for the marketplace for which the sellerSku is to be deleted.

try {
    $result = $apiInstance->deleteInventoryItem($seller_sku, $marketplace_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FbaInventoryApi->deleteInventoryItem: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **seller_sku** | **string**| A single seller SKU used for querying the specified seller SKU inventory summaries. | |
| **marketplace_id** | **string**| The marketplace ID for the marketplace for which the sellerSku is to be deleted. | |

### Return type

[**\OpenAPI\Client\Model\fbaInventory\DeleteInventoryItemResponse**](../Model/DeleteInventoryItemResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getInventorySummaries()`

```php
getInventorySummaries($granularity_type, $granularity_id, $marketplace_ids, $details, $start_date_time, $seller_skus, $seller_sku, $next_token): \OpenAPI\Client\Model\fbaInventory\GetInventorySummariesResponse
```



Returns a list of inventory summaries. The summaries returned depend on the presence or absence of the startDateTime, sellerSkus and sellerSku parameters:  - All inventory summaries with available details are returned when the startDateTime, sellerSkus and sellerSku parameters are omitted. - When startDateTime is provided, the operation returns inventory summaries that have had changes after the date and time specified. The sellerSkus and sellerSku parameters are ignored. Important: To avoid errors, use both startDateTime and nextToken to get the next page of inventory summaries that have changed after the date and time specified. - When the sellerSkus parameter is provided, the operation returns inventory summaries for only the specified sellerSkus. The sellerSku parameter is ignored. - When the sellerSku parameter is provided, the operation returns inventory summaries for only the specified sellerSku.  Note: The parameters associated with this operation may contain special characters that must be encoded to successfully call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  Usage Plan:  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FbaInventoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$granularity_type = 'granularity_type_example'; // string | The granularity type for the inventory aggregation level.
$granularity_id = 'granularity_id_example'; // string | The granularity ID for the inventory aggregation level.
$marketplace_ids = array('marketplace_ids_example'); // string[] | The marketplace ID for the marketplace for which to return inventory summaries.
$details = false; // bool | true to return inventory summaries with additional summarized inventory details and quantities. Otherwise, returns inventory summaries only (default value).
$start_date_time = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime | A start date and time in ISO8601 format. If specified, all inventory summaries that have changed since then are returned. You must specify a date and time that is no earlier than 18 months prior to the date and time when you call the API. Note: Changes in inboundWorkingQuantity, inboundShippedQuantity and inboundReceivingQuantity are not detected.
$seller_skus = array('seller_skus_example'); // string[] | A list of seller SKUs for which to return inventory summaries. You may specify up to 50 SKUs.
$seller_sku = 'seller_sku_example'; // string | A single seller SKU used for querying the specified seller SKU inventory summaries.
$next_token = 'next_token_example'; // string | String token returned in the response of your previous request. The string token will expire 30 seconds after being created.

try {
    $result = $apiInstance->getInventorySummaries($granularity_type, $granularity_id, $marketplace_ids, $details, $start_date_time, $seller_skus, $seller_sku, $next_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FbaInventoryApi->getInventorySummaries: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **granularity_type** | **string**| The granularity type for the inventory aggregation level. | |
| **granularity_id** | **string**| The granularity ID for the inventory aggregation level. | |
| **marketplace_ids** | [**string[]**](../Model/string.md)| The marketplace ID for the marketplace for which to return inventory summaries. | |
| **details** | **bool**| true to return inventory summaries with additional summarized inventory details and quantities. Otherwise, returns inventory summaries only (default value). | [optional] [default to false] |
| **start_date_time** | **\DateTime**| A start date and time in ISO8601 format. If specified, all inventory summaries that have changed since then are returned. You must specify a date and time that is no earlier than 18 months prior to the date and time when you call the API. Note: Changes in inboundWorkingQuantity, inboundShippedQuantity and inboundReceivingQuantity are not detected. | [optional] |
| **seller_skus** | [**string[]**](../Model/string.md)| A list of seller SKUs for which to return inventory summaries. You may specify up to 50 SKUs. | [optional] |
| **seller_sku** | **string**| A single seller SKU used for querying the specified seller SKU inventory summaries. | [optional] |
| **next_token** | **string**| String token returned in the response of your previous request. The string token will expire 30 seconds after being created. | [optional] |

### Return type

[**\OpenAPI\Client\Model\fbaInventory\GetInventorySummariesResponse**](../Model/GetInventorySummariesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
