# OpenAPI\Client\QueriesApi

All URIs are relative to https://sellingpartnerapi-na.amazon.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**cancelQuery()**](QueriesApi.md#cancelQuery) | **DELETE** /dataKiosk/2023-11-15/queries/{queryId} |  |
| [**createQuery()**](QueriesApi.md#createQuery) | **POST** /dataKiosk/2023-11-15/queries |  |
| [**getDocument()**](QueriesApi.md#getDocument) | **GET** /dataKiosk/2023-11-15/documents/{documentId} |  |
| [**getQueries()**](QueriesApi.md#getQueries) | **GET** /dataKiosk/2023-11-15/queries |  |
| [**getQuery()**](QueriesApi.md#getQuery) | **GET** /dataKiosk/2023-11-15/queries/{queryId} |  |


## `cancelQuery()`

```php
cancelQuery($query_id)
```



Cancels the query specified by the `queryId` parameter. Only queries with a non-terminal `processingStatus` (`IN_QUEUE`, `IN_PROGRESS`) can be cancelled. Cancelling a query that already has a `processingStatus` of `CANCELLED` will no-op. Cancelled queries are returned in subsequent calls to the `getQuery` and `getQueries` operations.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\QueriesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$query_id = 'query_id_example'; // string | The identifier for the query. This identifier is unique only in combination with a selling partner account ID.

try {
    $apiInstance->cancelQuery($query_id);
} catch (Exception $e) {
    echo 'Exception when calling QueriesApi->cancelQuery: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **query_id** | **string**| The identifier for the query. This identifier is unique only in combination with a selling partner account ID. | |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createQuery()`

```php
createQuery($body): \OpenAPI\Client\Model\datakiosk\CreateQueryResponse
```



Creates a Data Kiosk query request.  **Note:** The retention of a query varies based on the fields requested. Each field within a schema is annotated with a `@resultRetention` directive that defines how long a query containing that field will be retained. When a query contains multiple fields with different retentions, the shortest (minimum) retention is applied. The retention of a query's resulting documents always matches the retention of the query.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 15 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\QueriesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \OpenAPI\Client\Model\datakiosk\CreateQuerySpecification(); // \OpenAPI\Client\Model\datakiosk\CreateQuerySpecification | The body of the request.

try {
    $result = $apiInstance->createQuery($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling QueriesApi->createQuery: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **body** | [**\OpenAPI\Client\Model\datakiosk\CreateQuerySpecification**](../Model/CreateQuerySpecification.md)| The body of the request. | |

### Return type

[**\OpenAPI\Client\Model\datakiosk\CreateQueryResponse**](../Model/CreateQueryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getDocument()`

```php
getDocument($document_id): \OpenAPI\Client\Model\datakiosk\GetDocumentResponse
```



Returns the information required for retrieving a Data Kiosk document's contents. See the `createQuery` operation for details about document retention.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 15 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\QueriesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$document_id = 'document_id_example'; // string | The identifier for the Data Kiosk document.

try {
    $result = $apiInstance->getDocument($document_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling QueriesApi->getDocument: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **document_id** | **string**| The identifier for the Data Kiosk document. | |

### Return type

[**\OpenAPI\Client\Model\datakiosk\GetDocumentResponse**](../Model/GetDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getQueries()`

```php
getQueries($processing_statuses, $page_size, $created_since, $created_until, $pagination_token): \OpenAPI\Client\Model\datakiosk\GetQueriesResponse
```



Returns details for the Data Kiosk queries that match the specified filters. See the `createQuery` operation for details about query retention.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\QueriesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$processing_statuses = array('processing_statuses_example'); // string[] | A list of processing statuses used to filter queries.
$page_size = 10; // int | The maximum number of queries to return in a single call.
$created_since = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime | The earliest query creation date and time for queries to include in the response, in ISO 8601 date time format. The default is 90 days ago.
$created_until = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime | The latest query creation date and time for queries to include in the response, in ISO 8601 date time format. The default is the time of the `getQueries` request.
$pagination_token = 'pagination_token_example'; // string | A token to fetch a certain page of results when there are multiple pages of results available. The value of this token is fetched from the `pagination.nextToken` field returned in the `GetQueriesResponse` object. All other parameters must be provided with the same values that were provided with the request that generated this token, with the exception of `pageSize` which can be modified between calls to `getQueries`. In the absence of this token value, `getQueries` returns the first page of results.

try {
    $result = $apiInstance->getQueries($processing_statuses, $page_size, $created_since, $created_until, $pagination_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling QueriesApi->getQueries: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **processing_statuses** | [**string[]**](../Model/string.md)| A list of processing statuses used to filter queries. | [optional] |
| **page_size** | **int**| The maximum number of queries to return in a single call. | [optional] [default to 10] |
| **created_since** | **\DateTime**| The earliest query creation date and time for queries to include in the response, in ISO 8601 date time format. The default is 90 days ago. | [optional] |
| **created_until** | **\DateTime**| The latest query creation date and time for queries to include in the response, in ISO 8601 date time format. The default is the time of the &#x60;getQueries&#x60; request. | [optional] |
| **pagination_token** | **string**| A token to fetch a certain page of results when there are multiple pages of results available. The value of this token is fetched from the &#x60;pagination.nextToken&#x60; field returned in the &#x60;GetQueriesResponse&#x60; object. All other parameters must be provided with the same values that were provided with the request that generated this token, with the exception of &#x60;pageSize&#x60; which can be modified between calls to &#x60;getQueries&#x60;. In the absence of this token value, &#x60;getQueries&#x60; returns the first page of results. | [optional] |

### Return type

[**\OpenAPI\Client\Model\datakiosk\GetQueriesResponse**](../Model/GetQueriesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getQuery()`

```php
getQuery($query_id): \OpenAPI\Client\Model\datakiosk\Query
```



Returns query details for the query specified by the `queryId` parameter. See the `createQuery` operation for details about query retention.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2.0 | 15 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\QueriesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$query_id = 'query_id_example'; // string | The query identifier.

try {
    $result = $apiInstance->getQuery($query_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling QueriesApi->getQuery: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **query_id** | **string**| The query identifier. | |

### Return type

[**\OpenAPI\Client\Model\datakiosk\Query**](../Model/Query.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
