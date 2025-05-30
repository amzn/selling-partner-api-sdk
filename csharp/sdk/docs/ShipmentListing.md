# software.amzn.spapi.Model.awd.v2024_05_09.ShipmentListing
A list of inbound shipment summaries filtered by the attributes specified in the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NextToken** | **string** | A token that is used to retrieve the next page of results. The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;maxResults&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages. | [optional] 
**Shipments** | [**List&lt;InboundShipmentSummary&gt;**](InboundShipmentSummary.md) | List of inbound shipment summaries. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

