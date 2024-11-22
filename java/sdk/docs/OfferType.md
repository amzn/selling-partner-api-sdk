# OfferType

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offerType** | [**OfferCustomerType**](OfferCustomerType.md) |  |  [optional]
**buyingPrice** | [**PriceType**](PriceType.md) |  | 
**regularPrice** | [**MoneyType**](MoneyType.md) |  | 
**businessPrice** | [**MoneyType**](MoneyType.md) |  |  [optional]
**quantityDiscountPrices** | [**List&lt;QuantityDiscountPriceType&gt;**](QuantityDiscountPriceType.md) |  |  [optional]
**fulfillmentChannel** | **String** | The fulfillment channel for the offer listing. Possible values:  * Amazon - Fulfilled by Amazon. * Merchant - Fulfilled by the seller. | 
**itemCondition** | **String** | The item condition for the offer listing. Possible values: New, Used, Collectible, Refurbished, or Club. | 
**itemSubCondition** | **String** | The item subcondition for the offer listing. Possible values: New, Mint, Very Good, Good, Acceptable, Poor, Club, OEM, Warranty, Refurbished Warranty, Refurbished, Open Box, or Other. | 
**sellerSKU** | **String** | The seller stock keeping unit (SKU) of the item. | 
