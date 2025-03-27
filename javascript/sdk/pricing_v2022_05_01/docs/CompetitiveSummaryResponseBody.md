# SellingPartnerApiForPricing.CompetitiveSummaryResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asin** | **String** | The ASIN of the item. | 
**marketplaceId** | **String** | A marketplace identifier. Specifies the marketplace for which data is returned. | 
**featuredBuyingOptions** | [**[FeaturedBuyingOption]**](FeaturedBuyingOption.md) | A list of featured buying options for the specified ASIN &#x60;marketplaceId&#x60; combination. | [optional] 
**lowestPricedOffers** | [**[LowestPricedOffer]**](LowestPricedOffer.md) | A list of lowest priced offers for the specified ASIN &#x60;marketplaceId&#x60; combination. | [optional] 
**referencePrices** | [**[ReferencePrice]**](ReferencePrice.md) | A list of reference prices for the specified ASIN &#x60;marketplaceId&#x60; combination. | [optional] 
**errors** | [**[Error]**](Error.md) | A list of error responses that are returned when a request is unsuccessful. | [optional] 


