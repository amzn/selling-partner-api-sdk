# SellingPartnerApiForDirectFulfillmentOrders.OrderDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customerOrderNumber** | **String** | The customer order number. | 
**orderDate** | **Date** | The date the order was placed. This  field is expected to be in ISO-8601 date/time format, for example:2018-07-16T23:00:00Z/ 2018-07-16T23:00:00-05:00 /2018-07-16T23:00:00-08:00. If no time zone is specified, UTC should be assumed. | 
**orderStatus** | **String** | Current status of the order. | [optional] 
**shipmentDetails** | [**ShipmentDetails**](ShipmentDetails.md) |  | 
**taxTotal** | [**TaxItemDetails**](TaxItemDetails.md) |  | [optional] 
**sellingParty** | [**PartyIdentification**](PartyIdentification.md) |  | 
**shipFromParty** | [**PartyIdentification**](PartyIdentification.md) |  | 
**shipToParty** | [**Address**](Address.md) |  | 
**billToParty** | [**PartyIdentification**](PartyIdentification.md) |  | 
**items** | [**[OrderItem]**](OrderItem.md) | A list of items in this purchase order. | 



## Enum: OrderStatusEnum


* `NEW` (value: `"NEW"`)

* `SHIPPED` (value: `"SHIPPED"`)

* `ACCEPTED` (value: `"ACCEPTED"`)

* `CANCELLED` (value: `"CANCELLED"`)




