# RemovalShipmentEvent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**postedDate** | [**OffsetDateTime**](OffsetDateTime.md) |  |  [optional]
**merchantOrderId** | **String** | The merchant removal orderId. |  [optional]
**orderId** | **String** | The identifier for the removal shipment order. |  [optional]
**transactionType** | **String** | The type of removal order.  Possible values:  * WHOLESALE_LIQUIDATION |  [optional]
**storeName** | **String** | The name of the store where the event occurred. |  [optional]
**removalShipmentItemList** | [**RemovalShipmentItemList**](RemovalShipmentItemList.md) |  |  [optional]
