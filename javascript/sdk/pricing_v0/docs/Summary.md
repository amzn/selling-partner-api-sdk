# SellingPartnerApiForPricing.Summary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalOfferCount** | **Number** | The number of unique offers contained in NumberOfOffers. | 
**numberOfOffers** | [**[OfferCountType]**](OfferCountType.md) | A list that contains the total number of offers information for given conditions and fulfillment channels. | [optional] 
**lowestPrices** | [**[LowestPriceType]**](LowestPriceType.md) | A list of the lowest prices. | [optional] 
**buyBoxPrices** | [**[BuyBoxPriceType]**](BuyBoxPriceType.md) | A list of the Buy Box prices. | [optional] 
**listPrice** | [**MoneyType**](MoneyType.md) |  | [optional] 
**competitivePriceThreshold** | [**MoneyType**](MoneyType.md) |  | [optional] 
**suggestedLowerPricePlusShipping** | [**MoneyType**](MoneyType.md) |  | [optional] 
**salesRankings** | [**[SalesRankType]**](SalesRankType.md) | A list of sales rank information for the item, by category. | [optional] 
**buyBoxEligibleOffers** | [**[OfferCountType]**](OfferCountType.md) | A list that contains the total number of offers that are eligible for the Buy Box for the given conditions and fulfillment channels. | [optional] 
**offersAvailableTime** | **Date** | When the status is ActiveButTooSoonForProcessing, this is the time when the offers will be available for processing. | [optional] 


