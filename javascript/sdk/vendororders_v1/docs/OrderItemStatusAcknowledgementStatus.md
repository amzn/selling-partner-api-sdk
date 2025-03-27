# SellingPartnerApiForRetailProcurementOrders.OrderItemStatusAcknowledgementStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confirmationStatus** | **String** | Confirmation status of line item. | [optional] 
**acceptedQuantity** | [**ItemQuantity**](ItemQuantity.md) |  | [optional] 
**rejectedQuantity** | [**ItemQuantity**](ItemQuantity.md) |  | [optional] 
**acknowledgementStatusDetails** | [**[AcknowledgementStatusDetails]**](AcknowledgementStatusDetails.md) | Details of item quantity confirmed. | [optional] 



## Enum: ConfirmationStatusEnum


* `ACCEPTED` (value: `"ACCEPTED"`)

* `PARTIALLY_ACCEPTED` (value: `"PARTIALLY_ACCEPTED"`)

* `REJECTED` (value: `"REJECTED"`)

* `UNCONFIRMED` (value: `"UNCONFIRMED"`)




