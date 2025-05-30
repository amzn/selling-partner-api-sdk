# software.amzn.spapi.Model.vendor.orders.v1.OrderAcknowledgementItem
Details of the item being acknowledged.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ItemSequenceNumber** | **string** | Line item sequence number for the item. | [optional] 
**AmazonProductIdentifier** | **string** | Amazon Standard Identification Number (ASIN) of an item. | [optional] 
**VendorProductIdentifier** | **string** | The vendor selected product identification of the item. Should be the same as was sent in the purchase order. | [optional] 
**OrderedQuantity** | [**ItemQuantity**](ItemQuantity.md) |  | 
**NetCost** | [**Money**](Money.md) |  | [optional] 
**ListPrice** | [**Money**](Money.md) |  | [optional] 
**DiscountMultiplier** | **string** | The discount multiplier that should be applied to the price if a vendor sells books with a list price. This is a multiplier factor to arrive at a final discounted price. A multiplier of .90 would be the factor if a 10% discount is given. | [optional] 
**ItemAcknowledgements** | [**List&lt;OrderItemAcknowledgement&gt;**](OrderItemAcknowledgement.md) | This is used to indicate acknowledged quantity. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

