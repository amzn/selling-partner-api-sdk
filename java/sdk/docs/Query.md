# Query

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**queryId** | **String** | The query identifier. This identifier is unique only in combination with a selling partner account ID. | 
**query** | **String** | The submitted query. | 
**createdTime** | [**OffsetDateTime**](OffsetDateTime.md) | The date and time when the query was created, in ISO 8601 date time format. | 
**processingStatus** | [**ProcessingStatusEnum**](#ProcessingStatusEnum) | The processing status of the query. | 
**processingStartTime** | [**OffsetDateTime**](OffsetDateTime.md) | The date and time when the query processing started, in ISO 8601 date time format. |  [optional]
**processingEndTime** | [**OffsetDateTime**](OffsetDateTime.md) | The date and time when the query processing completed, in ISO 8601 date time format. |  [optional]
**dataDocumentId** | **String** | The data document identifier. This identifier is only present when there is data available as a result of the query. This identifier is unique only in combination with a selling partner account ID. Pass this identifier into the &#x60;getDocument&#x60; operation to get the information required to retrieve the data document&#x27;s contents. |  [optional]
**errorDocumentId** | **String** | The error document identifier. This identifier is only present when an error occurs during query processing. This identifier is unique only in combination with a selling partner account ID. Pass this identifier into the &#x60;getDocument&#x60; operation to get the information required to retrieve the error document&#x27;s contents. |  [optional]
**pagination** | [**QueryPagination**](QueryPagination.md) |  |  [optional]

<a name="ProcessingStatusEnum"></a>
## Enum: ProcessingStatusEnum
Name | Value
---- | -----
CANCELLED | &quot;CANCELLED&quot;
DONE | &quot;DONE&quot;
FATAL | &quot;FATAL&quot;
IN_PROGRESS | &quot;IN_PROGRESS&quot;
IN_QUEUE | &quot;IN_QUEUE&quot;
