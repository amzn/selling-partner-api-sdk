# # CompetitiveSummaryResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asin** | **string** | The ASIN of the item. |
**marketplace_id** | **string** | A marketplace identifier. Specifies the marketplace for which data is returned. |
**featured_buying_options** | [**\OpenAPI\Client\Model\pricing\v2022_05_01\FeaturedBuyingOption[]**](FeaturedBuyingOption.md) | A list of featured buying options for the specified ASIN &#x60;marketplaceId&#x60; combination. | [optional]
**lowest_priced_offers** | [**\OpenAPI\Client\Model\pricing\v2022_05_01\LowestPricedOffer[]**](LowestPricedOffer.md) | A list of lowest priced offers for the specified ASIN &#x60;marketplaceId&#x60; combination. | [optional]
**reference_prices** | [**\OpenAPI\Client\Model\pricing\v2022_05_01\ReferencePrice[]**](ReferencePrice.md) | A list of reference prices for the specified ASIN &#x60;marketplaceId&#x60; combination. | [optional]
**errors** | [**\OpenAPI\Client\Model\pricing\v2022_05_01\Error[]**](Error.md) | A list of error responses that are returned when a request is unsuccessful. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
