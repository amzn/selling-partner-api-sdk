# # ShipmentItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asin** | **string** | The Amazon Standard Identification Number (ASIN) of the item. | [optional]
**seller_sku** | **string** | The seller SKU of the item. | [optional]
**order_item_id** | **string** | The Amazon-defined identifier for the order item. | [optional]
**title** | **string** | The name of the item. | [optional]
**quantity_ordered** | **float** | The number of items ordered. | [optional]
**item_price** | [**\OpenAPI\Client\Model\invoicing\Money**](Money.md) |  | [optional]
**shipping_price** | [**\OpenAPI\Client\Model\invoicing\Money**](Money.md) |  | [optional]
**gift_wrap_price** | [**\OpenAPI\Client\Model\invoicing\Money**](Money.md) |  | [optional]
**shipping_discount** | [**\OpenAPI\Client\Model\invoicing\Money**](Money.md) |  | [optional]
**promotion_discount** | [**\OpenAPI\Client\Model\invoicing\Money**](Money.md) |  | [optional]
**serial_numbers** | **string[]** | The list of serial numbers. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
