# # OfferDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**my_offer** | **bool** | When true, this is the seller&#39;s offer. | [optional]
**offer_type** | [**\OpenAPI\Client\Model\pricingv0\OfferCustomerType**](OfferCustomerType.md) |  | [optional]
**sub_condition** | **string** | The subcondition of the item. Subcondition values: New, Mint, Very Good, Good, Acceptable, Poor, Club, OEM, Warranty, Refurbished Warranty, Refurbished, Open Box, or Other. |
**seller_id** | **string** | The seller identifier for the offer. | [optional]
**condition_notes** | **string** | Information about the condition of the item. | [optional]
**seller_feedback_rating** | [**\OpenAPI\Client\Model\pricingv0\SellerFeedbackType**](SellerFeedbackType.md) |  | [optional]
**shipping_time** | [**\OpenAPI\Client\Model\pricingv0\DetailedShippingTimeType**](DetailedShippingTimeType.md) |  |
**listing_price** | [**\OpenAPI\Client\Model\pricingv0\MoneyType**](MoneyType.md) |  |
**quantity_discount_prices** | [**\OpenAPI\Client\Model\pricingv0\QuantityDiscountPriceType[]**](QuantityDiscountPriceType.md) |  | [optional]
**points** | [**\OpenAPI\Client\Model\pricingv0\Points**](Points.md) |  | [optional]
**shipping** | [**\OpenAPI\Client\Model\pricingv0\MoneyType**](MoneyType.md) |  |
**ships_from** | [**\OpenAPI\Client\Model\pricingv0\ShipsFromType**](ShipsFromType.md) |  | [optional]
**is_fulfilled_by_amazon** | **bool** | When true, the offer is fulfilled by Amazon. |
**prime_information** | [**\OpenAPI\Client\Model\pricingv0\PrimeInformationType**](PrimeInformationType.md) |  | [optional]
**is_buy_box_winner** | **bool** | When true, the offer is currently in the Buy Box. There can be up to two Buy Box winners at any time per ASIN, one that is eligible for Prime and one that is not eligible for Prime. | [optional]
**is_featured_merchant** | **bool** | When true, the seller of the item is eligible to win the Buy Box. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
