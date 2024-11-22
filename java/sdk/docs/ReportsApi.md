# ReportsApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelReport**](ReportsApi.md#cancelReport) | **DELETE** /reports/2021-06-30/reports/{reportId} | cancelReport
[**cancelReportSchedule**](ReportsApi.md#cancelReportSchedule) | **DELETE** /reports/2021-06-30/schedules/{reportScheduleId} | cancelReportSchedule
[**createReport**](ReportsApi.md#createReport) | **POST** /reports/2021-06-30/reports | createReport
[**createReportSchedule**](ReportsApi.md#createReportSchedule) | **POST** /reports/2021-06-30/schedules | createReportSchedule
[**getReport**](ReportsApi.md#getReport) | **GET** /reports/2021-06-30/reports/{reportId} | getReport
[**getReportDocument**](ReportsApi.md#getReportDocument) | **GET** /reports/2021-06-30/documents/{reportDocumentId} | getReportDocument
[**getReportSchedule**](ReportsApi.md#getReportSchedule) | **GET** /reports/2021-06-30/schedules/{reportScheduleId} | getReportSchedule
[**getReportSchedules**](ReportsApi.md#getReportSchedules) | **GET** /reports/2021-06-30/schedules | getReportSchedules
[**getReports**](ReportsApi.md#getReports) | **GET** /reports/2021-06-30/reports | getReports

<a name="cancelReport"></a>
# **cancelReport**
> cancelReport(reportId)

cancelReport

Cancels the report that you specify. Only reports with &#x60;processingStatus&#x3D;IN_QUEUE&#x60; can be cancelled. Cancelled reports are returned in subsequent calls to the &#x60;getReport&#x60; and &#x60;getReports&#x60; operations.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.ReportsApi;


ReportsApi apiInstance = new ReportsApi();
String reportId = "reportId_example"; // String | The identifier for the report. This identifier is unique only in combination with a seller ID.
try {
    apiInstance.cancelReport(reportId);
} catch (ApiException e) {
    System.err.println("Exception when calling ReportsApi#cancelReport");
    e.printStackTrace();
}
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

<a name="cancelReportSchedule"></a>
# **cancelReportSchedule**
> cancelReportSchedule(reportScheduleId)

cancelReportSchedule

Cancels the report schedule that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.ReportsApi;


ReportsApi apiInstance = new ReportsApi();
String reportScheduleId = "reportScheduleId_example"; // String | The identifier for the report schedule. This identifier is unique only in combination with a seller ID.
try {
    apiInstance.cancelReportSchedule(reportScheduleId);
} catch (ApiException e) {
    System.err.println("Exception when calling ReportsApi#cancelReportSchedule");
    e.printStackTrace();
}
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

<a name="createReport"></a>
# **createReport**
> CreateReportResponse createReport(body)

createReport

Creates a report.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.ReportsApi;


ReportsApi apiInstance = new ReportsApi();
CreateReportSpecification body = new CreateReportSpecification(); // CreateReportSpecification | Information required to create the report.
try {
    CreateReportResponse result = apiInstance.createReport(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ReportsApi#createReport");
    e.printStackTrace();
}
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

<a name="createReportSchedule"></a>
# **createReportSchedule**
> CreateReportScheduleResponse createReportSchedule(body)

createReportSchedule

Creates a report schedule. If a report schedule with the same report type and marketplace IDs already exists, it will be cancelled and replaced with this one.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.ReportsApi;


ReportsApi apiInstance = new ReportsApi();
CreateReportScheduleSpecification body = new CreateReportScheduleSpecification(); // CreateReportScheduleSpecification | Information required to create the report schedule.
try {
    CreateReportScheduleResponse result = apiInstance.createReportSchedule(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ReportsApi#createReportSchedule");
    e.printStackTrace();
}
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

<a name="getReport"></a>
# **getReport**
> Report getReport(reportId)

getReport

Returns report details (including the &#x60;reportDocumentId&#x60;, if available) for the report that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.ReportsApi;


ReportsApi apiInstance = new ReportsApi();
String reportId = "reportId_example"; // String | The identifier for the report. This identifier is unique only in combination with a seller ID.
try {
    Report result = apiInstance.getReport(reportId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ReportsApi#getReport");
    e.printStackTrace();
}
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

<a name="getReportDocument"></a>
# **getReportDocument**
> ReportDocument getReportDocument(reportDocumentId)

getReportDocument

Returns the information required for retrieving a report document&#x27;s contents.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.ReportsApi;


ReportsApi apiInstance = new ReportsApi();
String reportDocumentId = "reportDocumentId_example"; // String | The identifier for the report document.
try {
    ReportDocument result = apiInstance.getReportDocument(reportDocumentId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ReportsApi#getReportDocument");
    e.printStackTrace();
}
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

<a name="getReportSchedule"></a>
# **getReportSchedule**
> ReportSchedule getReportSchedule(reportScheduleId)

getReportSchedule

Returns report schedule details for the report schedule that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.ReportsApi;


ReportsApi apiInstance = new ReportsApi();
String reportScheduleId = "reportScheduleId_example"; // String | The identifier for the report schedule. This identifier is unique only in combination with a seller ID.
try {
    ReportSchedule result = apiInstance.getReportSchedule(reportScheduleId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ReportsApi#getReportSchedule");
    e.printStackTrace();
}
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

<a name="getReportSchedules"></a>
# **getReportSchedules**
> ReportScheduleList getReportSchedules(reportTypes)

getReportSchedules

Returns report schedule details that match the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.ReportsApi;


ReportsApi apiInstance = new ReportsApi();
List<String> reportTypes = Arrays.asList("reportTypes_example"); // List<String> | A list of report types used to filter report schedules. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information.
try {
    ReportScheduleList result = apiInstance.getReportSchedules(reportTypes);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ReportsApi#getReportSchedules");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportTypes** | [**List&lt;String&gt;**](String.md)| A list of report types used to filter report schedules. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information. |

### Return type

[**ReportScheduleList**](ReportScheduleList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReports"></a>
# **getReports**
> GetReportsResponse getReports(reportTypes, processingStatuses, marketplaceIds, pageSize, createdSince, createdUntil, nextToken)

getReports

Returns report details for the reports that match the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.ReportsApi;


ReportsApi apiInstance = new ReportsApi();
List<String> reportTypes = Arrays.asList("reportTypes_example"); // List<String> | A list of report types used to filter reports. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information. When reportTypes is provided, the other filter parameters (processingStatuses, marketplaceIds, createdSince, createdUntil) and pageSize may also be provided. Either reportTypes or nextToken is required.
List<String> processingStatuses = Arrays.asList("processingStatuses_example"); // List<String> | A list of processing statuses used to filter reports.
List<String> marketplaceIds = Arrays.asList("marketplaceIds_example"); // List<String> | A list of marketplace identifiers used to filter reports. The reports returned will match at least one of the marketplaces that you specify.
Integer pageSize = 10; // Integer | The maximum number of reports to return in a single call.
OffsetDateTime createdSince = new OffsetDateTime(); // OffsetDateTime | The earliest report creation date and time for reports to include in the response, in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> date time format. The default is 90 days ago. Reports are retained for a maximum of 90 days.
OffsetDateTime createdUntil = new OffsetDateTime(); // OffsetDateTime | The latest report creation date and time for reports to include in the response, in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> date time format. The default is now.
String nextToken = "nextToken_example"; // String | A string token returned in the response to your previous request. `nextToken` is returned when the number of results exceeds the specified `pageSize` value. To get the next page of results, call the `getReports` operation and include this token as the only parameter. Specifying `nextToken` with any other parameters will cause the request to fail.
try {
    GetReportsResponse result = apiInstance.getReports(reportTypes, processingStatuses, marketplaceIds, pageSize, createdSince, createdUntil, nextToken);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ReportsApi#getReports");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportTypes** | [**List&lt;String&gt;**](String.md)| A list of report types used to filter reports. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information. When reportTypes is provided, the other filter parameters (processingStatuses, marketplaceIds, createdSince, createdUntil) and pageSize may also be provided. Either reportTypes or nextToken is required. | [optional]
 **processingStatuses** | [**List&lt;String&gt;**](String.md)| A list of processing statuses used to filter reports. | [optional] [enum: CANCELLED, DONE, FATAL, IN_PROGRESS, IN_QUEUE]
 **marketplaceIds** | [**List&lt;String&gt;**](String.md)| A list of marketplace identifiers used to filter reports. The reports returned will match at least one of the marketplaces that you specify. | [optional]
 **pageSize** | **Integer**| The maximum number of reports to return in a single call. | [optional] [default to 10] [enum: ]
 **createdSince** | **OffsetDateTime**| The earliest report creation date and time for reports to include in the response, in &lt;a href&#x3D;&#x27;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#x27;&gt;ISO 8601&lt;/a&gt; date time format. The default is 90 days ago. Reports are retained for a maximum of 90 days. | [optional]
 **createdUntil** | **OffsetDateTime**| The latest report creation date and time for reports to include in the response, in &lt;a href&#x3D;&#x27;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#x27;&gt;ISO 8601&lt;/a&gt; date time format. The default is now. | [optional]
 **nextToken** | **String**| A string token returned in the response to your previous request. &#x60;nextToken&#x60; is returned when the number of results exceeds the specified &#x60;pageSize&#x60; value. To get the next page of results, call the &#x60;getReports&#x60; operation and include this token as the only parameter. Specifying &#x60;nextToken&#x60; with any other parameters will cause the request to fail. | [optional]

### Return type

[**GetReportsResponse**](GetReportsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

