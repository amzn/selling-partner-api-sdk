# # OrderItemBuyerInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_item_id** | **string** | An Amazon-defined order item identifier. |
**buyer_customized_info** | [**\OpenAPI\Client\models\orders\BuyerCustomizedInfoDetail**](BuyerCustomizedInfoDetail.md) |  | [optional]
**gift_wrap_price** | [**\OpenAPI\Client\models\orders\Money**](Money.md) |  | [optional]
**gift_wrap_tax** | [**\OpenAPI\Client\models\orders\Money**](Money.md) |  | [optional]
**gift_message_text** | **string** | A gift message provided by the buyer.  **Note**: This attribute is only available for MFN (fulfilled by seller) orders. | [optional]
**gift_wrap_level** | **string** | The gift wrap level specified by the buyer. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
