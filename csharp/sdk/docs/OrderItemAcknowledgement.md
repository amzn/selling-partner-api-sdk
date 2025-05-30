# software.amzn.spapi.Model.vendor.orders.v1.OrderItemAcknowledgement
Represents the acknowledgement details for an individual order item, including the acknowledgement code, acknowledged quantity, scheduled ship and delivery dates, and rejection reason (if applicable).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AcknowledgementCode** | **string** | This indicates the acknowledgement code. | 
**AcknowledgedQuantity** | [**ItemQuantity**](ItemQuantity.md) |  | 
**ScheduledShipDate** | **DateTime** | Estimated ship date per line item. Must be in ISO-8601 date/time format. | [optional] 
**ScheduledDeliveryDate** | **DateTime** | Estimated delivery date per line item. Must be in ISO-8601 date/time format. | [optional] 
**RejectionReason** | **string** | Indicates the reason for rejection. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

