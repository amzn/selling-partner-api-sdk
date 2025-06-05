# software.amzn.spapi.Model.pricing.v0.LowestPriceType
Schema for an individual lowest price.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Condition** | **string** | Indicates the condition of the item. For example: New, Used, Collectible, Refurbished, or Club. | 
**FulfillmentChannel** | **string** | Indicates whether the item is fulfilled by Amazon or by the seller. | 
**OfferType** | **OfferCustomerType** |  | [optional] 
**QuantityTier** | **int** | Indicates at what quantity this price becomes active. | [optional] 
**QuantityDiscountType** | **QuantityDiscountType** |  | [optional] 
**LandedPrice** | [**MoneyType**](MoneyType.md) |  | [optional] 
**ListingPrice** | [**MoneyType**](MoneyType.md) |  | 
**Shipping** | [**MoneyType**](MoneyType.md) |  | [optional] 
**Points** | [**Points**](Points.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

