# SellingPartnerApisForFulfillmentOutbound.FulfillmentOrderItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sellerSku** | **String** | The seller SKU of the item. | 
**sellerFulfillmentOrderItemId** | **String** | A fulfillment order item identifier submitted with a call to the &#x60;createFulfillmentOrder&#x60; operation. | 
**quantity** | **Number** | The item quantity. | 
**giftMessage** | **String** | A message to the gift recipient, if applicable. | [optional] 
**displayableComment** | **String** | Item-specific text that displays in recipient-facing materials such as the outbound shipment packing slip. | [optional] 
**fulfillmentNetworkSku** | **String** | Amazon&#39;s fulfillment network SKU of the item. | [optional] 
**orderItemDisposition** | **String** | Indicates whether the item is sellable or unsellable. | [optional] 
**cancelledQuantity** | **Number** | The item quantity. | 
**unfulfillableQuantity** | **Number** | The item quantity. | 
**estimatedShipDate** | **Date** | Date timestamp | [optional] 
**estimatedArrivalDate** | **Date** | Date timestamp | [optional] 
**perUnitPrice** | [**Money**](Money.md) |  | [optional] 
**perUnitTax** | [**Money**](Money.md) |  | [optional] 
**perUnitDeclaredValue** | [**Money**](Money.md) |  | [optional] 


