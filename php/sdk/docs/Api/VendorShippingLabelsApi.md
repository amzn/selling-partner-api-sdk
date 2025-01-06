# OpenAPI\Client\VendorShippingLabelsApi

All URIs are relative to https://sellingpartnerapi-na.amazon.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createShippingLabels()**](VendorShippingLabelsApi.md#createShippingLabels) | **POST** /vendor/directFulfillment/shipping/2021-12-28/shippingLabels/{purchaseOrderNumber} |  |
| [**getShippingLabel()**](VendorShippingLabelsApi.md#getShippingLabel) | **GET** /vendor/directFulfillment/shipping/2021-12-28/shippingLabels/{purchaseOrderNumber} |  |
| [**getShippingLabels()**](VendorShippingLabelsApi.md#getShippingLabels) | **GET** /vendor/directFulfillment/shipping/2021-12-28/shippingLabels |  |
| [**submitShippingLabelRequest()**](VendorShippingLabelsApi.md#submitShippingLabelRequest) | **POST** /vendor/directFulfillment/shipping/2021-12-28/shippingLabels |  |


## `createShippingLabels()`

```php
createShippingLabels($purchase_order_number, $body): \OpenAPI\Client\Model\vendorDfShipping\ShippingLabel
```



Creates shipping labels for a purchase order and returns the labels.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\VendorShippingLabelsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$purchase_order_number = 'purchase_order_number_example'; // string | The purchase order number for which you want to return the shipping labels. It should be the same purchaseOrderNumber as received in the order.
$body = new \OpenAPI\Client\Model\vendorDfShipping\CreateShippingLabelsRequest(); // \OpenAPI\Client\Model\vendorDfShipping\CreateShippingLabelsRequest | The request payload containing parameters for creating shipping labels.

try {
    $result = $apiInstance->createShippingLabels($purchase_order_number, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VendorShippingLabelsApi->createShippingLabels: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **purchase_order_number** | **string**| The purchase order number for which you want to return the shipping labels. It should be the same purchaseOrderNumber as received in the order. | |
| **body** | [**\OpenAPI\Client\Model\vendorDfShipping\CreateShippingLabelsRequest**](../Model/CreateShippingLabelsRequest.md)| The request payload containing parameters for creating shipping labels. | |

### Return type

[**\OpenAPI\Client\Model\vendorDfShipping\ShippingLabel**](../Model/ShippingLabel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getShippingLabel()`

```php
getShippingLabel($purchase_order_number): \OpenAPI\Client\Model\vendorDfShipping\ShippingLabel
```



Returns a shipping label for the purchaseOrderNumber that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\VendorShippingLabelsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$purchase_order_number = 'purchase_order_number_example'; // string | The purchase order number for which you want to return the shipping label and should be the same purchaseOrderNumber as received in the order.

try {
    $result = $apiInstance->getShippingLabel($purchase_order_number);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VendorShippingLabelsApi->getShippingLabel: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **purchase_order_number** | **string**| The purchase order number for which you want to return the shipping label and should be the same purchaseOrderNumber as received in the order. | |

### Return type

[**\OpenAPI\Client\Model\vendorDfShipping\ShippingLabel**](../Model/ShippingLabel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getShippingLabels()`

```php
getShippingLabels($created_after, $created_before, $ship_from_party_id, $limit, $sort_order, $next_token): \OpenAPI\Client\Model\vendorDfShipping\ShippingLabelList
```



Returns a list of shipping labels created during the time frame that you specify. You define that time frame using the createdAfter and createdBefore parameters. You must use both of these parameters. The date range to search must not be more than 7 days.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\VendorShippingLabelsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$created_after = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime | Shipping labels that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format.
$created_before = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime | Shipping labels that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format.
$ship_from_party_id = 'ship_from_party_id_example'; // string | The vendor warehouseId for order fulfillment. If not specified, the result will contain orders for all warehouses.
$limit = 56; // int | The limit to the number of records returned.
$sort_order = 'ASC'; // string | Sort ASC or DESC by order creation date.
$next_token = 'next_token_example'; // string | Used for pagination when there are more ship labels than the specified result size limit. The token value is returned in the previous API call.

try {
    $result = $apiInstance->getShippingLabels($created_after, $created_before, $ship_from_party_id, $limit, $sort_order, $next_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VendorShippingLabelsApi->getShippingLabels: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **created_after** | **\DateTime**| Shipping labels that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format. | |
| **created_before** | **\DateTime**| Shipping labels that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format. | |
| **ship_from_party_id** | **string**| The vendor warehouseId for order fulfillment. If not specified, the result will contain orders for all warehouses. | [optional] |
| **limit** | **int**| The limit to the number of records returned. | [optional] |
| **sort_order** | **string**| Sort ASC or DESC by order creation date. | [optional] [default to &#39;ASC&#39;] |
| **next_token** | **string**| Used for pagination when there are more ship labels than the specified result size limit. The token value is returned in the previous API call. | [optional] |

### Return type

[**\OpenAPI\Client\Model\vendorDfShipping\ShippingLabelList**](../Model/ShippingLabelList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `pagination`, `shippingLabels`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `submitShippingLabelRequest()`

```php
submitShippingLabelRequest($body): \OpenAPI\Client\Model\vendorDfShipping\TransactionReference
```



Creates a shipping label for a purchase order and returns a transactionId for reference.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\VendorShippingLabelsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \OpenAPI\Client\Model\vendorDfShipping\SubmitShippingLabelsRequest(); // \OpenAPI\Client\Model\vendorDfShipping\SubmitShippingLabelsRequest | Request body containing the shipping labels data.

try {
    $result = $apiInstance->submitShippingLabelRequest($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VendorShippingLabelsApi->submitShippingLabelRequest: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **body** | [**\OpenAPI\Client\Model\vendorDfShipping\SubmitShippingLabelsRequest**](../Model/SubmitShippingLabelsRequest.md)| Request body containing the shipping labels data. | |

### Return type

[**\OpenAPI\Client\Model\vendorDfShipping\TransactionReference**](../Model/TransactionReference.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
