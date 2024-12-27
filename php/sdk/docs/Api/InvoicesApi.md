# OpenAPI\Client\InvoicesApi

All URIs are relative to https://sellingpartnerapi-na.amazon.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createInvoicesExport()**](InvoicesApi.md#createInvoicesExport) | **POST** /tax/invoices/2024-06-19/exports |  |
| [**getInvoice()**](InvoicesApi.md#getInvoice) | **GET** /tax/invoices/2024-06-19/invoices/{invoiceId} |  |
| [**getInvoices()**](InvoicesApi.md#getInvoices) | **GET** /tax/invoices/2024-06-19/invoices |  |
| [**getInvoicesAttributes()**](InvoicesApi.md#getInvoicesAttributes) | **GET** /tax/invoices/2024-06-19/attributes |  |
| [**getInvoicesDocument()**](InvoicesApi.md#getInvoicesDocument) | **GET** /tax/invoices/2024-06-19/documents/{invoicesDocumentId} |  |
| [**getInvoicesExport()**](InvoicesApi.md#getInvoicesExport) | **GET** /tax/invoices/2024-06-19/exports/{exportId} |  |
| [**getInvoicesExports()**](InvoicesApi.md#getInvoicesExports) | **GET** /tax/invoices/2024-06-19/exports |  |


## `createInvoicesExport()`

```php
createInvoicesExport($body): \OpenAPI\Client\Model\invoices\ExportInvoicesResponse
```



Creates an invoice export request.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.167 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\InvoicesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \OpenAPI\Client\Model\invoices\ExportInvoicesRequest(); // \OpenAPI\Client\Model\invoices\ExportInvoicesRequest | Information required to create the export request.

try {
    $result = $apiInstance->createInvoicesExport($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling InvoicesApi->createInvoicesExport: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **body** | [**\OpenAPI\Client\Model\invoices\ExportInvoicesRequest**](../Model/ExportInvoicesRequest.md)| Information required to create the export request. | |

### Return type

[**\OpenAPI\Client\Model\invoices\ExportInvoicesResponse**](../Model/ExportInvoicesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getInvoice()`

```php
getInvoice($marketplace_id, $invoice_id): \OpenAPI\Client\Model\invoices\GetInvoiceResponse
```



Returns invoice data for the specified invoice. This operation returns only a subset of the invoices data; refer to the response definition to get all the possible attributes. To get the full invoice, use the `createInvoicesExport` operation to start an export request.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 15 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\InvoicesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$marketplace_id = 'marketplace_id_example'; // string | The marketplace from which you want the invoice.
$invoice_id = 'invoice_id_example'; // string | The invoice identifier.

try {
    $result = $apiInstance->getInvoice($marketplace_id, $invoice_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling InvoicesApi->getInvoice: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **marketplace_id** | **string**| The marketplace from which you want the invoice. | |
| **invoice_id** | **string**| The invoice identifier. | |

### Return type

[**\OpenAPI\Client\Model\invoices\GetInvoiceResponse**](../Model/GetInvoiceResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getInvoices()`

```php
getInvoices($marketplace_id, $transaction_identifier_name, $page_size, $date_end, $transaction_type, $transaction_identifier_id, $date_start, $series, $next_token, $sort_order, $invoice_type, $statuses, $external_invoice_id, $sort_by): \OpenAPI\Client\Model\invoices\GetInvoicesResponse
```



Returns invoice details for the invoices that match the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.1 | 20 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\InvoicesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$marketplace_id = 'marketplace_id_example'; // string | The response includes only the invoices that match the specified marketplace.
$transaction_identifier_name = 'transaction_identifier_name_example'; // string | The name of the transaction identifier filter. If you provide a value for this field, you must also provide a value for the `transactionIdentifierId` field.Use the `getInvoicesAttributes` operation to check `transactionIdentifierName` options.
$page_size = 56; // int | The maximum number of invoices you want to return in a single call.  Minimum: 1  Maximum: 200
$date_end = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime | The latest invoice creation date for invoices that you want to include in the response. Dates are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default is the current date-time.
$transaction_type = 'transaction_type_example'; // string | The marketplace-specific classification of the transaction type for which the invoice was created. Use the `getInvoicesAttributes` operation to check `transactionType` options.
$transaction_identifier_id = 'transaction_identifier_id_example'; // string | The ID of the transaction identifier filter. If you provide a value for this field, you must also provide a value for the `transactionIdentifierName` field.
$date_start = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime | The earliest invoice creation date for invoices that you want to include in the response. Dates are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default is 24 hours prior to the time of the request.
$series = 'series_example'; // string | Return invoices with the specified series number.
$next_token = 'next_token_example'; // string | The response includes `nextToken` when the number of results exceeds the specified `pageSize` value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until `nextToken` is null. Note that this operation can return empty pages.
$sort_order = 'sort_order_example'; // string | Sort the invoices in the response in ascending or descending order.
$invoice_type = 'invoice_type_example'; // string | The marketplace-specific classification of the invoice type. Use the `getInvoicesAttributes` operation to check `invoiceType` options.
$statuses = array('statuses_example'); // string[] | A list of statuses that you can use to filter invoices. Use the `getInvoicesAttributes` operation to check invoice status options.  Min count: 1
$external_invoice_id = 'external_invoice_id_example'; // string | Return invoices that match this external ID. This is typically the Government Invoice ID.
$sort_by = 'sort_by_example'; // string | The attribute by which you want to sort the invoices in the response.

try {
    $result = $apiInstance->getInvoices($marketplace_id, $transaction_identifier_name, $page_size, $date_end, $transaction_type, $transaction_identifier_id, $date_start, $series, $next_token, $sort_order, $invoice_type, $statuses, $external_invoice_id, $sort_by);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling InvoicesApi->getInvoices: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **marketplace_id** | **string**| The response includes only the invoices that match the specified marketplace. | |
| **transaction_identifier_name** | **string**| The name of the transaction identifier filter. If you provide a value for this field, you must also provide a value for the &#x60;transactionIdentifierId&#x60; field.Use the &#x60;getInvoicesAttributes&#x60; operation to check &#x60;transactionIdentifierName&#x60; options. | [optional] |
| **page_size** | **int**| The maximum number of invoices you want to return in a single call.  Minimum: 1  Maximum: 200 | [optional] |
| **date_end** | **\DateTime**| The latest invoice creation date for invoices that you want to include in the response. Dates are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default is the current date-time. | [optional] |
| **transaction_type** | **string**| The marketplace-specific classification of the transaction type for which the invoice was created. Use the &#x60;getInvoicesAttributes&#x60; operation to check &#x60;transactionType&#x60; options. | [optional] |
| **transaction_identifier_id** | **string**| The ID of the transaction identifier filter. If you provide a value for this field, you must also provide a value for the &#x60;transactionIdentifierName&#x60; field. | [optional] |
| **date_start** | **\DateTime**| The earliest invoice creation date for invoices that you want to include in the response. Dates are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default is 24 hours prior to the time of the request. | [optional] |
| **series** | **string**| Return invoices with the specified series number. | [optional] |
| **next_token** | **string**| The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;pageSize&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages. | [optional] |
| **sort_order** | **string**| Sort the invoices in the response in ascending or descending order. | [optional] |
| **invoice_type** | **string**| The marketplace-specific classification of the invoice type. Use the &#x60;getInvoicesAttributes&#x60; operation to check &#x60;invoiceType&#x60; options. | [optional] |
| **statuses** | [**string[]**](../Model/string.md)| A list of statuses that you can use to filter invoices. Use the &#x60;getInvoicesAttributes&#x60; operation to check invoice status options.  Min count: 1 | [optional] |
| **external_invoice_id** | **string**| Return invoices that match this external ID. This is typically the Government Invoice ID. | [optional] |
| **sort_by** | **string**| The attribute by which you want to sort the invoices in the response. | [optional] |

### Return type

[**\OpenAPI\Client\Model\invoices\GetInvoicesResponse**](../Model/GetInvoicesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getInvoicesAttributes()`

```php
getInvoicesAttributes($marketplace_id): \OpenAPI\Client\Model\invoices\GetInvoicesAttributesResponse
```



Returns marketplace-dependent schemas and their respective set of possible values.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\InvoicesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$marketplace_id = 'marketplace_id_example'; // string | The marketplace identifier.

try {
    $result = $apiInstance->getInvoicesAttributes($marketplace_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling InvoicesApi->getInvoicesAttributes: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **marketplace_id** | **string**| The marketplace identifier. | |

### Return type

[**\OpenAPI\Client\Model\invoices\GetInvoicesAttributesResponse**](../Model/GetInvoicesAttributesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getInvoicesDocument()`

```php
getInvoicesDocument($invoices_document_id): \OpenAPI\Client\Model\invoices\GetInvoicesDocumentResponse
```



Returns the invoice document's ID and URL. Use the URL to download the ZIP file, which contains the invoices from the corresponding `createInvoicesExport` request.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\InvoicesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$invoices_document_id = 'invoices_document_id_example'; // string | The export document identifier.

try {
    $result = $apiInstance->getInvoicesDocument($invoices_document_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling InvoicesApi->getInvoicesDocument: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **invoices_document_id** | **string**| The export document identifier. | |

### Return type

[**\OpenAPI\Client\Model\invoices\GetInvoicesDocumentResponse**](../Model/GetInvoicesDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getInvoicesExport()`

```php
getInvoicesExport($export_id): \OpenAPI\Client\Model\invoices\GetInvoicesExportResponse
```



Returns invoice export details (including the `exportDocumentId`, if available) for the export that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 15 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\InvoicesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$export_id = 'export_id_example'; // string | The unique identifier for the export.

try {
    $result = $apiInstance->getInvoicesExport($export_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling InvoicesApi->getInvoicesExport: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **export_id** | **string**| The unique identifier for the export. | |

### Return type

[**\OpenAPI\Client\Model\invoices\GetInvoicesExportResponse**](../Model/GetInvoicesExportResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getInvoicesExports()`

```php
getInvoicesExports($marketplace_id, $date_start, $next_token, $page_size, $date_end, $status): \OpenAPI\Client\Model\invoices\GetInvoicesExportsResponse
```



Returns invoice exports details for exports that match the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.1 | 20 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\InvoicesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$marketplace_id = 'marketplace_id_example'; // string | The returned exports match the specified marketplace.
$date_start = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime | The earliest export creation date and time for exports that you want to include in the response. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default is 30 days ago.
$next_token = 'next_token_example'; // string | The response includes `nextToken` when the number of results exceeds the specified `pageSize` value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until `nextToken` is null. Note that this operation can return empty pages.
$page_size = 56; // int | The maximum number of invoices to return in a single call.  Minimum: 1  Maximum: 100
$date_end = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime | The latest export creation date and time for exports that you want to include in the response. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default value is the time of the request.
$status = 'status_example'; // string | Return exports matching the status specified.

try {
    $result = $apiInstance->getInvoicesExports($marketplace_id, $date_start, $next_token, $page_size, $date_end, $status);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling InvoicesApi->getInvoicesExports: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **marketplace_id** | **string**| The returned exports match the specified marketplace. | |
| **date_start** | **\DateTime**| The earliest export creation date and time for exports that you want to include in the response. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default is 30 days ago. | [optional] |
| **next_token** | **string**| The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;pageSize&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages. | [optional] |
| **page_size** | **int**| The maximum number of invoices to return in a single call.  Minimum: 1  Maximum: 100 | [optional] |
| **date_end** | **\DateTime**| The latest export creation date and time for exports that you want to include in the response. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default value is the time of the request. | [optional] |
| **status** | **string**| Return exports matching the status specified. | [optional] |

### Return type

[**\OpenAPI\Client\Model\invoices\GetInvoicesExportsResponse**](../Model/GetInvoicesExportsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
