# OpenAPI\Client\ListingsItemsApi

All URIs are relative to https://sellingpartnerapi-na.amazon.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**deleteListingsItem()**](ListingsItemsApi.md#deleteListingsItem) | **DELETE** /listings/2021-08-01/items/{sellerId}/{sku} | deleteListingsItem |
| [**getListingsItem()**](ListingsItemsApi.md#getListingsItem) | **GET** /listings/2021-08-01/items/{sellerId}/{sku} | getListingsItem |
| [**patchListingsItem()**](ListingsItemsApi.md#patchListingsItem) | **PATCH** /listings/2021-08-01/items/{sellerId}/{sku} | patchListingsItem |
| [**putListingsItem()**](ListingsItemsApi.md#putListingsItem) | **PUT** /listings/2021-08-01/items/{sellerId}/{sku} | putListingsItem |


## `deleteListingsItem()`

```php
deleteListingsItem($seller_id, $sku, $marketplace_ids, $issue_locale): \OpenAPI\Client\Model\listingsItems\ListingsItemSubmissionResponse
```

deleteListingsItem

Delete a listings item for a selling partner.  **Note:** The parameters associated with this operation may contain special characters that must be encoded to successfully call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ListingsItemsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$seller_id = 'seller_id_example'; // string | A selling partner identifier, such as a merchant account or vendor code.
$sku = 'sku_example'; // string | A selling partner provided identifier for an Amazon listing.
$marketplace_ids = ATVPDKIKX0DER; // string[] | A comma-delimited list of Amazon marketplace identifiers for the request.
$issue_locale = en_US; // string | A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: `en_US`, `fr_CA`, `fr_FR`. Localized messages default to `en_US` when a localization is not available in the specified locale.

try {
    $result = $apiInstance->deleteListingsItem($seller_id, $sku, $marketplace_ids, $issue_locale);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ListingsItemsApi->deleteListingsItem: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **seller_id** | **string**| A selling partner identifier, such as a merchant account or vendor code. | |
| **sku** | **string**| A selling partner provided identifier for an Amazon listing. | |
| **marketplace_ids** | [**string[]**](../Model/string.md)| A comma-delimited list of Amazon marketplace identifiers for the request. | |
| **issue_locale** | **string**| A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: &#x60;en_US&#x60;, &#x60;fr_CA&#x60;, &#x60;fr_FR&#x60;. Localized messages default to &#x60;en_US&#x60; when a localization is not available in the specified locale. | [optional] |

### Return type

[**\OpenAPI\Client\Model\listingsItems\ListingsItemSubmissionResponse**](../Model/ListingsItemSubmissionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getListingsItem()`

```php
getListingsItem($seller_id, $sku, $marketplace_ids, $issue_locale, $included_data): \OpenAPI\Client\Model\listingsItems\Item
```

getListingsItem

Returns details about a listings item for a selling partner.  **Note:** The parameters associated with this operation may contain special characters that must be encoded to successfully call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ListingsItemsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$seller_id = 'seller_id_example'; // string | A selling partner identifier, such as a merchant account or vendor code.
$sku = 'sku_example'; // string | A selling partner provided identifier for an Amazon listing.
$marketplace_ids = ATVPDKIKX0DER; // string[] | A comma-delimited list of Amazon marketplace identifiers for the request.
$issue_locale = en_US; // string | A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: `en_US`, `fr_CA`, `fr_FR`. Localized messages default to `en_US` when a localization is not available in the specified locale.
$included_data = summaries; // string[] | A comma-delimited list of data sets to include in the response. Default: `summaries`.

try {
    $result = $apiInstance->getListingsItem($seller_id, $sku, $marketplace_ids, $issue_locale, $included_data);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ListingsItemsApi->getListingsItem: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **seller_id** | **string**| A selling partner identifier, such as a merchant account or vendor code. | |
| **sku** | **string**| A selling partner provided identifier for an Amazon listing. | |
| **marketplace_ids** | [**string[]**](../Model/string.md)| A comma-delimited list of Amazon marketplace identifiers for the request. | |
| **issue_locale** | **string**| A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: &#x60;en_US&#x60;, &#x60;fr_CA&#x60;, &#x60;fr_FR&#x60;. Localized messages default to &#x60;en_US&#x60; when a localization is not available in the specified locale. | [optional] |
| **included_data** | [**string[]**](../Model/string.md)| A comma-delimited list of data sets to include in the response. Default: &#x60;summaries&#x60;. | [optional] |

### Return type

[**\OpenAPI\Client\Model\listingsItems\Item**](../Model/Item.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `patchListingsItem()`

```php
patchListingsItem($seller_id, $sku, $marketplace_ids, $body, $included_data, $mode, $issue_locale): \OpenAPI\Client\Model\listingsItems\ListingsItemSubmissionResponse
```

patchListingsItem

Partially update (patch) a listings item for a selling partner. Only top-level listings item attributes can be patched. Patching nested attributes is not supported.  **Note:** This operation has a throttling rate of one request per second when `mode` is `VALIDATION_PREVIEW`.  **Note:** The parameters associated with this operation may contain special characters that must be encoded to successfully call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ListingsItemsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$seller_id = 'seller_id_example'; // string | A selling partner identifier, such as a merchant account or vendor code.
$sku = 'sku_example'; // string | A selling partner provided identifier for an Amazon listing.
$marketplace_ids = ATVPDKIKX0DER; // string[] | A comma-delimited list of Amazon marketplace identifiers for the request.
$body = new \OpenAPI\Client\Model\listingsItems\ListingsItemPatchRequest(); // \OpenAPI\Client\Model\listingsItems\ListingsItemPatchRequest | The request body schema for the `patchListingsItem` operation.
$included_data = issues; // string[] | A comma-delimited list of data sets to include in the response. Default: `issues`.
$mode = VALIDATION_PREVIEW; // string | The mode of operation for the request.
$issue_locale = en_US; // string | A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: `en_US`, `fr_CA`, `fr_FR`. Localized messages default to `en_US` when a localization is not available in the specified locale.

try {
    $result = $apiInstance->patchListingsItem($seller_id, $sku, $marketplace_ids, $body, $included_data, $mode, $issue_locale);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ListingsItemsApi->patchListingsItem: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **seller_id** | **string**| A selling partner identifier, such as a merchant account or vendor code. | |
| **sku** | **string**| A selling partner provided identifier for an Amazon listing. | |
| **marketplace_ids** | [**string[]**](../Model/string.md)| A comma-delimited list of Amazon marketplace identifiers for the request. | |
| **body** | [**\OpenAPI\Client\Model\listingsItems\ListingsItemPatchRequest**](../Model/ListingsItemPatchRequest.md)| The request body schema for the &#x60;patchListingsItem&#x60; operation. | |
| **included_data** | [**string[]**](../Model/string.md)| A comma-delimited list of data sets to include in the response. Default: &#x60;issues&#x60;. | [optional] |
| **mode** | **string**| The mode of operation for the request. | [optional] |
| **issue_locale** | **string**| A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: &#x60;en_US&#x60;, &#x60;fr_CA&#x60;, &#x60;fr_FR&#x60;. Localized messages default to &#x60;en_US&#x60; when a localization is not available in the specified locale. | [optional] |

### Return type

[**\OpenAPI\Client\Model\listingsItems\ListingsItemSubmissionResponse**](../Model/ListingsItemSubmissionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `putListingsItem()`

```php
putListingsItem($seller_id, $sku, $marketplace_ids, $body, $included_data, $mode, $issue_locale): \OpenAPI\Client\Model\listingsItems\ListingsItemSubmissionResponse
```

putListingsItem

Creates or fully updates an existing listings item for a selling partner.  **Note:** This operation has a throttling rate of one request per second when `mode` is `VALIDATION_PREVIEW`.  **Note:** The parameters associated with this operation may contain special characters that must be encoded to successfully call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ListingsItemsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$seller_id = 'seller_id_example'; // string | A selling partner identifier, such as a merchant account or vendor code.
$sku = 'sku_example'; // string | A selling partner provided identifier for an Amazon listing.
$marketplace_ids = ATVPDKIKX0DER; // string[] | A comma-delimited list of Amazon marketplace identifiers for the request.
$body = new \OpenAPI\Client\Model\listingsItems\ListingsItemPutRequest(); // \OpenAPI\Client\Model\listingsItems\ListingsItemPutRequest | The request body schema for the `putListingsItem` operation.
$included_data = issues; // string[] | A comma-delimited list of data sets to include in the response. Default: `issues`.
$mode = VALIDATION_PREVIEW; // string | The mode of operation for the request.
$issue_locale = en_US; // string | A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: `en_US`, `fr_CA`, `fr_FR`. Localized messages default to `en_US` when a localization is not available in the specified locale.

try {
    $result = $apiInstance->putListingsItem($seller_id, $sku, $marketplace_ids, $body, $included_data, $mode, $issue_locale);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ListingsItemsApi->putListingsItem: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **seller_id** | **string**| A selling partner identifier, such as a merchant account or vendor code. | |
| **sku** | **string**| A selling partner provided identifier for an Amazon listing. | |
| **marketplace_ids** | [**string[]**](../Model/string.md)| A comma-delimited list of Amazon marketplace identifiers for the request. | |
| **body** | [**\OpenAPI\Client\Model\listingsItems\ListingsItemPutRequest**](../Model/ListingsItemPutRequest.md)| The request body schema for the &#x60;putListingsItem&#x60; operation. | |
| **included_data** | [**string[]**](../Model/string.md)| A comma-delimited list of data sets to include in the response. Default: &#x60;issues&#x60;. | [optional] |
| **mode** | **string**| The mode of operation for the request. | [optional] |
| **issue_locale** | **string**| A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: &#x60;en_US&#x60;, &#x60;fr_CA&#x60;, &#x60;fr_FR&#x60;. Localized messages default to &#x60;en_US&#x60; when a localization is not available in the specified locale. | [optional] |

### Return type

[**\OpenAPI\Client\Model\listingsItems\ListingsItemSubmissionResponse**](../Model/ListingsItemSubmissionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
