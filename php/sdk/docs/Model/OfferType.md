# # OfferType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offer_type** | [**\OpenAPI\Client\Model\pricingv0\OfferCustomerType**](OfferCustomerType.md) |  | [optional]
**buying_price** | [**\OpenAPI\Client\Model\pricingv0\PriceType**](PriceType.md) |  |
**regular_price** | [**\OpenAPI\Client\Model\pricingv0\MoneyType**](MoneyType.md) |  |
**business_price** | [**\OpenAPI\Client\Model\pricingv0\MoneyType**](MoneyType.md) |  | [optional]
**quantity_discount_prices** | [**\OpenAPI\Client\Model\pricingv0\QuantityDiscountPriceType[]**](QuantityDiscountPriceType.md) |  | [optional]
**fulfillment_channel** | **string** | The fulfillment channel for the offer listing. Possible values:  * Amazon - Fulfilled by Amazon. * Merchant - Fulfilled by the seller. |
**item_condition** | **string** | The item condition for the offer listing. Possible values: New, Used, Collectible, Refurbished, or Club. |
**item_sub_condition** | **string** | The item subcondition for the offer listing. Possible values: New, Mint, Very Good, Good, Acceptable, Poor, Club, OEM, Warranty, Refurbished Warranty, Refurbished, Open Box, or Other. |
**seller_sku** | **string** | The seller stock keeping unit (SKU) of the item. |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
