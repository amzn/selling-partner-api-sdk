# SellingPartnerApiForNotifications.NotificationsApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDestination**](NotificationsApi.md#createDestination) | **POST** /notifications/v1/destinations | 
[**createSubscription**](NotificationsApi.md#createSubscription) | **POST** /notifications/v1/subscriptions/{notificationType} | 
[**deleteDestination**](NotificationsApi.md#deleteDestination) | **DELETE** /notifications/v1/destinations/{destinationId} | 
[**deleteSubscriptionById**](NotificationsApi.md#deleteSubscriptionById) | **DELETE** /notifications/v1/subscriptions/{notificationType}/{subscriptionId} | 
[**getDestination**](NotificationsApi.md#getDestination) | **GET** /notifications/v1/destinations/{destinationId} | 
[**getDestinations**](NotificationsApi.md#getDestinations) | **GET** /notifications/v1/destinations | 
[**getSubscription**](NotificationsApi.md#getSubscription) | **GET** /notifications/v1/subscriptions/{notificationType} | 
[**getSubscriptionById**](NotificationsApi.md#getSubscriptionById) | **GET** /notifications/v1/subscriptions/{notificationType}/{subscriptionId} | 



## createDestination

> CreateDestinationResponse createDestination(body)



Creates a destination resource to receive notifications. The &#x60;createDestination&#x60; operation is grantless. For more information, refer to [Grantless operations](https://developer-docs.amazon.com/sp-api/docs/grantless-operations).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForNotifications from 'selling_partner_api_for_notifications';

let apiInstance = new SellingPartnerApiForNotifications.NotificationsApi();
let body = new SellingPartnerApiForNotifications.CreateDestinationRequest(); // CreateDestinationRequest | 
apiInstance.createDestination(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateDestinationRequest**](CreateDestinationRequest.md)|  | 

### Return type

[**CreateDestinationResponse**](CreateDestinationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, Successful Response


## createSubscription

> CreateSubscriptionResponse createSubscription(notificationType, body)



Creates a subscription for the specified notification type to be delivered to the specified destination. Before you can subscribe, you must first create the destination by calling the &#x60;createDestination&#x60; operation. In cases where the specified notification type supports multiple payload versions, you can utilize this API to subscribe to a different payload version if you already have an existing subscription for a different payload version.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForNotifications from 'selling_partner_api_for_notifications';

let apiInstance = new SellingPartnerApiForNotifications.NotificationsApi();
let notificationType = "notificationType_example"; // String | The type of notification.   For more information about notification types, refer to [Notification Type Values](https://developer-docs.amazon.com/sp-api/docs/notification-type-values).
let body = new SellingPartnerApiForNotifications.CreateSubscriptionRequest(); // CreateSubscriptionRequest | 
apiInstance.createSubscription(notificationType, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notificationType** | **String**| The type of notification.   For more information about notification types, refer to [Notification Type Values](https://developer-docs.amazon.com/sp-api/docs/notification-type-values). | 
 **body** | [**CreateSubscriptionRequest**](CreateSubscriptionRequest.md)|  | 

### Return type

[**CreateSubscriptionResponse**](CreateSubscriptionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, Successful Response


## deleteDestination

> DeleteDestinationResponse deleteDestination(destinationId)



Deletes the destination that you specify. The &#x60;deleteDestination&#x60; operation is grantless. For more information, refer to [Grantless operations](https://developer-docs.amazon.com/sp-api/docs/grantless-operations).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForNotifications from 'selling_partner_api_for_notifications';

let apiInstance = new SellingPartnerApiForNotifications.NotificationsApi();
let destinationId = "destinationId_example"; // String | The identifier for the destination that you want to delete.
apiInstance.deleteDestination(destinationId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **destinationId** | **String**| The identifier for the destination that you want to delete. | 

### Return type

[**DeleteDestinationResponse**](DeleteDestinationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, Successful Response


## deleteSubscriptionById

> DeleteSubscriptionByIdResponse deleteSubscriptionById(subscriptionId, notificationType)



Deletes the subscription indicated by the subscription identifier and notification type that you specify. The subscription identifier can be for any subscription associated with your application. After you successfully call this operation, notifications will stop being sent for the associated subscription. The &#x60;deleteSubscriptionById&#x60; operation is grantless. For more information, refer to [Grantless operations](https://developer-docs.amazon.com/sp-api/docs/grantless-operations).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForNotifications from 'selling_partner_api_for_notifications';

let apiInstance = new SellingPartnerApiForNotifications.NotificationsApi();
let subscriptionId = "subscriptionId_example"; // String | The identifier for the subscription that you want to delete.
let notificationType = "notificationType_example"; // String | The type of notification.   For more information about notification types, refer to [Notification Type Values](https://developer-docs.amazon.com/sp-api/docs/notification-type-values).
apiInstance.deleteSubscriptionById(subscriptionId, notificationType).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**| The identifier for the subscription that you want to delete. | 
 **notificationType** | **String**| The type of notification.   For more information about notification types, refer to [Notification Type Values](https://developer-docs.amazon.com/sp-api/docs/notification-type-values). | 

### Return type

[**DeleteSubscriptionByIdResponse**](DeleteSubscriptionByIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, Successful Operation Response


## getDestination

> GetDestinationResponse getDestination(destinationId)



Returns information about the destination that you specify. The &#x60;getDestination&#x60; operation is grantless. For more information, refer to [Grantless operations](https://developer-docs.amazon.com/sp-api/docs/grantless-operations).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForNotifications from 'selling_partner_api_for_notifications';

let apiInstance = new SellingPartnerApiForNotifications.NotificationsApi();
let destinationId = "destinationId_example"; // String | The identifier generated when you created the destination.
apiInstance.getDestination(destinationId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **destinationId** | **String**| The identifier generated when you created the destination. | 

### Return type

[**GetDestinationResponse**](GetDestinationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, Successful Response


## getDestinations

> GetDestinationsResponse getDestinations()



Returns information about all destinations. The &#x60;getDestinations&#x60; operation is grantless. For more information, refer to [Grantless operations](https://developer-docs.amazon.com/sp-api/docs/grantless-operations).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForNotifications from 'selling_partner_api_for_notifications';

let apiInstance = new SellingPartnerApiForNotifications.NotificationsApi();
apiInstance.getDestinations().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetDestinationsResponse**](GetDestinationsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, Successful Response


## getSubscription

> GetSubscriptionResponse getSubscription(notificationType, opts)



Returns information about subscription of the specified notification type and payload version. &#x60;payloadVersion&#x60; is an optional parameter. When &#x60;payloadVersion&#x60; is not provided, it will return latest payload version subscription&#39;s information. You can use this API to get subscription information when you do not have a subscription identifier.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForNotifications from 'selling_partner_api_for_notifications';

let apiInstance = new SellingPartnerApiForNotifications.NotificationsApi();
let notificationType = "notificationType_example"; // String | The type of notification.   For more information about notification types, refer to [Notification Type Values](https://developer-docs.amazon.com/sp-api/docs/notification-type-values).
let opts = {
  'payloadVersion': "payloadVersion_example" // String | The version of the payload object to be used in the notification.
};
apiInstance.getSubscription(notificationType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notificationType** | **String**| The type of notification.   For more information about notification types, refer to [Notification Type Values](https://developer-docs.amazon.com/sp-api/docs/notification-type-values). | 
 **payloadVersion** | **String**| The version of the payload object to be used in the notification. | [optional] 

### Return type

[**GetSubscriptionResponse**](GetSubscriptionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, Successful Response


## getSubscriptionById

> GetSubscriptionByIdResponse getSubscriptionById(subscriptionId, notificationType)



Returns information about a subscription for the specified notification type. The &#x60;getSubscriptionById&#x60; operation is grantless. For more information, refer to [Grantless operations](https://developer-docs.amazon.com/sp-api/docs/grantless-operations).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForNotifications from 'selling_partner_api_for_notifications';

let apiInstance = new SellingPartnerApiForNotifications.NotificationsApi();
let subscriptionId = "subscriptionId_example"; // String | The identifier for the subscription that you want to get.
let notificationType = "notificationType_example"; // String | The type of notification.   For more information about notification types, refer to [Notification Type Values](https://developer-docs.amazon.com/sp-api/docs/notification-type-values).
apiInstance.getSubscriptionById(subscriptionId, notificationType).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**| The identifier for the subscription that you want to get. | 
 **notificationType** | **String**| The type of notification.   For more information about notification types, refer to [Notification Type Values](https://developer-docs.amazon.com/sp-api/docs/notification-type-values). | 

### Return type

[**GetSubscriptionByIdResponse**](GetSubscriptionByIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, Successful Response

