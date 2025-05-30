# software.amzn.spapi.Model.pricing.v0.ListingOffersRequest
List of request parameters that can be accepted by `ListingOffersRequest` operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uri** | **string** | The resource path of the operation you are calling in batch without any query parameters.  If you are calling &#x60;getItemOffersBatch&#x60;, supply the path of &#x60;getItemOffers&#x60;.  **Example:** &#x60;/products/pricing/v0/items/B000P6Q7MY/offers&#x60;  If you are calling &#x60;getListingOffersBatch&#x60;, supply the path of &#x60;getListingOffers&#x60;.  **Example:** &#x60;/products/pricing/v0/listings/B000P6Q7MY/offers&#x60; | 
**Method** | **HttpMethod** |  | 
**Headers** | **Dictionary&lt;string, string&gt;** | A mapping of additional HTTP headers to send/receive for the individual batch request. | [optional] 
**MarketplaceId** | **string** | A marketplace identifier. Specifies the marketplace for which prices are returned. | 
**ItemCondition** | **ItemCondition** |  | 
**CustomerType** | **CustomerType** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

