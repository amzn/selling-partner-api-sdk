# OpenAPI\Client\UpdateInventoryApi

All URIs are relative to https://sellingpartnerapi-na.amazon.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**submitInventoryUpdate()**](UpdateInventoryApi.md#submitInventoryUpdate) | **POST** /vendor/directFulfillment/inventory/v1/warehouses/{warehouseId}/items |  |


## `submitInventoryUpdate()`

```php
submitInventoryUpdate($warehouse_id, $body): \OpenAPI\Client\Model\vendor\df\inventory\SubmitInventoryUpdateResponse
```



Submits inventory updates for the specified warehouse for either a partial or full feed of inventory items.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\UpdateInventoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$warehouse_id = 'warehouse_id_example'; // string | Identifier for the warehouse for which to update inventory.
$body = new \OpenAPI\Client\Model\vendor\df\inventory\SubmitInventoryUpdateRequest(); // \OpenAPI\Client\Model\vendor\df\inventory\SubmitInventoryUpdateRequest | The request body containing the inventory update data to submit.

try {
    $result = $apiInstance->submitInventoryUpdate($warehouse_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UpdateInventoryApi->submitInventoryUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **warehouse_id** | **string**| Identifier for the warehouse for which to update inventory. | |
| **body** | [**\OpenAPI\Client\Model\vendor\df\inventory\SubmitInventoryUpdateRequest**](../Model/SubmitInventoryUpdateRequest.md)| The request body containing the inventory update data to submit. | |

### Return type

[**\OpenAPI\Client\Model\vendor\df\inventory\SubmitInventoryUpdateResponse**](../Model/SubmitInventoryUpdateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
