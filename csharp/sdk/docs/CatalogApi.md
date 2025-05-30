# software.amzn.spapi.Api.catalogItems.v2022_04_01.CatalogApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**GetCatalogItem**](CatalogApi.md#getcatalogitem) | **GET** /catalog/2022-04-01/items/{asin} |  |
| [**SearchCatalogItems**](CatalogApi.md#searchcatalogitems) | **GET** /catalog/2022-04-01/items |  |

<a id="getcatalogitem"></a>
# **GetCatalogItem**
> Item GetCatalogItem (string asin, List<string> marketplaceIds, List<string>? includedData = null, string? locale = null)



Retrieves details for an item in the Amazon catalog.  **Usage Plan:**  | Rate (requests per second) | Burst | | - -- - | - -- - | | 5 | 5 |  The `x-amzn-RateLimit-Limit` response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using software.amzn.spapi.Api.catalogItems.v2022_04_01;
using software.amzn.spapi.Client;
using software.amzn.spapi.Model.catalogItems.v2022_04_01;

namespace Example
{
    public class GetCatalogItemExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://sellingpartnerapi-na.amazon.com";
            var apiInstance = new CatalogApi(config);
            var asin = "asin_example";  // string | The Amazon Standard Identification Number (ASIN) of the item.
            var marketplaceIds = new List<string>(); // List<string> | A comma-delimited list of Amazon marketplace identifiers. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
            var includedData = new List<string>?(); // List<string>? | A comma-delimited list of datasets to include in the response. (optional) 
            var locale = en_US;  // string? | The locale for which you want to retrieve localized summaries. Defaults to the primary locale of the marketplace. (optional) 

            try
            {
                Item result = apiInstance.GetCatalogItem(asin, marketplaceIds, includedData, locale);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling CatalogApi.GetCatalogItem: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetCatalogItemWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<Item> response = apiInstance.GetCatalogItemWithHttpInfo(asin, marketplaceIds, includedData, locale);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling CatalogApi.GetCatalogItemWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **asin** | **string** | The Amazon Standard Identification Number (ASIN) of the item. |  |
| **marketplaceIds** | [**List&lt;string&gt;**](string.md) | A comma-delimited list of Amazon marketplace identifiers. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). |  |
| **includedData** | [**List&lt;string&gt;?**](string.md) | A comma-delimited list of datasets to include in the response. | [optional]  |
| **locale** | **string?** | The locale for which you want to retrieve localized summaries. Defaults to the primary locale of the marketplace. | [optional]  |

### Return type

[**Item**](Item.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **400** | Request has missing or invalid parameters and cannot be parsed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **403** | Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **404** | The resource specified does not exist. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **413** | The request size exceeded the maximum accepted size. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **415** | The request payload is in an unsupported format. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **429** | The frequency of requests was greater than allowed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **500** | An unexpected condition occurred that prevented the server from fulfilling the request. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **503** | Temporary overloading or maintenance of the server. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="searchcatalogitems"></a>
# **SearchCatalogItems**
> ItemSearchResults SearchCatalogItems (List<string> marketplaceIds, List<string>? identifiers = null, string? identifiersType = null, List<string>? includedData = null, string? locale = null, string? sellerId = null, List<string>? keywords = null, List<string>? brandNames = null, List<string>? classificationIds = null, int? pageSize = null, string? pageToken = null, string? keywordsLocale = null)



Search for a list of Amazon catalog items and item-related information. You can search by identifier or by keywords.  **Usage Plan:**  | Rate (requests per second) | Burst | | - -- - | - -- - | | 5 | 5 |  The `x-amzn-RateLimit-Limit` response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using software.amzn.spapi.Api.catalogItems.v2022_04_01;
using software.amzn.spapi.Client;
using software.amzn.spapi.Model.catalogItems.v2022_04_01;

namespace Example
{
    public class SearchCatalogItemsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://sellingpartnerapi-na.amazon.com";
            var apiInstance = new CatalogApi(config);
            var marketplaceIds = new List<string>(); // List<string> | A comma-delimited list of Amazon marketplace identifiers. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
            var identifiers = new List<string>?(); // List<string>? | A comma-delimited list of product identifiers that you can use to search the Amazon catalog. **Note:** You cannot include `identifiers` and `keywords` in the same request. (optional) 
            var identifiersType = ASIN;  // string? | The type of product identifiers that you can use to search the Amazon catalog. **Note:** `identifiersType` is required when `identifiers` is in the request. (optional) 
            var includedData = new List<string>?(); // List<string>? | A comma-delimited list of datasets to include in the response. (optional) 
            var locale = en_US;  // string? | The locale for which you want to retrieve localized summaries. Defaults to the primary locale of the marketplace. (optional) 
            var sellerId = "sellerId_example";  // string? | A selling partner identifier, such as a seller account or vendor code. **Note:** Required when `identifiersType` is `SKU`. (optional) 
            var keywords = new List<string>?(); // List<string>? | A comma-delimited list of keywords that you can use to search the Amazon catalog. **Note:** You cannot include `keywords` and `identifiers` in the same request. (optional) 
            var brandNames = new List<string>?(); // List<string>? | A comma-delimited list of brand names that you can use to limit the search in queries based on `keywords`. **Note:** Cannot be used with `identifiers`. (optional) 
            var classificationIds = new List<string>?(); // List<string>? | A comma-delimited list of classification identifiers that you can use to limit the search in queries based on `keywords`. **Note:** Cannot be used with `identifiers`. (optional) 
            var pageSize = 9;  // int? | The number of results to include on each page. (optional)  (default to 10)
            var pageToken = sdlkj234lkj234lksjdflkjwdflkjsfdlkj234234234234;  // string? | A token that you can use to fetch a specific page when there are multiple pages of results. (optional) 
            var keywordsLocale = en_US;  // string? | The language of the keywords that are included in queries based on `keywords`. Defaults to the primary locale of the marketplace. **Note:** Cannot be used with `identifiers`. (optional) 

            try
            {
                ItemSearchResults result = apiInstance.SearchCatalogItems(marketplaceIds, identifiers, identifiersType, includedData, locale, sellerId, keywords, brandNames, classificationIds, pageSize, pageToken, keywordsLocale);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling CatalogApi.SearchCatalogItems: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SearchCatalogItemsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<ItemSearchResults> response = apiInstance.SearchCatalogItemsWithHttpInfo(marketplaceIds, identifiers, identifiersType, includedData, locale, sellerId, keywords, brandNames, classificationIds, pageSize, pageToken, keywordsLocale);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling CatalogApi.SearchCatalogItemsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **marketplaceIds** | [**List&lt;string&gt;**](string.md) | A comma-delimited list of Amazon marketplace identifiers. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). |  |
| **identifiers** | [**List&lt;string&gt;?**](string.md) | A comma-delimited list of product identifiers that you can use to search the Amazon catalog. **Note:** You cannot include &#x60;identifiers&#x60; and &#x60;keywords&#x60; in the same request. | [optional]  |
| **identifiersType** | **string?** | The type of product identifiers that you can use to search the Amazon catalog. **Note:** &#x60;identifiersType&#x60; is required when &#x60;identifiers&#x60; is in the request. | [optional]  |
| **includedData** | [**List&lt;string&gt;?**](string.md) | A comma-delimited list of datasets to include in the response. | [optional]  |
| **locale** | **string?** | The locale for which you want to retrieve localized summaries. Defaults to the primary locale of the marketplace. | [optional]  |
| **sellerId** | **string?** | A selling partner identifier, such as a seller account or vendor code. **Note:** Required when &#x60;identifiersType&#x60; is &#x60;SKU&#x60;. | [optional]  |
| **keywords** | [**List&lt;string&gt;?**](string.md) | A comma-delimited list of keywords that you can use to search the Amazon catalog. **Note:** You cannot include &#x60;keywords&#x60; and &#x60;identifiers&#x60; in the same request. | [optional]  |
| **brandNames** | [**List&lt;string&gt;?**](string.md) | A comma-delimited list of brand names that you can use to limit the search in queries based on &#x60;keywords&#x60;. **Note:** Cannot be used with &#x60;identifiers&#x60;. | [optional]  |
| **classificationIds** | [**List&lt;string&gt;?**](string.md) | A comma-delimited list of classification identifiers that you can use to limit the search in queries based on &#x60;keywords&#x60;. **Note:** Cannot be used with &#x60;identifiers&#x60;. | [optional]  |
| **pageSize** | **int?** | The number of results to include on each page. | [optional] [default to 10] |
| **pageToken** | **string?** | A token that you can use to fetch a specific page when there are multiple pages of results. | [optional]  |
| **keywordsLocale** | **string?** | The language of the keywords that are included in queries based on &#x60;keywords&#x60;. Defaults to the primary locale of the marketplace. **Note:** Cannot be used with &#x60;identifiers&#x60;. | [optional]  |

### Return type

[**ItemSearchResults**](ItemSearchResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **400** | Request has missing or invalid parameters and cannot be parsed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **403** | Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **404** | The resource specified does not exist. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **413** | The request size exceeded the maximum accepted size. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **415** | The request payload is in an unsupported format. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **429** | The frequency of requests was greater than allowed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **500** | An unexpected condition occurred that prevented the server from fulfilling the request. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **503** | Temporary overloading or maintenance of the server. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

