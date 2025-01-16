# # ListingOffersRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **string** | The resource path of the operation you are calling in batch without any query parameters.  If you are calling &#x60;getItemOffersBatch&#x60;, supply the path of &#x60;getItemOffers&#x60;.  **Example:** &#x60;/products/pricing/v0/items/B000P6Q7MY/offers&#x60;  If you are calling &#x60;getListingOffersBatch&#x60;, supply the path of &#x60;getListingOffers&#x60;.  **Example:** &#x60;/products/pricing/v0/listings/B000P6Q7MY/offers&#x60; |
**method** | [**\OpenAPI\Client\Model\pricing\v0\HttpMethod**](HttpMethod.md) |  |
**headers** | **array<string,string>** | A mapping of additional HTTP headers to send/receive for the individual batch request. | [optional]
**marketplace_id** | **string** | A marketplace identifier. Specifies the marketplace for which prices are returned. |
**item_condition** | [**\OpenAPI\Client\Model\pricing\v0\ItemCondition**](ItemCondition.md) |  |
**customer_type** | [**\OpenAPI\Client\Model\pricing\v0\CustomerType**](CustomerType.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
