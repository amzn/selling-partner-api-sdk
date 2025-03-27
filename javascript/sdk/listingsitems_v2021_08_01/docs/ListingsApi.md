# SellingPartnerApiForListingsItems.ListingsApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteListingsItem**](ListingsApi.md#deleteListingsItem) | **DELETE** /listings/2021-08-01/items/{sellerId}/{sku} | 
[**getListingsItem**](ListingsApi.md#getListingsItem) | **GET** /listings/2021-08-01/items/{sellerId}/{sku} | 
[**patchListingsItem**](ListingsApi.md#patchListingsItem) | **PATCH** /listings/2021-08-01/items/{sellerId}/{sku} | 
[**putListingsItem**](ListingsApi.md#putListingsItem) | **PUT** /listings/2021-08-01/items/{sellerId}/{sku} | 
[**searchListingsItems**](ListingsApi.md#searchListingsItems) | **GET** /listings/2021-08-01/items/{sellerId} | 



## deleteListingsItem

> ListingsItemSubmissionResponse deleteListingsItem(sellerId, sku, marketplaceIds, opts)



Delete a listings item for a selling partner.  **Note:** The parameters associated with this operation may contain special characters that must be encoded to successfully call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForListingsItems from 'selling_partner_api_for_listings_items';

let apiInstance = new SellingPartnerApiForListingsItems.ListingsApi();
let sellerId = "sellerId_example"; // String | A selling partner identifier, such as a merchant account or vendor code.
let sku = "sku_example"; // String | A selling partner provided identifier for an Amazon listing.
let marketplaceIds = ["null"]; // [String] | A comma-delimited list of Amazon marketplace identifiers for the request.
let opts = {
  'issueLocale': "en_US" // String | A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: `en_US`, `fr_CA`, `fr_FR`. Localized messages default to `en_US` when a localization is not available in the specified locale.
};
apiInstance.deleteListingsItem(sellerId, sku, marketplaceIds, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**| A selling partner identifier, such as a merchant account or vendor code. | 
 **sku** | **String**| A selling partner provided identifier for an Amazon listing. | 
 **marketplaceIds** | [**[String]**](String.md)| A comma-delimited list of Amazon marketplace identifiers for the request. | 
 **issueLocale** | **String**| A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: &#x60;en_US&#x60;, &#x60;fr_CA&#x60;, &#x60;fr_FR&#x60;. Localized messages default to &#x60;en_US&#x60; when a localization is not available in the specified locale. | [optional] 

### Return type

[**ListingsItemSubmissionResponse**](ListingsItemSubmissionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getListingsItem

> Item getListingsItem(sellerId, sku, marketplaceIds, opts)



Returns details about a listings item for a selling partner.  **Note:** The parameters associated with this operation may contain special characters that must be encoded to successfully call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForListingsItems from 'selling_partner_api_for_listings_items';

let apiInstance = new SellingPartnerApiForListingsItems.ListingsApi();
let sellerId = "sellerId_example"; // String | A selling partner identifier, such as a merchant account or vendor code.
let sku = "sku_example"; // String | A selling partner provided identifier for an Amazon listing.
let marketplaceIds = ["null"]; // [String] | A comma-delimited list of Amazon marketplace identifiers for the request.
let opts = {
  'issueLocale': "en_US", // String | A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: `en_US`, `fr_CA`, `fr_FR`. Localized messages default to `en_US` when a localization is not available in the specified locale.
  'includedData': ["null"] // [String] | A comma-delimited list of data sets to include in the response. Default: `summaries`.
};
apiInstance.getListingsItem(sellerId, sku, marketplaceIds, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**| A selling partner identifier, such as a merchant account or vendor code. | 
 **sku** | **String**| A selling partner provided identifier for an Amazon listing. | 
 **marketplaceIds** | [**[String]**](String.md)| A comma-delimited list of Amazon marketplace identifiers for the request. | 
 **issueLocale** | **String**| A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: &#x60;en_US&#x60;, &#x60;fr_CA&#x60;, &#x60;fr_FR&#x60;. Localized messages default to &#x60;en_US&#x60; when a localization is not available in the specified locale. | [optional] 
 **includedData** | [**[String]**](String.md)| A comma-delimited list of data sets to include in the response. Default: &#x60;summaries&#x60;. | [optional] 

### Return type

[**Item**](Item.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchListingsItem

> ListingsItemSubmissionResponse patchListingsItem(sellerId, sku, marketplaceIds, body, opts)



Partially update (patch) a listings item for a selling partner. Only top-level listings item attributes can be patched. Patching nested attributes is not supported.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput can receive higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API documentation.

### Example

```javascript
import SellingPartnerApiForListingsItems from 'selling_partner_api_for_listings_items';

let apiInstance = new SellingPartnerApiForListingsItems.ListingsApi();
let sellerId = "sellerId_example"; // String | A selling partner identifier, such as a merchant account or vendor code.
let sku = "sku_example"; // String | A selling partner provided identifier for an Amazon listing.
let marketplaceIds = ["null"]; // [String] | A comma-delimited list of Amazon marketplace identifiers for the request.
let body = new SellingPartnerApiForListingsItems.ListingsItemPatchRequest(); // ListingsItemPatchRequest | The request body schema for the `patchListingsItem` operation.
let opts = {
  'includedData': ["null"], // [String] | A comma-delimited list of data sets to include in the response. Default: `issues`.
  'mode': "VALIDATION_PREVIEW", // String | The mode of operation for the request.
  'issueLocale': "en_US" // String | A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: `en_US`, `fr_CA`, `fr_FR`. Localized messages default to `en_US` when a localization is not available in the specified locale.
};
apiInstance.patchListingsItem(sellerId, sku, marketplaceIds, body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**| A selling partner identifier, such as a merchant account or vendor code. | 
 **sku** | **String**| A selling partner provided identifier for an Amazon listing. | 
 **marketplaceIds** | [**[String]**](String.md)| A comma-delimited list of Amazon marketplace identifiers for the request. | 
 **body** | [**ListingsItemPatchRequest**](ListingsItemPatchRequest.md)| The request body schema for the &#x60;patchListingsItem&#x60; operation. | 
 **includedData** | [**[String]**](String.md)| A comma-delimited list of data sets to include in the response. Default: &#x60;issues&#x60;. | [optional] 
 **mode** | **String**| The mode of operation for the request. | [optional] 
 **issueLocale** | **String**| A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: &#x60;en_US&#x60;, &#x60;fr_CA&#x60;, &#x60;fr_FR&#x60;. Localized messages default to &#x60;en_US&#x60; when a localization is not available in the specified locale. | [optional] 

### Return type

[**ListingsItemSubmissionResponse**](ListingsItemSubmissionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putListingsItem

> ListingsItemSubmissionResponse putListingsItem(sellerId, sku, marketplaceIds, body, opts)



Creates or fully updates an existing listings item for a selling partner.  **Note:** This operation has a throttling rate of one request per second when &#x60;mode&#x60; is &#x60;VALIDATION_PREVIEW&#x60;.  **Note:** The parameters associated with this operation may contain special characters that must be encoded to successfully call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForListingsItems from 'selling_partner_api_for_listings_items';

let apiInstance = new SellingPartnerApiForListingsItems.ListingsApi();
let sellerId = "sellerId_example"; // String | A selling partner identifier, such as a merchant account or vendor code.
let sku = "sku_example"; // String | A selling partner provided identifier for an Amazon listing.
let marketplaceIds = ["null"]; // [String] | A comma-delimited list of Amazon marketplace identifiers for the request.
let body = new SellingPartnerApiForListingsItems.ListingsItemPutRequest(); // ListingsItemPutRequest | The request body schema for the `putListingsItem` operation.
let opts = {
  'includedData': ["null"], // [String] | A comma-delimited list of data sets to include in the response. Default: `issues`.
  'mode': "VALIDATION_PREVIEW", // String | The mode of operation for the request.
  'issueLocale': "en_US" // String | A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: `en_US`, `fr_CA`, `fr_FR`. Localized messages default to `en_US` when a localization is not available in the specified locale.
};
apiInstance.putListingsItem(sellerId, sku, marketplaceIds, body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**| A selling partner identifier, such as a merchant account or vendor code. | 
 **sku** | **String**| A selling partner provided identifier for an Amazon listing. | 
 **marketplaceIds** | [**[String]**](String.md)| A comma-delimited list of Amazon marketplace identifiers for the request. | 
 **body** | [**ListingsItemPutRequest**](ListingsItemPutRequest.md)| The request body schema for the &#x60;putListingsItem&#x60; operation. | 
 **includedData** | [**[String]**](String.md)| A comma-delimited list of data sets to include in the response. Default: &#x60;issues&#x60;. | [optional] 
 **mode** | **String**| The mode of operation for the request. | [optional] 
 **issueLocale** | **String**| A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: &#x60;en_US&#x60;, &#x60;fr_CA&#x60;, &#x60;fr_FR&#x60;. Localized messages default to &#x60;en_US&#x60; when a localization is not available in the specified locale. | [optional] 

### Return type

[**ListingsItemSubmissionResponse**](ListingsItemSubmissionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## searchListingsItems

> ItemSearchResults searchListingsItems(sellerId, marketplaceIds, opts)



Search for and return a list of selling partner listings items and their respective details.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that are applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForListingsItems from 'selling_partner_api_for_listings_items';

let apiInstance = new SellingPartnerApiForListingsItems.ListingsApi();
let sellerId = "sellerId_example"; // String | A selling partner identifier, such as a merchant account or vendor code.
let marketplaceIds = ["null"]; // [String] | A comma-delimited list of Amazon marketplace identifiers for the request.
let opts = {
  'issueLocale': "en_US", // String | A locale that is used to localize issues. When not provided, the default language code of the first marketplace is used. Examples: \"en_US\", \"fr_CA\", \"fr_FR\". When a localization is not available in the specified locale, localized messages default to \"en_US\".
  'includedData': ["null"], // [String] | A comma-delimited list of datasets that you want to include in the response. Default: `summaries`.
  'identifiers': ["null"], // [String] | A comma-delimited list of product identifiers that you can use to search for listings items.   **Note**:  1. This is required when you specify `identifiersType`. 2. You cannot use 'identifiers' if you specify `variationParentSku` or `packageHierarchySku`.
  'identifiersType': "SKU", // String | A type of product identifiers that you can use to search for listings items.   **Note**:  This is required when `identifiers` is provided.
  'variationParentSku': "GM-ZDPI-9B4E", // String | Filters results to include listing items that are variation children of the specified SKU.   **Note**: You cannot use `variationParentSku` if you include `identifiers` or `packageHierarchySku` in your request.
  'packageHierarchySku': "GM-ZDPI-9B4E", // String | Filter results to include listing items that contain or are contained by the specified SKU.   **Note**: You cannot use `packageHierarchySku` if you include `identifiers` or `variationParentSku` in your request.
  'createdAfter': new Date("2024-03-01T01:30:00.000Z"), // Date | A date-time that is used to filter listing items. The response includes listings items that were created at or after this time. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
  'createdBefore': new Date("2024-03-31T21:45:00.000Z"), // Date | A date-time that is used to filter listing items. The response includes listings items that were created at or before this time. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
  'lastUpdatedAfter': new Date("2024-05-05T23:45:00.000Z"), // Date | A date-time that is used to filter listing items. The response includes listings items that were last updated at or after this time. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
  'lastUpdatedBefore': new Date("2024-05-01T01:15:00.000Z"), // Date | A date-time that is used to filter listing items. The response includes listings items that were last updated at or before this time. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
  'withIssueSeverity': ["null"], // [String] | Filter results to include only listing items that have issues that match one or more of the specified severity levels.
  'withStatus': ["null"], // [String] | Filter results to include only listing items that have the specified status.
  'withoutStatus': ["null"], // [String] | Filter results to include only listing items that don't contain the specified statuses.
  'sortBy': "lastUpdatedDate", // String | An attribute by which to sort the returned listing items.
  'sortOrder': "DESC", // String | The order in which to sort the result items.
  'pageSize': 9, // Number | The number of results that you want to include on each page.
  'pageToken': "sdlkj234lkj234lksjdflkjwdflkjsfdlkj234234234234" // String | A token that you can use to fetch a specific page when there are multiple pages of results.
};
apiInstance.searchListingsItems(sellerId, marketplaceIds, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**| A selling partner identifier, such as a merchant account or vendor code. | 
 **marketplaceIds** | [**[String]**](String.md)| A comma-delimited list of Amazon marketplace identifiers for the request. | 
 **issueLocale** | **String**| A locale that is used to localize issues. When not provided, the default language code of the first marketplace is used. Examples: \&quot;en_US\&quot;, \&quot;fr_CA\&quot;, \&quot;fr_FR\&quot;. When a localization is not available in the specified locale, localized messages default to \&quot;en_US\&quot;. | [optional] 
 **includedData** | [**[String]**](String.md)| A comma-delimited list of datasets that you want to include in the response. Default: &#x60;summaries&#x60;. | [optional] 
 **identifiers** | [**[String]**](String.md)| A comma-delimited list of product identifiers that you can use to search for listings items.   **Note**:  1. This is required when you specify &#x60;identifiersType&#x60;. 2. You cannot use &#39;identifiers&#39; if you specify &#x60;variationParentSku&#x60; or &#x60;packageHierarchySku&#x60;. | [optional] 
 **identifiersType** | **String**| A type of product identifiers that you can use to search for listings items.   **Note**:  This is required when &#x60;identifiers&#x60; is provided. | [optional] 
 **variationParentSku** | **String**| Filters results to include listing items that are variation children of the specified SKU.   **Note**: You cannot use &#x60;variationParentSku&#x60; if you include &#x60;identifiers&#x60; or &#x60;packageHierarchySku&#x60; in your request. | [optional] 
 **packageHierarchySku** | **String**| Filter results to include listing items that contain or are contained by the specified SKU.   **Note**: You cannot use &#x60;packageHierarchySku&#x60; if you include &#x60;identifiers&#x60; or &#x60;variationParentSku&#x60; in your request. | [optional] 
 **createdAfter** | **Date**| A date-time that is used to filter listing items. The response includes listings items that were created at or after this time. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. | [optional] 
 **createdBefore** | **Date**| A date-time that is used to filter listing items. The response includes listings items that were created at or before this time. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. | [optional] 
 **lastUpdatedAfter** | **Date**| A date-time that is used to filter listing items. The response includes listings items that were last updated at or after this time. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. | [optional] 
 **lastUpdatedBefore** | **Date**| A date-time that is used to filter listing items. The response includes listings items that were last updated at or before this time. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. | [optional] 
 **withIssueSeverity** | [**[String]**](String.md)| Filter results to include only listing items that have issues that match one or more of the specified severity levels. | [optional] 
 **withStatus** | [**[String]**](String.md)| Filter results to include only listing items that have the specified status. | [optional] 
 **withoutStatus** | [**[String]**](String.md)| Filter results to include only listing items that don&#39;t contain the specified statuses. | [optional] 
 **sortBy** | **String**| An attribute by which to sort the returned listing items. | [optional] [default to &#39;lastUpdatedDate&#39;]
 **sortOrder** | **String**| The order in which to sort the result items. | [optional] [default to &#39;DESC&#39;]
 **pageSize** | **Number**| The number of results that you want to include on each page. | [optional] [default to 10]
 **pageToken** | **String**| A token that you can use to fetch a specific page when there are multiple pages of results. | [optional] 

### Return type

[**ItemSearchResults**](ItemSearchResults.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

