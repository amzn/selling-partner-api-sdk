# # OrderAcknowledgementItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_sequence_number** | **string** | Line item sequence number for the item. | [optional]
**amazon_product_identifier** | **string** | Amazon Standard Identification Number (ASIN) of an item. | [optional]
**vendor_product_identifier** | **string** | The vendor selected product identification of the item. Should be the same as was sent in the purchase order. | [optional]
**ordered_quantity** | [**\OpenAPI\Client\Model\vendorOrders\ItemQuantity**](ItemQuantity.md) |  |
**net_cost** | [**\OpenAPI\Client\Model\vendorOrders\Money**](Money.md) |  | [optional]
**list_price** | [**\OpenAPI\Client\Model\vendorOrders\Money**](Money.md) |  | [optional]
**discount_multiplier** | **string** | The discount multiplier that should be applied to the price if a vendor sells books with a list price. This is a multiplier factor to arrive at a final discounted price. A multiplier of .90 would be the factor if a 10% discount is given. | [optional]
**item_acknowledgements** | [**\OpenAPI\Client\Model\vendorOrders\OrderItemAcknowledgement[]**](OrderItemAcknowledgement.md) | This is used to indicate acknowledged quantity. |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
