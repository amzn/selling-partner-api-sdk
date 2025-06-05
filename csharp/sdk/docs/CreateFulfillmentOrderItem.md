# software.amzn.spapi.Model.fulfillment.outbound.v2020_07_01.CreateFulfillmentOrderItem
Item information for creating a fulfillment order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SellerSku** | **string** | The seller SKU of the item. | 
**SellerFulfillmentOrderItemId** | **string** | A fulfillment order item identifier that the seller creates to track fulfillment order items. Used to disambiguate multiple fulfillment items that have the same &#x60;SellerSKU&#x60;. For example, the seller might assign different &#x60;SellerFulfillmentOrderItemId&#x60; values to two items in a fulfillment order that share the same &#x60;SellerSKU&#x60; but have different &#x60;GiftMessage&#x60; values. | 
**Quantity** | **int** | The item quantity. | 
**GiftMessage** | **string** | A message to the gift recipient, if applicable. | [optional] 
**DisplayableComment** | **string** | Item-specific text that displays in recipient-facing materials such as the outbound shipment packing slip. | [optional] 
**FulfillmentNetworkSku** | **string** | Amazon&#39;s fulfillment network SKU of the item. | [optional] 
**PerUnitDeclaredValue** | [**Money**](Money.md) |  | [optional] 
**PerUnitPrice** | [**Money**](Money.md) |  | [optional] 
**PerUnitTax** | [**Money**](Money.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

