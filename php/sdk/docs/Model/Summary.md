# # Summary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_offer_count** | **int** | The number of unique offers contained in NumberOfOffers. |
**number_of_offers** | [**\OpenAPI\Client\Model\pricingv0\OfferCountType[]**](OfferCountType.md) |  | [optional]
**lowest_prices** | [**\OpenAPI\Client\Model\pricingv0\LowestPriceType[]**](LowestPriceType.md) |  | [optional]
**buy_box_prices** | [**\OpenAPI\Client\Model\pricingv0\BuyBoxPriceType[]**](BuyBoxPriceType.md) |  | [optional]
**list_price** | [**\OpenAPI\Client\Model\pricingv0\MoneyType**](MoneyType.md) |  | [optional]
**competitive_price_threshold** | [**\OpenAPI\Client\Model\pricingv0\MoneyType**](MoneyType.md) |  | [optional]
**suggested_lower_price_plus_shipping** | [**\OpenAPI\Client\Model\pricingv0\MoneyType**](MoneyType.md) |  | [optional]
**sales_rankings** | [**\OpenAPI\Client\Model\pricingv0\SalesRankType[]**](SalesRankType.md) | A list of sales rank information for the item, by category. | [optional]
**buy_box_eligible_offers** | [**\OpenAPI\Client\Model\pricingv0\OfferCountType[]**](OfferCountType.md) |  | [optional]
**offers_available_time** | **\DateTime** | When the status is ActiveButTooSoonForProcessing, this is the time when the offers will be available for processing. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
