# software.amzn.spapi.Model.fulfillment.outbound.v2020_07_01.DropOffLocation
The preferred location to leave packages at the destination address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Specifies the preferred location to leave the package at the destination address. | 
**Attributes** | **Dictionary&lt;string, string&gt;** | Additional information about the drop-off location that can vary depending on the type of drop-off location specified in the &#x60;type&#x60; field. If the &#x60;type&#x60; is set to &#x60;FALLBACK_NEIGHBOR_DELIVERY&#x60;, the &#x60;attributes&#x60; object should include the exact keys &#x60;neighborName&#x60; and &#x60;houseNumber&#x60; to provide the name and house number of the designated neighbor. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

