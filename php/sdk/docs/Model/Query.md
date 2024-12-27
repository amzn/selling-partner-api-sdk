# # Query

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query_id** | **string** | The query identifier. This identifier is unique only in combination with a selling partner account ID. |
**query** | **string** | The submitted query. |
**created_time** | **\DateTime** | The date and time when the query was created, in ISO 8601 date time format. |
**processing_status** | **string** | The processing status of the query. |
**processing_start_time** | **\DateTime** | The date and time when the query processing started, in ISO 8601 date time format. | [optional]
**processing_end_time** | **\DateTime** | The date and time when the query processing completed, in ISO 8601 date time format. | [optional]
**data_document_id** | **string** | The data document identifier. This identifier is only present when there is data available as a result of the query. This identifier is unique only in combination with a selling partner account ID. Pass this identifier into the &#x60;getDocument&#x60; operation to get the information required to retrieve the data document&#39;s contents. | [optional]
**error_document_id** | **string** | The error document identifier. This identifier is only present when an error occurs during query processing. This identifier is unique only in combination with a selling partner account ID. Pass this identifier into the &#x60;getDocument&#x60; operation to get the information required to retrieve the error document&#39;s contents. | [optional]
**pagination** | [**\OpenAPI\Client\Model\datakiosk\QueryPagination**](QueryPagination.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
