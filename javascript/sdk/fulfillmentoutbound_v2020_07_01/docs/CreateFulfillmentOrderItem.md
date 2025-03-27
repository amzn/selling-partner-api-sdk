# SellingPartnerApisForFulfillmentOutbound.CreateFulfillmentOrderItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sellerSku** | **String** | The seller SKU of the item. | 
**sellerFulfillmentOrderItemId** | **String** | A fulfillment order item identifier that the seller creates to track fulfillment order items. Used to disambiguate multiple fulfillment items that have the same &#x60;SellerSKU&#x60;. For example, the seller might assign different &#x60;SellerFulfillmentOrderItemId&#x60; values to two items in a fulfillment order that share the same &#x60;SellerSKU&#x60; but have different &#x60;GiftMessage&#x60; values. | 
**quantity** | **Number** | The item quantity. | 
**giftMessage** | **String** | A message to the gift recipient, if applicable. | [optional] 
**displayableComment** | **String** | Item-specific text that displays in recipient-facing materials such as the outbound shipment packing slip. | [optional] 
**fulfillmentNetworkSku** | **String** | Amazon&#39;s fulfillment network SKU of the item. | [optional] 
**perUnitDeclaredValue** | [**Money**](Money.md) |  | [optional] 
**perUnitPrice** | [**Money**](Money.md) |  | [optional] 
**perUnitTax** | [**Money**](Money.md) |  | [optional] 


