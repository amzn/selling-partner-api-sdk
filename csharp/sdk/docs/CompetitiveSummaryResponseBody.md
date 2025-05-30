# software.amzn.spapi.Model.pricing.v2022_05_01.CompetitiveSummaryResponseBody
The `competitiveSummaryResponse` body for a requested ASIN and `marketplaceId`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Asin** | **string** | The ASIN of the item. | 
**MarketplaceId** | **string** | The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). | 
**FeaturedBuyingOptions** | [**List&lt;FeaturedBuyingOption&gt;**](FeaturedBuyingOption.md) | A list of featured buying options for the specified ASIN &#x60;marketplaceId&#x60; combination. | [optional] 
**LowestPricedOffers** | [**List&lt;LowestPricedOffer&gt;**](LowestPricedOffer.md) | A list of lowest priced offers for the specified ASIN &#x60;marketplaceId&#x60; combination. | [optional] 
**ReferencePrices** | [**List&lt;ReferencePrice&gt;**](ReferencePrice.md) | A list of reference prices for the specified ASIN &#x60;marketplaceId&#x60; combination. | [optional] 
**Errors** | [**List&lt;Error&gt;**](Error.md) | A list of error responses that are returned when a request is unsuccessful. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

