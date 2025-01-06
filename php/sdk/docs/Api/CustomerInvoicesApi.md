# OpenAPI\Client\CustomerInvoicesApi

All URIs are relative to https://sellingpartnerapi-na.amazon.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getCustomerInvoice()**](CustomerInvoicesApi.md#getCustomerInvoice) | **GET** /vendor/directFulfillment/shipping/2021-12-28/customerInvoices/{purchaseOrderNumber} |  |
| [**getCustomerInvoices()**](CustomerInvoicesApi.md#getCustomerInvoices) | **GET** /vendor/directFulfillment/shipping/2021-12-28/customerInvoices |  |


## `getCustomerInvoice()`

```php
getCustomerInvoice($purchase_order_number): \OpenAPI\Client\Model\vendorDfShipping\CustomerInvoice
```



Returns a customer invoice based on the purchaseOrderNumber that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\CustomerInvoicesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$purchase_order_number = 'purchase_order_number_example'; // string | Purchase order number of the shipment for which to return the invoice.

try {
    $result = $apiInstance->getCustomerInvoice($purchase_order_number);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CustomerInvoicesApi->getCustomerInvoice: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **purchase_order_number** | **string**| Purchase order number of the shipment for which to return the invoice. | |

### Return type

[**\OpenAPI\Client\Model\vendorDfShipping\CustomerInvoice**](../Model/CustomerInvoice.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getCustomerInvoices()`

```php
getCustomerInvoices($created_after, $created_before, $ship_from_party_id, $limit, $sort_order, $next_token): \OpenAPI\Client\Model\vendorDfShipping\CustomerInvoiceList
```



Returns a list of customer invoices created during a time frame that you specify. You define the time frame using the createdAfter and createdBefore parameters. You must use both of these parameters. The date range to search must be no more than 7 days.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\CustomerInvoicesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$created_after = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime | Orders that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format.
$created_before = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime | Orders that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format.
$ship_from_party_id = 'ship_from_party_id_example'; // string | The vendor warehouseId for order fulfillment. If not specified, the result will contain orders for all warehouses.
$limit = 56; // int | The limit to the number of records returned
$sort_order = 'sort_order_example'; // string | Sort ASC or DESC by order creation date.
$next_token = 'next_token_example'; // string | Used for pagination when there are more orders than the specified result size limit. The token value is returned in the previous API call.

try {
    $result = $apiInstance->getCustomerInvoices($created_after, $created_before, $ship_from_party_id, $limit, $sort_order, $next_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CustomerInvoicesApi->getCustomerInvoices: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **created_after** | **\DateTime**| Orders that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format. | |
| **created_before** | **\DateTime**| Orders that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format. | |
| **ship_from_party_id** | **string**| The vendor warehouseId for order fulfillment. If not specified, the result will contain orders for all warehouses. | [optional] |
| **limit** | **int**| The limit to the number of records returned | [optional] |
| **sort_order** | **string**| Sort ASC or DESC by order creation date. | [optional] |
| **next_token** | **string**| Used for pagination when there are more orders than the specified result size limit. The token value is returned in the previous API call. | [optional] |

### Return type

[**\OpenAPI\Client\Model\vendorDfShipping\CustomerInvoiceList**](../Model/CustomerInvoiceList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `payload`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
