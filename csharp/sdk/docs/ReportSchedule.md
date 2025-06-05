# software.amzn.spapi.Model.reports.v2021_06_30.ReportSchedule
Detailed information about a report schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReportScheduleId** | **string** | The identifier for the report schedule. This identifier is unique only in combination with a seller ID. | 
**ReportType** | **string** | The report type. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information. | 
**MarketplaceIds** | **List&lt;string&gt;** | A list of marketplace identifiers. The report document&#39;s contents will contain data for all of the specified marketplaces, unless the report type indicates otherwise. | [optional] 
**ReportOptions** | **Dictionary&lt;string, string&gt;** | Additional information passed to reports. This varies by report type. | [optional] 
**Period** | **string** | An &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; period value that indicates how often a report should be created. | 
**NextReportCreationTime** | **DateTime** | The date and time when the schedule will create its next report, in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; date time format. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

