# OrderItemAcknowledgement

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acknowledgementCode** | [**AcknowledgementCodeEnum**](#AcknowledgementCodeEnum) | This indicates the acknowledgement code. | 
**acknowledgedQuantity** | [**ItemQuantity**](ItemQuantity.md) |  | 
**scheduledShipDate** | [**OffsetDateTime**](OffsetDateTime.md) | Estimated ship date per line item. Must be in ISO-8601 date/time format. |  [optional]
**scheduledDeliveryDate** | [**OffsetDateTime**](OffsetDateTime.md) | Estimated delivery date per line item. Must be in ISO-8601 date/time format. |  [optional]
**rejectionReason** | [**RejectionReasonEnum**](#RejectionReasonEnum) | Indicates the reason for rejection. |  [optional]

<a name="AcknowledgementCodeEnum"></a>
## Enum: AcknowledgementCodeEnum
Name | Value
---- | -----
ACCEPTED | &quot;Accepted&quot;
BACKORDERED | &quot;Backordered&quot;
REJECTED | &quot;Rejected&quot;

<a name="RejectionReasonEnum"></a>
## Enum: RejectionReasonEnum
Name | Value
---- | -----
TEMPORARILYUNAVAILABLE | &quot;TemporarilyUnavailable&quot;
INVALIDPRODUCTIDENTIFIER | &quot;InvalidProductIdentifier&quot;
OBSOLETEPRODUCT | &quot;ObsoleteProduct&quot;
