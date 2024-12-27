# OpenAPI\Client\MessagingApi

All URIs are relative to https://sellingpartnerapi-na.amazon.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**confirmCustomizationDetails()**](MessagingApi.md#confirmCustomizationDetails) | **POST** /messaging/v1/orders/{amazonOrderId}/messages/confirmCustomizationDetails |  |
| [**createAmazonMotors()**](MessagingApi.md#createAmazonMotors) | **POST** /messaging/v1/orders/{amazonOrderId}/messages/amazonMotors |  |
| [**createConfirmDeliveryDetails()**](MessagingApi.md#createConfirmDeliveryDetails) | **POST** /messaging/v1/orders/{amazonOrderId}/messages/confirmDeliveryDetails |  |
| [**createConfirmOrderDetails()**](MessagingApi.md#createConfirmOrderDetails) | **POST** /messaging/v1/orders/{amazonOrderId}/messages/confirmOrderDetails |  |
| [**createConfirmServiceDetails()**](MessagingApi.md#createConfirmServiceDetails) | **POST** /messaging/v1/orders/{amazonOrderId}/messages/confirmServiceDetails |  |
| [**createDigitalAccessKey()**](MessagingApi.md#createDigitalAccessKey) | **POST** /messaging/v1/orders/{amazonOrderId}/messages/digitalAccessKey |  |
| [**createLegalDisclosure()**](MessagingApi.md#createLegalDisclosure) | **POST** /messaging/v1/orders/{amazonOrderId}/messages/legalDisclosure |  |
| [**createNegativeFeedbackRemoval()**](MessagingApi.md#createNegativeFeedbackRemoval) | **POST** /messaging/v1/orders/{amazonOrderId}/messages/negativeFeedbackRemoval |  |
| [**createUnexpectedProblem()**](MessagingApi.md#createUnexpectedProblem) | **POST** /messaging/v1/orders/{amazonOrderId}/messages/unexpectedProblem |  |
| [**createWarranty()**](MessagingApi.md#createWarranty) | **POST** /messaging/v1/orders/{amazonOrderId}/messages/warranty |  |
| [**getAttributes()**](MessagingApi.md#getAttributes) | **GET** /messaging/v1/orders/{amazonOrderId}/attributes |  |
| [**getMessagingActionsForOrder()**](MessagingApi.md#getMessagingActionsForOrder) | **GET** /messaging/v1/orders/{amazonOrderId} |  |
| [**sendInvoice()**](MessagingApi.md#sendInvoice) | **POST** /messaging/v1/orders/{amazonOrderId}/messages/invoice |  |


## `confirmCustomizationDetails()`

```php
confirmCustomizationDetails($amazon_order_id, $marketplace_ids, $body): \OpenAPI\Client\Model\messaging\CreateConfirmCustomizationDetailsResponse
```



Sends a message asking a buyer to provide or verify customization details such as name spelling, images, initials, etc.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\MessagingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$amazon_order_id = 'amazon_order_id_example'; // string | An Amazon order identifier. This specifies the order for which a message is sent.
$marketplace_ids = array('marketplace_ids_example'); // string[] | A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
$body = new \OpenAPI\Client\Model\messaging\CreateConfirmCustomizationDetailsRequest(); // \OpenAPI\Client\Model\messaging\CreateConfirmCustomizationDetailsRequest

try {
    $result = $apiInstance->confirmCustomizationDetails($amazon_order_id, $marketplace_ids, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MessagingApi->confirmCustomizationDetails: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **amazon_order_id** | **string**| An Amazon order identifier. This specifies the order for which a message is sent. | |
| **marketplace_ids** | [**string[]**](../Model/string.md)| A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified. | |
| **body** | [**\OpenAPI\Client\Model\messaging\CreateConfirmCustomizationDetailsRequest**](../Model/CreateConfirmCustomizationDetailsRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\messaging\CreateConfirmCustomizationDetailsResponse**](../Model/CreateConfirmCustomizationDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/hal+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createAmazonMotors()`

```php
createAmazonMotors($amazon_order_id, $marketplace_ids, $body): \OpenAPI\Client\Model\messaging\CreateAmazonMotorsResponse
```



Sends a message to a buyer to provide details about an Amazon Motors order. This message can only be sent by Amazon Motors sellers.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\MessagingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$amazon_order_id = 'amazon_order_id_example'; // string | An Amazon order identifier. This specifies the order for which a message is sent.
$marketplace_ids = array('marketplace_ids_example'); // string[] | A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
$body = new \OpenAPI\Client\Model\messaging\CreateAmazonMotorsRequest(); // \OpenAPI\Client\Model\messaging\CreateAmazonMotorsRequest

try {
    $result = $apiInstance->createAmazonMotors($amazon_order_id, $marketplace_ids, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MessagingApi->createAmazonMotors: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **amazon_order_id** | **string**| An Amazon order identifier. This specifies the order for which a message is sent. | |
| **marketplace_ids** | [**string[]**](../Model/string.md)| A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified. | |
| **body** | [**\OpenAPI\Client\Model\messaging\CreateAmazonMotorsRequest**](../Model/CreateAmazonMotorsRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\messaging\CreateAmazonMotorsResponse**](../Model/CreateAmazonMotorsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/hal+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createConfirmDeliveryDetails()`

```php
createConfirmDeliveryDetails($amazon_order_id, $marketplace_ids, $body): \OpenAPI\Client\Model\messaging\CreateConfirmDeliveryDetailsResponse
```



Sends a message to a buyer to arrange a delivery or to confirm contact information for making a delivery.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\MessagingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$amazon_order_id = 'amazon_order_id_example'; // string | An Amazon order identifier. This specifies the order for which a message is sent.
$marketplace_ids = array('marketplace_ids_example'); // string[] | A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
$body = new \OpenAPI\Client\Model\messaging\CreateConfirmDeliveryDetailsRequest(); // \OpenAPI\Client\Model\messaging\CreateConfirmDeliveryDetailsRequest

try {
    $result = $apiInstance->createConfirmDeliveryDetails($amazon_order_id, $marketplace_ids, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MessagingApi->createConfirmDeliveryDetails: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **amazon_order_id** | **string**| An Amazon order identifier. This specifies the order for which a message is sent. | |
| **marketplace_ids** | [**string[]**](../Model/string.md)| A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified. | |
| **body** | [**\OpenAPI\Client\Model\messaging\CreateConfirmDeliveryDetailsRequest**](../Model/CreateConfirmDeliveryDetailsRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\messaging\CreateConfirmDeliveryDetailsResponse**](../Model/CreateConfirmDeliveryDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/hal+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createConfirmOrderDetails()`

```php
createConfirmOrderDetails($amazon_order_id, $marketplace_ids, $body): \OpenAPI\Client\Model\messaging\CreateConfirmOrderDetailsResponse
```



Sends a message to ask a buyer an order-related question prior to shipping their order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\MessagingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$amazon_order_id = 'amazon_order_id_example'; // string | An Amazon order identifier. This specifies the order for which a message is sent.
$marketplace_ids = array('marketplace_ids_example'); // string[] | A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
$body = new \OpenAPI\Client\Model\messaging\CreateConfirmOrderDetailsRequest(); // \OpenAPI\Client\Model\messaging\CreateConfirmOrderDetailsRequest

try {
    $result = $apiInstance->createConfirmOrderDetails($amazon_order_id, $marketplace_ids, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MessagingApi->createConfirmOrderDetails: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **amazon_order_id** | **string**| An Amazon order identifier. This specifies the order for which a message is sent. | |
| **marketplace_ids** | [**string[]**](../Model/string.md)| A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified. | |
| **body** | [**\OpenAPI\Client\Model\messaging\CreateConfirmOrderDetailsRequest**](../Model/CreateConfirmOrderDetailsRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\messaging\CreateConfirmOrderDetailsResponse**](../Model/CreateConfirmOrderDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/hal+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createConfirmServiceDetails()`

```php
createConfirmServiceDetails($amazon_order_id, $marketplace_ids, $body): \OpenAPI\Client\Model\messaging\CreateConfirmServiceDetailsResponse
```



Sends a message to contact a Home Service customer to arrange a service call or to gather information prior to a service call.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\MessagingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$amazon_order_id = 'amazon_order_id_example'; // string | An Amazon order identifier. This specifies the order for which a message is sent.
$marketplace_ids = array('marketplace_ids_example'); // string[] | A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
$body = new \OpenAPI\Client\Model\messaging\CreateConfirmServiceDetailsRequest(); // \OpenAPI\Client\Model\messaging\CreateConfirmServiceDetailsRequest

try {
    $result = $apiInstance->createConfirmServiceDetails($amazon_order_id, $marketplace_ids, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MessagingApi->createConfirmServiceDetails: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **amazon_order_id** | **string**| An Amazon order identifier. This specifies the order for which a message is sent. | |
| **marketplace_ids** | [**string[]**](../Model/string.md)| A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified. | |
| **body** | [**\OpenAPI\Client\Model\messaging\CreateConfirmServiceDetailsRequest**](../Model/CreateConfirmServiceDetailsRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\messaging\CreateConfirmServiceDetailsResponse**](../Model/CreateConfirmServiceDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/hal+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createDigitalAccessKey()`

```php
createDigitalAccessKey($amazon_order_id, $marketplace_ids, $body): \OpenAPI\Client\Model\messaging\CreateDigitalAccessKeyResponse
```



Sends a message to a buyer to share a digital access key needed to utilize digital content in their order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\MessagingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$amazon_order_id = 'amazon_order_id_example'; // string | An Amazon order identifier. This specifies the order for which a message is sent.
$marketplace_ids = array('marketplace_ids_example'); // string[] | A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
$body = new \OpenAPI\Client\Model\messaging\CreateDigitalAccessKeyRequest(); // \OpenAPI\Client\Model\messaging\CreateDigitalAccessKeyRequest

try {
    $result = $apiInstance->createDigitalAccessKey($amazon_order_id, $marketplace_ids, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MessagingApi->createDigitalAccessKey: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **amazon_order_id** | **string**| An Amazon order identifier. This specifies the order for which a message is sent. | |
| **marketplace_ids** | [**string[]**](../Model/string.md)| A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified. | |
| **body** | [**\OpenAPI\Client\Model\messaging\CreateDigitalAccessKeyRequest**](../Model/CreateDigitalAccessKeyRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\messaging\CreateDigitalAccessKeyResponse**](../Model/CreateDigitalAccessKeyResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/hal+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createLegalDisclosure()`

```php
createLegalDisclosure($amazon_order_id, $marketplace_ids, $body): \OpenAPI\Client\Model\messaging\CreateLegalDisclosureResponse
```



Sends a critical message that contains documents that a seller is legally obligated to provide to the buyer. This message should only be used to deliver documents that are required by law.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\MessagingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$amazon_order_id = 'amazon_order_id_example'; // string | An Amazon order identifier. This specifies the order for which a message is sent.
$marketplace_ids = array('marketplace_ids_example'); // string[] | A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
$body = new \OpenAPI\Client\Model\messaging\CreateLegalDisclosureRequest(); // \OpenAPI\Client\Model\messaging\CreateLegalDisclosureRequest

try {
    $result = $apiInstance->createLegalDisclosure($amazon_order_id, $marketplace_ids, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MessagingApi->createLegalDisclosure: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **amazon_order_id** | **string**| An Amazon order identifier. This specifies the order for which a message is sent. | |
| **marketplace_ids** | [**string[]**](../Model/string.md)| A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified. | |
| **body** | [**\OpenAPI\Client\Model\messaging\CreateLegalDisclosureRequest**](../Model/CreateLegalDisclosureRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\messaging\CreateLegalDisclosureResponse**](../Model/CreateLegalDisclosureResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/hal+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createNegativeFeedbackRemoval()`

```php
createNegativeFeedbackRemoval($amazon_order_id, $marketplace_ids): \OpenAPI\Client\Model\messaging\CreateNegativeFeedbackRemovalResponse
```



Sends a non-critical message that asks a buyer to remove their negative feedback. This message should only be sent after the seller has resolved the buyer's problem.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\MessagingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$amazon_order_id = 'amazon_order_id_example'; // string | An Amazon order identifier. This specifies the order for which a message is sent.
$marketplace_ids = array('marketplace_ids_example'); // string[] | A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.

try {
    $result = $apiInstance->createNegativeFeedbackRemoval($amazon_order_id, $marketplace_ids);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MessagingApi->createNegativeFeedbackRemoval: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **amazon_order_id** | **string**| An Amazon order identifier. This specifies the order for which a message is sent. | |
| **marketplace_ids** | [**string[]**](../Model/string.md)| A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified. | |

### Return type

[**\OpenAPI\Client\Model\messaging\CreateNegativeFeedbackRemovalResponse**](../Model/CreateNegativeFeedbackRemovalResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/hal+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createUnexpectedProblem()`

```php
createUnexpectedProblem($amazon_order_id, $marketplace_ids, $body): \OpenAPI\Client\Model\messaging\CreateUnexpectedProblemResponse
```



Sends a critical message to a buyer that an unexpected problem was encountered affecting the completion of the order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\MessagingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$amazon_order_id = 'amazon_order_id_example'; // string | An Amazon order identifier. This specifies the order for which a message is sent.
$marketplace_ids = array('marketplace_ids_example'); // string[] | A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
$body = new \OpenAPI\Client\Model\messaging\CreateUnexpectedProblemRequest(); // \OpenAPI\Client\Model\messaging\CreateUnexpectedProblemRequest

try {
    $result = $apiInstance->createUnexpectedProblem($amazon_order_id, $marketplace_ids, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MessagingApi->createUnexpectedProblem: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **amazon_order_id** | **string**| An Amazon order identifier. This specifies the order for which a message is sent. | |
| **marketplace_ids** | [**string[]**](../Model/string.md)| A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified. | |
| **body** | [**\OpenAPI\Client\Model\messaging\CreateUnexpectedProblemRequest**](../Model/CreateUnexpectedProblemRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\messaging\CreateUnexpectedProblemResponse**](../Model/CreateUnexpectedProblemResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/hal+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createWarranty()`

```php
createWarranty($amazon_order_id, $marketplace_ids, $body): \OpenAPI\Client\Model\messaging\CreateWarrantyResponse
```



Sends a message to a buyer to provide details about warranty information on a purchase in their order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\MessagingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$amazon_order_id = 'amazon_order_id_example'; // string | An Amazon order identifier. This specifies the order for which a message is sent.
$marketplace_ids = array('marketplace_ids_example'); // string[] | A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
$body = new \OpenAPI\Client\Model\messaging\CreateWarrantyRequest(); // \OpenAPI\Client\Model\messaging\CreateWarrantyRequest

try {
    $result = $apiInstance->createWarranty($amazon_order_id, $marketplace_ids, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MessagingApi->createWarranty: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **amazon_order_id** | **string**| An Amazon order identifier. This specifies the order for which a message is sent. | |
| **marketplace_ids** | [**string[]**](../Model/string.md)| A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified. | |
| **body** | [**\OpenAPI\Client\Model\messaging\CreateWarrantyRequest**](../Model/CreateWarrantyRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\messaging\CreateWarrantyResponse**](../Model/CreateWarrantyResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/hal+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getAttributes()`

```php
getAttributes($amazon_order_id, $marketplace_ids): \OpenAPI\Client\Model\messaging\GetAttributesResponse
```



Returns a response containing attributes related to an order. This includes buyer preferences.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\MessagingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$amazon_order_id = 'amazon_order_id_example'; // string | An Amazon order identifier. This specifies the order for which a message is sent.
$marketplace_ids = array('marketplace_ids_example'); // string[] | A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.

try {
    $result = $apiInstance->getAttributes($amazon_order_id, $marketplace_ids);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MessagingApi->getAttributes: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **amazon_order_id** | **string**| An Amazon order identifier. This specifies the order for which a message is sent. | |
| **marketplace_ids** | [**string[]**](../Model/string.md)| A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified. | |

### Return type

[**\OpenAPI\Client\Model\messaging\GetAttributesResponse**](../Model/GetAttributesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/hal+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getMessagingActionsForOrder()`

```php
getMessagingActionsForOrder($amazon_order_id, $marketplace_ids): \OpenAPI\Client\Model\messaging\GetMessagingActionsForOrderResponse
```



Returns a list of message types that are available for an order that you specify. A message type is represented by an actions object, which contains a path and query parameter(s). You can use the path and parameter(s) to call an operation that sends a message.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\MessagingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$amazon_order_id = 'amazon_order_id_example'; // string | An Amazon order identifier. This specifies the order for which you want a list of available message types.
$marketplace_ids = array('marketplace_ids_example'); // string[] | A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.

try {
    $result = $apiInstance->getMessagingActionsForOrder($amazon_order_id, $marketplace_ids);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MessagingApi->getMessagingActionsForOrder: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **amazon_order_id** | **string**| An Amazon order identifier. This specifies the order for which you want a list of available message types. | |
| **marketplace_ids** | [**string[]**](../Model/string.md)| A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified. | |

### Return type

[**\OpenAPI\Client\Model\messaging\GetMessagingActionsForOrderResponse**](../Model/GetMessagingActionsForOrderResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/hal+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `sendInvoice()`

```php
sendInvoice($amazon_order_id, $marketplace_ids, $body): \OpenAPI\Client\Model\messaging\InvoiceResponse
```



Sends a message providing the buyer an invoice

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\MessagingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$amazon_order_id = 'amazon_order_id_example'; // string | An Amazon order identifier. This specifies the order for which a message is sent.
$marketplace_ids = array('marketplace_ids_example'); // string[] | A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
$body = new \OpenAPI\Client\Model\messaging\InvoiceRequest(); // \OpenAPI\Client\Model\messaging\InvoiceRequest

try {
    $result = $apiInstance->sendInvoice($amazon_order_id, $marketplace_ids, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MessagingApi->sendInvoice: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **amazon_order_id** | **string**| An Amazon order identifier. This specifies the order for which a message is sent. | |
| **marketplace_ids** | [**string[]**](../Model/string.md)| A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified. | |
| **body** | [**\OpenAPI\Client\Model\messaging\InvoiceRequest**](../Model/InvoiceRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\messaging\InvoiceResponse**](../Model/InvoiceResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/hal+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
