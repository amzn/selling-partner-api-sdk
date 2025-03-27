# SellingPartnerApiForReports.CreateReportScheduleSpecification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reportType** | **String** | The report type. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information. | 
**marketplaceIds** | **[String]** | A list of marketplace identifiers for the report schedule. | 
**reportOptions** | **{String: String}** | Additional information passed to reports. This varies by report type. | [optional] 
**period** | **String** | One of a set of predefined &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; periods that specifies how often a report should be created. | 
**nextReportCreationTime** | **Date** | The date and time when the schedule will create its next report, in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; date time format. | [optional] 



## Enum: PeriodEnum


* `PT5M` (value: `"PT5M"`)

* `PT15M` (value: `"PT15M"`)

* `PT30M` (value: `"PT30M"`)

* `PT1H` (value: `"PT1H"`)

* `PT2H` (value: `"PT2H"`)

* `PT4H` (value: `"PT4H"`)

* `PT8H` (value: `"PT8H"`)

* `PT12H` (value: `"PT12H"`)

* `P1D` (value: `"P1D"`)

* `P2D` (value: `"P2D"`)

* `P3D` (value: `"P3D"`)

* `PT84H` (value: `"PT84H"`)

* `P7D` (value: `"P7D"`)

* `P14D` (value: `"P14D"`)

* `P15D` (value: `"P15D"`)

* `P18D` (value: `"P18D"`)

* `P30D` (value: `"P30D"`)

* `P1M` (value: `"P1M"`)




