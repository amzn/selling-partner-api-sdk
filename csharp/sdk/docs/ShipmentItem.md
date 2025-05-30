# software.amzn.spapi.Model.invoicing.v0.ShipmentItem
The shipment item information required by a seller to issue a shipment invoice.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ASIN** | **string** | The Amazon Standard Identification Number (ASIN) of the item. | [optional] 
**SellerSKU** | **string** | The seller SKU of the item. | [optional] 
**OrderItemId** | **string** | The Amazon-defined identifier for the order item. | [optional] 
**Title** | **string** | The name of the item. | [optional] 
**QuantityOrdered** | **decimal** | The number of items ordered. | [optional] 
**ItemPrice** | [**Money**](Money.md) |  | [optional] 
**ShippingPrice** | [**Money**](Money.md) |  | [optional] 
**GiftWrapPrice** | [**Money**](Money.md) |  | [optional] 
**ShippingDiscount** | [**Money**](Money.md) |  | [optional] 
**PromotionDiscount** | [**Money**](Money.md) |  | [optional] 
**SerialNumbers** | **List&lt;string&gt;** | The list of serial numbers. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

