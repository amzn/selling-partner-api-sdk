# software.amzn.spapi.Api.vendor.df.shipping.v2021_12_28.CustomerInvoicesApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**GetCustomerInvoice**](CustomerInvoicesApi.md#getcustomerinvoice) | **GET** /vendor/directFulfillment/shipping/2021-12-28/customerInvoices/{purchaseOrderNumber} | getCustomerInvoice |
| [**GetCustomerInvoices**](CustomerInvoicesApi.md#getcustomerinvoices) | **GET** /vendor/directFulfillment/shipping/2021-12-28/customerInvoices | getCustomerInvoices |

<a id="getcustomerinvoice"></a>
# **GetCustomerInvoice**
> CustomerInvoice GetCustomerInvoice (string purchaseOrderNumber)

getCustomerInvoice

Returns a customer invoice based on the purchaseOrderNumber that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | - -- - | - -- - | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using software.amzn.spapi.Api.vendor.df.shipping.v2021_12_28;
using software.amzn.spapi.Client;
using software.amzn.spapi.Model.vendor.df.shipping.v2021_12_28;

namespace Example
{
    public class GetCustomerInvoiceExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://sellingpartnerapi-na.amazon.com";
            var apiInstance = new CustomerInvoicesApi(config);
            var purchaseOrderNumber = "purchaseOrderNumber_example";  // string | Purchase order number of the shipment for which to return the invoice.

            try
            {
                // getCustomerInvoice
                CustomerInvoice result = apiInstance.GetCustomerInvoice(purchaseOrderNumber);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling CustomerInvoicesApi.GetCustomerInvoice: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetCustomerInvoiceWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // getCustomerInvoice
    ApiResponse<CustomerInvoice> response = apiInstance.GetCustomerInvoiceWithHttpInfo(purchaseOrderNumber);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling CustomerInvoicesApi.GetCustomerInvoiceWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **purchaseOrderNumber** | **string** | Purchase order number of the shipment for which to return the invoice. |  |

### Return type

[**CustomerInvoice**](CustomerInvoice.md)

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

<a id="getcustomerinvoices"></a>
# **GetCustomerInvoices**
> CustomerInvoiceList GetCustomerInvoices (DateTime createdAfter, DateTime createdBefore, string? shipFromPartyId = null, int? limit = null, string? sortOrder = null, string? nextToken = null)

getCustomerInvoices

Returns a list of customer invoices created during a time frame that you specify. You define the time frame using the createdAfter and createdBefore parameters. You must use both of these parameters. The date range to search must be no more than 7 days.  **Usage Plan:**  | Rate (requests per second) | Burst | | - -- - | - -- - | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using software.amzn.spapi.Api.vendor.df.shipping.v2021_12_28;
using software.amzn.spapi.Client;
using software.amzn.spapi.Model.vendor.df.shipping.v2021_12_28;

namespace Example
{
    public class GetCustomerInvoicesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://sellingpartnerapi-na.amazon.com";
            var apiInstance = new CustomerInvoicesApi(config);
            var createdAfter = DateTime.Parse("2013-10-20T19:20:30+01:00");  // DateTime | Orders that became available after this date and time will be included in the result. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
            var createdBefore = DateTime.Parse("2013-10-20T19:20:30+01:00");  // DateTime | Orders that became available before this date and time will be included in the result. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
            var shipFromPartyId = "shipFromPartyId_example";  // string? | The vendor warehouseId for order fulfillment. If not specified, the result will contain orders for all warehouses. (optional) 
            var limit = 56;  // int? | The limit to the number of records returned (optional) 
            var sortOrder = "ASC";  // string? | Sort ASC or DESC by order creation date. (optional) 
            var nextToken = "nextToken_example";  // string? | Used for pagination when there are more orders than the specified result size limit. The token value is returned in the previous API call. (optional) 

            try
            {
                // getCustomerInvoices
                CustomerInvoiceList result = apiInstance.GetCustomerInvoices(createdAfter, createdBefore, shipFromPartyId, limit, sortOrder, nextToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling CustomerInvoicesApi.GetCustomerInvoices: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetCustomerInvoicesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // getCustomerInvoices
    ApiResponse<CustomerInvoiceList> response = apiInstance.GetCustomerInvoicesWithHttpInfo(createdAfter, createdBefore, shipFromPartyId, limit, sortOrder, nextToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling CustomerInvoicesApi.GetCustomerInvoicesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createdAfter** | **DateTime** | Orders that became available after this date and time will be included in the result. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. |  |
| **createdBefore** | **DateTime** | Orders that became available before this date and time will be included in the result. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. |  |
| **shipFromPartyId** | **string?** | The vendor warehouseId for order fulfillment. If not specified, the result will contain orders for all warehouses. | [optional]  |
| **limit** | **int?** | The limit to the number of records returned | [optional]  |
| **sortOrder** | **string?** | Sort ASC or DESC by order creation date. | [optional]  |
| **nextToken** | **string?** | Used for pagination when there are more orders than the specified result size limit. The token value is returned in the previous API call. | [optional]  |

### Return type

[**CustomerInvoiceList**](CustomerInvoiceList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, payload


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

