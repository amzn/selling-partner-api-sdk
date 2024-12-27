# # OrderItemAcknowledgement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acknowledgement_code** | **string** | This indicates the acknowledgement code. |
**acknowledged_quantity** | [**\OpenAPI\Client\Model\vendor.orders\ItemQuantity**](ItemQuantity.md) |  |
**scheduled_ship_date** | **\DateTime** | Estimated ship date per line item. Must be in ISO-8601 date/time format. | [optional]
**scheduled_delivery_date** | **\DateTime** | Estimated delivery date per line item. Must be in ISO-8601 date/time format. | [optional]
**rejection_reason** | **string** | Indicates the reason for rejection. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
