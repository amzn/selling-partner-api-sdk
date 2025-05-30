# software.amzn.spapi.Api.fba.inventory.v1.FbaInventoryApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**AddInventory**](FbaInventoryApi.md#addinventory) | **POST** /fba/inventory/v1/items/inventory |  |
| [**CreateInventoryItem**](FbaInventoryApi.md#createinventoryitem) | **POST** /fba/inventory/v1/items |  |
| [**DeleteInventoryItem**](FbaInventoryApi.md#deleteinventoryitem) | **DELETE** /fba/inventory/v1/items/{sellerSku} |  |
| [**GetInventorySummaries**](FbaInventoryApi.md#getinventorysummaries) | **GET** /fba/inventory/v1/summaries |  |

<a id="addinventory"></a>
# **AddInventory**
> AddInventoryResponse AddInventory (string xAmznIdempotencyToken, AddInventoryRequest addInventoryRequestBody)



Requests that Amazon add items to the Sandbox Inventory with desired amount of quantity in the sandbox environment. This is a sandbox-only operation and must be directed to a sandbox endpoint. Refer to [Selling Partner API sandbox](https://developer-docs.amazon.com/sp-api/docs/the-selling-partner-api-sandbox) for more information.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using software.amzn.spapi.Api.fba.inventory.v1;
using software.amzn.spapi.Client;
using software.amzn.spapi.Model.fba.inventory.v1;

namespace Example
{
    public class AddInventoryExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://sellingpartnerapi-na.amazon.com";
            var apiInstance = new FbaInventoryApi(config);
            var xAmznIdempotencyToken = "xAmznIdempotencyToken_example";  // string | A unique token/requestId provided with each call to ensure idempotency.
            var addInventoryRequestBody = new AddInventoryRequest(); // AddInventoryRequest | List of items to add to Sandbox inventory.

            try
            {
                AddInventoryResponse result = apiInstance.AddInventory(xAmznIdempotencyToken, addInventoryRequestBody);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FbaInventoryApi.AddInventory: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the AddInventoryWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<AddInventoryResponse> response = apiInstance.AddInventoryWithHttpInfo(xAmznIdempotencyToken, addInventoryRequestBody);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FbaInventoryApi.AddInventoryWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **xAmznIdempotencyToken** | **string** | A unique token/requestId provided with each call to ensure idempotency. |  |
| **addInventoryRequestBody** | [**AddInventoryRequest**](AddInventoryRequest.md) | List of items to add to Sandbox inventory. |  |

### Return type

[**AddInventoryResponse**](AddInventoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **400** | Request has missing or invalid parameters and cannot be parsed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **403** | Indicates access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, Invalid Signature or Resource Not Found. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **404** | The specified resource does not exist. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **429** | The frequency of requests was greater than allowed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **500** | An unexpected condition occurred that prevented the server from fulfilling the request. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **503** | Temporary overloading or maintenance of the server. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createinventoryitem"></a>
# **CreateInventoryItem**
> CreateInventoryItemResponse CreateInventoryItem (CreateInventoryItemRequest createInventoryItemRequestBody)



Requests that Amazon create product-details in the Sandbox Inventory in the sandbox environment. This is a sandbox-only operation and must be directed to a sandbox endpoint. Refer to [Selling Partner API sandbox](https://developer-docs.amazon.com/sp-api/docs/the-selling-partner-api-sandbox) for more information.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using software.amzn.spapi.Api.fba.inventory.v1;
using software.amzn.spapi.Client;
using software.amzn.spapi.Model.fba.inventory.v1;

namespace Example
{
    public class CreateInventoryItemExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://sellingpartnerapi-na.amazon.com";
            var apiInstance = new FbaInventoryApi(config);
            var createInventoryItemRequestBody = new CreateInventoryItemRequest(); // CreateInventoryItemRequest | CreateInventoryItem Request Body Parameter.

            try
            {
                CreateInventoryItemResponse result = apiInstance.CreateInventoryItem(createInventoryItemRequestBody);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FbaInventoryApi.CreateInventoryItem: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateInventoryItemWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<CreateInventoryItemResponse> response = apiInstance.CreateInventoryItemWithHttpInfo(createInventoryItemRequestBody);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FbaInventoryApi.CreateInventoryItemWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createInventoryItemRequestBody** | [**CreateInventoryItemRequest**](CreateInventoryItemRequest.md) | CreateInventoryItem Request Body Parameter. |  |

### Return type

[**CreateInventoryItemResponse**](CreateInventoryItemResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **400** | Request has missing or invalid parameters and cannot be parsed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **403** | Indicates access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, Invalid Signature or Resource Not Found. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **404** | The specified resource does not exist. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **429** | The frequency of requests was greater than allowed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **500** | An unexpected condition occurred that prevented the server from fulfilling the request. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **503** | Temporary overloading or maintenance of the server. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deleteinventoryitem"></a>
# **DeleteInventoryItem**
> DeleteInventoryItemResponse DeleteInventoryItem (string sellerSku, string marketplaceId)



Requests that Amazon Deletes an item from the Sandbox Inventory in the sandbox environment. This is a sandbox-only operation and must be directed to a sandbox endpoint. Refer to [Selling Partner API sandbox](https://developer-docs.amazon.com/sp-api/docs/the-selling-partner-api-sandbox) for more information.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using software.amzn.spapi.Api.fba.inventory.v1;
using software.amzn.spapi.Client;
using software.amzn.spapi.Model.fba.inventory.v1;

namespace Example
{
    public class DeleteInventoryItemExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://sellingpartnerapi-na.amazon.com";
            var apiInstance = new FbaInventoryApi(config);
            var sellerSku = "sellerSku_example";  // string | A single seller SKU used for querying the specified seller SKU inventory summaries.
            var marketplaceId = "marketplaceId_example";  // string | The marketplace ID for the marketplace for which the sellerSku is to be deleted.

            try
            {
                DeleteInventoryItemResponse result = apiInstance.DeleteInventoryItem(sellerSku, marketplaceId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FbaInventoryApi.DeleteInventoryItem: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteInventoryItemWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<DeleteInventoryItemResponse> response = apiInstance.DeleteInventoryItemWithHttpInfo(sellerSku, marketplaceId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FbaInventoryApi.DeleteInventoryItemWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **sellerSku** | **string** | A single seller SKU used for querying the specified seller SKU inventory summaries. |  |
| **marketplaceId** | **string** | The marketplace ID for the marketplace for which the sellerSku is to be deleted. |  |

### Return type

[**DeleteInventoryItemResponse**](DeleteInventoryItemResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **400** | Request has missing or invalid parameters and cannot be parsed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **403** | Indicates access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, Invalid Signature or Resource Not Found. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **404** | The specified resource does not exist. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **429** | The frequency of requests was greater than allowed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **500** | An unexpected condition occurred that prevented the server from fulfilling the request. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **503** | Temporary overloading or maintenance of the server. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getinventorysummaries"></a>
# **GetInventorySummaries**
> GetInventorySummariesResponse GetInventorySummaries (string granularityType, string granularityId, List<string> marketplaceIds, bool? details = null, DateTime? startDateTime = null, List<string>? sellerSkus = null, string? sellerSku = null, string? nextToken = null)



Returns a list of inventory summaries. The summaries returned depend on the presence or absence of the startDateTime, sellerSkus and sellerSku parameters:  - All inventory summaries with available details are returned when the startDateTime, sellerSkus and sellerSku parameters are omitted. - When startDateTime is provided, the operation returns inventory summaries that have had changes after the date and time specified. The sellerSkus and sellerSku parameters are ignored. Important: To avoid errors, use both startDateTime and nextToken to get the next page of inventory summaries that have changed after the date and time specified. - When the sellerSkus parameter is provided, the operation returns inventory summaries for only the specified sellerSkus. The sellerSku parameter is ignored. - When the sellerSku parameter is provided, the operation returns inventory summaries for only the specified sellerSku.  Note: The parameters associated with this operation may contain special characters that must be encoded to successfully call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  Usage Plan:  | Rate (requests per second) | Burst | | - -- - | - -- - | | 2 | 2 |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using software.amzn.spapi.Api.fba.inventory.v1;
using software.amzn.spapi.Client;
using software.amzn.spapi.Model.fba.inventory.v1;

namespace Example
{
    public class GetInventorySummariesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://sellingpartnerapi-na.amazon.com";
            var apiInstance = new FbaInventoryApi(config);
            var granularityType = "Marketplace";  // string | The granularity type for the inventory aggregation level.
            var granularityId = "granularityId_example";  // string | The granularity ID for the inventory aggregation level.
            var marketplaceIds = new List<string>(); // List<string> | The marketplace ID for the marketplace for which to return inventory summaries.
            var details = false;  // bool? | true to return inventory summaries with additional summarized inventory details and quantities. Otherwise, returns inventory summaries only (default value). (optional)  (default to false)
            var startDateTime = DateTime.Parse("2013-10-20T19:20:30+01:00");  // DateTime? | A start date and time in ISO8601 format. If specified, all inventory summaries that have changed since then are returned. You must specify a date and time that is no earlier than 18 months prior to the date and time when you call the API. Note: Changes in inboundWorkingQuantity, inboundShippedQuantity and inboundReceivingQuantity are not detected. (optional) 
            var sellerSkus = new List<string>?(); // List<string>? | A list of seller SKUs for which to return inventory summaries. You may specify up to 50 SKUs. (optional) 
            var sellerSku = "sellerSku_example";  // string? | A single seller SKU used for querying the specified seller SKU inventory summaries. (optional) 
            var nextToken = "nextToken_example";  // string? | String token returned in the response of your previous request. The string token will expire 30 seconds after being created. (optional) 

            try
            {
                GetInventorySummariesResponse result = apiInstance.GetInventorySummaries(granularityType, granularityId, marketplaceIds, details, startDateTime, sellerSkus, sellerSku, nextToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FbaInventoryApi.GetInventorySummaries: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetInventorySummariesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<GetInventorySummariesResponse> response = apiInstance.GetInventorySummariesWithHttpInfo(granularityType, granularityId, marketplaceIds, details, startDateTime, sellerSkus, sellerSku, nextToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FbaInventoryApi.GetInventorySummariesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **granularityType** | **string** | The granularity type for the inventory aggregation level. |  |
| **granularityId** | **string** | The granularity ID for the inventory aggregation level. |  |
| **marketplaceIds** | [**List&lt;string&gt;**](string.md) | The marketplace ID for the marketplace for which to return inventory summaries. |  |
| **details** | **bool?** | true to return inventory summaries with additional summarized inventory details and quantities. Otherwise, returns inventory summaries only (default value). | [optional] [default to false] |
| **startDateTime** | **DateTime?** | A start date and time in ISO8601 format. If specified, all inventory summaries that have changed since then are returned. You must specify a date and time that is no earlier than 18 months prior to the date and time when you call the API. Note: Changes in inboundWorkingQuantity, inboundShippedQuantity and inboundReceivingQuantity are not detected. | [optional]  |
| **sellerSkus** | [**List&lt;string&gt;?**](string.md) | A list of seller SKUs for which to return inventory summaries. You may specify up to 50 SKUs. | [optional]  |
| **sellerSku** | **string?** | A single seller SKU used for querying the specified seller SKU inventory summaries. | [optional]  |
| **nextToken** | **string?** | String token returned in the response of your previous request. The string token will expire 30 seconds after being created. | [optional]  |

### Return type

[**GetInventorySummariesResponse**](GetInventorySummariesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **400** | Request has missing or invalid parameters and cannot be parsed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **403** | Indicates access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, Invalid Signature or Resource Not Found. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **404** | The specified resource does not exist. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **429** | The frequency of requests was greater than allowed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **500** | An unexpected condition occurred that prevented the server from fulfilling the request. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **503** | Temporary overloading or maintenance of the server. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

