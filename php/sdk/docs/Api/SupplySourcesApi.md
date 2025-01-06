# OpenAPI\Client\SupplySourcesApi

All URIs are relative to https://sellingpartnerapi-na.amazon.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**archiveSupplySource()**](SupplySourcesApi.md#archiveSupplySource) | **DELETE** /supplySources/2020-07-01/supplySources/{supplySourceId} |  |
| [**createSupplySource()**](SupplySourcesApi.md#createSupplySource) | **POST** /supplySources/2020-07-01/supplySources |  |
| [**getSupplySource()**](SupplySourcesApi.md#getSupplySource) | **GET** /supplySources/2020-07-01/supplySources/{supplySourceId} |  |
| [**getSupplySources()**](SupplySourcesApi.md#getSupplySources) | **GET** /supplySources/2020-07-01/supplySources |  |
| [**updateSupplySource()**](SupplySourcesApi.md#updateSupplySource) | **PUT** /supplySources/2020-07-01/supplySources/{supplySourceId} |  |
| [**updateSupplySourceStatus()**](SupplySourcesApi.md#updateSupplySourceStatus) | **PUT** /supplySources/2020-07-01/supplySources/{supplySourceId}/status |  |


## `archiveSupplySource()`

```php
archiveSupplySource($supply_source_id): \OpenAPI\Client\Model\supplySources\ErrorList
```



Archive a supply source, making it inactive. Cannot be undone.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\SupplySourcesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$supply_source_id = 'supply_source_id_example'; // string | The unique identifier of a supply source.

try {
    $result = $apiInstance->archiveSupplySource($supply_source_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SupplySourcesApi->archiveSupplySource: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **supply_source_id** | **string**| The unique identifier of a supply source. | |

### Return type

[**\OpenAPI\Client\Model\supplySources\ErrorList**](../Model/ErrorList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createSupplySource()`

```php
createSupplySource($payload): \OpenAPI\Client\Model\supplySources\CreateSupplySourceResponse
```



Create a new supply source.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\SupplySourcesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$payload = new \OpenAPI\Client\Model\supplySources\CreateSupplySourceRequest(); // \OpenAPI\Client\Model\supplySources\CreateSupplySourceRequest | A request to create a supply source.

try {
    $result = $apiInstance->createSupplySource($payload);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SupplySourcesApi->createSupplySource: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **payload** | [**\OpenAPI\Client\Model\supplySources\CreateSupplySourceRequest**](../Model/CreateSupplySourceRequest.md)| A request to create a supply source. | |

### Return type

[**\OpenAPI\Client\Model\supplySources\CreateSupplySourceResponse**](../Model/CreateSupplySourceResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getSupplySource()`

```php
getSupplySource($supply_source_id): \OpenAPI\Client\Model\supplySources\SupplySource
```



Retrieve a supply source.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\SupplySourcesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$supply_source_id = 'supply_source_id_example'; // string | The unique identifier of a supply source.

try {
    $result = $apiInstance->getSupplySource($supply_source_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SupplySourcesApi->getSupplySource: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **supply_source_id** | **string**| The unique identifier of a supply source. | |

### Return type

[**\OpenAPI\Client\Model\supplySources\SupplySource**](../Model/SupplySource.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getSupplySources()`

```php
getSupplySources($next_page_token, $page_size): \OpenAPI\Client\Model\supplySources\GetSupplySourcesResponse
```



The path to retrieve paginated supply sources.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\SupplySourcesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$next_page_token = 'next_page_token_example'; // string | The pagination token to retrieve a specific page of results.
$page_size = 10.0; // float | The number of supply sources to return per paginated request.

try {
    $result = $apiInstance->getSupplySources($next_page_token, $page_size);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SupplySourcesApi->getSupplySources: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **next_page_token** | **string**| The pagination token to retrieve a specific page of results. | [optional] |
| **page_size** | **float**| The number of supply sources to return per paginated request. | [optional] [default to 10.0] |

### Return type

[**\OpenAPI\Client\Model\supplySources\GetSupplySourcesResponse**](../Model/GetSupplySourcesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateSupplySource()`

```php
updateSupplySource($supply_source_id, $payload): \OpenAPI\Client\Model\supplySources\ErrorList
```



Update the configuration and capabilities of a supply source.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\SupplySourcesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$supply_source_id = 'supply_source_id_example'; // string | The unique identitier of a supply source.
$payload = new \OpenAPI\Client\Model\supplySources\UpdateSupplySourceRequest(); // \OpenAPI\Client\Model\supplySources\UpdateSupplySourceRequest

try {
    $result = $apiInstance->updateSupplySource($supply_source_id, $payload);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SupplySourcesApi->updateSupplySource: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **supply_source_id** | **string**| The unique identitier of a supply source. | |
| **payload** | [**\OpenAPI\Client\Model\supplySources\UpdateSupplySourceRequest**](../Model/UpdateSupplySourceRequest.md)|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\supplySources\ErrorList**](../Model/ErrorList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateSupplySourceStatus()`

```php
updateSupplySourceStatus($supply_source_id, $payload): \OpenAPI\Client\Model\supplySources\ErrorList
```



Update the status of a supply source.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\SupplySourcesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$supply_source_id = 'supply_source_id_example'; // string | The unique identifier of a supply source.
$payload = new \OpenAPI\Client\Model\supplySources\UpdateSupplySourceStatusRequest(); // \OpenAPI\Client\Model\supplySources\UpdateSupplySourceStatusRequest

try {
    $result = $apiInstance->updateSupplySourceStatus($supply_source_id, $payload);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SupplySourcesApi->updateSupplySourceStatus: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **supply_source_id** | **string**| The unique identifier of a supply source. | |
| **payload** | [**\OpenAPI\Client\Model\supplySources\UpdateSupplySourceStatusRequest**](../Model/UpdateSupplySourceStatusRequest.md)|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\supplySources\ErrorList**](../Model/ErrorList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
