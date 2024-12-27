# OpenAPI\Client\OffersApi

All URIs are relative to https://sellingpartnerapi-na.amazon.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**listOfferMetrics()**](OffersApi.md#listOfferMetrics) | **POST** /replenishment/2022-11-07/offers/metrics/search |  |
| [**listOffers()**](OffersApi.md#listOffers) | **POST** /replenishment/2022-11-07/offers/search |  |


## `listOfferMetrics()`

```php
listOfferMetrics($body): \OpenAPI\Client\Model\replenishment\ListOfferMetricsResponse
```



Returns aggregated replenishment program metrics for a selling partner's offers.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\OffersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \OpenAPI\Client\Model\replenishment\ListOfferMetricsRequest(); // \OpenAPI\Client\Model\replenishment\ListOfferMetricsRequest | The request body for the `listOfferMetrics` operation.

try {
    $result = $apiInstance->listOfferMetrics($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OffersApi->listOfferMetrics: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **body** | [**\OpenAPI\Client\Model\replenishment\ListOfferMetricsRequest**](../Model/ListOfferMetricsRequest.md)| The request body for the &#x60;listOfferMetrics&#x60; operation. | [optional] |

### Return type

[**\OpenAPI\Client\Model\replenishment\ListOfferMetricsResponse**](../Model/ListOfferMetricsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listOffers()`

```php
listOffers($body): \OpenAPI\Client\Model\replenishment\ListOffersResponse
```



Returns the details of a selling partner's replenishment program offers.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\OffersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \OpenAPI\Client\Model\replenishment\ListOffersRequest(); // \OpenAPI\Client\Model\replenishment\ListOffersRequest | The request body for the `listOffers` operation.

try {
    $result = $apiInstance->listOffers($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OffersApi->listOffers: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **body** | [**\OpenAPI\Client\Model\replenishment\ListOffersRequest**](../Model/ListOffersRequest.md)| The request body for the &#x60;listOffers&#x60; operation. | [optional] |

### Return type

[**\OpenAPI\Client\Model\replenishment\ListOffersResponse**](../Model/ListOffersResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
