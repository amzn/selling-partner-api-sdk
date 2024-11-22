# AppIntegrationsApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNotification**](AppIntegrationsApi.md#createNotification) | **POST** /appIntegrations/2024-04-01/notifications | 
[**deleteNotifications**](AppIntegrationsApi.md#deleteNotifications) | **POST** /appIntegrations/2024-04-01/notifications/deletion | 
[**recordActionFeedback**](AppIntegrationsApi.md#recordActionFeedback) | **POST** /appIntegrations/2024-04-01/notifications/{notificationId}/feedback | 

<a name="createNotification"></a>
# **createNotification**
> CreateNotificationResponse createNotification(body)



Create a notification for sellers in Seller Central.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Sellers whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.AppIntegrationsApi;


AppIntegrationsApi apiInstance = new AppIntegrationsApi();
CreateNotificationRequest body = new CreateNotificationRequest(); // CreateNotificationRequest | The request body for the `createNotification` operation.
try {
    CreateNotificationResponse result = apiInstance.createNotification(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AppIntegrationsApi#createNotification");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateNotificationRequest**](CreateNotificationRequest.md)| The request body for the &#x60;createNotification&#x60; operation. |

### Return type

[**CreateNotificationResponse**](CreateNotificationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNotifications"></a>
# **deleteNotifications**
> deleteNotifications(body)



Remove your application&#x27;s notifications from the Appstore notifications dashboard.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Sellers whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.AppIntegrationsApi;


AppIntegrationsApi apiInstance = new AppIntegrationsApi();
DeleteNotificationsRequest body = new DeleteNotificationsRequest(); // DeleteNotificationsRequest | The request body for the `deleteNotifications` operation.
try {
    apiInstance.deleteNotifications(body);
} catch (ApiException e) {
    System.err.println("Exception when calling AppIntegrationsApi#deleteNotifications");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DeleteNotificationsRequest**](DeleteNotificationsRequest.md)| The request body for the &#x60;deleteNotifications&#x60; operation. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="recordActionFeedback"></a>
# **recordActionFeedback**
> recordActionFeedback(body, notificationId)



Records the seller&#x27;s response to a notification.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Sellers whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.AppIntegrationsApi;


AppIntegrationsApi apiInstance = new AppIntegrationsApi();
RecordActionFeedbackRequest body = new RecordActionFeedbackRequest(); // RecordActionFeedbackRequest | The request body for the `recordActionFeedback` operation.
String notificationId = "notificationId_example"; // String | A `notificationId` uniquely identifies a notification.
try {
    apiInstance.recordActionFeedback(body, notificationId);
} catch (ApiException e) {
    System.err.println("Exception when calling AppIntegrationsApi#recordActionFeedback");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordActionFeedbackRequest**](RecordActionFeedbackRequest.md)| The request body for the &#x60;recordActionFeedback&#x60; operation. |
 **notificationId** | **String**| A &#x60;notificationId&#x60; uniquely identifies a notification. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

