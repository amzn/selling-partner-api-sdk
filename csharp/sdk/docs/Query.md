# software.amzn.spapi.Model.datakiosk.v2023_11_15.Query
Detailed information about the query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**QueryId** | **string** | The query identifier. This identifier is unique only in combination with a selling partner account ID. | 
**VarQuery** | **string** | The submitted query. | 
**CreatedTime** | **DateTime** | The date and time when the query was created, in ISO 8601 date time format. | 
**ProcessingStatus** | **string** | The processing status of the query. | 
**ProcessingStartTime** | **DateTime** | The date and time when the query processing started, in ISO 8601 date time format. | [optional] 
**ProcessingEndTime** | **DateTime** | The date and time when the query processing completed, in ISO 8601 date time format. | [optional] 
**DataDocumentId** | **string** | The data document identifier. This identifier is only present when there is data available as a result of the query. This identifier is unique only in combination with a selling partner account ID. Pass this identifier into the &#x60;getDocument&#x60; operation to get the information required to retrieve the data document&#39;s contents. | [optional] 
**ErrorDocumentId** | **string** | The error document identifier. This identifier is only present when an error occurs during query processing. This identifier is unique only in combination with a selling partner account ID. Pass this identifier into the &#x60;getDocument&#x60; operation to get the information required to retrieve the error document&#39;s contents. | [optional] 
**Pagination** | [**QueryPagination**](QueryPagination.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

