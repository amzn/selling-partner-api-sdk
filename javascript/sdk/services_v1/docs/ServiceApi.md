# SellingPartnerApiForServices.ServiceApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAppointmentForServiceJobByServiceJobId**](ServiceApi.md#addAppointmentForServiceJobByServiceJobId) | **POST** /service/v1/serviceJobs/{serviceJobId}/appointments | 
[**assignAppointmentResources**](ServiceApi.md#assignAppointmentResources) | **PUT** /service/v1/serviceJobs/{serviceJobId}/appointments/{appointmentId}/resources | 
[**cancelReservation**](ServiceApi.md#cancelReservation) | **DELETE** /service/v1/reservation/{reservationId} | 
[**cancelServiceJobByServiceJobId**](ServiceApi.md#cancelServiceJobByServiceJobId) | **PUT** /service/v1/serviceJobs/{serviceJobId}/cancellations | 
[**completeServiceJobByServiceJobId**](ServiceApi.md#completeServiceJobByServiceJobId) | **PUT** /service/v1/serviceJobs/{serviceJobId}/completions | 
[**createReservation**](ServiceApi.md#createReservation) | **POST** /service/v1/reservation | 
[**createServiceDocumentUploadDestination**](ServiceApi.md#createServiceDocumentUploadDestination) | **POST** /service/v1/documents | 
[**getAppointmentSlots**](ServiceApi.md#getAppointmentSlots) | **GET** /service/v1/appointmentSlots | 
[**getAppointmmentSlotsByJobId**](ServiceApi.md#getAppointmmentSlotsByJobId) | **GET** /service/v1/serviceJobs/{serviceJobId}/appointmentSlots | 
[**getFixedSlotCapacity**](ServiceApi.md#getFixedSlotCapacity) | **POST** /service/v1/serviceResources/{resourceId}/capacity/fixed | 
[**getRangeSlotCapacity**](ServiceApi.md#getRangeSlotCapacity) | **POST** /service/v1/serviceResources/{resourceId}/capacity/range | 
[**getServiceJobByServiceJobId**](ServiceApi.md#getServiceJobByServiceJobId) | **GET** /service/v1/serviceJobs/{serviceJobId} | 
[**getServiceJobs**](ServiceApi.md#getServiceJobs) | **GET** /service/v1/serviceJobs | 
[**rescheduleAppointmentForServiceJobByServiceJobId**](ServiceApi.md#rescheduleAppointmentForServiceJobByServiceJobId) | **POST** /service/v1/serviceJobs/{serviceJobId}/appointments/{appointmentId} | 
[**setAppointmentFulfillmentData**](ServiceApi.md#setAppointmentFulfillmentData) | **PUT** /service/v1/serviceJobs/{serviceJobId}/appointments/{appointmentId}/fulfillment | 
[**updateReservation**](ServiceApi.md#updateReservation) | **PUT** /service/v1/reservation/{reservationId} | 
[**updateSchedule**](ServiceApi.md#updateSchedule) | **PUT** /service/v1/serviceResources/{resourceId}/schedules | 



## addAppointmentForServiceJobByServiceJobId

> SetAppointmentResponse addAppointmentForServiceJobByServiceJobId(serviceJobId, body)



Adds an appointment to the service job indicated by the service job identifier specified.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForServices from 'selling_partner_api_for_services';

let apiInstance = new SellingPartnerApiForServices.ServiceApi();
let serviceJobId = "serviceJobId_example"; // String | An Amazon defined service job identifier.
let body = new SellingPartnerApiForServices.AddAppointmentRequest(); // AddAppointmentRequest | Add appointment operation input details.
apiInstance.addAppointmentForServiceJobByServiceJobId(serviceJobId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceJobId** | **String**| An Amazon defined service job identifier. | 
 **body** | [**AddAppointmentRequest**](AddAppointmentRequest.md)| Add appointment operation input details. | 

### Return type

[**SetAppointmentResponse**](SetAppointmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## assignAppointmentResources

> AssignAppointmentResourcesResponse assignAppointmentResources(serviceJobId, appointmentId, body)



Assigns new resource(s) or overwrite/update the existing one(s) to a service job appointment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForServices from 'selling_partner_api_for_services';

let apiInstance = new SellingPartnerApiForServices.ServiceApi();
let serviceJobId = "serviceJobId_example"; // String | An Amazon-defined service job identifier. Get this value by calling the `getServiceJobs` operation of the Services API.
let appointmentId = "appointmentId_example"; // String | An Amazon-defined identifier of active service job appointment.
let body = new SellingPartnerApiForServices.AssignAppointmentResourcesRequest(); // AssignAppointmentResourcesRequest | 
apiInstance.assignAppointmentResources(serviceJobId, appointmentId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceJobId** | **String**| An Amazon-defined service job identifier. Get this value by calling the &#x60;getServiceJobs&#x60; operation of the Services API. | 
 **appointmentId** | **String**| An Amazon-defined identifier of active service job appointment. | 
 **body** | [**AssignAppointmentResourcesRequest**](AssignAppointmentResourcesRequest.md)|  | 

### Return type

[**AssignAppointmentResourcesResponse**](AssignAppointmentResourcesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cancelReservation

> CancelReservationResponse cancelReservation(reservationId, marketplaceIds)



Cancel a reservation.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForServices from 'selling_partner_api_for_services';

let apiInstance = new SellingPartnerApiForServices.ServiceApi();
let reservationId = "reservationId_example"; // String | Reservation Identifier
let marketplaceIds = ["null"]; // [String] | An identifier for the marketplace in which the resource operates.
apiInstance.cancelReservation(reservationId, marketplaceIds).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservationId** | **String**| Reservation Identifier | 
 **marketplaceIds** | [**[String]**](String.md)| An identifier for the marketplace in which the resource operates. | 

### Return type

[**CancelReservationResponse**](CancelReservationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cancelServiceJobByServiceJobId

> CancelServiceJobByServiceJobIdResponse cancelServiceJobByServiceJobId(serviceJobId, cancellationReasonCode)



Cancels the service job indicated by the service job identifier specified.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForServices from 'selling_partner_api_for_services';

let apiInstance = new SellingPartnerApiForServices.ServiceApi();
let serviceJobId = "serviceJobId_example"; // String | An Amazon defined service job identifier.
let cancellationReasonCode = "cancellationReasonCode_example"; // String | A cancel reason code that specifies the reason for cancelling a service job.
apiInstance.cancelServiceJobByServiceJobId(serviceJobId, cancellationReasonCode).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceJobId** | **String**| An Amazon defined service job identifier. | 
 **cancellationReasonCode** | **String**| A cancel reason code that specifies the reason for cancelling a service job. | 

### Return type

[**CancelServiceJobByServiceJobIdResponse**](CancelServiceJobByServiceJobIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## completeServiceJobByServiceJobId

> CompleteServiceJobByServiceJobIdResponse completeServiceJobByServiceJobId(serviceJobId)



Completes the service job indicated by the service job identifier specified.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForServices from 'selling_partner_api_for_services';

let apiInstance = new SellingPartnerApiForServices.ServiceApi();
let serviceJobId = "serviceJobId_example"; // String | An Amazon defined service job identifier.
apiInstance.completeServiceJobByServiceJobId(serviceJobId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceJobId** | **String**| An Amazon defined service job identifier. | 

### Return type

[**CompleteServiceJobByServiceJobIdResponse**](CompleteServiceJobByServiceJobIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createReservation

> CreateReservationResponse createReservation(marketplaceIds, body)



Create a reservation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForServices from 'selling_partner_api_for_services';

let apiInstance = new SellingPartnerApiForServices.ServiceApi();
let marketplaceIds = ["null"]; // [String] | An identifier for the marketplace in which the resource operates.
let body = new SellingPartnerApiForServices.CreateReservationRequest(); // CreateReservationRequest | Reservation details
apiInstance.createReservation(marketplaceIds, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceIds** | [**[String]**](String.md)| An identifier for the marketplace in which the resource operates. | 
 **body** | [**CreateReservationRequest**](CreateReservationRequest.md)| Reservation details | 

### Return type

[**CreateReservationResponse**](CreateReservationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createServiceDocumentUploadDestination

> CreateServiceDocumentUploadDestination createServiceDocumentUploadDestination(body)



Creates an upload destination.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForServices from 'selling_partner_api_for_services';

let apiInstance = new SellingPartnerApiForServices.ServiceApi();
let body = new SellingPartnerApiForServices.ServiceUploadDocument(); // ServiceUploadDocument | Upload document operation input details.
apiInstance.createServiceDocumentUploadDestination(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ServiceUploadDocument**](ServiceUploadDocument.md)| Upload document operation input details. | 

### Return type

[**CreateServiceDocumentUploadDestination**](CreateServiceDocumentUploadDestination.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAppointmentSlots

> GetAppointmentSlotsResponse getAppointmentSlots(asin, storeId, marketplaceIds, opts)



Gets appointment slots as per the service context specified.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 20 | 40 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForServices from 'selling_partner_api_for_services';

let apiInstance = new SellingPartnerApiForServices.ServiceApi();
let asin = "asin_example"; // String | ASIN associated with the service.
let storeId = "storeId_example"; // String | Store identifier defining the region scope to retrive appointment slots.
let marketplaceIds = ["null"]; // [String] | An identifier for the marketplace for which appointment slots are queried
let opts = {
  'startTime': "startTime_example", // String | A time from which the appointment slots will be retrieved. The specified time must be in ISO 8601 format. If `startTime` is provided, `endTime` should also be provided. Default value is as per business configuration.
  'endTime': "endTime_example" // String | A time up to which the appointment slots will be retrieved. The specified time must be in ISO 8601 format. If `endTime` is provided, `startTime` should also be provided. Default value is as per business configuration. Maximum range of appointment slots can be 90 days.
};
apiInstance.getAppointmentSlots(asin, storeId, marketplaceIds, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asin** | **String**| ASIN associated with the service. | 
 **storeId** | **String**| Store identifier defining the region scope to retrive appointment slots. | 
 **marketplaceIds** | [**[String]**](String.md)| An identifier for the marketplace for which appointment slots are queried | 
 **startTime** | **String**| A time from which the appointment slots will be retrieved. The specified time must be in ISO 8601 format. If &#x60;startTime&#x60; is provided, &#x60;endTime&#x60; should also be provided. Default value is as per business configuration. | [optional] 
 **endTime** | **String**| A time up to which the appointment slots will be retrieved. The specified time must be in ISO 8601 format. If &#x60;endTime&#x60; is provided, &#x60;startTime&#x60; should also be provided. Default value is as per business configuration. Maximum range of appointment slots can be 90 days. | [optional] 

### Return type

[**GetAppointmentSlotsResponse**](GetAppointmentSlotsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAppointmmentSlotsByJobId

> GetAppointmentSlotsResponse getAppointmmentSlotsByJobId(serviceJobId, marketplaceIds, opts)



Gets appointment slots for the service associated with the service job id specified.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForServices from 'selling_partner_api_for_services';

let apiInstance = new SellingPartnerApiForServices.ServiceApi();
let serviceJobId = "serviceJobId_example"; // String | A service job identifier to retrive appointment slots for associated service.
let marketplaceIds = ["null"]; // [String] | An identifier for the marketplace in which the resource operates.
let opts = {
  'startTime': "startTime_example", // String | A time from which the appointment slots will be retrieved. The specified time must be in ISO 8601 format. If `startTime` is provided, `endTime` should also be provided. Default value is as per business configuration.
  'endTime': "endTime_example" // String | A time up to which the appointment slots will be retrieved. The specified time must be in ISO 8601 format. If `endTime` is provided, `startTime` should also be provided. Default value is as per business configuration. Maximum range of appointment slots can be 90 days.
};
apiInstance.getAppointmmentSlotsByJobId(serviceJobId, marketplaceIds, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceJobId** | **String**| A service job identifier to retrive appointment slots for associated service. | 
 **marketplaceIds** | [**[String]**](String.md)| An identifier for the marketplace in which the resource operates. | 
 **startTime** | **String**| A time from which the appointment slots will be retrieved. The specified time must be in ISO 8601 format. If &#x60;startTime&#x60; is provided, &#x60;endTime&#x60; should also be provided. Default value is as per business configuration. | [optional] 
 **endTime** | **String**| A time up to which the appointment slots will be retrieved. The specified time must be in ISO 8601 format. If &#x60;endTime&#x60; is provided, &#x60;startTime&#x60; should also be provided. Default value is as per business configuration. Maximum range of appointment slots can be 90 days. | [optional] 

### Return type

[**GetAppointmentSlotsResponse**](GetAppointmentSlotsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFixedSlotCapacity

> FixedSlotCapacity getFixedSlotCapacity(resourceId, marketplaceIds, body, opts)



Provides capacity in fixed-size slots.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForServices from 'selling_partner_api_for_services';

let apiInstance = new SellingPartnerApiForServices.ServiceApi();
let resourceId = "resourceId_example"; // String | Resource Identifier.
let marketplaceIds = ["null"]; // [String] | An identifier for the marketplace in which the resource operates.
let body = new SellingPartnerApiForServices.FixedSlotCapacityQuery(); // FixedSlotCapacityQuery | Request body.
let opts = {
  'nextPageToken': "nextPageToken_example" // String | Next page token returned in the response of your previous request.
};
apiInstance.getFixedSlotCapacity(resourceId, marketplaceIds, body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceId** | **String**| Resource Identifier. | 
 **marketplaceIds** | [**[String]**](String.md)| An identifier for the marketplace in which the resource operates. | 
 **body** | [**FixedSlotCapacityQuery**](FixedSlotCapacityQuery.md)| Request body. | 
 **nextPageToken** | **String**| Next page token returned in the response of your previous request. | [optional] 

### Return type

[**FixedSlotCapacity**](FixedSlotCapacity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getRangeSlotCapacity

> RangeSlotCapacity getRangeSlotCapacity(resourceId, marketplaceIds, body, opts)



Provides capacity slots in a format similar to availability records.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForServices from 'selling_partner_api_for_services';

let apiInstance = new SellingPartnerApiForServices.ServiceApi();
let resourceId = "resourceId_example"; // String | Resource Identifier.
let marketplaceIds = ["null"]; // [String] | An identifier for the marketplace in which the resource operates.
let body = new SellingPartnerApiForServices.RangeSlotCapacityQuery(); // RangeSlotCapacityQuery | Request body.
let opts = {
  'nextPageToken': "nextPageToken_example" // String | Next page token returned in the response of your previous request.
};
apiInstance.getRangeSlotCapacity(resourceId, marketplaceIds, body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceId** | **String**| Resource Identifier. | 
 **marketplaceIds** | [**[String]**](String.md)| An identifier for the marketplace in which the resource operates. | 
 **body** | [**RangeSlotCapacityQuery**](RangeSlotCapacityQuery.md)| Request body. | 
 **nextPageToken** | **String**| Next page token returned in the response of your previous request. | [optional] 

### Return type

[**RangeSlotCapacity**](RangeSlotCapacity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getServiceJobByServiceJobId

> GetServiceJobByServiceJobIdResponse getServiceJobByServiceJobId(serviceJobId)



Gets details of service job indicated by the provided &#x60;serviceJobID&#x60;.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 20 | 40 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForServices from 'selling_partner_api_for_services';

let apiInstance = new SellingPartnerApiForServices.ServiceApi();
let serviceJobId = "serviceJobId_example"; // String | A service job identifier.
apiInstance.getServiceJobByServiceJobId(serviceJobId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceJobId** | **String**| A service job identifier. | 

### Return type

[**GetServiceJobByServiceJobIdResponse**](GetServiceJobByServiceJobIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getServiceJobs

> GetServiceJobsResponse getServiceJobs(marketplaceIds, opts)



Gets service job details for the specified filter query.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 40 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForServices from 'selling_partner_api_for_services';

let apiInstance = new SellingPartnerApiForServices.ServiceApi();
let marketplaceIds = ["null"]; // [String] | Used to select jobs that were placed in the specified marketplaces.
let opts = {
  'serviceOrderIds': ["null"], // [String] | List of service order ids for the query you want to perform.Max values supported 20.
  'serviceJobStatus': ["null"], // [String] | A list of one or more job status by which to filter the list of jobs.
  'pageToken': "pageToken_example", // String | String returned in the response of your previous request.
  'pageSize': 20, // Number | A non-negative integer that indicates the maximum number of jobs to return in the list, Value must be 1 - 20. Default 20.
  'sortField': "sortField_example", // String | Sort fields on which you want to sort the output.
  'sortOrder': "sortOrder_example", // String | Sort order for the query you want to perform.
  'createdAfter': "createdAfter_example", // String | A date used for selecting jobs created at or after a specified time. Must be in ISO 8601 format. Required if `LastUpdatedAfter` is not specified. Specifying both `CreatedAfter` and `LastUpdatedAfter` returns an error.
  'createdBefore': "createdBefore_example", // String | A date used for selecting jobs created at or before a specified time. Must be in ISO 8601 format.
  'lastUpdatedAfter': "lastUpdatedAfter_example", // String | A date used for selecting jobs updated at or after a specified time. Must be in ISO 8601 format. Required if `createdAfter` is not specified. Specifying both `CreatedAfter` and `LastUpdatedAfter` returns an error.
  'lastUpdatedBefore': "lastUpdatedBefore_example", // String | A date used for selecting jobs updated at or before a specified time. Must be in ISO 8601 format.
  'scheduleStartDate': "scheduleStartDate_example", // String | A date used for filtering jobs schedules at or after a specified time. Must be in ISO 8601 format. Schedule end date should not be earlier than schedule start date.
  'scheduleEndDate': "scheduleEndDate_example", // String | A date used for filtering jobs schedules at or before a specified time. Must be in ISO 8601 format. Schedule end date should not be earlier than schedule start date.
  'asins': ["null"], // [String] | List of Amazon Standard Identification Numbers (ASIN) of the items. Max values supported is 20.
  'requiredSkills': ["null"], // [String] | A defined set of related knowledge, skills, experience, tools, materials, and work processes common to service delivery for a set of products and/or service scenarios. Max values supported is 20.
  'storeIds': ["null"] // [String] | List of Amazon-defined identifiers for the region scope. Max values supported is 50.
};
apiInstance.getServiceJobs(marketplaceIds, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceIds** | [**[String]**](String.md)| Used to select jobs that were placed in the specified marketplaces. | 
 **serviceOrderIds** | [**[String]**](String.md)| List of service order ids for the query you want to perform.Max values supported 20. | [optional] 
 **serviceJobStatus** | [**[String]**](String.md)| A list of one or more job status by which to filter the list of jobs. | [optional] 
 **pageToken** | **String**| String returned in the response of your previous request. | [optional] 
 **pageSize** | **Number**| A non-negative integer that indicates the maximum number of jobs to return in the list, Value must be 1 - 20. Default 20. | [optional] [default to 20]
 **sortField** | **String**| Sort fields on which you want to sort the output. | [optional] 
 **sortOrder** | **String**| Sort order for the query you want to perform. | [optional] 
 **createdAfter** | **String**| A date used for selecting jobs created at or after a specified time. Must be in ISO 8601 format. Required if &#x60;LastUpdatedAfter&#x60; is not specified. Specifying both &#x60;CreatedAfter&#x60; and &#x60;LastUpdatedAfter&#x60; returns an error. | [optional] 
 **createdBefore** | **String**| A date used for selecting jobs created at or before a specified time. Must be in ISO 8601 format. | [optional] 
 **lastUpdatedAfter** | **String**| A date used for selecting jobs updated at or after a specified time. Must be in ISO 8601 format. Required if &#x60;createdAfter&#x60; is not specified. Specifying both &#x60;CreatedAfter&#x60; and &#x60;LastUpdatedAfter&#x60; returns an error. | [optional] 
 **lastUpdatedBefore** | **String**| A date used for selecting jobs updated at or before a specified time. Must be in ISO 8601 format. | [optional] 
 **scheduleStartDate** | **String**| A date used for filtering jobs schedules at or after a specified time. Must be in ISO 8601 format. Schedule end date should not be earlier than schedule start date. | [optional] 
 **scheduleEndDate** | **String**| A date used for filtering jobs schedules at or before a specified time. Must be in ISO 8601 format. Schedule end date should not be earlier than schedule start date. | [optional] 
 **asins** | [**[String]**](String.md)| List of Amazon Standard Identification Numbers (ASIN) of the items. Max values supported is 20. | [optional] 
 **requiredSkills** | [**[String]**](String.md)| A defined set of related knowledge, skills, experience, tools, materials, and work processes common to service delivery for a set of products and/or service scenarios. Max values supported is 20. | [optional] 
 **storeIds** | [**[String]**](String.md)| List of Amazon-defined identifiers for the region scope. Max values supported is 50. | [optional] 

### Return type

[**GetServiceJobsResponse**](GetServiceJobsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## rescheduleAppointmentForServiceJobByServiceJobId

> SetAppointmentResponse rescheduleAppointmentForServiceJobByServiceJobId(serviceJobId, appointmentId, body)



Reschedules an appointment for the service job indicated by the service job identifier specified.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForServices from 'selling_partner_api_for_services';

let apiInstance = new SellingPartnerApiForServices.ServiceApi();
let serviceJobId = "serviceJobId_example"; // String | An Amazon defined service job identifier.
let appointmentId = "appointmentId_example"; // String | An existing appointment identifier for the Service Job.
let body = new SellingPartnerApiForServices.RescheduleAppointmentRequest(); // RescheduleAppointmentRequest | Reschedule appointment operation input details.
apiInstance.rescheduleAppointmentForServiceJobByServiceJobId(serviceJobId, appointmentId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceJobId** | **String**| An Amazon defined service job identifier. | 
 **appointmentId** | **String**| An existing appointment identifier for the Service Job. | 
 **body** | [**RescheduleAppointmentRequest**](RescheduleAppointmentRequest.md)| Reschedule appointment operation input details. | 

### Return type

[**SetAppointmentResponse**](SetAppointmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setAppointmentFulfillmentData

> String setAppointmentFulfillmentData(serviceJobId, appointmentId, body)



Updates the appointment fulfillment data related to a given &#x60;jobID&#x60; and &#x60;appointmentID&#x60;.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForServices from 'selling_partner_api_for_services';

let apiInstance = new SellingPartnerApiForServices.ServiceApi();
let serviceJobId = "serviceJobId_example"; // String | An Amazon-defined service job identifier. Get this value by calling the `getServiceJobs` operation of the Services API.
let appointmentId = "appointmentId_example"; // String | An Amazon-defined identifier of active service job appointment.
let body = new SellingPartnerApiForServices.SetAppointmentFulfillmentDataRequest(); // SetAppointmentFulfillmentDataRequest | Appointment fulfillment data collection details.
apiInstance.setAppointmentFulfillmentData(serviceJobId, appointmentId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceJobId** | **String**| An Amazon-defined service job identifier. Get this value by calling the &#x60;getServiceJobs&#x60; operation of the Services API. | 
 **appointmentId** | **String**| An Amazon-defined identifier of active service job appointment. | 
 **body** | [**SetAppointmentFulfillmentDataRequest**](SetAppointmentFulfillmentDataRequest.md)| Appointment fulfillment data collection details. | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateReservation

> UpdateReservationResponse updateReservation(reservationId, marketplaceIds, body)



Update a reservation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForServices from 'selling_partner_api_for_services';

let apiInstance = new SellingPartnerApiForServices.ServiceApi();
let reservationId = "reservationId_example"; // String | Reservation Identifier
let marketplaceIds = ["null"]; // [String] | An identifier for the marketplace in which the resource operates.
let body = new SellingPartnerApiForServices.UpdateReservationRequest(); // UpdateReservationRequest | Reservation details
apiInstance.updateReservation(reservationId, marketplaceIds, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservationId** | **String**| Reservation Identifier | 
 **marketplaceIds** | [**[String]**](String.md)| An identifier for the marketplace in which the resource operates. | 
 **body** | [**UpdateReservationRequest**](UpdateReservationRequest.md)| Reservation details | 

### Return type

[**UpdateReservationResponse**](UpdateReservationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateSchedule

> UpdateScheduleResponse updateSchedule(resourceId, marketplaceIds, body)



Update the schedule of the given resource.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForServices from 'selling_partner_api_for_services';

let apiInstance = new SellingPartnerApiForServices.ServiceApi();
let resourceId = "resourceId_example"; // String | Resource (store) Identifier
let marketplaceIds = ["null"]; // [String] | An identifier for the marketplace in which the resource operates.
let body = new SellingPartnerApiForServices.UpdateScheduleRequest(); // UpdateScheduleRequest | Schedule details
apiInstance.updateSchedule(resourceId, marketplaceIds, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceId** | **String**| Resource (store) Identifier | 
 **marketplaceIds** | [**[String]**](String.md)| An identifier for the marketplace in which the resource operates. | 
 **body** | [**UpdateScheduleRequest**](UpdateScheduleRequest.md)| Schedule details | 

### Return type

[**UpdateScheduleResponse**](UpdateScheduleResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

