# SellingPartnerApiForPricing.FeaturedOfferExpectedPriceRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **String** | The URI associated with an individual request within a batch. For &#x60;FeaturedOfferExpectedPrice&#x60;, this is &#x60;/products/pricing/2022-05-01/offer/featuredOfferExpectedPrice&#x60;. | 
**method** | [**HttpMethod**](HttpMethod.md) |  | 
**body** | **{String: Object}** | Additional HTTP body information that is associated with an individual request within a batch. | [optional] 
**headers** | **{String: String}** | A mapping of additional HTTP headers to send or receive for an individual request within a batch. | [optional] 
**marketplaceId** | **String** | A marketplace identifier. Specifies the marketplace for which data is returned. | 
**sku** | **String** | The seller SKU of the item. | 
**segment** | [**Segment**](Segment.md) |  | [optional] 


