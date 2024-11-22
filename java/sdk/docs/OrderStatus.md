# OrderStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**purchaseOrderNumber** | **String** | The buyer&#x27;s purchase order number for this order. Formatting Notes: 8-character alpha-numeric code. | 
**purchaseOrderStatus** | [**PurchaseOrderStatusEnum**](#PurchaseOrderStatusEnum) | The status of the buyer&#x27;s purchase order for this order. | 
**purchaseOrderDate** | [**OffsetDateTime**](OffsetDateTime.md) | The date the purchase order was placed. Must be in ISO-8601 date/time format. | 
**lastUpdatedDate** | [**OffsetDateTime**](OffsetDateTime.md) | The date when the purchase order was last updated. Must be in ISO-8601 date/time format. |  [optional]
**sellingParty** | [**PartyIdentification**](PartyIdentification.md) |  | 
**shipToParty** | [**PartyIdentification**](PartyIdentification.md) |  | 
**itemStatus** | [**ItemStatus**](ItemStatus.md) |  | 

<a name="PurchaseOrderStatusEnum"></a>
## Enum: PurchaseOrderStatusEnum
Name | Value
---- | -----
OPEN | &quot;OPEN&quot;
CLOSED | &quot;CLOSED&quot;
