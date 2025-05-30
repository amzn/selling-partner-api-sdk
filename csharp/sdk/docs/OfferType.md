# software.amzn.spapi.Model.pricing.v0.OfferType
Schema for an individual offer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarOfferType** | **OfferCustomerType** |  | [optional] 
**BuyingPrice** | [**PriceType**](PriceType.md) |  | 
**RegularPrice** | [**MoneyType**](MoneyType.md) |  | 
**BusinessPrice** | [**MoneyType**](MoneyType.md) |  | [optional] 
**QuantityDiscountPrices** | [**List&lt;QuantityDiscountPriceType&gt;**](QuantityDiscountPriceType.md) | List of &#x60;QuantityDiscountPrice&#x60; that contains item&#39;s pricing information when buy in bulk. | [optional] 
**FulfillmentChannel** | **string** | The fulfillment channel for the offer listing. Possible values:  * Amazon - Fulfilled by Amazon. * Merchant - Fulfilled by the seller. | 
**ItemCondition** | **string** | The item condition for the offer listing. Possible values: New, Used, Collectible, Refurbished, or Club. | 
**ItemSubCondition** | **string** | The item subcondition for the offer listing. Possible values: New, Mint, Very Good, Good, Acceptable, Poor, Club, OEM, Warranty, Refurbished Warranty, Refurbished, Open Box, or Other. | 
**SellerSKU** | **string** | The seller stock keeping unit (SKU) of the item. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

