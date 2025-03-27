# SellingPartnerApiForPricing.FeaturedBuyingOption

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buyingOptionType** | **String** | The buying option type for the featured offer. &#x60;buyingOptionType&#x60; represents the buying options that a customer receives on the detail page, such as &#x60;B2B&#x60;, &#x60;Fresh&#x60;, and &#x60;Subscribe n Save&#x60;. &#x60;buyingOptionType&#x60; currently supports &#x60;NEW&#x60; as a value. | 
**segmentedFeaturedOffers** | [**[SegmentedFeaturedOffer]**](SegmentedFeaturedOffer.md) | A list of segmented featured offers for the current buying option type. A segment can be considered as a group of regional contexts that all have the same featured offer. A regional context is a combination of factors such as customer type, region, or postal code and buying option. | 



## Enum: BuyingOptionTypeEnum


* `New` (value: `"New"`)




