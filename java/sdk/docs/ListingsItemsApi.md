# ListingsItemsApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteListingsItem**](ListingsItemsApi.md#deleteListingsItem) | **DELETE** /listings/2021-08-01/items/{sellerId}/{sku} | deleteListingsItem
[**getListingsItem**](ListingsItemsApi.md#getListingsItem) | **GET** /listings/2021-08-01/items/{sellerId}/{sku} | getListingsItem
[**patchListingsItem**](ListingsItemsApi.md#patchListingsItem) | **PATCH** /listings/2021-08-01/items/{sellerId}/{sku} | patchListingsItem
[**putListingsItem**](ListingsItemsApi.md#putListingsItem) | **PUT** /listings/2021-08-01/items/{sellerId}/{sku} | putListingsItem

<a name="deleteListingsItem"></a>
# **deleteListingsItem**
> ListingsItemSubmissionResponse deleteListingsItem(sellerId, sku, marketplaceIds, issueLocale)

deleteListingsItem

Delete a listings item for a selling partner.  **Note:** The parameters associated with this operation may contain special characters that must be encoded to successfully call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.ListingsItemsApi;


ListingsItemsApi apiInstance = new ListingsItemsApi();
String sellerId = "sellerId_example"; // String | A selling partner identifier, such as a merchant account or vendor code.
String sku = "sku_example"; // String | A selling partner provided identifier for an Amazon listing.
List<String> marketplaceIds = Arrays.asList("marketplaceIds_example"); // List<String> | A comma-delimited list of Amazon marketplace identifiers for the request.
String issueLocale = "issueLocale_example"; // String | A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: `en_US`, `fr_CA`, `fr_FR`. Localized messages default to `en_US` when a localization is not available in the specified locale.
try {
    ListingsItemSubmissionResponse result = apiInstance.deleteListingsItem(sellerId, sku, marketplaceIds, issueLocale);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ListingsItemsApi#deleteListingsItem");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**| A selling partner identifier, such as a merchant account or vendor code. |
 **sku** | **String**| A selling partner provided identifier for an Amazon listing. |
 **marketplaceIds** | [**List&lt;String&gt;**](String.md)| A comma-delimited list of Amazon marketplace identifiers for the request. |
 **issueLocale** | **String**| A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: &#x60;en_US&#x60;, &#x60;fr_CA&#x60;, &#x60;fr_FR&#x60;. Localized messages default to &#x60;en_US&#x60; when a localization is not available in the specified locale. | [optional]

### Return type

[**ListingsItemSubmissionResponse**](ListingsItemSubmissionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getListingsItem"></a>
# **getListingsItem**
> Item getListingsItem(sellerId, sku, marketplaceIds, issueLocale, includedData)

getListingsItem

Returns details about a listings item for a selling partner.  **Note:** The parameters associated with this operation may contain special characters that must be encoded to successfully call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.ListingsItemsApi;


ListingsItemsApi apiInstance = new ListingsItemsApi();
String sellerId = "sellerId_example"; // String | A selling partner identifier, such as a merchant account or vendor code.
String sku = "sku_example"; // String | A selling partner provided identifier for an Amazon listing.
List<String> marketplaceIds = Arrays.asList("marketplaceIds_example"); // List<String> | A comma-delimited list of Amazon marketplace identifiers for the request.
String issueLocale = "issueLocale_example"; // String | A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: `en_US`, `fr_CA`, `fr_FR`. Localized messages default to `en_US` when a localization is not available in the specified locale.
List<String> includedData = Arrays.asList("includedData_example"); // List<String> | A comma-delimited list of data sets to include in the response. Default: `summaries`.
try {
    Item result = apiInstance.getListingsItem(sellerId, sku, marketplaceIds, issueLocale, includedData);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ListingsItemsApi#getListingsItem");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**| A selling partner identifier, such as a merchant account or vendor code. |
 **sku** | **String**| A selling partner provided identifier for an Amazon listing. |
 **marketplaceIds** | [**List&lt;String&gt;**](String.md)| A comma-delimited list of Amazon marketplace identifiers for the request. |
 **issueLocale** | **String**| A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: &#x60;en_US&#x60;, &#x60;fr_CA&#x60;, &#x60;fr_FR&#x60;. Localized messages default to &#x60;en_US&#x60; when a localization is not available in the specified locale. | [optional]
 **includedData** | [**List&lt;String&gt;**](String.md)| A comma-delimited list of data sets to include in the response. Default: &#x60;summaries&#x60;. | [optional] [enum: summaries, attributes, issues, offers, fulfillmentAvailability, procurement]

### Return type

[**Item**](Item.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchListingsItem"></a>
# **patchListingsItem**
> ListingsItemSubmissionResponse patchListingsItem(body, marketplaceIds, sellerId, sku, includedData, mode, issueLocale)

patchListingsItem

Partially update (patch) a listings item for a selling partner. Only top-level listings item attributes can be patched. Patching nested attributes is not supported.  **Note:** This operation has a throttling rate of one request per second when &#x60;mode&#x60; is &#x60;VALIDATION_PREVIEW&#x60;.  **Note:** The parameters associated with this operation may contain special characters that must be encoded to successfully call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.ListingsItemsApi;


ListingsItemsApi apiInstance = new ListingsItemsApi();
ListingsItemPatchRequest body = new ListingsItemPatchRequest(); // ListingsItemPatchRequest | The request body schema for the `patchListingsItem` operation.
List<String> marketplaceIds = Arrays.asList("marketplaceIds_example"); // List<String> | A comma-delimited list of Amazon marketplace identifiers for the request.
String sellerId = "sellerId_example"; // String | A selling partner identifier, such as a merchant account or vendor code.
String sku = "sku_example"; // String | A selling partner provided identifier for an Amazon listing.
List<String> includedData = Arrays.asList("includedData_example"); // List<String> | A comma-delimited list of data sets to include in the response. Default: `issues`.
String mode = "mode_example"; // String | The mode of operation for the request.
String issueLocale = "issueLocale_example"; // String | A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: `en_US`, `fr_CA`, `fr_FR`. Localized messages default to `en_US` when a localization is not available in the specified locale.
try {
    ListingsItemSubmissionResponse result = apiInstance.patchListingsItem(body, marketplaceIds, sellerId, sku, includedData, mode, issueLocale);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ListingsItemsApi#patchListingsItem");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ListingsItemPatchRequest**](ListingsItemPatchRequest.md)| The request body schema for the &#x60;patchListingsItem&#x60; operation. |
 **marketplaceIds** | [**List&lt;String&gt;**](String.md)| A comma-delimited list of Amazon marketplace identifiers for the request. |
 **sellerId** | **String**| A selling partner identifier, such as a merchant account or vendor code. |
 **sku** | **String**| A selling partner provided identifier for an Amazon listing. |
 **includedData** | [**List&lt;String&gt;**](String.md)| A comma-delimited list of data sets to include in the response. Default: &#x60;issues&#x60;. | [optional] [enum: identifiers, issues]
 **mode** | **String**| The mode of operation for the request. | [optional] [enum: VALIDATION_PREVIEW]
 **issueLocale** | **String**| A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: &#x60;en_US&#x60;, &#x60;fr_CA&#x60;, &#x60;fr_FR&#x60;. Localized messages default to &#x60;en_US&#x60; when a localization is not available in the specified locale. | [optional]

### Return type

[**ListingsItemSubmissionResponse**](ListingsItemSubmissionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putListingsItem"></a>
# **putListingsItem**
> ListingsItemSubmissionResponse putListingsItem(body, marketplaceIds, sellerId, sku, includedData, mode, issueLocale)

putListingsItem

Creates or fully updates an existing listings item for a selling partner.  **Note:** This operation has a throttling rate of one request per second when &#x60;mode&#x60; is &#x60;VALIDATION_PREVIEW&#x60;.  **Note:** The parameters associated with this operation may contain special characters that must be encoded to successfully call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.ListingsItemsApi;


ListingsItemsApi apiInstance = new ListingsItemsApi();
ListingsItemPutRequest body = new ListingsItemPutRequest(); // ListingsItemPutRequest | The request body schema for the `putListingsItem` operation.
List<String> marketplaceIds = Arrays.asList("marketplaceIds_example"); // List<String> | A comma-delimited list of Amazon marketplace identifiers for the request.
String sellerId = "sellerId_example"; // String | A selling partner identifier, such as a merchant account or vendor code.
String sku = "sku_example"; // String | A selling partner provided identifier for an Amazon listing.
List<String> includedData = Arrays.asList("includedData_example"); // List<String> | A comma-delimited list of data sets to include in the response. Default: `issues`.
String mode = "mode_example"; // String | The mode of operation for the request.
String issueLocale = "issueLocale_example"; // String | A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: `en_US`, `fr_CA`, `fr_FR`. Localized messages default to `en_US` when a localization is not available in the specified locale.
try {
    ListingsItemSubmissionResponse result = apiInstance.putListingsItem(body, marketplaceIds, sellerId, sku, includedData, mode, issueLocale);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ListingsItemsApi#putListingsItem");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ListingsItemPutRequest**](ListingsItemPutRequest.md)| The request body schema for the &#x60;putListingsItem&#x60; operation. |
 **marketplaceIds** | [**List&lt;String&gt;**](String.md)| A comma-delimited list of Amazon marketplace identifiers for the request. |
 **sellerId** | **String**| A selling partner identifier, such as a merchant account or vendor code. |
 **sku** | **String**| A selling partner provided identifier for an Amazon listing. |
 **includedData** | [**List&lt;String&gt;**](String.md)| A comma-delimited list of data sets to include in the response. Default: &#x60;issues&#x60;. | [optional] [enum: identifiers, issues]
 **mode** | **String**| The mode of operation for the request. | [optional] [enum: VALIDATION_PREVIEW]
 **issueLocale** | **String**| A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: &#x60;en_US&#x60;, &#x60;fr_CA&#x60;, &#x60;fr_FR&#x60;. Localized messages default to &#x60;en_US&#x60; when a localization is not available in the specified locale. | [optional]

### Return type

[**ListingsItemSubmissionResponse**](ListingsItemSubmissionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

