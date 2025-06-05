# software.amzn.spapi.Model.pricing.v0.OfferDetail
Schema for an individual offer. Object in `OfferDetailList`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MyOffer** | **bool** | When true, this is the seller&#39;s offer. | [optional] 
**OfferType** | **OfferCustomerType** |  | [optional] 
**SubCondition** | **string** | The subcondition of the item. Subcondition values: New, Mint, Very Good, Good, Acceptable, Poor, Club, OEM, Warranty, Refurbished Warranty, Refurbished, Open Box, or Other. | 
**SellerId** | **string** | The seller identifier for the offer. | [optional] 
**ConditionNotes** | **string** | Information about the condition of the item. | [optional] 
**SellerFeedbackRating** | [**SellerFeedbackType**](SellerFeedbackType.md) |  | [optional] 
**ShippingTime** | [**DetailedShippingTimeType**](DetailedShippingTimeType.md) |  | 
**ListingPrice** | [**MoneyType**](MoneyType.md) |  | 
**QuantityDiscountPrices** | [**List&lt;QuantityDiscountPriceType&gt;**](QuantityDiscountPriceType.md) | List of &#x60;QuantityDiscountPrice&#x60; that contains item&#39;s pricing information when buy in bulk. | [optional] 
**Points** | [**Points**](Points.md) |  | [optional] 
**Shipping** | [**MoneyType**](MoneyType.md) |  | 
**ShipsFrom** | [**ShipsFromType**](ShipsFromType.md) |  | [optional] 
**IsFulfilledByAmazon** | **bool** | When true, the offer is fulfilled by Amazon. | 
**PrimeInformation** | [**PrimeInformationType**](PrimeInformationType.md) |  | [optional] 
**IsBuyBoxWinner** | **bool** | When true, the offer is currently in the Buy Box. There can be up to two Buy Box winners at any time per ASIN, one that is eligible for Prime and one that is not eligible for Prime. | [optional] 
**IsFeaturedMerchant** | **bool** | When true, the seller of the item is eligible to win the Buy Box. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

