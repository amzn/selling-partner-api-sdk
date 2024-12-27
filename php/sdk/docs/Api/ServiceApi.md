# OpenAPI\Client\ServiceApi

All URIs are relative to https://sellingpartnerapi-na.amazon.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**addAppointmentForServiceJobByServiceJobId()**](ServiceApi.md#addAppointmentForServiceJobByServiceJobId) | **POST** /service/v1/serviceJobs/{serviceJobId}/appointments |  |
| [**assignAppointmentResources()**](ServiceApi.md#assignAppointmentResources) | **PUT** /service/v1/serviceJobs/{serviceJobId}/appointments/{appointmentId}/resources |  |
| [**cancelReservation()**](ServiceApi.md#cancelReservation) | **DELETE** /service/v1/reservation/{reservationId} |  |
| [**cancelServiceJobByServiceJobId()**](ServiceApi.md#cancelServiceJobByServiceJobId) | **PUT** /service/v1/serviceJobs/{serviceJobId}/cancellations |  |
| [**completeServiceJobByServiceJobId()**](ServiceApi.md#completeServiceJobByServiceJobId) | **PUT** /service/v1/serviceJobs/{serviceJobId}/completions |  |
| [**createReservation()**](ServiceApi.md#createReservation) | **POST** /service/v1/reservation |  |
| [**createServiceDocumentUploadDestination()**](ServiceApi.md#createServiceDocumentUploadDestination) | **POST** /service/v1/documents |  |
| [**getAppointmentSlots()**](ServiceApi.md#getAppointmentSlots) | **GET** /service/v1/appointmentSlots |  |
| [**getAppointmmentSlotsByJobId()**](ServiceApi.md#getAppointmmentSlotsByJobId) | **GET** /service/v1/serviceJobs/{serviceJobId}/appointmentSlots |  |
| [**getFixedSlotCapacity()**](ServiceApi.md#getFixedSlotCapacity) | **POST** /service/v1/serviceResources/{resourceId}/capacity/fixed |  |
| [**getRangeSlotCapacity()**](ServiceApi.md#getRangeSlotCapacity) | **POST** /service/v1/serviceResources/{resourceId}/capacity/range |  |
| [**getServiceJobByServiceJobId()**](ServiceApi.md#getServiceJobByServiceJobId) | **GET** /service/v1/serviceJobs/{serviceJobId} |  |
| [**getServiceJobs()**](ServiceApi.md#getServiceJobs) | **GET** /service/v1/serviceJobs |  |
| [**rescheduleAppointmentForServiceJobByServiceJobId()**](ServiceApi.md#rescheduleAppointmentForServiceJobByServiceJobId) | **POST** /service/v1/serviceJobs/{serviceJobId}/appointments/{appointmentId} |  |
| [**setAppointmentFulfillmentData()**](ServiceApi.md#setAppointmentFulfillmentData) | **PUT** /service/v1/serviceJobs/{serviceJobId}/appointments/{appointmentId}/fulfillment |  |
| [**updateReservation()**](ServiceApi.md#updateReservation) | **PUT** /service/v1/reservation/{reservationId} |  |
| [**updateSchedule()**](ServiceApi.md#updateSchedule) | **PUT** /service/v1/serviceResources/{resourceId}/schedules |  |


## `addAppointmentForServiceJobByServiceJobId()`

```php
addAppointmentForServiceJobByServiceJobId($service_job_id, $body): \OpenAPI\Client\Model\services\SetAppointmentResponse
```



Adds an appointment to the service job indicated by the service job identifier specified.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ServiceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$service_job_id = 'service_job_id_example'; // string | An Amazon defined service job identifier.
$body = new \OpenAPI\Client\Model\services\AddAppointmentRequest(); // \OpenAPI\Client\Model\services\AddAppointmentRequest | Add appointment operation input details.

try {
    $result = $apiInstance->addAppointmentForServiceJobByServiceJobId($service_job_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ServiceApi->addAppointmentForServiceJobByServiceJobId: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **service_job_id** | **string**| An Amazon defined service job identifier. | |
| **body** | [**\OpenAPI\Client\Model\services\AddAppointmentRequest**](../Model/AddAppointmentRequest.md)| Add appointment operation input details. | |

### Return type

[**\OpenAPI\Client\Model\services\SetAppointmentResponse**](../Model/SetAppointmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `assignAppointmentResources()`

```php
assignAppointmentResources($service_job_id, $appointment_id, $body): \OpenAPI\Client\Model\services\AssignAppointmentResourcesResponse
```



Assigns new resource(s) or overwrite/update the existing one(s) to a service job appointment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ServiceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$service_job_id = 'service_job_id_example'; // string | An Amazon-defined service job identifier. Get this value by calling the `getServiceJobs` operation of the Services API.
$appointment_id = 'appointment_id_example'; // string | An Amazon-defined identifier of active service job appointment.
$body = new \OpenAPI\Client\Model\services\AssignAppointmentResourcesRequest(); // \OpenAPI\Client\Model\services\AssignAppointmentResourcesRequest

try {
    $result = $apiInstance->assignAppointmentResources($service_job_id, $appointment_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ServiceApi->assignAppointmentResources: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **service_job_id** | **string**| An Amazon-defined service job identifier. Get this value by calling the &#x60;getServiceJobs&#x60; operation of the Services API. | |
| **appointment_id** | **string**| An Amazon-defined identifier of active service job appointment. | |
| **body** | [**\OpenAPI\Client\Model\services\AssignAppointmentResourcesRequest**](../Model/AssignAppointmentResourcesRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\services\AssignAppointmentResourcesResponse**](../Model/AssignAppointmentResourcesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `cancelReservation()`

```php
cancelReservation($reservation_id, $marketplace_ids): \OpenAPI\Client\Model\services\CancelReservationResponse
```



Cancel a reservation.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ServiceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$reservation_id = 'reservation_id_example'; // string | Reservation Identifier
$marketplace_ids = array('marketplace_ids_example'); // string[] | An identifier for the marketplace in which the resource operates.

try {
    $result = $apiInstance->cancelReservation($reservation_id, $marketplace_ids);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ServiceApi->cancelReservation: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **reservation_id** | **string**| Reservation Identifier | |
| **marketplace_ids** | [**string[]**](../Model/string.md)| An identifier for the marketplace in which the resource operates. | |

### Return type

[**\OpenAPI\Client\Model\services\CancelReservationResponse**](../Model/CancelReservationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `cancelServiceJobByServiceJobId()`

```php
cancelServiceJobByServiceJobId($service_job_id, $cancellation_reason_code): \OpenAPI\Client\Model\services\CancelServiceJobByServiceJobIdResponse
```



Cancels the service job indicated by the service job identifier specified.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ServiceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$service_job_id = 'service_job_id_example'; // string | An Amazon defined service job identifier.
$cancellation_reason_code = 'cancellation_reason_code_example'; // string | A cancel reason code that specifies the reason for cancelling a service job.

try {
    $result = $apiInstance->cancelServiceJobByServiceJobId($service_job_id, $cancellation_reason_code);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ServiceApi->cancelServiceJobByServiceJobId: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **service_job_id** | **string**| An Amazon defined service job identifier. | |
| **cancellation_reason_code** | **string**| A cancel reason code that specifies the reason for cancelling a service job. | |

### Return type

[**\OpenAPI\Client\Model\services\CancelServiceJobByServiceJobIdResponse**](../Model/CancelServiceJobByServiceJobIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `completeServiceJobByServiceJobId()`

```php
completeServiceJobByServiceJobId($service_job_id): \OpenAPI\Client\Model\services\CompleteServiceJobByServiceJobIdResponse
```



Completes the service job indicated by the service job identifier specified.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ServiceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$service_job_id = 'service_job_id_example'; // string | An Amazon defined service job identifier.

try {
    $result = $apiInstance->completeServiceJobByServiceJobId($service_job_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ServiceApi->completeServiceJobByServiceJobId: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **service_job_id** | **string**| An Amazon defined service job identifier. | |

### Return type

[**\OpenAPI\Client\Model\services\CompleteServiceJobByServiceJobIdResponse**](../Model/CompleteServiceJobByServiceJobIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createReservation()`

```php
createReservation($marketplace_ids, $body): \OpenAPI\Client\Model\services\CreateReservationResponse
```



Create a reservation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ServiceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$marketplace_ids = array('marketplace_ids_example'); // string[] | An identifier for the marketplace in which the resource operates.
$body = new \OpenAPI\Client\Model\services\CreateReservationRequest(); // \OpenAPI\Client\Model\services\CreateReservationRequest | Reservation details

try {
    $result = $apiInstance->createReservation($marketplace_ids, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ServiceApi->createReservation: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **marketplace_ids** | [**string[]**](../Model/string.md)| An identifier for the marketplace in which the resource operates. | |
| **body** | [**\OpenAPI\Client\Model\services\CreateReservationRequest**](../Model/CreateReservationRequest.md)| Reservation details | |

### Return type

[**\OpenAPI\Client\Model\services\CreateReservationResponse**](../Model/CreateReservationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createServiceDocumentUploadDestination()`

```php
createServiceDocumentUploadDestination($body): \OpenAPI\Client\Model\services\CreateServiceDocumentUploadDestination
```



Creates an upload destination.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ServiceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \OpenAPI\Client\Model\services\ServiceUploadDocument(); // \OpenAPI\Client\Model\services\ServiceUploadDocument | Upload document operation input details.

try {
    $result = $apiInstance->createServiceDocumentUploadDestination($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ServiceApi->createServiceDocumentUploadDestination: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **body** | [**\OpenAPI\Client\Model\services\ServiceUploadDocument**](../Model/ServiceUploadDocument.md)| Upload document operation input details. | |

### Return type

[**\OpenAPI\Client\Model\services\CreateServiceDocumentUploadDestination**](../Model/CreateServiceDocumentUploadDestination.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getAppointmentSlots()`

```php
getAppointmentSlots($asin, $store_id, $marketplace_ids, $start_time, $end_time): \OpenAPI\Client\Model\services\GetAppointmentSlotsResponse
```



Gets appointment slots as per the service context specified.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 20 | 40 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ServiceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$asin = 'asin_example'; // string | ASIN associated with the service.
$store_id = 'store_id_example'; // string | Store identifier defining the region scope to retrive appointment slots.
$marketplace_ids = array('marketplace_ids_example'); // string[] | An identifier for the marketplace for which appointment slots are queried
$start_time = 'start_time_example'; // string | A time from which the appointment slots will be retrieved. The specified time must be in ISO 8601 format. If `startTime` is provided, `endTime` should also be provided. Default value is as per business configuration.
$end_time = 'end_time_example'; // string | A time up to which the appointment slots will be retrieved. The specified time must be in ISO 8601 format. If `endTime` is provided, `startTime` should also be provided. Default value is as per business configuration. Maximum range of appointment slots can be 90 days.

try {
    $result = $apiInstance->getAppointmentSlots($asin, $store_id, $marketplace_ids, $start_time, $end_time);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ServiceApi->getAppointmentSlots: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **asin** | **string**| ASIN associated with the service. | |
| **store_id** | **string**| Store identifier defining the region scope to retrive appointment slots. | |
| **marketplace_ids** | [**string[]**](../Model/string.md)| An identifier for the marketplace for which appointment slots are queried | |
| **start_time** | **string**| A time from which the appointment slots will be retrieved. The specified time must be in ISO 8601 format. If &#x60;startTime&#x60; is provided, &#x60;endTime&#x60; should also be provided. Default value is as per business configuration. | [optional] |
| **end_time** | **string**| A time up to which the appointment slots will be retrieved. The specified time must be in ISO 8601 format. If &#x60;endTime&#x60; is provided, &#x60;startTime&#x60; should also be provided. Default value is as per business configuration. Maximum range of appointment slots can be 90 days. | [optional] |

### Return type

[**\OpenAPI\Client\Model\services\GetAppointmentSlotsResponse**](../Model/GetAppointmentSlotsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getAppointmmentSlotsByJobId()`

```php
getAppointmmentSlotsByJobId($service_job_id, $marketplace_ids, $start_time, $end_time): \OpenAPI\Client\Model\services\GetAppointmentSlotsResponse
```



Gets appointment slots for the service associated with the service job id specified.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ServiceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$service_job_id = 'service_job_id_example'; // string | A service job identifier to retrive appointment slots for associated service.
$marketplace_ids = array('marketplace_ids_example'); // string[] | An identifier for the marketplace in which the resource operates.
$start_time = 'start_time_example'; // string | A time from which the appointment slots will be retrieved. The specified time must be in ISO 8601 format. If `startTime` is provided, `endTime` should also be provided. Default value is as per business configuration.
$end_time = 'end_time_example'; // string | A time up to which the appointment slots will be retrieved. The specified time must be in ISO 8601 format. If `endTime` is provided, `startTime` should also be provided. Default value is as per business configuration. Maximum range of appointment slots can be 90 days.

try {
    $result = $apiInstance->getAppointmmentSlotsByJobId($service_job_id, $marketplace_ids, $start_time, $end_time);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ServiceApi->getAppointmmentSlotsByJobId: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **service_job_id** | **string**| A service job identifier to retrive appointment slots for associated service. | |
| **marketplace_ids** | [**string[]**](../Model/string.md)| An identifier for the marketplace in which the resource operates. | |
| **start_time** | **string**| A time from which the appointment slots will be retrieved. The specified time must be in ISO 8601 format. If &#x60;startTime&#x60; is provided, &#x60;endTime&#x60; should also be provided. Default value is as per business configuration. | [optional] |
| **end_time** | **string**| A time up to which the appointment slots will be retrieved. The specified time must be in ISO 8601 format. If &#x60;endTime&#x60; is provided, &#x60;startTime&#x60; should also be provided. Default value is as per business configuration. Maximum range of appointment slots can be 90 days. | [optional] |

### Return type

[**\OpenAPI\Client\Model\services\GetAppointmentSlotsResponse**](../Model/GetAppointmentSlotsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getFixedSlotCapacity()`

```php
getFixedSlotCapacity($resource_id, $marketplace_ids, $body, $next_page_token): \OpenAPI\Client\Model\services\FixedSlotCapacity
```



Provides capacity in fixed-size slots.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ServiceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$resource_id = 'resource_id_example'; // string | Resource Identifier.
$marketplace_ids = array('marketplace_ids_example'); // string[] | An identifier for the marketplace in which the resource operates.
$body = new \OpenAPI\Client\Model\services\FixedSlotCapacityQuery(); // \OpenAPI\Client\Model\services\FixedSlotCapacityQuery | Request body.
$next_page_token = 'next_page_token_example'; // string | Next page token returned in the response of your previous request.

try {
    $result = $apiInstance->getFixedSlotCapacity($resource_id, $marketplace_ids, $body, $next_page_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ServiceApi->getFixedSlotCapacity: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **resource_id** | **string**| Resource Identifier. | |
| **marketplace_ids** | [**string[]**](../Model/string.md)| An identifier for the marketplace in which the resource operates. | |
| **body** | [**\OpenAPI\Client\Model\services\FixedSlotCapacityQuery**](../Model/FixedSlotCapacityQuery.md)| Request body. | |
| **next_page_token** | **string**| Next page token returned in the response of your previous request. | [optional] |

### Return type

[**\OpenAPI\Client\Model\services\FixedSlotCapacity**](../Model/FixedSlotCapacity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getRangeSlotCapacity()`

```php
getRangeSlotCapacity($resource_id, $marketplace_ids, $body, $next_page_token): \OpenAPI\Client\Model\services\RangeSlotCapacity
```



Provides capacity slots in a format similar to availability records.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ServiceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$resource_id = 'resource_id_example'; // string | Resource Identifier.
$marketplace_ids = array('marketplace_ids_example'); // string[] | An identifier for the marketplace in which the resource operates.
$body = new \OpenAPI\Client\Model\services\RangeSlotCapacityQuery(); // \OpenAPI\Client\Model\services\RangeSlotCapacityQuery | Request body.
$next_page_token = 'next_page_token_example'; // string | Next page token returned in the response of your previous request.

try {
    $result = $apiInstance->getRangeSlotCapacity($resource_id, $marketplace_ids, $body, $next_page_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ServiceApi->getRangeSlotCapacity: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **resource_id** | **string**| Resource Identifier. | |
| **marketplace_ids** | [**string[]**](../Model/string.md)| An identifier for the marketplace in which the resource operates. | |
| **body** | [**\OpenAPI\Client\Model\services\RangeSlotCapacityQuery**](../Model/RangeSlotCapacityQuery.md)| Request body. | |
| **next_page_token** | **string**| Next page token returned in the response of your previous request. | [optional] |

### Return type

[**\OpenAPI\Client\Model\services\RangeSlotCapacity**](../Model/RangeSlotCapacity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getServiceJobByServiceJobId()`

```php
getServiceJobByServiceJobId($service_job_id): \OpenAPI\Client\Model\services\GetServiceJobByServiceJobIdResponse
```



Gets details of service job indicated by the provided `serviceJobID`.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 20 | 40 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ServiceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$service_job_id = 'service_job_id_example'; // string | A service job identifier.

try {
    $result = $apiInstance->getServiceJobByServiceJobId($service_job_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ServiceApi->getServiceJobByServiceJobId: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **service_job_id** | **string**| A service job identifier. | |

### Return type

[**\OpenAPI\Client\Model\services\GetServiceJobByServiceJobIdResponse**](../Model/GetServiceJobByServiceJobIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getServiceJobs()`

```php
getServiceJobs($marketplace_ids, $service_order_ids, $service_job_status, $page_token, $page_size, $sort_field, $sort_order, $created_after, $created_before, $last_updated_after, $last_updated_before, $schedule_start_date, $schedule_end_date, $asins, $required_skills, $store_ids): \OpenAPI\Client\Model\services\GetServiceJobsResponse
```



Gets service job details for the specified filter query.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 40 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ServiceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$marketplace_ids = array('marketplace_ids_example'); // string[] | Used to select jobs that were placed in the specified marketplaces.
$service_order_ids = array('service_order_ids_example'); // string[] | List of service order ids for the query you want to perform.Max values supported 20.
$service_job_status = array('service_job_status_example'); // string[] | A list of one or more job status by which to filter the list of jobs.
$page_token = 'page_token_example'; // string | String returned in the response of your previous request.
$page_size = 20; // int | A non-negative integer that indicates the maximum number of jobs to return in the list, Value must be 1 - 20. Default 20.
$sort_field = 'sort_field_example'; // string | Sort fields on which you want to sort the output.
$sort_order = 'sort_order_example'; // string | Sort order for the query you want to perform.
$created_after = 'created_after_example'; // string | A date used for selecting jobs created at or after a specified time. Must be in ISO 8601 format. Required if `LastUpdatedAfter` is not specified. Specifying both `CreatedAfter` and `LastUpdatedAfter` returns an error.
$created_before = 'created_before_example'; // string | A date used for selecting jobs created at or before a specified time. Must be in ISO 8601 format.
$last_updated_after = 'last_updated_after_example'; // string | A date used for selecting jobs updated at or after a specified time. Must be in ISO 8601 format. Required if `createdAfter` is not specified. Specifying both `CreatedAfter` and `LastUpdatedAfter` returns an error.
$last_updated_before = 'last_updated_before_example'; // string | A date used for selecting jobs updated at or before a specified time. Must be in ISO 8601 format.
$schedule_start_date = 'schedule_start_date_example'; // string | A date used for filtering jobs schedules at or after a specified time. Must be in ISO 8601 format. Schedule end date should not be earlier than schedule start date.
$schedule_end_date = 'schedule_end_date_example'; // string | A date used for filtering jobs schedules at or before a specified time. Must be in ISO 8601 format. Schedule end date should not be earlier than schedule start date.
$asins = array('asins_example'); // string[] | List of Amazon Standard Identification Numbers (ASIN) of the items. Max values supported is 20.
$required_skills = array('required_skills_example'); // string[] | A defined set of related knowledge, skills, experience, tools, materials, and work processes common to service delivery for a set of products and/or service scenarios. Max values supported is 20.
$store_ids = array('store_ids_example'); // string[] | List of Amazon-defined identifiers for the region scope. Max values supported is 50.

try {
    $result = $apiInstance->getServiceJobs($marketplace_ids, $service_order_ids, $service_job_status, $page_token, $page_size, $sort_field, $sort_order, $created_after, $created_before, $last_updated_after, $last_updated_before, $schedule_start_date, $schedule_end_date, $asins, $required_skills, $store_ids);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ServiceApi->getServiceJobs: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **marketplace_ids** | [**string[]**](../Model/string.md)| Used to select jobs that were placed in the specified marketplaces. | |
| **service_order_ids** | [**string[]**](../Model/string.md)| List of service order ids for the query you want to perform.Max values supported 20. | [optional] |
| **service_job_status** | [**string[]**](../Model/string.md)| A list of one or more job status by which to filter the list of jobs. | [optional] |
| **page_token** | **string**| String returned in the response of your previous request. | [optional] |
| **page_size** | **int**| A non-negative integer that indicates the maximum number of jobs to return in the list, Value must be 1 - 20. Default 20. | [optional] [default to 20] |
| **sort_field** | **string**| Sort fields on which you want to sort the output. | [optional] |
| **sort_order** | **string**| Sort order for the query you want to perform. | [optional] |
| **created_after** | **string**| A date used for selecting jobs created at or after a specified time. Must be in ISO 8601 format. Required if &#x60;LastUpdatedAfter&#x60; is not specified. Specifying both &#x60;CreatedAfter&#x60; and &#x60;LastUpdatedAfter&#x60; returns an error. | [optional] |
| **created_before** | **string**| A date used for selecting jobs created at or before a specified time. Must be in ISO 8601 format. | [optional] |
| **last_updated_after** | **string**| A date used for selecting jobs updated at or after a specified time. Must be in ISO 8601 format. Required if &#x60;createdAfter&#x60; is not specified. Specifying both &#x60;CreatedAfter&#x60; and &#x60;LastUpdatedAfter&#x60; returns an error. | [optional] |
| **last_updated_before** | **string**| A date used for selecting jobs updated at or before a specified time. Must be in ISO 8601 format. | [optional] |
| **schedule_start_date** | **string**| A date used for filtering jobs schedules at or after a specified time. Must be in ISO 8601 format. Schedule end date should not be earlier than schedule start date. | [optional] |
| **schedule_end_date** | **string**| A date used for filtering jobs schedules at or before a specified time. Must be in ISO 8601 format. Schedule end date should not be earlier than schedule start date. | [optional] |
| **asins** | [**string[]**](../Model/string.md)| List of Amazon Standard Identification Numbers (ASIN) of the items. Max values supported is 20. | [optional] |
| **required_skills** | [**string[]**](../Model/string.md)| A defined set of related knowledge, skills, experience, tools, materials, and work processes common to service delivery for a set of products and/or service scenarios. Max values supported is 20. | [optional] |
| **store_ids** | [**string[]**](../Model/string.md)| List of Amazon-defined identifiers for the region scope. Max values supported is 50. | [optional] |

### Return type

[**\OpenAPI\Client\Model\services\GetServiceJobsResponse**](../Model/GetServiceJobsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `rescheduleAppointmentForServiceJobByServiceJobId()`

```php
rescheduleAppointmentForServiceJobByServiceJobId($service_job_id, $appointment_id, $body): \OpenAPI\Client\Model\services\SetAppointmentResponse
```



Reschedules an appointment for the service job indicated by the service job identifier specified.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ServiceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$service_job_id = 'service_job_id_example'; // string | An Amazon defined service job identifier.
$appointment_id = 'appointment_id_example'; // string | An existing appointment identifier for the Service Job.
$body = new \OpenAPI\Client\Model\services\RescheduleAppointmentRequest(); // \OpenAPI\Client\Model\services\RescheduleAppointmentRequest | Reschedule appointment operation input details.

try {
    $result = $apiInstance->rescheduleAppointmentForServiceJobByServiceJobId($service_job_id, $appointment_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ServiceApi->rescheduleAppointmentForServiceJobByServiceJobId: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **service_job_id** | **string**| An Amazon defined service job identifier. | |
| **appointment_id** | **string**| An existing appointment identifier for the Service Job. | |
| **body** | [**\OpenAPI\Client\Model\services\RescheduleAppointmentRequest**](../Model/RescheduleAppointmentRequest.md)| Reschedule appointment operation input details. | |

### Return type

[**\OpenAPI\Client\Model\services\SetAppointmentResponse**](../Model/SetAppointmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `setAppointmentFulfillmentData()`

```php
setAppointmentFulfillmentData($service_job_id, $appointment_id, $body): string
```



Updates the appointment fulfillment data related to a given `jobID` and `appointmentID`.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ServiceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$service_job_id = 'service_job_id_example'; // string | An Amazon-defined service job identifier. Get this value by calling the `getServiceJobs` operation of the Services API.
$appointment_id = 'appointment_id_example'; // string | An Amazon-defined identifier of active service job appointment.
$body = new \OpenAPI\Client\Model\services\SetAppointmentFulfillmentDataRequest(); // \OpenAPI\Client\Model\services\SetAppointmentFulfillmentDataRequest | Appointment fulfillment data collection details.

try {
    $result = $apiInstance->setAppointmentFulfillmentData($service_job_id, $appointment_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ServiceApi->setAppointmentFulfillmentData: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **service_job_id** | **string**| An Amazon-defined service job identifier. Get this value by calling the &#x60;getServiceJobs&#x60; operation of the Services API. | |
| **appointment_id** | **string**| An Amazon-defined identifier of active service job appointment. | |
| **body** | [**\OpenAPI\Client\Model\services\SetAppointmentFulfillmentDataRequest**](../Model/SetAppointmentFulfillmentDataRequest.md)| Appointment fulfillment data collection details. | |

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateReservation()`

```php
updateReservation($reservation_id, $marketplace_ids, $body): \OpenAPI\Client\Model\services\UpdateReservationResponse
```



Update a reservation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ServiceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$reservation_id = 'reservation_id_example'; // string | Reservation Identifier
$marketplace_ids = array('marketplace_ids_example'); // string[] | An identifier for the marketplace in which the resource operates.
$body = new \OpenAPI\Client\Model\services\UpdateReservationRequest(); // \OpenAPI\Client\Model\services\UpdateReservationRequest | Reservation details

try {
    $result = $apiInstance->updateReservation($reservation_id, $marketplace_ids, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ServiceApi->updateReservation: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **reservation_id** | **string**| Reservation Identifier | |
| **marketplace_ids** | [**string[]**](../Model/string.md)| An identifier for the marketplace in which the resource operates. | |
| **body** | [**\OpenAPI\Client\Model\services\UpdateReservationRequest**](../Model/UpdateReservationRequest.md)| Reservation details | |

### Return type

[**\OpenAPI\Client\Model\services\UpdateReservationResponse**](../Model/UpdateReservationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateSchedule()`

```php
updateSchedule($resource_id, $marketplace_ids, $body): \OpenAPI\Client\Model\services\UpdateScheduleResponse
```



Update the schedule of the given resource.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ServiceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$resource_id = 'resource_id_example'; // string | Resource (store) Identifier
$marketplace_ids = array('marketplace_ids_example'); // string[] | An identifier for the marketplace in which the resource operates.
$body = new \OpenAPI\Client\Model\services\UpdateScheduleRequest(); // \OpenAPI\Client\Model\services\UpdateScheduleRequest | Schedule details

try {
    $result = $apiInstance->updateSchedule($resource_id, $marketplace_ids, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ServiceApi->updateSchedule: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **resource_id** | **string**| Resource (store) Identifier | |
| **marketplace_ids** | [**string[]**](../Model/string.md)| An identifier for the marketplace in which the resource operates. | |
| **body** | [**\OpenAPI\Client\Model\services\UpdateScheduleRequest**](../Model/UpdateScheduleRequest.md)| Schedule details | |

### Return type

[**\OpenAPI\Client\Model\services\UpdateScheduleResponse**](../Model/UpdateScheduleResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
