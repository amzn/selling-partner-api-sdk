# SellingPartnerApiForPricing.ItemOffersRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **String** | The resource path of the operation you are calling in batch without any query parameters.  If you are calling &#x60;getItemOffersBatch&#x60;, supply the path of &#x60;getItemOffers&#x60;.  **Example:** &#x60;/products/pricing/v0/items/B000P6Q7MY/offers&#x60;  If you are calling &#x60;getListingOffersBatch&#x60;, supply the path of &#x60;getListingOffers&#x60;.  **Example:** &#x60;/products/pricing/v0/listings/B000P6Q7MY/offers&#x60; | 
**method** | [**HttpMethod**](HttpMethod.md) |  | 
**headers** | **{String: String}** | A mapping of additional HTTP headers to send/receive for the individual batch request. | [optional] 
**marketplaceId** | **String** | A marketplace identifier. Specifies the marketplace for which prices are returned. | 
**itemCondition** | [**ItemCondition**](ItemCondition.md) |  | 
**customerType** | [**CustomerType**](CustomerType.md) |  | [optional] 


