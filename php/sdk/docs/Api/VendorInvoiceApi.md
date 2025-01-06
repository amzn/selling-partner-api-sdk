# OpenAPI\Client\VendorInvoiceApi

All URIs are relative to https://sellingpartnerapi-na.amazon.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**submitInvoice()**](VendorInvoiceApi.md#submitInvoice) | **POST** /vendor/directFulfillment/payments/v1/invoices |  |


## `submitInvoice()`

```php
submitInvoice($body): \OpenAPI\Client\Model\vendorDfPayments\SubmitInvoiceResponse
```



Submits one or more invoices for a vendor's direct fulfillment orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\VendorInvoiceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \OpenAPI\Client\Model\vendorDfPayments\SubmitInvoiceRequest(); // \OpenAPI\Client\Model\vendorDfPayments\SubmitInvoiceRequest | The request body containing one or more invoices for vendor orders.

try {
    $result = $apiInstance->submitInvoice($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VendorInvoiceApi->submitInvoice: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **body** | [**\OpenAPI\Client\Model\vendorDfPayments\SubmitInvoiceRequest**](../Model/SubmitInvoiceRequest.md)| The request body containing one or more invoices for vendor orders. | |

### Return type

[**\OpenAPI\Client\Model\vendorDfPayments\SubmitInvoiceResponse**](../Model/SubmitInvoiceResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
