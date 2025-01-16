# # CompetitiveSummaryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asin** | **string** | The ASIN of the item. |
**marketplace_id** | **string** | A marketplace identifier. Specifies the marketplace for which data is returned. |
**included_data** | [**\OpenAPI\Client\Model\pricing\v2022-05-01\CompetitiveSummaryIncludedData[]**](CompetitiveSummaryIncludedData.md) | The list of requested competitive pricing data for the product. |
**lowest_priced_offers_inputs** | [**\OpenAPI\Client\Model\pricing\v2022-05-01\LowestPricedOffersInput[]**](LowestPricedOffersInput.md) | The list of &#x60;lowestPricedOffersInput&#x60; parameters that are used to build &#x60;lowestPricedOffers&#x60; in the response. This attribute is only valid if &#x60;lowestPricedOffers&#x60; is requested in &#x60;includedData&#x60; | [optional]
**method** | [**\OpenAPI\Client\Model\pricing\v2022-05-01\HttpMethod**](HttpMethod.md) |  |
**uri** | **string** | The URI associated with the individual APIs that are called as part of the batch request. |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
