# OpenAPI\Client\ShippingApi

All URIs are relative to https://sellingpartnerapi-eu.amazon.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**cancelShipment()**](ShippingApi.md#cancelShipment) | **PUT** /shipping/v2/shipments/{shipmentId}/cancel |  |
| [**directPurchaseShipment()**](ShippingApi.md#directPurchaseShipment) | **POST** /shipping/v2/shipments/directPurchase |  |
| [**generateCollectionForm()**](ShippingApi.md#generateCollectionForm) | **POST** /shipping/v2/collectionForms |  |
| [**getAccessPoints()**](ShippingApi.md#getAccessPoints) | **GET** /shipping/v2/accessPoints |  |
| [**getAdditionalInputs()**](ShippingApi.md#getAdditionalInputs) | **GET** /shipping/v2/shipments/additionalInputs/schema |  |
| [**getCarrierAccountFormInputs()**](ShippingApi.md#getCarrierAccountFormInputs) | **GET** /shipping/v2/carrierAccountFormInputs |  |
| [**getCarrierAccounts()**](ShippingApi.md#getCarrierAccounts) | **PUT** /shipping/v2/carrierAccounts |  |
| [**getCollectionForm()**](ShippingApi.md#getCollectionForm) | **GET** /shipping/v2/collectionForms/{collectionFormId} |  |
| [**getCollectionFormHistory()**](ShippingApi.md#getCollectionFormHistory) | **PUT** /shipping/v2/collectionForms/history |  |
| [**getRates()**](ShippingApi.md#getRates) | **POST** /shipping/v2/shipments/rates |  |
| [**getShipmentDocuments()**](ShippingApi.md#getShipmentDocuments) | **GET** /shipping/v2/shipments/{shipmentId}/documents |  |
| [**getTracking()**](ShippingApi.md#getTracking) | **GET** /shipping/v2/tracking |  |
| [**getUnmanifestedShipments()**](ShippingApi.md#getUnmanifestedShipments) | **PUT** /shipping/v2/unmanifestedShipments |  |
| [**linkCarrierAccount()**](ShippingApi.md#linkCarrierAccount) | **PUT** /shipping/v2/carrierAccounts/{carrierId} |  |
| [**oneClickShipment()**](ShippingApi.md#oneClickShipment) | **POST** /shipping/v2/oneClickShipment |  |
| [**purchaseShipment()**](ShippingApi.md#purchaseShipment) | **POST** /shipping/v2/shipments |  |
| [**unlinkCarrierAccount()**](ShippingApi.md#unlinkCarrierAccount) | **PUT** /shipping/v2/carrierAccounts/{carrierId}/unlink |  |


## `cancelShipment()`

```php
cancelShipment($shipment_id, $x_amzn_shipping_business_id): \OpenAPI\Client\Model\shipping\CancelShipmentResponse
```



Cancels a purchased shipment. Returns an empty object if the shipment is successfully cancelled.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ShippingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$shipment_id = 'shipment_id_example'; // string | The shipment identifier originally returned by the purchaseShipment operation.
$x_amzn_shipping_business_id = 'x_amzn_shipping_business_id_example'; // string | Amazon shipping business to assume for this request. The default is AmazonShipping_UK.

try {
    $result = $apiInstance->cancelShipment($shipment_id, $x_amzn_shipping_business_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShippingApi->cancelShipment: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **shipment_id** | **string**| The shipment identifier originally returned by the purchaseShipment operation. | |
| **x_amzn_shipping_business_id** | **string**| Amazon shipping business to assume for this request. The default is AmazonShipping_UK. | [optional] |

### Return type

[**\OpenAPI\Client\Model\shipping\CancelShipmentResponse**](../Model/CancelShipmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `directPurchaseShipment()`

```php
directPurchaseShipment($body, $x_amzn_idempotency_key, $locale, $x_amzn_shipping_business_id): \OpenAPI\Client\Model\shipping\DirectPurchaseResponse
```



Purchases the shipping service for a shipment using the best fit service offering. Returns purchase related details and documents.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ShippingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \OpenAPI\Client\Model\shipping\DirectPurchaseRequest(); // \OpenAPI\Client\Model\shipping\DirectPurchaseRequest
$x_amzn_idempotency_key = 'x_amzn_idempotency_key_example'; // string | A unique value which the server uses to recognize subsequent retries of the same request.
$locale = 'locale_example'; // string | The IETF Language Tag. Note that this only supports the primary language subtag with one secondary language subtag (i.e. en-US, fr-CA). The secondary language subtag is almost always a regional designation. This does not support additional subtags beyond the primary and secondary language subtags.
$x_amzn_shipping_business_id = 'x_amzn_shipping_business_id_example'; // string | Amazon shipping business to assume for this request. The default is AmazonShipping_UK.

try {
    $result = $apiInstance->directPurchaseShipment($body, $x_amzn_idempotency_key, $locale, $x_amzn_shipping_business_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShippingApi->directPurchaseShipment: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **body** | [**\OpenAPI\Client\Model\shipping\DirectPurchaseRequest**](../Model/DirectPurchaseRequest.md)|  | |
| **x_amzn_idempotency_key** | **string**| A unique value which the server uses to recognize subsequent retries of the same request. | [optional] |
| **locale** | **string**| The IETF Language Tag. Note that this only supports the primary language subtag with one secondary language subtag (i.e. en-US, fr-CA). The secondary language subtag is almost always a regional designation. This does not support additional subtags beyond the primary and secondary language subtags. | [optional] |
| **x_amzn_shipping_business_id** | **string**| Amazon shipping business to assume for this request. The default is AmazonShipping_UK. | [optional] |

### Return type

[**\OpenAPI\Client\Model\shipping\DirectPurchaseResponse**](../Model/DirectPurchaseResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `generateCollectionForm()`

```php
generateCollectionForm($body, $x_amzn_idempotency_key, $x_amzn_shipping_business_id): \OpenAPI\Client\Model\shipping\GenerateCollectionFormResponse
```



This API  Call to generate the collection form.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ShippingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \OpenAPI\Client\Model\shipping\GenerateCollectionFormRequest(); // \OpenAPI\Client\Model\shipping\GenerateCollectionFormRequest
$x_amzn_idempotency_key = 'x_amzn_idempotency_key_example'; // string | A unique value which the server uses to recognize subsequent retries of the same request.
$x_amzn_shipping_business_id = 'x_amzn_shipping_business_id_example'; // string | Amazon shipping business to assume for this request. The default is AmazonShipping_UK.

try {
    $result = $apiInstance->generateCollectionForm($body, $x_amzn_idempotency_key, $x_amzn_shipping_business_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShippingApi->generateCollectionForm: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **body** | [**\OpenAPI\Client\Model\shipping\GenerateCollectionFormRequest**](../Model/GenerateCollectionFormRequest.md)|  | |
| **x_amzn_idempotency_key** | **string**| A unique value which the server uses to recognize subsequent retries of the same request. | [optional] |
| **x_amzn_shipping_business_id** | **string**| Amazon shipping business to assume for this request. The default is AmazonShipping_UK. | [optional] |

### Return type

[**\OpenAPI\Client\Model\shipping\GenerateCollectionFormResponse**](../Model/GenerateCollectionFormResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getAccessPoints()`

```php
getAccessPoints($access_point_types, $country_code, $postal_code, $x_amzn_shipping_business_id): \OpenAPI\Client\Model\shipping\GetAccessPointsResponse
```



Returns a list of access points in proximity of input postal code.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ShippingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$access_point_types = HELIX; // string[]
$country_code = US; // string
$postal_code = EX332JL; // string
$x_amzn_shipping_business_id = 'x_amzn_shipping_business_id_example'; // string | Amazon shipping business to assume for this request. The default is AmazonShipping_UK.

try {
    $result = $apiInstance->getAccessPoints($access_point_types, $country_code, $postal_code, $x_amzn_shipping_business_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShippingApi->getAccessPoints: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **access_point_types** | [**string[]**](../Model/string.md)|  | |
| **country_code** | **string**|  | |
| **postal_code** | **string**|  | |
| **x_amzn_shipping_business_id** | **string**| Amazon shipping business to assume for this request. The default is AmazonShipping_UK. | [optional] |

### Return type

[**\OpenAPI\Client\Model\shipping\GetAccessPointsResponse**](../Model/GetAccessPointsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getAdditionalInputs()`

```php
getAdditionalInputs($request_token, $rate_id, $x_amzn_shipping_business_id): \OpenAPI\Client\Model\shipping\GetAdditionalInputsResponse
```



Returns the JSON schema to use for providing additional inputs when needed to purchase a shipping offering. Call the getAdditionalInputs operation when the response to a previous call to the getRates operation indicates that additional inputs are required for the rate (shipping offering) that you want to purchase.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ShippingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$request_token = 'request_token_example'; // string | The request token returned in the response to the getRates operation.
$rate_id = 'rate_id_example'; // string | The rate identifier for the shipping offering (rate) returned in the response to the getRates operation.
$x_amzn_shipping_business_id = 'x_amzn_shipping_business_id_example'; // string | Amazon shipping business to assume for this request. The default is AmazonShipping_UK.

try {
    $result = $apiInstance->getAdditionalInputs($request_token, $rate_id, $x_amzn_shipping_business_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShippingApi->getAdditionalInputs: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **request_token** | **string**| The request token returned in the response to the getRates operation. | |
| **rate_id** | **string**| The rate identifier for the shipping offering (rate) returned in the response to the getRates operation. | |
| **x_amzn_shipping_business_id** | **string**| Amazon shipping business to assume for this request. The default is AmazonShipping_UK. | [optional] |

### Return type

[**\OpenAPI\Client\Model\shipping\GetAdditionalInputsResponse**](../Model/GetAdditionalInputsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getCarrierAccountFormInputs()`

```php
getCarrierAccountFormInputs($x_amzn_shipping_business_id): \OpenAPI\Client\Model\shipping\GetCarrierAccountFormInputsResponse
```



This API will return a list of input schema required to register a shipper account with the carrier.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ShippingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$x_amzn_shipping_business_id = 'x_amzn_shipping_business_id_example'; // string | Amazon shipping business to assume for this request. The default is AmazonShipping_UK.

try {
    $result = $apiInstance->getCarrierAccountFormInputs($x_amzn_shipping_business_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShippingApi->getCarrierAccountFormInputs: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **x_amzn_shipping_business_id** | **string**| Amazon shipping business to assume for this request. The default is AmazonShipping_UK. | [optional] |

### Return type

[**\OpenAPI\Client\Model\shipping\GetCarrierAccountFormInputsResponse**](../Model/GetCarrierAccountFormInputsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getCarrierAccounts()`

```php
getCarrierAccounts($body, $x_amzn_shipping_business_id): \OpenAPI\Client\Model\shipping\GetCarrierAccountsResponse
```



This API will return Get all carrier accounts for a merchant.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ShippingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \OpenAPI\Client\Model\shipping\GetCarrierAccountsRequest(); // \OpenAPI\Client\Model\shipping\GetCarrierAccountsRequest
$x_amzn_shipping_business_id = 'x_amzn_shipping_business_id_example'; // string | Amazon shipping business to assume for this request. The default is AmazonShipping_UK.

try {
    $result = $apiInstance->getCarrierAccounts($body, $x_amzn_shipping_business_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShippingApi->getCarrierAccounts: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **body** | [**\OpenAPI\Client\Model\shipping\GetCarrierAccountsRequest**](../Model/GetCarrierAccountsRequest.md)|  | |
| **x_amzn_shipping_business_id** | **string**| Amazon shipping business to assume for this request. The default is AmazonShipping_UK. | [optional] |

### Return type

[**\OpenAPI\Client\Model\shipping\GetCarrierAccountsResponse**](../Model/GetCarrierAccountsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getCollectionForm()`

```php
getCollectionForm($collection_form_id, $x_amzn_shipping_business_id): \OpenAPI\Client\Model\shipping\GetCollectionFormResponse
```



This API reprint a collection form.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ShippingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$collection_form_id = 'collection_form_id_example'; // string | collection form Id to reprint a collection.
$x_amzn_shipping_business_id = 'x_amzn_shipping_business_id_example'; // string | Amazon shipping business to assume for this request. The default is AmazonShipping_UK.

try {
    $result = $apiInstance->getCollectionForm($collection_form_id, $x_amzn_shipping_business_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShippingApi->getCollectionForm: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **collection_form_id** | **string**| collection form Id to reprint a collection. | |
| **x_amzn_shipping_business_id** | **string**| Amazon shipping business to assume for this request. The default is AmazonShipping_UK. | [optional] |

### Return type

[**\OpenAPI\Client\Model\shipping\GetCollectionFormResponse**](../Model/GetCollectionFormResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getCollectionFormHistory()`

```php
getCollectionFormHistory($body, $x_amzn_shipping_business_id): \OpenAPI\Client\Model\shipping\GetCollectionFormHistoryResponse
```



This API Call to get the history of the previously generated collection forms.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ShippingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \OpenAPI\Client\Model\shipping\GetCollectionFormHistoryRequest(); // \OpenAPI\Client\Model\shipping\GetCollectionFormHistoryRequest
$x_amzn_shipping_business_id = 'x_amzn_shipping_business_id_example'; // string | Amazon shipping business to assume for this request. The default is AmazonShipping_UK.

try {
    $result = $apiInstance->getCollectionFormHistory($body, $x_amzn_shipping_business_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShippingApi->getCollectionFormHistory: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **body** | [**\OpenAPI\Client\Model\shipping\GetCollectionFormHistoryRequest**](../Model/GetCollectionFormHistoryRequest.md)|  | |
| **x_amzn_shipping_business_id** | **string**| Amazon shipping business to assume for this request. The default is AmazonShipping_UK. | [optional] |

### Return type

[**\OpenAPI\Client\Model\shipping\GetCollectionFormHistoryResponse**](../Model/GetCollectionFormHistoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getRates()`

```php
getRates($body, $x_amzn_shipping_business_id): \OpenAPI\Client\Model\shipping\GetRatesResponse
```



Returns the available shipping service offerings.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ShippingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \OpenAPI\Client\Model\shipping\GetRatesRequest(); // \OpenAPI\Client\Model\shipping\GetRatesRequest
$x_amzn_shipping_business_id = 'x_amzn_shipping_business_id_example'; // string | Amazon shipping business to assume for this request. The default is AmazonShipping_UK.

try {
    $result = $apiInstance->getRates($body, $x_amzn_shipping_business_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShippingApi->getRates: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **body** | [**\OpenAPI\Client\Model\shipping\GetRatesRequest**](../Model/GetRatesRequest.md)|  | |
| **x_amzn_shipping_business_id** | **string**| Amazon shipping business to assume for this request. The default is AmazonShipping_UK. | [optional] |

### Return type

[**\OpenAPI\Client\Model\shipping\GetRatesResponse**](../Model/GetRatesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getShipmentDocuments()`

```php
getShipmentDocuments($shipment_id, $package_client_reference_id, $format, $dpi, $x_amzn_shipping_business_id): \OpenAPI\Client\Model\shipping\GetShipmentDocumentsResponse
```



Returns the shipping documents associated with a package in a shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ShippingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$shipment_id = 'shipment_id_example'; // string | The shipment identifier originally returned by the purchaseShipment operation.
$package_client_reference_id = 'package_client_reference_id_example'; // string | The package client reference identifier originally provided in the request body parameter for the getRates operation.
$format = 'format_example'; // string | The file format of the document. Must be one of the supported formats returned by the getRates operation.
$dpi = 3.4; // float | The resolution of the document (for example, 300 means 300 dots per inch). Must be one of the supported resolutions returned in the response to the getRates operation.
$x_amzn_shipping_business_id = 'x_amzn_shipping_business_id_example'; // string | Amazon shipping business to assume for this request. The default is AmazonShipping_UK.

try {
    $result = $apiInstance->getShipmentDocuments($shipment_id, $package_client_reference_id, $format, $dpi, $x_amzn_shipping_business_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShippingApi->getShipmentDocuments: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **shipment_id** | **string**| The shipment identifier originally returned by the purchaseShipment operation. | |
| **package_client_reference_id** | **string**| The package client reference identifier originally provided in the request body parameter for the getRates operation. | |
| **format** | **string**| The file format of the document. Must be one of the supported formats returned by the getRates operation. | [optional] |
| **dpi** | **float**| The resolution of the document (for example, 300 means 300 dots per inch). Must be one of the supported resolutions returned in the response to the getRates operation. | [optional] |
| **x_amzn_shipping_business_id** | **string**| Amazon shipping business to assume for this request. The default is AmazonShipping_UK. | [optional] |

### Return type

[**\OpenAPI\Client\Model\shipping\GetShipmentDocumentsResponse**](../Model/GetShipmentDocumentsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getTracking()`

```php
getTracking($tracking_id, $carrier_id, $x_amzn_shipping_business_id): \OpenAPI\Client\Model\shipping\GetTrackingResponse
```



Returns tracking information for a purchased shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ShippingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$tracking_id = 'tracking_id_example'; // string | A carrier-generated tracking identifier originally returned by the purchaseShipment operation.
$carrier_id = 'carrier_id_example'; // string | A carrier identifier originally returned by the getRates operation for the selected rate.
$x_amzn_shipping_business_id = 'x_amzn_shipping_business_id_example'; // string | Amazon shipping business to assume for this request. The default is AmazonShipping_UK.

try {
    $result = $apiInstance->getTracking($tracking_id, $carrier_id, $x_amzn_shipping_business_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShippingApi->getTracking: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **tracking_id** | **string**| A carrier-generated tracking identifier originally returned by the purchaseShipment operation. | |
| **carrier_id** | **string**| A carrier identifier originally returned by the getRates operation for the selected rate. | |
| **x_amzn_shipping_business_id** | **string**| Amazon shipping business to assume for this request. The default is AmazonShipping_UK. | [optional] |

### Return type

[**\OpenAPI\Client\Model\shipping\GetTrackingResponse**](../Model/GetTrackingResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUnmanifestedShipments()`

```php
getUnmanifestedShipments($body, $x_amzn_shipping_business_id): \OpenAPI\Client\Model\shipping\GetUnmanifestedShipmentsResponse
```



This API Get all unmanifested carriers with shipment locations. Any locations which has unmanifested shipments         with an eligible carrier for manifesting shall be returned.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ShippingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \OpenAPI\Client\Model\shipping\GetUnmanifestedShipmentsRequest(); // \OpenAPI\Client\Model\shipping\GetUnmanifestedShipmentsRequest
$x_amzn_shipping_business_id = 'x_amzn_shipping_business_id_example'; // string | Amazon shipping business to assume for this request. The default is AmazonShipping_UK.

try {
    $result = $apiInstance->getUnmanifestedShipments($body, $x_amzn_shipping_business_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShippingApi->getUnmanifestedShipments: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **body** | [**\OpenAPI\Client\Model\shipping\GetUnmanifestedShipmentsRequest**](../Model/GetUnmanifestedShipmentsRequest.md)|  | |
| **x_amzn_shipping_business_id** | **string**| Amazon shipping business to assume for this request. The default is AmazonShipping_UK. | [optional] |

### Return type

[**\OpenAPI\Client\Model\shipping\GetUnmanifestedShipmentsResponse**](../Model/GetUnmanifestedShipmentsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `linkCarrierAccount()`

```php
linkCarrierAccount($carrier_id, $body, $x_amzn_shipping_business_id): \OpenAPI\Client\Model\shipping\LinkCarrierAccountResponse
```



This API associates/links the specified carrier account with the merchant.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ShippingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$carrier_id = 'carrier_id_example'; // string | The unique identifier associated with the carrier account.
$body = new \OpenAPI\Client\Model\shipping\LinkCarrierAccountRequest(); // \OpenAPI\Client\Model\shipping\LinkCarrierAccountRequest
$x_amzn_shipping_business_id = 'x_amzn_shipping_business_id_example'; // string | Amazon shipping business to assume for this request. The default is AmazonShipping_UK.

try {
    $result = $apiInstance->linkCarrierAccount($carrier_id, $body, $x_amzn_shipping_business_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShippingApi->linkCarrierAccount: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **carrier_id** | **string**| The unique identifier associated with the carrier account. | |
| **body** | [**\OpenAPI\Client\Model\shipping\LinkCarrierAccountRequest**](../Model/LinkCarrierAccountRequest.md)|  | |
| **x_amzn_shipping_business_id** | **string**| Amazon shipping business to assume for this request. The default is AmazonShipping_UK. | [optional] |

### Return type

[**\OpenAPI\Client\Model\shipping\LinkCarrierAccountResponse**](../Model/LinkCarrierAccountResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `oneClickShipment()`

```php
oneClickShipment($body, $x_amzn_shipping_business_id): \OpenAPI\Client\Model\shipping\OneClickShipmentResponse
```



Purchases a shipping service identifier and returns purchase-related details and documents.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ShippingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \OpenAPI\Client\Model\shipping\OneClickShipmentRequest(); // \OpenAPI\Client\Model\shipping\OneClickShipmentRequest
$x_amzn_shipping_business_id = 'x_amzn_shipping_business_id_example'; // string | Amazon shipping business to assume for this request. The default is AmazonShipping_UK.

try {
    $result = $apiInstance->oneClickShipment($body, $x_amzn_shipping_business_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShippingApi->oneClickShipment: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **body** | [**\OpenAPI\Client\Model\shipping\OneClickShipmentRequest**](../Model/OneClickShipmentRequest.md)|  | |
| **x_amzn_shipping_business_id** | **string**| Amazon shipping business to assume for this request. The default is AmazonShipping_UK. | [optional] |

### Return type

[**\OpenAPI\Client\Model\shipping\OneClickShipmentResponse**](../Model/OneClickShipmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `purchaseShipment()`

```php
purchaseShipment($body, $x_amzn_idempotency_key, $x_amzn_shipping_business_id): \OpenAPI\Client\Model\shipping\PurchaseShipmentResponse
```



Purchases a shipping service and returns purchase related details and documents.  Note: You must complete the purchase within 10 minutes of rate creation by the shipping service provider. If you make the request after the 10 minutes have expired, you will receive an error response with the error code equal to \"TOKEN_EXPIRED\". If you receive this error response, you must get the rates for the shipment again.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ShippingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \OpenAPI\Client\Model\shipping\PurchaseShipmentRequest(); // \OpenAPI\Client\Model\shipping\PurchaseShipmentRequest
$x_amzn_idempotency_key = 'x_amzn_idempotency_key_example'; // string | A unique value which the server uses to recognize subsequent retries of the same request.
$x_amzn_shipping_business_id = 'x_amzn_shipping_business_id_example'; // string | Amazon shipping business to assume for this request. The default is AmazonShipping_UK.

try {
    $result = $apiInstance->purchaseShipment($body, $x_amzn_idempotency_key, $x_amzn_shipping_business_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShippingApi->purchaseShipment: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **body** | [**\OpenAPI\Client\Model\shipping\PurchaseShipmentRequest**](../Model/PurchaseShipmentRequest.md)|  | |
| **x_amzn_idempotency_key** | **string**| A unique value which the server uses to recognize subsequent retries of the same request. | [optional] |
| **x_amzn_shipping_business_id** | **string**| Amazon shipping business to assume for this request. The default is AmazonShipping_UK. | [optional] |

### Return type

[**\OpenAPI\Client\Model\shipping\PurchaseShipmentResponse**](../Model/PurchaseShipmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `unlinkCarrierAccount()`

```php
unlinkCarrierAccount($carrier_id, $body, $x_amzn_shipping_business_id): \OpenAPI\Client\Model\shipping\UnlinkCarrierAccountResponse
```



This API Unlink the specified carrier account with the merchant.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ShippingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$carrier_id = 'carrier_id_example'; // string | carrier Id to unlink with merchant.
$body = new \OpenAPI\Client\Model\shipping\UnlinkCarrierAccountRequest(); // \OpenAPI\Client\Model\shipping\UnlinkCarrierAccountRequest
$x_amzn_shipping_business_id = 'x_amzn_shipping_business_id_example'; // string | Amazon shipping business to assume for this request. The default is AmazonShipping_UK.

try {
    $result = $apiInstance->unlinkCarrierAccount($carrier_id, $body, $x_amzn_shipping_business_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShippingApi->unlinkCarrierAccount: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **carrier_id** | **string**| carrier Id to unlink with merchant. | |
| **body** | [**\OpenAPI\Client\Model\shipping\UnlinkCarrierAccountRequest**](../Model/UnlinkCarrierAccountRequest.md)|  | |
| **x_amzn_shipping_business_id** | **string**| Amazon shipping business to assume for this request. The default is AmazonShipping_UK. | [optional] |

### Return type

[**\OpenAPI\Client\Model\shipping\UnlinkCarrierAccountResponse**](../Model/UnlinkCarrierAccountResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
