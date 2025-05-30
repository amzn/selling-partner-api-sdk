# software.amzn.spapi.Model.reports.v2021_06_30.CreateReportScheduleSpecification
Information required to create the report schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReportType** | **string** | The report type. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information. | 
**MarketplaceIds** | **List&lt;string&gt;** | A list of marketplace identifiers for the report schedule. | 
**ReportOptions** | **Dictionary&lt;string, string&gt;** | Additional information passed to reports. This varies by report type. | [optional] 
**Period** | **string** | One of a set of predefined &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; periods that specifies how often a report should be created. | 
**NextReportCreationTime** | **DateTime** | The date and time when the schedule will create its next report, in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; date time format. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

