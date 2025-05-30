# software.amzn.spapi.Model.reports.v2021_06_30.Report
Detailed information about the report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MarketplaceIds** | **List&lt;string&gt;** | A list of marketplace identifiers for the report. | [optional] 
**ReportId** | **string** | The identifier for the report. This identifier is unique only in combination with a seller ID. | 
**ReportType** | **string** | The report type. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information. | 
**DataStartTime** | **DateTime** | The start of a date and time range used for selecting the data to report. | [optional] 
**DataEndTime** | **DateTime** | The end of a date and time range used for selecting the data to report. | [optional] 
**ReportScheduleId** | **string** | The identifier of the report schedule that created this report (if any). This identifier is unique only in combination with a seller ID. | [optional] 
**CreatedTime** | **DateTime** | The date and time when the report was created. | 
**ProcessingStatus** | **string** | The processing status of the report. | 
**ProcessingStartTime** | **DateTime** | The date and time when the report processing started, in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; date time format. | [optional] 
**ProcessingEndTime** | **DateTime** | The date and time when the report processing completed, in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; date time format. | [optional] 
**ReportDocumentId** | **string** | The identifier for the report document. Pass this into the &#x60;getReportDocument&#x60; operation to get the information you will need to retrieve the report document&#39;s contents. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

