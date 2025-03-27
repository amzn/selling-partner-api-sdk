# SellingPartnerApiForRetailProcurementOrders.OrderItemAcknowledgement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acknowledgementCode** | **String** | This indicates the acknowledgement code. | 
**acknowledgedQuantity** | [**ItemQuantity**](ItemQuantity.md) |  | 
**scheduledShipDate** | **Date** | Estimated ship date per line item. Must be in ISO-8601 date/time format. | [optional] 
**scheduledDeliveryDate** | **Date** | Estimated delivery date per line item. Must be in ISO-8601 date/time format. | [optional] 
**rejectionReason** | **String** | Indicates the reason for rejection. | [optional] 



## Enum: AcknowledgementCodeEnum


* `Accepted` (value: `"Accepted"`)

* `Backordered` (value: `"Backordered"`)

* `Rejected` (value: `"Rejected"`)





## Enum: RejectionReasonEnum


* `TemporarilyUnavailable` (value: `"TemporarilyUnavailable"`)

* `InvalidProductIdentifier` (value: `"InvalidProductIdentifier"`)

* `ObsoleteProduct` (value: `"ObsoleteProduct"`)




