# SellingPartnerApiForDataKiosk.Query

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**queryId** | **String** | The query identifier. This identifier is unique only in combination with a selling partner account ID. | 
**query** | **String** | The submitted query. | 
**createdTime** | **Date** | The date and time when the query was created, in ISO 8601 date time format. | 
**processingStatus** | **String** | The processing status of the query. | 
**processingStartTime** | **Date** | The date and time when the query processing started, in ISO 8601 date time format. | [optional] 
**processingEndTime** | **Date** | The date and time when the query processing completed, in ISO 8601 date time format. | [optional] 
**dataDocumentId** | **String** | The data document identifier. This identifier is only present when there is data available as a result of the query. This identifier is unique only in combination with a selling partner account ID. Pass this identifier into the &#x60;getDocument&#x60; operation to get the information required to retrieve the data document&#39;s contents. | [optional] 
**errorDocumentId** | **String** | The error document identifier. This identifier is only present when an error occurs during query processing. This identifier is unique only in combination with a selling partner account ID. Pass this identifier into the &#x60;getDocument&#x60; operation to get the information required to retrieve the error document&#39;s contents. | [optional] 
**pagination** | [**QueryPagination**](QueryPagination.md) |  | [optional] 



## Enum: ProcessingStatusEnum


* `CANCELLED` (value: `"CANCELLED"`)

* `DONE` (value: `"DONE"`)

* `FATAL` (value: `"FATAL"`)

* `IN_PROGRESS` (value: `"IN_PROGRESS"`)

* `IN_QUEUE` (value: `"IN_QUEUE"`)




