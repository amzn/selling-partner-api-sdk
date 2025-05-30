# software.amzn.spapi.Model.pricing.v2022_05_01.CompetitiveSummaryRequest
An individual `competitiveSummary` request for an ASIN and `marketplaceId`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Asin** | **string** | The ASIN of the item. | 
**MarketplaceId** | **string** | The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). | 
**IncludedData** | [**List&lt;CompetitiveSummaryIncludedData&gt;**](CompetitiveSummaryIncludedData.md) | The list of requested competitive pricing data for the product. | 
**LowestPricedOffersInputs** | [**List&lt;LowestPricedOffersInput&gt;**](LowestPricedOffersInput.md) | The list of &#x60;lowestPricedOffersInput&#x60; parameters that are used to build &#x60;lowestPricedOffers&#x60; in the response. This attribute is only valid if &#x60;lowestPricedOffers&#x60; is requested in &#x60;includedData&#x60; | [optional] 
**Method** | **HttpMethod** |  | 
**Uri** | **string** | The URI associated with the individual APIs that are called as part of the batch request. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

