# SellingPartnerApiForMessaging.MessagingApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

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



## confirmCustomizationDetails

> CreateConfirmCustomizationDetailsResponse confirmCustomizationDetails(amazonOrderId, marketplaceIds, body)



Sends a message asking a buyer to provide or verify customization details such as name spelling, images, initials, etc.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForMessaging from 'selling_partner_api_for_messaging';

let apiInstance = new SellingPartnerApiForMessaging.MessagingApi();
let amazonOrderId = "amazonOrderId_example"; // String | An Amazon order identifier. This identifies the order for which a message is sent.
let marketplaceIds = ["null"]; // [String] | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
let body = new SellingPartnerApiForMessaging.CreateConfirmCustomizationDetailsRequest(); // CreateConfirmCustomizationDetailsRequest | This contains the message body for a message.
apiInstance.confirmCustomizationDetails(amazonOrderId, marketplaceIds, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **amazonOrderId** | **String**| An Amazon order identifier. This identifies the order for which a message is sent. | 
 **marketplaceIds** | [**[String]**](String.md)| A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace. | 
 **body** | [**CreateConfirmCustomizationDetailsRequest**](CreateConfirmCustomizationDetailsRequest.md)| This contains the message body for a message. | 

### Return type

[**CreateConfirmCustomizationDetailsResponse**](CreateConfirmCustomizationDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/hal+json


## createAmazonMotors

> CreateAmazonMotorsResponse createAmazonMotors(amazonOrderId, marketplaceIds, body)



Sends a message to a buyer to provide details about an Amazon Motors order. This message can only be sent by Amazon Motors sellers.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForMessaging from 'selling_partner_api_for_messaging';

let apiInstance = new SellingPartnerApiForMessaging.MessagingApi();
let amazonOrderId = "amazonOrderId_example"; // String | An Amazon order identifier. This identifies the order for which a message is sent.
let marketplaceIds = ["null"]; // [String] | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
let body = new SellingPartnerApiForMessaging.CreateAmazonMotorsRequest(); // CreateAmazonMotorsRequest | This contains the message body for a message.
apiInstance.createAmazonMotors(amazonOrderId, marketplaceIds, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **amazonOrderId** | **String**| An Amazon order identifier. This identifies the order for which a message is sent. | 
 **marketplaceIds** | [**[String]**](String.md)| A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace. | 
 **body** | [**CreateAmazonMotorsRequest**](CreateAmazonMotorsRequest.md)| This contains the message body for a message. | 

### Return type

[**CreateAmazonMotorsResponse**](CreateAmazonMotorsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/hal+json


## createConfirmDeliveryDetails

> CreateConfirmDeliveryDetailsResponse createConfirmDeliveryDetails(amazonOrderId, marketplaceIds, body)



Sends a message to a buyer to arrange a delivery or to confirm contact information for making a delivery.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForMessaging from 'selling_partner_api_for_messaging';

let apiInstance = new SellingPartnerApiForMessaging.MessagingApi();
let amazonOrderId = "amazonOrderId_example"; // String | An Amazon order identifier. This identifies the order for which a message is sent.
let marketplaceIds = ["null"]; // [String] | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
let body = new SellingPartnerApiForMessaging.CreateConfirmDeliveryDetailsRequest(); // CreateConfirmDeliveryDetailsRequest | This contains the message body for a message.
apiInstance.createConfirmDeliveryDetails(amazonOrderId, marketplaceIds, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **amazonOrderId** | **String**| An Amazon order identifier. This identifies the order for which a message is sent. | 
 **marketplaceIds** | [**[String]**](String.md)| A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace. | 
 **body** | [**CreateConfirmDeliveryDetailsRequest**](CreateConfirmDeliveryDetailsRequest.md)| This contains the message body for a message. | 

### Return type

[**CreateConfirmDeliveryDetailsResponse**](CreateConfirmDeliveryDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/hal+json


## createConfirmOrderDetails

> CreateConfirmOrderDetailsResponse createConfirmOrderDetails(amazonOrderId, marketplaceIds, body)



Sends a message to ask a buyer an order-related question prior to shipping their order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForMessaging from 'selling_partner_api_for_messaging';

let apiInstance = new SellingPartnerApiForMessaging.MessagingApi();
let amazonOrderId = "amazonOrderId_example"; // String | An Amazon order identifier. This identifies the order for which a message is sent.
let marketplaceIds = ["null"]; // [String] | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
let body = new SellingPartnerApiForMessaging.CreateConfirmOrderDetailsRequest(); // CreateConfirmOrderDetailsRequest | This contains the message body for a message.
apiInstance.createConfirmOrderDetails(amazonOrderId, marketplaceIds, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **amazonOrderId** | **String**| An Amazon order identifier. This identifies the order for which a message is sent. | 
 **marketplaceIds** | [**[String]**](String.md)| A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace. | 
 **body** | [**CreateConfirmOrderDetailsRequest**](CreateConfirmOrderDetailsRequest.md)| This contains the message body for a message. | 

### Return type

[**CreateConfirmOrderDetailsResponse**](CreateConfirmOrderDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/hal+json


## createConfirmServiceDetails

> CreateConfirmServiceDetailsResponse createConfirmServiceDetails(amazonOrderId, marketplaceIds, body)



Sends a message to contact a Home Service customer to arrange a service call or to gather information prior to a service call.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForMessaging from 'selling_partner_api_for_messaging';

let apiInstance = new SellingPartnerApiForMessaging.MessagingApi();
let amazonOrderId = "amazonOrderId_example"; // String | An Amazon order identifier. This identifies the order for which a message is sent.
let marketplaceIds = ["null"]; // [String] | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
let body = new SellingPartnerApiForMessaging.CreateConfirmServiceDetailsRequest(); // CreateConfirmServiceDetailsRequest | This contains the message body for a message.
apiInstance.createConfirmServiceDetails(amazonOrderId, marketplaceIds, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **amazonOrderId** | **String**| An Amazon order identifier. This identifies the order for which a message is sent. | 
 **marketplaceIds** | [**[String]**](String.md)| A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace. | 
 **body** | [**CreateConfirmServiceDetailsRequest**](CreateConfirmServiceDetailsRequest.md)| This contains the message body for a message. | 

### Return type

[**CreateConfirmServiceDetailsResponse**](CreateConfirmServiceDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/hal+json


## createDigitalAccessKey

> CreateDigitalAccessKeyResponse createDigitalAccessKey(amazonOrderId, marketplaceIds, body)



Sends a buyer a message to share a digital access key that is required to utilize digital content in their order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForMessaging from 'selling_partner_api_for_messaging';

let apiInstance = new SellingPartnerApiForMessaging.MessagingApi();
let amazonOrderId = "amazonOrderId_example"; // String | An Amazon order identifier. This identifies the order for which a message is sent.
let marketplaceIds = ["null"]; // [String] | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
let body = new SellingPartnerApiForMessaging.CreateDigitalAccessKeyRequest(); // CreateDigitalAccessKeyRequest | This contains the message body for a message.
apiInstance.createDigitalAccessKey(amazonOrderId, marketplaceIds, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **amazonOrderId** | **String**| An Amazon order identifier. This identifies the order for which a message is sent. | 
 **marketplaceIds** | [**[String]**](String.md)| A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace. | 
 **body** | [**CreateDigitalAccessKeyRequest**](CreateDigitalAccessKeyRequest.md)| This contains the message body for a message. | 

### Return type

[**CreateDigitalAccessKeyResponse**](CreateDigitalAccessKeyResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/hal+json


## createLegalDisclosure

> CreateLegalDisclosureResponse createLegalDisclosure(amazonOrderId, marketplaceIds, body)



Sends a critical message that contains documents that a seller is legally obligated to provide to the buyer. This message should only be used to deliver documents that are required by law.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForMessaging from 'selling_partner_api_for_messaging';

let apiInstance = new SellingPartnerApiForMessaging.MessagingApi();
let amazonOrderId = "amazonOrderId_example"; // String | An Amazon order identifier. This identifies the order for which a message is sent.
let marketplaceIds = ["null"]; // [String] | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
let body = new SellingPartnerApiForMessaging.CreateLegalDisclosureRequest(); // CreateLegalDisclosureRequest | This contains the message body for a message.
apiInstance.createLegalDisclosure(amazonOrderId, marketplaceIds, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **amazonOrderId** | **String**| An Amazon order identifier. This identifies the order for which a message is sent. | 
 **marketplaceIds** | [**[String]**](String.md)| A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace. | 
 **body** | [**CreateLegalDisclosureRequest**](CreateLegalDisclosureRequest.md)| This contains the message body for a message. | 

### Return type

[**CreateLegalDisclosureResponse**](CreateLegalDisclosureResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/hal+json


## createNegativeFeedbackRemoval

> CreateNegativeFeedbackRemovalResponse createNegativeFeedbackRemoval(amazonOrderId, marketplaceIds)



Sends a non-critical message that asks a buyer to remove their negative feedback. This message should only be sent after the seller has resolved the buyer&#39;s problem.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForMessaging from 'selling_partner_api_for_messaging';

let apiInstance = new SellingPartnerApiForMessaging.MessagingApi();
let amazonOrderId = "amazonOrderId_example"; // String | An Amazon order identifier. This identifies the order for which a message is sent.
let marketplaceIds = ["null"]; // [String] | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
apiInstance.createNegativeFeedbackRemoval(amazonOrderId, marketplaceIds).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **amazonOrderId** | **String**| An Amazon order identifier. This identifies the order for which a message is sent. | 
 **marketplaceIds** | [**[String]**](String.md)| A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace. | 

### Return type

[**CreateNegativeFeedbackRemovalResponse**](CreateNegativeFeedbackRemovalResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json


## createUnexpectedProblem

> CreateUnexpectedProblemResponse createUnexpectedProblem(amazonOrderId, marketplaceIds, body)



Sends a critical message to a buyer that an unexpected problem was encountered affecting the completion of the order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForMessaging from 'selling_partner_api_for_messaging';

let apiInstance = new SellingPartnerApiForMessaging.MessagingApi();
let amazonOrderId = "amazonOrderId_example"; // String | An Amazon order identifier. This identifies the order for which a message is sent.
let marketplaceIds = ["null"]; // [String] | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
let body = new SellingPartnerApiForMessaging.CreateUnexpectedProblemRequest(); // CreateUnexpectedProblemRequest | This contains the message body for a message.
apiInstance.createUnexpectedProblem(amazonOrderId, marketplaceIds, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **amazonOrderId** | **String**| An Amazon order identifier. This identifies the order for which a message is sent. | 
 **marketplaceIds** | [**[String]**](String.md)| A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace. | 
 **body** | [**CreateUnexpectedProblemRequest**](CreateUnexpectedProblemRequest.md)| This contains the message body for a message. | 

### Return type

[**CreateUnexpectedProblemResponse**](CreateUnexpectedProblemResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/hal+json


## createWarranty

> CreateWarrantyResponse createWarranty(amazonOrderId, marketplaceIds, body)



Sends a message to a buyer to provide details about warranty information on a purchase in their order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForMessaging from 'selling_partner_api_for_messaging';

let apiInstance = new SellingPartnerApiForMessaging.MessagingApi();
let amazonOrderId = "amazonOrderId_example"; // String | An Amazon order identifier. This identifies the order for which a message is sent.
let marketplaceIds = ["null"]; // [String] | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
let body = new SellingPartnerApiForMessaging.CreateWarrantyRequest(); // CreateWarrantyRequest | This contains the message body for a message.
apiInstance.createWarranty(amazonOrderId, marketplaceIds, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **amazonOrderId** | **String**| An Amazon order identifier. This identifies the order for which a message is sent. | 
 **marketplaceIds** | [**[String]**](String.md)| A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace. | 
 **body** | [**CreateWarrantyRequest**](CreateWarrantyRequest.md)| This contains the message body for a message. | 

### Return type

[**CreateWarrantyResponse**](CreateWarrantyResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/hal+json


## getAttributes

> GetAttributesResponse getAttributes(amazonOrderId, marketplaceIds)



Returns a response containing attributes related to an order. This includes buyer preferences.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |

### Example

```javascript
import SellingPartnerApiForMessaging from 'selling_partner_api_for_messaging';

let apiInstance = new SellingPartnerApiForMessaging.MessagingApi();
let amazonOrderId = "amazonOrderId_example"; // String | An Amazon order identifier. This identifies the order for which a message is sent.
let marketplaceIds = ["null"]; // [String] | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
apiInstance.getAttributes(amazonOrderId, marketplaceIds).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **amazonOrderId** | **String**| An Amazon order identifier. This identifies the order for which a message is sent. | 
 **marketplaceIds** | [**[String]**](String.md)| A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace. | 

### Return type

[**GetAttributesResponse**](GetAttributesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json


## getMessagingActionsForOrder

> GetMessagingActionsForOrderResponse getMessagingActionsForOrder(amazonOrderId, marketplaceIds)



Returns a list of message types that are available for an order that you specify. A message type is represented by an actions object, which contains a path and query parameter(s). You can use the path and parameter(s) to call an operation that sends a message.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForMessaging from 'selling_partner_api_for_messaging';

let apiInstance = new SellingPartnerApiForMessaging.MessagingApi();
let amazonOrderId = "amazonOrderId_example"; // String | An Amazon order identifier. This specifies the order for which you want a list of available message types.
let marketplaceIds = ["null"]; // [String] | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
apiInstance.getMessagingActionsForOrder(amazonOrderId, marketplaceIds).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **amazonOrderId** | **String**| An Amazon order identifier. This specifies the order for which you want a list of available message types. | 
 **marketplaceIds** | [**[String]**](String.md)| A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace. | 

### Return type

[**GetMessagingActionsForOrderResponse**](GetMessagingActionsForOrderResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json


## sendInvoice

> InvoiceResponse sendInvoice(amazonOrderId, marketplaceIds, body)



Sends a message providing the buyer an invoice

### Example

```javascript
import SellingPartnerApiForMessaging from 'selling_partner_api_for_messaging';

let apiInstance = new SellingPartnerApiForMessaging.MessagingApi();
let amazonOrderId = "amazonOrderId_example"; // String | An Amazon order identifier. This identifies the order for which a message is sent.
let marketplaceIds = ["null"]; // [String] | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace.
let body = new SellingPartnerApiForMessaging.InvoiceRequest(); // InvoiceRequest | This contains the message body for a message.
apiInstance.sendInvoice(amazonOrderId, marketplaceIds, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **amazonOrderId** | **String**| An Amazon order identifier. This identifies the order for which a message is sent. | 
 **marketplaceIds** | [**[String]**](String.md)| A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one marketplace. | 
 **body** | [**InvoiceRequest**](InvoiceRequest.md)| This contains the message body for a message. | 

### Return type

[**InvoiceResponse**](InvoiceResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/hal+json

