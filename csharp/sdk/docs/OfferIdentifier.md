# software.amzn.spapi.Model.pricing.v2022_05_01.OfferIdentifier
Identifies an offer from a particular seller for a specified ASIN.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MarketplaceId** | **string** | The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). | 
**SellerId** | **string** | The seller identifier for the offer. | [optional] 
**Sku** | **string** | The seller SKU of the item. This will only be present for the target offer, which belongs to the requesting seller. | [optional] 
**Asin** | **string** | The ASIN of the item. | 
**FulfillmentType** | **FulfillmentType** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

