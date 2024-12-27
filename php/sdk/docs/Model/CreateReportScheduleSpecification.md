# # CreateReportScheduleSpecification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**report_type** | **string** | The report type. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information. |
**marketplace_ids** | **string[]** | A list of marketplace identifiers for the report schedule. |
**report_options** | **array<string,string>** | Additional information passed to reports. This varies by report type. | [optional]
**period** | **string** | One of a set of predefined &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; periods that specifies how often a report should be created. |
**next_report_creation_time** | **\DateTime** | The date and time when the schedule will create its next report, in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; date time format. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
