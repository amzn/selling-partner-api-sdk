# OpenAPI\Client\EasyShipApi

All URIs are relative to https://sellingpartnerapi-na.amazon.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createScheduledPackage()**](EasyShipApi.md#createScheduledPackage) | **POST** /easyShip/2022-03-23/package |  |
| [**createScheduledPackageBulk()**](EasyShipApi.md#createScheduledPackageBulk) | **POST** /easyShip/2022-03-23/packages/bulk |  |
| [**getScheduledPackage()**](EasyShipApi.md#getScheduledPackage) | **GET** /easyShip/2022-03-23/package |  |
| [**listHandoverSlots()**](EasyShipApi.md#listHandoverSlots) | **POST** /easyShip/2022-03-23/timeSlot |  |
| [**updateScheduledPackages()**](EasyShipApi.md#updateScheduledPackages) | **PATCH** /easyShip/2022-03-23/package |  |


## `createScheduledPackage()`

```php
createScheduledPackage($create_scheduled_package_request): \OpenAPI\Client\Model\easyship\Package
```



Schedules an Easy Ship order and returns the scheduled package information.  This operation does the following:  *  Specifies the time slot and handover method for the order to be scheduled for delivery.  * Updates the Easy Ship order status.  * Generates a shipping label and an invoice. Calling `createScheduledPackage` also generates a warranty document if you specify a `SerialNumber` value. To get these documents, see [How to get invoice, shipping label, and warranty documents](doc:easyship-api-v2022-03-23-use-case-guide).  * Shows the status of Easy Ship orders when you call the `getOrders` operation of the Selling Partner API for Orders and examine the `EasyShipShipmentStatus` property in the response body.  See the **Shipping Label**, **Invoice**, and **Warranty** columns in the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table) to see which documents are supported in each marketplace.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\EasyShipApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$create_scheduled_package_request = new \OpenAPI\Client\Model\easyship\CreateScheduledPackageRequest(); // \OpenAPI\Client\Model\easyship\CreateScheduledPackageRequest | The request schema for the `createScheduledPackage` operation.

try {
    $result = $apiInstance->createScheduledPackage($create_scheduled_package_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EasyShipApi->createScheduledPackage: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_scheduled_package_request** | [**\OpenAPI\Client\Model\easyship\CreateScheduledPackageRequest**](../Model/CreateScheduledPackageRequest.md)| The request schema for the &#x60;createScheduledPackage&#x60; operation. | |

### Return type

[**\OpenAPI\Client\Model\easyship\Package**](../Model/Package.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createScheduledPackageBulk()`

```php
createScheduledPackageBulk($create_scheduled_packages_request): \OpenAPI\Client\Model\easyship\CreateScheduledPackagesResponse
```



This operation automatically schedules a time slot for all specified `amazonOrderId` values and generates the associated shipping labels and compliance documents based on the marketplace. For more information, refer to the [marketplace support table](https://developer-docs.amazon.com/sp-api/docs/easyship-api-v2022-03-23-use-case-guide#marketplace-support-table).  You can optionally assign a `packageDetails` object to input a preferred time slot for each order in your request. In such cases, Amazon schedules the respective packages using the specified optional settings. If you don't specify a time slot, Amazon assigns the earliest available time slot.   You can choose PDF or ZPL for your shipping label's file format and Amazon creates the label accordingly.  This operation returns an array that contains the scheduled packages, and a temporary URL that you can use to access a ZIP file. The ZIP file includes the generated shipping labels and any other documents that are required for your marketplace. If an order can't be scheduled, Amazon adds the `rejectedOrders` list in the response. The response contains an entry for each order that could not be processed. Each entry contains an error message that describes the reason for the failure.  The following table contains the supported request and burst maximum rates:  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that are applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\EasyShipApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$create_scheduled_packages_request = new \OpenAPI\Client\Model\easyship\CreateScheduledPackagesRequest(); // \OpenAPI\Client\Model\easyship\CreateScheduledPackagesRequest | The request schema for the `createScheduledPackageBulk` operation.

try {
    $result = $apiInstance->createScheduledPackageBulk($create_scheduled_packages_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EasyShipApi->createScheduledPackageBulk: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_scheduled_packages_request** | [**\OpenAPI\Client\Model\easyship\CreateScheduledPackagesRequest**](../Model/CreateScheduledPackagesRequest.md)| The request schema for the &#x60;createScheduledPackageBulk&#x60; operation. | |

### Return type

[**\OpenAPI\Client\Model\easyship\CreateScheduledPackagesResponse**](../Model/CreateScheduledPackagesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getScheduledPackage()`

```php
getScheduledPackage($amazon_order_id, $marketplace_id): \OpenAPI\Client\Model\easyship\Package
```



Returns information about a package, including dimensions, weight, time slot information for handover, invoice and item information, and status.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\EasyShipApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$amazon_order_id = 'amazon_order_id_example'; // string | An Amazon-defined order identifier. Identifies the order that the seller wants to deliver using Amazon Easy Ship.
$marketplace_id = 'marketplace_id_example'; // string | An identifier for the marketplace in which the seller is selling.

try {
    $result = $apiInstance->getScheduledPackage($amazon_order_id, $marketplace_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EasyShipApi->getScheduledPackage: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **amazon_order_id** | **string**| An Amazon-defined order identifier. Identifies the order that the seller wants to deliver using Amazon Easy Ship. | |
| **marketplace_id** | **string**| An identifier for the marketplace in which the seller is selling. | |

### Return type

[**\OpenAPI\Client\Model\easyship\Package**](../Model/Package.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listHandoverSlots()`

```php
listHandoverSlots($list_handover_slots_request): \OpenAPI\Client\Model\easyship\ListHandoverSlotsResponse
```



Returns time slots available for Easy Ship orders to be scheduled based on the package weight and dimensions that the seller specifies.  This operation is available for scheduled and unscheduled orders based on marketplace support. See **Get Time Slots** in the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table).  This operation can return time slots that have either pickup or drop-off handover methods - see **Supported Handover Methods** in the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\EasyShipApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$list_handover_slots_request = new \OpenAPI\Client\Model\easyship\ListHandoverSlotsRequest(); // \OpenAPI\Client\Model\easyship\ListHandoverSlotsRequest | The request schema for the `listHandoverSlots` operation.

try {
    $result = $apiInstance->listHandoverSlots($list_handover_slots_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EasyShipApi->listHandoverSlots: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **list_handover_slots_request** | [**\OpenAPI\Client\Model\easyship\ListHandoverSlotsRequest**](../Model/ListHandoverSlotsRequest.md)| The request schema for the &#x60;listHandoverSlots&#x60; operation. | [optional] |

### Return type

[**\OpenAPI\Client\Model\easyship\ListHandoverSlotsResponse**](../Model/ListHandoverSlotsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateScheduledPackages()`

```php
updateScheduledPackages($update_scheduled_packages_request): \OpenAPI\Client\Model\easyship\Packages
```



Updates the time slot for handing over the package indicated by the specified `scheduledPackageId`. You can get the new `slotId` value for the time slot by calling the `listHandoverSlots` operation before making another `patch` call.  See the **Update Package** column in the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table) to see which marketplaces this operation is supported in.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\EasyShipApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$update_scheduled_packages_request = new \OpenAPI\Client\Model\easyship\UpdateScheduledPackagesRequest(); // \OpenAPI\Client\Model\easyship\UpdateScheduledPackagesRequest | The request schema for the `updateScheduledPackages` operation.

try {
    $result = $apiInstance->updateScheduledPackages($update_scheduled_packages_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EasyShipApi->updateScheduledPackages: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **update_scheduled_packages_request** | [**\OpenAPI\Client\Model\easyship\UpdateScheduledPackagesRequest**](../Model/UpdateScheduledPackagesRequest.md)| The request schema for the &#x60;updateScheduledPackages&#x60; operation. | [optional] |

### Return type

[**\OpenAPI\Client\Model\easyship\Packages**](../Model/Packages.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
