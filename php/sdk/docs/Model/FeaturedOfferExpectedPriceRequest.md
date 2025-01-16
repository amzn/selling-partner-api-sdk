# # FeaturedOfferExpectedPriceRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **string** | The URI associated with an individual request within a batch. For &#x60;FeaturedOfferExpectedPrice&#x60;, this is &#x60;/products/pricing/2022-05-01/offer/featuredOfferExpectedPrice&#x60;. |
**method** | [**\OpenAPI\Client\Model\pricing\v2022-05-01\HttpMethod**](HttpMethod.md) |  |
**body** | **array<string,object>** | Additional HTTP body information that is associated with an individual request within a batch. | [optional]
**headers** | **array<string,string>** | A mapping of additional HTTP headers to send or receive for an individual request within a batch. | [optional]
**marketplace_id** | **string** | A marketplace identifier. Specifies the marketplace for which data is returned. |
**sku** | **string** | The seller SKU of the item. |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
