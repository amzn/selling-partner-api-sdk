# OpenAPI\Client\ShipmentInvoiceApi

All URIs are relative to http://localhost, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getInvoiceStatus()**](ShipmentInvoiceApi.md#getInvoiceStatus) | **GET** /fba/outbound/brazil/v0/shipments/{shipmentId}/invoice/status |  |
| [**getShipmentDetails()**](ShipmentInvoiceApi.md#getShipmentDetails) | **GET** /fba/outbound/brazil/v0/shipments/{shipmentId} |  |
| [**submitInvoice()**](ShipmentInvoiceApi.md#submitInvoice) | **POST** /fba/outbound/brazil/v0/shipments/{shipmentId}/invoice |  |


## `getInvoiceStatus()`

```php
getInvoiceStatus($shipment_id): \OpenAPI\Client\Model\invoicing\GetInvoiceStatusResponse
```



Returns the invoice status for the shipment you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1.133 | 25 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ShipmentInvoiceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$shipment_id = 'shipment_id_example'; // string | The shipment identifier for the shipment.

try {
    $result = $apiInstance->getInvoiceStatus($shipment_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShipmentInvoiceApi->getInvoiceStatus: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **shipment_id** | **string**| The shipment identifier for the shipment. | |

### Return type

[**\OpenAPI\Client\Model\invoicing\GetInvoiceStatusResponse**](../Model/GetInvoiceStatusResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getShipmentDetails()`

```php
getShipmentDetails($shipment_id): \OpenAPI\Client\Model\invoicing\GetShipmentDetailsResponse
```



Returns the shipment details required to issue an invoice for the specified shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1.133 | 25 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ShipmentInvoiceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$shipment_id = 'shipment_id_example'; // string | The identifier for the shipment. Get this value from the FBAOutboundShipmentStatus notification. For information about subscribing to notifications, see the [Notifications API Use Case Guide](doc:notifications-api-v1-use-case-guide).

try {
    $result = $apiInstance->getShipmentDetails($shipment_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShipmentInvoiceApi->getShipmentDetails: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **shipment_id** | **string**| The identifier for the shipment. Get this value from the FBAOutboundShipmentStatus notification. For information about subscribing to notifications, see the [Notifications API Use Case Guide](doc:notifications-api-v1-use-case-guide). | |

### Return type

[**\OpenAPI\Client\Model\invoicing\GetShipmentDetailsResponse**](../Model/GetShipmentDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `submitInvoice()`

```php
submitInvoice($shipment_id, $body): \OpenAPI\Client\Model\invoicing\SubmitInvoiceResponse
```



Submits a shipment invoice document for a given shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1.133 | 25 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ShipmentInvoiceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$shipment_id = 'shipment_id_example'; // string | The identifier for the shipment.
$body = new \OpenAPI\Client\Model\invoicing\SubmitInvoiceRequest(); // \OpenAPI\Client\Model\invoicing\SubmitInvoiceRequest

try {
    $result = $apiInstance->submitInvoice($shipment_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShipmentInvoiceApi->submitInvoice: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **shipment_id** | **string**| The identifier for the shipment. | |
| **body** | [**\OpenAPI\Client\Model\invoicing\SubmitInvoiceRequest**](../Model/SubmitInvoiceRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\invoicing\SubmitInvoiceResponse**](../Model/SubmitInvoiceResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
