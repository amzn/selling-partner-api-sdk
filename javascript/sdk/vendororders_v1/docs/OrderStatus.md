# SellingPartnerApiForRetailProcurementOrders.OrderStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**purchaseOrderNumber** | **String** | The buyer&#39;s purchase order number for this order. Formatting Notes: 8-character alpha-numeric code. | 
**purchaseOrderStatus** | **String** | The status of the buyer&#39;s purchase order for this order. | 
**purchaseOrderDate** | **Date** | The date the purchase order was placed. Must be in ISO-8601 date/time format. | 
**lastUpdatedDate** | **Date** | The date when the purchase order was last updated. Must be in ISO-8601 date/time format. | [optional] 
**sellingParty** | [**PartyIdentification**](PartyIdentification.md) |  | 
**shipToParty** | [**PartyIdentification**](PartyIdentification.md) |  | 
**itemStatus** | [**[OrderItemStatus]**](OrderItemStatus.md) | Detailed description of items order status. | 



## Enum: PurchaseOrderStatusEnum


* `OPEN` (value: `"OPEN"`)

* `CLOSED` (value: `"CLOSED"`)




