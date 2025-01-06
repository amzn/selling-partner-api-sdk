# # OrderItemStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_sequence_number** | **string** | Numbering of the item on the purchase order. The first item will be 1, the second 2, and so on. |
**buyer_product_identifier** | **string** | Buyer&#39;s Standard Identification Number (ASIN) of an item. | [optional]
**vendor_product_identifier** | **string** | The vendor selected product identification of the item. | [optional]
**net_cost** | [**\OpenAPI\Client\Model\vendorOrders\Money**](Money.md) |  | [optional]
**list_price** | [**\OpenAPI\Client\Model\vendorOrders\Money**](Money.md) |  | [optional]
**ordered_quantity** | [**\OpenAPI\Client\Model\vendorOrders\OrderItemStatusOrderedQuantity**](OrderItemStatusOrderedQuantity.md) |  | [optional]
**acknowledgement_status** | [**\OpenAPI\Client\Model\vendorOrders\OrderItemStatusAcknowledgementStatus**](OrderItemStatusAcknowledgementStatus.md) |  | [optional]
**receiving_status** | [**\OpenAPI\Client\Model\vendorOrders\OrderItemStatusReceivingStatus**](OrderItemStatusReceivingStatus.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
