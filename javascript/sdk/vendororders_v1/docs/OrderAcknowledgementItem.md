# SellingPartnerApiForRetailProcurementOrders.OrderAcknowledgementItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**itemSequenceNumber** | **String** | Line item sequence number for the item. | [optional] 
**amazonProductIdentifier** | **String** | Amazon Standard Identification Number (ASIN) of an item. | [optional] 
**vendorProductIdentifier** | **String** | The vendor selected product identification of the item. Should be the same as was sent in the purchase order. | [optional] 
**orderedQuantity** | [**ItemQuantity**](ItemQuantity.md) |  | 
**netCost** | [**Money**](Money.md) |  | [optional] 
**listPrice** | [**Money**](Money.md) |  | [optional] 
**discountMultiplier** | **String** | The discount multiplier that should be applied to the price if a vendor sells books with a list price. This is a multiplier factor to arrive at a final discounted price. A multiplier of .90 would be the factor if a 10% discount is given. | [optional] 
**itemAcknowledgements** | [**[OrderItemAcknowledgement]**](OrderItemAcknowledgement.md) | This is used to indicate acknowledged quantity. | 


