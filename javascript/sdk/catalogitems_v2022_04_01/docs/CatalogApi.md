# SellingPartnerApiForCatalogItems.CatalogApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCatalogItem**](CatalogApi.md#getCatalogItem) | **GET** /catalog/2022-04-01/items/{asin} | 
[**searchCatalogItems**](CatalogApi.md#searchCatalogItems) | **GET** /catalog/2022-04-01/items | 



## getCatalogItem

> Item getCatalogItem(asin, marketplaceIds, opts)



Retrieves details for an item in the Amazon catalog.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForCatalogItems from 'selling_partner_api_for_catalog_items';

let apiInstance = new SellingPartnerApiForCatalogItems.CatalogApi();
let asin = "asin_example"; // String | The Amazon Standard Identification Number (ASIN) of the item.
let marketplaceIds = ["null"]; // [String] | A comma-delimited list of Amazon marketplace identifiers. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
let opts = {
  'includedData': ["null"], // [String] | A comma-delimited list of datasets to include in the response.
  'locale': "en_US" // String | The locale for which you want to retrieve localized summaries. Defaults to the primary locale of the marketplace.
};
apiInstance.getCatalogItem(asin, marketplaceIds, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asin** | **String**| The Amazon Standard Identification Number (ASIN) of the item. | 
 **marketplaceIds** | [**[String]**](String.md)| A comma-delimited list of Amazon marketplace identifiers. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). | 
 **includedData** | [**[String]**](String.md)| A comma-delimited list of datasets to include in the response. | [optional] 
 **locale** | **String**| The locale for which you want to retrieve localized summaries. Defaults to the primary locale of the marketplace. | [optional] 

### Return type

[**Item**](Item.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchCatalogItems

> ItemSearchResults searchCatalogItems(marketplaceIds, opts)



Search for a list of Amazon catalog items and item-related information. You can search by identifier or by keywords.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForCatalogItems from 'selling_partner_api_for_catalog_items';

let apiInstance = new SellingPartnerApiForCatalogItems.CatalogApi();
let marketplaceIds = ["null"]; // [String] | A comma-delimited list of Amazon marketplace identifiers. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
let opts = {
  'identifiers': ["null"], // [String] | A comma-delimited list of product identifiers that you can use to search the Amazon catalog. **Note:** You cannot include `identifiers` and `keywords` in the same request.
  'identifiersType': "ASIN", // String | The type of product identifiers that you can use to search the Amazon catalog. **Note:** `identifiersType` is required when `identifiers` is in the request.
  'includedData': ["null"], // [String] | A comma-delimited list of datasets to include in the response.
  'locale': "en_US", // String | The locale for which you want to retrieve localized summaries. Defaults to the primary locale of the marketplace.
  'sellerId': "sellerId_example", // String | A selling partner identifier, such as a seller account or vendor code. **Note:** Required when `identifiersType` is `SKU`.
  'keywords': ["null"], // [String] | A comma-delimited list of keywords that you can use to search the Amazon catalog. **Note:** You cannot include `keywords` and `identifiers` in the same request.
  'brandNames': ["null"], // [String] | A comma-delimited list of brand names that you can use to limit the search in queries based on `keywords`. **Note:** Cannot be used with `identifiers`.
  'classificationIds': ["null"], // [String] | A comma-delimited list of classification identifiers that you can use to limit the search in queries based on `keywords`. **Note:** Cannot be used with `identifiers`.
  'pageSize': 9, // Number | The number of results to include on each page.
  'pageToken': "sdlkj234lkj234lksjdflkjwdflkjsfdlkj234234234234", // String | A token that you can use to fetch a specific page when there are multiple pages of results.
  'keywordsLocale': "en_US" // String | The language of the keywords that are included in queries based on `keywords`. Defaults to the primary locale of the marketplace. **Note:** Cannot be used with `identifiers`.
};
apiInstance.searchCatalogItems(marketplaceIds, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceIds** | [**[String]**](String.md)| A comma-delimited list of Amazon marketplace identifiers. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). | 
 **identifiers** | [**[String]**](String.md)| A comma-delimited list of product identifiers that you can use to search the Amazon catalog. **Note:** You cannot include &#x60;identifiers&#x60; and &#x60;keywords&#x60; in the same request. | [optional] 
 **identifiersType** | **String**| The type of product identifiers that you can use to search the Amazon catalog. **Note:** &#x60;identifiersType&#x60; is required when &#x60;identifiers&#x60; is in the request. | [optional] 
 **includedData** | [**[String]**](String.md)| A comma-delimited list of datasets to include in the response. | [optional] 
 **locale** | **String**| The locale for which you want to retrieve localized summaries. Defaults to the primary locale of the marketplace. | [optional] 
 **sellerId** | **String**| A selling partner identifier, such as a seller account or vendor code. **Note:** Required when &#x60;identifiersType&#x60; is &#x60;SKU&#x60;. | [optional] 
 **keywords** | [**[String]**](String.md)| A comma-delimited list of keywords that you can use to search the Amazon catalog. **Note:** You cannot include &#x60;keywords&#x60; and &#x60;identifiers&#x60; in the same request. | [optional] 
 **brandNames** | [**[String]**](String.md)| A comma-delimited list of brand names that you can use to limit the search in queries based on &#x60;keywords&#x60;. **Note:** Cannot be used with &#x60;identifiers&#x60;. | [optional] 
 **classificationIds** | [**[String]**](String.md)| A comma-delimited list of classification identifiers that you can use to limit the search in queries based on &#x60;keywords&#x60;. **Note:** Cannot be used with &#x60;identifiers&#x60;. | [optional] 
 **pageSize** | **Number**| The number of results to include on each page. | [optional] [default to 10]
 **pageToken** | **String**| A token that you can use to fetch a specific page when there are multiple pages of results. | [optional] 
 **keywordsLocale** | **String**| The language of the keywords that are included in queries based on &#x60;keywords&#x60;. Defaults to the primary locale of the marketplace. **Note:** Cannot be used with &#x60;identifiers&#x60;. | [optional] 

### Return type

[**ItemSearchResults**](ItemSearchResults.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

