# SellingPartnerApiForPricing.Offer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sellerId** | **String** | The seller identifier for the offer. | 
**condition** | [**Condition**](Condition.md) |  | 
**subCondition** | **String** | The item subcondition of the offer. | [optional] 
**fulfillmentType** | [**FulfillmentType**](FulfillmentType.md) |  | 
**listingPrice** | [**MoneyType**](MoneyType.md) |  | 
**shippingOptions** | [**[ShippingOption]**](ShippingOption.md) | A list of shipping options associated with this offer | [optional] 
**points** | [**Points**](Points.md) |  | [optional] 
**primeDetails** | [**PrimeDetails**](PrimeDetails.md) |  | [optional] 



## Enum: SubConditionEnum


* `New` (value: `"New"`)

* `Mint` (value: `"Mint"`)

* `VeryGood` (value: `"VeryGood"`)

* `Good` (value: `"Good"`)

* `Acceptable` (value: `"Acceptable"`)

* `Poor` (value: `"Poor"`)

* `Club` (value: `"Club"`)

* `OEM` (value: `"OEM"`)

* `Warranty` (value: `"Warranty"`)

* `RefurbishedWarranty` (value: `"RefurbishedWarranty"`)

* `Refurbished` (value: `"Refurbished"`)

* `OpenBox` (value: `"OpenBox"`)

* `Other` (value: `"Other"`)




