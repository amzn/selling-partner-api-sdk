# TheSellingPartnerApiForThirdPartyApplicationIntegrations.AppIntegrationsApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNotification**](AppIntegrationsApi.md#createNotification) | **POST** /appIntegrations/2024-04-01/notifications | 
[**deleteNotifications**](AppIntegrationsApi.md#deleteNotifications) | **POST** /appIntegrations/2024-04-01/notifications/deletion | 
[**recordActionFeedback**](AppIntegrationsApi.md#recordActionFeedback) | **POST** /appIntegrations/2024-04-01/notifications/{notificationId}/feedback | 



## createNotification

> CreateNotificationResponse createNotification(body)



Create a notification for sellers in Seller Central.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Sellers whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForThirdPartyApplicationIntegrations from 'the_selling_partner_api_for_third_party_application_integrations_';

let apiInstance = new TheSellingPartnerApiForThirdPartyApplicationIntegrations.AppIntegrationsApi();
let body = new TheSellingPartnerApiForThirdPartyApplicationIntegrations.CreateNotificationRequest(); // CreateNotificationRequest | The request body for the `createNotification` operation.
apiInstance.createNotification(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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


## deleteNotifications

> deleteNotifications(body)



Remove your application&#39;s notifications from the Appstore notifications dashboard.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Sellers whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForThirdPartyApplicationIntegrations from 'the_selling_partner_api_for_third_party_application_integrations_';

let apiInstance = new TheSellingPartnerApiForThirdPartyApplicationIntegrations.AppIntegrationsApi();
let body = new TheSellingPartnerApiForThirdPartyApplicationIntegrations.DeleteNotificationsRequest(); // DeleteNotificationsRequest | The request body for the `deleteNotifications` operation.
apiInstance.deleteNotifications(body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

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


## recordActionFeedback

> recordActionFeedback(notificationId, body)



Records the seller&#39;s response to a notification.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Sellers whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForThirdPartyApplicationIntegrations from 'the_selling_partner_api_for_third_party_application_integrations_';

let apiInstance = new TheSellingPartnerApiForThirdPartyApplicationIntegrations.AppIntegrationsApi();
let notificationId = "notificationId_example"; // String | A `notificationId` uniquely identifies a notification.
let body = new TheSellingPartnerApiForThirdPartyApplicationIntegrations.RecordActionFeedbackRequest(); // RecordActionFeedbackRequest | The request body for the `recordActionFeedback` operation.
apiInstance.recordActionFeedback(notificationId, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notificationId** | **String**| A &#x60;notificationId&#x60; uniquely identifies a notification. | 
 **body** | [**RecordActionFeedbackRequest**](RecordActionFeedbackRequest.md)| The request body for the &#x60;recordActionFeedback&#x60; operation. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

