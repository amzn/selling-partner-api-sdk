# OpenAPI\Client\AppIntegrationsApi

All URIs are relative to https://sellingpartnerapi-na.amazon.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createNotification()**](AppIntegrationsApi.md#createNotification) | **POST** /appIntegrations/2024-04-01/notifications |  |
| [**deleteNotifications()**](AppIntegrationsApi.md#deleteNotifications) | **POST** /appIntegrations/2024-04-01/notifications/deletion |  |
| [**recordActionFeedback()**](AppIntegrationsApi.md#recordActionFeedback) | **POST** /appIntegrations/2024-04-01/notifications/{notificationId}/feedback |  |


## `createNotification()`

```php
createNotification($body): \OpenAPI\Client\Model\appIntegrations\CreateNotificationResponse
```



Create a notification for sellers in Seller Central.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Sellers whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\AppIntegrationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \OpenAPI\Client\Model\appIntegrations\CreateNotificationRequest(); // \OpenAPI\Client\Model\appIntegrations\CreateNotificationRequest | The request body for the `createNotification` operation.

try {
    $result = $apiInstance->createNotification($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AppIntegrationsApi->createNotification: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **body** | [**\OpenAPI\Client\Model\appIntegrations\CreateNotificationRequest**](../Model/CreateNotificationRequest.md)| The request body for the &#x60;createNotification&#x60; operation. | |

### Return type

[**\OpenAPI\Client\Model\appIntegrations\CreateNotificationResponse**](../Model/CreateNotificationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteNotifications()`

```php
deleteNotifications($body)
```



Remove your application's notifications from the Appstore notifications dashboard.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Sellers whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\AppIntegrationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \OpenAPI\Client\Model\appIntegrations\DeleteNotificationsRequest(); // \OpenAPI\Client\Model\appIntegrations\DeleteNotificationsRequest | The request body for the `deleteNotifications` operation.

try {
    $apiInstance->deleteNotifications($body);
} catch (Exception $e) {
    echo 'Exception when calling AppIntegrationsApi->deleteNotifications: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **body** | [**\OpenAPI\Client\Model\appIntegrations\DeleteNotificationsRequest**](../Model/DeleteNotificationsRequest.md)| The request body for the &#x60;deleteNotifications&#x60; operation. | |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `recordActionFeedback()`

```php
recordActionFeedback($notification_id, $body)
```



Records the seller's response to a notification.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Sellers whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\AppIntegrationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$notification_id = 'notification_id_example'; // string | A `notificationId` uniquely identifies a notification.
$body = new \OpenAPI\Client\Model\appIntegrations\RecordActionFeedbackRequest(); // \OpenAPI\Client\Model\appIntegrations\RecordActionFeedbackRequest | The request body for the `recordActionFeedback` operation.

try {
    $apiInstance->recordActionFeedback($notification_id, $body);
} catch (Exception $e) {
    echo 'Exception when calling AppIntegrationsApi->recordActionFeedback: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **notification_id** | **string**| A &#x60;notificationId&#x60; uniquely identifies a notification. | |
| **body** | [**\OpenAPI\Client\Model\appIntegrations\RecordActionFeedbackRequest**](../Model/RecordActionFeedbackRequest.md)| The request body for the &#x60;recordActionFeedback&#x60; operation. | |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
