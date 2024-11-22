# OrderItemStatusAcknowledgementStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confirmationStatus** | [**ConfirmationStatusEnum**](#ConfirmationStatusEnum) | Confirmation status of line item. |  [optional]
**acceptedQuantity** | [**ItemQuantity**](ItemQuantity.md) |  |  [optional]
**rejectedQuantity** | [**ItemQuantity**](ItemQuantity.md) |  |  [optional]
**acknowledgementStatusDetails** | [**List&lt;AcknowledgementStatusDetails&gt;**](AcknowledgementStatusDetails.md) | Details of item quantity confirmed. |  [optional]

<a name="ConfirmationStatusEnum"></a>
## Enum: ConfirmationStatusEnum
Name | Value
---- | -----
ACCEPTED | &quot;ACCEPTED&quot;
PARTIALLY_ACCEPTED | &quot;PARTIALLY_ACCEPTED&quot;
REJECTED | &quot;REJECTED&quot;
UNCONFIRMED | &quot;UNCONFIRMED&quot;
