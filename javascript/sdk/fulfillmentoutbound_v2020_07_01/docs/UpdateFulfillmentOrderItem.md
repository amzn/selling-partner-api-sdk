# SellingPartnerApisForFulfillmentOutbound.UpdateFulfillmentOrderItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sellerSku** | **String** | The seller SKU of the item. | [optional] 
**sellerFulfillmentOrderItemId** | **String** | Identifies the fulfillment order item to update. Created with a previous call to the createFulfillmentOrder operation. | 
**quantity** | **Number** | The item quantity. | 
**giftMessage** | **String** | A message to the gift recipient, if applicable. | [optional] 
**displayableComment** | **String** | Item-specific text that displays in recipient-facing materials such as the outbound shipment packing slip. | [optional] 
**fulfillmentNetworkSku** | **String** | Amazon&#39;s fulfillment network SKU of the item. | [optional] 
**orderItemDisposition** | **String** | Indicates whether the item is sellable or unsellable. | [optional] 
**perUnitDeclaredValue** | [**Money**](Money.md) |  | [optional] 
**perUnitPrice** | [**Money**](Money.md) |  | [optional] 
**perUnitTax** | [**Money**](Money.md) |  | [optional] 


