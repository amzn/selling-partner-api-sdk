# Order

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**purchaseOrderNumber** | **String** | The purchase order number for this order. Formatting Notes: 8-character alpha-numeric code. | 
**purchaseOrderState** | [**PurchaseOrderStateEnum**](#PurchaseOrderStateEnum) | This field will contain the current state of the purchase order. | 
**orderDetails** | [**OrderDetails**](OrderDetails.md) |  |  [optional]

<a name="PurchaseOrderStateEnum"></a>
## Enum: PurchaseOrderStateEnum
Name | Value
---- | -----
NEW | &quot;New&quot;
ACKNOWLEDGED | &quot;Acknowledged&quot;
CLOSED | &quot;Closed&quot;
