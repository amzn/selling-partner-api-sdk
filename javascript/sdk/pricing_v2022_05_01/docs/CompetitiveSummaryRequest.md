# SellingPartnerApiForPricing.CompetitiveSummaryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asin** | **String** | The ASIN of the item. | 
**marketplaceId** | **String** | A marketplace identifier. Specifies the marketplace for which data is returned. | 
**includedData** | [**[CompetitiveSummaryIncludedData]**](CompetitiveSummaryIncludedData.md) | The list of requested competitive pricing data for the product. | 
**lowestPricedOffersInputs** | [**[LowestPricedOffersInput]**](LowestPricedOffersInput.md) | The list of &#x60;lowestPricedOffersInput&#x60; parameters that are used to build &#x60;lowestPricedOffers&#x60; in the response. This attribute is only valid if &#x60;lowestPricedOffers&#x60; is requested in &#x60;includedData&#x60; | [optional] 
**method** | [**HttpMethod**](HttpMethod.md) |  | 
**uri** | **String** | The URI associated with the individual APIs that are called as part of the batch request. | 


