# SellingPartnerApiForPricing.OfferDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**myOffer** | **Boolean** | When true, this is the seller&#39;s offer. | [optional] 
**offerType** | [**OfferCustomerType**](OfferCustomerType.md) |  | [optional] 
**subCondition** | **String** | The subcondition of the item. Subcondition values: New, Mint, Very Good, Good, Acceptable, Poor, Club, OEM, Warranty, Refurbished Warranty, Refurbished, Open Box, or Other. | 
**sellerId** | **String** | The seller identifier for the offer. | [optional] 
**conditionNotes** | **String** | Information about the condition of the item. | [optional] 
**sellerFeedbackRating** | [**SellerFeedbackType**](SellerFeedbackType.md) |  | [optional] 
**shippingTime** | [**DetailedShippingTimeType**](DetailedShippingTimeType.md) |  | 
**listingPrice** | [**MoneyType**](MoneyType.md) |  | 
**quantityDiscountPrices** | [**[QuantityDiscountPriceType]**](QuantityDiscountPriceType.md) | List of &#x60;QuantityDiscountPrice&#x60; that contains item&#39;s pricing information when buy in bulk. | [optional] 
**points** | [**Points**](Points.md) |  | [optional] 
**shipping** | [**MoneyType**](MoneyType.md) |  | 
**shipsFrom** | [**ShipsFromType**](ShipsFromType.md) |  | [optional] 
**isFulfilledByAmazon** | **Boolean** | When true, the offer is fulfilled by Amazon. | 
**primeInformation** | [**PrimeInformationType**](PrimeInformationType.md) |  | [optional] 
**isBuyBoxWinner** | **Boolean** | When true, the offer is currently in the Buy Box. There can be up to two Buy Box winners at any time per ASIN, one that is eligible for Prime and one that is not eligible for Prime. | [optional] 
**isFeaturedMerchant** | **Boolean** | When true, the seller of the item is eligible to win the Buy Box. | [optional] 


