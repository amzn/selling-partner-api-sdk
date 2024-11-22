# CatalogItemsApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCatalogItem**](CatalogItemsApi.md#getCatalogItem) | **GET** /catalog/2022-04-01/items/{asin} | getCatalogItem
[**searchCatalogItems**](CatalogItemsApi.md#searchCatalogItems) | **GET** /catalog/2022-04-01/items | searchCatalogItems

<a name="getCatalogItem"></a>
# **getCatalogItem**
> Item getCatalogItem(asin, marketplaceIds, includedData, locale)

getCatalogItem

Retrieves details for an item in the Amazon catalog.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to the [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.CatalogItemsApi;


CatalogItemsApi apiInstance = new CatalogItemsApi();
String asin = "asin_example"; // String | The Amazon Standard Identification Number (ASIN) of the item.
List<String> marketplaceIds = Arrays.asList("marketplaceIds_example"); // List<String> | A comma-delimited list of Amazon marketplace identifiers. Data sets in the response contain data only for the specified marketplaces.
List<String> includedData = Arrays.asList("includedData_example"); // List<String> | A comma-delimited list of data sets to include in the response. Default: `summaries`.
String locale = "locale_example"; // String | Locale for retrieving localized summaries. Defaults to the primary locale of the marketplace.
try {
    Item result = apiInstance.getCatalogItem(asin, marketplaceIds, includedData, locale);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CatalogItemsApi#getCatalogItem");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asin** | **String**| The Amazon Standard Identification Number (ASIN) of the item. |
 **marketplaceIds** | [**List&lt;String&gt;**](String.md)| A comma-delimited list of Amazon marketplace identifiers. Data sets in the response contain data only for the specified marketplaces. |
 **includedData** | [**List&lt;String&gt;**](String.md)| A comma-delimited list of data sets to include in the response. Default: &#x60;summaries&#x60;. | [optional] [enum: attributes, classifications, dimensions, identifiers, images, productTypes, relationships, salesRanks, summaries, vendorDetails]
 **locale** | **String**| Locale for retrieving localized summaries. Defaults to the primary locale of the marketplace. | [optional]

### Return type

[**Item**](Item.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchCatalogItems"></a>
# **searchCatalogItems**
> ItemSearchResults searchCatalogItems(marketplaceIds, identifiers, identifiersType, includedData, locale, sellerId, keywords, brandNames, classificationIds, pageSize, pageToken, keywordsLocale)

searchCatalogItems

Search for and return a list of Amazon catalog items and associated information either by identifier or by keywords.  **Usage Plans:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to the [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.CatalogItemsApi;


CatalogItemsApi apiInstance = new CatalogItemsApi();
List<String> marketplaceIds = Arrays.asList("marketplaceIds_example"); // List<String> | A comma-delimited list of Amazon marketplace identifiers for the request.
List<String> identifiers = Arrays.asList("identifiers_example"); // List<String> | A comma-delimited list of product identifiers to search the Amazon catalog for. **Note:** Cannot be used with `keywords`.
String identifiersType = "identifiersType_example"; // String | Type of product identifiers to search the Amazon catalog for. **Note:** Required when `identifiers` are provided.
List<String> includedData = Arrays.asList("includedData_example"); // List<String> | A comma-delimited list of data sets to include in the response. Default: `summaries`.
String locale = "locale_example"; // String | Locale for retrieving localized summaries. Defaults to the primary locale of the marketplace.
String sellerId = "sellerId_example"; // String | A selling partner identifier, such as a seller account or vendor code. **Note:** Required when `identifiersType` is `SKU`.
List<String> keywords = Arrays.asList("keywords_example"); // List<String> | A comma-delimited list of words to search the Amazon catalog for. **Note:** Cannot be used with `identifiers`.
List<String> brandNames = Arrays.asList("brandNames_example"); // List<String> | A comma-delimited list of brand names to limit the search for `keywords`-based queries. **Note:** Cannot be used with `identifiers`.
List<String> classificationIds = Arrays.asList("classificationIds_example"); // List<String> | A comma-delimited list of classification identifiers to limit the search for `keywords`-based queries. **Note:** Cannot be used with `identifiers`.
Integer pageSize = 10; // Integer | Number of results to be returned per page.
String pageToken = "pageToken_example"; // String | A token to fetch a certain page when there are multiple pages worth of results.
String keywordsLocale = "keywordsLocale_example"; // String | The language of the keywords provided for `keywords`-based queries. Defaults to the primary locale of the marketplace. **Note:** Cannot be used with `identifiers`.
try {
    ItemSearchResults result = apiInstance.searchCatalogItems(marketplaceIds, identifiers, identifiersType, includedData, locale, sellerId, keywords, brandNames, classificationIds, pageSize, pageToken, keywordsLocale);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CatalogItemsApi#searchCatalogItems");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceIds** | [**List&lt;String&gt;**](String.md)| A comma-delimited list of Amazon marketplace identifiers for the request. |
 **identifiers** | [**List&lt;String&gt;**](String.md)| A comma-delimited list of product identifiers to search the Amazon catalog for. **Note:** Cannot be used with &#x60;keywords&#x60;. | [optional]
 **identifiersType** | **String**| Type of product identifiers to search the Amazon catalog for. **Note:** Required when &#x60;identifiers&#x60; are provided. | [optional] [enum: ASIN, EAN, GTIN, ISBN, JAN, MINSAN, SKU, UPC]
 **includedData** | [**List&lt;String&gt;**](String.md)| A comma-delimited list of data sets to include in the response. Default: &#x60;summaries&#x60;. | [optional] [enum: attributes, classifications, dimensions, identifiers, images, productTypes, relationships, salesRanks, summaries, vendorDetails]
 **locale** | **String**| Locale for retrieving localized summaries. Defaults to the primary locale of the marketplace. | [optional]
 **sellerId** | **String**| A selling partner identifier, such as a seller account or vendor code. **Note:** Required when &#x60;identifiersType&#x60; is &#x60;SKU&#x60;. | [optional]
 **keywords** | [**List&lt;String&gt;**](String.md)| A comma-delimited list of words to search the Amazon catalog for. **Note:** Cannot be used with &#x60;identifiers&#x60;. | [optional]
 **brandNames** | [**List&lt;String&gt;**](String.md)| A comma-delimited list of brand names to limit the search for &#x60;keywords&#x60;-based queries. **Note:** Cannot be used with &#x60;identifiers&#x60;. | [optional]
 **classificationIds** | [**List&lt;String&gt;**](String.md)| A comma-delimited list of classification identifiers to limit the search for &#x60;keywords&#x60;-based queries. **Note:** Cannot be used with &#x60;identifiers&#x60;. | [optional]
 **pageSize** | **Integer**| Number of results to be returned per page. | [optional] [default to 10] [enum: ]
 **pageToken** | **String**| A token to fetch a certain page when there are multiple pages worth of results. | [optional]
 **keywordsLocale** | **String**| The language of the keywords provided for &#x60;keywords&#x60;-based queries. Defaults to the primary locale of the marketplace. **Note:** Cannot be used with &#x60;identifiers&#x60;. | [optional]

### Return type

[**ItemSearchResults**](ItemSearchResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

