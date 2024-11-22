# CompetitiveSummaryRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asin** | **String** |  | 
**marketplaceId** | **String** |  | 
**includedData** | [**List&lt;CompetitiveSummaryIncludedData&gt;**](CompetitiveSummaryIncludedData.md) | The list of requested competitive pricing data for the product. | 
**lowestPricedOffersInputs** | [**List&lt;LowestPricedOffersInput&gt;**](LowestPricedOffersInput.md) | The list of &#x60;lowestPricedOffersInput&#x60; parameters that are used to build &#x60;lowestPricedOffers&#x60; in the response. This attribute is only valid if &#x60;lowestPricedOffers&#x60; is requested in &#x60;includedData&#x60; |  [optional]
**method** | [**HttpMethod**](HttpMethod.md) |  | 
**uri** | **String** |  | 
