# software.amzn.spapi.Model.pricing.v0.Summary
Contains price information about the product, including the LowestPrices and BuyBoxPrices, the ListPrice, the SuggestedLowerPricePlusShipping, and NumberOfOffers and NumberOfBuyBoxEligibleOffers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TotalOfferCount** | **int** | The number of unique offers contained in NumberOfOffers. | 
**NumberOfOffers** | [**List&lt;OfferCountType&gt;**](OfferCountType.md) | A list that contains the total number of offers information for given conditions and fulfillment channels. | [optional] 
**LowestPrices** | [**List&lt;LowestPriceType&gt;**](LowestPriceType.md) | A list of the lowest prices. | [optional] 
**BuyBoxPrices** | [**List&lt;BuyBoxPriceType&gt;**](BuyBoxPriceType.md) | A list of the Buy Box prices. | [optional] 
**ListPrice** | [**MoneyType**](MoneyType.md) |  | [optional] 
**CompetitivePriceThreshold** | [**MoneyType**](MoneyType.md) |  | [optional] 
**SuggestedLowerPricePlusShipping** | [**MoneyType**](MoneyType.md) |  | [optional] 
**SalesRankings** | [**List&lt;SalesRankType&gt;**](SalesRankType.md) | A list of sales rank information for the item, by category. | [optional] 
**BuyBoxEligibleOffers** | [**List&lt;OfferCountType&gt;**](OfferCountType.md) | A list that contains the total number of offers that are eligible for the Buy Box for the given conditions and fulfillment channels. | [optional] 
**OffersAvailableTime** | **DateTime** | When the status is ActiveButTooSoonForProcessing, this is the time when the offers will be available for processing. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

