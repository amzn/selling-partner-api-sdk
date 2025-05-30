# software.amzn.spapi.Api.vendor.df.shipping.v2021_12_28.VendorShippingLabelsApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateShippingLabels**](VendorShippingLabelsApi.md#createshippinglabels) | **POST** /vendor/directFulfillment/shipping/2021-12-28/shippingLabels/{purchaseOrderNumber} | createShippingLabels |
| [**GetShippingLabel**](VendorShippingLabelsApi.md#getshippinglabel) | **GET** /vendor/directFulfillment/shipping/2021-12-28/shippingLabels/{purchaseOrderNumber} | getShippingLabel |
| [**GetShippingLabels**](VendorShippingLabelsApi.md#getshippinglabels) | **GET** /vendor/directFulfillment/shipping/2021-12-28/shippingLabels | getShippingLabels |
| [**SubmitShippingLabelRequest**](VendorShippingLabelsApi.md#submitshippinglabelrequest) | **POST** /vendor/directFulfillment/shipping/2021-12-28/shippingLabels | submitShippingLabelRequest |

<a id="createshippinglabels"></a>
# **CreateShippingLabels**
> ShippingLabel CreateShippingLabels (string purchaseOrderNumber, CreateShippingLabelsRequest body)

createShippingLabels

Creates shipping labels for a purchase order and returns the labels.  **Usage Plan:**  | Rate (requests per second) | Burst | | - -- - | - -- - | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using software.amzn.spapi.Api.vendor.df.shipping.v2021_12_28;
using software.amzn.spapi.Client;
using software.amzn.spapi.Model.vendor.df.shipping.v2021_12_28;

namespace Example
{
    public class CreateShippingLabelsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://sellingpartnerapi-na.amazon.com";
            var apiInstance = new VendorShippingLabelsApi(config);
            var purchaseOrderNumber = "purchaseOrderNumber_example";  // string | The purchase order number for which you want to return the shipping labels. It should be the same number as the `purchaseOrderNumber` in the order.
            var body = new CreateShippingLabelsRequest(); // CreateShippingLabelsRequest | The request payload that contains the parameters for creating shipping labels.

            try
            {
                // createShippingLabels
                ShippingLabel result = apiInstance.CreateShippingLabels(purchaseOrderNumber, body);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling VendorShippingLabelsApi.CreateShippingLabels: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateShippingLabelsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // createShippingLabels
    ApiResponse<ShippingLabel> response = apiInstance.CreateShippingLabelsWithHttpInfo(purchaseOrderNumber, body);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling VendorShippingLabelsApi.CreateShippingLabelsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **purchaseOrderNumber** | **string** | The purchase order number for which you want to return the shipping labels. It should be the same number as the &#x60;purchaseOrderNumber&#x60; in the order. |  |
| **body** | [**CreateShippingLabelsRequest**](CreateShippingLabelsRequest.md) | The request payload that contains the parameters for creating shipping labels. |  |

### Return type

[**ShippingLabel**](ShippingLabel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **400** | Request has missing or invalid parameters and cannot be parsed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **403** | Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **404** | The resource specified does not exist. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **409** | The request conflicts with the current state of the resource (shipment). |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **413** | The request size exceeded the maximum accepted size. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **415** | The request payload is in an unsupported format. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **429** | The frequency of requests was greater than allowed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **500** | An unexpected condition occurred that prevented the server from fulfilling the request. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **503** | Temporary overloading or maintenance of the server. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getshippinglabel"></a>
# **GetShippingLabel**
> ShippingLabel GetShippingLabel (string purchaseOrderNumber)

getShippingLabel

Returns a shipping label for the `purchaseOrderNumber` that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | - -- - | - -- - | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using software.amzn.spapi.Api.vendor.df.shipping.v2021_12_28;
using software.amzn.spapi.Client;
using software.amzn.spapi.Model.vendor.df.shipping.v2021_12_28;

namespace Example
{
    public class GetShippingLabelExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://sellingpartnerapi-na.amazon.com";
            var apiInstance = new VendorShippingLabelsApi(config);
            var purchaseOrderNumber = "purchaseOrderNumber_example";  // string | The purchase order number for which you want to return the shipping label. It should be the same `purchaseOrderNumber` that you received in the order.

            try
            {
                // getShippingLabel
                ShippingLabel result = apiInstance.GetShippingLabel(purchaseOrderNumber);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling VendorShippingLabelsApi.GetShippingLabel: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetShippingLabelWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // getShippingLabel
    ApiResponse<ShippingLabel> response = apiInstance.GetShippingLabelWithHttpInfo(purchaseOrderNumber);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling VendorShippingLabelsApi.GetShippingLabelWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **purchaseOrderNumber** | **string** | The purchase order number for which you want to return the shipping label. It should be the same &#x60;purchaseOrderNumber&#x60; that you received in the order. |  |

### Return type

[**ShippingLabel**](ShippingLabel.md)

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
| **401** | The request&#39;s Authorization header is not formatted correctly or does not contain a valid token. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **403** | Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **404** | The resource specified does not exist. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **415** | The request payload is in an unsupported format. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **429** | The frequency of requests was greater than allowed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **500** | An unexpected condition occurred that prevented the server from fulfilling the request. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **503** | Temporary overloading or maintenance of the server. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getshippinglabels"></a>
# **GetShippingLabels**
> ShippingLabelList GetShippingLabels (DateTime createdAfter, DateTime createdBefore, string? shipFromPartyId = null, int? limit = null, string? sortOrder = null, string? nextToken = null)

getShippingLabels

Returns a list of shipping labels created during the time frame that you specify. Use the `createdAfter` and `createdBefore` parameters to define the time frame. You must use both of these parameters. The date range to search must not be more than seven days.  **Usage Plan:**  | Rate (requests per second) | Burst | | - -- - | - -- - | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using software.amzn.spapi.Api.vendor.df.shipping.v2021_12_28;
using software.amzn.spapi.Client;
using software.amzn.spapi.Model.vendor.df.shipping.v2021_12_28;

namespace Example
{
    public class GetShippingLabelsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://sellingpartnerapi-na.amazon.com";
            var apiInstance = new VendorShippingLabelsApi(config);
            var createdAfter = DateTime.Parse("2013-10-20T19:20:30+01:00");  // DateTime | Shipping labels that became available after this date and time will be included in the result. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
            var createdBefore = DateTime.Parse("2013-10-20T19:20:30+01:00");  // DateTime | Shipping labels that became available before this date and time will be included in the result. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
            var shipFromPartyId = "shipFromPartyId_example";  // string? | The vendor `warehouseId` for order fulfillment. If not specified, the result contains orders for all warehouses. (optional) 
            var limit = 56;  // int? | The limit to the number of records returned. (optional) 
            var sortOrder = "ASC";  // string? | The sort order creation date. You can choose between ascending (`ASC`) or descending (`DESC`) sort order. (optional)  (default to ASC)
            var nextToken = "nextToken_example";  // string? | Used for pagination when there are more ship labels than the specified result size limit. The token value is returned in the previous API call. (optional) 

            try
            {
                // getShippingLabels
                ShippingLabelList result = apiInstance.GetShippingLabels(createdAfter, createdBefore, shipFromPartyId, limit, sortOrder, nextToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling VendorShippingLabelsApi.GetShippingLabels: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetShippingLabelsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // getShippingLabels
    ApiResponse<ShippingLabelList> response = apiInstance.GetShippingLabelsWithHttpInfo(createdAfter, createdBefore, shipFromPartyId, limit, sortOrder, nextToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling VendorShippingLabelsApi.GetShippingLabelsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createdAfter** | **DateTime** | Shipping labels that became available after this date and time will be included in the result. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. |  |
| **createdBefore** | **DateTime** | Shipping labels that became available before this date and time will be included in the result. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. |  |
| **shipFromPartyId** | **string?** | The vendor &#x60;warehouseId&#x60; for order fulfillment. If not specified, the result contains orders for all warehouses. | [optional]  |
| **limit** | **int?** | The limit to the number of records returned. | [optional]  |
| **sortOrder** | **string?** | The sort order creation date. You can choose between ascending (&#x60;ASC&#x60;) or descending (&#x60;DESC&#x60;) sort order. | [optional] [default to ASC] |
| **nextToken** | **string?** | Used for pagination when there are more ship labels than the specified result size limit. The token value is returned in the previous API call. | [optional]  |

### Return type

[**ShippingLabelList**](ShippingLabelList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, pagination, shippingLabels


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **400** | Request has missing or invalid parameters and cannot be parsed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **403** | Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **404** | The resource specified does not exist. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **415** | The request payload is in an unsupported format. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **429** | The frequency of requests was greater than allowed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **500** | An unexpected condition occurred that prevented the server from fulfilling the request. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **503** | Temporary overloading or maintenance of the server. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="submitshippinglabelrequest"></a>
# **SubmitShippingLabelRequest**
> TransactionReference SubmitShippingLabelRequest (SubmitShippingLabelsRequest body)

submitShippingLabelRequest

Creates a shipping label for a purchase order and returns a `transactionId` for reference.  **Usage Plan:**  | Rate (requests per second) | Burst | | - -- - | - -- - | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using software.amzn.spapi.Api.vendor.df.shipping.v2021_12_28;
using software.amzn.spapi.Client;
using software.amzn.spapi.Model.vendor.df.shipping.v2021_12_28;

namespace Example
{
    public class SubmitShippingLabelRequestExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://sellingpartnerapi-na.amazon.com";
            var apiInstance = new VendorShippingLabelsApi(config);
            var body = new SubmitShippingLabelsRequest(); // SubmitShippingLabelsRequest | The request body that contains the shipping labels data.

            try
            {
                // submitShippingLabelRequest
                TransactionReference result = apiInstance.SubmitShippingLabelRequest(body);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling VendorShippingLabelsApi.SubmitShippingLabelRequest: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SubmitShippingLabelRequestWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // submitShippingLabelRequest
    ApiResponse<TransactionReference> response = apiInstance.SubmitShippingLabelRequestWithHttpInfo(body);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling VendorShippingLabelsApi.SubmitShippingLabelRequestWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **body** | [**SubmitShippingLabelsRequest**](SubmitShippingLabelsRequest.md) | The request body that contains the shipping labels data. |  |

### Return type

[**TransactionReference**](TransactionReference.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Success. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **400** | Request has missing or invalid parameters and cannot be parsed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **403** | Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **404** | The resource specified does not exist. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **413** | The request size exceeded the maximum accepted size. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **415** | The request payload is in an unsupported format. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **429** | The frequency of requests was greater than allowed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **500** | An unexpected condition occurred that prevented the server from fulfilling the request. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **503** | Temporary overloading or maintenance of the server. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

