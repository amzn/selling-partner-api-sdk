# SellingPartnerApiForReports.ReportsApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelReport**](ReportsApi.md#cancelReport) | **DELETE** /reports/2021-06-30/reports/{reportId} | 
[**cancelReportSchedule**](ReportsApi.md#cancelReportSchedule) | **DELETE** /reports/2021-06-30/schedules/{reportScheduleId} | 
[**createReport**](ReportsApi.md#createReport) | **POST** /reports/2021-06-30/reports | 
[**createReportSchedule**](ReportsApi.md#createReportSchedule) | **POST** /reports/2021-06-30/schedules | 
[**getReport**](ReportsApi.md#getReport) | **GET** /reports/2021-06-30/reports/{reportId} | 
[**getReportDocument**](ReportsApi.md#getReportDocument) | **GET** /reports/2021-06-30/documents/{reportDocumentId} | 
[**getReportSchedule**](ReportsApi.md#getReportSchedule) | **GET** /reports/2021-06-30/schedules/{reportScheduleId} | 
[**getReportSchedules**](ReportsApi.md#getReportSchedules) | **GET** /reports/2021-06-30/schedules | 
[**getReports**](ReportsApi.md#getReports) | **GET** /reports/2021-06-30/reports | 



## cancelReport

> cancelReport(reportId)



Cancels the report that you specify. Only reports with &#x60;processingStatus&#x3D;IN_QUEUE&#x60; can be cancelled. Cancelled reports are returned in subsequent calls to the &#x60;getReport&#x60; and &#x60;getReports&#x60; operations.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForReports from 'selling_partner_api_for_reports';

let apiInstance = new SellingPartnerApiForReports.ReportsApi();
let reportId = "reportId_example"; // String | The identifier for the report. This identifier is unique only in combination with a seller ID.
apiInstance.cancelReport(reportId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportId** | **String**| The identifier for the report. This identifier is unique only in combination with a seller ID. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cancelReportSchedule

> cancelReportSchedule(reportScheduleId)



Cancels the report schedule that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForReports from 'selling_partner_api_for_reports';

let apiInstance = new SellingPartnerApiForReports.ReportsApi();
let reportScheduleId = "reportScheduleId_example"; // String | The identifier for the report schedule. This identifier is unique only in combination with a seller ID.
apiInstance.cancelReportSchedule(reportScheduleId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportScheduleId** | **String**| The identifier for the report schedule. This identifier is unique only in combination with a seller ID. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createReport

> CreateReportResponse createReport(body)



Creates a report.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForReports from 'selling_partner_api_for_reports';

let apiInstance = new SellingPartnerApiForReports.ReportsApi();
let body = new SellingPartnerApiForReports.CreateReportSpecification(); // CreateReportSpecification | Information required to create the report.
apiInstance.createReport(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateReportSpecification**](CreateReportSpecification.md)| Information required to create the report. | 

### Return type

[**CreateReportResponse**](CreateReportResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createReportSchedule

> CreateReportScheduleResponse createReportSchedule(body)



Creates a report schedule. If a report schedule with the same report type and marketplace IDs already exists, it will be cancelled and replaced with this one.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForReports from 'selling_partner_api_for_reports';

let apiInstance = new SellingPartnerApiForReports.ReportsApi();
let body = new SellingPartnerApiForReports.CreateReportScheduleSpecification(); // CreateReportScheduleSpecification | Information required to create the report schedule.
apiInstance.createReportSchedule(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateReportScheduleSpecification**](CreateReportScheduleSpecification.md)| Information required to create the report schedule. | 

### Return type

[**CreateReportScheduleResponse**](CreateReportScheduleResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getReport

> Report getReport(reportId)



Returns report details (including the &#x60;reportDocumentId&#x60;, if available) for the report that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForReports from 'selling_partner_api_for_reports';

let apiInstance = new SellingPartnerApiForReports.ReportsApi();
let reportId = "reportId_example"; // String | The identifier for the report. This identifier is unique only in combination with a seller ID.
apiInstance.getReport(reportId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportId** | **String**| The identifier for the report. This identifier is unique only in combination with a seller ID. | 

### Return type

[**Report**](Report.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReportDocument

> ReportDocument getReportDocument(reportDocumentId)



Returns the information required for retrieving a report document&#39;s contents.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForReports from 'selling_partner_api_for_reports';

let apiInstance = new SellingPartnerApiForReports.ReportsApi();
let reportDocumentId = "reportDocumentId_example"; // String | The identifier for the report document.
apiInstance.getReportDocument(reportDocumentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportDocumentId** | **String**| The identifier for the report document. | 

### Return type

[**ReportDocument**](ReportDocument.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReportSchedule

> ReportSchedule getReportSchedule(reportScheduleId)



Returns report schedule details for the report schedule that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForReports from 'selling_partner_api_for_reports';

let apiInstance = new SellingPartnerApiForReports.ReportsApi();
let reportScheduleId = "reportScheduleId_example"; // String | The identifier for the report schedule. This identifier is unique only in combination with a seller ID.
apiInstance.getReportSchedule(reportScheduleId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportScheduleId** | **String**| The identifier for the report schedule. This identifier is unique only in combination with a seller ID. | 

### Return type

[**ReportSchedule**](ReportSchedule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReportSchedules

> ReportScheduleList getReportSchedules(reportTypes)



Returns report schedule details that match the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForReports from 'selling_partner_api_for_reports';

let apiInstance = new SellingPartnerApiForReports.ReportsApi();
let reportTypes = ["null"]; // [String] | A list of report types used to filter report schedules. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information.
apiInstance.getReportSchedules(reportTypes).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportTypes** | [**[String]**](String.md)| A list of report types used to filter report schedules. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information. | 

### Return type

[**ReportScheduleList**](ReportScheduleList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReports

> GetReportsResponse getReports(opts)



Returns report details for the reports that match the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForReports from 'selling_partner_api_for_reports';

let apiInstance = new SellingPartnerApiForReports.ReportsApi();
let opts = {
  'reportTypes': ["null"], // [String] | A list of report types used to filter reports. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information. When reportTypes is provided, the other filter parameters (processingStatuses, marketplaceIds, createdSince, createdUntil) and pageSize may also be provided. Either reportTypes or nextToken is required.
  'processingStatuses': ["null"], // [String] | A list of processing statuses used to filter reports.
  'marketplaceIds': ["null"], // [String] | A list of marketplace identifiers used to filter reports. The reports returned will match at least one of the marketplaces that you specify.
  'pageSize': 10, // Number | The maximum number of reports to return in a single call.
  'createdSince': new Date("2013-10-20T19:20:30+01:00"), // Date | The earliest report creation date and time for reports to include in the response, in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> date time format. The default is 90 days ago. Reports are retained for a maximum of 90 days.
  'createdUntil': new Date("2013-10-20T19:20:30+01:00"), // Date | The latest report creation date and time for reports to include in the response, in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> date time format. The default is now.
  'nextToken': "nextToken_example" // String | A string token returned in the response to your previous request. `nextToken` is returned when the number of results exceeds the specified `pageSize` value. To get the next page of results, call the `getReports` operation and include this token as the only parameter. Specifying `nextToken` with any other parameters will cause the request to fail.
};
apiInstance.getReports(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportTypes** | [**[String]**](String.md)| A list of report types used to filter reports. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information. When reportTypes is provided, the other filter parameters (processingStatuses, marketplaceIds, createdSince, createdUntil) and pageSize may also be provided. Either reportTypes or nextToken is required. | [optional] 
 **processingStatuses** | [**[String]**](String.md)| A list of processing statuses used to filter reports. | [optional] 
 **marketplaceIds** | [**[String]**](String.md)| A list of marketplace identifiers used to filter reports. The reports returned will match at least one of the marketplaces that you specify. | [optional] 
 **pageSize** | **Number**| The maximum number of reports to return in a single call. | [optional] [default to 10]
 **createdSince** | **Date**| The earliest report creation date and time for reports to include in the response, in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; date time format. The default is 90 days ago. Reports are retained for a maximum of 90 days. | [optional] 
 **createdUntil** | **Date**| The latest report creation date and time for reports to include in the response, in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; date time format. The default is now. | [optional] 
 **nextToken** | **String**| A string token returned in the response to your previous request. &#x60;nextToken&#x60; is returned when the number of results exceeds the specified &#x60;pageSize&#x60; value. To get the next page of results, call the &#x60;getReports&#x60; operation and include this token as the only parameter. Specifying &#x60;nextToken&#x60; with any other parameters will cause the request to fail. | [optional] 

### Return type

[**GetReportsResponse**](GetReportsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

