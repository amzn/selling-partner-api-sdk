# software.amzn.spapi.Model.awd.v2024_05_09.InventoryListing
AWD inventory payload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Inventory** | [**List&lt;InventorySummary&gt;**](InventorySummary.md) | List of inventory summaries. | 
**NextToken** | **string** | A token that is used to retrieve the next page of results. The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;maxResults&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

