# SellingPartnerApiForRetailProcurementShipments.PurchaseOrderItems

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**itemSequenceNumber** | **String** | Item sequence number for the item. The first item will be 001, the second 002, and so on. This number is used as a reference to refer to this item from the carton or pallet level. | 
**buyerProductIdentifier** | **String** | Amazon Standard Identification Number (ASIN) for a SKU | [optional] 
**vendorProductIdentifier** | **String** | The vendor selected product identification of the item. Should be the same as was sent in the purchase order. | [optional] 
**shippedQuantity** | [**ItemQuantity**](ItemQuantity.md) |  | 
**maximumRetailPrice** | [**Money**](Money.md) |  | [optional] 


