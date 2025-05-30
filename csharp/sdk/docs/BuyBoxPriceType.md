# software.amzn.spapi.Model.pricing.v0.BuyBoxPriceType
Schema for an individual buybox price.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Condition** | **string** | Indicates the condition of the item. For example: New, Used, Collectible, Refurbished, or Club. | 
**OfferType** | **OfferCustomerType** |  | [optional] 
**QuantityTier** | **int** | Indicates at what quantity this price becomes active. | [optional] 
**QuantityDiscountType** | **QuantityDiscountType** |  | [optional] 
**LandedPrice** | [**MoneyType**](MoneyType.md) |  | 
**ListingPrice** | [**MoneyType**](MoneyType.md) |  | 
**Shipping** | [**MoneyType**](MoneyType.md) |  | 
**Points** | [**Points**](Points.md) |  | [optional] 
**SellerId** | **string** | The seller identifier for the offer. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

