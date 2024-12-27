# OpenAPI\Client\FeedsApi

All URIs are relative to https://sellingpartnerapi-na.amazon.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**cancelFeed()**](FeedsApi.md#cancelFeed) | **DELETE** /feeds/2021-06-30/feeds/{feedId} | cancelFeed |
| [**createFeed()**](FeedsApi.md#createFeed) | **POST** /feeds/2021-06-30/feeds | createFeed |
| [**createFeedDocument()**](FeedsApi.md#createFeedDocument) | **POST** /feeds/2021-06-30/documents | createFeedDocument |
| [**getFeed()**](FeedsApi.md#getFeed) | **GET** /feeds/2021-06-30/feeds/{feedId} | getFeed |
| [**getFeedDocument()**](FeedsApi.md#getFeedDocument) | **GET** /feeds/2021-06-30/documents/{feedDocumentId} | getFeedDocument |
| [**getFeeds()**](FeedsApi.md#getFeeds) | **GET** /feeds/2021-06-30/feeds | getFeeds |


## `cancelFeed()`

```php
cancelFeed($feed_id)
```

cancelFeed

Cancels the feed that you specify. Only feeds with `processingStatus=IN_QUEUE` can be cancelled. Cancelled feeds are returned in subsequent calls to the [`getFeed`](https://developer-docs.amazon.com/sp-api/docs/feeds-api-v2021-06-30-reference#getfeed) and [`getFeeds`](https://developer-docs.amazon.com/sp-api/docs/feeds-api-v2021-06-30-reference#getfeeds) operations.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 15 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FeedsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$feed_id = 'feed_id_example'; // string | The identifier for the feed. This identifier is unique only in combination with a seller ID.

try {
    $apiInstance->cancelFeed($feed_id);
} catch (Exception $e) {
    echo 'Exception when calling FeedsApi->cancelFeed: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **feed_id** | **string**| The identifier for the feed. This identifier is unique only in combination with a seller ID. | |

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

## `createFeed()`

```php
createFeed($body): \OpenAPI\Client\Model\feeds\CreateFeedResponse
```

createFeed

Creates a feed. Upload the contents of the feed document before calling this operation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0083 | 15 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).  The rate limit for the [`JSON_LISTINGS_FEED`](https://developer-docs.amazon.com/sp-api/docs/listings-feed-type-values#listings-feed) feed type differs from the rate limit for the [`createFeed`](https://developer-docs.amazon.com/sp-api/docs/feeds-api-v2021-06-30-reference#post-feeds2021-06-30feeds) operation. For more information, refer to the [Building Listings Management Workflows Guide](https://developer-docs.amazon.com/sp-api/docs/building-listings-management-workflows-guide#should-i-submit-in-bulk-using-the-json_listings_feed-or-individually-with-the-listings-items-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FeedsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \OpenAPI\Client\Model\feeds\CreateFeedSpecification(); // \OpenAPI\Client\Model\feeds\CreateFeedSpecification | Information required to create the feed.

try {
    $result = $apiInstance->createFeed($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FeedsApi->createFeed: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **body** | [**\OpenAPI\Client\Model\feeds\CreateFeedSpecification**](../Model/CreateFeedSpecification.md)| Information required to create the feed. | |

### Return type

[**\OpenAPI\Client\Model\feeds\CreateFeedResponse**](../Model/CreateFeedResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createFeedDocument()`

```php
createFeedDocument($body): \OpenAPI\Client\Model\feeds\CreateFeedDocumentResponse
```

createFeedDocument

Creates a feed document for the feed type that you specify. This operation returns a presigned URL for uploading the feed document contents. It also returns a `feedDocumentId` value that you can pass in with a subsequent call to the [`createFeed`](https://developer-docs.amazon.com/sp-api/docs/feeds-api-v2021-06-30-reference#createfeed) operation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 15 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FeedsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \OpenAPI\Client\Model\feeds\CreateFeedDocumentSpecification(); // \OpenAPI\Client\Model\feeds\CreateFeedDocumentSpecification | Specifies the content type for the createFeedDocument operation.

try {
    $result = $apiInstance->createFeedDocument($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FeedsApi->createFeedDocument: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **body** | [**\OpenAPI\Client\Model\feeds\CreateFeedDocumentSpecification**](../Model/CreateFeedDocumentSpecification.md)| Specifies the content type for the createFeedDocument operation. | |

### Return type

[**\OpenAPI\Client\Model\feeds\CreateFeedDocumentResponse**](../Model/CreateFeedDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getFeed()`

```php
getFeed($feed_id): \OpenAPI\Client\Model\feeds\Feed
```

getFeed

Returns feed details (including the `resultDocumentId`, if available) for the feed that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 15 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FeedsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$feed_id = 'feed_id_example'; // string | The identifier for the feed. This identifier is unique only in combination with a seller ID.

try {
    $result = $apiInstance->getFeed($feed_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FeedsApi->getFeed: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **feed_id** | **string**| The identifier for the feed. This identifier is unique only in combination with a seller ID. | |

### Return type

[**\OpenAPI\Client\Model\feeds\Feed**](../Model/Feed.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getFeedDocument()`

```php
getFeedDocument($feed_document_id): \OpenAPI\Client\Model\feeds\FeedDocument
```

getFeedDocument

Returns the information required for retrieving a feed document's contents.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FeedsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$feed_document_id = 'feed_document_id_example'; // string | The identifier of the feed document.

try {
    $result = $apiInstance->getFeedDocument($feed_document_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FeedsApi->getFeedDocument: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **feed_document_id** | **string**| The identifier of the feed document. | |

### Return type

[**\OpenAPI\Client\Model\feeds\FeedDocument**](../Model/FeedDocument.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getFeeds()`

```php
getFeeds($feed_types, $marketplace_ids, $page_size, $processing_statuses, $created_since, $created_until, $next_token): \OpenAPI\Client\Model\feeds\GetFeedsResponse
```

getFeeds

Returns feed details for the feeds that match the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\FeedsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$feed_types = array('feed_types_example'); // string[] | A list of feed types used to filter feeds. When feedTypes is provided, the other filter parameters (processingStatuses, marketplaceIds, createdSince, createdUntil) and pageSize may also be provided. Either feedTypes or nextToken is required.
$marketplace_ids = array('marketplace_ids_example'); // string[] | A list of marketplace identifiers used to filter feeds. The feeds returned will match at least one of the marketplaces that you specify.
$page_size = 10; // int | The maximum number of feeds to return in a single call.
$processing_statuses = array('processing_statuses_example'); // string[] | A list of processing statuses used to filter feeds.
$created_since = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime | The earliest feed creation date and time for feeds included in the response, in ISO 8601 format. The default is 90 days ago. Feeds are retained for a maximum of 90 days.
$created_until = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime | The latest feed creation date and time for feeds included in the response, in ISO 8601 format. The default is now.
$next_token = 'next_token_example'; // string | A string token returned in the response to your previous request. nextToken is returned when the number of results exceeds the specified pageSize value. To get the next page of results, call the getFeeds operation and include this token as the only parameter. Specifying nextToken with any other parameters will cause the request to fail.

try {
    $result = $apiInstance->getFeeds($feed_types, $marketplace_ids, $page_size, $processing_statuses, $created_since, $created_until, $next_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FeedsApi->getFeeds: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **feed_types** | [**string[]**](../Model/string.md)| A list of feed types used to filter feeds. When feedTypes is provided, the other filter parameters (processingStatuses, marketplaceIds, createdSince, createdUntil) and pageSize may also be provided. Either feedTypes or nextToken is required. | [optional] |
| **marketplace_ids** | [**string[]**](../Model/string.md)| A list of marketplace identifiers used to filter feeds. The feeds returned will match at least one of the marketplaces that you specify. | [optional] |
| **page_size** | **int**| The maximum number of feeds to return in a single call. | [optional] [default to 10] |
| **processing_statuses** | [**string[]**](../Model/string.md)| A list of processing statuses used to filter feeds. | [optional] |
| **created_since** | **\DateTime**| The earliest feed creation date and time for feeds included in the response, in ISO 8601 format. The default is 90 days ago. Feeds are retained for a maximum of 90 days. | [optional] |
| **created_until** | **\DateTime**| The latest feed creation date and time for feeds included in the response, in ISO 8601 format. The default is now. | [optional] |
| **next_token** | **string**| A string token returned in the response to your previous request. nextToken is returned when the number of results exceeds the specified pageSize value. To get the next page of results, call the getFeeds operation and include this token as the only parameter. Specifying nextToken with any other parameters will cause the request to fail. | [optional] |

### Return type

[**\OpenAPI\Client\Model\feeds\GetFeedsResponse**](../Model/GetFeedsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
