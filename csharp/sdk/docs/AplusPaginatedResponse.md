# software.amzn.spapi.Model.aplusContent.v2020_11_01.AplusPaginatedResponse
A token that you use to retrieve the next page of results. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until `nextPageToken` is null. Note that this operation can return empty pages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Warnings** | [**List&lt;Error&gt;**](Error.md) | A set of messages to the user, such as warnings or comments. | [optional] 
**NextPageToken** | **string** | A token that you use to fetch a specific page when there are multiple pages of results. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

