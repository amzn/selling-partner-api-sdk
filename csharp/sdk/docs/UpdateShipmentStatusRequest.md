# software.amzn.spapi.Model.orders.v0.UpdateShipmentStatusRequest
The request body for the `updateShipmentStatus` operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MarketplaceId** | **string** | The unobfuscated marketplace identifier. | 
**ShipmentStatus** | **ShipmentStatus** |  | 
**OrderItems** | [**List&lt;OrderItemsInner&gt;**](OrderItemsInner.md) | For partial shipment status updates, the list of order items and quantities to be updated. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

