# OpenAPI\Client\UploadsApi

All URIs are relative to https://sellingpartnerapi-na.amazon.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createUploadDestinationForResource()**](UploadsApi.md#createUploadDestinationForResource) | **POST** /uploads/2020-11-01/uploadDestinations/{resource} |  |


## `createUploadDestinationForResource()`

```php
createUploadDestinationForResource($marketplace_ids, $content_md5, $resource, $content_type): \OpenAPI\Client\Model\uploads\CreateUploadDestinationResponse
```



Creates an upload destination, returning the information required to upload a file to the destination and to programmatically access the file.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\UploadsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$marketplace_ids = array('marketplace_ids_example'); // string[] | A list of marketplace identifiers. This specifies the marketplaces where the upload will be available. Only one marketplace can be specified.
$content_md5 = 'content_md5_example'; // string | An MD5 hash of the content to be submitted to the upload destination. This value is used to determine if the data has been corrupted or tampered with during transit.
$resource = 'resource_example'; // string | The resource for the upload destination that you are creating. For example, if you are creating an upload destination for the createLegalDisclosure operation of the Messaging API, the `{resource}` would be `/messaging/v1/orders/{amazonOrderId}/messages/legalDisclosure`, and the entire path would be `/uploads/2020-11-01/uploadDestinations/messaging/v1/orders/{amazonOrderId}/messages/legalDisclosure`. If you are creating an upload destination for an Aplus content document, the `{resource}` would be `aplus/2020-11-01/contentDocuments` and the path would be `/uploads/v1/uploadDestinations/aplus/2020-11-01/contentDocuments`.
$content_type = 'content_type_example'; // string | The content type of the file to be uploaded.

try {
    $result = $apiInstance->createUploadDestinationForResource($marketplace_ids, $content_md5, $resource, $content_type);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UploadsApi->createUploadDestinationForResource: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **marketplace_ids** | [**string[]**](../Model/string.md)| A list of marketplace identifiers. This specifies the marketplaces where the upload will be available. Only one marketplace can be specified. | |
| **content_md5** | **string**| An MD5 hash of the content to be submitted to the upload destination. This value is used to determine if the data has been corrupted or tampered with during transit. | |
| **resource** | **string**| The resource for the upload destination that you are creating. For example, if you are creating an upload destination for the createLegalDisclosure operation of the Messaging API, the &#x60;{resource}&#x60; would be &#x60;/messaging/v1/orders/{amazonOrderId}/messages/legalDisclosure&#x60;, and the entire path would be &#x60;/uploads/2020-11-01/uploadDestinations/messaging/v1/orders/{amazonOrderId}/messages/legalDisclosure&#x60;. If you are creating an upload destination for an Aplus content document, the &#x60;{resource}&#x60; would be &#x60;aplus/2020-11-01/contentDocuments&#x60; and the path would be &#x60;/uploads/v1/uploadDestinations/aplus/2020-11-01/contentDocuments&#x60;. | |
| **content_type** | **string**| The content type of the file to be uploaded. | [optional] |

### Return type

[**\OpenAPI\Client\Model\uploads\CreateUploadDestinationResponse**](../Model/CreateUploadDestinationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
