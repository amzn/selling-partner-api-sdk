# CreateReportScheduleSpecification

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reportType** | **String** | The report type. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information. | 
**marketplaceIds** | **List&lt;String&gt;** | A list of marketplace identifiers for the report schedule. | 
**reportOptions** | [**ReportOptions**](ReportOptions.md) |  |  [optional]
**period** | [**PeriodEnum**](#PeriodEnum) | One of a set of predefined &lt;a href&#x3D;&#x27;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#x27;&gt;ISO 8601&lt;/a&gt; periods that specifies how often a report should be created. | 
**nextReportCreationTime** | [**OffsetDateTime**](OffsetDateTime.md) | The date and time when the schedule will create its next report, in &lt;a href&#x3D;&#x27;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#x27;&gt;ISO 8601&lt;/a&gt; date time format. |  [optional]

<a name="PeriodEnum"></a>
## Enum: PeriodEnum
Name | Value
---- | -----
PT5M | &quot;PT5M&quot;
PT15M | &quot;PT15M&quot;
PT30M | &quot;PT30M&quot;
PT1H | &quot;PT1H&quot;
PT2H | &quot;PT2H&quot;
PT4H | &quot;PT4H&quot;
PT8H | &quot;PT8H&quot;
PT12H | &quot;PT12H&quot;
P1D | &quot;P1D&quot;
P2D | &quot;P2D&quot;
P3D | &quot;P3D&quot;
PT84H | &quot;PT84H&quot;
P7D | &quot;P7D&quot;
P14D | &quot;P14D&quot;
P15D | &quot;P15D&quot;
P18D | &quot;P18D&quot;
P30D | &quot;P30D&quot;
P1M | &quot;P1M&quot;
