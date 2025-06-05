# software.amzn.spapi.Model.vendor.orders.v1.OrderStatus
Current status of a purchase order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PurchaseOrderNumber** | **string** | The buyer&#39;s purchase order number for this order. Formatting Notes: 8-character alpha-numeric code. | 
**PurchaseOrderStatus** | **string** | The status of the buyer&#39;s purchase order for this order. | 
**PurchaseOrderDate** | **DateTime** | The date the purchase order was placed. Must be in ISO-8601 date/time format. | 
**LastUpdatedDate** | **DateTime** | The date when the purchase order was last updated. Must be in ISO-8601 date/time format. | [optional] 
**SellingParty** | [**PartyIdentification**](PartyIdentification.md) |  | 
**ShipToParty** | [**PartyIdentification**](PartyIdentification.md) |  | 
**ItemStatus** | [**List&lt;OrderItemStatus&gt;**](OrderItemStatus.md) | Detailed description of items order status. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

