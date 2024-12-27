# OpenAPI\Client\FeesApi

All URIs are relative to https://sellingpartnerapi-na.amazon.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getMyFeesEstimateForASIN()**](FeesApi.md#getMyFeesEstimateForASIN) | **POST** /products/fees/v0/items/{Asin}/feesEstimate |  |
| [**getMyFeesEstimateForSKU()**](FeesApi.md#getMyFeesEstimateForSKU) | **POST** /products/fees/v0/listings/{SellerSKU}/feesEstimate |  |
| [**getMyFeesEstimates()**](FeesApi.md#getMyFeesEstimates) | **POST** /products/fees/v0/feesEstimate |  |


## `getMyFeesEstimateForASIN()`

```php
getMyFeesEstimateForASIN($asin, $body): \OpenAPI\Client\Model\productfees\GetMyFeesEstimateResponse
```



Returns the estimated fees for the item indicated by the specified ASIN in the marketplace specified in the request body.  You can call `getMyFeesEstimateForASIN` for an item on behalf of a selling partner before the selling partner sets the item's price. The selling partner can then take estimated fees into account. Each fees request must include an original identifier. This identifier is included in the fees estimate so you can correlate a fees estimate with the original request.  **Note:** This identifier value is used to identify an estimate. Actual costs may vary. Search \"fees\" in [Seller Central](https://sellercentral.amazon.com/) and consult the store-specific fee schedule for the most up-to-date information.  **Note:** When using the `getMyFeesEstimateForASIN` operation with an ASIN, the fee estimates might be different. This is because these estimates use the item's catalog size, which might not always match the actual size of the item sent to Amazon.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FeesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$asin = 'asin_example'; // string | The Amazon Standard Identification Number (ASIN) of the item.
$body = new \OpenAPI\Client\Model\productfees\GetMyFeesEstimateRequest(); // \OpenAPI\Client\Model\productfees\GetMyFeesEstimateRequest

try {
    $result = $apiInstance->getMyFeesEstimateForASIN($asin, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FeesApi->getMyFeesEstimateForASIN: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **asin** | **string**| The Amazon Standard Identification Number (ASIN) of the item. | |
| **body** | [**\OpenAPI\Client\Model\productfees\GetMyFeesEstimateRequest**](../Model/GetMyFeesEstimateRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\productfees\GetMyFeesEstimateResponse**](../Model/GetMyFeesEstimateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getMyFeesEstimateForSKU()`

```php
getMyFeesEstimateForSKU($seller_sku, $body): \OpenAPI\Client\Model\productfees\GetMyFeesEstimateResponse
```



Returns the estimated fees for the item indicated by the specified seller SKU in the marketplace specified in the request body.  **Note:** The parameters associated with this operation may contain special characters that require URL encoding to call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  You can call `getMyFeesEstimateForSKU` for an item on behalf of a selling partner before the selling partner sets the item's price. The selling partner can then take any estimated fees into account. Each fees estimate request must include an original identifier. This identifier is included in the fees estimate so that you can correlate a fees estimate with the original request.  **Note:** This identifier value is used to identify an estimate. Actual costs may vary. Search \"fees\" in [Seller Central](https://sellercentral.amazon.com/) and consult the store-specific fee schedule for the most up-to-date information.  **Note:** When sellers use the `getMyFeesEstimateForSKU` operation with their `SellerSKU`, they get accurate fees based on real item measurements, but only after they've sent their items to Amazon.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FeesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$seller_sku = 'seller_sku_example'; // string | Used to identify an item in the given marketplace. SellerSKU is qualified by the seller's SellerId, which is included with every operation that you submit.
$body = new \OpenAPI\Client\Model\productfees\GetMyFeesEstimateRequest(); // \OpenAPI\Client\Model\productfees\GetMyFeesEstimateRequest

try {
    $result = $apiInstance->getMyFeesEstimateForSKU($seller_sku, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FeesApi->getMyFeesEstimateForSKU: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **seller_sku** | **string**| Used to identify an item in the given marketplace. SellerSKU is qualified by the seller&#39;s SellerId, which is included with every operation that you submit. | |
| **body** | [**\OpenAPI\Client\Model\productfees\GetMyFeesEstimateRequest**](../Model/GetMyFeesEstimateRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\productfees\GetMyFeesEstimateResponse**](../Model/GetMyFeesEstimateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getMyFeesEstimates()`

```php
getMyFeesEstimates($body): \OpenAPI\Client\Model\productfees\FeesEstimateResult[]
```



Returns the estimated fees for a list of products.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FeesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = array(new \OpenAPI\Client\Model\productfees\FeesEstimateByIdRequest()); // \OpenAPI\Client\Model\productfees\FeesEstimateByIdRequest[]

try {
    $result = $apiInstance->getMyFeesEstimates($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FeesApi->getMyFeesEstimates: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **body** | [**\OpenAPI\Client\Model\productfees\FeesEstimateByIdRequest[]**](../Model/FeesEstimateByIdRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\productfees\FeesEstimateResult[]**](../Model/FeesEstimateResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
