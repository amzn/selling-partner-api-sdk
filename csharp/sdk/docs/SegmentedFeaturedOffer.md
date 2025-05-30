# software.amzn.spapi.Model.pricing.v2022_05_01.SegmentedFeaturedOffer
A product offer with segment information indicating where it's featured.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SellerId** | **string** | The seller identifier for the offer. | 
**Condition** | **Condition** |  | 
**SubCondition** | **string** | The item subcondition of the offer. | [optional] 
**FulfillmentType** | **FulfillmentType** |  | 
**ListingPrice** | [**MoneyType**](MoneyType.md) |  | 
**ShippingOptions** | [**List&lt;ShippingOption&gt;**](ShippingOption.md) | A list of shipping options associated with this offer | [optional] 
**Points** | [**Points**](Points.md) |  | [optional] 
**PrimeDetails** | [**PrimeDetails**](PrimeDetails.md) |  | [optional] 
**FeaturedOfferSegments** | [**List&lt;FeaturedOfferSegment&gt;**](FeaturedOfferSegment.md) | The list of segment information in which the offer is featured. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

