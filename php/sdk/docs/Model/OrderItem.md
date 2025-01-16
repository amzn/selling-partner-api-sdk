# # OrderItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_sequence_number** | **string** | Numbering of the item on the purchase order. The first item will be 1, the second 2, and so on. |
**amazon_product_identifier** | **string** | Amazon Standard Identification Number (ASIN) of an item. | [optional]
**vendor_product_identifier** | **string** | The vendor selected product identification of the item. | [optional]
**ordered_quantity** | [**\OpenAPI\Client\Model\vendor\orders\ItemQuantity**](ItemQuantity.md) |  |
**is_back_order_allowed** | **bool** | When true, we will accept backorder confirmations for this item. |
**net_cost** | [**\OpenAPI\Client\Model\vendor\orders\Money**](Money.md) |  | [optional]
**list_price** | [**\OpenAPI\Client\Model\vendor\orders\Money**](Money.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
