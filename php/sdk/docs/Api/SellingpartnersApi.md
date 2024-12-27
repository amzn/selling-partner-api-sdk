# OpenAPI\Client\SellingpartnersApi

All URIs are relative to https://sellingpartnerapi-na.amazon.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getSellingPartnerMetrics()**](SellingpartnersApi.md#getSellingPartnerMetrics) | **POST** /replenishment/2022-11-07/sellingPartners/metrics/search |  |


## `getSellingPartnerMetrics()`

```php
getSellingPartnerMetrics($body): \OpenAPI\Client\Model\replenishment\GetSellingPartnerMetricsResponse
```



Returns aggregated replenishment program metrics for a selling partner.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\SellingpartnersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \OpenAPI\Client\Model\replenishment\GetSellingPartnerMetricsRequest(); // \OpenAPI\Client\Model\replenishment\GetSellingPartnerMetricsRequest | The request body for the `getSellingPartnerMetrics` operation.

try {
    $result = $apiInstance->getSellingPartnerMetrics($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SellingpartnersApi->getSellingPartnerMetrics: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **body** | [**\OpenAPI\Client\Model\replenishment\GetSellingPartnerMetricsRequest**](../Model/GetSellingPartnerMetricsRequest.md)| The request body for the &#x60;getSellingPartnerMetrics&#x60; operation. | [optional] |

### Return type

[**\OpenAPI\Client\Model\replenishment\GetSellingPartnerMetricsResponse**](../Model/GetSellingPartnerMetricsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
