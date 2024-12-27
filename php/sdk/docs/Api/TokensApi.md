# OpenAPI\Client\TokensApi

All URIs are relative to https://sellingpartnerapi-na.amazon.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createRestrictedDataToken()**](TokensApi.md#createRestrictedDataToken) | **POST** /tokens/2021-03-01/restrictedDataToken |  |


## `createRestrictedDataToken()`

```php
createRestrictedDataToken($body): \OpenAPI\Client\Model\tokens\CreateRestrictedDataTokenResponse
```



Returns a Restricted Data Token (RDT) for one or more restricted resources that you specify. A restricted resource is the HTTP method and path from a restricted operation that returns Personally Identifiable Information (PII), plus a dataElements value that indicates the type of PII requested. See the Tokens API Use Case Guide for a list of restricted operations. Use the RDT returned here as the access token in subsequent calls to the corresponding restricted operations.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\TokensApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \OpenAPI\Client\Model\tokens\CreateRestrictedDataTokenRequest(); // \OpenAPI\Client\Model\tokens\CreateRestrictedDataTokenRequest | The restricted data token request details.

try {
    $result = $apiInstance->createRestrictedDataToken($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TokensApi->createRestrictedDataToken: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **body** | [**\OpenAPI\Client\Model\tokens\CreateRestrictedDataTokenRequest**](../Model/CreateRestrictedDataTokenRequest.md)| The restricted data token request details. | |

### Return type

[**\OpenAPI\Client\Model\tokens\CreateRestrictedDataTokenResponse**](../Model/CreateRestrictedDataTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
