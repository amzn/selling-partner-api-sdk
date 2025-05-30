# software.amzn.spapi.Model.pricing.v2022_05_01.FeaturedOfferExpectedPriceResult
The FOEP result data for the requested offer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FeaturedOfferExpectedPrice** | [**FeaturedOfferExpectedPrice**](FeaturedOfferExpectedPrice.md) |  | [optional] 
**ResultStatus** | **string** | The status of the FOEP computation. Possible values include &#x60;VALID_FOEP&#x60;, &#x60;NO_COMPETING_OFFER&#x60;, &#x60;OFFER_NOT_ELIGIBLE&#x60;, &#x60;OFFER_NOT_FOUND&#x60;, and &#x60;ASIN_NOT_ELIGIBLE&#x60;. Additional values might be added in the future. | 
**CompetingFeaturedOffer** | [**FeaturedOffer**](FeaturedOffer.md) |  | [optional] 
**CurrentFeaturedOffer** | [**FeaturedOffer**](FeaturedOffer.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

