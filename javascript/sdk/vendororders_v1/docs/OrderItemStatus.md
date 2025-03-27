# SellingPartnerApiForRetailProcurementOrders.OrderItemStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**itemSequenceNumber** | **String** | Numbering of the item on the purchase order. The first item will be 1, the second 2, and so on. | 
**buyerProductIdentifier** | **String** | Buyer&#39;s Standard Identification Number (ASIN) of an item. | [optional] 
**vendorProductIdentifier** | **String** | The vendor selected product identification of the item. | [optional] 
**netCost** | [**Money**](Money.md) |  | [optional] 
**listPrice** | [**Money**](Money.md) |  | [optional] 
**orderedQuantity** | [**OrderItemStatusOrderedQuantity**](OrderItemStatusOrderedQuantity.md) |  | [optional] 
**acknowledgementStatus** | [**OrderItemStatusAcknowledgementStatus**](OrderItemStatusAcknowledgementStatus.md) |  | [optional] 
**receivingStatus** | [**OrderItemStatusReceivingStatus**](OrderItemStatusReceivingStatus.md) |  | [optional] 


