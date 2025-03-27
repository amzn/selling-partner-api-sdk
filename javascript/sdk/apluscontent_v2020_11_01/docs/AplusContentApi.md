# SellingPartnerApiForAContentManagement.AplusContentApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContentDocument**](AplusContentApi.md#createContentDocument) | **POST** /aplus/2020-11-01/contentDocuments | 
[**getContentDocument**](AplusContentApi.md#getContentDocument) | **GET** /aplus/2020-11-01/contentDocuments/{contentReferenceKey} | 
[**listContentDocumentAsinRelations**](AplusContentApi.md#listContentDocumentAsinRelations) | **GET** /aplus/2020-11-01/contentDocuments/{contentReferenceKey}/asins | 
[**postContentDocumentApprovalSubmission**](AplusContentApi.md#postContentDocumentApprovalSubmission) | **POST** /aplus/2020-11-01/contentDocuments/{contentReferenceKey}/approvalSubmissions | 
[**postContentDocumentAsinRelations**](AplusContentApi.md#postContentDocumentAsinRelations) | **POST** /aplus/2020-11-01/contentDocuments/{contentReferenceKey}/asins | 
[**postContentDocumentSuspendSubmission**](AplusContentApi.md#postContentDocumentSuspendSubmission) | **POST** /aplus/2020-11-01/contentDocuments/{contentReferenceKey}/suspendSubmissions | 
[**searchContentDocuments**](AplusContentApi.md#searchContentDocuments) | **GET** /aplus/2020-11-01/contentDocuments | 
[**searchContentPublishRecords**](AplusContentApi.md#searchContentPublishRecords) | **GET** /aplus/2020-11-01/contentPublishRecords | 
[**updateContentDocument**](AplusContentApi.md#updateContentDocument) | **POST** /aplus/2020-11-01/contentDocuments/{contentReferenceKey} | 
[**validateContentDocumentAsinRelations**](AplusContentApi.md#validateContentDocumentAsinRelations) | **POST** /aplus/2020-11-01/contentAsinValidations | 



## createContentDocument

> PostContentDocumentResponse createContentDocument(marketplaceId, postContentDocumentRequest)



Creates a new A+ Content document.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForAContentManagement from 'selling_partner_api_for_a_content_management';

let apiInstance = new SellingPartnerApiForAContentManagement.AplusContentApi();
let marketplaceId = "marketplaceId_example"; // String | The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
let postContentDocumentRequest = new SellingPartnerApiForAContentManagement.PostContentDocumentRequest(); // PostContentDocumentRequest | The content document request details.
apiInstance.createContentDocument(marketplaceId, postContentDocumentRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceId** | **String**| The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). | 
 **postContentDocumentRequest** | [**PostContentDocumentRequest**](PostContentDocumentRequest.md)| The content document request details. | 

### Return type

[**PostContentDocumentResponse**](PostContentDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getContentDocument

> GetContentDocumentResponse getContentDocument(contentReferenceKey, marketplaceId, includedDataSet)



Returns an A+ Content document, if available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForAContentManagement from 'selling_partner_api_for_a_content_management';

let apiInstance = new SellingPartnerApiForAContentManagement.AplusContentApi();
let contentReferenceKey = "contentReferenceKey_example"; // String | The unique reference key for the A+ Content document. A content reference key cannot form a permalink and might change in the future. A content reference key is not guaranteed to match any A+ Content identifier.
let marketplaceId = "marketplaceId_example"; // String | The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
let includedDataSet = ["null"]; // [String] | The set of A+ Content data types to include in the response.
apiInstance.getContentDocument(contentReferenceKey, marketplaceId, includedDataSet).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentReferenceKey** | **String**| The unique reference key for the A+ Content document. A content reference key cannot form a permalink and might change in the future. A content reference key is not guaranteed to match any A+ Content identifier. | 
 **marketplaceId** | **String**| The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). | 
 **includedDataSet** | [**[String]**](String.md)| The set of A+ Content data types to include in the response. | 

### Return type

[**GetContentDocumentResponse**](GetContentDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listContentDocumentAsinRelations

> ListContentDocumentAsinRelationsResponse listContentDocumentAsinRelations(contentReferenceKey, marketplaceId, opts)



Returns a list of ASINs that are related to the specified A+ Content document, if available. If you don&#39;t include the &#x60;asinSet&#x60; parameter, this operation returns all ASINs related to the content document.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForAContentManagement from 'selling_partner_api_for_a_content_management';

let apiInstance = new SellingPartnerApiForAContentManagement.AplusContentApi();
let contentReferenceKey = "contentReferenceKey_example"; // String | The unique reference key for the A+ Content document. A content reference key cannot form a permalink and might change in the future. A content reference key is not guaranteed to match any A+ Content identifier.
let marketplaceId = "marketplaceId_example"; // String | The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
let opts = {
  'includedDataSet': ["null"], // [String] | The set of A+ Content data types to include in the response. If you don't include this parameter, the operation returns the related ASINs without metadata.
  'asinSet': ["null"], // [String] | The set of ASINs.
  'pageToken': "pageToken_example" // String | A token that you use to fetch a specific page when there are multiple pages of results.
};
apiInstance.listContentDocumentAsinRelations(contentReferenceKey, marketplaceId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentReferenceKey** | **String**| The unique reference key for the A+ Content document. A content reference key cannot form a permalink and might change in the future. A content reference key is not guaranteed to match any A+ Content identifier. | 
 **marketplaceId** | **String**| The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). | 
 **includedDataSet** | [**[String]**](String.md)| The set of A+ Content data types to include in the response. If you don&#39;t include this parameter, the operation returns the related ASINs without metadata. | [optional] 
 **asinSet** | [**[String]**](String.md)| The set of ASINs. | [optional] 
 **pageToken** | **String**| A token that you use to fetch a specific page when there are multiple pages of results. | [optional] 

### Return type

[**ListContentDocumentAsinRelationsResponse**](ListContentDocumentAsinRelationsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postContentDocumentApprovalSubmission

> PostContentDocumentApprovalSubmissionResponse postContentDocumentApprovalSubmission(contentReferenceKey, marketplaceId)



Submits an A+ Content document for review, approval, and publishing.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForAContentManagement from 'selling_partner_api_for_a_content_management';

let apiInstance = new SellingPartnerApiForAContentManagement.AplusContentApi();
let contentReferenceKey = "contentReferenceKey_example"; // String | The unique reference key for the A+ Content document. A content reference key cannot form a permalink and might change in the future. A content reference key is not guaranteed to match any A+ content identifier.
let marketplaceId = "marketplaceId_example"; // String | The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
apiInstance.postContentDocumentApprovalSubmission(contentReferenceKey, marketplaceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentReferenceKey** | **String**| The unique reference key for the A+ Content document. A content reference key cannot form a permalink and might change in the future. A content reference key is not guaranteed to match any A+ content identifier. | 
 **marketplaceId** | **String**| The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). | 

### Return type

[**PostContentDocumentApprovalSubmissionResponse**](PostContentDocumentApprovalSubmissionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postContentDocumentAsinRelations

> PostContentDocumentAsinRelationsResponse postContentDocumentAsinRelations(contentReferenceKey, marketplaceId, postContentDocumentAsinRelationsRequest)



Replaces all ASINs related to the specified A+ Content document, if available. This operation can add or remove ASINs, depending on the current set of related ASINs. Removing an ASIN will suspend the content document from that ASIN.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForAContentManagement from 'selling_partner_api_for_a_content_management';

let apiInstance = new SellingPartnerApiForAContentManagement.AplusContentApi();
let contentReferenceKey = "contentReferenceKey_example"; // String | The unique reference key for the A+ Content document. A content reference key cannot form a permalink and might change in the future. A content reference key is not guaranteed to match any A+ content identifier.
let marketplaceId = "marketplaceId_example"; // String | The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
let postContentDocumentAsinRelationsRequest = new SellingPartnerApiForAContentManagement.PostContentDocumentAsinRelationsRequest(); // PostContentDocumentAsinRelationsRequest | The request details for the content document ASIN relations.
apiInstance.postContentDocumentAsinRelations(contentReferenceKey, marketplaceId, postContentDocumentAsinRelationsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentReferenceKey** | **String**| The unique reference key for the A+ Content document. A content reference key cannot form a permalink and might change in the future. A content reference key is not guaranteed to match any A+ content identifier. | 
 **marketplaceId** | **String**| The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). | 
 **postContentDocumentAsinRelationsRequest** | [**PostContentDocumentAsinRelationsRequest**](PostContentDocumentAsinRelationsRequest.md)| The request details for the content document ASIN relations. | 

### Return type

[**PostContentDocumentAsinRelationsResponse**](PostContentDocumentAsinRelationsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postContentDocumentSuspendSubmission

> PostContentDocumentSuspendSubmissionResponse postContentDocumentSuspendSubmission(contentReferenceKey, marketplaceId)



Submits a request to suspend visible A+ Content. This doesn&#39;t delete the content document or the ASIN relations.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForAContentManagement from 'selling_partner_api_for_a_content_management';

let apiInstance = new SellingPartnerApiForAContentManagement.AplusContentApi();
let contentReferenceKey = "contentReferenceKey_example"; // String | The unique reference key for the A+ Content document. A content reference key cannot form a permalink and might change in the future. A content reference key is not guaranteed to match any A+ content identifier.
let marketplaceId = "marketplaceId_example"; // String | The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
apiInstance.postContentDocumentSuspendSubmission(contentReferenceKey, marketplaceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentReferenceKey** | **String**| The unique reference key for the A+ Content document. A content reference key cannot form a permalink and might change in the future. A content reference key is not guaranteed to match any A+ content identifier. | 
 **marketplaceId** | **String**| The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). | 

### Return type

[**PostContentDocumentSuspendSubmissionResponse**](PostContentDocumentSuspendSubmissionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchContentDocuments

> SearchContentDocumentsResponse searchContentDocuments(marketplaceId, opts)



Returns a list of all A+ Content documents, including metadata, that are assigned to a selling partner. To get the actual contents of the A+ Content documents, call the &#x60;getContentDocument&#x60; operation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForAContentManagement from 'selling_partner_api_for_a_content_management';

let apiInstance = new SellingPartnerApiForAContentManagement.AplusContentApi();
let marketplaceId = "marketplaceId_example"; // String | The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
let opts = {
  'pageToken': "pageToken_example" // String | A token that you use to fetch a specific page when there are multiple pages of results.
};
apiInstance.searchContentDocuments(marketplaceId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceId** | **String**| The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). | 
 **pageToken** | **String**| A token that you use to fetch a specific page when there are multiple pages of results. | [optional] 

### Return type

[**SearchContentDocumentsResponse**](SearchContentDocumentsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchContentPublishRecords

> SearchContentPublishRecordsResponse searchContentPublishRecords(marketplaceId, asin, opts)



Searches for A+ Content publishing records, if available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForAContentManagement from 'selling_partner_api_for_a_content_management';

let apiInstance = new SellingPartnerApiForAContentManagement.AplusContentApi();
let marketplaceId = "marketplaceId_example"; // String | The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
let asin = "asin_example"; // String | The Amazon Standard Identification Number (ASIN) is the unique identifier of a product within a marketplace.
let opts = {
  'pageToken': "pageToken_example" // String | A token that you use to fetch a specific page when there are multiple pages of results.
};
apiInstance.searchContentPublishRecords(marketplaceId, asin, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceId** | **String**| The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). | 
 **asin** | **String**| The Amazon Standard Identification Number (ASIN) is the unique identifier of a product within a marketplace. | 
 **pageToken** | **String**| A token that you use to fetch a specific page when there are multiple pages of results. | [optional] 

### Return type

[**SearchContentPublishRecordsResponse**](SearchContentPublishRecordsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateContentDocument

> PostContentDocumentResponse updateContentDocument(contentReferenceKey, marketplaceId, postContentDocumentRequest)



Updates an existing A+ Content document.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForAContentManagement from 'selling_partner_api_for_a_content_management';

let apiInstance = new SellingPartnerApiForAContentManagement.AplusContentApi();
let contentReferenceKey = "contentReferenceKey_example"; // String | The unique reference key for the A+ Content document. A content reference key cannot form a permalink and might change in the future. A content reference key is not guaranteed to match any A+ Content identifier.
let marketplaceId = "marketplaceId_example"; // String | The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
let postContentDocumentRequest = new SellingPartnerApiForAContentManagement.PostContentDocumentRequest(); // PostContentDocumentRequest | The content document request details.
apiInstance.updateContentDocument(contentReferenceKey, marketplaceId, postContentDocumentRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentReferenceKey** | **String**| The unique reference key for the A+ Content document. A content reference key cannot form a permalink and might change in the future. A content reference key is not guaranteed to match any A+ Content identifier. | 
 **marketplaceId** | **String**| The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). | 
 **postContentDocumentRequest** | [**PostContentDocumentRequest**](PostContentDocumentRequest.md)| The content document request details. | 

### Return type

[**PostContentDocumentResponse**](PostContentDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## validateContentDocumentAsinRelations

> ValidateContentDocumentAsinRelationsResponse validateContentDocumentAsinRelations(marketplaceId, postContentDocumentRequest, opts)



Checks if the A+ Content document is valid for use on a set of ASINs.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForAContentManagement from 'selling_partner_api_for_a_content_management';

let apiInstance = new SellingPartnerApiForAContentManagement.AplusContentApi();
let marketplaceId = "marketplaceId_example"; // String | The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
let postContentDocumentRequest = new SellingPartnerApiForAContentManagement.PostContentDocumentRequest(); // PostContentDocumentRequest | The content document request details.
let opts = {
  'asinSet': ["null"] // [String] | The set of ASINs.
};
apiInstance.validateContentDocumentAsinRelations(marketplaceId, postContentDocumentRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceId** | **String**| The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). | 
 **postContentDocumentRequest** | [**PostContentDocumentRequest**](PostContentDocumentRequest.md)| The content document request details. | 
 **asinSet** | [**[String]**](String.md)| The set of ASINs. | [optional] 

### Return type

[**ValidateContentDocumentAsinRelationsResponse**](ValidateContentDocumentAsinRelationsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

