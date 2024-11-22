# MessagingApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confirmCustomizationDetails**](MessagingApi.md#confirmCustomizationDetails) | **POST** /messaging/v1/orders/{amazonOrderId}/messages/confirmCustomizationDetails | 
[**createAmazonMotors**](MessagingApi.md#createAmazonMotors) | **POST** /messaging/v1/orders/{amazonOrderId}/messages/amazonMotors | 
[**createConfirmDeliveryDetails**](MessagingApi.md#createConfirmDeliveryDetails) | **POST** /messaging/v1/orders/{amazonOrderId}/messages/confirmDeliveryDetails | 
[**createConfirmOrderDetails**](MessagingApi.md#createConfirmOrderDetails) | **POST** /messaging/v1/orders/{amazonOrderId}/messages/confirmOrderDetails | 
[**createConfirmServiceDetails**](MessagingApi.md#createConfirmServiceDetails) | **POST** /messaging/v1/orders/{amazonOrderId}/messages/confirmServiceDetails | 
[**createDigitalAccessKey**](MessagingApi.md#createDigitalAccessKey) | **POST** /messaging/v1/orders/{amazonOrderId}/messages/digitalAccessKey | 
[**createLegalDisclosure**](MessagingApi.md#createLegalDisclosure) | **POST** /messaging/v1/orders/{amazonOrderId}/messages/legalDisclosure | 
[**createNegativeFeedbackRemoval**](MessagingApi.md#createNegativeFeedbackRemoval) | **POST** /messaging/v1/orders/{amazonOrderId}/messages/negativeFeedbackRemoval | 
[**createUnexpectedProblem**](MessagingApi.md#createUnexpectedProblem) | **POST** /messaging/v1/orders/{amazonOrderId}/messages/unexpectedProblem | 
[**createWarranty**](MessagingApi.md#createWarranty) | **POST** /messaging/v1/orders/{amazonOrderId}/messages/warranty | 
[**getAttributes**](MessagingApi.md#getAttributes) | **GET** /messaging/v1/orders/{amazonOrderId}/attributes | 
[**getMessagingActionsForOrder**](MessagingApi.md#getMessagingActionsForOrder) | **GET** /messaging/v1/orders/{amazonOrderId} | 
[**sendInvoice**](MessagingApi.md#sendInvoice) | **POST** /messaging/v1/orders/{amazonOrderId}/messages/invoice | 

<a name="confirmCustomizationDetails"></a>
# **confirmCustomizationDetails**
> CreateConfirmCustomizationDetailsResponse confirmCustomizationDetails(body, marketplaceIds, amazonOrderId)



Sends a message asking a buyer to provide or verify customization details such as name spelling, images, initials, etc.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.MessagingApi;


MessagingApi apiInstance = new MessagingApi();
CreateConfirmCustomizationDetailsRequest body = new CreateConfirmCustomizationDetailsRequest(); // CreateConfirmCustomizationDetailsRequest | 
List<String> marketplaceIds = Arrays.asList("marketplaceIds_example"); // List<String> | A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
String amazonOrderId = "amazonOrderId_example"; // String | An Amazon order identifier. This specifies the order for which a message is sent.
try {
    CreateConfirmCustomizationDetailsResponse result = apiInstance.confirmCustomizationDetails(body, marketplaceIds, amazonOrderId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling MessagingApi#confirmCustomizationDetails");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateConfirmCustomizationDetailsRequest**](CreateConfirmCustomizationDetailsRequest.md)|  |
 **marketplaceIds** | [**List&lt;String&gt;**](String.md)| A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified. |
 **amazonOrderId** | **String**| An Amazon order identifier. This specifies the order for which a message is sent. |

### Return type

[**CreateConfirmCustomizationDetailsResponse**](CreateConfirmCustomizationDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/hal+json

<a name="createAmazonMotors"></a>
# **createAmazonMotors**
> CreateAmazonMotorsResponse createAmazonMotors(body, marketplaceIds, amazonOrderId)



Sends a message to a buyer to provide details about an Amazon Motors order. This message can only be sent by Amazon Motors sellers.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.MessagingApi;


MessagingApi apiInstance = new MessagingApi();
CreateAmazonMotorsRequest body = new CreateAmazonMotorsRequest(); // CreateAmazonMotorsRequest | 
List<String> marketplaceIds = Arrays.asList("marketplaceIds_example"); // List<String> | A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
String amazonOrderId = "amazonOrderId_example"; // String | An Amazon order identifier. This specifies the order for which a message is sent.
try {
    CreateAmazonMotorsResponse result = apiInstance.createAmazonMotors(body, marketplaceIds, amazonOrderId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling MessagingApi#createAmazonMotors");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateAmazonMotorsRequest**](CreateAmazonMotorsRequest.md)|  |
 **marketplaceIds** | [**List&lt;String&gt;**](String.md)| A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified. |
 **amazonOrderId** | **String**| An Amazon order identifier. This specifies the order for which a message is sent. |

### Return type

[**CreateAmazonMotorsResponse**](CreateAmazonMotorsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/hal+json

<a name="createConfirmDeliveryDetails"></a>
# **createConfirmDeliveryDetails**
> CreateConfirmDeliveryDetailsResponse createConfirmDeliveryDetails(body, marketplaceIds, amazonOrderId)



Sends a message to a buyer to arrange a delivery or to confirm contact information for making a delivery.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.MessagingApi;


MessagingApi apiInstance = new MessagingApi();
CreateConfirmDeliveryDetailsRequest body = new CreateConfirmDeliveryDetailsRequest(); // CreateConfirmDeliveryDetailsRequest | 
List<String> marketplaceIds = Arrays.asList("marketplaceIds_example"); // List<String> | A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
String amazonOrderId = "amazonOrderId_example"; // String | An Amazon order identifier. This specifies the order for which a message is sent.
try {
    CreateConfirmDeliveryDetailsResponse result = apiInstance.createConfirmDeliveryDetails(body, marketplaceIds, amazonOrderId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling MessagingApi#createConfirmDeliveryDetails");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateConfirmDeliveryDetailsRequest**](CreateConfirmDeliveryDetailsRequest.md)|  |
 **marketplaceIds** | [**List&lt;String&gt;**](String.md)| A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified. |
 **amazonOrderId** | **String**| An Amazon order identifier. This specifies the order for which a message is sent. |

### Return type

[**CreateConfirmDeliveryDetailsResponse**](CreateConfirmDeliveryDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/hal+json

<a name="createConfirmOrderDetails"></a>
# **createConfirmOrderDetails**
> CreateConfirmOrderDetailsResponse createConfirmOrderDetails(body, marketplaceIds, amazonOrderId)



Sends a message to ask a buyer an order-related question prior to shipping their order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.MessagingApi;


MessagingApi apiInstance = new MessagingApi();
CreateConfirmOrderDetailsRequest body = new CreateConfirmOrderDetailsRequest(); // CreateConfirmOrderDetailsRequest | 
List<String> marketplaceIds = Arrays.asList("marketplaceIds_example"); // List<String> | A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
String amazonOrderId = "amazonOrderId_example"; // String | An Amazon order identifier. This specifies the order for which a message is sent.
try {
    CreateConfirmOrderDetailsResponse result = apiInstance.createConfirmOrderDetails(body, marketplaceIds, amazonOrderId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling MessagingApi#createConfirmOrderDetails");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateConfirmOrderDetailsRequest**](CreateConfirmOrderDetailsRequest.md)|  |
 **marketplaceIds** | [**List&lt;String&gt;**](String.md)| A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified. |
 **amazonOrderId** | **String**| An Amazon order identifier. This specifies the order for which a message is sent. |

### Return type

[**CreateConfirmOrderDetailsResponse**](CreateConfirmOrderDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/hal+json

<a name="createConfirmServiceDetails"></a>
# **createConfirmServiceDetails**
> CreateConfirmServiceDetailsResponse createConfirmServiceDetails(body, marketplaceIds, amazonOrderId)



Sends a message to contact a Home Service customer to arrange a service call or to gather information prior to a service call.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.MessagingApi;


MessagingApi apiInstance = new MessagingApi();
CreateConfirmServiceDetailsRequest body = new CreateConfirmServiceDetailsRequest(); // CreateConfirmServiceDetailsRequest | 
List<String> marketplaceIds = Arrays.asList("marketplaceIds_example"); // List<String> | A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
String amazonOrderId = "amazonOrderId_example"; // String | An Amazon order identifier. This specifies the order for which a message is sent.
try {
    CreateConfirmServiceDetailsResponse result = apiInstance.createConfirmServiceDetails(body, marketplaceIds, amazonOrderId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling MessagingApi#createConfirmServiceDetails");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateConfirmServiceDetailsRequest**](CreateConfirmServiceDetailsRequest.md)|  |
 **marketplaceIds** | [**List&lt;String&gt;**](String.md)| A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified. |
 **amazonOrderId** | **String**| An Amazon order identifier. This specifies the order for which a message is sent. |

### Return type

[**CreateConfirmServiceDetailsResponse**](CreateConfirmServiceDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/hal+json

<a name="createDigitalAccessKey"></a>
# **createDigitalAccessKey**
> CreateDigitalAccessKeyResponse createDigitalAccessKey(body, marketplaceIds, amazonOrderId)



Sends a message to a buyer to share a digital access key needed to utilize digital content in their order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.MessagingApi;


MessagingApi apiInstance = new MessagingApi();
CreateDigitalAccessKeyRequest body = new CreateDigitalAccessKeyRequest(); // CreateDigitalAccessKeyRequest | 
List<String> marketplaceIds = Arrays.asList("marketplaceIds_example"); // List<String> | A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
String amazonOrderId = "amazonOrderId_example"; // String | An Amazon order identifier. This specifies the order for which a message is sent.
try {
    CreateDigitalAccessKeyResponse result = apiInstance.createDigitalAccessKey(body, marketplaceIds, amazonOrderId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling MessagingApi#createDigitalAccessKey");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateDigitalAccessKeyRequest**](CreateDigitalAccessKeyRequest.md)|  |
 **marketplaceIds** | [**List&lt;String&gt;**](String.md)| A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified. |
 **amazonOrderId** | **String**| An Amazon order identifier. This specifies the order for which a message is sent. |

### Return type

[**CreateDigitalAccessKeyResponse**](CreateDigitalAccessKeyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/hal+json

<a name="createLegalDisclosure"></a>
# **createLegalDisclosure**
> CreateLegalDisclosureResponse createLegalDisclosure(body, marketplaceIds, amazonOrderId)



Sends a critical message that contains documents that a seller is legally obligated to provide to the buyer. This message should only be used to deliver documents that are required by law.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.MessagingApi;


MessagingApi apiInstance = new MessagingApi();
CreateLegalDisclosureRequest body = new CreateLegalDisclosureRequest(); // CreateLegalDisclosureRequest | 
List<String> marketplaceIds = Arrays.asList("marketplaceIds_example"); // List<String> | A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
String amazonOrderId = "amazonOrderId_example"; // String | An Amazon order identifier. This specifies the order for which a message is sent.
try {
    CreateLegalDisclosureResponse result = apiInstance.createLegalDisclosure(body, marketplaceIds, amazonOrderId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling MessagingApi#createLegalDisclosure");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateLegalDisclosureRequest**](CreateLegalDisclosureRequest.md)|  |
 **marketplaceIds** | [**List&lt;String&gt;**](String.md)| A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified. |
 **amazonOrderId** | **String**| An Amazon order identifier. This specifies the order for which a message is sent. |

### Return type

[**CreateLegalDisclosureResponse**](CreateLegalDisclosureResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/hal+json

<a name="createNegativeFeedbackRemoval"></a>
# **createNegativeFeedbackRemoval**
> CreateNegativeFeedbackRemovalResponse createNegativeFeedbackRemoval(amazonOrderId, marketplaceIds)



Sends a non-critical message that asks a buyer to remove their negative feedback. This message should only be sent after the seller has resolved the buyer&#x27;s problem.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.MessagingApi;


MessagingApi apiInstance = new MessagingApi();
String amazonOrderId = "amazonOrderId_example"; // String | An Amazon order identifier. This specifies the order for which a message is sent.
List<String> marketplaceIds = Arrays.asList("marketplaceIds_example"); // List<String> | A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
try {
    CreateNegativeFeedbackRemovalResponse result = apiInstance.createNegativeFeedbackRemoval(amazonOrderId, marketplaceIds);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling MessagingApi#createNegativeFeedbackRemoval");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **amazonOrderId** | **String**| An Amazon order identifier. This specifies the order for which a message is sent. |
 **marketplaceIds** | [**List&lt;String&gt;**](String.md)| A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified. |

### Return type

[**CreateNegativeFeedbackRemovalResponse**](CreateNegativeFeedbackRemovalResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

<a name="createUnexpectedProblem"></a>
# **createUnexpectedProblem**
> CreateUnexpectedProblemResponse createUnexpectedProblem(body, marketplaceIds, amazonOrderId)



Sends a critical message to a buyer that an unexpected problem was encountered affecting the completion of the order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.MessagingApi;


MessagingApi apiInstance = new MessagingApi();
CreateUnexpectedProblemRequest body = new CreateUnexpectedProblemRequest(); // CreateUnexpectedProblemRequest | 
List<String> marketplaceIds = Arrays.asList("marketplaceIds_example"); // List<String> | A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
String amazonOrderId = "amazonOrderId_example"; // String | An Amazon order identifier. This specifies the order for which a message is sent.
try {
    CreateUnexpectedProblemResponse result = apiInstance.createUnexpectedProblem(body, marketplaceIds, amazonOrderId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling MessagingApi#createUnexpectedProblem");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateUnexpectedProblemRequest**](CreateUnexpectedProblemRequest.md)|  |
 **marketplaceIds** | [**List&lt;String&gt;**](String.md)| A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified. |
 **amazonOrderId** | **String**| An Amazon order identifier. This specifies the order for which a message is sent. |

### Return type

[**CreateUnexpectedProblemResponse**](CreateUnexpectedProblemResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/hal+json

<a name="createWarranty"></a>
# **createWarranty**
> CreateWarrantyResponse createWarranty(body, marketplaceIds, amazonOrderId)



Sends a message to a buyer to provide details about warranty information on a purchase in their order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.MessagingApi;


MessagingApi apiInstance = new MessagingApi();
CreateWarrantyRequest body = new CreateWarrantyRequest(); // CreateWarrantyRequest | 
List<String> marketplaceIds = Arrays.asList("marketplaceIds_example"); // List<String> | A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
String amazonOrderId = "amazonOrderId_example"; // String | An Amazon order identifier. This specifies the order for which a message is sent.
try {
    CreateWarrantyResponse result = apiInstance.createWarranty(body, marketplaceIds, amazonOrderId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling MessagingApi#createWarranty");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateWarrantyRequest**](CreateWarrantyRequest.md)|  |
 **marketplaceIds** | [**List&lt;String&gt;**](String.md)| A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified. |
 **amazonOrderId** | **String**| An Amazon order identifier. This specifies the order for which a message is sent. |

### Return type

[**CreateWarrantyResponse**](CreateWarrantyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/hal+json

<a name="getAttributes"></a>
# **getAttributes**
> GetAttributesResponse getAttributes(amazonOrderId, marketplaceIds)



Returns a response containing attributes related to an order. This includes buyer preferences.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.MessagingApi;


MessagingApi apiInstance = new MessagingApi();
String amazonOrderId = "amazonOrderId_example"; // String | An Amazon order identifier. This specifies the order for which a message is sent.
List<String> marketplaceIds = Arrays.asList("marketplaceIds_example"); // List<String> | A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
try {
    GetAttributesResponse result = apiInstance.getAttributes(amazonOrderId, marketplaceIds);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling MessagingApi#getAttributes");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **amazonOrderId** | **String**| An Amazon order identifier. This specifies the order for which a message is sent. |
 **marketplaceIds** | [**List&lt;String&gt;**](String.md)| A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified. |

### Return type

[**GetAttributesResponse**](GetAttributesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

<a name="getMessagingActionsForOrder"></a>
# **getMessagingActionsForOrder**
> GetMessagingActionsForOrderResponse getMessagingActionsForOrder(amazonOrderId, marketplaceIds)



Returns a list of message types that are available for an order that you specify. A message type is represented by an actions object, which contains a path and query parameter(s). You can use the path and parameter(s) to call an operation that sends a message.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.MessagingApi;


MessagingApi apiInstance = new MessagingApi();
String amazonOrderId = "amazonOrderId_example"; // String | An Amazon order identifier. This specifies the order for which you want a list of available message types.
List<String> marketplaceIds = Arrays.asList("marketplaceIds_example"); // List<String> | A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
try {
    GetMessagingActionsForOrderResponse result = apiInstance.getMessagingActionsForOrder(amazonOrderId, marketplaceIds);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling MessagingApi#getMessagingActionsForOrder");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **amazonOrderId** | **String**| An Amazon order identifier. This specifies the order for which you want a list of available message types. |
 **marketplaceIds** | [**List&lt;String&gt;**](String.md)| A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified. |

### Return type

[**GetMessagingActionsForOrderResponse**](GetMessagingActionsForOrderResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

<a name="sendInvoice"></a>
# **sendInvoice**
> InvoiceResponse sendInvoice(body, marketplaceIds, amazonOrderId)



Sends a message providing the buyer an invoice

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.MessagingApi;


MessagingApi apiInstance = new MessagingApi();
InvoiceRequest body = new InvoiceRequest(); // InvoiceRequest | 
List<String> marketplaceIds = Arrays.asList("marketplaceIds_example"); // List<String> | A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
String amazonOrderId = "amazonOrderId_example"; // String | An Amazon order identifier. This specifies the order for which a message is sent.
try {
    InvoiceResponse result = apiInstance.sendInvoice(body, marketplaceIds, amazonOrderId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling MessagingApi#sendInvoice");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InvoiceRequest**](InvoiceRequest.md)|  |
 **marketplaceIds** | [**List&lt;String&gt;**](String.md)| A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified. |
 **amazonOrderId** | **String**| An Amazon order identifier. This specifies the order for which a message is sent. |

### Return type

[**InvoiceResponse**](InvoiceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/hal+json

