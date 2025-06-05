# software.amzn.spapi.Model.vehicles.v2024_11_01.Pagination
When a request produces a response that exceeds the `pageSize`, pagination occurs. This means the response is divided into individual pages. To retrieve the next page or the previous page, you must pass the `nextToken` value or the `previousToken` value as the `pageToken` parameter in the next request. When you receive the last page, there will be no `nextToken` key in the pagination object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NextToken** | **string** | A token that can be used to fetch the next page. | [optional] 
**PreviousToken** | **string** | A token that can be used to fetch the previous page. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

