# SellingPartnerApiForReports.ReportSchedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reportScheduleId** | **String** | The identifier for the report schedule. This identifier is unique only in combination with a seller ID. | 
**reportType** | **String** | The report type. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information. | 
**marketplaceIds** | **[String]** | A list of marketplace identifiers. The report document&#39;s contents will contain data for all of the specified marketplaces, unless the report type indicates otherwise. | [optional] 
**reportOptions** | **{String: String}** | Additional information passed to reports. This varies by report type. | [optional] 
**period** | **String** | An &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; period value that indicates how often a report should be created. | 
**nextReportCreationTime** | **Date** | The date and time when the schedule will create its next report, in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; date time format. | [optional] 


