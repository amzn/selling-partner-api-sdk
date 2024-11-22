# OrderItemStatusReceivingStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**receiveStatus** | [**ReceiveStatusEnum**](#ReceiveStatusEnum) | Receive status of the line item. |  [optional]
**receivedQuantity** | [**ItemQuantity**](ItemQuantity.md) |  |  [optional]
**lastReceiveDate** | [**OffsetDateTime**](OffsetDateTime.md) | The date when the most recent item was received at the buyer&#x27;s warehouse. Must be in ISO-8601 date/time format. |  [optional]

<a name="ReceiveStatusEnum"></a>
## Enum: ReceiveStatusEnum
Name | Value
---- | -----
NOT_RECEIVED | &quot;NOT_RECEIVED&quot;
PARTIALLY_RECEIVED | &quot;PARTIALLY_RECEIVED&quot;
RECEIVED | &quot;RECEIVED&quot;
