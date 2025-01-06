# OpenAPI\Client\ListingsApi

All URIs are relative to https://sellingpartnerapi-na.amazon.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getListingsRestrictions()**](ListingsApi.md#getListingsRestrictions) | **GET** /listings/2021-08-01/restrictions |  |


## `getListingsRestrictions()`

```php
getListingsRestrictions($asin, $seller_id, $marketplace_ids, $condition_type, $reason_locale): \OpenAPI\Client\Model\listingsRestrictions\RestrictionList
```



Returns listing restrictions for an item in the Amazon Catalog.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ListingsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$asin = B0000ASIN1; // string | The Amazon Standard Identification Number (ASIN) of the item.
$seller_id = 'seller_id_example'; // string | A selling partner identifier, such as a merchant account.
$marketplace_ids = ATVPDKIKX0DER; // string[] | A comma-delimited list of Amazon marketplace identifiers for the request.
$condition_type = used_very_good; // string | The condition used to filter restrictions.
$reason_locale = en_US; // string | A locale for reason text localization. When not provided, the default language code of the first marketplace is used. Examples: \"en_US\", \"fr_CA\", \"fr_FR\". Localized messages default to \"en_US\" when a localization is not available in the specified locale.

try {
    $result = $apiInstance->getListingsRestrictions($asin, $seller_id, $marketplace_ids, $condition_type, $reason_locale);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ListingsApi->getListingsRestrictions: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **asin** | **string**| The Amazon Standard Identification Number (ASIN) of the item. | |
| **seller_id** | **string**| A selling partner identifier, such as a merchant account. | |
| **marketplace_ids** | [**string[]**](../Model/string.md)| A comma-delimited list of Amazon marketplace identifiers for the request. | |
| **condition_type** | **string**| The condition used to filter restrictions. | [optional] |
| **reason_locale** | **string**| A locale for reason text localization. When not provided, the default language code of the first marketplace is used. Examples: \&quot;en_US\&quot;, \&quot;fr_CA\&quot;, \&quot;fr_FR\&quot;. Localized messages default to \&quot;en_US\&quot; when a localization is not available in the specified locale. | [optional] |

### Return type

[**\OpenAPI\Client\Model\listingsRestrictions\RestrictionList**](../Model/RestrictionList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
