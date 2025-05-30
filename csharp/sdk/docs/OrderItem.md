# software.amzn.spapi.Model.vendor.orders.v1.OrderItem
Represents an individual item in an order, including item details, quantities, pricing, and backorder information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ItemSequenceNumber** | **string** | Numbering of the item on the purchase order. The first item will be 1, the second 2, and so on. | 
**AmazonProductIdentifier** | **string** | Amazon Standard Identification Number (ASIN) of an item. | [optional] 
**VendorProductIdentifier** | **string** | The vendor selected product identification of the item. | [optional] 
**OrderedQuantity** | [**ItemQuantity**](ItemQuantity.md) |  | 
**IsBackOrderAllowed** | **bool** | When true, we will accept backorder confirmations for this item. | 
**NetCost** | [**Money**](Money.md) |  | [optional] 
**ListPrice** | [**Money**](Money.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

