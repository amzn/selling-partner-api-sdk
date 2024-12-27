# # OrderStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**purchase_order_number** | **string** | The buyer&#39;s purchase order number for this order. Formatting Notes: 8-character alpha-numeric code. |
**purchase_order_status** | **string** | The status of the buyer&#39;s purchase order for this order. |
**purchase_order_date** | **\DateTime** | The date the purchase order was placed. Must be in ISO-8601 date/time format. |
**last_updated_date** | **\DateTime** | The date when the purchase order was last updated. Must be in ISO-8601 date/time format. | [optional]
**selling_party** | [**\OpenAPI\Client\Model\vendor.orders\PartyIdentification**](PartyIdentification.md) |  |
**ship_to_party** | [**\OpenAPI\Client\Model\vendor.orders\PartyIdentification**](PartyIdentification.md) |  |
**item_status** | [**\OpenAPI\Client\Model\vendor.orders\OrderItemStatus[]**](OrderItemStatus.md) | Detailed description of items order status. |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
