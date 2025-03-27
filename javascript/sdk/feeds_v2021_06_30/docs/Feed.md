# SellingPartnerApiForFeeds.Feed

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feedId** | **String** | The identifier for the feed. This identifier is unique only in combination with a seller ID. | 
**feedType** | **String** | The feed type. | 
**marketplaceIds** | **[String]** | A list of identifiers for the marketplaces that the feed is applied to. | [optional] 
**createdTime** | **Date** | The date and time when the feed was created, in ISO 8601 date time format. | 
**processingStatus** | **String** | The processing status of the feed. | 
**processingStartTime** | **Date** | The date and time when feed processing started, in ISO 8601 date time format. | [optional] 
**processingEndTime** | **Date** | The date and time when feed processing completed, in ISO 8601 date time format. | [optional] 
**resultFeedDocumentId** | **String** | The identifier for the feed document. This identifier is unique only in combination with a seller ID. | [optional] 



## Enum: ProcessingStatusEnum


* `CANCELLED` (value: `"CANCELLED"`)

* `DONE` (value: `"DONE"`)

* `FATAL` (value: `"FATAL"`)

* `IN_PROGRESS` (value: `"IN_PROGRESS"`)

* `IN_QUEUE` (value: `"IN_QUEUE"`)




