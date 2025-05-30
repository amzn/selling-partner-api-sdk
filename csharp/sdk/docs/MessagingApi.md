# software.amzn.spapi.Api.messaging.v1.MessagingApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**ConfirmCustomizationDetails**](MessagingApi.md#confirmcustomizationdetails) | **POST** /messaging/v1/orders/{amazonOrderId}/messages/confirmCustomizationDetails |  |
| [**CreateAmazonMotors**](MessagingApi.md#createamazonmotors) | **POST** /messaging/v1/orders/{amazonOrderId}/messages/amazonMotors |  |
| [**CreateConfirmDeliveryDetails**](MessagingApi.md#createconfirmdeliverydetails) | **POST** /messaging/v1/orders/{amazonOrderId}/messages/confirmDeliveryDetails |  |
| [**CreateConfirmOrderDetails**](MessagingApi.md#createconfirmorderdetails) | **POST** /messaging/v1/orders/{amazonOrderId}/messages/confirmOrderDetails |  |
| [**CreateConfirmServiceDetails**](MessagingApi.md#createconfirmservicedetails) | **POST** /messaging/v1/orders/{amazonOrderId}/messages/confirmServiceDetails |  |
| [**CreateDigitalAccessKey**](MessagingApi.md#createdigitalaccesskey) | **POST** /messaging/v1/orders/{amazonOrderId}/messages/digitalAccessKey |  |
| [**CreateLegalDisclosure**](MessagingApi.md#createlegaldisclosure) | **POST** /messaging/v1/orders/{amazonOrderId}/messages/legalDisclosure |  |
| [**CreateNegativeFeedbackRemoval**](MessagingApi.md#createnegativefeedbackremoval) | **POST** /messaging/v1/orders/{amazonOrderId}/messages/negativeFeedbackRemoval |  |
| [**CreateUnexpectedProblem**](MessagingApi.md#createunexpectedproblem) | **POST** /messaging/v1/orders/{amazonOrderId}/messages/unexpectedProblem |  |
| [**CreateWarranty**](MessagingApi.md#createwarranty) | **POST** /messaging/v1/orders/{amazonOrderId}/messages/warranty |  |
| [**GetAttributes**](MessagingApi.md#getattributes) | **GET** /messaging/v1/orders/{amazonOrderId}/attributes |  |
| [**GetMessagingActionsForOrder**](MessagingApi.md#getmessagingactionsfororder) | **GET** /messaging/v1/orders/{amazonOrderId} |  |
| [**SendInvoice**](MessagingApi.md#sendinvoice) | **POST** /messaging/v1/orders/{amazonOrderId}/messages/invoice |  |

<a id="confirmcustomizationdetails"></a>
# **ConfirmCustomizationDetails**
> CreateConfirmCustomizationDetailsResponse ConfirmCustomizationDetails (string amazonOrderId, List<string> marketplaceIds, CreateConfirmCustomizationDetailsRequest body)



Sends a message asking a buyer to provide or verify customization details such as name spelling, images, initials, etc.  **Usage Plan:**  | Rate (requests per second) | Burst | | - -- - | - -- - | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using software.amzn.spapi.Api.messaging.v1;
using software.amzn.spapi.Client;
using software.amzn.spapi.Model.messaging.v1;

namespace Example
{
    public class ConfirmCustomizationDetailsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://sellingpartnerapi-na.amazon.com";
            var apiInstance = new MessagingApi(config);
            var amazonOrderId = "amazonOrderId_example";  // string | An Amazon order identifier. This identifies the order for which a message is sent.
            var marketplaceIds = new List<string>(); // List<string> | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
            var body = new CreateConfirmCustomizationDetailsRequest(); // CreateConfirmCustomizationDetailsRequest | This contains the message body for a message.

            try
            {
                CreateConfirmCustomizationDetailsResponse result = apiInstance.ConfirmCustomizationDetails(amazonOrderId, marketplaceIds, body);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MessagingApi.ConfirmCustomizationDetails: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ConfirmCustomizationDetailsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<CreateConfirmCustomizationDetailsResponse> response = apiInstance.ConfirmCustomizationDetailsWithHttpInfo(amazonOrderId, marketplaceIds, body);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MessagingApi.ConfirmCustomizationDetailsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **amazonOrderId** | **string** | An Amazon order identifier. This identifies the order for which a message is sent. |  |
| **marketplaceIds** | [**List&lt;string&gt;**](string.md) | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace. |  |
| **body** | [**CreateConfirmCustomizationDetailsRequest**](CreateConfirmCustomizationDetailsRequest.md) | This contains the message body for a message. |  |

### Return type

[**CreateConfirmCustomizationDetailsResponse**](CreateConfirmCustomizationDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The message was created for the order. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **400** | Request has missing or invalid parameters and cannot be parsed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **403** | Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **404** | The resource specified does not exist. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **413** | The request size exceeded the maximum accepted size. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **415** | The request payload is in an unsupported format. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **429** | The frequency of requests was greater than allowed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **500** | An unexpected condition occurred that prevented the server from fulfilling the request. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **503** | Temporary overloading or maintenance of the server. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createamazonmotors"></a>
# **CreateAmazonMotors**
> CreateAmazonMotorsResponse CreateAmazonMotors (string amazonOrderId, List<string> marketplaceIds, CreateAmazonMotorsRequest body)



Sends a message to a buyer to provide details about an Amazon Motors order. This message can only be sent by Amazon Motors sellers.  **Usage Plan:**  | Rate (requests per second) | Burst | | - -- - | - -- - | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using software.amzn.spapi.Api.messaging.v1;
using software.amzn.spapi.Client;
using software.amzn.spapi.Model.messaging.v1;

namespace Example
{
    public class CreateAmazonMotorsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://sellingpartnerapi-na.amazon.com";
            var apiInstance = new MessagingApi(config);
            var amazonOrderId = "amazonOrderId_example";  // string | An Amazon order identifier. This identifies the order for which a message is sent.
            var marketplaceIds = new List<string>(); // List<string> | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
            var body = new CreateAmazonMotorsRequest(); // CreateAmazonMotorsRequest | This contains the message body for a message.

            try
            {
                CreateAmazonMotorsResponse result = apiInstance.CreateAmazonMotors(amazonOrderId, marketplaceIds, body);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MessagingApi.CreateAmazonMotors: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateAmazonMotorsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<CreateAmazonMotorsResponse> response = apiInstance.CreateAmazonMotorsWithHttpInfo(amazonOrderId, marketplaceIds, body);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MessagingApi.CreateAmazonMotorsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **amazonOrderId** | **string** | An Amazon order identifier. This identifies the order for which a message is sent. |  |
| **marketplaceIds** | [**List&lt;string&gt;**](string.md) | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace. |  |
| **body** | [**CreateAmazonMotorsRequest**](CreateAmazonMotorsRequest.md) | This contains the message body for a message. |  |

### Return type

[**CreateAmazonMotorsResponse**](CreateAmazonMotorsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The message was created for the order. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **400** | Request has missing or invalid parameters and cannot be parsed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **403** | Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **404** | The resource specified does not exist. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **413** | The request size exceeded the maximum accepted size. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **415** | The request payload is in an unsupported format. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **429** | The frequency of requests was greater than allowed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **500** | An unexpected condition occurred that prevented the server from fulfilling the request. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **503** | Temporary overloading or maintenance of the server. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createconfirmdeliverydetails"></a>
# **CreateConfirmDeliveryDetails**
> CreateConfirmDeliveryDetailsResponse CreateConfirmDeliveryDetails (string amazonOrderId, List<string> marketplaceIds, CreateConfirmDeliveryDetailsRequest body)



Sends a message to a buyer to arrange a delivery or to confirm contact information for making a delivery.  **Usage Plan:**  | Rate (requests per second) | Burst | | - -- - | - -- - | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using software.amzn.spapi.Api.messaging.v1;
using software.amzn.spapi.Client;
using software.amzn.spapi.Model.messaging.v1;

namespace Example
{
    public class CreateConfirmDeliveryDetailsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://sellingpartnerapi-na.amazon.com";
            var apiInstance = new MessagingApi(config);
            var amazonOrderId = "amazonOrderId_example";  // string | An Amazon order identifier. This identifies the order for which a message is sent.
            var marketplaceIds = new List<string>(); // List<string> | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
            var body = new CreateConfirmDeliveryDetailsRequest(); // CreateConfirmDeliveryDetailsRequest | This contains the message body for a message.

            try
            {
                CreateConfirmDeliveryDetailsResponse result = apiInstance.CreateConfirmDeliveryDetails(amazonOrderId, marketplaceIds, body);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MessagingApi.CreateConfirmDeliveryDetails: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateConfirmDeliveryDetailsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<CreateConfirmDeliveryDetailsResponse> response = apiInstance.CreateConfirmDeliveryDetailsWithHttpInfo(amazonOrderId, marketplaceIds, body);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MessagingApi.CreateConfirmDeliveryDetailsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **amazonOrderId** | **string** | An Amazon order identifier. This identifies the order for which a message is sent. |  |
| **marketplaceIds** | [**List&lt;string&gt;**](string.md) | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace. |  |
| **body** | [**CreateConfirmDeliveryDetailsRequest**](CreateConfirmDeliveryDetailsRequest.md) | This contains the message body for a message. |  |

### Return type

[**CreateConfirmDeliveryDetailsResponse**](CreateConfirmDeliveryDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The message was created for the order. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **400** | Request has missing or invalid parameters and cannot be parsed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **403** | Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **404** | The resource specified does not exist. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **413** | The request size exceeded the maximum accepted size. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **415** | The request payload is in an unsupported format. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **429** | The frequency of requests was greater than allowed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **500** | An unexpected condition occurred that prevented the server from fulfilling the request. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **503** | Temporary overloading or maintenance of the server. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createconfirmorderdetails"></a>
# **CreateConfirmOrderDetails**
> CreateConfirmOrderDetailsResponse CreateConfirmOrderDetails (string amazonOrderId, List<string> marketplaceIds, CreateConfirmOrderDetailsRequest body)



Sends a message to ask a buyer an order-related question prior to shipping their order.  **Usage Plan:**  | Rate (requests per second) | Burst | | - -- - | - -- - | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using software.amzn.spapi.Api.messaging.v1;
using software.amzn.spapi.Client;
using software.amzn.spapi.Model.messaging.v1;

namespace Example
{
    public class CreateConfirmOrderDetailsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://sellingpartnerapi-na.amazon.com";
            var apiInstance = new MessagingApi(config);
            var amazonOrderId = "amazonOrderId_example";  // string | An Amazon order identifier. This identifies the order for which a message is sent.
            var marketplaceIds = new List<string>(); // List<string> | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
            var body = new CreateConfirmOrderDetailsRequest(); // CreateConfirmOrderDetailsRequest | This contains the message body for a message.

            try
            {
                CreateConfirmOrderDetailsResponse result = apiInstance.CreateConfirmOrderDetails(amazonOrderId, marketplaceIds, body);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MessagingApi.CreateConfirmOrderDetails: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateConfirmOrderDetailsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<CreateConfirmOrderDetailsResponse> response = apiInstance.CreateConfirmOrderDetailsWithHttpInfo(amazonOrderId, marketplaceIds, body);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MessagingApi.CreateConfirmOrderDetailsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **amazonOrderId** | **string** | An Amazon order identifier. This identifies the order for which a message is sent. |  |
| **marketplaceIds** | [**List&lt;string&gt;**](string.md) | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace. |  |
| **body** | [**CreateConfirmOrderDetailsRequest**](CreateConfirmOrderDetailsRequest.md) | This contains the message body for a message. |  |

### Return type

[**CreateConfirmOrderDetailsResponse**](CreateConfirmOrderDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The message was created for the order. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **400** | Request has missing or invalid parameters and cannot be parsed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **403** | Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **404** | The resource specified does not exist. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **413** | The request size exceeded the maximum accepted size. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **415** | The request payload is in an unsupported format. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **429** | The frequency of requests was greater than allowed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **500** | An unexpected condition occurred that prevented the server from fulfilling the request. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **503** | Temporary overloading or maintenance of the server. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createconfirmservicedetails"></a>
# **CreateConfirmServiceDetails**
> CreateConfirmServiceDetailsResponse CreateConfirmServiceDetails (string amazonOrderId, List<string> marketplaceIds, CreateConfirmServiceDetailsRequest body)



Sends a message to contact a Home Service customer to arrange a service call or to gather information prior to a service call.  **Usage Plan:**  | Rate (requests per second) | Burst | | - -- - | - -- - | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using software.amzn.spapi.Api.messaging.v1;
using software.amzn.spapi.Client;
using software.amzn.spapi.Model.messaging.v1;

namespace Example
{
    public class CreateConfirmServiceDetailsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://sellingpartnerapi-na.amazon.com";
            var apiInstance = new MessagingApi(config);
            var amazonOrderId = "amazonOrderId_example";  // string | An Amazon order identifier. This identifies the order for which a message is sent.
            var marketplaceIds = new List<string>(); // List<string> | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
            var body = new CreateConfirmServiceDetailsRequest(); // CreateConfirmServiceDetailsRequest | This contains the message body for a message.

            try
            {
                CreateConfirmServiceDetailsResponse result = apiInstance.CreateConfirmServiceDetails(amazonOrderId, marketplaceIds, body);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MessagingApi.CreateConfirmServiceDetails: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateConfirmServiceDetailsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<CreateConfirmServiceDetailsResponse> response = apiInstance.CreateConfirmServiceDetailsWithHttpInfo(amazonOrderId, marketplaceIds, body);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MessagingApi.CreateConfirmServiceDetailsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **amazonOrderId** | **string** | An Amazon order identifier. This identifies the order for which a message is sent. |  |
| **marketplaceIds** | [**List&lt;string&gt;**](string.md) | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace. |  |
| **body** | [**CreateConfirmServiceDetailsRequest**](CreateConfirmServiceDetailsRequest.md) | This contains the message body for a message. |  |

### Return type

[**CreateConfirmServiceDetailsResponse**](CreateConfirmServiceDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The message was created for the order. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **400** | Request has missing or invalid parameters and cannot be parsed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **403** | Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **404** | The resource specified does not exist. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **413** | The request size exceeded the maximum accepted size. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **415** | The request payload is in an unsupported format. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **429** | The frequency of requests was greater than allowed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **500** | An unexpected condition occurred that prevented the server from fulfilling the request. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **503** | Temporary overloading or maintenance of the server. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createdigitalaccesskey"></a>
# **CreateDigitalAccessKey**
> CreateDigitalAccessKeyResponse CreateDigitalAccessKey (string amazonOrderId, List<string> marketplaceIds, CreateDigitalAccessKeyRequest body)



Sends a buyer a message to share a digital access key that is required to utilize digital content in their order.  **Usage Plan:**  | Rate (requests per second) | Burst | | - -- - | - -- - | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using software.amzn.spapi.Api.messaging.v1;
using software.amzn.spapi.Client;
using software.amzn.spapi.Model.messaging.v1;

namespace Example
{
    public class CreateDigitalAccessKeyExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://sellingpartnerapi-na.amazon.com";
            var apiInstance = new MessagingApi(config);
            var amazonOrderId = "amazonOrderId_example";  // string | An Amazon order identifier. This identifies the order for which a message is sent.
            var marketplaceIds = new List<string>(); // List<string> | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
            var body = new CreateDigitalAccessKeyRequest(); // CreateDigitalAccessKeyRequest | This contains the message body for a message.

            try
            {
                CreateDigitalAccessKeyResponse result = apiInstance.CreateDigitalAccessKey(amazonOrderId, marketplaceIds, body);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MessagingApi.CreateDigitalAccessKey: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateDigitalAccessKeyWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<CreateDigitalAccessKeyResponse> response = apiInstance.CreateDigitalAccessKeyWithHttpInfo(amazonOrderId, marketplaceIds, body);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MessagingApi.CreateDigitalAccessKeyWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **amazonOrderId** | **string** | An Amazon order identifier. This identifies the order for which a message is sent. |  |
| **marketplaceIds** | [**List&lt;string&gt;**](string.md) | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace. |  |
| **body** | [**CreateDigitalAccessKeyRequest**](CreateDigitalAccessKeyRequest.md) | This contains the message body for a message. |  |

### Return type

[**CreateDigitalAccessKeyResponse**](CreateDigitalAccessKeyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The message was created for the order. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **400** | Request has missing or invalid parameters and cannot be parsed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **403** | Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **404** | The resource specified does not exist. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **413** | The request size exceeded the maximum accepted size. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **415** | The request payload is in an unsupported format. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **429** | The frequency of requests was greater than allowed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **500** | An unexpected condition occurred that prevented the server from fulfilling the request. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **503** | Temporary overloading or maintenance of the server. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createlegaldisclosure"></a>
# **CreateLegalDisclosure**
> CreateLegalDisclosureResponse CreateLegalDisclosure (string amazonOrderId, List<string> marketplaceIds, CreateLegalDisclosureRequest body)



Sends a critical message that contains documents that a seller is legally obligated to provide to the buyer. This message should only be used to deliver documents that are required by law.  **Usage Plan:**  | Rate (requests per second) | Burst | | - -- - | - -- - | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using software.amzn.spapi.Api.messaging.v1;
using software.amzn.spapi.Client;
using software.amzn.spapi.Model.messaging.v1;

namespace Example
{
    public class CreateLegalDisclosureExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://sellingpartnerapi-na.amazon.com";
            var apiInstance = new MessagingApi(config);
            var amazonOrderId = "amazonOrderId_example";  // string | An Amazon order identifier. This identifies the order for which a message is sent.
            var marketplaceIds = new List<string>(); // List<string> | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
            var body = new CreateLegalDisclosureRequest(); // CreateLegalDisclosureRequest | This contains the message body for a message.

            try
            {
                CreateLegalDisclosureResponse result = apiInstance.CreateLegalDisclosure(amazonOrderId, marketplaceIds, body);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MessagingApi.CreateLegalDisclosure: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateLegalDisclosureWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<CreateLegalDisclosureResponse> response = apiInstance.CreateLegalDisclosureWithHttpInfo(amazonOrderId, marketplaceIds, body);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MessagingApi.CreateLegalDisclosureWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **amazonOrderId** | **string** | An Amazon order identifier. This identifies the order for which a message is sent. |  |
| **marketplaceIds** | [**List&lt;string&gt;**](string.md) | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace. |  |
| **body** | [**CreateLegalDisclosureRequest**](CreateLegalDisclosureRequest.md) | This contains the message body for a message. |  |

### Return type

[**CreateLegalDisclosureResponse**](CreateLegalDisclosureResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The legal disclosure message was created for the order. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **400** | Request has missing or invalid parameters and cannot be parsed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **403** | Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **404** | The resource specified does not exist. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **413** | The request size exceeded the maximum accepted size. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **415** | The request payload is in an unsupported format. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **429** | The frequency of requests was greater than allowed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **500** | An unexpected condition occurred that prevented the server from fulfilling the request. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **503** | Temporary overloading or maintenance of the server. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createnegativefeedbackremoval"></a>
# **CreateNegativeFeedbackRemoval**
> CreateNegativeFeedbackRemovalResponse CreateNegativeFeedbackRemoval (string amazonOrderId, List<string> marketplaceIds)



Sends a non-critical message that asks a buyer to remove their negative feedback. This message should only be sent after the seller has resolved the buyer's problem.  **Usage Plan:**  | Rate (requests per second) | Burst | | - -- - | - -- - | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using software.amzn.spapi.Api.messaging.v1;
using software.amzn.spapi.Client;
using software.amzn.spapi.Model.messaging.v1;

namespace Example
{
    public class CreateNegativeFeedbackRemovalExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://sellingpartnerapi-na.amazon.com";
            var apiInstance = new MessagingApi(config);
            var amazonOrderId = "amazonOrderId_example";  // string | An Amazon order identifier. This identifies the order for which a message is sent.
            var marketplaceIds = new List<string>(); // List<string> | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.

            try
            {
                CreateNegativeFeedbackRemovalResponse result = apiInstance.CreateNegativeFeedbackRemoval(amazonOrderId, marketplaceIds);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MessagingApi.CreateNegativeFeedbackRemoval: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateNegativeFeedbackRemovalWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<CreateNegativeFeedbackRemovalResponse> response = apiInstance.CreateNegativeFeedbackRemovalWithHttpInfo(amazonOrderId, marketplaceIds);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MessagingApi.CreateNegativeFeedbackRemovalWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **amazonOrderId** | **string** | An Amazon order identifier. This identifies the order for which a message is sent. |  |
| **marketplaceIds** | [**List&lt;string&gt;**](string.md) | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace. |  |

### Return type

[**CreateNegativeFeedbackRemovalResponse**](CreateNegativeFeedbackRemovalResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The negativeFeedbackRemoval message was created for the order. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **400** | Request has missing or invalid parameters and cannot be parsed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **403** | Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **404** | The resource specified does not exist. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **413** | The request size exceeded the maximum accepted size. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **415** | The request payload is in an unsupported format. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **429** | The frequency of requests was greater than allowed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **500** | An unexpected condition occurred that prevented the server from fulfilling the request. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **503** | Temporary overloading or maintenance of the server. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createunexpectedproblem"></a>
# **CreateUnexpectedProblem**
> CreateUnexpectedProblemResponse CreateUnexpectedProblem (string amazonOrderId, List<string> marketplaceIds, CreateUnexpectedProblemRequest body)



Sends a critical message to a buyer that an unexpected problem was encountered affecting the completion of the order.  **Usage Plan:**  | Rate (requests per second) | Burst | | - -- - | - -- - | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using software.amzn.spapi.Api.messaging.v1;
using software.amzn.spapi.Client;
using software.amzn.spapi.Model.messaging.v1;

namespace Example
{
    public class CreateUnexpectedProblemExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://sellingpartnerapi-na.amazon.com";
            var apiInstance = new MessagingApi(config);
            var amazonOrderId = "amazonOrderId_example";  // string | An Amazon order identifier. This identifies the order for which a message is sent.
            var marketplaceIds = new List<string>(); // List<string> | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
            var body = new CreateUnexpectedProblemRequest(); // CreateUnexpectedProblemRequest | This contains the message body for a message.

            try
            {
                CreateUnexpectedProblemResponse result = apiInstance.CreateUnexpectedProblem(amazonOrderId, marketplaceIds, body);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MessagingApi.CreateUnexpectedProblem: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateUnexpectedProblemWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<CreateUnexpectedProblemResponse> response = apiInstance.CreateUnexpectedProblemWithHttpInfo(amazonOrderId, marketplaceIds, body);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MessagingApi.CreateUnexpectedProblemWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **amazonOrderId** | **string** | An Amazon order identifier. This identifies the order for which a message is sent. |  |
| **marketplaceIds** | [**List&lt;string&gt;**](string.md) | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace. |  |
| **body** | [**CreateUnexpectedProblemRequest**](CreateUnexpectedProblemRequest.md) | This contains the message body for a message. |  |

### Return type

[**CreateUnexpectedProblemResponse**](CreateUnexpectedProblemResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The message was created for the order. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **400** | Request has missing or invalid parameters and cannot be parsed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **403** | Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **404** | The resource specified does not exist. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **413** | The request size exceeded the maximum accepted size. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **415** | The request payload is in an unsupported format. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **429** | The frequency of requests was greater than allowed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **500** | An unexpected condition occurred that prevented the server from fulfilling the request. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **503** | Temporary overloading or maintenance of the server. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createwarranty"></a>
# **CreateWarranty**
> CreateWarrantyResponse CreateWarranty (string amazonOrderId, List<string> marketplaceIds, CreateWarrantyRequest body)



Sends a message to a buyer to provide details about warranty information on a purchase in their order.  **Usage Plan:**  | Rate (requests per second) | Burst | | - -- - | - -- - | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using software.amzn.spapi.Api.messaging.v1;
using software.amzn.spapi.Client;
using software.amzn.spapi.Model.messaging.v1;

namespace Example
{
    public class CreateWarrantyExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://sellingpartnerapi-na.amazon.com";
            var apiInstance = new MessagingApi(config);
            var amazonOrderId = "amazonOrderId_example";  // string | An Amazon order identifier. This identifies the order for which a message is sent.
            var marketplaceIds = new List<string>(); // List<string> | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
            var body = new CreateWarrantyRequest(); // CreateWarrantyRequest | This contains the message body for a message.

            try
            {
                CreateWarrantyResponse result = apiInstance.CreateWarranty(amazonOrderId, marketplaceIds, body);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MessagingApi.CreateWarranty: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateWarrantyWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<CreateWarrantyResponse> response = apiInstance.CreateWarrantyWithHttpInfo(amazonOrderId, marketplaceIds, body);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MessagingApi.CreateWarrantyWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **amazonOrderId** | **string** | An Amazon order identifier. This identifies the order for which a message is sent. |  |
| **marketplaceIds** | [**List&lt;string&gt;**](string.md) | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace. |  |
| **body** | [**CreateWarrantyRequest**](CreateWarrantyRequest.md) | This contains the message body for a message. |  |

### Return type

[**CreateWarrantyResponse**](CreateWarrantyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The message was created for the order. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **400** | Request has missing or invalid parameters and cannot be parsed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **403** | Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **404** | The resource specified does not exist. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **413** | The request size exceeded the maximum accepted size. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **415** | The request payload is in an unsupported format. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **429** | The frequency of requests was greater than allowed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **500** | An unexpected condition occurred that prevented the server from fulfilling the request. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **503** | Temporary overloading or maintenance of the server. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getattributes"></a>
# **GetAttributes**
> GetAttributesResponse GetAttributes (string amazonOrderId, List<string> marketplaceIds)



Returns a response containing attributes related to an order. This includes buyer preferences.  **Usage Plan:**  | Rate (requests per second) | Burst | | - -- - | - -- - | | 1 | 5 |

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using software.amzn.spapi.Api.messaging.v1;
using software.amzn.spapi.Client;
using software.amzn.spapi.Model.messaging.v1;

namespace Example
{
    public class GetAttributesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://sellingpartnerapi-na.amazon.com";
            var apiInstance = new MessagingApi(config);
            var amazonOrderId = "amazonOrderId_example";  // string | An Amazon order identifier. This identifies the order for which a message is sent.
            var marketplaceIds = new List<string>(); // List<string> | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.

            try
            {
                GetAttributesResponse result = apiInstance.GetAttributes(amazonOrderId, marketplaceIds);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MessagingApi.GetAttributes: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetAttributesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<GetAttributesResponse> response = apiInstance.GetAttributesWithHttpInfo(amazonOrderId, marketplaceIds);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MessagingApi.GetAttributesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **amazonOrderId** | **string** | An Amazon order identifier. This identifies the order for which a message is sent. |  |
| **marketplaceIds** | [**List&lt;string&gt;**](string.md) | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace. |  |

### Return type

[**GetAttributesResponse**](GetAttributesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Response has successfully been returned. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **400** | Request has missing or invalid parameters and cannot be parsed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **403** | Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **404** | The resource specified does not exist. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **413** | The request size exceeded the maximum accepted size. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **415** | The request payload is in an unsupported format. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **429** | The frequency of requests was greater than allowed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **500** | An unexpected condition occurred that prevented the server from fulfilling the request. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **503** | Temporary overloading or maintenance of the server. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getmessagingactionsfororder"></a>
# **GetMessagingActionsForOrder**
> GetMessagingActionsForOrderResponse GetMessagingActionsForOrder (string amazonOrderId, List<string> marketplaceIds)



Returns a list of message types that are available for an order that you specify. A message type is represented by an actions object, which contains a path and query parameter(s). You can use the path and parameter(s) to call an operation that sends a message.  **Usage Plan:**  | Rate (requests per second) | Burst | | - -- - | - -- - | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using software.amzn.spapi.Api.messaging.v1;
using software.amzn.spapi.Client;
using software.amzn.spapi.Model.messaging.v1;

namespace Example
{
    public class GetMessagingActionsForOrderExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://sellingpartnerapi-na.amazon.com";
            var apiInstance = new MessagingApi(config);
            var amazonOrderId = "amazonOrderId_example";  // string | An Amazon order identifier. This specifies the order for which you want a list of available message types.
            var marketplaceIds = new List<string>(); // List<string> | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.

            try
            {
                GetMessagingActionsForOrderResponse result = apiInstance.GetMessagingActionsForOrder(amazonOrderId, marketplaceIds);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MessagingApi.GetMessagingActionsForOrder: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetMessagingActionsForOrderWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<GetMessagingActionsForOrderResponse> response = apiInstance.GetMessagingActionsForOrderWithHttpInfo(amazonOrderId, marketplaceIds);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MessagingApi.GetMessagingActionsForOrderWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **amazonOrderId** | **string** | An Amazon order identifier. This specifies the order for which you want a list of available message types. |  |
| **marketplaceIds** | [**List&lt;string&gt;**](string.md) | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace. |  |

### Return type

[**GetMessagingActionsForOrderResponse**](GetMessagingActionsForOrderResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns hypermedia links under the _links.actions key that specify which messaging actions are allowed for the order. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **400** | Request has missing or invalid parameters and cannot be parsed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **403** | Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **404** | The resource specified does not exist. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **413** | The request size exceeded the maximum accepted size. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **415** | The request payload is in an unsupported format. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **429** | The frequency of requests was greater than allowed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **500** | An unexpected condition occurred that prevented the server from fulfilling the request. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **503** | Temporary overloading or maintenance of the server. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="sendinvoice"></a>
# **SendInvoice**
> InvoiceResponse SendInvoice (string amazonOrderId, List<string> marketplaceIds, InvoiceRequest body)



Sends a message providing the buyer an invoice

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using software.amzn.spapi.Api.messaging.v1;
using software.amzn.spapi.Client;
using software.amzn.spapi.Model.messaging.v1;

namespace Example
{
    public class SendInvoiceExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://sellingpartnerapi-na.amazon.com";
            var apiInstance = new MessagingApi(config);
            var amazonOrderId = "amazonOrderId_example";  // string | An Amazon order identifier. This identifies the order for which a message is sent.
            var marketplaceIds = new List<string>(); // List<string> | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
            var body = new InvoiceRequest(); // InvoiceRequest | This contains the message body for a message.

            try
            {
                InvoiceResponse result = apiInstance.SendInvoice(amazonOrderId, marketplaceIds, body);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MessagingApi.SendInvoice: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SendInvoiceWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<InvoiceResponse> response = apiInstance.SendInvoiceWithHttpInfo(amazonOrderId, marketplaceIds, body);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MessagingApi.SendInvoiceWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **amazonOrderId** | **string** | An Amazon order identifier. This identifies the order for which a message is sent. |  |
| **marketplaceIds** | [**List&lt;string&gt;**](string.md) | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace. |  |
| **body** | [**InvoiceRequest**](InvoiceRequest.md) | This contains the message body for a message. |  |

### Return type

[**InvoiceResponse**](InvoiceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The message was created for the order. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **400** | Request has missing or invalid parameters and cannot be parsed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **403** | 403 can be caused for reasons like Access Denied, Unauthorized, Expired Token, Invalid Signature or Resource Not Found. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **404** | The resource specified does not exist. |  * x-amzn-RequestId - Unique request reference identifier. <br>  * x-amzn-RateLimit-Limit - Your rate limit (requests per second) for this operation. <br>  |
| **413** | The request size exceeded the maximum accepted size. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **415** | The entity of the request is in a format not supported by the requested resource. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **429** | The frequency of requests was greater than allowed. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **500** | Encountered an unexpected condition which prevented the server from fulfilling the request. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |
| **503** | Temporary overloading or maintenance of the server. |  * x-amzn-RequestId - Unique request reference identifier. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

