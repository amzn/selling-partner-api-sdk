# software.amzn.spapi.Api.productTypeDefinitions.v2020_09_01.DefinitionsApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**GetDefinitionsProductType**](DefinitionsApi.md#getdefinitionsproducttype) | **GET** /definitions/2020-09-01/productTypes/{productType} |  |
| [**SearchDefinitionsProductTypes**](DefinitionsApi.md#searchdefinitionsproducttypes) | **GET** /definitions/2020-09-01/productTypes |  |

<a id="getdefinitionsproducttype"></a>
# **GetDefinitionsProductType**
> ProductTypeDefinition GetDefinitionsProductType (string productType, List<string> marketplaceIds, string? sellerId = null, string? productTypeVersion = null, string? requirements = null, string? requirementsEnforced = null, string? locale = null)



Retrieve an Amazon product type definition.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | - -- - | - -- - | - -- - | |Default| 5 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using software.amzn.spapi.Api.productTypeDefinitions.v2020_09_01;
using software.amzn.spapi.Client;
using software.amzn.spapi.Model.productTypeDefinitions.v2020_09_01;

namespace Example
{
    public class GetDefinitionsProductTypeExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://sellingpartnerapi-na.amazon.com";
            var apiInstance = new DefinitionsApi(config);
            var productType = LUGGAGE;  // string | The Amazon product type name.
            var marketplaceIds = new List<string>(); // List<string> | A comma-delimited list of Amazon marketplace identifiers for the request. Note: This parameter is limited to one marketplaceId at this time.
            var sellerId = "sellerId_example";  // string? | A selling partner identifier. When provided, seller-specific requirements and values are populated within the product type definition schema, such as brand names associated with the selling partner. (optional) 
            var productTypeVersion = LATEST;  // string? | The version of the Amazon product type to retrieve. Defaults to \"LATEST\",. Prerelease versions of product type definitions may be retrieved with \"RELEASE_CANDIDATE\". If no prerelease version is currently available, the \"LATEST\" live version will be provided. (optional)  (default to "LATEST")
            var requirements = LISTING;  // string? | The name of the requirements set to retrieve requirements for. (optional)  (default to LISTING)
            var requirementsEnforced = ENFORCED;  // string? | Identifies if the required attributes for a requirements set are enforced by the product type definition schema. Non-enforced requirements enable structural validation of individual attributes without all the required attributes being present (such as for partial updates). (optional)  (default to ENFORCED)
            var locale = DEFAULT;  // string? | Locale for retrieving display labels and other presentation details. Defaults to the default language of the first marketplace in the request. (optional)  (default to DEFAULT)

            try
            {
                ProductTypeDefinition result = apiInstance.GetDefinitionsProductType(productType, marketplaceIds, sellerId, productTypeVersion, requirements, requirementsEnforced, locale);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefinitionsApi.GetDefinitionsProductType: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetDefinitionsProductTypeWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<ProductTypeDefinition> response = apiInstance.GetDefinitionsProductTypeWithHttpInfo(productType, marketplaceIds, sellerId, productTypeVersion, requirements, requirementsEnforced, locale);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefinitionsApi.GetDefinitionsProductTypeWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **productType** | **string** | The Amazon product type name. |  |
| **marketplaceIds** | [**List&lt;string&gt;**](string.md) | A comma-delimited list of Amazon marketplace identifiers for the request. Note: This parameter is limited to one marketplaceId at this time. |  |
| **sellerId** | **string?** | A selling partner identifier. When provided, seller-specific requirements and values are populated within the product type definition schema, such as brand names associated with the selling partner. | [optional]  |
| **productTypeVersion** | **string?** | The version of the Amazon product type to retrieve. Defaults to \&quot;LATEST\&quot;,. Prerelease versions of product type definitions may be retrieved with \&quot;RELEASE_CANDIDATE\&quot;. If no prerelease version is currently available, the \&quot;LATEST\&quot; live version will be provided. | [optional] [default to &quot;LATEST&quot;] |
| **requirements** | **string?** | The name of the requirements set to retrieve requirements for. | [optional] [default to LISTING] |
| **requirementsEnforced** | **string?** | Identifies if the required attributes for a requirements set are enforced by the product type definition schema. Non-enforced requirements enable structural validation of individual attributes without all the required attributes being present (such as for partial updates). | [optional] [default to ENFORCED] |
| **locale** | **string?** | Locale for retrieving display labels and other presentation details. Defaults to the default language of the first marketplace in the request. | [optional] [default to DEFAULT] |

### Return type

[**ProductTypeDefinition**](ProductTypeDefinition.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully retrieved an Amazon product type definition. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **400** | Request has missing or invalid parameters and cannot be parsed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **403** | Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **404** | The resource specified does not exist. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **413** | The request size exceeded the maximum accepted size. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **415** | The request payload is in an unsupported format. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **429** | The frequency of requests was greater than allowed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **500** | An unexpected condition occurred that prevented the server from fulfilling the request. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **503** | Temporary overloading or maintenance of the server. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="searchdefinitionsproducttypes"></a>
# **SearchDefinitionsProductTypes**
> ProductTypeList SearchDefinitionsProductTypes (List<string> marketplaceIds, List<string>? keywords = null, string? itemName = null, string? locale = null, string? searchLocale = null)



Search for and return a list of Amazon product types that have definitions available.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | - -- - | - -- - | - -- - | |Default| 5 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using software.amzn.spapi.Api.productTypeDefinitions.v2020_09_01;
using software.amzn.spapi.Client;
using software.amzn.spapi.Model.productTypeDefinitions.v2020_09_01;

namespace Example
{
    public class SearchDefinitionsProductTypesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://sellingpartnerapi-na.amazon.com";
            var apiInstance = new DefinitionsApi(config);
            var marketplaceIds = new List<string>(); // List<string> | A comma-delimited list of Amazon marketplace identifiers for the request.
            var keywords = new List<string>?(); // List<string>? | A comma-delimited list of keywords to search product types. **Note:** Cannot be used with `itemName`. (optional) 
            var itemName = Running shoes;  // string? | The title of the ASIN to get the product type recommendation. **Note:** Cannot be used with `keywords`. (optional) 
            var locale = en_US;  // string? | The locale for the display names in the response. Defaults to the primary locale of the marketplace. (optional) 
            var searchLocale = en_US;  // string? | The locale used for the `keywords` and `itemName` parameters. Defaults to the primary locale of the marketplace. (optional) 

            try
            {
                ProductTypeList result = apiInstance.SearchDefinitionsProductTypes(marketplaceIds, keywords, itemName, locale, searchLocale);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefinitionsApi.SearchDefinitionsProductTypes: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SearchDefinitionsProductTypesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<ProductTypeList> response = apiInstance.SearchDefinitionsProductTypesWithHttpInfo(marketplaceIds, keywords, itemName, locale, searchLocale);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefinitionsApi.SearchDefinitionsProductTypesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **marketplaceIds** | [**List&lt;string&gt;**](string.md) | A comma-delimited list of Amazon marketplace identifiers for the request. |  |
| **keywords** | [**List&lt;string&gt;?**](string.md) | A comma-delimited list of keywords to search product types. **Note:** Cannot be used with &#x60;itemName&#x60;. | [optional]  |
| **itemName** | **string?** | The title of the ASIN to get the product type recommendation. **Note:** Cannot be used with &#x60;keywords&#x60;. | [optional]  |
| **locale** | **string?** | The locale for the display names in the response. Defaults to the primary locale of the marketplace. | [optional]  |
| **searchLocale** | **string?** | The locale used for the &#x60;keywords&#x60; and &#x60;itemName&#x60; parameters. Defaults to the primary locale of the marketplace. | [optional]  |

### Return type

[**ProductTypeList**](ProductTypeList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully retrieved a list of Amazon product types that have definitions available. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **400** | Request has missing or invalid parameters and cannot be parsed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **403** | Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **404** | The resource specified does not exist. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **413** | The request size exceeded the maximum accepted size. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **415** | The request payload is in an unsupported format. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **429** | The frequency of requests was greater than allowed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **500** | An unexpected condition occurred that prevented the server from fulfilling the request. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **503** | Temporary overloading or maintenance of the server. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

