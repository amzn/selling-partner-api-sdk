# SellingPartnerApiForRetailProcurementOrders.Money

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currencyCode** | **String** | Three digit currency code in ISO 4217 format. String of length 3. | [optional] 
**amount** | **String** | A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. &lt;br&gt;**Pattern** : &#x60;^-?(0|([1-9]\\d*))(\\.\\d+)?([eE][+-]?\\d+)?$&#x60;. | [optional] 
**unitOfMeasure** | **String** | The unit of measure for prices of items sold by weight. If this field is absent, the item is sold by eaches. | [optional] 



## Enum: UnitOfMeasureEnum


* `POUNDS` (value: `"POUNDS"`)

* `OUNCES` (value: `"OUNCES"`)

* `GRAMS` (value: `"GRAMS"`)

* `KILOGRAMS` (value: `"KILOGRAMS"`)




