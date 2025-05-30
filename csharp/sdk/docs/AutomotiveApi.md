# software.amzn.spapi.Api.vehicles.v2024_11_01.AutomotiveApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**GetVehicles_0**](AutomotiveApi.md#getvehicles_0) | **GET** /catalog/2024-11-01/automotive/vehicles |  |

<a id="getvehicles_0"></a>
# **GetVehicles_0**
> VehiclesResponse GetVehicles_0 (string marketplaceId, string vehicleType, string? pageToken = null, string? updatedAfter = null)



Get the latest collection of vehicles

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using software.amzn.spapi.Api.vehicles.v2024_11_01;
using software.amzn.spapi.Client;
using software.amzn.spapi.Model.vehicles.v2024_11_01;

namespace Example
{
    public class GetVehicles_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://sellingpartnerapi-na.amazon.com";
            var apiInstance = new AutomotiveApi(config);
            var marketplaceId = A1PA6795UKMFR9;  // string | An identifier for the marketplace in which the resource operates.
            var vehicleType = CAR;  // string | An identifier for vehicle type.
            var pageToken = sdlkj234lkj234lksjdflkjwdflkjsfdlkj234234234234;  // string? | A token to fetch a certain page when there are multiple pages worth of results. (optional) 
            var updatedAfter = 2024-01-05T18:00:03+00:00;  // string? | Date in ISO 8601 format, if provided only vehicles which are modified/added to Amazon's catalog after this date will be returned. (optional) 

            try
            {
                VehiclesResponse result = apiInstance.GetVehicles_0(marketplaceId, vehicleType, pageToken, updatedAfter);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AutomotiveApi.GetVehicles_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetVehicles_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<VehiclesResponse> response = apiInstance.GetVehicles_0WithHttpInfo(marketplaceId, vehicleType, pageToken, updatedAfter);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AutomotiveApi.GetVehicles_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **marketplaceId** | **string** | An identifier for the marketplace in which the resource operates. |  |
| **vehicleType** | **string** | An identifier for vehicle type. |  |
| **pageToken** | **string?** | A token to fetch a certain page when there are multiple pages worth of results. | [optional]  |
| **updatedAfter** | **string?** | Date in ISO 8601 format, if provided only vehicles which are modified/added to Amazon&#39;s catalog after this date will be returned. | [optional]  |

### Return type

[**VehiclesResponse**](VehiclesResponse.md)

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

