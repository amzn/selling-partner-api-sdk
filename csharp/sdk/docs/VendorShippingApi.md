# software.amzn.spapi.Api.vendor.shipments.v1.VendorShippingApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**GetShipmentDetails**](VendorShippingApi.md#getshipmentdetails) | **GET** /vendor/shipping/v1/shipments | GetShipmentDetails |
| [**GetShipmentLabels**](VendorShippingApi.md#getshipmentlabels) | **GET** /vendor/shipping/v1/transportLabels |  |
| [**SubmitShipmentConfirmations**](VendorShippingApi.md#submitshipmentconfirmations) | **POST** /vendor/shipping/v1/shipmentConfirmations | SubmitShipmentConfirmations |
| [**SubmitShipments**](VendorShippingApi.md#submitshipments) | **POST** /vendor/shipping/v1/shipments | SubmitShipments |

<a id="getshipmentdetails"></a>
# **GetShipmentDetails**
> GetShipmentDetailsResponse GetShipmentDetails (long? limit = null, string? sortOrder = null, string? nextToken = null, DateTime? createdAfter = null, DateTime? createdBefore = null, DateTime? shipmentConfirmedBefore = null, DateTime? shipmentConfirmedAfter = null, DateTime? packageLabelCreatedBefore = null, DateTime? packageLabelCreatedAfter = null, DateTime? shippedBefore = null, DateTime? shippedAfter = null, DateTime? estimatedDeliveryBefore = null, DateTime? estimatedDeliveryAfter = null, DateTime? shipmentDeliveryBefore = null, DateTime? shipmentDeliveryAfter = null, DateTime? requestedPickUpBefore = null, DateTime? requestedPickUpAfter = null, DateTime? scheduledPickUpBefore = null, DateTime? scheduledPickUpAfter = null, string? currentShipmentStatus = null, string? vendorShipmentIdentifier = null, string? buyerReferenceNumber = null, string? buyerWarehouseCode = null, string? sellerWarehouseCode = null)

GetShipmentDetails

Returns the Details about Shipment, Carrier Details,  status of the shipment, container details and other details related to shipment based on the filter parameters value that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | - -- - | - -- - | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using software.amzn.spapi.Api.vendor.shipments.v1;
using software.amzn.spapi.Client;
using software.amzn.spapi.Model.vendor.shipments.v1;

namespace Example
{
    public class GetShipmentDetailsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://sellingpartnerapi-na.amazon.com";
            var apiInstance = new VendorShippingApi(config);
            var limit = 789L;  // long? | The limit to the number of records returned. Default value is 50 records. (optional) 
            var sortOrder = "ASC";  // string? | Sort in ascending or descending order by purchase order creation date. (optional) 
            var nextToken = "nextToken_example";  // string? | Used for pagination when there are more shipments than the specified result size limit. (optional) 
            var createdAfter = DateTime.Parse("2013-10-20T19:20:30+01:00");  // DateTime? | Get Shipment Details that became available after this timestamp will be included in the result. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. (optional) 
            var createdBefore = DateTime.Parse("2013-10-20T19:20:30+01:00");  // DateTime? | Get Shipment Details that became available before this timestamp will be included in the result. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. (optional) 
            var shipmentConfirmedBefore = DateTime.Parse("2013-10-20T19:20:30+01:00");  // DateTime? | Get Shipment Details by passing Shipment confirmed create Date Before. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. (optional) 
            var shipmentConfirmedAfter = DateTime.Parse("2013-10-20T19:20:30+01:00");  // DateTime? | Get Shipment Details by passing Shipment confirmed create Date After. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. (optional) 
            var packageLabelCreatedBefore = DateTime.Parse("2013-10-20T19:20:30+01:00");  // DateTime? | Get Shipment Details by passing Package label create Date by buyer. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. (optional) 
            var packageLabelCreatedAfter = DateTime.Parse("2013-10-20T19:20:30+01:00");  // DateTime? | Get Shipment Details by passing Package label create Date After by buyer. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. (optional) 
            var shippedBefore = DateTime.Parse("2013-10-20T19:20:30+01:00");  // DateTime? | Get Shipment Details by passing Shipped Date Before. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. (optional) 
            var shippedAfter = DateTime.Parse("2013-10-20T19:20:30+01:00");  // DateTime? | Get Shipment Details by passing Shipped Date After. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. (optional) 
            var estimatedDeliveryBefore = DateTime.Parse("2013-10-20T19:20:30+01:00");  // DateTime? | Get Shipment Details by passing Estimated Delivery Date Before. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. (optional) 
            var estimatedDeliveryAfter = DateTime.Parse("2013-10-20T19:20:30+01:00");  // DateTime? | Get Shipment Details by passing Estimated Delivery Date Before. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. (optional) 
            var shipmentDeliveryBefore = DateTime.Parse("2013-10-20T19:20:30+01:00");  // DateTime? | Get Shipment Details by passing Shipment Delivery Date Before. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. (optional) 
            var shipmentDeliveryAfter = DateTime.Parse("2013-10-20T19:20:30+01:00");  // DateTime? | Get Shipment Details by passing Shipment Delivery Date After. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. (optional) 
            var requestedPickUpBefore = DateTime.Parse("2013-10-20T19:20:30+01:00");  // DateTime? | Get Shipment Details by passing Before Requested pickup date. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. (optional) 
            var requestedPickUpAfter = DateTime.Parse("2013-10-20T19:20:30+01:00");  // DateTime? | Get Shipment Details by passing After Requested pickup date. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. (optional) 
            var scheduledPickUpBefore = DateTime.Parse("2013-10-20T19:20:30+01:00");  // DateTime? | Get Shipment Details by passing Before scheduled pickup date. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. (optional) 
            var scheduledPickUpAfter = DateTime.Parse("2013-10-20T19:20:30+01:00");  // DateTime? | Get Shipment Details by passing After Scheduled pickup date. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. (optional) 
            var currentShipmentStatus = "currentShipmentStatus_example";  // string? | Get Shipment Details by passing Current shipment status. (optional) 
            var vendorShipmentIdentifier = "vendorShipmentIdentifier_example";  // string? | Get Shipment Details by passing Vendor Shipment ID (optional) 
            var buyerReferenceNumber = "buyerReferenceNumber_example";  // string? | Get Shipment Details by passing buyer Reference ID (optional) 
            var buyerWarehouseCode = "buyerWarehouseCode_example";  // string? | Get Shipping Details based on buyer warehouse code. This value should be same as 'shipToParty.partyId' in the Shipment. (optional) 
            var sellerWarehouseCode = "sellerWarehouseCode_example";  // string? | Get Shipping Details based on vendor warehouse code. This value should be same as 'sellingParty.partyId' in the Shipment. (optional) 

            try
            {
                // GetShipmentDetails
                GetShipmentDetailsResponse result = apiInstance.GetShipmentDetails(limit, sortOrder, nextToken, createdAfter, createdBefore, shipmentConfirmedBefore, shipmentConfirmedAfter, packageLabelCreatedBefore, packageLabelCreatedAfter, shippedBefore, shippedAfter, estimatedDeliveryBefore, estimatedDeliveryAfter, shipmentDeliveryBefore, shipmentDeliveryAfter, requestedPickUpBefore, requestedPickUpAfter, scheduledPickUpBefore, scheduledPickUpAfter, currentShipmentStatus, vendorShipmentIdentifier, buyerReferenceNumber, buyerWarehouseCode, sellerWarehouseCode);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling VendorShippingApi.GetShipmentDetails: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetShipmentDetailsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // GetShipmentDetails
    ApiResponse<GetShipmentDetailsResponse> response = apiInstance.GetShipmentDetailsWithHttpInfo(limit, sortOrder, nextToken, createdAfter, createdBefore, shipmentConfirmedBefore, shipmentConfirmedAfter, packageLabelCreatedBefore, packageLabelCreatedAfter, shippedBefore, shippedAfter, estimatedDeliveryBefore, estimatedDeliveryAfter, shipmentDeliveryBefore, shipmentDeliveryAfter, requestedPickUpBefore, requestedPickUpAfter, scheduledPickUpBefore, scheduledPickUpAfter, currentShipmentStatus, vendorShipmentIdentifier, buyerReferenceNumber, buyerWarehouseCode, sellerWarehouseCode);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling VendorShippingApi.GetShipmentDetailsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **limit** | **long?** | The limit to the number of records returned. Default value is 50 records. | [optional]  |
| **sortOrder** | **string?** | Sort in ascending or descending order by purchase order creation date. | [optional]  |
| **nextToken** | **string?** | Used for pagination when there are more shipments than the specified result size limit. | [optional]  |
| **createdAfter** | **DateTime?** | Get Shipment Details that became available after this timestamp will be included in the result. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format. | [optional]  |
| **createdBefore** | **DateTime?** | Get Shipment Details that became available before this timestamp will be included in the result. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format. | [optional]  |
| **shipmentConfirmedBefore** | **DateTime?** | Get Shipment Details by passing Shipment confirmed create Date Before. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format. | [optional]  |
| **shipmentConfirmedAfter** | **DateTime?** | Get Shipment Details by passing Shipment confirmed create Date After. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format. | [optional]  |
| **packageLabelCreatedBefore** | **DateTime?** | Get Shipment Details by passing Package label create Date by buyer. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format. | [optional]  |
| **packageLabelCreatedAfter** | **DateTime?** | Get Shipment Details by passing Package label create Date After by buyer. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format. | [optional]  |
| **shippedBefore** | **DateTime?** | Get Shipment Details by passing Shipped Date Before. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format. | [optional]  |
| **shippedAfter** | **DateTime?** | Get Shipment Details by passing Shipped Date After. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format. | [optional]  |
| **estimatedDeliveryBefore** | **DateTime?** | Get Shipment Details by passing Estimated Delivery Date Before. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format. | [optional]  |
| **estimatedDeliveryAfter** | **DateTime?** | Get Shipment Details by passing Estimated Delivery Date Before. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format. | [optional]  |
| **shipmentDeliveryBefore** | **DateTime?** | Get Shipment Details by passing Shipment Delivery Date Before. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format. | [optional]  |
| **shipmentDeliveryAfter** | **DateTime?** | Get Shipment Details by passing Shipment Delivery Date After. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format. | [optional]  |
| **requestedPickUpBefore** | **DateTime?** | Get Shipment Details by passing Before Requested pickup date. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format. | [optional]  |
| **requestedPickUpAfter** | **DateTime?** | Get Shipment Details by passing After Requested pickup date. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format. | [optional]  |
| **scheduledPickUpBefore** | **DateTime?** | Get Shipment Details by passing Before scheduled pickup date. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format. | [optional]  |
| **scheduledPickUpAfter** | **DateTime?** | Get Shipment Details by passing After Scheduled pickup date. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format. | [optional]  |
| **currentShipmentStatus** | **string?** | Get Shipment Details by passing Current shipment status. | [optional]  |
| **vendorShipmentIdentifier** | **string?** | Get Shipment Details by passing Vendor Shipment ID | [optional]  |
| **buyerReferenceNumber** | **string?** | Get Shipment Details by passing buyer Reference ID | [optional]  |
| **buyerWarehouseCode** | **string?** | Get Shipping Details based on buyer warehouse code. This value should be same as &#39;shipToParty.partyId&#39; in the Shipment. | [optional]  |
| **sellerWarehouseCode** | **string?** | Get Shipping Details based on vendor warehouse code. This value should be same as &#39;sellingParty.partyId&#39; in the Shipment. | [optional]  |

### Return type

[**GetShipmentDetailsResponse**](GetShipmentDetailsResponse.md)

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

<a id="getshipmentlabels"></a>
# **GetShipmentLabels**
> GetShipmentLabels GetShipmentLabels (long? limit = null, string? sortOrder = null, string? nextToken = null, DateTime? labelCreatedAfter = null, DateTime? labelCreatedBefore = null, string? buyerReferenceNumber = null, string? vendorShipmentIdentifier = null, string? sellerWarehouseCode = null)



Returns small parcel shipment labels based on the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | - -- - | - -- - | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using software.amzn.spapi.Api.vendor.shipments.v1;
using software.amzn.spapi.Client;
using software.amzn.spapi.Model.vendor.shipments.v1;

namespace Example
{
    public class GetShipmentLabelsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://sellingpartnerapi-na.amazon.com";
            var apiInstance = new VendorShippingApi(config);
            var limit = 789L;  // long? | The limit to the number of records returned. Default value is 50 records. (optional) 
            var sortOrder = "ASC";  // string? | Sort the list by shipment label creation date in ascending or descending order. (optional) 
            var nextToken = "nextToken_example";  // string? | A token that you use to retrieve the next page of results. The response includes `nextToken` when the number of results exceeds the specified `pageSize` value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until `nextToken` is null. Note that this operation can return empty pages. (optional) 
            var labelCreatedAfter = DateTime.Parse("2013-10-20T19:20:30+01:00");  // DateTime? | Shipment labels created after this time will be included in the result. This field must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format. (optional) 
            var labelCreatedBefore = DateTime.Parse("2013-10-20T19:20:30+01:00");  // DateTime? | Shipment labels created before this time will be included in the result. This field must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format. (optional) 
            var buyerReferenceNumber = "buyerReferenceNumber_example";  // string? | Get Shipment labels by passing buyer reference number. (optional) 
            var vendorShipmentIdentifier = "vendorShipmentIdentifier_example";  // string? | Get Shipment labels by passing vendor shipment identifier. (optional) 
            var sellerWarehouseCode = "sellerWarehouseCode_example";  // string? | Get Shipping labels based on vendor warehouse code. This value must be same as the `sellingParty.partyId` in the shipment. (optional) 

            try
            {
                GetShipmentLabels result = apiInstance.GetShipmentLabels(limit, sortOrder, nextToken, labelCreatedAfter, labelCreatedBefore, buyerReferenceNumber, vendorShipmentIdentifier, sellerWarehouseCode);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling VendorShippingApi.GetShipmentLabels: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetShipmentLabelsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<GetShipmentLabels> response = apiInstance.GetShipmentLabelsWithHttpInfo(limit, sortOrder, nextToken, labelCreatedAfter, labelCreatedBefore, buyerReferenceNumber, vendorShipmentIdentifier, sellerWarehouseCode);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling VendorShippingApi.GetShipmentLabelsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **limit** | **long?** | The limit to the number of records returned. Default value is 50 records. | [optional]  |
| **sortOrder** | **string?** | Sort the list by shipment label creation date in ascending or descending order. | [optional]  |
| **nextToken** | **string?** | A token that you use to retrieve the next page of results. The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;pageSize&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages. | [optional]  |
| **labelCreatedAfter** | **DateTime?** | Shipment labels created after this time will be included in the result. This field must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format. | [optional]  |
| **labelCreatedBefore** | **DateTime?** | Shipment labels created before this time will be included in the result. This field must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format. | [optional]  |
| **buyerReferenceNumber** | **string?** | Get Shipment labels by passing buyer reference number. | [optional]  |
| **vendorShipmentIdentifier** | **string?** | Get Shipment labels by passing vendor shipment identifier. | [optional]  |
| **sellerWarehouseCode** | **string?** | Get Shipping labels based on vendor warehouse code. This value must be same as the &#x60;sellingParty.partyId&#x60; in the shipment. | [optional]  |

### Return type

[**GetShipmentLabels**](GetShipmentLabels.md)

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

<a id="submitshipmentconfirmations"></a>
# **SubmitShipmentConfirmations**
> SubmitShipmentConfirmationsResponse SubmitShipmentConfirmations (SubmitShipmentConfirmationsRequest body)

SubmitShipmentConfirmations

Submits one or more shipment confirmations for vendor orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | - -- - | - -- - | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using software.amzn.spapi.Api.vendor.shipments.v1;
using software.amzn.spapi.Client;
using software.amzn.spapi.Model.vendor.shipments.v1;

namespace Example
{
    public class SubmitShipmentConfirmationsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://sellingpartnerapi-na.amazon.com";
            var apiInstance = new VendorShippingApi(config);
            var body = new SubmitShipmentConfirmationsRequest(); // SubmitShipmentConfirmationsRequest | A request to submit shipment confirmation.

            try
            {
                // SubmitShipmentConfirmations
                SubmitShipmentConfirmationsResponse result = apiInstance.SubmitShipmentConfirmations(body);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling VendorShippingApi.SubmitShipmentConfirmations: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SubmitShipmentConfirmationsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // SubmitShipmentConfirmations
    ApiResponse<SubmitShipmentConfirmationsResponse> response = apiInstance.SubmitShipmentConfirmationsWithHttpInfo(body);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling VendorShippingApi.SubmitShipmentConfirmationsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **body** | [**SubmitShipmentConfirmationsRequest**](SubmitShipmentConfirmationsRequest.md) | A request to submit shipment confirmation. |  |

### Return type

[**SubmitShipmentConfirmationsResponse**](SubmitShipmentConfirmationsResponse.md)

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

<a id="submitshipments"></a>
# **SubmitShipments**
> SubmitShipmentConfirmationsResponse SubmitShipments (SubmitShipments body)

SubmitShipments

Submits one or more shipment request for vendor Orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | - -- - | - -- - | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using software.amzn.spapi.Api.vendor.shipments.v1;
using software.amzn.spapi.Client;
using software.amzn.spapi.Model.vendor.shipments.v1;

namespace Example
{
    public class SubmitShipmentsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://sellingpartnerapi-na.amazon.com";
            var apiInstance = new VendorShippingApi(config);
            var body = new SubmitShipments(); // SubmitShipments | A request to submit shipment request.

            try
            {
                // SubmitShipments
                SubmitShipmentConfirmationsResponse result = apiInstance.SubmitShipments(body);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling VendorShippingApi.SubmitShipments: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SubmitShipmentsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // SubmitShipments
    ApiResponse<SubmitShipmentConfirmationsResponse> response = apiInstance.SubmitShipmentsWithHttpInfo(body);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling VendorShippingApi.SubmitShipmentsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **body** | [**SubmitShipments**](SubmitShipments.md) | A request to submit shipment request. |  |

### Return type

[**SubmitShipmentConfirmationsResponse**](SubmitShipmentConfirmationsResponse.md)

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

