# OpenAPI\Client\ProductPricingApi

All URIs are relative to https://sellingpartnerapi-na.amazon.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getCompetitiveSummary()**](ProductPricingApi.md#getCompetitiveSummary) | **POST** /batches/products/pricing/2022-05-01/items/competitiveSummary |  |
| [**getFeaturedOfferExpectedPriceBatch()**](ProductPricingApi.md#getFeaturedOfferExpectedPriceBatch) | **POST** /batches/products/pricing/2022-05-01/offer/featuredOfferExpectedPrice |  |


## `getCompetitiveSummary()`

```php
getCompetitiveSummary($requests): \OpenAPI\Client\Model\pricing\CompetitiveSummaryBatchResponse
```



Returns the competitive summary response, including featured buying options for the ASIN and `marketplaceId` combination.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.033 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that are applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may receive higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ProductPricingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$requests = new \OpenAPI\Client\Model\pricing\CompetitiveSummaryBatchRequest(); // \OpenAPI\Client\Model\pricing\CompetitiveSummaryBatchRequest | The batch of `getCompetitiveSummary` requests.

try {
    $result = $apiInstance->getCompetitiveSummary($requests);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProductPricingApi->getCompetitiveSummary: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **requests** | [**\OpenAPI\Client\Model\pricing\CompetitiveSummaryBatchRequest**](../Model/CompetitiveSummaryBatchRequest.md)| The batch of &#x60;getCompetitiveSummary&#x60; requests. | |

### Return type

[**\OpenAPI\Client\Model\pricing\CompetitiveSummaryBatchResponse**](../Model/CompetitiveSummaryBatchResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getFeaturedOfferExpectedPriceBatch()`

```php
getFeaturedOfferExpectedPriceBatch($get_featured_offer_expected_price_batch_request_body): \OpenAPI\Client\Model\pricing\GetFeaturedOfferExpectedPriceBatchResponse
```



Returns the set of responses that correspond to the batched list of up to 40 requests defined in the request body. The response for each successful (HTTP status code 200) request in the set includes the computed listing price at or below which a seller can expect to become the featured offer (before applicable promotions). This is called the featured offer expected price (FOEP). Featured offer is not guaranteed because competing offers might change. Other offers might be featured based on factors such as fulfillment capabilities to a specific customer. The response to an unsuccessful request includes the available error text.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.033 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that are applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may receive higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ProductPricingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$get_featured_offer_expected_price_batch_request_body = new \OpenAPI\Client\Model\pricing\GetFeaturedOfferExpectedPriceBatchRequest(); // \OpenAPI\Client\Model\pricing\GetFeaturedOfferExpectedPriceBatchRequest | The batch of `getFeaturedOfferExpectedPrice` requests.

try {
    $result = $apiInstance->getFeaturedOfferExpectedPriceBatch($get_featured_offer_expected_price_batch_request_body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProductPricingApi->getFeaturedOfferExpectedPriceBatch: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **get_featured_offer_expected_price_batch_request_body** | [**\OpenAPI\Client\Model\pricing\GetFeaturedOfferExpectedPriceBatchRequest**](../Model/GetFeaturedOfferExpectedPriceBatchRequest.md)| The batch of &#x60;getFeaturedOfferExpectedPrice&#x60; requests. | |

### Return type

[**\OpenAPI\Client\Model\pricing\GetFeaturedOfferExpectedPriceBatchResponse**](../Model/GetFeaturedOfferExpectedPriceBatchResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
