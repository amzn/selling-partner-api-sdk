# software.amzn.spapi.Model.fulfillment.outbound.v2020_07_01.UpdateFulfillmentOrderItem
Item information for updating a fulfillment order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SellerSku** | **string** | The seller SKU of the item. | [optional] 
**SellerFulfillmentOrderItemId** | **string** | Identifies the fulfillment order item to update. Created with a previous call to the createFulfillmentOrder operation. | 
**Quantity** | **int** | The item quantity. | 
**GiftMessage** | **string** | A message to the gift recipient, if applicable. | [optional] 
**DisplayableComment** | **string** | Item-specific text that displays in recipient-facing materials such as the outbound shipment packing slip. | [optional] 
**FulfillmentNetworkSku** | **string** | Amazon&#39;s fulfillment network SKU of the item. | [optional] 
**OrderItemDisposition** | **string** | Indicates whether the item is sellable or unsellable. | [optional] 
**PerUnitDeclaredValue** | [**Money**](Money.md) |  | [optional] 
**PerUnitPrice** | [**Money**](Money.md) |  | [optional] 
**PerUnitTax** | [**Money**](Money.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

